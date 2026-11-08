#!/usr/bin/env node
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const positionals = [];
const flags = new Map();

for (let index = 0; index < args.length; index += 1) {
  const arg = args[index];
  if (arg.startsWith('--')) {
    const value = args[index + 1];
    if (!value || value.startsWith('--')) {
      console.error(`Missing value for ${arg}.`);
      process.exit(1);
    }
    flags.set(arg, value);
    index += 1;
  } else {
    positionals.push(arg);
  }
}

if (positionals.length !== 1) {
  console.error('Usage: npm run new -- <skill-name> --category <meta|engineering|study|writing|language|work|data|product|design> [--description "..."]');
  process.exit(1);
}

const name = positionals[0];
const category = flags.get('--category') ?? '';
const description =
  flags.get('--description') ??
  'Describe what this skill does and when an agent should use it. Include trigger words and concrete contexts.';

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
  console.error('Skill name must use lowercase letters, numbers, and single hyphens.');
  process.exit(1);
}

if (name.length > 64) {
  console.error('Skill name must be 64 characters or fewer.');
  process.exit(1);
}

const categories = ['meta', 'engineering', 'study', 'writing', 'language', 'work', 'data', 'product', 'design'];
if (!category) {
  console.error(`Missing --category. Choose one of: ${categories.join(', ')}.`);
  process.exit(1);
}
if (!categories.includes(category)) {
  console.error(`Category must be one of: ${categories.join(', ')}.`);
  process.exit(1);
}

if (!description.trim() || description.length > 1024) {
  console.error('Description must be 1–1024 characters.');
  process.exit(1);
}

const dir = path.join(process.cwd(), 'skills', category, name);
if (existsSync(dir)) {
  console.error(`Skill already exists: ${dir}`);
  process.exit(1);
}

await mkdir(path.join(dir, 'references'), { recursive: true });
await writeFile(path.join(dir, 'references', '.gitkeep'), '', 'utf8');

const title = name
  .split('-')
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(' ');

const content = `---
name: ${name}
description: ${JSON.stringify(description)}
metadata:
  category: ${category}
  version: "0.1.0"
  inspired-by: "original"
---

# ${title}

## When to use

Describe the trigger conditions and the user's goal.

## Workflow

1. Inspect the available context before acting.
2. Ask only questions that change the result.
3. Perform the task in small, verifiable steps.
4. Check the result against the success criteria.

## Output format

Define the exact structure the agent should return.

## Quality checks

- The result matches the user's intent.
- No facts, paths, or constraints were invented.
- The user can verify the result.

## References

Add supporting material under \`references/\` and link it here.
`;

await writeFile(path.join(dir, 'SKILL.md'), content, 'utf8');

console.log(`Created skills/${category}/${name}/SKILL.md`);
console.log('Next: fill in the instructions, then run `npm run validate`.');
