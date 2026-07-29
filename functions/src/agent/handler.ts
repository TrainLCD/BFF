/**
 * POST /agent/chat — AI エージェント本体（callable 互換）。
 * 処理順: JWT 検証 → 入力検証 → キルスイッチ → レート制限 → トピックゲート →
 * tool use ループ（AI SDK・最大 3 イテレーション） → 提案駅のサーバ側検証。
 * サーバはステートレスで、会話履歴は毎回クライアントから全量を受け取る。
 */

import type { LanguageModel } from 'ai';
import { Output, stepCountIs } from 'ai';
import { verifySessionToken } from '../lib/auth/session';
import {
  CallableError,
  callableSuccess,
  parseCallableData,
} from '../lib/callable';
import type { Env } from '../types';
import { classifyTopic } from './gate';
import { resolveAgentModel } from './llm';
import { buildContextMessage, buildSystemPrompt, loadAgentFaq } from './prompt';
import {
  type AgentChatResult,
  type AgentOutput,
  agentOutputSchema,
  type ChatMessage,
  type StationSuggestion,
} from './schema';
import {
  createStationSearchTool,
  fetchStationByGroupId,
  MAX_TOOL_CALLS_PER_TURN,
  searchStationsByName,
} from './tools';
import {
  type AgentLLMRuntime,
  type GenerateTextFn,
  resolveAgentLLMRuntime,
} from './tracing';
import { parseChatRequest, sanitizeSuggestions } from './validate';

/** リクエスト全体の期限（クライアントの 30 秒より短くし、サーバが先に確定応答を返す） */
const TOTAL_TIMEOUT_MS = 25_000;
/** LLM API 1 呼び出しの期限 */
const LLM_CALL_TIMEOUT_MS = 15_000;
/** tool use ループのイテレーション上限（＋1 ステップで最終応答を生成させる） */
const MAX_TOOL_ITERATIONS = 3;
/** 出力トークン上限 */
const MAX_OUTPUT_TOKENS = 1024;
/** レート制限カウンタの TTL（日付跨ぎの猶予込みで 25 時間） */
const RATE_LIMIT_TTL_SECONDS = 25 * 60 * 60;

/** トピックゲートで謝絶したときの定型文 */
const REFUSAL_REPLY: Record<'ja' | 'en', string> = {
  ja: '申し訳ありません。行き先のご相談と TrainLCD の使い方に関するご質問のみお手伝いできます。',
  en: 'Sorry, I can only help with finding destinations and questions about how to use TrainLCD.',
};

/** モデルが応答文を返せなかったときのフォールバック */
const FALLBACK_REPLY: Record<'ja' | 'en', string> = {
  ja: '申し訳ありません。うまく応答できませんでした。もう一度お試しください。',
  en: 'Sorry, I could not generate a response. Please try again.',
};

/**
 * キルスイッチ: /config/remote と同じ KV（config:remote）の ai_agent_enabled を
 * サーバ側でも強制する。改造クライアントがフラグ配信を無視しても API 側で止まる。
 */
const ensureAgentEnabled = async (env: Env): Promise<void> => {
  const stored = await env.CONFIG_KV.get<Record<string, unknown>>(
    'config:remote',
    'json'
  ).catch(() => null);
  if (stored?.ai_agent_enabled !== true) {
    throw new CallableError('unavailable', 'AI agent is currently disabled');
  }
};

/** installId 単位の日次レート制限（KV カウンタ。結果整合だが PoC には十分）。 */
const enforceDailyLimit = async (
  env: Env,
  installId: string
): Promise<void> => {
  const limit = Number(env.AGENT_DAILY_TURN_LIMIT) || 30;
  const day = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  const key = `agent-rl:${installId}:${day}`;
  const current = Number(await env.STATE_KV.get(key)) || 0;
  if (current >= limit) {
    throw new CallableError(
      'resource-exhausted',
      'Daily agent turn limit reached'
    );
  }
  await env.STATE_KV.put(key, String(current + 1), {
    expirationTtl: RATE_LIMIT_TTL_SECONDS,
  });
};

export interface AgentTurnParams {
  generateText: GenerateTextFn;
  model: LanguageModel;
  systemPrompt: string;
  contextNote: string;
  messages: readonly ChatMessage[];
  locale: 'ja' | 'en';
  searchStations: (name: string) => Promise<StationSuggestion[]>;
  signal?: AbortSignal;
}

/**
 * 1 ターン分のエージェント処理（テスト可能な単位）。
 * AI SDK の tool use ループで実在確認しつつ、最終応答は構造化出力で受け取り、
 * suggestions をツール結果と突合してから返す。
 */
export const runAgentTurn = async (
  params: AgentTurnParams
): Promise<AgentChatResult> => {
  const verified = new Map<number, StationSuggestion>();
  const budget = { remaining: MAX_TOOL_CALLS_PER_TURN };

  const result = await params.generateText({
    model: params.model,
    // システムプロンプト（不変）を先頭に置き、末尾にキャッシュ境界を張る。
    // locale・現在駅などの可変要素は必ずその後ろに置く（プロンプトキャッシュ設計）
    messages: [
      {
        role: 'system',
        content: params.systemPrompt,
        providerOptions: { anthropic: { cacheControl: { type: 'ephemeral' } } },
      },
      { role: 'system', content: params.contextNote },
      ...params.messages.map((m) => ({ role: m.role, content: m.content })),
    ],
    allowSystemInMessages: true,
    tools: {
      search_stations_by_name: createStationSearchTool({
        search: params.searchStations,
        verified,
        budget,
      }),
    },
    stopWhen: stepCountIs(MAX_TOOL_ITERATIONS + 1),
    // イテレーション上限に達したらツールを外し、その時点の結果で応答を生成させる
    prepareStep: ({ stepNumber }) =>
      stepNumber >= MAX_TOOL_ITERATIONS ? { activeTools: [] } : undefined,
    output: Output.object({ schema: agentOutputSchema }),
    timeout: { stepMs: LLM_CALL_TIMEOUT_MS },
    abortSignal: params.signal,
    // LLM 呼び出しはコスト重複を避けるため自動再試行しない（設計値）
    maxRetries: 0,
    maxOutputTokens: MAX_OUTPUT_TOKENS,
  });

  // 構造化出力の取り出しに失敗しても、テキストがあればそれを応答として救済する
  let output: AgentOutput;
  try {
    output = result.output;
  } catch {
    output = { reply: result.text ?? '', suggestions: [] };
  }

  return {
    reply: output.reply.trim() || FALLBACK_REPLY[params.locale],
    suggestions: sanitizeSuggestions(output.suggestions ?? [], verified),
    refused: false,
  };
};

export const handleAgentChat = async (
  req: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> => {
  // リクエスト全体の期限はハンドラ先頭から計測する
  // （JWT 検証・KV 読み書き・トピックゲートの Workers AI 呼び出しも予算に含める）
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TOTAL_TIMEOUT_MS);
  let runtime: AgentLLMRuntime | undefined;
  try {
    runtime = resolveAgentLLMRuntime(env);

    const installId = await verifySessionToken(
      env,
      req.headers.get('Authorization')
    );
    const chatReq = parseChatRequest(await parseCallableData(req));

    await ensureAgentEnabled(env);
    await enforceDailyLimit(env, installId);

    // 謝絶リクエストは本体 LLM を一切呼ばない（トークン浪費の防止）
    const topic = await classifyTopic(env, chatReq.messages, controller.signal);
    if (topic === 'off_topic') {
      const refused: AgentChatResult = {
        reply: REFUSAL_REPLY[chatReq.locale],
        suggestions: [],
        refused: true,
      };
      return callableSuccess(refused);
    }

    // 現在駅の解決は FAQ ロードと並行。失敗しても ID フォールバックで続行する
    const [faq, currentStation] = await Promise.all([
      loadAgentFaq(env),
      chatReq.currentStationGroupId === undefined
        ? Promise.resolve(null)
        : fetchStationByGroupId(
            env,
            chatReq.currentStationGroupId,
            controller.signal
          ).catch((e) => {
            console.error('agent: failed to resolve current station', e);
            return null;
          }),
    ]);
    const result = await runAgentTurn({
      generateText: runtime.generateText,
      model: resolveAgentModel(env),
      systemPrompt: buildSystemPrompt(faq),
      contextNote: buildContextMessage(
        chatReq.locale,
        currentStation,
        chatReq.currentStationGroupId
      ),
      messages: chatReq.messages,
      locale: chatReq.locale,
      searchStations: (name) =>
        searchStationsByName(
          env,
          name,
          chatReq.currentStationGroupId,
          controller.signal
        ),
      signal: controller.signal,
    });
    return callableSuccess(result);
  } catch (e) {
    // 期限超過はキャンセルを下流へ伝播済み。クライアントには 504 で確定応答を返す
    if (controller.signal.aborted) {
      throw new CallableError('deadline-exceeded', 'Agent request timed out');
    }
    throw e;
  } finally {
    clearTimeout(timer);
    // dev 環境のみ: LangSmith トレース送信をレスポンス返却後に完了させる
    if (runtime) {
      ctx.waitUntil(runtime.flush());
    }
  }
};
