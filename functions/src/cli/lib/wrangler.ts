/**
 * メンテ用 CLI から wrangler CLI 経由で Cloudflare リソースを参照するヘルパー。
 *
 * wrangler.jsonc のバインディング定義とログイン済みアカウント（`wrangler login`
 * もしくは CLOUDFLARE_API_TOKEN）を使うため、KV 用の API トークンやネームスペース
 * ID、バケット名を環境変数で個別に渡す必要がない。
 *
 * 注意: wrangler には R2 オブジェクトの一覧コマンドが無いため、R2 の列挙だけは
 * 引き続き S3 互換 API（lib/cloudflare.ts）を使う。
 */
import { execFile } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import * as path from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

// KV のキー一覧が大きくても標準出力を受け切れるよう拡張する。
const MAX_BUFFER = 256 * 1024 * 1024;

async function runWrangler(args: string[]): Promise<string> {
  try {
    const { stdout } = await execFileAsync('npx', ['wrangler', ...args], {
      maxBuffer: MAX_BUFFER,
      encoding: 'utf8',
    });
    return stdout;
  } catch (err) {
    const e = err as { stderr?: string; message?: string };
    throw new Error(
      `wrangler ${args.join(' ')} に失敗しました: ${e.stderr?.trim() || e.message}`
    );
  }
}

const envArgs = (env?: string): string[] => (env ? ['--env', env] : []);

function extractJsonArray(out: string): string {
  const start = out.indexOf('[');
  const end = out.lastIndexOf(']');
  if (start === -1 || end === -1 || end < start) {
    throw new Error(
      `wrangler の出力を JSON 配列として解釈できませんでした: ${out.slice(0, 200)}`
    );
  }
  return out.slice(start, end + 1);
}

/**
 * KV ネームスペース内のキー名一覧を取得する（値は取得しない）。
 * wrangler が内部でページングするため、1 回の呼び出しで全件返る。
 */
export async function kvListKeys(
  binding: string,
  prefix: string,
  env?: string
): Promise<string[]> {
  const out = await runWrangler([
    'kv',
    'key',
    'list',
    '--binding',
    binding,
    '--prefix',
    prefix,
    '--remote',
    ...envArgs(env),
  ]);
  const parsed = JSON.parse(extractJsonArray(out)) as { name: string }[];
  return parsed.map((k) => k.name);
}

// CF の bulk/get API は 1 リクエストあたりのキー数に上限があるため分割する。
const BULK_GET_CHUNK = 100;

function extractJsonObject(out: string): string {
  const start = out.indexOf('{');
  const end = out.lastIndexOf('}');
  if (start === -1 || end === -1 || end < start) {
    throw new Error(
      `wrangler の出力を JSON オブジェクトとして解釈できませんでした: ${out.slice(0, 200)}`
    );
  }
  return out.slice(start, end + 1);
}

// `wrangler kv bulk get` の値は環境により文字列 / { value } の両形がありうるため吸収する。
function normalizeBulkValue(entry: unknown): string | null {
  if (entry == null) return null;
  if (typeof entry === 'string') return entry;
  if (typeof entry === 'object' && 'value' in entry) {
    const v = (entry as { value: unknown }).value;
    return typeof v === 'string' ? v : null;
  }
  return null;
}

/**
 * KV から複数キーの値をまとめて取得する（`wrangler kv bulk get`、open beta）。
 * 戻り値は存在したキーのみを含む Map。上限を超えないようチャンク分割して呼ぶ。
 */
export async function kvGetMany(
  binding: string,
  keys: string[],
  env?: string
): Promise<Map<string, string>> {
  const out = new Map<string, string>();
  for (let i = 0; i < keys.length; i += BULK_GET_CHUNK) {
    const chunk = keys.slice(i, i + BULK_GET_CHUNK);
    const dir = mkdtempSync(path.join(tmpdir(), 'tts-kv-'));
    const file = path.join(dir, 'keys.json');
    try {
      writeFileSync(file, JSON.stringify(chunk));
      const stdout = await runWrangler([
        'kv',
        'bulk',
        'get',
        file,
        '--binding',
        binding,
        '--remote',
        ...envArgs(env),
      ]);
      const values = JSON.parse(extractJsonObject(stdout)) as Record<
        string,
        unknown
      >;
      for (const [k, entry] of Object.entries(values)) {
        const v = normalizeBulkValue(entry);
        if (v !== null) out.set(k, v);
      }
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }
  return out;
}

/** KV の単一キーを削除する（`wrangler kv key delete`。確認プロンプトは出ない）。 */
export async function kvDeleteKey(
  binding: string,
  key: string,
  env?: string
): Promise<void> {
  await runWrangler([
    'kv',
    'key',
    'delete',
    key,
    '--binding',
    binding,
    '--remote',
    ...envArgs(env),
  ]);
}

/** R2 の単一オブジェクトを削除する（`wrangler r2 object delete <bucket>/<key>`）。 */
export async function r2DeleteObject(
  bucket: string,
  key: string
): Promise<void> {
  await runWrangler(['r2', 'object', 'delete', `${bucket}/${key}`, '--remote']);
}

interface WranglerR2Binding {
  binding: string;
  bucket_name: string;
}

interface WranglerConfig {
  r2_buckets?: WranglerR2Binding[];
  env?: Record<string, { r2_buckets?: WranglerR2Binding[] }>;
}

/**
 * 文字列リテラルを保ちつつ JSONC のコメントと末尾カンマを除去し、JSON.parse 可能にする。
 */
function stripJsonComments(input: string): string {
  let out = '';
  let inString = false;
  let quote = '';
  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    const next = input[i + 1];
    if (inString) {
      out += ch;
      if (ch === '\\') {
        out += next ?? '';
        i++;
      } else if (ch === quote) {
        inString = false;
      }
      continue;
    }
    if (ch === '"' || ch === "'") {
      inString = true;
      quote = ch;
      out += ch;
      continue;
    }
    if (ch === '/' && next === '/') {
      while (i < input.length && input[i] !== '\n') i++;
      out += '\n';
      continue;
    }
    if (ch === '/' && next === '*') {
      i += 2;
      while (i < input.length && !(input[i] === '*' && input[i + 1] === '/'))
        i++;
      i++;
      continue;
    }
    out += ch;
  }
  return out.replace(/,(\s*[}\]])/g, '$1');
}

/**
 * wrangler.jsonc から指定バインディングの R2 バケット名を解決する。
 * env を渡すとその環境（例: production）の設定を参照する。
 */
export function resolveR2BucketName(binding: string, env?: string): string {
  const cfgPath = path.resolve(process.cwd(), 'wrangler.jsonc');
  const cfg = JSON.parse(
    stripJsonComments(readFileSync(cfgPath, 'utf8'))
  ) as WranglerConfig;
  const scope = env ? cfg.env?.[env] : cfg;
  const found = (scope?.r2_buckets ?? []).find((b) => b.binding === binding);
  if (!found?.bucket_name) {
    throw new Error(
      `wrangler.jsonc に R2 バインディング ${binding}${
        env ? ` (env=${env})` : ''
      } が見つかりません`
    );
  }
  return found.bucket_name;
}
