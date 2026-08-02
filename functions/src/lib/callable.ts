/**
 * Firebase callable 互換のワイヤ形式ヘルパー。
 * リクエスト: `{ data: <payload> }` / 成功: `{ result: <payload> }` /
 * 失敗: HTTP ステータス + `{ error: { message, status } }`。
 * モバイルアプリ（ttsSpeechFetcher.ts / useFeedback.ts）の送受信規約を維持する。
 */

export type CallableCode =
  | 'ok'
  | 'invalid-argument'
  | 'failed-precondition'
  | 'unauthenticated'
  | 'permission-denied'
  | 'not-found'
  | 'resource-exhausted'
  | 'internal'
  | 'unavailable'
  | 'deadline-exceeded';

const CODE_TO_HTTP: Record<CallableCode, number> = {
  ok: 200,
  'invalid-argument': 400,
  'failed-precondition': 400,
  unauthenticated: 401,
  'permission-denied': 403,
  'not-found': 404,
  'resource-exhausted': 429,
  internal: 500,
  unavailable: 503,
  'deadline-exceeded': 504,
};

export class CallableError extends Error {
  readonly code: CallableCode;
  constructor(code: CallableCode, message: string) {
    super(message);
    this.code = code;
    this.name = 'CallableError';
  }
}

const JSON_HEADERS = { 'content-type': 'application/json; charset=UTF-8' };

/** リクエストボディの `data` を取り出す。callable は `{ data: {...} }` 形式。 */
export const parseCallableData = async <T = Record<string, unknown>>(
  req: Request
): Promise<T> => {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    throw new CallableError('invalid-argument', 'Request body must be JSON');
  }
  if (!body || typeof body !== 'object') {
    throw new CallableError(
      'invalid-argument',
      'Request body must be an object'
    );
  }
  const data = (body as { data?: unknown }).data;
  // callable 仕様では data は省略可（空オブジェクト扱い）
  return (data ?? {}) as T;
};

export const callableSuccess = (result: unknown): Response =>
  new Response(JSON.stringify({ result }), {
    status: 200,
    headers: JSON_HEADERS,
  });

export const callableError = (err: CallableError): Response =>
  new Response(
    JSON.stringify({ error: { message: err.message, status: err.code } }),
    { status: CODE_TO_HTTP[err.code], headers: JSON_HEADERS }
  );

const errorDetail = (error: unknown, depth = 0): Record<string, unknown> => {
  if (!(error instanceof Error)) {
    return { value: String(error) };
  }

  const source = error as Error & {
    statusCode?: unknown;
    responseBody?: unknown;
    isRetryable?: unknown;
    cause?: unknown;
  };
  return {
    name: error.name,
    message: error.message,
    stack: error.stack,
    ...(source.statusCode !== undefined
      ? { statusCode: source.statusCode }
      : {}),
    ...(source.responseBody !== undefined
      ? { responseBody: source.responseBody }
      : {}),
    ...(source.isRetryable !== undefined
      ? { isRetryable: source.isRetryable }
      : {}),
    ...(source.cause !== undefined && depth < 2
      ? { cause: errorDetail(source.cause, depth + 1) }
      : {}),
  };
};

/** ハンドラを callable エラー整形でラップする。 */
export const withCallable = async (
  handler: () => Promise<Response>
): Promise<Response> => {
  try {
    return await handler();
  } catch (e) {
    if (e instanceof CallableError) {
      return callableError(e);
    }
    // Error オブジェクトを直接渡すと Workers Logs ではスタックだけになることがある。
    // AI SDK の HTTP ステータス・レスポンス本文・cause を明示的に展開する。
    console.error(
      `Unhandled error in callable handler: ${JSON.stringify(errorDetail(e))}`
    );
    return callableError(new CallableError('internal', 'Internal error'));
  }
};
