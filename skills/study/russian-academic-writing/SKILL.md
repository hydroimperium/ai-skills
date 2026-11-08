---
name: russian-academic-writing
description: Writes and structures Russian academic texts, including lab reports, coursework, VKR, essays, reports, and research summaries. Use when the user asks for a лабораторная, курсовая, реферат, отчёт, ВКР, академический текст, введение, обзор литературы, методику, результаты или заключение. Russian-first, citation-aware, and anti-AI-slop.
metadata:
  category: study
  version: "1.0.0"
  inspired-by: "Bbar0n234/gost-report-skill, piofant/diploma-skills, maarshir/gost-skills, cyclomethane/gost-skills, N1arko/redaktura-skills"
---

# Russian Academic Writing

Write academic Russian that a student can defend, not generic text that looks like a paper.

## When to use

Use when the user:

- needs a lab report, coursework, VKR, essay, referat, practice report, or research summary;
- needs help with a section: introduction, literature review, methodology, results, conclusion;
- wants to restructure or rewrite an academic draft;
- wants the text to sound academic and human, not like an AI template.

Do not use for:

- fabricating results or sources;
- writing a whole thesis for submission without the author's work;
- evading plagiarism or AI detectors.

## 1. Read the assignment first

Before writing, identify:

- the exact task and discipline;
- the required volume and deadline;
- the university methodical guidelines;
- the required structure;
- the citation style and source requirements;
- the formatting requirements;
- what the student has already done.

If the guidelines are missing, use `[FILL: требования вуза]` and ask for them. Do not invent requirements.

## 2. Choose the document type

### Lab report

Typical structure:

1. Title and goal.
2. Equipment and materials.
3. Brief theory.
4. Method and procedure.
5. Measurements and calculations.
6. Error analysis.
7. Results and discussion.
8. Conclusion.
9. Sources and appendix.

Rules:

- Separate measured data from calculated values.
- Show formulas and units.
- State measurement error and assumptions.
- Do not invent experimental data.
- Explain what the result means, not only reproduce the numbers.

### Coursework or VKR

Typical structure:

1. Title page.
2. Contents.
3. Introduction: relevance, problem, goal, tasks, object, subject, methods.
4. Literature review: what is known, what is missing, where the gap is.
5. Methodology: data, methods, tools, limitations.
6. Results: own analysis, tables, figures.
7. Conclusion: answers to the tasks, limitations, further work.
8. Bibliography.
9. Appendices.

Rules:

- The introduction must match the conclusion.
- The literature review must synthesize, not list sources one by one.
- The methodology must be reproducible.
- Results must be separated from interpretation.
- Do not invent data, sources, or citations.

### Referat or essay

Typical structure:

1. Introduction and question.
2. Main part with 2–4 arguments.
3. Counterargument or limitation.
4. Conclusion.
5. Sources.

### Report or practice report

Typical structure:

1. Goal and tasks.
2. Place and period.
3. What was done.
4. Results and evidence.
5. Problems and solutions.
6. Conclusion.

## 3. Write in academic Russian

- Use an impersonal register: «в работе рассматривается», «было установлено», «данные показывают».
- Avoid «я» unless the guidelines allow it.
- Use one term for one concept.
- Define a term on first use.
- Prefer verbs to verbal nouns: «анализировать», not «осуществлять анализ».
- Keep sentences readable; academic does not mean unreadable.
- Avoid AI-slop: «важно отметить», «играет ключевую роль», «не просто X, а Y», «в современном мире».
- Avoid unsupported claims and vague attributions.
- Do not overuse dashes, bold text, and bullet lists.

## 4. Work with sources

- Use only sources the user provided or that you can verify.
- Cite every borrowed idea, data point, or quote.
- Paraphrase with meaning, not by replacing words with synonyms.
- Compare sources: where do they agree, disagree, and why?
- Add the author's own analysis: what follows from the sources for this task?
- Never invent a source, page number, DOI, or quote.

## 5. Originality and AI-slop

- Originality comes from own analysis, synthesis, examples, and conclusions.
- Do not help evade plagiarism or AI detectors.
- Do not rewrite a source sentence by sentence.
- Do not add fake facts to make the text look original.
- If the text sounds like an AI template, remove the template, not the meaning.
- Keep a clear boundary between the author's results and borrowed material.

## 6. Output format

For a full document or section:

```markdown
## Assignment

## Outline

1. ...
2. ...

## Text

<academic text>

## Sources used

- <source>

## What the author must add or verify

- <data, citation, calculation, or decision>
```

For a review:

```markdown
## Diagnosis

## Structure fixes

## Style fixes

## Citation fixes

## What must not be changed
```

## Rules

- Do not invent facts, data, results, sources, or citations.
- Do not write a whole graded work without the author's input.
- Do not hide missing data; mark it.
- Do not use a source without citation.
- Do not claim originality or detector results.
- Follow the university guidelines over generic advice.
- Keep the author's language and terminology.

## Quality checks

- [ ] The assignment and guidelines are understood.
- [ ] The structure matches the document type.
- [ ] The introduction and conclusion agree.
- [ ] Sources are real and cited.
- [ ] Own analysis is visible.
- [ ] The style is academic but readable.
- [ ] No fabricated data or sources.
- [ ] No detector-evasion advice.
