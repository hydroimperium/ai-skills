---
name: verification-before-completion
description: Verifies work before claiming it is done, fixed, passing, or ready. Use when finishing a task, before a commit or PR, before saying "готово", or when the user asks whether something works. Trigger on "verify", "проверь", "готово ли", "докажи, что работает", "тесты проходят". Requires fresh command output and evidence instead of assumptions.
metadata:
  category: engineering
  version: "1.0.0"
  inspired-by: "obra/superpowers, addyosmani/agent-skills"
---

# Verification Before Completion

Do not claim success without evidence.

## When to use

Use before:

- saying "done", "fixed", "works", "tests pass", or "ready";
- committing or opening a PR;
- handing work to another person or agent;
- shipping or deploying;
- answering "did it work?".

## Evidence hierarchy

Strongest to weakest:

1. **Fresh command output** — tests, build, lint, typecheck, reproduction.
2. **Observed behavior** — manual check with exact steps and result.
3. **Static evidence** — code inspection, types, schema, diff.
4. **Reasoning** — "it should work" (not evidence).

Never present level 4 as if it were level 1.

## Checklist

### Build and static checks

- [ ] The project builds.
- [ ] Type checking passes, if the project uses it.
- [ ] Linting passes, if the project uses it.
- [ ] Formatting is applied, if the project uses it.

### Tests

- [ ] The relevant tests pass.
- [ ] The broader suite passes, or the skipped scope is explained.
- [ ] New behavior has a test.
- [ ] The test failed before the fix, if this was a bug fix.
- [ ] Test output is fresh, not remembered.

### Behavior

- [ ] The original reproduction now succeeds.
- [ ] Important edge cases were checked.
- [ ] The change works in the target environment, not only in theory.
- [ ] No unrelated behavior changed.

### Change hygiene

- [ ] The diff contains only the intended changes.
- [ ] No debug logs, temporary files, or commented-out code remain.
- [ ] No secrets or personal data are included.
- [ ] Dependencies and migrations are intentional.
- [ ] The user's uncommitted changes are preserved.

### Reporting

- [ ] Exact commands are listed.
- [ ] Results are summarized honestly.
- [ ] Anything not verified is named.
- [ ] Remaining risks are stated.

## Output format

```markdown
## Verified

- `<command>` — <result>
- <manual check> — <result>

## Not verified

- <what was not checked and why>

## Risks

- <remaining risk>

## Verdict

<done / done with caveats / not done>
```

## Rules

- Do not say "tests pass" without the command and result.
- Do not say "fixed" if the reproduction was not rerun.
- Do not hide a failing check.
- Do not run destructive commands without approval.
- If a check cannot be run, say so and explain the impact.
- If the user's changes conflict with the task, stop and ask.

## Quality checks

- [ ] Every claim has evidence.
- [ ] The evidence is fresh.
- [ ] The verification matches the user's definition of done.
- [ ] Unverified items are explicit.
- [ ] The verdict is honest.
