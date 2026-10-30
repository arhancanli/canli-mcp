# Privacy policy

Applies to the canli-mcp package and to Canli Capital's hosted MCP servers. The tools ask for no account and
no personal details, and there is no telemetry.

## The package, run on your machine

- **Collection:** Canli Capital receives no telemetry, analytics or crash reports from the package.
- **What leaves your machine:** a data tool sends the company, series, symbol or search words you asked about
  to the source of that data. These are public bodies such as the SEC, the Treasury and central banks, other
  public sources such as Yahoo Finance and Cboe, and canlicapital.com for the point-in-time fundamentals and
  the research record. Calculation tools send nothing. Your files, returns and prices are not sent.
- **What stays on your disk:** caches of public data in `~/.cache/canli-fundamentals` and `~/.cache/canli-markets` (compressed filings and company facts, at most 512 MB; they show which companies you looked up, on your own machine; `CANLI_DISK_CACHE=0` turns the second off), trial ledgers and any
  paper order log in `~/.canli`, and an audit log only if you turn one on. Delete those folders to remove them.
- **Paper trading:** only if you set your own Alpaca paper keys, and then only to Alpaca.

## The hosted servers

These are `canlicapital.com/mcp`, `/mcp/canli`, `/mcp/fundamentals` and `/mcp/research`.

- **Collection:** each request carries the tool and the arguments your AI client sent. Do not send private data
  to a hosted server. Your address is used to limit requests per minute, in memory in the function that answers.
- **Use and storage:** a request is answered and then dropped. Our code does not write tool arguments or
  results to any store and keeps nothing between requests. The exception is hosted validation, below.
- **Hosted validation:** for an API key it stores a SHA-256 hash of the key, its optional label, its creation,
  last-use and revocation times and the site that requested it, plus a daily call count. For key issuance it
  stores a daily count per client, where the client is the request address hashed with a secret salt. For each
  receipt it stores the endpoint, a SHA-256 hash of your input, the verdict and a timestamp, not the input itself.
- **Conversations:** the servers see only the calls your client sends, not your chat, memory or files.

## Third parties

We do not sell or share personal data. The hosted servers run on Vercel, whose platform keeps its own standard
request logs (method, path, status and time) under its own retention. API-key records are held in Supabase. When
a hosted tool reads a public source, that source sees the request coming from our server, not from you.

## Retention

Hosted tool calls are not retained by our code. API-key and receipt records are kept while the service runs, so
that receipts can be checked later. Revoke a key to stop its use, or ask us to delete its record.

## Children

The tools are for developers and researchers and are not directed at children. They ask for no personal details.

## Contact

Open an issue at https://github.com/arhancanli/canli-mcp/issues. Do not put private details in a public issue;
say that you need a private channel and we will arrange one. Changes to this policy are in this file's history.
