#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const commandsDir = path.join(root, 'commands');
const skillsDir = path.join(root, 'skills');
const errors = [];
const warnings = [];
const commands = [];
const skillNames = new Set();

async function collectSkills(dir) {
  if (!existsSync(dir)) return;
  const categories = await readdir(dir, { withFileTypes: true });
  for (const category of categories) {
    if (!category.isDirectory() || category.name.startsWith('.')) continue;
    const categoryDir = path.join(dir, category.name);
    const skills = await readdir(categoryDir, { withFileTypes: true });
    for (const skill of skills) {
      if (!skill.isDirectory() || skill.name.startsWith('.')) continue;
      if (existsSync(path.join(categoryDir, skill.name, 'SKILL.md'))) {
        skillNames.add(skill.name);
      }
    }
  }
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'README.md') {
      await checkCommand(full);
    }
  }
}

async function checkCommand(file) {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const commandName = relative.replace(/^commands\//, '').replace(/\.md$/, '');
  const segments = commandName.split('/');
  if (!segments.every((segment) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(segment))) {
    errors.push(`${relative}: command name must use lowercase letters, numbers, and single hyphens`);
  }

  const text = await readFile(file, 'utf8');
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    errors.push(`${relative}: missing YAML frontmatter`);
    return;
  }

  const frontmatter = match[1];
  const body = text.slice(match[0].length).trim();
  const descriptionLine = frontmatter.split(/\r?\n/).find((line) => line.startsWith('description:'));
  if (!descriptionLine) {
    warnings.push(`${relative}: no description`);
  } else {
    const description = descriptionLine.slice('description:'.length).trim();
    if (!description) errors.push(`${relative}: description is empty`);
    if (description.length > 1024) errors.push(`${relative}: description is longer than 1024 characters`);
  }

  if (/^template:/m.test(frontmatter)) {
    errors.push(`${relative}: do not put "template" in Markdown frontmatter; the body is the template`);
  }

  if (!body) {
    errors.push(`${relative}: command body is empty`);
  }

  if (!/\$ARGUMENTS|\$[1-9]/.test(body)) {
    warnings.push(`${relative}: no $ARGUMENTS or positional placeholder`);
  }

  const skillMatch = body.match(/Load the `([a-z0-9-]+)` skill/);
  if (!skillMatch) {
    warnings.push(`${relative}: does not reference a skill with "Load the \`<name>\` skill"`);
  } else if (!skillNames.has(skillMatch[1])) {
    errors.push(`${relative}: references missing skill "${skillMatch[1]}"`);
  }

  commands.push({ name: commandName, relative });
}

await collectSkills(skillsDir);

if (!existsSync(commandsDir)) {
  console.error('No commands/ directory found.');
  process.exit(1);
}

await walk(commandsDir);

if (commands.length === 0) {
  errors.push('No commands found in commands/.');
}

commands.sort((a, b) => a.name.localeCompare(b.name));

console.log(`\nFound ${commands.length} command(s):\n`);
for (const command of commands) {
  console.log(`  /${command.name}`);
}

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  for (const warning of warnings) console.log(`  - ${warning}`);
}

if (errors.length) {
  console.log(`\nErrors (${errors.length}):`);
  for (const error of errors) console.log(`  - ${error}`);
  console.log('');
  process.exit(1);
}

console.log('\nAll commands passed validation.\n');
