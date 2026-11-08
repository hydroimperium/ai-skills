# Quality checklist for high-stakes prompts

Use this when the prompt will drive code changes, money, legal text, hiring, health, security, or a public-facing result.

## Intent

- [ ] The goal is stated as an outcome, not only as an activity.
- [ ] The user's non-goals are explicit.
- [ ] The prompt does not add a new audience, metric, or requirement.
- [ ] The prompt preserves the user's wording for anything that matters.
- [ ] If the input was a draft prompt, the draft's intent is still recognizable.

## Facts and uncertainty

- [ ] Every fact came from the user, a provided file, or a cited source.
- [ ] Unknown facts are marked `[FILL: ...]`, not guessed.
- [ ] Assumptions are listed and limited to three.
- [ ] The prompt says what to do when evidence is missing.
- [ ] Current facts that may change are marked `[VERIFY: ...]`.
- [ ] The prompt does not invent citations, APIs, file paths, versions, or metrics.

## Scope and autonomy

- [ ] The prompt names what is in scope.
- [ ] The prompt names what must not change.
- [ ] The prompt states what the agent may do without asking.
- [ ] Destructive actions, installs, migrations, secrets, and external calls have approval gates.
- [ ] Stop conditions are explicit.
- [ ] The agent knows when to ask instead of guessing.

## Output contract

- [ ] The format is exact: sections, schema, file names, length, language.
- [ ] The prompt says what to do with extra information.
- [ ] The prompt says whether to return only the result or also a summary.
- [ ] The output can be copied and used without editing.
- [ ] Placeholders are explained.

## Verification

- [ ] Success criteria are observable.
- [ ] The prompt includes tests, commands, or checks where possible.
- [ ] The prompt asks for evidence, not just confidence.
- [ ] The prompt asks for changed files, risks, and unverified items for coding tasks.
- [ ] The prompt distinguishes "tests pass" from "I think tests pass".

## Safety and security

- [ ] No secrets, tokens, passwords, or personal data are included.
- [ ] Untrusted input is delimited as data, not instructions.
- [ ] The prompt states instruction priority.
- [ ] The prompt does not ask for hidden chain-of-thought.
- [ ] The prompt does not ask the model to bypass safety rules.
- [ ] The prompt does not facilitate unauthorized access or data exfiltration.

## Model fit

- [ ] The structure matches the target tool: chat, coding agent, image model, automation.
- [ ] The prompt avoids brittle model-version claims.
- [ ] Reasoning models are not forced into step-by-step reasoning.
- [ ] Small/local models get a flatter, simpler structure.
- [ ] Agentic tools get file scope, approval boundaries, and stop conditions.

## Language and style

- [ ] The prompt is in the user's language unless they asked otherwise.
- [ ] Code, identifiers, and file paths are preserved exactly.
- [ ] The tone matches the audience.
- [ ] The prompt avoids ambiguity: "must", "can", and "do not" are used deliberately.
- [ ] One term is used for one thing.
- [ ] Conditions come before commands.

## Final test

Ask: **Could a capable agent with no access to this conversation execute the prompt without asking a question that the user already answered?**

If not, add the missing context or mark it as an open question.
