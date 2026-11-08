---
name: refactoring
description: Improves code structure without changing behavior. Use when code is hard to read, duplicated, tightly coupled, or risky to change; when preparing a feature; or when the user asks to refactor, simplify, clean up, or reduce technical debt. Trigger on "refactor", "рефакторинг", "упрости код", "почисти код", "техдолг".
metadata:
  category: engineering
  version: "1.0.0"
  inspired-by: "mattpocock/skills, addyosmani/agent-skills, wshobson/agents"
---

# Refactoring

Change the shape of the code, not its behavior.

## When to use

Use when:

- code is duplicated or hard to understand;
- a change requires touching many unrelated places;
- a module has too many responsibilities;
- tests are hard to write because the design is tangled;
- the user asks for cleanup or technical debt reduction.

Do not use when behavior must change; that is a feature or bug fix.

## Iron rule

**Behavior must stay the same unless the user explicitly asks for a behavior change.**

If behavior changes, it is not a refactor. Split the work.

## 1. Establish the safety net

- Find existing tests for the area.
- If coverage is missing, add characterization tests that capture current behavior.
- Run the tests before changing anything.
- Record the baseline result.

Do not start a refactor on untested, poorly understood code without a safety net.

## 2. Name the smell

Identify the concrete problem:

- duplicated logic;
- long function;
- large module;
- feature envy;
- primitive obsession;
- repeated conditionals;
- hidden coupling;
- unclear name;
- speculative abstraction;
- inconsistent data flow.

Describe the smell in one sentence and where it hurts.

## 3. Choose the smallest move

Common refactors:

- extract function or module;
- rename for clarity;
- inline an unnecessary abstraction;
- replace conditional with a lookup or polymorphism;
- move behavior to the data it belongs to;
- introduce a type for a domain concept;
- split a module by reason to change;
- remove dead code.

Choose the smallest move that fixes the named smell.

## 4. Work in small steps

For each step:

1. Make one structural change.
2. Run the relevant tests.
3. Commit or checkpoint if the repository uses commits.
4. Repeat.

Do not combine a refactor with a feature change or a dependency upgrade.

## 5. Verify

- The test suite passes.
- The public behavior is unchanged.
- The diff is smaller or clearer than the original.
- No new abstraction exists without a current need.
- Performance did not regress on a relevant path.

## Output format

```markdown
## Smell

<what is wrong and where>

## Safety net

- <tests or characterization tests>
- Baseline: <result>

## Changes

1. <structural change>
2. <structural change>

## Verification

- `<command>` — <result>

## Remaining risk

- <what is still fragile>
```

## Rules

- Do not change behavior without saying so.
- Do not refactor and add features in the same change.
- Do not introduce an abstraction for a single use.
- Do not rewrite the whole module when a small extraction fixes the problem.
- Do not delete code you do not understand.
- Do not claim tests pass without fresh output.

## Quality checks

- [ ] Behavior is unchanged.
- [ ] A safety net exists.
- [ ] The smell is named.
- [ ] Each step is small.
- [ ] Tests pass after each step.
- [ ] The result is simpler, not merely different.
- [ ] No speculative abstraction was added.
