#!/usr/bin/env bash
set -euo pipefail

TARGET="${1:-opencode}"
SCOPE="${2:-user}"
FORCE="${FORCE:-0}"

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILLS_SOURCE="$REPO_ROOT/skills"
COMMANDS_SOURCE="$REPO_ROOT/commands"

usage() {
  echo "Usage: $0 [opencode|claude|all] [user|project]"
  echo "Set FORCE=1 to overwrite existing files."
  exit 1
}

if [[ "$TARGET" != "opencode" && "$TARGET" != "claude" && "$TARGET" != "all" ]]; then
  usage
fi
if [[ "$SCOPE" != "user" && "$SCOPE" != "project" ]]; then
  usage
fi

target_paths() {
  local name="$1"
  if [[ "$name" == "opencode" ]]; then
    if [[ "$SCOPE" == "user" ]]; then
      SKILLS_DEST="$HOME/.config/opencode/skills"
      COMMANDS_DEST="$HOME/.config/opencode/commands"
      PRESERVE_CATEGORIES=1
    else
      SKILLS_DEST="$(pwd)/.opencode/skills"
      COMMANDS_DEST="$(pwd)/.opencode/commands"
      PRESERVE_CATEGORIES=1
    fi
  else
    if [[ "$SCOPE" == "user" ]]; then
      SKILLS_DEST="$HOME/.claude/skills"
      COMMANDS_DEST="$HOME/.claude/commands"
      PRESERVE_CATEGORIES=0
    else
      SKILLS_DEST="$(pwd)/.claude/skills"
      COMMANDS_DEST="$(pwd)/.claude/commands"
      PRESERVE_CATEGORIES=0
    fi
  fi
}

install_skills() {
  echo "Installing skills to $SKILLS_DEST"
  for category_dir in "$SKILLS_SOURCE"/*/; do
    [[ -d "$category_dir" ]] || continue
    category="$(basename "$category_dir")"
    for skill_dir in "$category_dir"*/; do
      [[ -f "${skill_dir}SKILL.md" ]] || continue
      name="$(basename "$skill_dir")"
      if [[ "$PRESERVE_CATEGORIES" == "1" ]]; then
        dest="$SKILLS_DEST/$category/$name"
      else
        dest="$SKILLS_DEST/$name"
      fi
      if [[ -e "$dest" && "$FORCE" != "1" ]]; then
        echo "  skip (exists): $dest"
        continue
      fi
      mkdir -p "$(dirname "$dest")"
      rm -rf "$dest"
      cp -R "$skill_dir" "$dest"
      echo "  installed: $dest"
    done
  done
}

install_commands() {
  mkdir -p "$COMMANDS_DEST"
  echo "Installing commands to $COMMANDS_DEST"
  for file in "$COMMANDS_SOURCE"/*.md; do
    [[ -f "$file" ]] || continue
    [[ "$(basename "$file")" == "README.md" ]] && continue
    dest="$COMMANDS_DEST/$(basename "$file")"
    if [[ -e "$dest" && "$FORCE" != "1" ]]; then
      echo "  skip (exists): $dest"
      continue
    fi
    cp -f "$file" "$dest"
    echo "  installed: $dest"
  done
}

targets=("$TARGET")
if [[ "$TARGET" == "all" ]]; then
  targets=(opencode claude)
fi

for name in "${targets[@]}"; do
  target_paths "$name"
  echo ""
  echo "Target: $name ($SCOPE)"
  install_skills
  install_commands
done

echo ""
echo "Done. Reload your agent if the new skills or commands do not appear."
