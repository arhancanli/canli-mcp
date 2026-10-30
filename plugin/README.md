# Canli Capital finance tools

This plugin adds the open-source `canli-mcp` server to your coding agent, with two skills that show
how to use it. It gives an AI model finance tools that read public sources directly: SEC filings and
XBRL, the Treasury, the Fed, FRED, central banks and other public data, plus quant analytics, backtest
validation and paper trading on your own paper account. The model sees five tools and searches the
rest, so it stays light on context. No key or account is needed.

## Install

Claude Code:

```
/plugin install canli-mcp --marketplace arhancanli/canli-mcp
```

Codex: `codex plugin marketplace add arhancanli/canli-mcp`. Cursor: from the marketplace, or the repository's install link. Gemini CLI: `gemini extensions install https://github.com/arhancanli/canli-mcp`.

## What it runs and sends

The plugin starts `npx -y canli-mcp@<pinned version>`, which downloads that exact package from npm and
runs it on your machine. Calculations stay on your machine. A data tool sends the company, series,
symbol or search words you asked about to the source of that data: public bodies such as the SEC, and
canlicapital.com for the fundamentals and research tools. Your own files, returns and prices are not
sent, and there is no telemetry. It keeps a cache of public data in `~/.cache/canli-fundamentals`, and
trial ledgers and any paper order log in `~/.canli`. Paper trading runs only if you set your own broker paper keys, and talks only to Alpaca.

## Skills

- `finance-research`: research a company, filing, market or economic series from the sources.
- `backtest-check`: check whether a backtest is likely real or the luckiest of many tried.

## Privacy

See the [privacy policy](https://github.com/arhancanli/canli-mcp/blob/main/PRIVACY.md). Your data stays on your machine; only the
queries described above leave it.

## Support and source

Questions and bugs: https://github.com/arhancanli/canli-mcp/issues. Source and tests:
https://github.com/arhancanli/canli-mcp. MIT licensed. Data and calculations only, not investment advice.
