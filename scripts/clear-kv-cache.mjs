#!/usr/bin/env node
import { execSync } from "child_process";
import { writeFileSync, unlinkSync } from "fs";
import { parseArgs } from "util";

const NAMESPACE_ID = "bf3aac35b78e42a8968a90d59a5abeb2";
const BATCH_SIZE = 10000;

const { values } = parseArgs({
  options: {
    prefix: { type: "string" },
    help: { type: "boolean", short: "h" },
  },
});

if (values.help) {
  console.log(`Usage: node scripts/clear-kv-cache.mjs [options]

Options:
  --prefix <string>  Delete only keys matching the given prefix
  -h, --help         Show this help message

Examples:
  node scripts/clear-kv-cache.mjs                  # Delete all keys
  node scripts/clear-kv-cache.mjs --prefix stations # Delete keys starting with "stations"`);
  process.exit(0);
}

const prefix = values.prefix;

function run(cmd) {
  return execSync(cmd, { encoding: "utf-8" }).trim();
}

try {
  const label = prefix ? `prefix="${prefix}"` : "all";
  console.log(`Fetching keys from KV namespace (${label})...`);

  const prefixArg = prefix ? ` --prefix "${prefix}"` : "";
  const raw = run(
    `wrangler kv key list --namespace-id ${NAMESPACE_ID} --remote${prefixArg}`
  );
  const parsed = JSON.parse(raw);
  const allKeys = Array.isArray(parsed) ? parsed.map((k) => k.name) : [];

  console.log(`  Found ${allKeys.length} keys.`);

  if (allKeys.length === 0) {
    console.log("No keys found matching the criteria.");
    process.exit(0);
  }

  console.log(`\nTotal keys to delete: ${allKeys.length}`);

  for (let i = 0; i < allKeys.length; i += BATCH_SIZE) {
    const batch = allKeys.slice(i, i + BATCH_SIZE);
    const tmpFile = `/tmp/kv-keys-batch-${i}.json`;

    writeFileSync(tmpFile, JSON.stringify(batch));
    run(`wrangler kv bulk delete --namespace-id ${NAMESPACE_ID} --remote --force ${tmpFile}`);
    unlinkSync(tmpFile);

    console.log(`  Deleted ${Math.min(i + BATCH_SIZE, allKeys.length)} / ${allKeys.length} keys`);
  }

  console.log("\nDone.");
} catch (error) {
  console.error("Failed to clear KV cache:", error.message);
  process.exit(1);
}
