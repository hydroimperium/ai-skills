---
name: russian-text-quality
description: Reviews Russian UI strings, locale files, and mixed Russian-English code for pluralization, case agreement, terminology drift, language mixing, and transliterated identifiers. Use when the project contains Russian text, i18n files, or Russian-speaking users. Trigger on "ru.json", "локализация", "русские строки", "плюрализация", "перевод интерфейса", "i18n".
metadata:
  category: language
  version: "1.0.0"
  inspired-by: "Anic888/russian-text-quality, smixs/humanizer-ru"
---

# Russian Text Quality

Catch Russian-language bugs that linters and type checks miss.

## When to use

Use when the project contains:

- Russian UI strings;
- locale files such as `ru.json`, `ru.yml`, `ru.po`;
- Russian comments or documentation;
- transliterated identifiers such as `polzovatel`, `tovar`, `kolichestvo`;
- mixed English code and Russian content.

Do not use on English-only projects.

## Activation guard

Before reviewing, confirm:

1. The project has at least 10 Cyrillic characters across code and locale files, excluding dependencies and build output.
2. At least one file has 5 consecutive Cyrillic characters.

If either condition fails, respond: "Not activated — no Russian content detected" and stop.

## Checks

### 1. Pluralization

Russian requires CLDR categories: `one`, `few`, `many`, `other`.

Examples:

- 1 товар
- 2 товара
- 5 товаров
- 21 товар
- 22 товара
- 25 товаров

Check i18next, ICU, vue-i18n, and custom plural helpers. Missing `few` or `many` is an error.

### 2. Case agreement

String concatenation often breaks Russian cases:

- "Купить " + "товар" → "Купить товар" (ok)
- "О " + "товар" → "О товар" (wrong; needs "О товаре")

Look for prepositions and verbs that govern a case, followed by interpolation. Report the exact string and the correct form.

### 3. Terminology drift

The same concept should use one Russian term:

- `user` → `пользователь` and `юзер` in different files;
- `order` → `заказ` and `ордер`;
- `cart` → `корзина` and `тележка`.

Pick one term and document it in a glossary.

### 4. Language mixing

Check for:

- Russian literals outside the i18n layer;
- inconsistent comment language in one file;
- English UI strings left untranslated;
- Russian text hard-coded in components.

### 5. Transliterated identifiers

Flag identifiers that look like transliterated Russian:

- `polzovatel` → `user`
- `tovar` → `product`
- `kolichestvo` → `quantity`
- `zakaz` → `order`

Treat these as suggestions, not errors, unless the project has a naming convention.

## Workflow

1. Confirm activation.
2. Detect the i18n framework from `package.json`.
3. Scan locale files and call sites.
4. Check each category.
5. Do not modify files without approval.
6. Report findings with file and line.

## Output format

```markdown
# Russian Text Review — <project>

## Summary

- Files scanned: N
- Files with Russian content: M
- Findings: X errors, Y warnings, Z info

## Errors

### <check name>

- **<file>:<line>** — <issue>
  - Why: <impact>
  - Fix: <specific change>

## Warnings

- **<file>:<line>** — <issue>
  - Fix: <specific change>

## Info

- **<file>:<line>** — <suggestion>

## Glossary

| English | Russian | Notes |
|---|---|---|
| user | пользователь | use everywhere |
```

## Rules

- Do not run on English-only projects.
- Do not flag typography or spelling as part of this skill; use `russian-editor` for prose.
- Do not auto-fix without approval.
- Do not promote low-confidence heuristics to errors.
- Do not translate code, identifiers, or commands.
- Do not invent a glossary term; propose one and ask.

## Quality checks

- [ ] Activation guard passed.
- [ ] Plural categories are complete.
- [ ] Case agreement is checked at interpolation points.
- [ ] Terminology is consistent.
- [ ] Language mixing is reported.
- [ ] Transliterated identifiers are suggestions.
- [ ] Findings include file and line.
