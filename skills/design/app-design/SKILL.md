---
name: app-design
description: "Designs app UI/UX for real users: layout, button placement, density, ergonomics, and flows. Use for \"app UI\", \"удобство\", \"эргономика\", \"расположение кнопок\", \"перегруженный интерфейс\". For visual style use frontend-design."
metadata:
  category: design
  version: "1.0.0"
  inspired-by: "PGraeff/frontend-design-pro-agent-skill, oil-oil/oil-ui, arham777/ui-ux-kit, Apple HIG, Material Design 3"
---

# App Design

Design the app around the user's job, not around a component library. The goal is an interface that is easy to scan, obvious to operate, and comfortable to use repeatedly.

## When to use

Use when:

- designing a new app screen, flow, dashboard, form, settings page, or onboarding;
- reviewing an existing app UI for usability, hierarchy, button placement, density, or ergonomics;
- the user says the interface is confusing, overloaded, cramped, or "неудобно";
- deciding where an action belongs, how to group controls, or how to reduce choices;
- designing for mobile, desktop, or both.

Do not use when:

- the user only wants visual style, typography, color, or polish; use `frontend-design`;
- the task is a WCAG audit; use `accessibility`;
- the task is browser test automation; use `webapp-testing`;
- the task is a landing page or marketing site; use `frontend-design`.

## Core principles

- **One primary job per screen.** If the screen has two primary jobs, split it or make one clearly secondary.
- **One primary action.** The main action is visually dominant and placed where the user expects it.
- **Recognition over recall.** Show options, current state, and consequences; do not make the user remember.
- **Progressive disclosure.** Show what is needed now; hide advanced settings behind a clear entry point.
- **Proximity.** Controls sit next to the content they affect.
- **Consistency.** The same action looks and behaves the same everywhere.
- **Reversible actions.** Prefer undo over confirmation for low-risk actions; confirm destructive actions.
- **Feedback.** Every action has a visible result: loading, success, error, or state change.
- **Ergonomics.** Touch targets, reach zones, keyboard access, safe areas, and text scaling are part of the design, not a polish step.

## Workflow

### 1. Learn the user and the job

Before drawing:

- Who is the user, and how often will they use this screen?
- What is the one task they must complete?
- What do they need to see before acting?
- What can go wrong, and how do they recover?
- What platform and input modes: touch, mouse, keyboard, voice?
- What existing patterns, components, and tokens must be preserved?

If the answer changes the layout, ask one focused question. Otherwise decide and state the assumption.

### 2. Map the screen

Write a short screen map:

| Area | Content | Primary action | Secondary actions |
|---|---|---|---|

Then check:

- Is the primary task visible without scrolling?
- Is the primary action obvious within three seconds?
- Are secondary actions quieter than the primary?
- Is navigation separate from content actions?
- Is there anything that can be removed without losing the task?

### 3. Place actions

- Put the primary action where the user finishes the task: bottom of a form, top-right of a table, sticky footer on mobile.
- Keep the action near the thing it affects. Do not put "Save" far from the edited fields.
- Use one primary button style; secondary actions are text or outlined; destructive actions are separated and labeled.
- On mobile, keep frequent actions in the thumb zone; keep destructive actions out of accidental reach.
- Use full-width buttons for the main mobile action; use inline buttons for row actions.
- Label buttons with verbs: "Save changes", "Delete project", not "OK".
- Disable a button only with a visible reason; otherwise keep it enabled and show validation.
- Do not hide the only action behind an icon without a label or tooltip.

### 4. Reduce load

- Remove duplicate controls, decorative cards, and repeated labels.
- Group related fields; use sections instead of a wall of inputs.
- Show defaults; let the user override.
- Use progressive disclosure for advanced options.
- Prefer one clear choice over many equal choices.
- Avoid card-in-card, nested scroll areas, and competing sidebars.
- Keep the screen's visual density appropriate: operational tools can be dense; consumer screens need breathing room.
- Use whitespace to group, not to fill.

### 5. Design the states

For every interactive element and screen, define:

- default, hover, focus, active, disabled;
- loading, empty, error, success;
- selected, expanded, collapsed;
- offline or slow network where relevant.

Rules:

- Loading starts immediately and names the work.
- Empty states explain what to do next.
- Errors say what happened and how to fix it, near the source.
- Success is visible without a modal.
- Destructive actions require confirmation or undo.
- Do not rely on color alone.

### 6. Check ergonomics

- Touch targets: at least 44x44 pt on iOS, 48x48 dp on Android, with spacing.
- Desktop: keyboard focus visible, logical tab order, Enter/Escape behavior.
- Mobile: safe areas, keyboard avoidance, one-handed reach, no hover-only actions.
- Text scaling: layout survives larger text; no clipped labels.
- Motion: short, interruptible, respects reduced motion.
- Forms: labels above inputs, errors below, no placeholder-as-label.
- Tables/lists: sticky headers where useful, clear row actions, no horizontal overflow on mobile.

### 7. Verify

- Walk the primary flow as a new user.
- Walk it as a returning user.
- Try the empty, error, and slow states.
- Check the smallest supported width and the largest text size.
- Check keyboard-only and touch-only.
- Ask: can the user complete the task without instructions?

## Output format

```markdown
## User and job

## Screen map

| Area | Content | Primary action | Secondary actions |
|---|---|---|---|

## Layout and actions

- ...

## States

| Element | Default | Loading | Empty | Error | Success |
|---|---|---|---|---|---|

## Ergonomics

- ...

## UX risks

- ...

## Verification

- ...
```

## Review checklist

- [ ] One primary job and one primary action.
- [ ] Primary action visible without scrolling.
- [ ] Actions are near the content they affect.
- [ ] Secondary actions are quieter than the primary.
- [ ] No duplicate or decorative controls.
- [ ] Empty, loading, error, and success states exist.
- [ ] Touch targets and keyboard access are adequate.
- [ ] Labels are verbs; errors explain recovery.
- [ ] The screen works at the smallest width and largest text.
- [ ] A new user can finish the task without instructions.

## Boundaries

- `frontend-design` — visual style, typography, color, hierarchy polish.
- `accessibility` — WCAG audit, screen readers, contrast, keyboard.
- `webapp-testing` — browser automation and E2E verification.
- `presentation-builder` — slide decks, not app screens.
