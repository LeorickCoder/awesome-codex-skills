# Design Routing Guide

Use this guide to decide which design skill or local workflow to use.

## Skill Map

| Skill | Purpose |
|-------|---------|
| `brand` | Brand identity, voice, assets, palette rules |
| `design-system` | Tokens, component specs, slide decision system |
| `ui-styling` | shadcn/ui, Tailwind, responsive implementation |
| `ui-ux-pro-max` | Style, palette, typography, layout direction |
| `design` | Orchestrate the full design workflow |

## Built-In Workflows

| Workflow | Entry Point |
|----------|-------------|
| Logo | `scripts/logo/search.py`, `scripts/logo/generate.py` |
| CIP | `scripts/cip/search.py`, `scripts/cip/generate.py`, `scripts/cip/render-html.py` |
| Slides | `references/slides-create.md`, `references/slides-layout-patterns.md`, `references/slides-copywriting-formulas.md`, `references/slides-strategies.md`, `references/slides-html-template.md` |
| Banner | `references/banner-sizes-and-styles.md` + HTML/CSS export workflow |
| Social photos | `references/social-photos-design.md` |
| Icon | `scripts/icon/generate.py` |

## Routing by Task Type

### Brand Identity Tasks

Use `brand` for:

- color and typography rules
- asset governance
- tone of voice
- brand consistency review

### Token and System Tasks

Use `design-system` for:

- primitive/semantic/component tokens
- CSS variable generation
- component specs and states
- slide strategy and layout databases

### Implementation Tasks

Use `ui-styling` for:

- shadcn/ui component setup
- Tailwind implementation
- dark mode and theme customization
- responsive component code

### Interface Direction

Use `ui-ux-pro-max` for:

- choosing style direction
- palette and typography selection
- UX and accessibility guidance

## Multi-Step Workflows

### New Project Setup

1. Use `brand` to define identity.
2. Use `design-system` to define tokens and specs.
3. Use `ui-styling` to implement the UI.

### Brand Refresh

1. Use `brand` to audit the current identity.
2. Use `design-system` to formalize tokens.
3. Use `ui-styling` to update the code.

### Visual Deliverables

1. Use the bundled logo/CIP/icon/slide workflows.
2. Use `brand` when the output needs brand alignment.
3. Use `ui-ux-pro-max` when the layout or visual direction still needs selection.

## Local Commands

```bash
python scripts/logo/search.py "minimalist clean" --design-brief -p "BrandName"
python scripts/cip/search.py "tech startup" --cip-brief -b "BrandName"
python scripts/icon/generate.py --prompt "settings gear" --style outlined
```

## Rule Of Thumb

If the request changes how something looks, feels, moves, or is communicated visually, route it through this stack before implementation.
