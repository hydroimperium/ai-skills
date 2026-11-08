---
name: research
description: Researches a topic, question, or decision using sources, evidence, and synthesis. Use when the user asks to investigate, compare, find sources, review literature, understand a field, or make an evidence-based decision. Trigger on "research", "исследуй", "найди источники", "сравни", "обзор", "литературный обзор", "literature review".
metadata:
  category: study
  version: "1.0.0"
  inspired-by: "K-Dense-AI/scientific-agent-skills, addyosmani/agent-skills, mattpocock/skills"
---

# Research

Answer the question with evidence, not with confident-sounding prose.

## When to use

Use when the user:

- asks a question that depends on external facts;
- wants a comparison of options, tools, or approaches;
- needs a literature or market review;
- wants sources and citations;
- is making a decision with incomplete information;
- asks to verify a claim.

## 1. Frame the question

Write:

- the exact question;
- the decision it supports;
- the audience;
- the scope and time range;
- what would count as a good answer;
- what is out of scope.

If the question is too broad, propose a narrower version.

## 2. Plan the search

Identify:

- primary sources: official docs, papers, standards, filings, datasets;
- secondary sources: reputable reviews, analyses, textbooks;
- expert or practitioner sources, clearly labeled;
- sources that are likely to disagree.

Search for the strongest counter-evidence, not only confirmation.

## 3. Evaluate sources

For each source, note:

- author or organization;
- date;
- primary or secondary;
- evidence and methodology;
- conflicts of interest;
- whether it is current;
- what it does not cover.

Prefer primary and recent sources. Treat anonymous posts, marketing pages, and AI-generated summaries as leads, not evidence.

## 4. Extract evidence

Create an evidence table:

| Claim | Source | Date | Confidence | Notes |
|---|---|---|---|---|
| <claim> | <link> | <date> | high/medium/low | <context> |

Rules:

- Quote sparingly and accurately.
- Separate fact, interpretation, and opinion.
- Record disagreements between sources.
- Mark "not found" separately from "does not exist".
- Do not invent citations or page numbers.

## 5. Synthesize

Write:

- the direct answer first;
- the strongest evidence for it;
- the strongest evidence against it;
- what is uncertain;
- what would change the answer;
- practical implications.

Do not average conflicting sources into a false consensus. Explain the conflict.

## 6. Output format

```markdown
## Answer

<direct answer in 2–5 sentences>

## Evidence

| Claim | Source | Confidence |
|---|---|---|
| <claim> | <link> | high/medium/low |

## What supports this

- <evidence>

## What challenges this

- <counter-evidence>

## Uncertainty

- <what is unknown, disputed, or based on weak evidence>

## Practical recommendation

- <what to do next, if asked>

## Sources

1. <title> — <link> — <date> — <primary/secondary>
```

## Rules

- Never invent a source, quote, statistic, or date.
- If you cannot verify a claim, say so.
- Distinguish correlation from causation.
- Distinguish "no evidence" from "evidence of absence".
- Use the user's language.
- For current facts, check the date and note when the information was retrieved.
- If the research is time-boxed, say what was and was not covered.

## Quality checks

- [ ] The question and scope are explicit.
- [ ] Primary sources are prioritized.
- [ ] Counter-evidence is included.
- [ ] Facts, interpretations, and opinions are separated.
- [ ] Citations are real and traceable.
- [ ] Uncertainty is stated.
- [ ] The answer is useful for the user's decision.
