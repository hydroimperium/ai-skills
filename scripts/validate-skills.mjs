#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const skillsDir = path.join(root, 'skills');
const namePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const allowedTopLevel = new Set([
  'name',
  'description',
  'license',
  'compatibility',
  'metadata',
  'allowed-tools',
]);
const errors = [];
const warnings = [];
const skills = [];

function parseScalar(raw, file, lineNumber) {
  const value = raw.trim();
  if (value === '') return '';
  if (value.startsWith('"')) {
    if (!value.endsWith('"') || value.length < 2) {
      errors.push(`${file}:${lineNumber}: unterminated double-quoted string`);
      return '';
    }
    try {
      return JSON.parse(value);
    } catch {
      errors.push(`${file}:${lineNumber}: invalid double-quoted string`);
      return '';
    }
  }
  if (value.startsWith("'")) {
    if (!value.endsWith("'") || value.length < 2) {
      errors.push(`${file}:${lineNumber}: unterminated single-quoted string`);
      return '';
    }
    return value.slice(1, -1).replaceAll("''", "'");
  }
  if (/^[|>]/.test(value)) {
    errors.push(`${file}:${lineNumber}: block scalars are not supported; keep the value on one line or quote it`);
    return '';
  }
  if (/^[\[\]{&*!@`]/.test(value)) {
    errors.push(`${file}:${lineNumber}: unsupported YAML construct; use a quoted string`);
    return '';
  }
  if (value.includes(': ')) {
    errors.push(`${file}:${lineNumber}: plain YAML value contains ": "; quote the value or replace the colon`);
    return '';
  }
  return value;
}

function parseFrontmatter(text, file) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    errors.push(`${file}: missing YAML frontmatter`);
    return { data: {}, body: text };
  }

  const data = {};
  let currentKey = null;
  const lines = match[1].split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const lineNumber = index + 2;
    if (!rawLine.trim() || rawLine.trim().startsWith('#')) continue;

    const indent = rawLine.match(/^\s*/)[0].length;
    const line = rawLine.trim();

    if (indent === 0) {
      const colon = line.indexOf(':');
      if (colon === -1) {
        errors.push(`${file}:${lineNumber}: expected "key: value"`);
        continue;
      }
      const key = line.slice(0, colon).trim();
      const rawValue = line.slice(colon + 1);
      currentKey = key;

      if (!allowedTopLevel.has(key)) {
        warnings.push(`${file}:${lineNumber}: unknown frontmatter key "${key}"`);
      }

      if (rawValue.trim() === '') {
        data[key] = {};
      } else {
        data[key] = parseScalar(rawValue, file, lineNumber);
      }
      continue;
    }

    if (currentKey !== 'metadata' || typeof data.metadata !== 'object' || data.metadata === null) {
      errors.push(`${file}:${lineNumber}: nested values are only supported under "metadata"`);
      continue;
    }

    if (indent !== 2) {
      errors.push(`${file}:${lineNumber}: metadata entries must be indented by exactly two spaces`);
      continue;
    }

    const colon = line.indexOf(':');
    if (colon === -1) {
      errors.push(`${file}:${lineNumber}: expected "key: value" in metadata`);
      continue;
    }
    const key = line.slice(0, colon).trim();
    const value = parseScalar(line.slice(colon + 1), file, lineNumber);
    if (Object.hasOwn(data.metadata, key)) {
      errors.push(`${file}:${lineNumber}: duplicate metadata key "${key}"`);
    }
    data.metadata[key] = value;
  }

  return { data, body: text.slice(match[0].length) };
}

function bodyLineCount(body) {
  const trimmed = body.replace(/^\r?\n/, '').replace(/\r?\n$/, '');
  if (trimmed === '') return 0;
  return trimmed.split(/\r?\n/).length;
}

async function checkSkill(file, categoryFolder) {
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const text = await readFile(file, 'utf8');
  const { data, body } = parseFrontmatter(text, relative);
  const folder = path.basename(path.dirname(file));

  if (typeof data.name !== 'string') {
    errors.push(`${relative}: "name" must be a non-empty string`);
  } else {
    const name = data.name.trim();
    if (!name) errors.push(`${relative}: "name" must not be empty`);
    else if (!namePattern.test(name)) errors.push(`${relative}: invalid name "${name}"`);
    else if (name.length > 64) errors.push(`${relative}: name is longer than 64 characters`);
    else if (name !== folder) errors.push(`${relative}: name "${name}" does not match folder "${folder}"`);
  }

  if (typeof data.description !== 'string') {
    errors.push(`${relative}: "description" must be a non-empty string`);
  } else {
    const description = data.description.trim();
    if (!description) errors.push(`${relative}: "description" must not be empty`);
    else if (description.length > 1024) {
      errors.push(`${relative}: description is longer than 1024 characters`);
    }
  }

  if (data.compatibility !== undefined) {
    if (typeof data.compatibility !== 'string') {
      errors.push(`${relative}: "compatibility" must be a string`);
    } else if (data.compatibility.length > 500) {
      errors.push(`${relative}: "compatibility" is longer than 500 characters`);
    }
  }

  if (data.metadata !== undefined) {
    if (typeof data.metadata !== 'object' || data.metadata === null || Array.isArray(data.metadata)) {
      errors.push(`${relative}: "metadata" must be a mapping of string keys to string values`);
    } else {
      for (const [key, value] of Object.entries(data.metadata)) {
        if (typeof value !== 'string') {
          errors.push(`${relative}: metadata.${key} must be a string`);
        }
      }
      if (typeof data.metadata.category !== 'string') {
        errors.push(`${relative}: metadata.category must be a string`);
      } else if (data.metadata.category !== categoryFolder) {
        errors.push(`${relative}: metadata.category "${data.metadata.category}" does not match category folder "${categoryFolder}"`);
      }
    }
  } else {
    errors.push(`${relative}: metadata.category is required`);
  }

  const lines = bodyLineCount(body);
  if (lines > 500) {
    errors.push(`${relative}: SKILL.md body has ${lines} lines; move details to references/ (max 500)`);
  }

  checkLocalReferences(relative, path.dirname(file), body);

  skills.push({
    name: typeof data.name === 'string' && data.name.trim() ? data.name.trim() : folder,
    folder,
    relative,
    lines,
    category: typeof data.metadata?.category === 'string' ? data.metadata.category : 'other',
  });
}

function checkLocalReferences(relative, skillDir, body) {
  const candidates = new Set();

  for (const match of body.matchAll(/\]\(([^)]+)\)/g)) {
    candidates.add(match[1]);
  }
  for (const match of body.matchAll(/`((?:references|scripts|assets)\/[^`\s]+)`/g)) {
    candidates.add(match[1]);
  }

  for (const candidate of candidates) {
    const target = candidate.split('#')[0].trim();
    if (!target || /^(?:https?:|mailto:|#)/.test(target)) continue;
    if (target.includes('<') || target.includes('>') || target.includes('*')) continue;
    const clean = target.replace(/[.,;:]+$/, '');
    const resolved = path.resolve(skillDir, clean);
    if (!existsSync(resolved)) {
      errors.push(`${relative}: referenced file does not exist: ${clean}`);
    }
  }
}

if (!existsSync(skillsDir)) {
  console.error('No skills/ directory found.');
  process.exit(1);
}

const categoryEntries = await readdir(skillsDir, { withFileTypes: true });
for (const categoryEntry of categoryEntries) {
  if (!categoryEntry.isDirectory() || categoryEntry.name.startsWith('.')) continue;
  const category = categoryEntry.name;
  if (!namePattern.test(category)) {
    errors.push(`skills/${category}: category folder must use lowercase letters, numbers, and single hyphens`);
    continue;
  }

  const categoryDir = path.join(skillsDir, category);
  const skillEntries = await readdir(categoryDir, { withFileTypes: true });
  for (const skillEntry of skillEntries) {
    if (!skillEntry.isDirectory() || skillEntry.name.startsWith('.')) continue;
    const file = path.join(categoryDir, skillEntry.name, 'SKILL.md');
    if (!existsSync(file)) {
      errors.push(`skills/${category}/${skillEntry.name}: missing SKILL.md`);
      continue;
    }
    await checkSkill(file, category);
  }
}

if (skills.length === 0) {
  errors.push('No skills found. Each skill must be a subdirectory of skills/<category>/ with a SKILL.md.');
}

const seen = new Map();
for (const skill of skills) {
  if (seen.has(skill.name)) {
    errors.push(`Duplicate skill name "${skill.name}": ${seen.get(skill.name)} and ${skill.relative}`);
  } else {
    seen.set(skill.name, skill.relative);
  }
}

skills.sort((a, b) => a.name.localeCompare(b.name));

console.log(`\nFound ${skills.length} skill(s):\n`);
for (const skill of skills) {
  console.log(`  ${skill.name.padEnd(32)} ${String(skill.lines).padStart(4)} lines  ${skill.category}`);
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

console.log('\nAll skills passed validation.\n');
