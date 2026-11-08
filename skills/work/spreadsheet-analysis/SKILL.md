---
name: spreadsheet-analysis
description: Works with Excel, Google Sheets, CSV, and small business tables, including formulas, pivot tables, cleaning, totals, validation, and summaries. Use when the user asks to fix or build a spreadsheet, check formulas, reconcile totals, or analyze a workbook. Trigger on "spreadsheet", "Excel", "Google Sheets", "формула", "сводная таблица", "xlsx", "посчитай в таблице". For statistical analysis and large datasets, use data-analysis instead.
metadata:
  category: work
  version: "1.0.0"
  inspired-by: "wshobson/agents, anthropics/skills, K-Dense-AI/scientific-agent-skills"
---

# Spreadsheet Analysis

Understand the data before calculating. Validate before reporting.

## When to use

Use when the user:

- has a CSV or XLSX file;
- wants totals, trends, comparisons, or cohort analysis;
- wants formulas or pivot tables;
- wants data cleaned or validated;
- wants a summary or chart;
- suspects an error in a spreadsheet.

## 1. Profile the data

Before analysis, report:

- file name and sheet names;
- row and column counts;
- column names, types, and units;
- date range;
- missing values;
- duplicate rows;
- outliers or impossible values;
- merged cells, hidden rows, or multiple header rows.

Do not assume the first row is the header or that the data is clean.

## 2. Clarify the question

Ask:

- What decision does this analysis support?
- What is the exact metric or comparison?
- What is the time period?
- Which rows should be excluded?
- What is the expected output: table, chart, summary, formula?

## 3. Clean safely

- Preserve the raw file; write results to a new file or sheet.
- Document every transformation.
- Do not silently drop rows.
- Do not impute missing values unless approved.
- Keep a row-count before and after each filter.
- Normalize dates, currencies, and units explicitly.

## 4. Analyze

Use the simplest method that answers the question:

- aggregation and grouping;
- period-over-period comparison;
- cohort or segment analysis;
- correlation, with a warning about causation;
- statistical tests only when the data supports them.

Show formulas or code used. For Excel, give exact formulas and cell ranges. For Python/pandas, show the operations.

## 5. Validate

Check:

- row counts before and after filters;
- totals reconcile with the source;
- percentages sum to 100% where expected;
- dates fall within the stated range;
- no duplicate records;
- units are consistent;
- outliers are explained or excluded with a reason;
- results are stable under a reasonable alternative calculation.

## 6. Output format

```markdown
## Data profile

- File:
- Rows/columns:
- Date range:
- Key columns:
- Missing/duplicates:

## Question

## Method

## Results

| Metric | Value | Unit | Notes |
|---|---:|---|---|
| <metric> | <value> | <unit> | <note> |

## Validation

- <check> — <result>

## Caveats

- <assumption or limitation>

## Recommendation

- <what to do next>
```

## Rules

- Never invent data.
- Never report a number without its unit and time range.
- Do not confuse correlation with causation.
- Do not hide excluded rows.
- Do not use a chart that distorts the comparison.
- If the data cannot answer the question, say so.
- If the file is large, sample for exploration but compute on the full data.

## Quality checks

- [ ] The data was profiled before analysis.
- [ ] The question is explicit.
- [ ] Transformations are documented.
- [ ] Row counts reconcile.
- [ ] Units and dates are consistent.
- [ ] Results are validated.
- [ ] Caveats are stated.
- [ ] No data was invented.
