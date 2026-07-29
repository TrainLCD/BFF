import type { Env } from '../types';
import type { StationSuggestion } from './schema';
import {
  createStationSearchTool,
  MAX_TOOL_CALLS_PER_TURN,
  searchStationsByName,
  toStationSuggestion,
} from './tools';

const gqlStation = (id: number, name = `駅${id}`) => ({
  id,
  groupId: id + 1000,
  name,
  nameRoman: `Sta${id}`,
  lines: [{ nameShort: 'JR横須賀線' }, { nameShort: null }],
});

const gqlResponse = (stations: unknown[]) =>
  new Response(JSON.stringify({ data: { stationsByName: stations } }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });

describe('toStationSuggestion', () => {
  it('GraphQL の Station を軽量スキーマへ詰め替える（groupId → stationGroupId）', () => {
    expect(toStationSuggestion(gqlStation(1, '鎌倉'))).toEqual({
      stationId: 1,
      stationGroupId: 1001,
      name: '鎌倉',
      nameRoman: 'Sta1',
      lineNames: ['JR横須賀線'],
    });
  });

  it('必須フィールド欠落は null を返す', () => {
    expect(toStationSuggestion({ id: 1, groupId: null, name: 'x' })).toBeNull();
    expect(toStationSuggestion({ id: 1, groupId: 2, name: null })).toBeNull();
  });

  it('nameRoman 欠落は空文字にフォールバックする', () => {
    const s = toStationSuggestion({
      id: 1,
      groupId: 2,
      name: 'x',
      nameRoman: null,
    });
    expect(s?.nameRoman).toBe('');
  });
});

describe('searchStationsByName', () => {
  const makeEnv = (fetchImpl: jest.Mock): Env =>
    ({ SAPI_BFF: { fetch: fetchImpl } }) as unknown as Env;

  it('Service Binding 経由で検索し結果をマップする', async () => {
    const fetchMock = jest.fn().mockResolvedValue(gqlResponse([gqlStation(1)]));
    const result = await searchStationsByName(
      makeEnv(fetchMock),
      '鎌倉',
      1130205
    );
    expect(result).toHaveLength(1);
    expect(result[0].stationId).toBe(1);
    const [, init] = fetchMock.mock.calls[0];
    const body = JSON.parse(init.body);
    expect(body.variables).toEqual({
      name: '鎌倉',
      limit: 10,
      fromStationGroupId: 1130205,
    });
  });

  it('失敗時に 1 回だけ再試行する', async () => {
    const fetchMock = jest
      .fn()
      .mockResolvedValueOnce(new Response('oops', { status: 500 }))
      .mockResolvedValueOnce(gqlResponse([gqlStation(2)]));
    const result = await searchStationsByName(
      makeEnv(fetchMock),
      '海',
      undefined
    );
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(result[0].stationId).toBe(2);
  });

  it('2 回失敗したらエラーを送出する', async () => {
    const fetchMock = jest
      .fn()
      .mockResolvedValue(new Response('oops', { status: 500 }));
    await expect(
      searchStationsByName(makeEnv(fetchMock), '海', undefined)
    ).rejects.toThrow('status 500');
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('GraphQL errors はエラー扱いにする', async () => {
    // 再試行でボディが 2 回読まれるため、呼び出しごとに新しい Response を返す
    const fetchMock = jest.fn().mockImplementation(() =>
      Promise.resolve(
        new Response(JSON.stringify({ errors: [{ message: 'boom' }] }), {
          status: 200,
        })
      )
    );
    await expect(
      searchStationsByName(makeEnv(fetchMock), '海', undefined)
    ).rejects.toThrow('boom');
  });

  it('バインディングも URL も無ければエラー', async () => {
    await expect(
      searchStationsByName({} as unknown as Env, '海', undefined)
    ).rejects.toThrow('SAPI_BFF');
  });

  it('abort 済みの親シグナルは fetch へ即座に伝播する', async () => {
    const fetchMock = jest.fn().mockResolvedValue(gqlResponse([]));
    const controller = new AbortController();
    controller.abort();
    await searchStationsByName(
      makeEnv(fetchMock),
      '海',
      undefined,
      controller.signal
    ).catch(() => {});
    const [, init] = fetchMock.mock.calls[0];
    expect((init.signal as AbortSignal).aborted).toBe(true);
  });
});

describe('createStationSearchTool', () => {
  const execute = async (
    t: ReturnType<typeof createStationSearchTool>,
    name: string
  ): Promise<{ stations: StationSuggestion[]; notice?: string }> =>
    // biome-ignore lint/suspicious/noExplicitAny: テストではツール実行オプションを省略する
    (t as any).execute({ name }, {});

  it('検索結果を verified マップへ蓄積する', async () => {
    const verified = new Map<number, StationSuggestion>();
    const station: StationSuggestion = {
      stationId: 1,
      stationGroupId: 1001,
      name: '鎌倉',
      nameRoman: 'Kamakura',
      lineNames: ['JR横須賀線'],
    };
    const tool = createStationSearchTool({
      search: jest.fn().mockResolvedValue([station]),
      verified,
      budget: { remaining: MAX_TOOL_CALLS_PER_TURN },
    });
    const result = await execute(tool, '鎌倉');
    expect(result.stations).toEqual([station]);
    expect(verified.get(1)).toEqual(station);
  });

  it('呼び出し上限を超えたら検索せず空を返す', async () => {
    const search = jest.fn();
    const tool = createStationSearchTool({
      search,
      verified: new Map(),
      budget: { remaining: 0 },
    });
    const result = await execute(tool, '鎌倉');
    expect(search).not.toHaveBeenCalled();
    expect(result.stations).toEqual([]);
    expect(result.notice).toContain('limit');
  });

  it('検索失敗はエラーにせずツール結果として返す', async () => {
    const tool = createStationSearchTool({
      search: jest.fn().mockRejectedValue(new Error('down')),
      verified: new Map(),
      budget: { remaining: 1 },
    });
    const result = await execute(tool, '鎌倉');
    expect(result.stations).toEqual([]);
    expect(result.notice).toContain('failed');
  });
});
