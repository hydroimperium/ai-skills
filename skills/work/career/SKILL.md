---
name: career
description: Helps with job search, resume review, LinkedIn profile, outreach, interview preparation, and offer evaluation. Use when the user asks for career help, a resume review, interview questions, or a job search plan. Trigger on "resume", "CV", "собеседование", "резюме", "поиск работы", "оффер", "карьера".
metadata:
  category: work
  version: "1.0.0"
  inspired-by: "phuryn/pm-skills, career-ops-hq/career-ops"
---

# Career

Help the user make a clear next move, not a generic motivational speech.

## When to use

Use when the user:

- wants a resume or CV reviewed;
- needs a job search strategy;
- wants interview preparation;
- needs outreach messages;
- wants to evaluate an offer;
- asks about a career transition.

## 1. Clarify the target

Ask or infer:

- target role and level;
- target companies or industry;
- location and work format;
- current experience;
- constraints: visa, salary, notice period, language;
- timeline.

## 2. Resume review

Check:

- Does the top third say who the person is and what they want?
- Are achievements quantified?
- Are bullets outcome-first, not responsibility-first?
- Is the tech stack relevant to the target role?
- Are there unexplained gaps or buzzwords?
- Is it readable by a human in 30 seconds and by an ATS?
- Is the language consistent?

Rewrite bullets as:

> Action + what + result (metric) + context.

Do not invent metrics. Ask for the real number or mark it.

## 3. Job search plan

Define:

- target roles and companies;
- channels: referrals, job boards, communities, direct outreach;
- weekly volume and quality bar;
- tracking system;
- feedback loop.

## 4. Interview preparation

Prepare:

- a 90-second story;
- 3–5 STAR stories;
- role-specific technical topics;
- questions for the interviewer;
- a mock interview plan.

STAR: Situation, Task, Action, Result. Include what the candidate learned.

## 5. Outreach

Write short messages:

- who you are;
- why this company or person;
- what you bring;
- one clear ask.

Do not send a generic mass message.

## 6. Offer evaluation

Compare:

- compensation;
- equity and vesting;
- growth and learning;
- manager and team;
- work format and location;
- stability and risk;
- mission and values.

Separate facts from preferences. Do not decide for the user.

## Output format

For resume review:

```markdown
## Verdict

## Strong points

## Fixes

| Current | Problem | Suggested rewrite |
|---|---|---|

## Missing facts

- <metric or context the user must provide>
```

For interview prep:

```markdown
## Role and level

## Story bank

| Story | Situation | Action | Result |
|---|---|---|---|

## Likely questions

1. ...

## Questions to ask

1. ...
```

## Rules

- Do not invent experience, metrics, or titles.
- Do not write a resume that misrepresents the user.
- Do not promise a job or interview.
- Do not give visa or legal advice as fact; recommend an expert.
- Do not optimize only for keywords at the expense of clarity.
- Keep the user's language.

## Quality checks

- [ ] The target role is clear.
- [ ] Achievements are quantified or marked as missing.
- [ ] The resume is readable in 30 seconds.
- [ ] The search plan has channels and a feedback loop.
- [ ] Interview stories are specific.
- [ ] No facts were invented.
