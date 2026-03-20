---
name: brand
description: Brand voice, visual identity, messaging, and brand-asset governance. Use when Codex needs to define or audit brand guidelines, extract brand context from a guideline document, validate brand assets, compare palettes, or sync brand rules into design-token artifacts before interface or presentation work.
---

# Brand

## Overview

Use this skill when brand constraints are the source of truth for downstream UI or content work. The main loop is:

1. Read or create the brand-guidelines document.
2. Extract brand context for prompt or implementation use.
3. Validate assets and palette usage.
4. Sync brand decisions into token files if the project uses a design-token pipeline.

If the user is actually asking for UI implementation, pair this skill with `$ui-ux-pro-max` or `$design-system` after the brand direction is clear.

## Typical Triggers

Use this skill when requests sound like:

- "Define the brand voice and visual rules for this product"
- "Help me write or clean up the brand guidelines"
- "Check whether this logo, palette, and typography follow the brand"
- "Sync the brand rules into design tokens"
- "Extract the practical design constraints from this brand document"

## Handoff Rules

- hand off to `$ui-ux-pro-max` when the brand exists but the interface direction still needs to be chosen
- hand off to `$design-system` when brand rules need to become tokens or component rules
- hand off to `$ui-styling` only after direction and token decisions are sufficiently settled
- hand off to `$slides` when the immediate deliverable is a deck or presentation narrative
- hand off to `$banner-design` when the immediate deliverable is a banner, header, or hero graphic

## Quick Start

Run commands from the skill root or the target project root, depending on where the brand files live.

```bash
node scripts/inject-brand-context.cjs
node scripts/inject-brand-context.cjs --json
node scripts/validate-asset.cjs path/to/asset.png
node scripts/extract-colors.cjs --palette
node scripts/extract-colors.cjs path/to/image.png
node scripts/sync-brand-to-tokens.cjs
```

Default brand-guidelines path for the scripts is `docs/brand-guidelines.md`.
When a project uses different file locations, prefer passing explicit paths to the scripts instead of rearranging the project.

## Workflow

### 1. Establish the Source of Truth

Use or create `docs/brand-guidelines.md` as the canonical brand document.

If no guideline exists yet:

- start from [assets/templates/brand-guidelines-starter.md](assets/templates/brand-guidelines-starter.md)
- fill in voice, color, typography, logo usage, and approval rules

### 2. Extract Brand Context

Use:

```bash
node scripts/inject-brand-context.cjs
```

Use `--json` when another script or tool needs structured output.

This is the fastest way to turn a brand guideline into actionable context for:

- interface styling
- slide theming
- copy tone checks
- visual consistency reviews

### 3. Validate Assets and Color Usage

Use:

```bash
node scripts/validate-asset.cjs <asset-path>
node scripts/extract-colors.cjs <asset-path>
```

Use these when:

- checking whether a logo or image matches naming and format rules
- comparing a design mock against the approved palette
- auditing whether brand colors drifted in new assets

### 4. Sync Brand to Tokens

If the project uses tokens, run:

```bash
node scripts/sync-brand-to-tokens.cjs
```

This syncs the brand source into token artifacts used by downstream design-system or slide work.

## References

Load only the references needed for the task:

- `references/update.md` for a full brand-update workflow
- `references/voice-framework.md` for verbal tone
- `references/visual-identity.md` for identity standards
- `references/messaging-framework.md` for positioning and messaging
- `references/color-palette-management.md` for palette operations
- `references/typography-specifications.md` for type rules
- `references/approval-checklist.md` for review gates

## Resources

### `scripts/`

- `inject-brand-context.cjs`: extract brand context from guideline markdown
- `validate-asset.cjs`: check asset naming and basic compliance
- `extract-colors.cjs`: extract or compare palette colors
- `sync-brand-to-tokens.cjs`: sync brand guidance into token outputs

### `assets/templates/`

Use [brand-guidelines-starter.md](assets/templates/brand-guidelines-starter.md) when a project needs an initial guideline file.
