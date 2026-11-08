---
name: project-planning
description: Plans projects and initiatives with goals, scope, milestones, dependencies, risks, owners, and status tracking. Use when the user asks for a project plan, roadmap, timeline, launch plan, or help coordinating work across people. Trigger on "project plan", "roadmap", "план проекта", "дорожная карта", "запуск", "сроки", "зависимости".
metadata:
  category: work
  version: "1.0.0"
  inspired-by: "phuryn/pm-skills, addyosmani/agent-skills"
---

# Project Planning

Make the plan executable by real people with real dependencies.

## When to use

Use when the user:

- needs a project or launch plan;
- wants a roadmap or milestone schedule;
- needs to coordinate work across teams;
- wants to expose dependencies and risks;
- needs a status update or recovery plan.

## 1. Define the outcome

Write:

- the goal in one sentence;
- the measurable success criteria;
- the deadline or timebox;
- the sponsor and decision-maker;
- what is out of scope.

## 2. Map the work

Break the project into:

- workstreams;
- milestones;
- deliverables;
- tasks;
- owners;
- dependencies.

Prefer vertical slices that produce a usable result, not horizontal layers that produce nothing until the end.

## 3. Identify dependencies

For each dependency, record:

- what it depends on;
- who owns it;
- when it is needed;
- what happens if it is late;
- the fallback.

Dependencies between people and teams are the most common cause of slippage.

## 4. Assess risks

For each risk:

- likelihood;
- impact;
- early warning signal;
- mitigation;
- owner.

Include technical, product, people, vendor, legal, and timeline risks.

## 5. Build the schedule

- Work backward from the deadline.
- Add buffers for integration and review, not for every task.
- Mark critical path.
- Identify what can run in parallel.
- Do not use false precision; use ranges where estimates are uncertain.

## 6. Define communication

- Who needs what update, how often, and in what format?
- What is the escalation path?
- What decisions need approval?
- Where is the source of truth?

## 7. Output format

```markdown
# <Project>

## Goal

## Success criteria

## Scope

## Non-goals

## Milestones

| Milestone | Date | Owner | Deliverable |
|---|---|---|---|

## Workstreams

### <Workstream>

- [ ] <Task> — <owner> — <due> — <depends on>

## Dependencies

| Dependency | Owner | Needed by | Risk if late |
|---|---|---|---|

## Risks

| Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|

## Critical path

## Communication

## Status

- Green / Yellow / Red
- <reason>
```

## Rules

- Do not invent dates, owners, or commitments.
- Do not hide a dependency.
- Do not present an estimate as certainty.
- Do not plan 100% utilization; leave room for review and rework.
- If the deadline is impossible, say so with options.
- If the plan depends on a decision, mark it as open.

## Quality checks

- [ ] The goal and success criteria are measurable.
- [ ] Scope and non-goals are clear.
- [ ] Milestones have owners and dates.
- [ ] Dependencies are visible.
- [ ] Risks have mitigations.
- [ ] The critical path is identified.
- [ ] Communication and escalation are defined.
