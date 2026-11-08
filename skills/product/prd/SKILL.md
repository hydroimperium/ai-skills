---
name: prd
description: Writes product requirement documents with problem, users, goals, non-goals, requirements, success metrics, risks, and rollout. Use when the user asks for a PRD, feature spec, product brief, or requirements document. Trigger on "PRD", "product requirements", "спецификация фичи", "требования", "ТЗ", "продуктовый документ".
metadata:
  category: product
  version: "1.0.0"
  inspired-by: "phuryn/pm-skills, addyosmani/agent-skills"
---

# PRD

Define the problem and the decision before describing the feature.

## When to use

Use when the user:

- has a product idea and needs a PRD;
- wants to align a team on requirements;
- needs acceptance criteria and success metrics;
- wants to evaluate scope and non-goals;
- asks for a feature spec.

## 1. Problem first

Write:

- who has the problem;
- what they do today;
- why it is painful;
- what happens if nothing changes;
- evidence: interviews, data, support tickets, or a clear hypothesis.

Do not start with the solution.

## 2. Define the outcome

- the user outcome;
- the business outcome;
- the metric that will move;
- the baseline and target;
- the time window.

If the metric is unknown, say so and propose a measurement.

## 3. Scope

- what is included;
- what is explicitly excluded;
- what is a later phase;
- what assumptions must be true.

## 4. Requirements

Write requirements as observable behavior:

- user story;
- acceptance criteria;
- edge cases;
- error states;
- permissions;
- analytics events.

Avoid vague verbs like "support", "improve", "optimize" without a measurable definition.

## 5. Risks and dependencies

- technical risk;
- product risk;
- adoption risk;
- legal, privacy, and security risk;
- dependencies on other teams or vendors.

## 6. Rollout

- launch plan;
- feature flag;
- migration;
- communication;
- support readiness;
- rollback.

## Output format

```markdown
# <Feature> PRD

## Problem

## Users

## Evidence

## Goals

## Non-goals

## Success metrics

| Metric | Baseline | Target | Window |
|---|---:|---:|---|

## Requirements

### <Requirement>

- User story:
- Acceptance criteria:
- Edge cases:
- Analytics:

## Risks

| Risk | Impact | Mitigation |
|---|---|---|

## Dependencies

## Rollout

## Open questions
```

## Rules

- Do not invent user research or metrics.
- Do not confuse a solution with a problem.
- Do not write requirements that cannot be verified.
- Do not hide a dependency.
- Do not promise a date without a plan.
- If the feature is large, propose a smaller first phase.

## Quality checks

- [ ] The problem is supported by evidence.
- [ ] The outcome is measurable.
- [ ] Non-goals are explicit.
- [ ] Requirements are testable.
- [ ] Risks and dependencies are visible.
- [ ] Rollout and rollback are defined.
- [ ] No facts were invented.
