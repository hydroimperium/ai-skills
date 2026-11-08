---
name: presentation-builder
description: Builds presentation structure, slide outlines, speaker notes, and visual direction. Use when the user asks for a presentation, slide deck, pitch, talk, defense, or wants to improve an existing deck. Trigger on "presentation", "slides", "презентация", "слайды", "питч", "выступление", "защита проекта".
metadata:
  category: work
  version: "1.0.0"
  inspired-by: "phuryn/pm-skills, anthropics/skills, wshobson/agents"
---

# Presentation Builder

Build the argument first, the slides second.

## When to use

Use when the user:

- needs a presentation from scratch;
- wants to restructure an existing deck;
- needs speaker notes;
- wants a pitch, talk, or internal presentation;
- needs help choosing the story and visuals.

## 1. Clarify the assignment

Ask or infer:

- **Audience** — who they are, what they know, what they care about.
- **Goal** — decide, approve, learn, buy, align, celebrate.
- **Time** — how many minutes.
- **Format** — live, recorded, async, in-person, remote.
- **Constraints** — template, brand, language, number of slides.
- **Success** — what the audience should do or remember.

## 2. Define the one message

Write one sentence:

> After this presentation, the audience should <action> because <reason>.

If you cannot write it, the presentation is not ready.

## 3. Build the storyline

Use a simple arc:

1. **Hook** — the problem, tension, or question.
2. **Context** — why it matters now.
3. **Insight** — the key idea or finding.
4. **Evidence** — data, examples, demo.
5. **Options** — trade-offs, if a decision is needed.
6. **Recommendation** — what to do.
7. **Next step** — owner, date, ask.

For a pitch, add:

- market and user;
- problem;
- solution;
- why now;
- traction;
- business model;
- team;
- ask.

## 4. Outline slides

For each slide, define:

- the one idea;
- the evidence;
- the visual;
- the speaker note.

Template:

```markdown
## Slide 1: <title>

**Idea:** <one sentence>
**Evidence:** <data, example, quote>
**Visual:** <chart, diagram, photo, demo>
**Speaker note:** <what to say, 30–60 seconds>
```

Rules:

- One idea per slide.
- The title should state the takeaway, not the topic.
- Prefer one strong chart over three weak ones.
- Do not put paragraphs on slides.
- Use visuals to explain, not decorate.

## 5. Write speaker notes

For each slide:

- the point;
- the transition to the next slide;
- one example or story;
- the expected question.

Keep notes in spoken language, not written prose.

## 6. Rehearse

Check:

- Does the story hold without the slides?
- Is the opening under 30 seconds?
- Is the ask clear?
- Are the numbers consistent?
- Is the timing realistic?
- What is the most likely challenge question?

## Output format

```markdown
## One message

## Audience and goal

## Storyline

1. ...
2. ...

## Slide outline

### Slide 1: <takeaway title>
- Idea:
- Evidence:
- Visual:
- Speaker note:

## Opening script

## Closing script

## Likely questions

- <question> — <answer>
```

## Rules

- Do not invent data, quotes, or customer names.
- Do not overload slides.
- Do not use a template as a substitute for a story.
- Mark missing data as `[FILL]`.
- If the deck is for a decision, make the recommendation explicit.
- If the user has an existing deck, diagnose the story before redesigning slides.

## Quality checks

- [ ] The one message is clear.
- [ ] The storyline has a beginning, middle, and end.
- [ ] Each slide has one idea.
- [ ] Titles state takeaways.
- [ ] Evidence is real and cited.
- [ ] Speaker notes are speakable.
- [ ] The ask or next step is explicit.
