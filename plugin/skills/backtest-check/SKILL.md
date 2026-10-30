---
name: backtest-check
description: Check whether a backtest result is likely real or the luckiest of the variants tried. Use when someone shares a backtest, a Sharpe ratio or a strategy's returns and asks if it is good, overfit or worth trading.
---

# Check a backtest

The `canli` MCP server's validation tools run on this machine, and the returns stay here.

1. Ask how many variants, parameters or ideas were tried before this one. The number matters as much as the returns.
2. Use `find_tool` with "deflated Sharpe", "overfitting probability" or "data snooping" to get the tool and its arguments, then `run_tool`.
3. Pass long series as `{"$file": "returns.csv", "column": "ret"}` rather than pasting numbers.
4. Report the raw Sharpe, the deflated figure, the number of trials assumed, and what the test does not cover, such as costs and lookahead.

A good score means the result survives the test for the trials stated, not that the strategy will
make money. Say so, and do not recommend trading it.
