# Slash commands

Commands are explicit `/` shortcuts. They load the matching skill and pass the arguments to it.

Skills are auto-loaded when the task matches their description. Commands are for when you want to invoke a workflow directly.

## Installation

### OpenCode

```powershell
.\install.ps1 -Target opencode
```

Commands are copied to `~/.config/opencode/commands/`. For a project-local install:

```powershell
.\install.ps1 -Target opencode -Scope project
```

Commands are copied to `.opencode/commands/`.

### Claude Code

```powershell
.\install.ps1 -Target claude
```

Commands are copied to `~/.claude/commands/`. For a project-local install:

```powershell
.\install.ps1 -Target claude -Scope project
```

### macOS / Linux

```bash
chmod +x install.sh
./install.sh opencode user
./install.sh claude user
```

### Manual

Copy the `.md` files from this folder into your agent's commands directory:

- OpenCode: `~/.config/opencode/commands/` or `.opencode/commands/`
- Claude Code: `~/.claude/commands/` or `.claude/commands/`

The command name is the file name. `commands/plan.md` becomes `/plan`.

## Commands by category

### Meta

| Command | What it does |
|---|---|
| `/prompt` | Turn a rough request into a detailed prompt |
| `/plan` | Plan a change before coding |
| `/spec` | Write a spec before planning |
| `/tasks` | Break a plan into tasks |
| `/grill-me` | Stress-test a plan with a structured interview |
| `/brainstorm` | Generate and narrow options |
| `/skill` | Create or improve an Agent Skill |
| `/handoff` | Create a context handoff |

### Engineering

| Command | What it does |
|---|---|
| `/review` | Review code or a diff |
| `/debug` | Find the root cause of a bug |
| `/test` | Implement with test-driven development |
| `/verify` | Verify work before claiming it is done |
| `/commit` | Prepare a safe commit |
| `/api` | Design or review an API |
| `/refactor` | Refactor without changing behavior |
| `/docs` | Write or review documentation |

### Study

| Command | What it does |
|---|---|
| `/research` | Research a topic with sources |
| `/learn` | Learn a topic with active recall |
| `/notes` | Turn material into study notes |
| `/lab` | Write or structure a Russian lab report |
| `/coursework` | Write or structure a Russian coursework or VKR |
| `/gost` | Check or format a paper according to GOST |
| `/originality` | Improve genuine originality and academic quality |

### Writing and language

| Command | What it does |
|---|---|
| `/write` | Write or edit professional text |
| `/humanize` | Remove AI-slop from text |
| `/edit-ru` | Edit Russian prose |
| `/translate` | Translate between Russian and English |
| `/ru-quality` | Review Russian UI strings and locale files |

### Work, data, and product

| Command | What it does |
|---|---|
| `/meeting` | Prepare or summarize a meeting |
| `/slides` | Build a presentation |
| `/project` | Plan a project or launch |
| `/career` | Resume, interviews, or job search |
| `/data` | Analyze a dataset |
| `/sql` | Write or review SQL |
| `/prd` | Write a product requirements document |
| `/prioritize` | Prioritize features or tasks |

### Design

| Command | What it does |
|---|---|
| `/ui` | Design or review a web interface |
| `/a11y` | Audit web accessibility |

## How commands work

Each command file is a prompt template. `$ARGUMENTS` is replaced with everything the user types after the command.

Example:

```text
/plan add OAuth login to the app
```

becomes:

```text
Load the `plan` skill and follow it. Plan this work in Plan mode:

add OAuth login to the app
```

The agent then loads the skill and follows its workflow.

## Rules

- Commands do not bypass permissions. The agent still asks before destructive actions.
- Commands are not a substitute for skills; they are shortcuts.
- If a command references a missing skill, the agent should say so instead of inventing the workflow.
- Do not put secrets or personal data in command arguments.
