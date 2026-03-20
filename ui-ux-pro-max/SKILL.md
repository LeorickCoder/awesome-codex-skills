---
name: ui-ux-pro-max
description: Searchable local UI/UX decision engine for product and interface direction. Use when Codex needs to choose or justify styles, palettes, typography, layout direction, chart choices, or UX/accessibility guidance before formal token design, component implementation, or deck/banner production.
---

# UI/UX Pro Max

## Overview

Use this skill as a local design-reasoning layer before implementation. Reach for it when the question is "what direction should this interface take?" rather than "how do I encode that direction into tokens or code?" The core workflow is:

1. Turn the request into a compact query containing product type, audience, tone, and platform.
2. Run `scripts/search.py` with `--design-system` first to get a top-level recommendation.
3. Run focused searches for the dimensions that still need justification.
4. Translate the results into concrete code, layout choices, review findings, or implementation guidance.

Prefer the search scripts over manually reading CSV files. Open the CSVs directly only when extending the database or debugging search quality.

## Typical Triggers

Use this skill when requests sound like:

- "What visual direction should this product page take"
- "Recommend a style for this SaaS, ecommerce site, or admin dashboard"
- "How should I choose the palette, typography, and hierarchy for this UI"
- "Help me decide the charts and layout for this dashboard"
- "Review why this UI does not feel professional or clear"

## Handoff Rules

- hand off to `$design-system` after the direction is chosen and the task becomes token architecture, component specs, or systematic slide rules
- hand off to `$ui-styling` after the direction is chosen and the task becomes component or page implementation
- hand off to `$slides` when the main deliverable is a deck narrative or slide-by-slide structure
- hand off to `$banner-design` when the main deliverable is a banner-sized surface rather than a general interface
- hand off to `$brand` first if brand constraints are missing or need to be defined before choosing the UI direction

## Quick Start

Run commands from the skill root:

```bash
python scripts/search.py "fintech dashboard modern trustworthy" --design-system -p "Fintech Dashboard"
python scripts/search.py "fintech dashboard modern trustworthy" --domain style --max-results 3
python scripts/search.py "fintech dashboard modern trustworthy" --domain color --max-results 3
python scripts/search.py "touch target focus state loading" --domain ux --max-results 5
python scripts/search.py "rerender memo list virtualization" --domain react --max-results 5
```

Use `--json` when the result needs to be post-processed.

## Workflow

### 1. Build the Query

Compress the request into terms that actually steer the recommendation:

- Product or page type: `saas dashboard`, `beauty spa landing page`, `admin panel`, `portfolio`
- Tone or visual goal: `premium`, `minimal`, `playful`, `calm`, `high contrast`
- Constraints: `accessibility`, `mobile-first`, `dark mode`, `data dense`
- Stack or platform concerns when relevant: `react`, `web`, `ios-like`, `tailwind`

Good query pattern:

```text
<product/page> <industry> <tone> <constraints>
```

### 2. Generate the Design System First

Start with:

```bash
python scripts/search.py "<query>" --design-system -p "<Project Name>"
```

This aggregates product, style, color, landing, and typography results, then applies reasoning rules from `data/ui-reasoning.csv`.

Use this first when:

- designing a new page or product surface
- re-theming an existing interface
- choosing between multiple stylistic directions
- needing one coherent recommendation rather than scattered tips

### 3. Deep-Dive by Domain

After the design system pass, use domain searches to answer narrower questions.

| Need | Command shape |
|------|---------------|
| Product archetype | `--domain product` |
| Visual style direction | `--domain style` |
| Palette recommendation | `--domain color` |
| Font pairing | `--domain typography` |
| Landing page structure / CTA | `--domain landing` |
| Chart choice | `--domain chart` |
| UX / accessibility review | `--domain ux` |
| Icon library and icon choice | `--domain icons` |
| React performance / rendering guidance | `--domain react` |
| General web/app interface guidance | `--domain web` |
| Raw Google Fonts lookup | `--domain google-fonts` |

### 4. Synthesize, Do Not Dump

The scripts provide inputs to a decision, not the final answer. After searching:

- explain which option you are choosing and why
- call out tradeoffs and anti-patterns
- translate recommendations into implementation detail
- keep only the most relevant results in the final user-facing answer

## Common Patterns

### New Page or Product Surface

1. Run `--design-system`.
2. Deep-dive with `style`, `color`, and `typography`.
3. If the page is conversion-oriented, also query `landing`.
4. Implement with the chosen system, not a mix of top results.

### Review Existing UI

1. Inspect the actual code or screenshot first.
2. Query `ux` for interaction, accessibility, form, loading, and motion guidance.
3. Query `react` or `web` if the issue is stack-specific.
4. Report concrete findings with code-level recommendations.

### Dashboard or Analytics Work

1. Run `--design-system` with the product context.
2. Query `chart` for the data shape.
3. Query `color` and `typography` if readability is weak.
4. Prefer clarity and accessibility over decorative charts.

## Resources

### `scripts/`

- `search.py`: CLI entrypoint for domain search and design-system generation
- `core.py`: BM25-based CSV search engine and domain detection
- `design_system.py`: cross-domain aggregation and reasoning pipeline

### `references/`

Read [references/architecture.md](references/architecture.md) when you need the data layout, domain map, or migration notes from the Claude plugin source.

### `data/`

The CSV files are the local knowledge base. Treat them as source data for the search scripts, not prose documentation.
