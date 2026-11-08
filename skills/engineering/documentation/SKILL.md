---
name: documentation
description: Writes and reviews README files, architecture decision records, API docs, how-to guides, and reference documentation. Use when the user asks for docs, an ADR, onboarding material, or wants existing documentation improved. Trigger on "documentation", "README", "ADR", "docs", "документация", "опиши проект", "архитектурное решение".
metadata:
  category: engineering
  version: "1.0.0"
  inspired-by: "addyosmani/agent-skills, wshobson/agents, vercel-labs/agent-skills"
---

# Documentation

Write for the reader who has to use or change the system.

## When to use

Use when the user:

- needs a README or onboarding guide;
- wants an architecture decision record;
- needs API or configuration reference;
- wants a how-to or troubleshooting guide;
- asks to improve existing docs.

## 1. Identify the document type

| Type | Reader question | Shape |
|---|---|---|
| README | What is this and how do I start? | short, task-oriented |
| Tutorial | How do I learn by doing? | step-by-step |
| How-to | How do I solve a specific problem? | goal and steps |
| Reference | What are the exact options? | complete and structured |
| Explanation | Why does it work this way? | concepts and trade-offs |
| ADR | Why did we choose this? | context, decision, consequences |
| Troubleshooting | Why is it broken? | symptom, cause, fix |

Do not mix all types into one document.

## 2. Know the reader

- What do they already know?
- What are they trying to do?
- What will they read first?
- What will they search for?
- What mistake are they likely to make?

## 3. Write the minimum useful document

For a README:

1. one-sentence description;
2. problem it solves;
3. quick start;
4. configuration;
5. common tasks;
6. troubleshooting;
7. links to deeper docs;
8. copyright and usage terms.

For an ADR:

```markdown
# <Title>

## Status

Accepted / Proposed / Superseded

## Context

<the forces and constraints>

## Decision

<what we chose>

## Consequences

<what becomes easier and harder>

## Alternatives

<what we rejected and why>
```

## 4. Make it verifiable

- Every command should be copyable.
- Every code sample should be valid for the current version.
- Every path should exist.
- Every environment variable should be named.
- Every prerequisite should be stated.
- Every warning should say what to do, not only what not to do.

## 5. Keep it maintainable

- Put the document next to the code it describes.
- Link to source files and tests.
- Mark the version or date if the content can go stale.
- Remove duplicated explanations.
- Prefer one canonical page over three partial ones.

## Output format

Return the document in Markdown. If saving a file, state the path and update the index or README link.

## Rules

- Do not invent APIs, flags, or behavior.
- Do not document a feature you have not checked.
- Do not use marketing language in reference docs.
- Do not hide prerequisites.
- Do not write a wall of text when a table or example is clearer.
- If the code is undocumented and unclear, read it or ask before writing.

## Quality checks

- [ ] The document type is appropriate.
- [ ] The reader and task are clear.
- [ ] Commands and examples are correct.
- [ ] Prerequisites are stated.
- [ ] The structure supports scanning.
- [ ] Links and paths exist.
- [ ] The document says why, not only what.
