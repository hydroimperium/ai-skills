# Prompt patterns by task

Use these skeletons when the task matches. Remove sections that do not change the result.

## Agentic coding

```text
You are working in [project/repository]. Your task is to [goal].

Context:
- Stack: [languages, frameworks, versions]
- Current behavior: [what happens now]
- Desired behavior: [what must happen]
- Relevant files: [paths]
- Prior decisions: [constraints, architecture, conventions]

Scope:
- In scope: [files, modules, surfaces]
- Out of scope: [files, modules, behavior that must not change]

Requirements:
1. [Observable requirement]
2. [Observable requirement]
3. [Observable requirement]

Constraints:
- Follow [style guide / existing patterns].
- Do not add dependencies unless approved.
- Preserve [public API / database schema / user data].
- Do not touch [paths].

Approval boundaries:
- Ask before deleting files, installing dependencies, running migrations, changing secrets, or making network calls that modify external systems.
- Stop and report if [condition].

Done when:
- [Acceptance criterion]
- [Test or command passes]
- [Manual check succeeds]

Verification:
- Run `[test command]`.
- Run `[lint/typecheck command]`.
- Add or update tests for [behavior].
- Report exact commands and results.

Report back:
- Summary of changes.
- Files changed.
- Tests run and results.
- Risks, assumptions, and anything not verified.

Stop conditions:
- If the task requires a decision that changes scope, stop and ask.
- If tests fail for reasons unrelated to the task, stop and report.
```

## Chat, analysis, and research

```text
You are [role] with expertise in [domain].

Objective:
[The question or decision the user needs.]

Context:
[Background, why it matters, constraints, audience.]

Inputs:
<source>
[Document, data, excerpt, or links]
</source>

Method:
1. Identify the strongest evidence for and against [position].
2. Compare sources and note disagreements.
3. Separate facts, interpretations, and uncertainty.
4. Prefer primary sources; cite them.
5. If evidence is insufficient, say so instead of guessing.

Output:
- Direct answer in [length].
- Evidence table with source, claim, and confidence.
- Key uncertainties.
- Practical recommendation, if asked.

Quality bar:
- Every factual claim must be traceable to a source.
- Do not invent citations.
- Distinguish "not found" from "does not exist".
- Use [language].
```

## Writing and editing

```text
You are a [role] writing for [audience].

Purpose:
[What the text must achieve: inform, persuade, request, apologize, announce.]

Context:
[Situation, prior communication, relationship, constraints.]

Voice:
- Tone: [direct, warm, formal, neutral].
- Avoid: [jargon, clichés, hype, passive voice, em dashes, emojis].
- Match: [sample text, if available].

Structure:
1. [Opening]
2. [Key points]
3. [Closing or call to action]

Length:
[Word count or paragraph count.]

Must include:
- [Fact, name, date, link, requirement]

Must avoid:
- [Unsupported claim, legal promise, confidential detail]

Self-check before returning:
- The main request is clear in the first [sentence/paragraph].
- No facts were invented.
- The tone matches the audience.
- The text is as short as the purpose allows.

Return only the final text, unless the user asks for commentary.
```

## Study and learning

```text
You are a patient tutor in [subject].

Learning goal:
After this session, I should be able to [observable skill].

My level:
[Beginner/intermediate/advanced]. I already know [prior knowledge].

Teach me:
1. Start with a concrete example.
2. Explain the core idea in plain language.
3. Show the formal definition or rule.
4. Work through one example step by step.
5. Point out common mistakes.
6. Give me one practice task.
7. Wait for my answer before giving the solution.

Rules:
- Ask one question at a time.
- Correct my mistakes directly and explain why.
- Use analogies only when they are accurate.
- Do not overwhelm me with more than [N] new concepts per section.
- At the end, give me a 5-question recall quiz and a short review plan.

Output:
- Explanation.
- Worked example.
- Practice task.
- Quiz.
```

## Academic writing

```text
You are helping me with a [lab report / coursework / VKR / essay / report] in [discipline].

Assignment:
[Exact task, volume, deadline, audience.]

Requirements:
- University guidelines: [paste or summarize; if unknown, ask]
- Formatting: [GOST / university template / other]
- Citation style: [GOST R 7.0.100 / APA / other]
- Language: Russian academic prose.

Structure:
1. [Required section]
2. [Required section]
3. [Required section]

Sources:
- Use [types of sources].
- Cite every borrowed idea.
- Do not invent sources, data, or results.
- Mark missing data as [FILL].

Originality:
- Write in your own words.
- Add analysis, comparison, and conclusions, not just paraphrase.
- Do not rewrite to evade plagiarism or AI detectors.
- Keep a clear boundary between the author's results and borrowed material.

Deliverable:
- First return an outline for approval.
- Then write the section.
- Mark placeholders and open questions.

Verification:
- Check citations against the source list.
- Check structure against the assignment.
- Check academic register and terminology.
- Check formatting requirements.
```

## Work and business

```text
You are helping me with [decision/deliverable] for [audience].

Situation:
[What happened, why now, relevant history.]

Decision needed:
[The exact decision or deliverable.]

Constraints:
- Time: [deadline]
- Budget: [limit]
- Policy: [rules]
- Confidentiality: [what cannot be shared]

Success looks like:
- [Measurable outcome]
- [Stakeholder reaction]
- [Decision made by date]

Output:
- One-page memo with: situation, options, recommendation, risks, next steps.
- Include a comparison table with criteria and scores.
- State assumptions and what would change the recommendation.

Do not:
- Recommend an option without naming its trade-offs.
- Invent data. Mark missing data as [FILL].
```

## Data and spreadsheets

```text
You are analyzing [dataset name].

Dataset:
- File: [path]
- Rows/columns: [counts]
- Key columns: [names, types, units]
- Time range: [range]
- Known issues: [missing values, duplicates, outliers, schema changes]

Questions:
1. [Question]
2. [Question]
3. [Question]

Cleaning rules:
- Preserve the raw file; write results to a new file.
- Treat [values] as missing.
- Exclude [rows] and explain why.
- Do not impute values unless explicitly approved.

Analysis:
- Compute [metrics].
- Compare [groups] using [method].
- Validate totals and row counts.
- Check for [confounders/outliers].

Output:
- Summary of findings.
- Table of results with units.
- Chart suggestions, with the exact fields.
- Validation checks performed.
- Caveats and assumptions.

Rules:
- Never invent data.
- Show formulas or code used.
- State when a result is not statistically meaningful.
```

## Image and video

```text
Create [image/video] of [subject] [action].

Composition:
- Framing: [close-up, medium shot, wide shot]
- Angle: [eye level, low angle, aerial]
- Subject placement: [rule of thirds, centered]
- Background: [environment, depth, negative space]

Style:
- Medium: [photo, illustration, 3D render, film]
- Era/reference: [specific style or references]
- Mood: [calm, tense, playful]

Lighting and color:
- Light source: [natural, studio, neon]
- Time of day: [golden hour, night]
- Palette: [colors, contrast]

Camera:
- Lens: [wide, 35mm, 85mm, macro]
- Depth of field: [shallow, deep]
- Motion: [static, pan, tracking]

Technical:
- Aspect ratio: [16:9, 9:16, 1:1]
- Resolution/duration: [value]
- Model controls: [if known]

Avoid:
- [text, watermark, extra limbs, distorted hands, clutter]

Consistency:
- Use [reference image] for [character/product/style].
```

## System prompt or reusable agent

```text
You are [agent name], responsible for [domain].

Capabilities:
- You can [tools and actions].
- You cannot [limits].

Default workflow:
1. [Step]
2. [Step]
3. [Step]

Boundaries:
- Ask before [risky action].
- Refuse [out-of-scope or unsafe request].
- Do not claim [unsupported capability].

Output contract:
- Format: [Markdown/JSON/plain text].
- Length: [range].
- Language: [language].
- Always include: [sections].

Failure handling:
- If data is missing, ask one focused question or return [fallback].
- If a tool fails, report the error and the next safe step.
- If the request is ambiguous, state the ambiguity and your default.

Examples:
<example>
User: [request]
Assistant: [ideal response]
</example>
```

## Classification and extraction

```text
You are a [domain] classifier/extractor.

Task:
[Classify the input / extract fields / normalize values.]

Allowed labels or schema:
- `label`: [definition]
- `label`: [definition]
- `unknown`: use when [condition]

Input:
<text>
[input]
</text>

Rules:
- Return valid JSON only.
- Do not add fields that are not in the schema.
- If a value is missing, use null.
- If the input is ambiguous, return `unknown` and explain in `reason`.
- Do not infer facts that are not present in the input.

Schema:
{
  "label": "string",
  "confidence": "number between 0 and 1",
  "reason": "short string"
}

Examples:
<example>
Input: [example]
Output: [exact JSON]
</example>
```
