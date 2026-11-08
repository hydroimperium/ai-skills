---
name: test-driven-development
description: Implements features and bug fixes with a red-green-refactor loop. Use when writing new behavior, fixing a bug, refactoring, or when the user asks for TDD, tests first, or test coverage. Trigger on "TDD", "test first", "напиши тесты", "через тесты", "red green refactor".
metadata:
  category: engineering
  version: "1.0.0"
  inspired-by: "obra/superpowers, mattpocock/skills, addyosmani/agent-skills"
---

# Test-Driven Development

Write the test first. Watch it fail. Write the smallest code that passes. Then refactor.

## Iron law

**No production code without a failing test first.**

If you (the agent) wrote production code in this session before the test, delete only that code and start from the test. Do not keep it as "reference" and do not adapt it while writing tests. If the code is a user's uncommitted change, stop and ask before deleting or rewriting it.

## When to use

Use for:

- new features;
- bug fixes;
- behavior changes;
- refactoring that changes behavior;
- any code that will be maintained.

Exceptions, only with the user's approval:

- throwaway prototypes;
- generated code;
- configuration files;
- pure documentation.

## Red-green-refactor

### RED: write one failing test

- Test one behavior.
- Give the test a clear name.
- Test real behavior, not a mock's implementation.
- Use the smallest input that proves the behavior.

Run the test. It must fail because the behavior is missing, not because of a typo or setup error.

### GREEN: write the smallest code that passes

- Do the simplest thing that makes the test pass.
- Do not add options, abstractions, or edge cases the test does not require.
- Run the test again. It must pass.
- Run the relevant test file to check for regressions.

### REFACTOR: clean up while green

- Remove duplication.
- Improve names.
- Simplify structure.
- Keep the tests green after each small step.

Then write the next failing test.

## Test quality

Good tests:

- have names that describe behavior;
- test one thing;
- use real code paths where practical;
- cover the happy path and important edge cases;
- fail for the right reason;
- are deterministic and independent.

Bad tests:

- test implementation details;
- assert that a mock was called instead of what the code does;
- depend on execution order;
- use arbitrary sleeps;
- hide failures behind broad catches;
- assert only that "no error was thrown".

## Bug-fix loop

1. Reproduce the bug with a failing test.
2. Confirm the test fails for the expected reason.
3. Fix the smallest cause.
4. Confirm the test passes.
5. Run the broader suite.
6. Add a regression note if the bug was subtle.

## Output format

```markdown
## Behavior

<what the test proves>

## Red

- Test: `<test name>`
- Failure: <expected failure>

## Green

- Change: <minimal implementation>
- Result: <test output>

## Refactor

- <cleanup performed>

## Verification

- `<command>` — <result>
```

## Rules

- Do not write multiple tests before making the first one pass.
- Do not change the test to match the implementation unless the test was wrong.
- Do not mock the behavior under test.
- Do not skip the "watch it fail" step.
- Do not claim tests pass without fresh output.
- If the test is hard to write, improve the design before forcing the test.

## Quality checks

- [ ] The test failed before the implementation.
- [ ] The failure reason was the missing behavior.
- [ ] The implementation is minimal.
- [ ] The test passes now.
- [ ] The broader suite passes.
- [ ] The test is readable and deterministic.
- [ ] No production code was written before a failing test.
