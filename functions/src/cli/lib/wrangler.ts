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
import { readFileSync } from 'node:fs';
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
