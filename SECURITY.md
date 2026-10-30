# Security

## Reporting a vulnerability

Use GitHub private vulnerability reporting on
[arhancanli/canlicapital](https://github.com/arhancanli/canlicapital/security/advisories/new), where this
code is developed, not a public issue. Do not include real credentials, account data or private inputs in a
report. The current `main` branch and the latest npm release are supported.

## What the server does on your machine

`npx -y canli-mcp` runs `src/server.mjs` over stdio and loads its packs from npm, each pinned to an exact
version with a lockfile. It sends no telemetry. [PRIVACY.md](PRIVACY.md) lists what leaves your machine and
what stays on your disk.

Paper trading is the only pack that uses credentials, and only if you set your own Alpaca paper keys. It
talks to Alpaca's paper API, not to a live account.

## The hosted endpoint

`https://canlicapital.com/mcp/canli` is read-only: it has no price tools, no file access and no paper
trading. It keeps nothing between requests, apart from the hosted validation records described in
[PRIVACY.md](PRIVACY.md). Do not send private data to it.
