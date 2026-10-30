---
name: finance-research
description: Research a public company, a filing, a market or the economy from primary sources with the canli tools. Use for revenue and earnings, SEC filings, guidance, insider trades, 13F holders, options, rates and macro series.
---

# Finance research from the sources

The `canli` MCP server reads public sources directly. Its tools are found by search, not listed.

1. Call `find_tool` with the question in plain words. Its results include each tool's arguments.
2. Call `run_tool` with the tool's name and arguments. Several calls can go in one `run_tool`.
3. Report each figure with the period, the basis (GAAP or adjusted) and the filing or source it came from.

Tools that often fit:

| Question | Tool |
| --- | --- |
| A figure over time, as first reported or as known on a date | `history`, `known_as_of` |
| Statements as filed | `financial_statements` |
| Results and guidance from a press release | `earnings_release` |
| Filings and their text | `list_filings`, `read_filing`, `search_filings` |
| Who owns it, who is trading it | `insider_trades`, `large_holders`, `fund_holdings` |
| Rates and the economy | `treasury_yields`, `economic_series`, `fomc` |
| Figures in a written draft | `verify_claims` |

When a tool refuses or finds nothing, say so and say what was searched. Do not fill the gap from
memory. A parser can misread an unusual table, so check the quote beside a figure before relying on
it. These tools give data and calculations, not investment advice.
