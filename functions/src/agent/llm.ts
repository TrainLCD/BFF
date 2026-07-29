/**
 * 対話本体の LLM プロバイダ解決。
 * AGENT_MODEL（"anthropic:<model>" | "openai:<model>"）でモデルを切り替え、
 * AI_GATEWAY_BASE_URL が設定されていれば Cloudflare AI Gateway を経由させる
 * （ログ・コスト集計・レート制限を Cloudflare 側に集約）。
 */
import { createAnthropic } from '@ai-sdk/anthropic';
import { createOpenAI } from '@ai-sdk/openai';
import type { LanguageModel } from 'ai';
import type { Env } from '../types';

// AI Gateway 経由時も会話本文をゲートウェイのログに保存させない（設計: プライバシー）
const GATEWAY_HEADERS = { 'cf-aig-collect-log-payload': 'false' } as const;

/** AGENT_MODEL の指定から AI SDK のモデルを生成する。 */
export const resolveAgentModel = (env: Env): LanguageModel => {
  const spec = env.AGENT_MODEL ?? '';
  const sep = spec.indexOf(':');
  const provider = sep === -1 ? '' : spec.slice(0, sep);
  const modelId = spec.slice(sep + 1);
  // 末尾スラッシュの揺れを吸収。空文字なら Gateway を使わず各社 API 直行
  const gateway = env.AI_GATEWAY_BASE_URL?.replace(/\/+$/, '') || undefined;

  switch (provider) {
    case 'anthropic': {
      if (!env.ANTHROPIC_API_KEY) {
        throw new Error('ANTHROPIC_API_KEY is not configured');
      }
      const anthropic = createAnthropic({
        apiKey: env.ANTHROPIC_API_KEY,
        ...(gateway
          ? {
              baseURL: `${gateway}/anthropic/v1`,
              headers: { ...GATEWAY_HEADERS },
            }
          : {}),
      });
      return anthropic(modelId);
    }
    case 'openai': {
      if (!env.OPENAI_API_KEY) {
        throw new Error('OPENAI_API_KEY is not configured');
      }
      const openai = createOpenAI({
        apiKey: env.OPENAI_API_KEY,
        ...(gateway
          ? { baseURL: `${gateway}/openai`, headers: { ...GATEWAY_HEADERS } }
          : {}),
      });
      return openai(modelId);
    }
    default:
      throw new Error(
        `unsupported AGENT_MODEL: "${spec}" (expected "anthropic:<id>" or "openai:<id>")`
      );
  }
};
