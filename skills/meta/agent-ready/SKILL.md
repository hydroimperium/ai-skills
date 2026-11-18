---
name: agent-ready
description: "Prepares a repository for coding agents: reads the code, detects the project shape, and writes or updates AGENTS.md, a CLAUDE.md bridge, docs/ai/ai-memory.md, and optional product, voice, persona, and design-system docs. Use when the user asks to onboard a repo to AI agents, create or refresh AGENTS.md, add shared project memory, or make a codebase agent-ready. Trigger on \"agent-ready\", \"AGENTS.md\", \"CLAUDE.md\", \"project memory\", \"подготовь репозиторий для агента\", \"создай AGENTS.md\", \"память проекта\". Shows a plan before writing, asks only for what code cannot reveal, marks unconfirmed statements as draft, and never commits, pushes, or deletes files. For general documentation use documentation instead."
metadata:
  category: meta
  version: "1.0.0"
  inspired-by: "ugurozpinar/agent-ready"
---

# Agent Ready

Make a repository legible to coding agents without turning its documentation into a pile of guesses.

The deliverable is a small set of context files that are short, evidence-based, and safe to maintain.

## When to use

Use when:

- a repository has no `AGENTS.md` or has a stale one;
- the user wants an agent to understand the project quickly;
- the project has no shared memory of commands, architecture, or conventions;
- the user asks to prepare a repo for Claude Code, Codex, Cursor, OpenCode, or another agent.

Do not use when:

- the user only wants a README or API reference; use `documentation`;
- the repository is a throwaway script;
- the user has not approved writing files.

## Workflow

### 1. Detect

Inspect the repository before proposing anything:

- empty, single project, or monorepo;
- manifests (`package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, etc.);
- existing `AGENTS.md`, `CLAUDE.md`, `docs/ai/`, and instruction files;
- source layout, test commands, build commands, and CI config;
- generated, vendored, and secret-bearing paths to exclude.

Never read `.env*`, key files, or credentials.

### 2. Plan and confirm

Show a table:

| Scope | File | Action | Reason |
|---|---|---|---|
| repo root | `AGENTS.md` | create/update/skip | ... |

Wait for approval before writing. Changes to existing files must be shown as diffs first.

### 3. Gather

Read the code and docs. Ask only what the code cannot reveal:

- product purpose and non-goals;
- supported platforms and deployment target;
- conventions the team follows but does not document;
- review and release expectations.

Ask at most 10 questions, one at a time, in the user's language. Accept "don't know" and mark the affected document as draft.

### 4. Write

The main agent writes every file. Subagents may only return findings.

Keep the files short:

- root `AGENTS.md`: up to 120 lines;
- package `AGENTS.md`: up to 60 lines;
- `docs/ai/ai-memory.md`: up to 200 lines;
- optional docs: only when the repository supports them.

Every statement must trace to code, docs, or a user answer. Mark unconfirmed statements as `draft` and list the open questions.

Do not copy the user's global instructions or this session's rules into the repository.

### 5. Validate and report

Check:

- every path, command, and link exists;
- line budgets are respected;
- no secrets, tokens, or private keys are present;
- `CLAUDE.md` points to `AGENTS.md` when the bridge is used;
- draft documents have open questions, confirmed documents do not;
- generated files are not gitignored.

Report what was written, what remains draft, what was skipped, and what was not analyzed.

## Subagents

Use subagents only for large repositories or monorepos:

- one analyst per subsystem or package, up to five at once;
- each gets a self-contained brief with a scope, files, questions, and output schema;
- subagents return findings with `file:line` evidence;
- the main agent merges, writes, and validates.

If subagents are unavailable, do the same work inline, one scope at a time.

## Output format

```markdown
## Agent-ready plan

| Scope | File | Action | Reason |
|---|---|---|---|

## Written

- `<path>` — created/updated, N lines

## Draft

- `<path>` — open questions: ...

## Not analyzed

- `<scope>` — reason

## Next

- ...
```

## Quality checks

- No invented commands, paths, or architecture.
- No secrets or personal data.
- The files are useful without this conversation.
- The user can review every change as a diff.
- Nothing was committed, pushed, or deleted.
