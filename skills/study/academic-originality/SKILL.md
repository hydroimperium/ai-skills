---
name: academic-originality
description: Improves genuine originality and academic quality in Russian student texts through synthesis, citation, restructuring, and removal of AI-slop. Use when the user asks to raise originality, rewrite a курсовая or ВКР, remove AI-slop from academic text, or make a paper sound human. Does not help evade plagiarism or AI detectors, fabricate sources, or ghostwrite graded work.
metadata:
  category: study
  version: "1.0.0"
  inspired-by: "piofant/diploma-skills, smixs/humanizer-ru, codemistake/human-writing, dripips/plain-prose, N1arko/redaktura-skills"
---

# Academic Originality

Raise originality by improving authorship, not by hiding the source of the text.

## When to use

Use when the user:

- wants to raise the originality of a coursework, VKR, lab report, or essay;
- wants to remove AI-slop from academic prose;
- has a draft that reads like a patchwork of sources;
- wants to paraphrase without losing meaning;
- wants to make the text sound like a careful student wrote it.

Do not use to:

- evade plagiarism or AI detectors;
- fabricate sources, data, or results;
- write a graded work for someone to submit as their own.

## Ethical boundary

State this clearly if the request is about detector evasion:

> I can help improve genuine originality: own analysis, correct citations, restructuring, and clearer writing. I cannot help disguise AI-generated text or bypass academic integrity checks.

Then offer the legitimate path.

## 1. Audit the draft

Check:

- **Source use** — are sources cited? Are whole paragraphs paraphrased from one source?
- **Synthesis** — does the text compare sources or list them one by one?
- **Own analysis** — is there an argument, comparison, interpretation, or conclusion?
- **Structure** — does the text follow the assignment or a generic template?
- **Facts** — are data, numbers, and citations real and consistent?
- **AI-slop** — template transitions, inflated significance, generic conclusions, over-hedging, calques, uniform rhythm.
- **Academic register** — is the tone appropriate, or is it a blog post with formal words?

## 2. Improve originality legitimately

Use these techniques:

1. **Read, close the source, write from notes.** This produces your own sentence structure.
2. **Synthesize several sources.** Compare positions, find disagreements, explain what follows.
3. **Add own analysis.** Interpret the evidence for the specific task.
4. **Use concrete examples.** Data, cases, calculations, or documents from the assignment.
5. **Restructure.** Change the order from source order to argument order.
6. **Cite precisely.** A citation is not a weakness; an uncited borrow is.
7. **Quote sparingly.** Quote only when the exact wording matters.
8. **Remove filler.** Keep the facts and the argument.

Do not:

- replace words with synonyms and call it originality;
- add fake facts or citations;
- change the meaning to make the text look different;
- rewrite a source sentence by sentence.

## 3. Remove academic AI-slop

Look for:

- «важно отметить», «стоит подчеркнуть», «играет ключевую роль»;
- «не просто X, а Y»;
- generic conclusions («перспективы дальнейшего развития»);
- vague attribution («многие исследователи считают»);
- over-hedging («возможно, вероятно, в некоторой степени»);
- chains of verbal nouns and passive constructions;
- uniform sentence and paragraph length;
- English calques;
- restating the heading in the first sentence.

Replace with a fact, a citation, a direct claim, or delete.

## 4. Output format

```markdown
## Diagnosis

<what weakens originality and academic quality>

## Revised text

<edited text>

## What changed

- <change and reason>

## What the author must add

- <own data, calculation, source, or conclusion>

## Citation check

- <source and where it is used>
```

For an audit only:

```markdown
## Findings

| Quote | Problem | Fix |
|---|---|---|

## Priority

1. ...
```

## Rules

- Do not invent facts, sources, or data.
- Do not help evade detectors.
- Do not ghostwrite a graded work.
- Do not change the author's position.
- Do not remove citations or caveats.
- Do not replace one cliché with another.
- Keep the academic register.

## Quality checks

- [ ] The draft was audited before rewriting.
- [ ] Sources are cited.
- [ ] Own analysis is added, not faked.
- [ ] The meaning is preserved.
- [ ] AI-slop is removed without losing facts.
- [ ] No detector-evasion advice.
- [ ] The author knows what still needs their input.
