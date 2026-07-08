/**
 * GET /config/maintenance, GET /config/remote — KV 配信のアプリ設定。
 * Firestore(appConfig/maintenance) と Remote Config の代替。認証不要。
 */
import type { Env } from '../types';

const JSON_HEADERS = {
  'content-type': 'application/json; charset=UTF-8',
  // 起動時 1 回取得 + 端末キャッシュ運用。エッジでも短時間キャッシュ。
  'cache-control': 'public, max-age=60',
};

interface MaintenanceConfig {
  underMaintenance: boolean;
}

interface RemoteConfig {
  max_permit_accuracy: number;
  force_not_arrived_on_low_accuracy: boolean;
  eta_assist_enabled: boolean;
}

// Remote Config のフォールバック既定（アプリ側 constants/location.ts と一致させる）
// KV に無いキーだけこの既定値で補い、KV にあるキーはそのまま返す。
const REMOTE_DEFAULTS: RemoteConfig = {
  max_permit_accuracy: 1500,
  force_not_arrived_on_low_accuracy: true,
  eta_assist_enabled: false,
};

const isPrimitive = (value: unknown): value is string | number | boolean =>
  typeof value === 'string' ||
  typeof value === 'number' ||
  typeof value === 'boolean';

/**
 * KV の config:remote をそのまま返しつつ、欠けているキーだけ既定値で補う。
 * KV にある任意のキー（将来追加するフラグ含む）はパススルーするが、
 * 値はプリミティブ（string / number / boolean）のみ許可し、ネストした
 * object・array・null は捨てて既定値を維持する（壊れた値を端末に配らない）。
 * stored がオブジェクトでない（null / 壊れた JSON / 配列など）場合は既定値のみ。
 */
export const mergeRemoteConfig = (
  stored: unknown
): RemoteConfig & Record<string, unknown> => {
  const merged: RemoteConfig & Record<string, unknown> = { ...REMOTE_DEFAULTS };
  if (stored && typeof stored === 'object' && !Array.isArray(stored)) {
    for (const [key, value] of Object.entries(stored)) {
      if (isPrimitive(value)) {
        merged[key] = value;
      }
    }
  }
  return merged;
};

export const handleMaintenanceConfig = async (env: Env): Promise<Response> => {
  // KV 値が壊れた JSON だと get が例外を投げるため、フォールバックで握る
  const stored = await env.CONFIG_KV.get<MaintenanceConfig>(
    'config:maintenance',
    'json'
  ).catch(() => null);
  const body: MaintenanceConfig = {
    underMaintenance: stored?.underMaintenance === true,
  };
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: JSON_HEADERS,
  });
};

export const handleRemoteConfig = async (env: Env): Promise<Response> => {
  // KV 値が壊れた JSON だと get が例外を投げるため、フォールバックで握る
  const stored = await env.CONFIG_KV.get<Record<string, unknown>>(
    'config:remote',
    'json'
  ).catch(() => null);
  const body = mergeRemoteConfig(stored);
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: JSON_HEADERS,
  });
};
