---
name: gost-formatting
description: Checks and formats Russian student papers according to GOST 7.32 and university requirements, including margins, fonts, spacing, headings, figures, tables, formulas, bibliography, appendices, and title pages. Use when the user asks to format or check a курсовая, ВКР, лабораторная, отчёт, реферат, or список литературы. Russian-first.
metadata:
  category: study
  version: "1.0.0"
  inspired-by: "Bbar0n234/gost-report-skill, maarshir/gost-skills, cyclomethane/gost-skills, piofant/diploma-skills"
---

# GOST Formatting

Check the document against the requirements that actually apply. University guidelines win over GOST.

## When to use

Use when the user:

- needs a coursework, VKR, lab report, practice report, or referat formatted;
- wants an existing document checked for formatting;
- needs a bibliography formatted;
- needs a title page, contents, figures, tables, formulas, or appendices checked;
- says «оформи по ГОСТ», «проверь оформление», «почему работу вернули».

## 1. Find the requirements

Priority:

1. University or department methodical guidelines.
2. The specific GOST named by the guidelines.
3. The general GOST default.

If the guidelines are missing, use `[FILL: требования вуза]` and say which checks cannot be confirmed. Do not invent a requirement.

Common references:

- GOST 7.32 — reports and student works.
- GOST R 7.0.100-2018 — bibliography.
- GOST R 7.0.5 — bibliographic references.
- University template — title page, margins, fonts.

## 2. Check the document

### Page and text

- Page size and orientation.
- Margins.
- Font family and size.
- Line spacing.
- Paragraph indent.
- Alignment.
- Page numbers and their position.
- Hyphenation and spacing.

### Headings

- Heading levels and numbering.
- No period at the end of headings.
- Each major section starts on a new page if required.
- Heading style matches the template.

### Figures and tables

- Figure numbering and captions.
- Table numbering and titles.
- References to figures and tables in the text.
- Placement after the first mention.
- Units and notes.

### Formulas

- Formula numbering.
- Symbols defined before use.
- Units.
- Explanation of variables.

### Bibliography

- One style throughout.
- Author, title, edition, place, publisher, year, pages.
- Online sources include URL and access date.
- Sources are numbered and cited in the text.
- No duplicate or missing entries.

### Appendices

- Appendix lettering.
- References in the text.
- Order and titles.
- Page numbering.

### Title page

- University name.
- Department.
- Discipline.
- Topic.
- Author, group, supervisor.
- City and year.
- No extra elements.

## 3. Output format

```markdown
## Scope

- Document:
- Requirements source:
- Checked:
- Not checked:

## Findings

| # | Requirement | Current | Fix | Source |
|---|---|---|---|---|
| 1 | <requirement> | <current> | <fix> | <GOST or university> |

## Critical

- <issue that can cause rejection>

## Minor

- <formatting issue>

## Cannot verify

- <what needs the actual file or guidelines>
```

## Rules

- Do not claim compliance without checking the actual document.
- Do not invent GOST clauses or university requirements.
- Do not change content while formatting.
- Do not install packages or convert files without approval.
- If only text is available, say which layout checks are impossible.
- Mark uncertain requirements as `[NEEDS_SOURCE_CHECK]`.

## Quality checks

- [ ] The requirements source is identified.
- [ ] The document type is correct.
- [ ] Text, headings, figures, tables, formulas, bibliography, and appendices are checked.
- [ ] Findings have a source.
- [ ] Critical issues are separated from minor ones.
- [ ] Unverifiable items are stated.
- [ ] No requirement was invented.
