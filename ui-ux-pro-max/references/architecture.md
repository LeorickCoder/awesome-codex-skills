# Architecture

## Purpose

This Codex skill is a local, self-contained adaptation of the Claude marketplace project at:

`C:\Users\ktang\.claude\plugins\marketplaces\ui-ux-pro-max-skill`

The goal is to preserve the useful part of that project for Codex:

- searchable UI/UX knowledge in CSV form
- local Python scripts for retrieval and recommendation
- a repeatable workflow that starts with design-system generation and then narrows into domain-specific searches

## What Was Migrated

From the original repository's `src/ui-ux-pro-max/` source of truth:

- `scripts/search.py`
- `scripts/core.py`
- `scripts/design_system.py`
- `data/*.csv`
- `data/stacks/*`

The marketplace metadata and Claude-specific installation flow were not migrated because Codex skills use a different discovery and instruction model.

## How the Skill Works

### 1. Local Search Layer

`scripts/core.py` loads CSV data from the sibling `data/` directory and performs BM25-style ranking over configured search columns.

Key behavior:

- automatic domain detection when `--domain` is omitted
- per-domain column selection so different datasets search different fields
- stack-specific search support through the `data/stacks/` directory

### 2. Design-System Layer

`scripts/design_system.py` creates a higher-level recommendation by combining:

- product search
- style search
- color search
- landing-pattern search
- typography search
- reasoning rules from `data/ui-reasoning.csv`

The result is a compact recommendation containing:

- recommended pattern
- visual style
- palette
- typography
- key effects
- anti-patterns

### 3. Skill Layer

`SKILL.md` tells Codex when to invoke the skill and how to use the scripts effectively:

- start with `--design-system`
- drill down with `--domain`
- synthesize recommendations into implementation decisions instead of echoing raw search output

## Important Domains

| Domain | Backing file | Typical use |
|--------|--------------|-------------|
| `product` | `products.csv` | Product archetype and primary style fit |
| `style` | `styles.csv` | Visual direction, effects, complexity |
| `color` | `colors.csv` | Product-specific palette guidance |
| `typography` | `typography.csv` | Font pairings and imports |
| `landing` | `landing.csv` | Page structure and CTA placement |
| `chart` | `charts.csv` | Visualization choice and warnings |
| `ux` | `ux-guidelines.csv` | Usability and accessibility review |
| `icons` | `icons.csv` | Icon libraries and usage |
| `react` | `react-performance.csv` | React-specific performance guidance |
| `web` | `app-interface.csv` | General interface and a11y guidance |
| `google-fonts` | `google-fonts.csv` | Raw font search |

## Codex-Specific Differences

Compared with the Claude-oriented source:

- paths are local to this skill folder rather than `~/.claude/skills/...`
- the instructions are optimized for Codex invocation instead of Claude workflow wording
- Claude-only interaction patterns such as `AskUserQuestion` are intentionally omitted
- the skill is self-contained so it can keep working even if the original marketplace repo changes later

## Extension Points

If you want this skill to grow toward the full marketplace feature set, add:

1. more domain-specific scripts, not more prose, when behavior needs determinism
2. extra reference files only when a workflow is too large for `SKILL.md`
3. additional companion skills only when they have distinct trigger patterns and workflows
