#!/usr/bin/env node
import { execFileSync } from "child_process";
import { writeFileSync, unlinkSync, existsSync, mkdtempSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { randomUUID } from "crypto";
import { parseArgs } from "util";

const BATCH_SIZE = 10000;

const { values } = parseArgs({
  options: {
    "namespace-id": { type: "string" },
    prefix: { type: "string" },
    help: { type: "boolean", short: "h" },
  },
});

if (values.help) {
  console.log(`Usage: node scripts/clear-kv-cache.mjs --namespace-id <id> [options]

Options:
  --namespace-id <string>  KV namespace ID (required, or set KV_NAMESPACE_ID env var)
  --prefix <string>        Delete only keys matching the given prefix
  -h, --help               Show this help message

Examples:
  node scripts/clear-kv-cache.mjs --namespace-id abc123
  node scripts/clear-kv-cache.mjs --namespace-id abc123 --prefix stations`);
  process.exit(0);
}

const namespaceId = values["namespace-id"] || process.env.KV_NAMESPACE_ID;
if (!namespaceId) {
  console.error("Error: --namespace-id argument or KV_NAMESPACE_ID environment variable is required.");
  process.exit(1);
}

const prefix = values.prefix;

function run(cmd, args) {
  return execFileSync(cmd, args, { encoding: "utf-8" }).trim();
}

try {
  const label = prefix ? `prefix="${prefix}"` : "all";
  console.log(`Fetching keys from KV namespace (${label})...`);

  const listArgs = ["kv", "key", "list", "--namespace-id", namespaceId, "--remote"];
  if (prefix) {
    listArgs.push("--prefix", prefix);
  }
  const raw = run("wrangler", listArgs);
  const parsed = JSON.parse(raw);
  const allKeys = Array.isArray(parsed) ? parsed.map((k) => k.name) : [];

  console.log(`  Found ${allKeys.length} keys.`);

  if (allKeys.length === 0) {
    console.log("No keys found matching the criteria.");
    process.exit(0);
  }

  console.log(`\nTotal keys to delete: ${allKeys.length}`);

  const tmpDir = mkdtempSync(join(tmpdir(), "kv-clear-"));

  for (let i = 0; i < allKeys.length; i += BATCH_SIZE) {
    const batch = allKeys.slice(i, i + BATCH_SIZE);
    const tmpFile = join(tmpDir, `batch-${randomUUID()}.json`);

    try {
      writeFileSync(tmpFile, JSON.stringify(batch));
      run("wrangler", ["kv", "bulk", "delete", "--namespace-id", namespaceId, "--remote", "--force", tmpFile]);
    } finally {
      if (existsSync(tmpFile)) unlinkSync(tmpFile);
    }

    console.log(`  Deleted ${Math.min(i + BATCH_SIZE, allKeys.length)} / ${allKeys.length} keys`);
  }

  console.log("\nDone.");
} catch (error) {
  console.error("Failed to clear KV cache:", error.message);
  process.exit(1);
}
