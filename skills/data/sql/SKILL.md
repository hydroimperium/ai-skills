---
name: sql
description: Writes, reviews, and optimizes SQL queries with attention to correctness, joins, aggregation, window functions, performance, and dialect differences. Use when the user asks for a query, a report, a migration, or help with slow SQL. Trigger on "SQL", "запрос", "join", "group by", "window function", "индекс", "база данных".
metadata:
  category: data
  version: "1.0.0"
  inspired-by: "wshobson/agents, phuryn/pm-skills"
---

# SQL

Make the query correct first, then fast.

## When to use

Use when the user:

- needs a SQL query;
- wants an existing query reviewed or optimized;
- needs a report or metric definition;
- is debugging a join, aggregation, or duplicate issue;
- needs help with a migration or schema.

## 1. Clarify the schema and dialect

Ask or infer:

- database engine and version;
- table names and columns;
- relationships and keys;
- data types and nullability;
- expected result grain;
- time range and filters;
- read-only or write query.

Do not guess column names.

## 2. Define the result grain

State what one row of the result represents:

- one user per day;
- one order per customer;
- one event per session.

Most SQL bugs are grain bugs.

## 3. Write the query

- Start with the `FROM` and joins.
- Filter early where it is safe.
- Use explicit `JOIN` syntax.
- Use `LEFT JOIN` only when you need unmatched rows.
- Avoid `SELECT *` in production queries.
- Use CTEs for readability when they clarify the steps.
- Use window functions for ranking and running totals.
- Use `NULL` handling explicitly.

## 4. Check for common bugs

- fan-out from one-to-many joins;
- duplicate rows;
- `COUNT(*)` versus `COUNT(column)`;
- `NULL` comparisons;
- implicit type casts;
- timezone mismatches;
- `BETWEEN` with timestamps;
- `HAVING` versus `WHERE`;
- `GROUP BY` missing columns;
- window frame defaults;
- `ORDER BY` without a deterministic tiebreaker.

## 5. Optimize

- Read the query plan.
- Check indexes on join and filter columns.
- Avoid functions on indexed columns in predicates.
- Reduce scanned data early.
- Avoid repeated subqueries when a CTE or join is clearer.
- Do not optimize before measuring.

## 6. Output format

````markdown
## Result grain

## Query

```sql
-- query
```

## Assumptions

- <schema assumption>

## Validation

- <row count check>
- <duplicate check>
- <total check>

## Performance notes

- <index or plan note>
````

## Rules

- Do not invent table or column names.
- Do not run destructive queries without approval.
- Do not use `SELECT *` in production reports.
- Do not hide a fan-out.
- Do not claim performance without a plan or measurement.
- Use the dialect the user's database supports.

## Quality checks

- [ ] The result grain is explicit.
- [ ] Joins are correct.
- [ ] NULLs are handled.
- [ ] Duplicates are checked.
- [ ] The query is readable.
- [ ] Performance is measured, not guessed.
- [ ] No schema facts were invented.
