/**
 * runAgentTurn のテスト — LLM クライアント（generateText）をモックし、
 * ツール結果突合・件数切り詰め・空結果時の挙動を検証する（設計のテスト戦略）。
 */
import { runAgentTurn } from './handler';
import type { StationSuggestion } from './schema';

const station = (id: number, name = `駅${id}`): StationSuggestion => ({
  stationId: id,
  stationGroupId: id + 1000,
  name,
  nameRoman: `Sta${id}`,
  lineNames: ['JR線'],
});

// biome-ignore lint/suspicious/noExplicitAny: テスト用モックの型緩和
type AnyFn = any;

const baseParams = {
  model: 'mock-model' as AnyFn,
  systemPrompt: 'SYSTEM',
  contextNote: 'CONTEXT',
  messages: [{ role: 'user' as const, content: '海が見える駅に行きたい' }],
  locale: 'ja' as const,
};

describe('runAgentTurn', () => {
  it('ツールで実在確認済みの駅だけを返し、幻覚駅を破棄する', async () => {
    const searchStations = jest
      .fn()
      .mockResolvedValue([station(1, '鎌倉'), station(2, '逗子')]);
    const generateText: AnyFn = jest.fn(async (options: AnyFn) => {
      // モデルの代役としてツールを 1 回実行してから最終出力を返す
      await options.tools.search_stations_by_name.execute({ name: '海' }, {});
      return {
        text: '',
        output: {
          reply: '海の見える駅はこちらです。',
          suggestions: [
            { ...station(1), name: '改変された名前' },
            station(999, '実在しない駅'),
          ],
        },
      };
    });

    const result = await runAgentTurn({
      ...baseParams,
      generateText,
      searchStations,
    });

    expect(result.refused).toBe(false);
    expect(result.reply).toBe('海の見える駅はこちらです。');
    expect(result.suggestions.map((s) => s.stationId)).toEqual([1]);
    // 内容は LLM 出力ではなく検証済みデータ
    expect(result.suggestions[0].name).toBe('鎌倉');
  });

  it('ツール結果が 0 件なら suggestions は必ず空配列になる', async () => {
    const generateText: AnyFn = jest.fn(async (options: AnyFn) => {
      await options.tools.search_stations_by_name.execute(
        { name: '桃源郷' },
        {}
      );
      return {
        text: '',
        output: {
          reply: '見つかりませんでした。',
          suggestions: [station(1), station(2)],
        },
      };
    });
    const result = await runAgentTurn({
      ...baseParams,
      generateText,
      searchStations: jest.fn().mockResolvedValue([]),
    });
    expect(result.suggestions).toEqual([]);
    expect(result.reply).toBe('見つかりませんでした。');
  });

  it('構造化出力の取り出しに失敗したらテキストへフォールバックする', async () => {
    const result: AnyFn = { text: 'テキスト応答です。' };
    Object.defineProperty(result, 'output', {
      get() {
        throw new Error('NoOutputGeneratedError');
      },
    });
    const generateText: AnyFn = jest.fn(async () => result);
    const turn = await runAgentTurn({
      ...baseParams,
      generateText,
      searchStations: jest.fn(),
    });
    expect(turn.reply).toBe('テキスト応答です。');
    expect(turn.suggestions).toEqual([]);
  });

  it('reply が空なら locale に応じたフォールバック文を返す', async () => {
    const generateText: AnyFn = jest.fn(async () => ({
      text: '',
      output: { reply: '  ', suggestions: [] },
    }));
    const ja = await runAgentTurn({
      ...baseParams,
      generateText,
      searchStations: jest.fn(),
    });
    expect(ja.reply).toContain('申し訳ありません');
    const en = await runAgentTurn({
      ...baseParams,
      locale: 'en',
      generateText,
      searchStations: jest.fn(),
    });
    expect(en.reply).toContain('Sorry');
  });

  it('システムプロンプトを先頭（キャッシュ境界付き）・可変コンテキストを次に置く', async () => {
    const generateText: AnyFn = jest.fn(async () => ({
      text: '',
      output: { reply: 'ok', suggestions: [] },
    }));
    await runAgentTurn({
      ...baseParams,
      generateText,
      searchStations: jest.fn(),
    });

    const options = generateText.mock.calls[0][0];
    expect(options.messages[0]).toMatchObject({
      role: 'system',
      content: 'SYSTEM',
      providerOptions: { anthropic: { cacheControl: { type: 'ephemeral' } } },
    });
    expect(options.messages[1]).toMatchObject({
      role: 'system',
      content: 'CONTEXT',
    });
    expect(options.messages[2]).toMatchObject({
      role: 'user',
      content: '海が見える駅に行きたい',
    });
    expect(options.maxRetries).toBe(0);
    expect(options.maxOutputTokens).toBe(1024);
    expect(options.timeout).toEqual({ stepMs: 15_000 });
  });
});
