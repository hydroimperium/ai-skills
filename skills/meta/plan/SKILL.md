---
name: plan
description: Turns an idea, request, or spec into a reviewable plan with scope, tasks, acceptance criteria, dependencies, risks, and verification. Use when the user asks to plan, write a spec, break work into tasks, prepare implementation, or says "составь план", "распиши задачи", "сделай spec", "разбей на этапы". Does not write production code.
metadata:
  category: meta
  version: "1.0.0"
  inspired-by: "addyosmani/agent-skills, obra/superpowers, OthmanAdi/planning-with-files, mattpocock/skills"
---

# Plan

Turn intent into a plan that another agent or engineer can execute without guessing.

## When to use

Use when the user:

- has an idea or request and wants a plan;
- wants a spec before implementation;
- wants work broken into tasks with acceptance criteria;
- needs dependencies, risks, and verification;
- says "plan", "spec", "tasks", "составь план", "разбей на задачи".

Do not use for a trivial one-step change. Do not write production code in plan mode.

## Modes

Choose one mode from the request:

- **Spec** — define the problem, users, solution, requirements, non-goals, and success metrics.
- **Plan** — turn a spec into phases, tasks, dependencies, risks, and verification.
- **Tasks** — break a plan into small, ordered, assignable tickets.

If the user asks for "plan" and no spec exists, create a short spec first, then the plan.

## Workflow

### 1. Read the context

- Read the request, existing spec, issue, code, docs, and constraints.
- Check for an existing `PLAN.md`, `SPEC.md`, `TODO.md`, or `tasks/` directory.
- If an incomplete plan exists for different work, stop and ask before overwriting.

### 2. Define the outcome

Write:

- the problem in one paragraph;
- who has the problem;
- what success looks like;
- what is out of scope;
- the constraints that cannot change.

### 3. Surface assumptions and open questions

- Mark facts, assumptions, and unknowns separately.
- Ask only questions that change the plan.
- If the user says "just plan", use explicit assumptions and list them.

### 4. Design the approach

- Describe the smallest viable approach.
- Name the components, interfaces, data, and dependencies.
- Identify the seams where the work can be tested.
- Call out alternatives only if the trade-off matters.

### 5. Break the work down

Each task must have:

- a verb-first title;
- a clear deliverable;
- acceptance criteria;
- verification;
- dependencies;
- estimated size (S/M/L, not false precision);
- owner, if known.

Prefer vertical slices: one task should deliver a complete, testable path, not a horizontal layer.

### 6. Add checkpoints

Place a checkpoint after each phase:

- run the verification;
- review the diff;
- update the plan;
- decide whether to continue.

### 7. Write the plan

Save to `PLAN.md` or the path the user specifies. Use the template below.

## Plan template

```markdown
# <Title>

## Problem

<user and problem>

## Outcome

<what success looks like>

## Non-goals

- <out of scope>

## Constraints

- <constraint>

## Assumptions

- <assumption>

## Open questions

- <question and owner>

## Approach

<the smallest viable approach>

## Tasks

### Phase 1 — <name>

- [ ] **<Task title>**
  - Deliverable: <what exists at the end>
  - Acceptance: <observable criteria>
  - Verification: `<command or check>`
  - Depends on: <task or none>
  - Size: S/M/L

## Risks

| Risk | Impact | Mitigation |
|---|---|---|
| <risk> | <impact> | <mitigation> |

## Verification

- `<command>` — <what it proves>
- <manual check>

## Rollout

- <migration, feature flag, communication, rollback>
```

## Rules

- Do not write code in plan mode.
- Do not invent requirements, metrics, or constraints.
- Do not create tasks that cannot be verified.
- Do not hide dependencies.
- Do not use false precision for estimates.
- If the plan is large, split it into phases with checkpoints.
- If the request is ambiguous, ask one round of questions or state assumptions.

## Output format

When the user asks for a plan in chat, return the plan in a Markdown block and state where it should be saved. When the user asks to save it, write the file.

## Quality checks

- [ ] The problem and outcome are clear.
- [ ] Non-goals are explicit.
- [ ] Tasks are small, ordered, and verifiable.
- [ ] Dependencies are visible.
- [ ] Risks have mitigations.
- [ ] Verification is concrete.
- [ ] No code was written.
- [ ] Existing plans were not overwritten silently.
