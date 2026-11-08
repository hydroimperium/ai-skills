---
name: frontend-design
description: Designs and reviews web interfaces for hierarchy, typography, spacing, color, states, responsiveness, and visual quality. Use when the user asks to design a page, improve a UI, review a frontend, or make an interface look less generic. Trigger on "UI", "UX", "frontend", "дизайн", "интерфейс", "верстка", "сделай красиво", "review UI".
metadata:
  category: design
  version: "1.0.0"
  inspired-by: "vercel-labs/agent-skills, Leonxlnx/taste-skill, pbakaus/impeccable, wshobson/agents"
---

# Frontend Design

Design the page around the user's task, not around a component library.

## When to use

Use when the user:

- designs a landing page, dashboard, app screen, or form;
- wants a UI review;
- says the interface looks generic or "AI-made";
- needs responsive behavior;
- wants better hierarchy, typography, or spacing.

## 1. Clarify the page

- Who is the user?
- What is the one action they should take?
- What is the content hierarchy?
- What is the brand or reference?
- What are the constraints: framework, design system, accessibility, performance?

## 2. Start with hierarchy

- one primary message;
- one primary action;
- supporting information in order of importance;
- clear section boundaries;
- no decorative element that competes with the task.

## 3. Typography

- Use a limited type scale.
- Make the heading hierarchy obvious.
- Keep body text readable: size, line height, measure.
- Avoid all-caps for long text.
- Use weight and color for emphasis, not everything at once.
- Do not use more than two font families unless the brand requires it.

## 4. Spacing and layout

- Use a consistent spacing scale.
- Group related elements.
- Give the page room to breathe.
- Align to a grid.
- Use asymmetry intentionally, not accidentally.
- Design mobile and desktop together.

## 5. Color

- Define a palette with roles: background, surface, text, muted text, border, primary, danger, success.
- Check contrast.
- Do not use color as the only signal.
- Avoid gradients and glows unless they serve the brand.
- Keep dark mode intentional, not inverted.

## 6. States

Design:

- default;
- hover;
- focus;
- active;
- disabled;
- loading;
- empty;
- error;
- success.

Most generic UIs forget empty and error states.

## 7. Content

- Write real copy, not lorem ipsum.
- Make buttons say what they do.
- Use specific labels.
- Remove filler.
- Keep the reading level appropriate.

## 8. Review

Check:

- Is the primary action obvious?
- Is the hierarchy clear in 5 seconds?
- Does it work at 375px and 1440px?
- Are focus states visible?
- Is contrast sufficient?
- Are empty and error states designed?
- Does it look like a template or like this product?

## Output format

```markdown
## Page goal

## Hierarchy

1. ...
2. ...

## Layout

## Type scale

## Color roles

## States

## Copy

## Responsive behavior

## Review findings

| Issue | Impact | Fix |
|---|---|---|
```

## Rules

- Do not invent brand guidelines.
- Do not sacrifice accessibility for aesthetics.
- Do not use a component library as a substitute for hierarchy.
- Do not add animation without a purpose.
- Do not copy a reference site's visual identity.
- If the user has a design system, follow it.

## Quality checks

- [ ] The page goal is clear.
- [ ] Hierarchy is obvious.
- [ ] Type and spacing are consistent.
- [ ] Contrast is sufficient.
- [ ] All states are designed.
- [ ] Mobile and desktop work.
- [ ] The UI does not look generic.
