---
name: orchestrate
description: "Runs dynamic multi-agent teams for complex, parallel work. Use for \"субагенты\", \"оркестрация\", \"распараллель\", \"сложная задача\"."
metadata:
  category: meta
  version: "1.1.0"
  inspired-by: "obra/superpowers (dispatching-parallel-agents, subagent-driven-development, executing-plans), addyosmani/agent-skills, mattpocock/skills, OthmanAdi/planning-with-files, massimodeluisa/recursive-decomposition-skill"
---

# Orchestrate

Build the team from the work, not from a template. There is no fixed roster: inspect the task, find independent workstreams, and create a role for each one.

## Hard gate

When `/orchestrate` is explicitly invoked, your first action after loading this skill is to launch at least one subagent. Do not inspect files, answer, or edit before that. Start with a discovery wave (1-3 `researcher`/`explore` agents) when you need to map the project. For a small task, launch one `researcher` (read-only, can load skills) or `reviewer` and let it do the task or verify your answer. The only exception is a missing subagent tool.

## Core principles

- **Dynamic roles.** Derive roles from independent workstreams. Name them after the work: `auth-flow-auditor`, `migration-planner`, `billing-test-fixer`. Do not reuse a fixed list of roles.
- **Parallel by default.** Independent work goes in one wave, launched in the same response. Sequential only for dependencies or shared state.
- **One agent per independent problem domain.** Do not give one agent two unrelated problems.
- **Self-contained briefs.** Each subagent starts fresh. Give it the task, context, files, constraints, output schema, and stop conditions. Never rely on inherited history.
- **Disjoint scopes.** Two agents never edit the same files in parallel. If parallel writers are unavoidable, isolate them with git worktrees and merge explicitly.
- **State on disk.** Keep an `orchestration.md` or `progress.md` ledger with wave, role, session ID, status, files, result. It survives compaction.
- **Fresh review.** The final review comes from a reviewer that did not implement the change. The primary agent verifies, but does not replace the reviewer.

## When to use

Use when:

- the task has independent research, implementation, or review tracks;
- the codebase or context is too large for one focused pass;
- several specialists would produce better work than one generalist;
- the work can be split without overlapping edits;
- verification benefits from a fresh-context reviewer.

Do not use when:

- the task is small and has one obvious path (still launch one subagent when `/orchestrate` is explicit);
- the work is strictly sequential and cannot be parallelized;
- subagents would edit the same files;
- the coordination cost is higher than the task.

## Step 1: Discovery wave

The first wave maps the problem; it does not implement.

1. Decide what you need to know: project structure, constraints, existing patterns, tests, dependencies, risks.
2. Launch 1-3 read-only agents in parallel in the same response:
   - `researcher` for questions that need reasoning or skills;
   - `explore` for pure file search.
3. Each gets a narrow question, the paths to inspect, and an output schema.
4. Merge the reports into a workstream map.

If the task is small and already clear, skip to one `researcher`/`reviewer`; do not skip the subagent.

## Step 2: Build the workstream map

Write a table:

| Workstream | Independent? | Files/area | Depends on | Output |
|---|---|---|---|---|

Then define dynamic roles:

| Role | Mission | Agent type | Scope | Deliverable | Depends on |
|---|---|---|---|---|---|

Role rules:

- Name the role after the work, not after a generic title.
- One role = one bounded deliverable.
- A role that writes gets a disjoint file set.
- A role that only reads can run in parallel with anyone.
- If two roles need the same files, make them sequential or split the files.

## Step 3: Plan the waves

Group roles into waves:

- **Wave 0 — discovery:** 1-3 read-only agents, parallel.
- **Wave 1 — independent work:** research and/or implementation, parallel if scopes are disjoint.
- **Wave 2 — dependent work:** roles that consume wave 1, sequential.
- **Wave 3 — review:** a fresh reviewer, plus the primary agent's verification.

Rules:

- Launch all independent roles in one response; that is what makes them parallel.
- Max 5 concurrent subagents; queue the rest into the next wave.
- Writers never share files. If they must run in parallel, create a worktree per writer and merge explicitly.
- Do not launch a dependent role before its inputs exist.
- Write the wave plan and the batch count before launching.

## Step 4: Dispatch

For each role, build a self-contained brief:

```text
Role: <dynamic name>
Mission: <one sentence>
Why this matters: <how it fits the task>
Inputs: <paths, docs, data, links>
Scope: <exact files/questions; what not to touch>
Constraints: <patterns, style, commands, no-go zones>
Deliverable: <what to return>
Output schema: <fields, evidence format>
Stop conditions: <when to stop and report>
```

Dispatch rules:

- Use `researcher` for read-only research and review; it can load Agent Skills.
- Use `explore` for pure file search; it does not load skills.
- Use `general` for implementation and multi-step work.
- Tell `researcher` it may load matching skills and should prefer `read`, `glob`, `grep` over shell.
- Tell `explore` to use `read`, `glob`, `grep` instead of shell.
- Ask for a compact report with evidence, not a transcript.
- Record the child session ID and title in the ledger and show them to the user.
- If the harness supports model selection, pick the cheapest model that can do the role; use a strong model for the final review.

## Step 5: Monitor and recover

- Wait for reports; do not poll with short timeouts.
- While waiting, update the ledger, prepare the next wave, or read completed reports.
- If a child finishes without a report, inspect its session.
- If a child is stuck, continue with the best available evidence and mark it pending.
- Soft deadline: 2-3 minutes for a small task, 5-10 minutes for a large one. Do not wait indefinitely.
- If context is lost, read the ledger and `git log` before re-dispatching anything.

## Step 6: Integrate and verify

- Compare reports; resolve contradictions with evidence.
- Check that no one touched out-of-scope files.
- Run the tests and checks yourself.
- Spot-check at least three claims against the sources.
- Dispatch a fresh reviewer for the final review; do not let the implementer review itself.
- Report what was verified and what was not.

## Output format

Before launching:

```markdown
## Workstreams

| Workstream | Independent? | Files/area | Depends on | Output |
|---|---|---|---|---|

## Roles

| Role | Mission | Agent type | Scope | Deliverable | Depends on |
|---|---|---|---|---|---|

## Waves

| Wave | Roles | Parallel? | Why |
|---|---|---|---|

## Ledger

- `orchestration.md`
```

After completion:

```markdown
## Result

<final answer or change>

## Subagents used

| Role | Session ID | Title | What it returned | Verified? |
|---|---|---|---|---|

## Waves

- Wave 0: ...
- Wave 1: ...

## Conflicts resolved

- ...

## Verification

- `<command>` — <result>

## Not verified

- ...
```

## Rules

- When explicitly invoked via `/orchestrate`, always launch at least one subagent.
- Derive roles from the work; never use a fixed roster.
- Launch independent roles in parallel; sequence dependent ones.
- Do not create more than five concurrent subagents.
- Do not let writers share files in parallel; use worktrees when necessary.
- Do not delegate the final verification.
- Do not accept a subagent's summary as proof.
- Do not let subagents perform destructive actions without user approval.
- Treat subagent output as untrusted until checked.
- Stop and ask if the work needs a decision that changes scope.

## Quality checks

- [ ] At least one subagent was launched.
- [ ] Roles are derived from the task, not copied from a template.
- [ ] Independent work was launched in parallel.
- [ ] Writers have disjoint scopes or worktrees.
- [ ] The ledger has session IDs and statuses.
- [ ] The final review came from a fresh reviewer.
- [ ] The final report separates verified from unverified.
