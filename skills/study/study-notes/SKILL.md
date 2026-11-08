---
name: study-notes
description: Turns books, articles, lectures, videos, or rough notes into structured study notes, summaries, and flashcards. Use when the user asks for notes, a summary, a cheat sheet, Obsidian Markdown, or spaced-repetition cards. Trigger on "notes", "конспект", "заметки", "лекция", "summary", "шпаргалка", "карточки", "Obsidian".
metadata:
  category: study
  version: "1.0.0"
  inspired-by: "kepano/obsidian-skills, K-Dense-AI/scientific-agent-skills"
---

# Study Notes

Turn source material into notes that are useful for review, not just for storage.

## When to use

Use when the user:

- wants notes from a book, article, lecture, video, or document;
- wants a summary or cheat sheet;
- wants flashcards or spaced-repetition cards;
- wants Obsidian-friendly Markdown;
- has rough notes and wants them organized.

## 1. Identify the source and purpose

Ask or infer:

- What is the source?
- What is the purpose: exam, project, teaching, reference?
- What is the desired depth?
- Should the notes be in the user's language?
- Should they be Obsidian-compatible?

## 2. Extract the structure

Read the source and identify:

- the main question;
- key concepts;
- definitions;
- examples;
- arguments and evidence;
- connections to prior knowledge;
- open questions.

Do not summarize paragraph by paragraph. Organize by ideas.

## 3. Write the notes

Use this structure:

```markdown
---
title: <title>
source: <source>
author: <author>
date: <date>
tags: [<tag>, <tag>]
---

# <title>

## In one sentence

<the main idea>

## Why it matters

<the practical or intellectual reason>

## Key concepts

### <concept>

- **Definition:**
- **Example:**
- **Why it matters:**
- **Common mistake:**

## Mental model

<an analogy or diagram description that makes the idea easier to use>

## Details

<the supporting material, organized by idea>

## Connections

- <link to another note or concept>
- <where this conflicts with or extends something else>

## Open questions

- <what is still unclear>

## Summary

<5–10 bullets>

## Flashcards

- **Q:** <question>
  **A:** <answer>
```

## 4. Make it reviewable

- Use short sections and descriptive headings.
- Bold the terms that matter.
- Add examples for abstract ideas.
- Add one diagram description if it clarifies structure.
- Add questions that require recall, not recognition.
- Keep cards atomic: one fact or concept per card.

## 5. Obsidian conventions

If the user uses Obsidian:

- use `[[wikilinks]]` for connections;
- use `#tags` sparingly;
- use callouts for warnings or key ideas;
- keep properties in YAML frontmatter;
- do not invent links to notes that do not exist.

## Output format

Return the notes in a single Markdown block, ready to save. After the notes, add:

```markdown
## Review plan

- Today: read the summary and key concepts.
- Tomorrow: answer the flashcards.
- In 3 days: explain the mental model from memory.
- In 1 week: connect the notes to a new example.
```

## Rules

- Do not copy long passages from the source; paraphrase and quote only what matters.
- Do not invent facts or citations.
- Separate the author's claims from your interpretation.
- If the source is incomplete, say what is missing.
- Keep the user's language unless they ask otherwise.

## Quality checks

- [ ] The main idea is clear in one sentence.
- [ ] Key concepts have definitions and examples.
- [ ] The notes are organized by ideas, not page order.
- [ ] There are connections and open questions.
- [ ] Flashcards test recall, not recognition.
- [ ] The notes are ready to save.
- [ ] No invented facts or links.
