---
name: grill-me
description: Stress-tests a plan, design, decision, or idea through a relentless structured interview. Use when the user wants to sharpen their thinking, find hidden assumptions, prepare for a difficult review, or says "grill me", "задай мне вопросы", "допроси меня", "стресс-тест", "разнеси идею". Asks the whole current frontier of decisions in rounds, with a recommended answer for each question.
metadata:
  category: meta
  version: "1.0.0"
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

## The design tree

Treat the plan as a tree of decisions:

- The root is the main goal.
- Each branch is a decision that affects the decisions below it.
- A decision is **settled** when the user has answered it.
- The **frontier** is every decision whose prerequisites are settled and which you can ask now without guessing.

Do not ask a question whose answer depends on another question still open in the same round. Put it in a later round.

## Rounds

Ask the whole frontier in one round. Number each question. For each question:

- give it a short title;
- explain the decision and the realistic options;
- give your recommended answer first;
- word it so "yes" accepts the recommendation.

Format:

```text
Q1 — <short title>
<question, options, consequences>
Recommended: <answer and why>

Q2 — <short title>
...
```

Wait for the answers. Then recompute the frontier: settled answers unblock new questions. Ask the next round. Stop when the frontier is empty.

## Facts versus decisions

- **Facts are your job.** Read the files, code, docs, data, and environment. If a fact needs investigation, use a subagent or a tool. Do not ask the user for something you can look up.
- **Decisions are the user's job.** Put each decision to the user and wait.
- If a fact is still being investigated, do not block the whole round. Ask the questions that do not depend on it; ask the downstream questions in a later round.

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
- repeat a settled decision.

## Stop condition

The session is done when:

- every branch of the design tree has been visited;
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
- Do not ask more than one round at a time.
- Do not invent facts to fill a gap.
- Do not start implementing while the interview is open.
- If the user says "enough" or "just decide", summarize the open decisions and proceed with explicit assumptions.

## Quality checks

- [ ] The main goal is stated.
- [ ] The design tree covers the important decisions.
- [ ] Each round asks only the current frontier.
- [ ] Each question has a recommendation.
- [ ] Facts were looked up, not asked.
- [ ] The final summary separates decisions, assumptions, and open questions.
