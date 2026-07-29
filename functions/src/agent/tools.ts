/**
 * 駅検索ツール — sapi-bff（BFF ルートワーカー）の GraphQL stationsByName で
 * 駅名の実在確認を行う。Service Binding（SAPI_BFF）を優先し、
 * 未設定なら SAPI_BFF_GRAPHQL_URL への fetch にフォールバックする。
 * 検索結果は verified マップへ蓄積し、最終応答のサーバ側検証
 * （validate.ts の sanitizeSuggestions）の突合元になる。
 */
import { tool } from 'ai';
import type { Env } from '../types';
import { type StationSuggestion, stationSearchInputSchema } from './schema';

/** stationsByName へ渡す件数（設計値。全量を返すとツール結果でトークンを浪費する） */
const STATION_SEARCH_LIMIT = 10;
/** sapi-bff 呼び出しの 1 試行あたり期限 */
const TOOL_TIMEOUT_MS = 5_000;
/** 1 ターン合計のツール呼び出し上限 */
export const MAX_TOOL_CALLS_PER_TURN = 5;

/** ツール結果はトークン節約のため応答スキーマと同一の軽量フィールドに絞る */
const STATIONS_BY_NAME_QUERY = `
  query AgentStationsByName($name: String!, $limit: Int, $fromStationGroupId: Int) {
    stationsByName(name: $name, limit: $limit, fromStationGroupId: $fromStationGroupId) {
      id
      groupId
      name
      nameRoman
      lines {
        nameShort
      }
    }
  }
`;

/** 現在駅の解決用。グループ内の全駅（路線別レコード）を返す */
const STATION_GROUP_STATIONS_QUERY = `
  query AgentStationGroupStations($groupId: Int!) {
    stationGroupStations(groupId: $groupId) {
      id
      groupId
      name
      nameRoman
      lines {
        nameShort
      }
    }
  }
`;

interface GqlLine {
  nameShort?: string | null;
}
interface GqlStation {
  id?: number | null;
  groupId?: number | null;
  name?: string | null;
  nameRoman?: string | null;
  lines?: GqlLine[] | null;
}

/** GraphQL の Station を提案スキーマへ詰め替える（groupId → stationGroupId に改名） */
export const toStationSuggestion = (
  s: GqlStation
): StationSuggestion | null => {
  if (typeof s.id !== 'number' || typeof s.groupId !== 'number' || !s.name) {
    return null;
  }
  return {
    stationId: s.id,
    stationGroupId: s.groupId,
    name: s.name,
    nameRoman: s.nameRoman ?? '',
    lineNames: (s.lines ?? [])
      .map((l) => l?.nameShort)
      .filter((n): n is string => typeof n === 'string' && n.length > 0),
  };
};

const postGraphQL = async (
  env: Env,
  body: string,
  signal: AbortSignal
): Promise<Response> => {
  const init: RequestInit = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body,
    signal,
  };
  if (env.SAPI_BFF) {
    // Service Binding はホスト名を解決しないため URL はダミーでよい
    return env.SAPI_BFF.fetch('https://sapi-bff/graphql', init);
  }
  if (env.SAPI_BFF_GRAPHQL_URL) {
    return fetch(env.SAPI_BFF_GRAPHQL_URL, init);
  }
  throw new Error('SAPI_BFF binding or SAPI_BFF_GRAPHQL_URL is required');
};

const queryStationsOnce = async (
  env: Env,
  query: string,
  variables: Record<string, unknown>,
  field: 'stationsByName' | 'stationGroupStations',
  parentSignal: AbortSignal | undefined
): Promise<StationSuggestion[]> => {
  const controller = new AbortController();
  // abort 済みシグナルは 'abort' イベントを再発火しないため、先に状態を同期する
  if (parentSignal?.aborted) {
    controller.abort();
  }
  const timer = setTimeout(() => controller.abort(), TOOL_TIMEOUT_MS);
  // リクエスト全体の期限超過（親シグナル）もツール呼び出しへ伝播させる
  const onParentAbort = () => controller.abort();
  parentSignal?.addEventListener('abort', onParentAbort, { once: true });
  try {
    const res = await postGraphQL(
      env,
      JSON.stringify({ query, variables }),
      controller.signal
    );
    if (!res.ok) {
      throw new Error(`${field} failed with status ${res.status}`);
    }
    const json = (await res.json()) as {
      data?: Partial<Record<typeof field, GqlStation[] | null>> | null;
      errors?: { message?: string }[];
    };
    if (json.errors?.length) {
      throw new Error(
        `${field} GraphQL error: ${json.errors[0]?.message ?? 'unknown'}`
      );
    }
    return (json.data?.[field] ?? [])
      .map(toStationSuggestion)
      .filter((s): s is StationSuggestion => s !== null);
  } finally {
    clearTimeout(timer);
    parentSignal?.removeEventListener('abort', onParentAbort);
  }
};

const searchOnce = (
  env: Env,
  name: string,
  fromStationGroupId: number | undefined,
  parentSignal: AbortSignal | undefined
): Promise<StationSuggestion[]> =>
  queryStationsOnce(
    env,
    STATIONS_BY_NAME_QUERY,
    {
      name,
      limit: STATION_SEARCH_LIMIT,
      fromStationGroupId: fromStationGroupId ?? null,
    },
    'stationsByName',
    parentSignal
  );

/**
 * 駅名で実在駅を検索する。読み取り専用で冪等のため 1 回だけ再試行を許す
 * （LLM 呼び出しと違いコスト重複の心配がない）。
 */
export const searchStationsByName = async (
  env: Env,
  name: string,
  fromStationGroupId: number | undefined,
  parentSignal?: AbortSignal
): Promise<StationSuggestion[]> => {
  let lastError: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      return await searchOnce(env, name, fromStationGroupId, parentSignal);
    } catch (e) {
      lastError = e;
      // リクエスト全体の期限切れなら再試行しない
      if (parentSignal?.aborted) throw e;
    }
  }
  throw lastError;
};

/**
 * 現在駅グループ ID から駅情報を 1 件に集約して返す（コンテキスト注入用）。
 * 同一グループは同名駅の路線別レコードのため、路線名を統合する。
 * 見つからなければ null。読み取り専用で冪等のため 1 回だけ再試行を許す。
 */
export const fetchStationByGroupId = async (
  env: Env,
  groupId: number,
  parentSignal?: AbortSignal
): Promise<StationSuggestion | null> => {
  let lastError: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const stations = await queryStationsOnce(
        env,
        STATION_GROUP_STATIONS_QUERY,
        { groupId },
        'stationGroupStations',
        parentSignal
      );
      const first = stations[0];
      if (!first) return null;
      return {
        ...first,
        lineNames: [...new Set(stations.flatMap((s) => s.lineNames))],
      };
    } catch (e) {
      lastError = e;
      // リクエスト全体の期限切れなら再試行しない
      if (parentSignal?.aborted) throw e;
    }
  }
  throw lastError;
};

export interface StationSearchToolOptions {
  /** 駅名 → 実在駅リスト（sapi-bff 呼び出し。テストでは差し替え可能） */
  search: (name: string) => Promise<StationSuggestion[]>;
  /** このターンで実在確認済みの駅（stationId → 駅）。突合検証の元データ */
  verified: Map<number, StationSuggestion>;
  /** 残りツール呼び出し回数（ターン合計 MAX_TOOL_CALLS_PER_TURN） */
  budget: { remaining: number };
}

/** search_stations_by_name ツール定義（AI SDK 形式・プロバイダ非依存） */
export const createStationSearchTool = ({
  search,
  verified,
  budget,
}: StationSearchToolOptions) =>
  tool({
    description:
      '駅名や読みの一部から実在する駅を検索する。ユーザに駅を提案する前に必ずこのツールで実在確認すること。',
    inputSchema: stationSearchInputSchema,
    execute: async ({ name }) => {
      // 呼び出し上限超過時は検索せず、その時点の結果で応答を生成させる
      if (budget.remaining <= 0) {
        return {
          stations: [],
          notice:
            'Search limit reached. Answer using the results you already have.',
        };
      }
      budget.remaining -= 1;
      try {
        const stations = await search(name);
        for (const s of stations) {
          verified.set(s.stationId, s);
        }
        return { stations };
      } catch (e) {
        // 失敗はエラーではなくツール結果として返し、モデルに正直な応答を生成させる
        console.error('agent tool: stationsByName failed', e);
        return {
          stations: [],
          notice: 'Search failed. Do not invent stations.',
        };
      }
    },
  });
