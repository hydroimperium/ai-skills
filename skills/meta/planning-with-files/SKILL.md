---
name: planning-with-files
description: "Keeps a long task's plan and findings in markdown files on disk, re-reads them at each step, and recovers after compaction, /clear, or a crashed session. Use when a task spans many steps or sessions, when the context is filling up, or when the user asks to plan on disk, keep a task plan, resume after a restart, or avoid losing progress. Trigger on \"planning with files\", \"task plan\", \"progress file\", \"resume after compaction\", \"план в файле\", \"не потерять прогресс\", \"продолжи после перезапуска\". Uses task_plan.md, findings.md, and progress.md, updates them at milestones, and closes with a deterministic completion gate. For a chat-only handoff use context-engineering; for multi-agent coordination use orchestrate."
metadata:
  category: meta
  version: "1.0.0"
  inspired-by: "OthmanAdi/planning-with-files"
---

# Planning With Files

Do not keep a long plan only in the context window. Put it on disk, read it before each step, and let the files survive compaction.

## When to use

Use when:

- a task will take many steps, sessions, or a long tool run;
- the context is filling up or has already been compacted;
- the user wants to resume after a restart, `/clear`, or a crash;
- the work has a plan, findings, and progress worth preserving;
- several agents or sessions will touch the same task.

Do not use when:

- the task is a one-off answer with no follow-up;
- the plan fits in one short message;
- the user only needs a handoff summary; use `context-engineering`.

## Files

Create three files in the working directory, unless the user chooses another location:

- `task_plan.md` — objective, scope, constraints, steps, acceptance criteria;
- `findings.md` — facts, evidence, decisions, open questions;
- `progress.md` — done, current, next, blockers, verification results.

Keep them short. Link to source files instead of pasting them.

### task_plan.md

```markdown
# Task Plan

## Objective

<one paragraph: outcome and why>

## Scope

- In: ...
- Out: ...

## Constraints

- ...

## Steps

- [ ] <step> — <done when>
- [ ] ...

## Acceptance criteria

- [ ] <observable result>
- [ ] <verification command or check>

## Completion gate

- All acceptance criteria checked with evidence.
- No unresolved blocker without a named owner.
```

### findings.md

```markdown
# Findings

## Facts

- <fact> — evidence: `<path:line>` or `<command output>`

## Decisions

- <decision> — reason — date

## Open questions

- <question> — who can answer
```

### progress.md

```markdown
# Progress

## Done

- [x] <item> — evidence

## Current

- [ ] <item> — owner

## Next

- [ ] <item>

## Blockers

- <blocker> — next action

## Verification

- `<command>` — <last result>
```

## Workflow

1. **Initialize.** Write the three files before starting the work. If they already exist, read them first and update rather than overwrite.
2. **Read before each step.** At the start of a step, read `task_plan.md`, `findings.md`, and `progress.md`. Do not rely on memory or the chat history.
3. **Work in small steps.** One step at a time, with a clear done condition.
4. **Update at milestones.** After each meaningful result, update all three files. Remove stale notes instead of appending forever.
5. **Recover.** If the context is lost, read the files and continue from `progress.md`. If a file is missing, reconstruct it from the session or export, then continue.
6. **Close with the gate.** Do not declare the task done until every acceptance criterion has evidence. Run the verification command and record the result.

## Rules

- The files are the source of truth, not the chat.
- Every fact needs evidence: a path, a command, a test result, or a user answer.
- Mark assumptions and open questions explicitly.
- Never put secrets, tokens, passwords, or personal data in the files.
- Do not let the plan grow without bound. Split or archive completed phases.
- If the user changes the objective, update the plan before doing more work.

## Output format

When reporting progress, return:

```markdown
## Status

- Current step: ...
- Done: ...
- Next: ...
- Blockers: ...

## Evidence

- `<path:line>` or `<command>` — result

## Files

- `task_plan.md`
- `findings.md`
- `progress.md`
```

## Quality checks

- The plan has an objective and observable acceptance criteria.
- `progress.md` matches the actual state.
- Every completed item has evidence.
- The next step is unambiguous.
- The task is not called done before the completion gate passes.
