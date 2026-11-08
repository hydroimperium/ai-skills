---
name: code-review
description: Reviews a branch, pull request, commit range, or uncommitted changes for correctness, standards, scope, tests, and risk. Use when the user asks to review code, check a PR, inspect a diff, or decide whether a change is ready to merge. Trigger on "review", "code review", "ревью", "проверь код", "посмотри PR", "можно мержить".
metadata:
  category: engineering
  version: "1.0.0"
  inspired-by: "mattpocock/skills, addyosmani/agent-skills, obra/superpowers"
---

# Code Review

Review the change, not the author. Report findings with evidence and separate blocking issues from suggestions.

## When to use

Use when the user:

- asks for a code review;
- wants to know whether a branch or PR is ready to merge;
- asks to inspect uncommitted changes;
- wants a second opinion on a diff;
- asks to compare implementation with a spec or issue.

## 1. Pin the review target

Determine the exact range:

- `git diff <base>...HEAD` for a branch or PR;
- `git diff` for uncommitted changes;
- `git show <commit>` for one commit;
- the user's specified files or paths.

Verify the ref resolves and the diff is non-empty. If the user did not specify a base, ask for it or use the repository's default branch.

## 2. Find the spec and standards

Spec sources, in order:

1. issue or ticket referenced in commits;
2. a path the user provided;
3. `docs/`, `specs/`, or a feature document;
4. the user's description.

Standards sources:

- `CONTRIBUTING.md`;
- `CODING_STANDARDS.md`;
- linter and formatter config;
- existing patterns in nearby code;
- the repository's architecture docs.

If there is no spec, say so and review against the stated intent and the code's own contracts.

## 3. Review on separate axes

### Axis A: correctness and risk

- Does the code do what it claims?
- Are there logic errors, off-by-one errors, race conditions, or unhandled errors?
- Are inputs validated at boundaries?
- Are errors propagated or swallowed?
- Are resources closed?
- Is state mutated safely?
- Are concurrency and idempotency handled?
- Are security-sensitive paths protected?
- Are performance-sensitive paths acceptable?
- Are migrations and backward compatibility safe?

### Axis B: spec and scope

- Which requirements are missing or partial?
- What behavior was added that the spec did not ask for?
- Is anything implemented differently from the spec?
- Are edge cases from the spec covered?
- Is the change scoped to the task?

### Axis C: standards and maintainability

- Does the code follow the repository's documented standards?
- Are names clear?
- Is there duplicated logic?
- Is the abstraction justified by a current need?
- Is the change easy to test and reason about?
- Are comments explaining why, not what?
- Are public APIs documented?
- Is the diff unnecessarily large?

### Axis D: tests and verification

- Are there tests for the new behavior?
- Do tests cover edge cases and failure modes?
- Do tests assert behavior rather than implementation?
- Were the tests actually run?
- Is there evidence of the result?
- Are manual checks needed?

## 4. Classify findings

Use severity:

- **Blocking** — bug, security issue, data loss, broken build, missing requirement, unsafe migration.
- **Important** — likely bug, missing test for a critical path, maintainability risk that will bite soon.
- **Suggestion** — style, naming, simplification, optional improvement.
- **Question** — needs author clarification.

Do not inflate suggestions into blockers. Do not hide a blocker among style comments.

## 5. Output format

```markdown
## Verdict

<ready to merge / needs work / blocked>

## Blocking

- **<file>:<line>** — <issue>. <why it matters>. <suggested fix>.

## Important

- **<file>:<line>** — <issue>. <suggested fix>.

## Suggestions

- **<file>:<line>** — <optional improvement>.

## Questions

- <question for the author>

## Tests

- <what was tested and what was not>

## Summary

<one paragraph: what the change does, main risk, and next action>
```

## Rules

- Quote the relevant diff or file line for every finding.
- Explain why the issue matters, not just what to change.
- Do not rewrite the whole change unless asked.
- Do not approve without checking tests and verification evidence.
- If the diff is too large to review reliably, say so and propose a split.
- If the spec is missing, state that the spec axis is limited.
- Do not comment on formatting that a formatter already enforces.
- Do not praise or criticize the author; review the code.

## Quality checks

- [ ] The review target and base are pinned.
- [ ] The spec and standards were located or their absence is stated.
- [ ] Correctness, spec, standards, and tests were reviewed separately.
- [ ] Findings have file/line references.
- [ ] Severity is calibrated.
- [ ] Verification evidence is checked.
- [ ] The verdict is clear.
