# Where this code lives

This repository is the standalone home of the `canli-mcp` package, published so the server can be
installed, scanned and reviewed on its own. It is imported from the `mcp-canli/` directory of
[arhancanli/canlicapital](https://github.com/arhancanli/canlicapital/tree/main/mcp-canli), which is
where changes are made and tested; this repository is updated from it at each release.

Imported from canlicapital commit `925967a1` (canli-mcp 0.13.2, tag `canli-mcp-v0.13.2`).

- npm: https://www.npmjs.com/package/canli-mcp
- MCP Registry: `io.github.arhancanli/canli-mcp`
- Hosted endpoint (no install): https://canlicapital.com/mcp/canli
- Interactive views, played from recordings: https://canlicapital.com/mcp-servers

Files owned by this repository and kept across syncs: `.github/`, `MIRROR.md`, `glama.json`,
`smithery.yaml`, `Dockerfile`, `plugin/`, `.claude-plugin/`, `.cursor-plugin/`, `.agents/`,
`gemini-extension.json`, `GEMINI.md`, `PRIVACY.md`, `SECURITY.md`, `CONTRIBUTING.md`, `llms-install.md`, `zed/` and `scripts/check-plugin-pin.mjs`. At each sync, move the versions in those manifests to the
release; `scripts/check-plugin-pin.mjs` fails CI otherwise.
