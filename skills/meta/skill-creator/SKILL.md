---
name: skill-creator
description: Creates, improves, and validates Agent Skills. Use when the user wants to turn a workflow into a reusable skill, write a SKILL.md, improve an existing skill's trigger description or instructions, design test prompts, or check a skill against the Agent Skills format. Trigger on "create a skill", "создай навык", "сделай скилл", "улучши навык", "skill.md".
metadata:
  category: meta
  version: "1.0.0"
  inspired-by: "anthropics/skills, addyosmani/agent-skills, obra/superpowers"
---

# Skill Creator

Turn a repeated workflow into a small, testable Agent Skill.

## When to use

Use when the user:

- wants to create a new skill from a task, conversation, or document;
- has a draft `SKILL.md` and wants it improved;
- needs a better trigger description;
- wants test prompts or an evaluation plan;
- wants to check whether a skill follows the Agent Skills format.

## Principles

- **One skill, one job.** A skill should have a clear trigger and a clear outcome.
- **Small and composable.** Prefer several focused skills over one giant skill.
- **Progressive disclosure.** Keep `SKILL.md` under 500 lines; move details to `references/`.
- **Explain why.** A short reason helps the model generalize better than a wall of MUSTs.
- **Test the trigger.** A skill that never activates is invisible.
- **No surprises.** The skill must not contain malware, hidden data collection, or instructions that contradict its description.

## Workflow

### 1. Capture the intent

Ask or infer:

- What should the agent be able to do after loading the skill?
- When should the skill activate? What would the user say?
- What is the expected output format?
- What goes wrong without the skill?
- What inputs, tools, or files does it need?
- What must it never do?

If the conversation already contains a successful workflow, extract the steps, corrections, and output format from it before asking.

### 2. Interview for edge cases

Ask only questions that change the skill:

- What are the common failure modes?
- What should the agent do when data is missing or ambiguous?
- Are there examples of good and bad output?
- Does the skill need scripts, templates, or references?
- Should it work across agents, or is it tied to one tool?

### 3. Write the frontmatter

```yaml
---
name: skill-name
description: What it does and when to use it. Include trigger words and concrete contexts.
metadata:
  category: meta
  version: "0.1.0"
  inspired-by: "original"
---
```

Rules:

- `name` matches the folder, lowercase, digits and single hyphens, max 64 characters.
- `description` is 1–1024 characters and contains both **what** and **when**.
- Make the description slightly pushy: include the phrases and contexts that should trigger it.
- Add `compatibility` only if the skill needs specific tools or environment.

### 4. Write the body

Recommended sections:

1. **When to use** — trigger conditions and non-goals.
2. **Workflow** — numbered steps in execution order.
3. **Output format** — exact structure.
4. **Quality checks** — how to verify the result.
5. **Edge cases** — missing data, ambiguity, failures.
6. **References** — links to supporting files.

Writing rules:

- Use imperative English.
- Prefer positive instructions.
- Put conditions before commands.
- Use concrete examples.
- State what done means.
- Do not ask for hidden chain-of-thought.
- Do not include secrets or personal data.

### 5. Add resources only when needed

- `references/` — detailed guides, schemas, examples.
- `scripts/` — deterministic operations that should not be improvised.
- `assets/` — templates, images, fonts, data files.

Keep links relative to the skill folder and one level deep.

### 6. Design test prompts

Create 2–3 realistic prompts a user might actually write. For each, define:

- the prompt;
- the expected output;
- the failure mode the test should catch.

Run the skill on the prompts. Compare with a baseline run without the skill. Check:

- Does the skill activate from the description?
- Does the output follow the format?
- Does it avoid invented facts?
- Does it handle an edge case?
- Is it better than the baseline in a way the user cares about?

### 7. Validate

If the repository has a validator, run it:

```bash
npm run validate
```

If it does not, use the quality checks below. Fix errors before committing. Check the skill in at least one real agent.

## Improving an existing skill

1. Read the current `SKILL.md` and its references.
2. Identify the failure: wrong trigger, vague steps, missing output contract, too long, conflicting instructions.
3. Make the smallest change that fixes the failure.
4. Re-run the test prompts.
5. Update the version in `metadata.version`.

## Output format

When creating a skill, return:

```markdown
## Skill

`skills/<name>/SKILL.md`

## What it does

<one paragraph>

## Trigger description

<the description field>

## Test prompts

1. <prompt>
2. <prompt>

## Open questions

- <only if needed>
```

When reviewing a skill, return:

```markdown
## Verdict

<pass / needs work>

## Blocking issues

- <issue and fix>

## Improvements

- <optional improvement>

## Test prompts

1. <prompt>
```

## Quality checks

- [ ] Name matches folder and follows the naming rules.
- [ ] Description contains what and when.
- [ ] Body is under 500 lines.
- [ ] Workflow is ordered and executable.
- [ ] Output format is explicit.
- [ ] Edge cases are covered.
- [ ] No secrets or personal data.
- [ ] References exist and are one level deep.
- [ ] Test prompts are realistic.
- [ ] Validator passes.
