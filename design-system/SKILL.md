---
name: design-system
description: Formalize an approved visual direction into design tokens, component specifications, and slide-system rules. Use when Codex needs primitive-semantic-component token architecture, CSS variable generation, token validation, or systematic slide search after brand and UI direction are already chosen.
---

# Design System

## Overview

Use this skill when the problem is about systematic design, not broad visual exploration. It sits between brand strategy and UI implementation:

- use `$brand` when brand rules are the input
- use this skill to turn those rules into tokens, component specs, and slide logic
- use `$ui-styling` when the result needs to be implemented in frontend code

## Typical Triggers

Use this skill when requests sound like:

- "Turn this visual direction into design tokens"
- "Help me define the primitive, semantic, and component token system"
- "Find hardcoded colors and convert them to tokens"
- "Generate CSS variables, token JSON, or Tailwind token mapping"
- "Create reusable design rules for this deck or slide system"

## Handoff Rules

- hand off back to `$ui-ux-pro-max` if the visual direction is still unsettled
- hand off to `$ui-styling` when tokens and component rules are ready to be implemented
- hand off to `$slides` when the task shifts from slide-system rules to deck authoring and slide-by-slide content
- hand off to `$brand` when token decisions need to be reconciled against brand voice, color, or typography rules

## Quick Start

Run commands from the skill root or from the project root that owns the token files.
Most scripts assume a conventional project layout under the current working directory, but validator-style tools now support explicit path overrides when the project structure differs.

```bash
node scripts/generate-tokens.cjs --config tokens.json -o tokens.css
node scripts/validate-tokens.cjs --dir src/
python scripts/search-slides.py "investor pitch"
python scripts/search-slides.py "pricing comparison" -d layout
python scripts/search-slides.py "revenue growth" -d chart
python scripts/search-slides.py "problem slide" --context --position 2 --total 9
```

## Workflow

### 1. Define the Token Architecture

Use the three-layer model from `references/token-architecture.md`:

```text
primitive -> semantic -> component
```

Prefer:

- primitive tokens for raw values
- semantic tokens for meaning
- component tokens for local overrides

### 2. Generate and Validate Tokens

Use:

```bash
node scripts/generate-tokens.cjs --config tokens.json -o tokens.css
node scripts/validate-tokens.cjs --dir src/
```

Do this when:

- moving from a brand palette to implementation-ready tokens
- removing hardcoded values from a codebase
- preparing design-to-code handoff artifacts

### 3. Use Slide Search for Structured Presentation Work

The slide subsystem provides local search over:

- deck strategies
- slide layouts
- copy formulas
- chart patterns

Use:

```bash
python scripts/search-slides.py "investor pitch"
python scripts/search-slides.py "headline hook" -d copy
python scripts/search-slides.py "funnel conversion" -d chart
python scripts/search-slides.py "cta" --context --position 9 --total 9
```

Use this when slides need to be systematically structured instead of manually improvised.

### 4. Pull in Companion Skills When Needed

- use `$brand` if token choices must trace back to a brand guideline
- use `$ui-styling` if tokens need to land in Tailwind, shadcn, or frontend code
- use `$ui-ux-pro-max` if the high-level interface direction still needs to be chosen

## References

Load only the relevant files:

- `references/token-architecture.md`
- `references/primitive-tokens.md`
- `references/semantic-tokens.md`
- `references/component-tokens.md`
- `references/component-specs.md`
- `references/states-and-variants.md`
- `references/tailwind-integration.md`

## Resources

### `scripts/`

- `generate-tokens.cjs`: emit CSS variables or Tailwind color config from token JSON
- `validate-tokens.cjs`: check for hardcoded values in code
- `search-slides.py` and `slide_search_core.py`: local slide search engine
- `generate-slide.py`: slide generation helper
- `html-token-validator.py` and `slide-token-validator.py`: token compliance checks
- `fetch-background.py`: fetch background-image references

### `data/`

The slide CSV files are a local knowledge base for strategy, layout, copy, chart, typography, color, and background decisions.

### `assets/templates/`

Use [design-tokens-starter.json](assets/templates/design-tokens-starter.json) as a starting point for new token systems.
