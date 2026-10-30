# Contributing to canli-mcp

This package is developed in the `mcp-canli/` directory of
[arhancanli/canlicapital](https://github.com/arhancanli/canlicapital/tree/main/mcp-canli). This repository
is imported from it at each release (see [MIRROR.md](MIRROR.md)), so open issues and pull requests on
canlicapital. The files listed in MIRROR.md as owned by this repository, such as the plugin manifests, are the
exception: changes to those belong here.

## Reporting

- Bugs and feature requests: a GitHub issue on canlicapital, with the tool name, the arguments (with any
  private data removed), what you expected and what happened.
- Security problems: never a public issue. Follow [SECURITY.md](SECURITY.md).

## Making a change

1. Fork canlicapital and branch from `main`.
2. Change the code under `mcp-canli/`, or under the pack it belongs to.
3. Run `npm ci` and `npm test` from that directory.
4. Open a pull request against `main`. Continuous integration runs the same checks, and a pull request merges
   only when they pass, as a squash merge of signed commits.

## Test policy

Every change in behaviour comes with a test that fails without it: a new tool or argument gets tests for
success, error results and argument validation, and a bug fix gets a regression test that reproduces the bug.

## What a change must keep

- Runtime dependencies stay pinned to exact versions, with the lockfile committed.
- A published number comes from a file the repository can regenerate, never typed by hand.
