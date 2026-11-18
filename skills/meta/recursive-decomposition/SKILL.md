---
name: recursive-decomposition
description: "Breaks large codebases and document sets into verified batches. Use for \"много файлов\", \"большой проект\", \"разбей на части\"."
metadata:
  category: meta
  version: "1.0.0"
  inspired-by: "massimodeluisa/recursive-decomposition-skill"
---

# Recursive Decomposition

Long inputs rot: details get missed, distant parts get glued together, and the reasoning drifts. Do not load everything into the window. Treat the input as an environment to size, filter, split, and query.

## When to use

Use when:

- the task spans 10+ files or roughly 50k+ tokens;
- completeness matters: "find all", "summarize every", "compare across";
- the answer requires pairwise, quadratic, or multi-hop reasoning across scattered sources;
- a codebase, document set, or PDF collection is too large for one read.

Do not use when:

- one file, one function, or one needle is enough;
- the answer is local and a direct read is cheaper;
- the task is mostly writing, not analysis.

## Protocol

### 1. Size

Before reading, count:

- files with glob or `find`;
- lines and bytes;
- pages for PDFs;
- the number of candidate modules or documents.

Write the size and the candidate count in the plan.

### 2. Filter

Narrow the search space before opening files:

- file type, path, and name patterns;
- content search with `grep` or the search tool;
- keywords, symbols, dates, and identifiers;
- tables of contents, abstracts, and definitions first.

Never list a whole tree recursively as a substitute for search.

### 3. Chunk

Split what remains into natural units:

- functions, classes, modules, sections, or line ranges;
- batches of 5 to 10 files;
- disjoint partitions, so no two batches cover the same content.

Write the batch count before launching anything.

### 4. Recurse at depth 1

For each independent batch, launch one subagent with a self-contained brief:

```text
Question: <exact question>
Files: <paths and line ranges>
Read: <what to look for>
Output schema: <fields and evidence format>
Boundaries: <what not to do>
```

Rules:

- one parallel wave, then merge;
- subagents answer; they do not spawn subagents;
- each batch is disjoint;
- every finding includes a path and line or a document reference;
- if a subagent fails, retry once, then inspect that batch yourself.

### 5. Verify

Before answering, verify on a smaller window:

- re-read the minimal evidence for the key claims;
- spot-check at least three findings against the sources;
- resolve disagreements with a targeted re-read, not a guess;
- check for gaps: which batches returned nothing, and why.

### 6. Synthesize

Aggregate the structured results:

- deduplicate;
- categorize;
- preserve evidence;
- state what was not covered;
- write the answer with file and line references.

## Output format

```markdown
## Result

<answer>

## Coverage

- Batches: N
- Files/documents: N
- Not analyzed: ...

## Evidence

- `<path:line>` — <finding>

## Confidence

- High / medium / low, with the reason
```

## Anti-patterns

| Anti-pattern | Fix |
|---|---|
| Reading everything first "to get context" | Size, filter, then read by range |
| Dumping a PDF binary into the window | Convert to markdown, then grep and chunk |
| Decomposing a single needle | Read directly |
| Subagents without the question or schema | Self-contained briefs |
| Subagents that spawn subagents | Depth 1 only |
| Trusting the merged answer | Spot-check the evidence |
| Re-querying the same content in several batches | Partition once, disjoint batches |

## Quality checks

- The input was sized before reading.
- The batches are disjoint and documented.
- Every key claim has evidence.
- The answer states what was not covered.
- The synthesis was checked against the sources.
