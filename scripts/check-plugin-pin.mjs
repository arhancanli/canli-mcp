// The plugin and extension manifests pin the package to this release: an unpinned or stale one would
// run a version nobody tested with them. Run in CI.
import { readFileSync } from "node:fs";

const json = (p) => JSON.parse(readFileSync(new URL(`../${p}`, import.meta.url), "utf8"));
const version = json("package.json").version;
const bad = [];
for (const p of ["plugin/.claude-plugin/plugin.json", "plugin/.cursor-plugin/plugin.json", "plugin/.codex-plugin/plugin.json", "gemini-extension.json"]) if (json(p).version !== version) bad.push(`${p} version ${json(p).version}`);
for (const p of ["plugin/.mcp.json", "plugin/mcp.json"]) if (!json(p).mcpServers.canli.args.includes(`canli-mcp@${version}`)) bad.push(`${p} does not pin ${version}`);
if (!json("gemini-extension.json").mcpServers.canli.args.includes(`canli-mcp@${version}`)) bad.push(`gemini-extension.json does not pin ${version}`);
if (bad.length) { console.error(bad.join("\n")); process.exit(1); }
console.log(`plugin manifests pin canli-mcp@${version}`);
