---
name: meeting-notes
description: Prepares meetings and turns transcripts, notes, or discussions into decisions, action items, and follow-ups. Use when the user asks for an agenda, meeting notes, a summary, action items, or a follow-up message. Trigger on "meeting", "встреча", "созвон", "протокол", "action items", "итоги встречи".
metadata:
  category: work
  version: "1.0.0"
  inspired-by: "phuryn/pm-skills, addyosmani/agent-skills"
---

# Meeting Notes

Make the meeting produce decisions, not just conversation.

## Before the meeting

Prepare:

- **Purpose** — why the meeting exists.
- **Desired outcome** — what must be decided or produced.
- **Agenda** — items, owner, time.
- **Pre-read** — the minimum material participants need.
- **Attendees** — who must be there and why.
- **Open questions** — what needs an answer.

Agenda template:

```markdown
## Meeting: <title>

**Date:** <date>
**Goal:** <one sentence>
**Attendees:** <names and roles>

| Time | Topic | Owner | Outcome |
|---|---|---|---|
| 10 min | <topic> | <name> | <decision/info> |

**Pre-read:** <link or note>
**Decisions needed:** <list>
```

## During the meeting

Capture:

- decisions, with the reason;
- action items, with owner and deadline;
- open questions;
- disagreements that remain;
- important context that is not in the pre-read.

Do not capture a transcript unless asked. Capture what changes the work.

## After the meeting

Write the notes within 24 hours.

```markdown
## Meeting summary

**Date:** <date>
**Attendees:** <names>
**Goal:** <one sentence>

## Decisions

- **Decision:** <what was decided>
  - **Reason:** <why>
  - **Owner:** <who owns the outcome>

## Action items

| Action | Owner | Deadline | Status |
|---|---|---|---|
| <action> | <name> | <date> | open |

## Open questions

- <question> — <who can answer> — <by when>

## Risks

- <risk and mitigation>

## Next meeting

- <date, goal, pre-read>
```

## Follow-up message

Keep it short:

```text
Subject: <meeting> — decisions and next steps

Hi <name>,

Thanks for the discussion. Here is what we agreed:

- <decision>
- <decision>

Next steps:
- <owner> — <action> — <date>
- <owner> — <action> — <date>

Open questions:
- <question>

Best,
<name>
```

## Rules

- Do not invent decisions or action items.
- Distinguish "discussed" from "decided".
- Every action item has an owner and a deadline, or is marked unassigned.
- Do not include sensitive details that should not be forwarded.
- If the transcript is ambiguous, mark the item as open and ask.
- Keep the summary shorter than the meeting.

## Quality checks

- [ ] The goal and desired outcome are clear.
- [ ] Decisions are separated from discussion.
- [ ] Action items have owners and deadlines.
- [ ] Open questions are explicit.
- [ ] The follow-up is short and actionable.
- [ ] No invented facts.
