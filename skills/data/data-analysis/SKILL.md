---
name: data-analysis
description: Explores, cleans, analyzes, and reports on datasets with statistical or exploratory methods. Use for larger datasets, database extracts, cohorts, anomalies, correlations, and evidence-based decisions. Trigger on "data analysis", "EDA", "датасет", "статистика", "корреляция", "выбросы", "когорта". For Excel formulas and small workbook tables, use spreadsheet-analysis instead. Validates before reporting and never invents data.
metadata:
  category: data
  version: "1.0.0"
  inspired-by: "K-Dense-AI/scientific-agent-skills, wshobson/agents, phuryn/pm-skills"
---

# Data Analysis

Understand the data before calculating. Validate before reporting.

## When to use

Use when the user:

- has a dataset and a question;
- wants exploratory data analysis;
- needs trends, segments, cohorts, or anomalies;
- wants to validate a dashboard or report;
- needs a decision supported by data.

## 1. Define the question

Write:

- the decision the analysis supports;
- the exact metric or comparison;
- the time range;
- the population and exclusions;
- the expected output.

If the question is vague, propose a sharper version.

## 2. Profile the data

Report:

- file and sheet names;
- rows and columns;
- column types and units;
- date range;
- missing values;
- duplicates;
- outliers;
- schema changes;
- suspicious values.

Do not assume the data is clean.

## 3. Clean safely

- Preserve the raw data.
- Document every transformation.
- Do not silently drop rows.
- Do not impute values without approval.
- Keep row counts before and after each filter.
- Normalize dates, currencies, and units explicitly.

## 4. Analyze

Use the simplest method that answers the question:

- aggregation and grouping;
- period-over-period comparison;
- cohort or segment analysis;
- correlation, with a warning about causation;
- statistical tests only when the data supports them.

Show the code or formulas used.

## 5. Validate

- row counts reconcile;
- totals match the source;
- percentages sum correctly;
- dates are in range;
- no duplicate records;
- units are consistent;
- outliers are explained or excluded with a reason;
- results are stable under a reasonable alternative calculation.

## 6. Visualize

- Choose the chart that matches the question.
- Label axes and units.
- Do not truncate axes to exaggerate differences.
- Show uncertainty where it matters.
- Prefer a clear table over a misleading chart.

## 7. Output format

```markdown
## Question

## Data profile

- Rows/columns:
- Date range:
- Missing/duplicates:

## Method

## Findings

| Finding | Evidence | Confidence |
|---|---|---|

## Validation

- <check> — <result>

## Caveats

- <limitation>

## Recommendation

- <what to do next>
```

## Rules

- Never invent data.
- Never report a number without a unit and time range.
- Do not confuse correlation with causation.
- Do not hide excluded rows.
- Do not use a chart that distorts the comparison.
- If the data cannot answer the question, say so.
- If the dataset is large, sample for exploration but compute on the full data.

## Quality checks

- [ ] The question is explicit.
- [ ] The data was profiled.
- [ ] Transformations are documented.
- [ ] Row counts reconcile.
- [ ] Results are validated.
- [ ] Caveats are stated.
- [ ] No data was invented.
