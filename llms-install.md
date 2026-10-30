# Installing canli-mcp

No API key and no account. It needs Node.js 20.10 or newer.

Add this to the MCP settings file:

```json
{
  "mcpServers": {
    "canli": {
      "command": "npx",
      "args": ["-y", "canli-mcp"]
    }
  }
}
```

Then check it works by calling `find_tool` with the query `treasury yields`. It should return tools from the
markets pack. Call one with `run_tool`.

Prices, files and paper trading only work in this local install. Paper trading is optional and needs the user's
own `ALPACA_PAPER_KEY_ID` and `ALPACA_PAPER_SECRET_KEY` for a paper account; do not ask for them unless the user wants it.
