---
name: professional-writing
description: Writes and edits clear business text, including emails, messages, memos, announcements, and reports. Use when the user asks to write, rewrite, shorten, or improve professional communication. Trigger on "write an email", "напиши письмо", "деловая переписка", "business writing", "report", "memo". For Russian prose editing use russian-editor; for AI-slop removal use humanizer.
metadata:
  category: writing
  version: "1.0.0"
  inspired-by: "phuryn/pm-skills, vercel-labs/agent-skills, blader/humanizer"
---

# Professional Writing

Write so the reader can act.

## When to use

Use when the user:

- needs an email, message, memo, report, or announcement;
- wants to rewrite or shorten a text;
- wants a clearer tone;
- wants to remove corporate jargon or AI-sounding prose;
- needs a version for a specific audience.

## 1. Clarify the purpose

Identify:

- **Reader** — who receives it, what they know, what they care about.
- **Goal** — what should happen after reading.
- **Relationship** — manager, client, colleague, candidate, public.
- **Context** — prior conversation, deadline, constraints.
- **Length** — the shortest length that achieves the goal.
- **Tone** — direct, warm, formal, neutral, apologetic, firm.

If the goal is unclear, ask one question. Do not write a beautiful text that does not do the job.

## 2. Structure

For most professional texts:

1. **Bottom line first** — the request, decision, or news.
2. **Context** — only what the reader needs.
3. **Details** — facts, options, constraints.
4. **Next step** — who does what by when.

For bad news:

1. State the situation directly.
2. Explain the reason without blaming.
3. Give the new plan or date.
4. Say what you need from the reader.

For a request:

1. Ask clearly.
2. Explain why.
3. Make the next step easy.
4. Give a deadline.

## 3. Write

- Use short sentences.
- Prefer active voice.
- Use concrete nouns and verbs.
- Cut filler: "I wanted to reach out", "just checking in", "in order to", "at this point in time".
- Replace jargon with plain language.
- Use one term for one thing.
- Put the most important information first.
- Use lists only when they make scanning easier.
- Use a subject line that says what the email is about.

## 4. Remove AI-sounding prose

Avoid:

- "I hope this message finds you well."
- "In today's fast-paced world."
- "It is important to note that."
- "Delve into", "leverage", "seamless", "robust", "game-changer".
- Overuse of em dashes, bold text, and three-item lists.
- Symmetrical paragraphs that say the same thing twice.
- Conclusions that repeat the introduction.

Prefer:

- a specific fact;
- a clear request;
- a human sentence;
- a concrete next step.

## 5. Edit

Check:

- Is the main point in the first two sentences?
- Can the reader act without asking a question?
- Is anything repeated?
- Is anything missing?
- Is the tone right for the relationship?
- Are names, dates, and numbers correct?
- Is the text as short as the purpose allows?

## Output format

Return the final text first. Then, if useful:

```markdown
## Notes

- <assumption or trade-off>
- <what to fill in>
```

Do not add a long explanation unless the user asks for one.

## Rules

- Do not invent facts, promises, dates, or numbers.
- Do not make a commitment on the user's behalf.
- Do not use a tone that is warmer or more formal than the relationship supports.
- Do not include confidential information in a forwarded text.
- If the user asks for a translation, preserve meaning and tone, not word order.
- If the text is legal, medical, or financial, say that it needs expert review.

## Quality checks

- [ ] The purpose is clear.
- [ ] The reader knows what to do next.
- [ ] The tone fits the relationship.
- [ ] The text is concise.
- [ ] No invented facts.
- [ ] No AI clichés.
- [ ] Names, dates, and numbers are correct.
