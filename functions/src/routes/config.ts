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
}

// Remote Config のフォールバック既定（アプリ側 constants/location.ts と一致させる）
const REMOTE_DEFAULTS: RemoteConfig = {
  max_permit_accuracy: 1500,
  force_not_arrived_on_low_accuracy: true,
};

/**
 * KV に入っている生値を JS オブジェクトに戻す。
 * Firebase Remote Config からの移行値や手動投入で二重 JSON 化された値
 * （文字列として保存された JSON）も救済する。パース不能なら null。
 */
const parseStoredJson = (raw: string | null): unknown => {
  if (raw == null) {
    return null;
  }
  try {
    let value: unknown = JSON.parse(raw);
    // 二重エンコード（JSON.stringify を 2 回かけた値など）を 1 段ほどく
    if (typeof value === 'string') {
      value = JSON.parse(value);
    }
    return value;
  } catch {
    return null;
  }
};

/**
 * 数値・数値文字列のどちらでも受ける。Remote Config はすべて文字列で
 * 値を持つため、"1500" のような文字列も許容する。
 */
const coerceNumber = (value: unknown): number | null => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === 'string' && value.trim() !== '') {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }
  return null;
};

/**
 * boolean・"true"/"false" 文字列・1/0 のいずれでも受ける。
 * Remote Config 由来の値は "true" / "false" の文字列になるため。
 */
const coerceBoolean = (value: unknown): boolean | null => {
  if (typeof value === 'boolean') {
    return value;
  }
  if (typeof value === 'string') {
    const v = value.trim().toLowerCase();
    if (v === 'true' || v === '1') {
      return true;
    }
    if (v === 'false' || v === '0') {
      return false;
    }
  }
  if (typeof value === 'number') {
    if (value === 1) {
      return true;
    }
    if (value === 0) {
      return false;
    }
  }
  return null;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

export const normalizeRemoteConfig = (raw: unknown): RemoteConfig => {
  const source = isRecord(raw) ? raw : {};
  const maxAccuracy = coerceNumber(source.max_permit_accuracy);
  const forceNotArrived = coerceBoolean(
    source.force_not_arrived_on_low_accuracy
  );
  return {
    max_permit_accuracy:
      maxAccuracy != null && maxAccuracy > 0
        ? maxAccuracy
        : REMOTE_DEFAULTS.max_permit_accuracy,
    force_not_arrived_on_low_accuracy:
      forceNotArrived != null
        ? forceNotArrived
        : REMOTE_DEFAULTS.force_not_arrived_on_low_accuracy,
  };
};

export const handleMaintenanceConfig = async (env: Env): Promise<Response> => {
  // text で読んで自前パース。壊れた JSON でも例外を投げずフォールバックへ。
  const raw = await env.CONFIG_KV.get('config:maintenance', 'text').catch(
    () => null
  );
  const parsed = parseStoredJson(raw);
  const underMaintenance = isRecord(parsed)
    ? coerceBoolean(parsed.underMaintenance) === true
    : false;
  const body: MaintenanceConfig = { underMaintenance };
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: JSON_HEADERS,
  });
};

export const handleRemoteConfig = async (env: Env): Promise<Response> => {
  const raw = await env.CONFIG_KV.get('config:remote', 'text').catch(
    () => null
  );
  const parsed = parseStoredJson(raw);
  // KV に値はあるが読めない/形が違う場合はログを残す（wrangler tail で追える）。
  if (raw == null) {
    console.warn('config:remote is not set in CONFIG_KV; using defaults');
  } else if (!isRecord(parsed)) {
    console.warn(
      'config:remote could not be parsed as an object; using defaults'
    );
  }
  const body = normalizeRemoteConfig(parsed);
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: JSON_HEADERS,
  });
};
