---
name: translation
description: Translates between Russian and English with attention to meaning, terminology, register, and natural style. Use when the user asks to translate a text, localize UI strings, adapt a document, or review an existing translation. Trigger on "translate", "переведи", "перевод", "локализация", "EN→RU", "RU→EN". Preserves facts, names, and formatting; does not invent content.
metadata:
  category: language
  version: "1.0.0"
  inspired-by: "N1arko/redaktura-skills, serge-masiutin/clear-writing, smixs/humanizer-ru"
---

# Translation

Translate meaning, not words.

## When to use

Use when the user:

- wants a text translated between Russian and English;
- needs UI strings localized;
- wants an existing translation reviewed;
- needs a bilingual version of a document;
- wants terminology kept consistent across files.

## 1. Clarify the brief

Ask or infer:

- source and target language;
- audience and register;
- domain and terminology;
- whether the translation should be literal, neutral, or adapted;
- what must stay unchanged: names, code, commands, legal wording;
- whether a glossary exists.

## 2. Read the whole text first

Do not translate sentence by sentence before understanding:

- the purpose;
- the argument;
- the tone;
- recurring terms;
- cultural references;
- formatting.

## 3. Build a glossary

For recurring terms, decide one translation and use it consistently:

| Source | Target | Note |
|---|---|---|
| <term> | <term> | <why> |

If the user has a glossary, it wins.

## 4. Translate

- Preserve meaning, not word order.
- Prefer natural target-language constructions.
- Keep the register: formal stays formal, casual stays casual.
- Keep names, brands, code, commands, paths, and identifiers unchanged.
- Translate UI strings for the target audience, not literally.
- Keep numbers, dates, units, and formatting.
- Do not add explanations inside the text unless the user asks.
- Mark ambiguous passages instead of guessing.

## 5. Review

Check:

- Is the meaning complete?
- Is anything added or omitted?
- Is the terminology consistent?
- Does it sound natural in the target language?
- Are names and numbers correct?
- Is the register right?
- Are UI strings short enough for the interface?
- Are plural forms correct?

## 6. Russian-specific rules

- Use «ёлочки» for quotes.
- Use an em dash with spaces in prose.
- Use Russian plural forms correctly.
- Avoid calques: "address the problem" is not "адресовать проблему".
- Prefer verbs to verbal nouns.
- Do not overuse "является" and "данный".
- Keep English technical terms if the audience uses them, but explain on first use if needed.

## Output format

```markdown
## Translation

<translated text>

## Glossary

| Source | Target | Note |
|---|---|---|

## Notes

- <ambiguity, adaptation, or term choice>
```

For UI strings, return a table:

```markdown
| Key | Source | Translation | Note |
|---|---|---|---|
```

## Rules

- Do not invent facts or context.
- Do not translate code, commands, paths, or identifiers.
- Do not change legal or medical meaning without flagging it.
- Do not use machine-translation style if a natural version is possible.
- Do not hide an ambiguous source; mark it.
- If the text is too long for one pass, split by section and keep the glossary.

## Quality checks

- [ ] Meaning is preserved.
- [ ] Nothing was added or omitted.
- [ ] Terminology is consistent.
- [ ] Register matches the audience.
- [ ] Names, numbers, and code are unchanged.
- [ ] Russian grammar and plural forms are correct.
- [ ] Ambiguities are marked.
