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

type Primitive = string | number | boolean;

// KV の値をパススルーするだけ。既定値は BFF では持たず、キーが無ければ
// クライアント側（constants/location.ts）の既定に委ねる（二重管理を避ける）。
type RemoteConfigResponse = Record<string, Primitive>;

const isPrimitive = (value: unknown): value is Primitive =>
  typeof value === 'string' ||
  typeof value === 'number' ||
  typeof value === 'boolean';

/**
 * KV の config:remote をそのまま返す。既知・将来キーを問わずパススルーするが、
 * 値はプリミティブ（string / number / boolean）のみ許可し、ネストした
 * object・array・null は捨てる（壊れた値を端末に配らない）。
 * stored がオブジェクトでない（null / 壊れた JSON / 配列など）場合は空 {} を返す。
 */
export const mergeRemoteConfig = (stored: unknown): RemoteConfigResponse => {
  const merged: RemoteConfigResponse = {};
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
  // KV の JSON は任意の形の外部入力なので unknown で受け（壊れた JSON は
  // get が例外を投げるため .catch で握る）、mergeRemoteConfig 側で検証する。
  const stored = await env.CONFIG_KV.get<unknown>(
    'config:remote',
    'json'
  ).catch(() => null);
  const body = mergeRemoteConfig(stored);
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: JSON_HEADERS,
  });
};
