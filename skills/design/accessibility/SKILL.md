---
name: accessibility
description: Reviews and improves web accessibility for keyboard users, screen readers, contrast, semantics, forms, and responsive interfaces. Use when the user asks for an accessibility audit, WCAG review, or wants to make a UI usable by more people. Trigger on "accessibility", "a11y", "WCAG", "доступность", "скринридер", "клавиатура", "контраст".
metadata:
  category: design
  version: "1.0.0"
  inspired-by: "wshobson/agents, vercel-labs/agent-skills"
---

# Accessibility

Make the interface usable without a mouse, without perfect vision, and without patience for ambiguity.

## When to use

Use when the user:

- wants an accessibility review;
- is building forms, navigation, modals, or interactive components;
- needs WCAG guidance;
- wants keyboard or screen-reader support;
- asks about contrast or focus states.

## 1. Define the scope

- Which pages or components?
- Which user groups and assistive technologies matter?
- Which standard applies: WCAG 2.2 AA, internal policy, legal requirement?
- What is out of scope?

## 2. Check the basics

### Semantics

- Use native elements: `button`, `a`, `input`, `label`, `nav`, `main`.
- Do not use a `div` as a button.
- Use headings in order.
- Give landmarks and sections accessible names.

### Keyboard

- Every interactive element is reachable by Tab.
- Focus order matches visual order.
- Focus is visible.
- No keyboard trap.
- Escape closes modals.
- Arrow keys work in menus, tabs, and grids where expected.

### Forms

- Every input has a label.
- Errors are announced and linked to the field.
- Required fields are marked in text, not only by color.
- Autocomplete is used where appropriate.
- Instructions come before the field.

### Images and media

- Meaningful images have alt text.
- Decorative images have empty alt.
- Video has captions.
- Audio has a transcript.
- No information is conveyed only by color.

### Contrast and text

- Text contrast meets WCAG AA.
- Text can be resized to 200% without loss.
- Line length and spacing are readable.
- Content reflows at 320px.

### Dynamic content

- Loading states are announced.
- Toasts and alerts use appropriate live regions.
- Modals manage focus.
- Client-side route changes update the title and focus.

## 3. Test

- Keyboard-only walkthrough.
- Screen reader smoke test if available.
- Zoom to 200%.
- High contrast mode.
- Reduced motion.
- Automated checks, with the understanding that they catch only part of the problem.

## Output format

```markdown
## Scope

## Findings

### <severity>: <issue>

- **Location:** `<path or component>`
- **WCAG:** <criterion>
- **Impact:** <who is blocked and how>
- **Fix:** <specific change>
- **Verification:** <how to test>

## What works

## Not tested

## Priority

1. ...
```

## Rules

- Do not claim full WCAG compliance from an automated scan.
- Do not use `aria-*` to fix bad semantics.
- Do not remove focus outlines without a visible replacement.
- Do not rely on color alone.
- Do not add a screen-reader-only class as a substitute for a label.
- If the review is partial, say what was not tested.

## Quality checks

- [ ] Native semantics are used.
- [ ] Keyboard access works.
- [ ] Focus is visible.
- [ ] Forms have labels and errors.
- [ ] Contrast is sufficient.
- [ ] Dynamic content is announced.
- [ ] The review states what was not tested.
