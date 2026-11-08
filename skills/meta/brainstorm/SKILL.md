---
name: brainstorm
description: Generates, compares, and narrows options for an idea, feature, name, strategy, or problem. Use when the user needs divergent thinking, a decision shortlist, or help getting unstuck. Trigger on "brainstorm", "идеи", "варианты", "мозговой штурм", "предложи варианты", "как ещё можно". Separates idea generation from evaluation and does not invent facts.
metadata:
  category: meta
  version: "1.0.0"
  inspired-by: "phuryn/pm-skills, addyosmani/agent-skills, obra/superpowers"
---

# Brainstorm

Generate wide, then narrow with explicit criteria.

## When to use

Use when the user:

- needs ideas for a product, feature, name, campaign, or solution;
- is stuck between options;
- wants a shortlist with trade-offs;
- wants to challenge an obvious answer;
- says "brainstorm", "ideas", "variants", "мозговой штурм".

Do not use when the user already has a decision and needs execution.

## 1. Frame the problem

Write:

- the problem in one sentence;
- who it is for;
- the constraints that cannot change;
- what a good solution must achieve;
- what is explicitly out of scope.

If the problem is vague, ask one question or state an assumption.

## 2. Diverge

Generate ideas in several lenses:

- **User** — what would make this obviously better for the user?
- **Constraint** — what becomes possible if we remove or invert a constraint?
- **Analogy** — how do other industries solve this?
- **Extreme** — what is the 10x version? The 10% version?
- **Contrarian** — what if the opposite were true?
- **Combination** — what two existing ideas can be combined?

Aim for quantity first. Do not evaluate during divergence.

## 3. Cluster

Group ideas by:

- the problem they solve;
- the effort they require;
- the risk they carry;
- the assumption they depend on.

Name each cluster.

## 4. Evaluate

Choose criteria with the user or use sensible defaults:

- impact;
- confidence;
- effort;
- risk;
- reversibility;
- fit with constraints.

Score qualitatively (high/medium/low) rather than with false numerical precision.

## 5. Narrow

Return:

- 3–5 strongest options;
- one conservative option;
- one ambitious option;
- one option that tests the riskiest assumption cheaply.

For each, state:

- the idea;
- why it works;
- what it costs;
- what could kill it;
- the next experiment.

## Output format

```markdown
## Problem

## Constraints

## Ideas

### Cluster 1 — <name>
- <idea>
- <idea>

### Cluster 2 — <name>
- <idea>

## Shortlist

| Option | Impact | Effort | Risk | Why consider |
|---|---|---|---|---|

## Recommendation

<one option and why>

## Next experiment

<the cheapest test of the riskiest assumption>
```

## Rules

- Do not evaluate while generating.
- Do not present a single idea as a brainstorm.
- Do not invent user research, market data, or quotes.
- Do not confuse popularity with fit.
- Include at least one idea that challenges the framing.
- If the user asks for names, check for obvious trademark or language problems and say that legal review is needed.

## Quality checks

- [ ] The problem and constraints are clear.
- [ ] Ideas cover different lenses.
- [ ] Evaluation criteria are explicit.
- [ ] The shortlist includes trade-offs.
- [ ] The recommendation is justified.
- [ ] The next experiment is cheap and testable.
