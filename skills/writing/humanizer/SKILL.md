---
name: humanizer
description: Removes AI-sounding prose, corporate filler, and chatbot habits from English or Russian text while preserving facts and meaning. Use when the user asks to humanize, de-slop, simplify, or make text sound less like a language model. Trigger on "humanize", "убери AI-слоп", "сделай текст человечнее", "звучит как нейросеть", "убери воду", "de-slop". For academic text, preserve the genre's formality; use academic-originality for coursework and theses. Not for fiction or legal text.
metadata:
  category: writing
  version: "1.0.0"
  inspired-by: "blader/humanizer, smixs/humanizer-ru, codemistake/human-writing, dripips/plain-prose, ETOART/antislop-ru"
---

# Humanizer

Make the text sound like a competent person wrote it. Do not fake personality.

## When to use

Use when the user:

- has an AI-generated draft and wants it to sound natural;
- wants to remove corporate filler or chatbot phrasing;
- wants a shorter, clearer version;
- asks "does this sound like AI?".

Do not use for:

- fiction or poetry where style is the point;
- legal, medical, or academic text where formality is required;
- text that is already clear and human.

## Modes

- **Audit** — identify the patterns, quote them, explain the fix. Do not rewrite unless asked.
- **Rewrite** — return the edited text and a short list of key changes.
- **Detect** — assess whether the text shows AI patterns. State that this is a heuristic, not proof.

If the mode is unclear, rewrite and include a short audit.

## Workflow

### 1. Read for meaning

- What is the text trying to do?
- Who is the reader?
- What facts, numbers, names, and constraints must survive?
- What is the tone: formal, neutral, conversational?

### 2. Audit the patterns

Look for clusters, not isolated words:

- throat-clearing and announcements;
- restating the question;
- "it is important to note" and similar filler;
- inflated significance;
- vague attribution ("experts say");
- false balance and hedging;
- negative parallelism ("not just X, but Y");
- rule-of-three lists everywhere;
- uniform sentence and paragraph length;
- generic positive conclusions;
- chatbot artifacts ("I hope this helps");
- unnecessary emojis, bold, and headings;
- English calques in Russian;
- bureaucratic Russian: "осуществляется", "является", "в рамках", "данный";
- chains of gerunds and genitive cases;
- pseudo-depth ("at its core", "if you look deeper");
- over-explaining the obvious.

### 3. Rewrite only what is broken

For each finding, choose:

1. **Delete** — most filler disappears without loss.
2. **Replace with a fact** — only a fact from the source or context. Never invent one.
3. **Rewrite simpler** — shorter, more direct, same meaning.

Do not replace one cliché with a synonym. That is the same slop in a new package.

### 4. Preserve function

Keep:

- facts and numbers;
- names, dates, links, prices;
- requests, offers, deadlines;
- legal or safety warnings;
- the author's opinion, if it was there.

A cleaner text that loses the request is a failed edit.

### 5. Check the result

- Is it shorter or clearer?
- Are the facts intact?
- Does it sound natural when read aloud?
- Is the sentence length varied?
- Did you add a new cliché while removing another?
- Is the tone appropriate for the genre?

## Russian-specific patterns

- Replace verbal nouns with verbs: "проводить проверку" → "проверять".
- Replace "является" with a direct statement or a dash.
- Replace passive with active where the actor matters.
- Break genitive chains: "процесс развития системы управления" → "как развивается система управления".
- Remove "в рамках", "в целях", "в связи с необходимостью" when a simple preposition works.
- Do not translate English idioms literally: "address the problem" is not "адресовать проблему".
- Keep Russian typography: «ёлочки», em dash with spaces, non-breaking spaces before units where appropriate.
- Do not overuse dashes as a replacement for every colon or comma.

## Output format

For rewrite:

```markdown
## Edited text

<final text>

## Key changes

- <change and reason>
- <change and reason>
```

For audit:

```markdown
## Findings

| Quote | Pattern | Fix |
|---|---|---|
| <quote> | <pattern> | <delete/replace/rewrite> |

## Verdict

<what the text needs most>
```

## Rules

- Do not invent facts to replace vague claims.
- Do not make the text artificially casual if the genre is formal.
- Do not remove a warning, request, or legal condition.
- Do not claim to detect AI with certainty.
- Do not over-edit a clean text.
- Do not copy example sentences from references verbatim.
- Keep the user's language; do not translate unless asked.

## Quality checks

- [ ] Facts and numbers are intact.
- [ ] The text is shorter or clearer.
- [ ] The tone fits the genre.
- [ ] No new clichés were introduced.
- [ ] Sentence and paragraph length vary.
- [ ] The text reads naturally aloud.
- [ ] No AI-detection claim is presented as fact.
