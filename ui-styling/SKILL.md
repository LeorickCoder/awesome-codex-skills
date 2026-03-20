---
name: ui-styling
description: Implement approved interface direction in code with shadcn/ui, Tailwind CSS, responsive layout patterns, and theme customization. Use when Codex needs to add or configure shadcn/ui, generate Tailwind theme config, refine responsive styling, or build accessible UI components after style and token direction are already known.
---

# UI Styling

## Overview

Use this skill after the design direction is known and the task has moved into implementation. If the interface direction is still unclear, use `$ui-ux-pro-max` first to choose style, palette, and typography, then use this skill to build it.

This skill is strongest for:

- shadcn/ui component installation and usage
- Tailwind-based implementation
- responsive layout refinement
- dark-mode and theme customization
- accessible component patterns

## Typical Triggers

Use this skill when requests sound like:

- "Implement this interface with shadcn and Tailwind"
- "Add a dialog, form, table, or card component"
- "Make this layout responsive"
- "Add dark mode or theme configuration to this project"
- "Review the accessibility and component implementation of this frontend"

## Handoff Rules

- hand off to `$ui-ux-pro-max` if the page still needs style, palette, typography, or layout direction
- hand off to `$design-system` if the missing piece is token architecture or component-state specification
- hand off to `$brand` if implementation is blocked on brand rules rather than code details
- hand off to `$slides` only when the output is actually a deck rather than a product UI

## Quick Start

From the target project root:

```bash
python scripts/shadcn_add.py button card dialog
python scripts/shadcn_add.py --list
python scripts/shadcn_add.py button card --dry-run
python scripts/tailwind_config_gen.py --colors brand:slate --fonts display:Inter
```

Use these scripts when the project already has Node and the expected frontend setup. `shadcn_add.py` expects a valid `components.json`.

## Workflow

### 1. Confirm the UI Direction

Before implementing:

- if style, palette, or hierarchy is undecided, use `$ui-ux-pro-max`
- if token architecture or brand mapping is missing, use `$design-system` or `$brand`

### 2. Add or Inspect shadcn/ui Components

Use:

```bash
python scripts/shadcn_add.py --list
python scripts/shadcn_add.py button card dialog
```

This wraps the shadcn CLI and helps Codex reason about installed versus missing components.

### 3. Generate or Adjust Tailwind Theme Configuration

Use:

```bash
python scripts/tailwind_config_gen.py --colors brand:blue --fonts display:Inter
```

Use this when you need a starting point for a consistent Tailwind theme rather than hand-writing the config from scratch.

### 4. Load References by Need

Use only the references relevant to the task:

- `references/shadcn-components.md` for component patterns
- `references/shadcn-theming.md` for theming and dark mode
- `references/shadcn-accessibility.md` for a11y guidance
- `references/tailwind-utilities.md` for utility lookup
- `references/tailwind-responsive.md` for responsive behavior
- `references/tailwind-customization.md` for theme extension
- `references/canvas-design-system.md` for more visual, canvas-like compositions

## Resources

### `scripts/`

- `shadcn_add.py`: wrap shadcn component installation
- `tailwind_config_gen.py`: generate Tailwind config scaffolding

### `assets/canvas-fonts/`

Local font assets for canvas-oriented or poster-like design workflows when local rendering is preferred.
