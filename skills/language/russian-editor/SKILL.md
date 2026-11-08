---
name: russian-editor
description: Edits Russian prose for meaning, structure, tone, grammar, and typography. Use when the user asks to edit, shorten, improve, or review a Russian text, remove officialese, or make a draft clearer. Trigger on "отредактируй", "почисти текст", "сократи", "убери канцелярит", "проверь текст", "редактура", "сделай проще". Works with articles, posts, emails, documentation, and UI copy.
metadata:
  category: language
  version: "1.0.0"
  inspired-by: "N1arko/redaktura-skills, smixs/humanizer-ru, codemistake/human-writing, serge-masiutin/clear-writing"
---

# Russian Editor

Edit from meaning to words, not the other way around.

## When to use

Use when the user:

- has a Russian draft and wants it improved;
- wants to shorten or simplify a text;
- wants to remove officialese or AI-slop;
- needs a review of structure, tone, grammar, or typography;
- wants a text for a specific audience.

## 1. Clarify the job

Ask or infer:

- Who is the reader?
- What should the reader do or understand after reading?
- Where will the text live: article, post, email, docs, UI?
- What is the register: strict, neutral, or authorial?
- What must not change: facts, legal wording, names, numbers?

If the text is short and the task is clear, do not ask.

## 2. Choose the mode

- **Audit** — diagnose the text and show the main fixes without rewriting everything.
- **Rewrite** — return the edited text plus a short explanation.
- **Proofread** — fix grammar, punctuation, and typography only.

If unclear, rewrite and include a mini-audit.

## 3. Edit in passes

### Pass 1: Meaning and facts

- Is the main point clear?
- Are claims supported by facts?
- Are there vague attributions ("many experts believe")?
- Are numbers, names, dates, and conditions correct?
- Do not invent missing facts. Ask or mark them.

### Pass 2: Structure

- Does the opening state the point?
- Are headings informative?
- Does each paragraph add something new?
- Is the order logical?
- Can any section be deleted?

### Pass 3: Tone

- Is the reader respected?
- Is the register consistent?
- Are there unnecessary commands ("вы должны")?
- Is the text too formal, too casual, or inconsistent?

### Pass 4: Sentence

- Prefer people and actions over processes and abstractions.
- Replace passive with active where the actor matters.
- Break long sentences with several clauses.
- Remove chains of gerunds and verbal nouns.
- Keep one main idea per sentence.

### Pass 5: Word

- Remove officialese: "осуществляется", "является", "в рамках", "данный", "в целях".
- Remove filler: "стоит отметить", "важно подчеркнуть", "в современном мире".
- Replace calques with natural Russian.
- Remove intensifiers that add no fact.
- Keep terms that the audience uses.

### Pass 6: Rhythm

- Read aloud.
- Vary sentence length.
- Avoid uniform paragraph shapes.
- Do not turn every paragraph into a three-item list.

### Pass 7: Russian typography

- Use «ёлочки» for quotes, „лапки“ inside them.
- Use an em dash with spaces in prose.
- Use an en dash for ranges: 10–15.
- Use a non-breaking space before units and after short prepositions where appropriate.
- Use «ё» consistently if the project does.
- Do not put a space before a comma or period.
- Check agreement, case, and plural forms.

## 4. Preserve meaning

- Do not change the author's position.
- Do not add facts, examples, or conclusions.
- Do not remove a caveat, condition, or warning.
- Do not make a formal text colloquial without permission.
- If a sentence is ambiguous, ask what it means instead of guessing.

## Output format

For rewrite:

```markdown
## Edited text

<final text>

## Key changes

- <change and reason>
- <change and reason>

## Questions

- <only if a fact is missing>
```

For audit:

```markdown
## Diagnosis

<2–4 sentences>

## Main fixes

| Fragment | Problem | Fix |
|---|---|---|

## Questions

- <what only the author can answer>
```

## Rules

- Do not invent facts or quotes.
- Do not over-edit a clean text.
- Do not replace one cliché with another.
- Do not change legal, medical, or financial wording without flagging it.
- Do not translate code, commands, paths, or identifiers.
- Keep the author's voice when it is intentional.

## Quality checks

- [ ] The main point is clear.
- [ ] Facts and numbers are intact.
- [ ] The structure is logical.
- [ ] The tone fits the reader.
- [ ] Sentences are readable aloud.
- [ ] Russian typography is correct.
- [ ] No new facts or clichés were added.
