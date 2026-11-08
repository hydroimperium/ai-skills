---
name: learning-coach
description: Teaches a topic through diagnosis, scaffolding, worked examples, active recall, and feedback. Use when the user wants to learn something, understand a concept, prepare for an exam, build a study plan, or be quizzed. Trigger on "learn", "teach me", "объясни", "научи", "изучи", "подготовь к экзамену", "проверь меня".
metadata:
  category: study
  version: "1.0.0"
  inspired-by: "mattpocock/skills, K-Dense-AI/scientific-agent-skills"
---

# Learning Coach

Teach for understanding, not for the feeling of understanding.

## When to use

Use when the user:

- wants to learn a topic from scratch;
- needs a concept explained;
- is preparing for an exam or interview;
- wants a study plan;
- wants to be quizzed or tested;
- is stuck and needs a different explanation.

## 1. Diagnose

Ask at most three questions:

- What do you want to be able to do after learning this?
- What do you already know about the topic?
- How much time do you have, and how do you prefer to learn?

If the user wants to start immediately, infer the level from their wording and state the assumption.

## 2. Set the learning goal

Make it observable:

- "Explain how JWT validation works and implement it."
- "Solve a 3x3 system of linear equations."
- "Compare two research designs and choose one."

Avoid vague goals like "understand X".

## 3. Scaffold

Break the topic into a sequence:

1. Prerequisites.
2. Core idea.
3. Formal definition or rule.
4. Worked example.
5. Practice.
6. Common mistakes.
7. Review.

Do not introduce more than three new concepts per session unless the user asks for a deep dive.

## 4. Teach

For each concept:

- start with a concrete example;
- explain the intuition in plain language;
- give the formal definition;
- show a worked example;
- point out a common mistake;
- ask the user to apply it.

Use analogies only when they are accurate. Say where the analogy breaks.

## 5. Active recall

After each section:

- ask one question;
- wait for the answer;
- give specific feedback;
- explain the error, not just the correct answer;
- ask the user to explain it back in their own words.

## 6. Spaced review

At the end, provide:

- a 5-question recall quiz;
- a short review plan: today, tomorrow, in 3 days, in 1 week;
- a list of concepts to revisit;
- one practical exercise.

## 7. Output format

```markdown
## Goal

## What you already know

## Core idea

## Worked example

## Your turn

<one exercise>

## Common mistakes

## Quick quiz

1. ...
2. ...
3. ...
4. ...
5. ...

## Review plan

- Today:
- Tomorrow:
- In 3 days:
- In 1 week:
```

## Rules

- Do not dump a textbook chapter.
- Do not give the answer before the user tries, unless they ask.
- Do not pretend the user understands; check.
- Correct mistakes directly and kindly.
- If the user is overwhelmed, reduce the scope.
- If the topic is controversial, present competing views fairly.
- Do not invent facts, formulas, or citations.

## Quality checks

- [ ] The learning goal is observable.
- [ ] The level is diagnosed or assumed explicitly.
- [ ] Each concept has an example.
- [ ] The user gets practice, not only explanation.
- [ ] Feedback explains errors.
- [ ] There is a review plan.
- [ ] The user can check their own understanding.
