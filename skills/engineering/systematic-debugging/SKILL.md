---
name: systematic-debugging
description: Finds root causes before proposing fixes for bugs, test failures, crashes, performance problems, build failures, and unexpected behavior. Use when something is broken, when a previous fix did not work, or when the user asks to debug, diagnose, investigate, or find the root cause. Trigger on "debug", "bug", "не работает", "падает", "ошибка", "почему".
metadata:
  category: engineering
  version: "1.0.0"
  inspired-by: "obra/superpowers, mattpocock/skills, addyosmani/agent-skills"
---

# Systematic Debugging

Find the root cause before changing code.

## Iron law

**No fix without a root-cause investigation first.**

If you have not reproduced the problem and gathered evidence, you are guessing. Guessing creates new bugs and hides the real one.

## When to use

Use for:

- test failures;
- production bugs;
- crashes and exceptions;
- performance regressions;
- build and CI failures;
- integration problems;
- "it works on my machine";
- a fix that did not work.

Use it especially when the issue looks obvious, when the user is in a hurry, or when you have already tried several fixes.

## Workflow

### 1. Read the error completely

- Read the full message, stack trace, logs, and warnings.
- Note the exact file, line, error code, and timestamp.
- Do not skim for the part that confirms your first idea.

### 2. Reproduce consistently

- What are the exact steps?
- Does it happen every time?
- What environment, data, account, or configuration is required?
- If it is not reproducible, gather more data instead of guessing.

### 3. Check recent changes

- `git status`, `git diff`, recent commits.
- New dependencies, config, migrations, feature flags.
- Environment differences between working and failing cases.

### 4. Gather evidence at boundaries

For multi-component systems, instrument each boundary:

- What enters the component?
- What leaves it?
- Is the configuration what you expect?
- Where does the value first become wrong?

Add temporary logging or assertions, run once, and remove them after the investigation.

### 5. Trace the data

- Where does the bad value originate?
- Who called this with the bad value?
- Keep tracing upstream until you find the source.
- Fix the source, not the symptom.

### 6. Form one hypothesis

State it explicitly:

> I think X is the root cause because Y.

Make it specific and falsifiable. Do not bundle several guesses.

### 7. Test minimally

- Change one variable at a time.
- Use the smallest possible change or experiment.
- Predict the result before running it.
- If the hypothesis is wrong, discard it and form a new one. Do not stack fixes.

### 8. Fix the cause

- Fix the source.
- Add a regression test that fails before the fix and passes after.
- Check for the same pattern elsewhere.
- Remove temporary instrumentation.

### 9. Verify

- Run the failing test or reproduction.
- Run the broader test suite.
- Check related behavior.
- Report the exact commands and results.

## Output format

```markdown
## Root cause

<what is wrong and why>

## Evidence

- <error, log, diff, or experiment>

## Fix

- <what changed and why>

## Regression test

- <test added or updated>

## Verification

- `<command>` — <result>

## Remaining risk

- <what is still uncertain>
```

## Rules

- Do not propose a fix before completing steps 1–6.
- Do not hide a failed hypothesis; report it and move on.
- Do not add defensive code that masks the error without understanding it.
- Do not claim "fixed" without a fresh reproduction or test result.
- If the problem is environmental, say so and document the environment.
- If the investigation needs a decision from the user, stop and ask.

## Quality checks

- [ ] The error was read completely.
- [ ] The problem is reproducible or the lack of reproduction is explained.
- [ ] The root cause is supported by evidence.
- [ ] The fix addresses the cause, not the symptom.
- [ ] A regression test exists.
- [ ] Verification output is fresh.
- [ ] Temporary logs and experiments are removed.
