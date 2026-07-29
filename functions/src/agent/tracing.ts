/**
 * LangSmith によるエージェント妥当性検証用のトレーシング。
 * 会話本文が LangSmith へ送信されるため dev 環境のみで有効化する
 * （LANGSMITH_TRACING=true かつ LANGSMITH_API_KEY 設定時。本番では無効のまま）。
 * AI SDK の generateText を wrapAISDK でラップし、ツール呼び出し・
 * トークン使用量・レイテンシをターン単位で記録する。
 */
import * as ai from 'ai';
import { Client } from 'langsmith';
import { wrapAISDK } from 'langsmith/experimental/vercel';
import type { Env } from '../types';

export type GenerateTextFn = typeof ai.generateText;

export interface AgentLLMRuntime {
  generateText: GenerateTextFn;
  /** 溜まったトレースの送信完了を待つ。Worker では ctx.waitUntil に渡すこと */
  flush: () => Promise<void>;
}

export const resolveAgentLLMRuntime = (env: Env): AgentLLMRuntime => {
  if (env.LANGSMITH_TRACING !== 'true' || !env.LANGSMITH_API_KEY) {
    return { generateText: ai.generateText, flush: async () => {} };
  }
  const client = new Client({ apiKey: env.LANGSMITH_API_KEY });
  const { generateText } = wrapAISDK(ai, { client, name: 'agent-chat' });
  return {
    generateText: generateText as GenerateTextFn,
    flush: async () => {
      try {
        await client.awaitPendingTraceBatches();
      } catch (e) {
        console.warn('agent tracing: failed to flush LangSmith traces', e);
      }
    },
  };
};
