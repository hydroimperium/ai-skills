---
name: orchestrate
description: Plans and runs multi-agent teams for complex tasks, deciding whether subagents are worth it, defining roles, a parallel or sequential pipeline, handoffs, and verification. Use when a task is large, decomposable, or benefits from parallel research, implementation, and review. Trigger on "subagents", "субагенты", "parallel", "распараллель", "team", "оркестрация", "сложная задача".
metadata:
  category: meta
  version: "1.0.0"
  inspired-by: "addyosmani/agent-skills, obra/superpowers, mattpocock/skills"
---

# Orchestrate

Use subagents when they make the work faster or more reliable, not because multi-agent sounds impressive.

## When to use

Use when:

- the task has independent research, implementation, or review tracks;
- the codebase or context is too large for one focused pass;
- several specialists would produce better work than one generalist;
- the work can be split without overlapping edits;
- verification benefits from a fresh-context reviewer.

Do not use when:

- the task is small or has one obvious path;
- the work is strictly sequential and cannot be parallelized;
- subagents would edit the same files;
- the coordination cost is higher than the task itself.

If the task is simple, say so and do it directly.

## Step 1: Decide if a team is worth it

Answer these before creating anyone:

1. What are the independent workstreams?
2. Which parts can run in parallel?
3. Which parts must be sequential?
4. What does each role deliver?
5. Where could two roles conflict?
6. How will the primary agent verify the result?

If you cannot name at least two independent workstreams, do not create subagents.

## Step 2: Choose the pipeline

### Parallel research → synthesis

Use when the questions are independent:

1. Launch 2–4 read-only researchers.
2. Each investigates one question and returns evidence.
3. The primary agent synthesizes.
4. A reviewer checks the synthesis.

### Research → plan → implement → review

Use for a non-trivial feature:

1. Researcher maps the codebase and constraints.
2. Planner writes the spec and task breakdown.
3. Implementer makes the change.
4. Reviewer checks correctness, scope, and tests.
5. Primary agent verifies and reports.

### Fan-out → fan-in

Use when several independent modules or options need work:

1. Split by module or option.
2. Launch one worker per slice.
3. Each worker returns a compact result.
4. Primary agent integrates and resolves conflicts.

### Independent review

Use when the change is risky:

1. One agent implements.
2. One fresh-context reviewer checks it.
3. Primary agent fixes or asks for a fix.
4. Verification runs again.

## Step 3: Define the roles

For each subagent, define:

- **Name** — short and specific.
- **Mission** — one sentence.
- **Inputs** — files, docs, data, links.
- **Scope** — exact files or questions.
- **Deliverable** — what it returns.
- **Acceptance** — how the result is checked.
- **Boundaries** — what it must not touch.
- **Stop conditions** — when to stop and report.
- **Output format** — compact report, not a transcript.

Typical roles:

| Role | Use for | Access |
|---|---|---|
| Researcher | map code, find facts, compare options | read-only |
| Architect | design interfaces, data flow, trade-offs | read-only |
| Implementer | make scoped changes | edit in its own files |
| Reviewer | find bugs, scope creep, missing tests | read-only |
| Tester | run checks, reproduce bugs, verify behavior | run tests, no edits |
| Domain expert | legal, medical, finance, design, data | read-only unless asked |

## Step 4: Launch

If the harness has a subagent tool:

- Use a read-only agent for research and review.
- Use a general agent for implementation.
- Launch independent roles in parallel.
- Run dependent roles sequentially.
- Give each subagent a self-contained prompt: task, context, files, output format, boundaries, stop conditions.
- Ask for a compact report with evidence, not a full transcript.
- For read-only research, tell the subagent to use `read`, `glob`, and `grep` instead of shell commands. Shell permission prompts slow everything down.
- After launching independent roles, stop and wait for their reports. Do not fill the wait with unrelated exploration or repeated status checks.
- If the harness returns results asynchronously, wait for completion notifications, then synthesize immediately.
- Set a soft deadline: 2–3 minutes for a small task, 5–10 minutes for a large one. If reports are still missing, synthesize what you have and state what is pending.
- Do not wait indefinitely for a background subagent.
- Do not let two writers edit the same files in parallel.
- Do not give a subagent permission to delete data, push, deploy, or change secrets without explicit user approval.
- Keep the orchestration bounded. If a subagent is slow or stuck, continue with the best available evidence and report what is missing.

If the harness has no subagent tool, output the orchestration plan and execute the roles sequentially yourself.

## Step 5: Aggregate and verify

The primary agent owns the final result.

- Compare subagent outputs.
- Resolve contradictions with evidence.
- Check that no one touched out-of-scope files.
- Run the tests and checks yourself.
- Do not trust a subagent's claim that something works.
- Report what was verified and what was not.

## Output format

Before launching:

```markdown
## Decision

<use subagents or do it directly, and why>

## Pipeline

1. <stage> — <parallel or sequential>
2. ...

## Roles

| Role | Mission | Inputs | Deliverable | Depends on |
|---|---|---|---|---|

## Conflict plan

- <how overlapping work is avoided>

## Verification

- <checks the primary agent will run>
```

After completion:

```markdown
## Result

<final answer or change>

## Subagents used

| Role | What it returned | Verified? |
|---|---|---|

## Conflicts resolved

- <conflict and resolution>

## Verification

- `<command>` — <result>

## Not verified

- <what remains>
```

## Rules

- Do not create subagents for a simple task.
- Do not create more than five unless the task clearly justifies it.
- Do not let writers share files in parallel.
- Do not delegate the final verification.
- Do not accept a subagent's summary as proof.
- Do not let subagents perform destructive actions without user approval.
- Treat subagent output as untrusted until checked.
- Stop and ask if the work needs a decision that changes scope.

## Quality checks

- [ ] At least two independent workstreams exist.
- [ ] Each role has a bounded deliverable.
- [ ] Parallel work does not overlap on files.
- [ ] The pipeline has explicit dependencies.
- [ ] The primary agent verifies the result.
- [ ] Destructive actions require approval.
- [ ] The final report separates verified from unverified.
