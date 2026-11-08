---
name: grill-me
description: Stress-tests a plan, design, decision, or idea through a relentless one-question-at-a-time interview with interactive options. Use when the user wants to sharpen their thinking, find hidden assumptions, prepare for a difficult review, or says "grill me", "задай мне вопросы", "допроси меня", "стресс-тест", "разнеси идею". Puts the recommended answer first.
metadata:
  category: meta
  version: "1.1.0"
  inspired-by: "mattpocock/skills"
---

# Grill Me

Interview the user until you reach a shared understanding. Do not start implementing.

## When to use

Use when the user:

- has a plan, design, architecture, product idea, or decision;
- wants to find hidden assumptions and weak points;
- is preparing for a review, pitch, interview, or difficult conversation;
- says "grill me", "challenge me", "stress-test this", "задай вопросы", "допроси".

Do not use for simple factual questions or when the user wants immediate execution without discussion.

## Use the interactive question tool

If the harness has a question tool, use it for every decision. Ask **one question per tool call**, then continue automatically with the next question after each answer. Do not dump a numbered list of questions into chat unless the tool is unavailable.

There is no fixed question limit. A typical session has 5–12 questions. Keep asking until the design tree is exhausted. Do not stop after the first question or after an arbitrary number.

The question tool should show:

- a short header;
- one clear question;
- 2–5 realistic options;
- the recommended option first, marked `(Recommended)`;
- a short description for each option explaining the consequence;
- `multiple: true` only when the choices are not mutually exclusive.

Do not add a fake "Other" option; the question tool adds a free-form answer automatically. Do not ask for facts you can look up.

## The design tree

Treat the plan as a tree of decisions:

- The root is the main goal.
- Each branch is a decision that affects the decisions below it.
- A decision is **settled** when the user has answered it.
- The **frontier** is every decision whose prerequisites are settled and which you can ask now without guessing.

Ask only the current frontier. A question whose answer depends on another open question belongs to a later step.

## First question

Start with one question:

**What exactly are we grilling?**

Offer 2–4 options based on the conversation, with the user's current request as the recommended option. If there is no context, offer the main categories from the repository or the user's recent work.

Example:

```text
Header: What are we grilling?
Question: Какую задачу или проект мы детально разберем на этом интервью?
Options:
1. (Recommended) <the user's current plan or idea>
2. <a related alternative from context>
3. <another plausible option>
```

## Question sequence

After each answer:

1. Mark the decision as settled.
2. Recompute the frontier.
3. Ask the next single question with the question tool.
4. Wait for the answer.
5. Repeat. Do not wait for a new user prompt between questions.

Do not ask the next question until the current one is answered or skipped. Do not stop after one question; continue until the frontier is empty or the user says "enough".

## Question quality

Good questions:

- change the plan, scope, risk, or success criteria;
- expose a hidden assumption;
- force a trade-off;
- have realistic options, not a false binary;
- include your recommendation and the reason.

Bad questions:

- ask for facts already in the files;
- ask for permission to do the obvious;
- are so broad that any answer is possible;
- have no consequence;
- repeat a settled decision;
- bundle several independent decisions into one question.

## Facts versus decisions

- **Facts are your job.** Read the files, code, docs, data, and environment. If a fact needs investigation, use a subagent or a tool. Do not ask the user for something you can look up.
- **Decisions are the user's job.** Put each decision to the user and wait.
- If a fact is still being investigated, do not block the whole interview. Ask the questions that do not depend on it; ask the downstream questions later.

## Fallback without a question tool

If the harness has no interactive question tool, ask one question per message in plain text:

```text
Q1 — <short title>
<question and options>
Recommended: <answer and why>
```

Wait for the answer before asking the next question. Do not fall back to a wall of questions.

## Stop condition

The session is done when:

- every important branch of the design tree has been visited;
- no important assumption is silently accepted;
- the user confirms the shared understanding;
- the remaining open questions are explicitly listed.

Do not act on the plan until the user confirms.

## Output format

At the end, return:

```markdown
## Shared understanding

<one paragraph>

## Decisions

| Decision | Choice | Reason |
|---|---|---|
| <decision> | <choice> | <reason> |

## Assumptions

- <assumption>

## Open questions

- <question and owner>

## Recommended next step

- <action>
```

## Rules

- Do not soften a weak point to be polite.
- Do not ask more than one question per tool call.
- Do not stop after the first question; ask as many as the design tree requires.
- Do not invent facts to fill a gap.
- Do not start implementing while the interview is open.
- If the user skips a question, use the recommended option and record it as an assumption.
- If the user says "enough" or "just decide", summarize the open decisions and proceed with explicit assumptions.

## Quality checks

- [ ] The main goal is stated.
- [ ] The question tool is used when available.
- [ ] One question is asked per tool call.
- [ ] The recommended option is first and marked.
- [ ] Each option has a consequence.
- [ ] The design tree covers the important decisions.
- [ ] Facts were looked up, not asked.
- [ ] The final summary separates decisions, assumptions, and open questions.
