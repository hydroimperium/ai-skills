---
name: context-engineering
description: Manages context for long, multi-step, or file-heavy tasks. Use when a task spans many files, sessions, or agents; when the context window is filling up; when the agent loses track of decisions; or when the user asks for a handoff, state file, or context summary. Trigger on "context", "handoff", "передай контекст", "потерялся контекст", "длинная задача", "продолжи с того же места".
metadata:
  category: meta
  version: "1.0.0"
  inspired-by: "addyosmani/agent-skills, mattpocock/skills, obra/superpowers"
---

# Context Engineering

Keep the right information in front of the agent and keep the rest out.

## When to use

Use when:

- the task spans multiple files, sessions, or agents;
- the context window is filling up;
- the agent repeats work or forgets decisions;
- the user asks for a handoff, plan, or state file;
- a long-running task needs checkpoints;
- the agent is about to start a new session on the same work.

## Principles

- **Context is a budget.** Every token spent on irrelevant material is unavailable for reasoning.
- **Source of truth beats memory.** Put decisions, paths, commands, and acceptance criteria in a file, not only in chat.
- **Just-in-time retrieval.** Load the smallest source that answers the current question.
- **Separate facts from plans.** Mark what is known, what is assumed, and what is still open.
- **Compact at boundaries.** Summarize after a milestone, before a handoff, and before starting a new phase.
- **Fresh context for independent work.** Use a subagent or a new session when work can be isolated.
- **Never poison the context.** Remove stale instructions, abandoned plans, and contradictory notes.

## Workflow

### 1. Define the objective and the finish line

Write one paragraph:

- What outcome is required?
- What is out of scope?
- What evidence will prove completion?

### 2. Map the sources

List the files, docs, issues, commands, and people that matter. For each, note:

- why it matters;
- whether it is authoritative;
- when it was last updated.

### 3. Collect the minimum

Read only what the current step needs. Prefer:

1. the user's latest instruction;
2. the project's own docs and code;
3. primary sources;
4. prior decisions and state files.

Do not paste entire repositories or long documents into the prompt unless the task requires it.

### 4. Write a state file

Create `STATE.md` or a similar file in the working directory:

```markdown
# State

## Objective

<one paragraph>

## Done

- [x] <completed item with evidence>

## In progress

- [ ] <current item and owner>

## Next

- [ ] <next item>

## Decisions

- <decision> — <reason> — <date>

## Constraints

- <constraint>

## Open questions

- <question and who can answer>

## Important paths

- `<path>` — <why>

## Verification

- `<command>` — <last result>
```

Update it at every milestone.

### 5. Checkpoint

At a milestone:

- run the verification command;
- record the result;
- update the state file;
- remove stale notes;
- summarize what changed.

### 6. Hand off

When another agent or session continues the work, provide:

- objective;
- current state;
- decisions and reasons;
- files and paths;
- commands and results;
- open questions;
- next action.

Do not make the next agent re-derive the whole project.

## Compaction rules

When the context is full:

1. Keep the objective, constraints, decisions, and acceptance criteria.
2. Keep exact paths, commands, error messages, and API contracts.
3. Drop exploratory dead ends, repeated explanations, and raw data that can be re-read.
4. Summarize the rest in a short state file.
5. Start the next phase with the state file, not the full history.

## Subagents

Use a subagent when:

- the work is independent and bounded;
- the subagent can return a compact result;
- the main context should not absorb the full investigation.

Give the subagent:

- a specific question;
- the files or sources to read;
- the output format;
- a limit on scope.

Ask for a short report with evidence, not a transcript.

## Output format

When asked for a handoff, return:

```markdown
## Objective

## Current state

## Decisions

## Files and paths

## Verification

## Open questions

## Next action
```

## Quality checks

- [ ] The objective and non-goals are explicit.
- [ ] Facts, assumptions, and open questions are separated.
- [ ] Important paths and commands are exact.
- [ ] Stale or contradictory notes are removed.
- [ ] The next action is clear.
- [ ] The handoff is self-contained.
- [ ] Verification evidence is included.
