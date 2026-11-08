---
name: git-workflow
description: Handles safe git workflows for branches, commits, worktrees, rebases, merges, conflicts, and pull requests. Use when starting work, preparing a commit or PR, resolving conflicts, cleaning history, or when the user asks about git. Trigger on "git", "commit", "branch", "PR", "merge", "rebase", "ветка", "коммит", "конфликт".
metadata:
  category: engineering
  version: "1.0.0"
  inspired-by: "obra/superpowers, mattpocock/skills, addyosmani/agent-skills"
---

# Git Workflow

Keep changes small, reversible, and easy to review.

## Before changing anything

Run:

```bash
git status --short --branch
git diff --stat
git log --oneline -5
```

Check:

- Is the working tree clean?
- Are there user changes you must preserve?
- Which branch are you on?
- What is the base branch?
- Is the repository in the middle of a merge, rebase, or cherry-pick?

Never discard, reset, or clean user changes without explicit approval.

## Branching

- Create a branch from the correct base.
- Use a descriptive name: `feat/auth-login`, `fix/session-expiry`, `docs/prompt-guide`.
- Keep one logical change per branch.
- If the task is large, split it into stacked or independent branches.

```bash
git switch -c feat/short-description
```

## Worktrees

Use a worktree when:

- you need to work on two branches at once;
- a long build or test runs on one branch;
- you want to keep the main working tree clean.

```bash
git worktree add ../project-feature -b feat/feature
git worktree list
git worktree remove ../project-feature
```

Do not remove a worktree with uncommitted changes without approval.

## Commits

- Commit one logical change at a time.
- Write a message that explains **why**, not only what.
- Use the repository's convention if one exists.
- Do not commit secrets, generated files, or unrelated changes.
- Do not commit broken code unless the commit is explicitly a checkpoint.

Conventional format:

```text
type(scope): short summary

Why:
- reason

What:
- change
```

Types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf`, `build`, `ci`.

## Before committing

```bash
git diff
git status --short
```

Check:

- the diff is scoped;
- no debug code or temp files;
- no secrets;
- tests and checks pass;
- the message matches the change.

## Pull requests

A good PR:

- has a clear title and description;
- explains the problem and the approach;
- lists verification commands and results;
- calls out risks, migrations, and follow-ups;
- is small enough to review;
- links the issue or spec.

Template:

```markdown
## Problem

## Approach

## Verification

- `<command>` — <result>

## Risks

## Follow-ups
```

## Rebasing and merging

- Rebase only your own branch, not shared branches, unless the team agrees.
- Do not force-push a shared branch without approval.
- Prefer merge commits or squash according to the repository's convention.
- Keep the base up to date before resolving conflicts.

## Conflicts

1. Understand both sides before editing.
2. Preserve behavior from both sides where required.
3. Resolve in the smallest possible scope.
4. Run tests after resolving.
5. Do not delete the other side's work to make the conflict disappear.

## Undo safely

- `git restore <file>` discards uncommitted changes — ask first.
- `git reset` can rewrite history — ask first.
- `git revert` is safer for shared history.
- `git stash` is temporary; do not rely on it for long-term storage.

## Output format

When reporting git work:

```markdown
## Branch

## Commits

- `<sha>` — <message>

## Diff summary

## Verification

- `<command>` — <result>

## Risks

## Next step
```

## Rules

- Never run `git reset --hard`, `git clean -fd`, or force-push without explicit approval.
- Never commit secrets or personal data.
- Never rewrite shared history without approval.
- Preserve user changes.
- Explain destructive commands before running them.
- If the repository state is unclear, stop and inspect instead of guessing.

## Quality checks

- [ ] Working tree state was checked first.
- [ ] The branch and base are correct.
- [ ] Commits are scoped and meaningful.
- [ ] No secrets or unrelated files are committed.
- [ ] Verification is fresh.
- [ ] Destructive actions had approval.
- [ ] The PR description is complete.
