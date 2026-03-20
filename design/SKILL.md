---
name: design
description: Top-level design router for requests that span multiple design domains or when the correct specialized skill is unclear. Use when Codex needs to coordinate brand, design-system, ui-styling, ui-ux-pro-max, logo, CIP, icon, slide, or banner workflows rather than executing a single narrow design task directly.
---

# Design

## Overview

Use this skill as the top-level design router. Start here only when the request spans multiple design domains or the right specialized skill is not obvious:

- brand voice or visual identity
- design tokens or component specs
- UI implementation
- logo, icon, banner, social photo, CIP, or slide generation

## Typical Triggers

Use this skill when requests sound like:

- "This request spans brand, UI, and creative deliverables; help me plan it"
- "I am not sure whether to start with brand, design system, or implementation"
- "Help me unify the logo, banner, slides, and interface direction"
- "Give me a full design execution path, not just a single page"
- "Break this design request into the right specialized skills"

Route implementation work to these skills first:

- `$brand` for identity, voice, assets, and palette rules
- `$design-system` for tokens, component specs, and slide decision systems
- `$ui-styling` for shadcn/ui, Tailwind, and frontend implementation
- `$ui-ux-pro-max` for style, palette, typography, UX, and layout decisions

## Router Rules

- prefer `$brand` for identity, voice, palette governance, and brand-source-of-truth work
- prefer `$ui-ux-pro-max` for choosing interface direction before implementation
- prefer `$design-system` for token architecture, specs, and systematic slide search
- prefer `$ui-styling` for concrete frontend implementation
- prefer `$slides` for deck-specific narrative and slide authoring
- prefer `$banner-design` for banner-specific sizing, safe zones, and composition
- stay in `$design` only when multiple of the above must be coordinated together

## Quick Start

Use the bundled scripts from the skill root:

```bash
python scripts/logo/search.py "minimalist clean" --design-brief -p "BrandName"
python scripts/cip/search.py "tech startup" --cip-brief -b "BrandName"
python scripts/icon/generate.py --prompt "settings gear" --style outlined
```

## Routing

### Brand Work

Use `$brand` when the task is about voice, palette, typography, asset governance, or brand-token sync.

### Tokens and System Design

Use `$design-system` when the task is about token architecture, component states, or slide strategy/layout/copy/chart decisions.

### UI Implementation

Use `$ui-styling` when the task needs shadcn/ui, Tailwind, responsive layout, or accessibility-aware component code.

### Interface Direction

Use `$ui-ux-pro-max` when the task still needs the visual direction chosen before implementation.

### Built-In Deliverables

Use the bundled local workflows for:

- logo generation
- CIP mockups
- SVG icon generation

For slides, banners, and broader UI system work, route to companion skills and use the references here as supplemental guidance.

Read the matching reference file before editing or extending a workflow.

## References

- `references/design-routing.md` for the routing map
- `references/logo-design.md` for logo workflow and styles
- `references/cip-design.md` for corporate identity programs
- `references/slides-create.md` for slide workflow
- `references/banner-sizes-and-styles.md` for banner sizes and styles
- `references/social-photos-design.md` for social image workflow
- `references/icon-design.md` for SVG icon generation

## Resources

### `scripts/`

- `logo/search.py`
- `logo/generate.py`
- `logo/core.py`
- `cip/search.py`
- `cip/generate.py`
- `cip/render-html.py`
- `cip/core.py`
- `icon/generate.py`

### `data/`

The CSV files under `data/` are the knowledge base for logo, CIP, and icon workflows.
