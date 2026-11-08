---
name: prioritization
description: Ranks features, tasks, ideas, or risks using explicit criteria and frameworks such as RICE, ICE, MoSCoW, Kano, or weighted scoring. Use when the user asks what to do first, how to prioritize a backlog, or how to choose between options. Trigger on "prioritize", "приоритеты", "что делать первым", "что важнее", "бэклог", "RICE", "ICE", "MoSCoW".
metadata:
  category: product
  version: "1.0.0"
  inspired-by: "phuryn/pm-skills, addyosmani/agent-skills"
---

# Prioritization

Make the trade-off explicit. Do not hide judgment behind a score.

## When to use

Use when the user:

- has too many features or tasks;
- needs a roadmap order;
- wants to compare options;
- needs to cut scope;
- asks "what should we do first?".

## 1. Define the decision

- What is being prioritized?
- What is the time horizon?
- What constraints apply: people, budget, dependencies, deadlines?
- Who decides?
- What happens if the list is wrong?

## 2. Choose a method

| Method | Best for | Watch out |
|---|---|---|
| RICE | Features with reach and impact estimates | False precision |
| ICE | Quick early-stage ideas | Subjective scores |
| MoSCoW | Scope negotiation | "Must" inflation |
| Kano | Customer satisfaction features | Needs research |
| Weighted scoring | Transparent multi-criteria decisions | Criteria can be gamed |
| Cost of delay | Time-sensitive work | Hard to estimate |

Use the simplest method that makes the trade-off visible.

## 3. Define criteria

For each criterion:

- what it means;
- how it is measured;
- its weight;
- who provides the estimate.

Do not use a criterion that cannot be estimated or checked.

## 4. Score honestly

- Use ranges when uncertain.
- Mark confidence.
- Separate facts from guesses.
- Do not let a high score hide a fatal dependency.
- Do not compare items at different levels of granularity.

## 5. Sanity check

- Does the top item actually matter?
- Is anything urgent but low impact?
- Is anything cheap but high leverage?
- What is the cost of not doing it?
- What is the reversible option?
- What must be sequenced because of dependencies?

## Output format

```markdown
## Decision

## Criteria

| Criterion | Weight | How measured |
|---|---:|---|

## Scoring

| Item | Criterion 1 | Criterion 2 | Score | Confidence | Notes |
|---|---:|---:|---:|---|---|

## Ranking

1. <item> — <why>
2. <item> — <why>

## Cut list

- <item and why>

## Open questions

- <question>
```

## Rules

- Do not present a score as objective truth.
- Do not invent estimates.
- Do not ignore dependencies.
- Do not prioritize only by urgency.
- Do not let the highest-paid person's opinion become a criterion.
- If the data is insufficient, say so and recommend a cheap test.

## Quality checks

- [ ] The decision and horizon are clear.
- [ ] The method fits the problem.
- [ ] Criteria are measurable.
- [ ] Scores include confidence.
- [ ] Dependencies are considered.
- [ ] The ranking has a rationale.
- [ ] The cut list is explicit.
