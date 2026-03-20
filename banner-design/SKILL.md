---
name: banner-design
description: Banner-specific art direction and layout guidance for social headers, ads, website heroes, and print banners. Use when Codex needs banner dimensions, safe-zone rules, banner-specific composition choices, or a workflow for turning a campaign brief into banner concepts after brand and general UI direction are known.
---

# Banner Design

## Overview

Use this skill for banner-shaped creative surfaces:

- social headers and covers
- ad banners
- website heroes
- print banners
- campaign key visuals that need strict dimensions

This skill is intentionally lightweight. It provides the banner-specific workflow and the sizing/style reference. Use companion skills for the rest:

- `$ui-ux-pro-max` for style direction and visual reasoning
- `$brand` for brand constraints and logo/palette rules
- `$ui-styling` when the banner needs to be implemented in HTML/CSS

## Typical Triggers

Use this skill when requests sound like:

- "Design a LinkedIn, X, or YouTube banner"
- "Help me choose the size and composition for this hero banner"
- "How should this ad banner handle layout and safe zones"
- "Give me a few banner art-direction options for this campaign"
- "Turn this copy into a website hero or social cover concept"

## Handoff Rules

- hand off to `$ui-ux-pro-max` when the banner style direction is still undecided
- hand off to `$brand` when logo, palette, or voice constraints are missing
- hand off to `$ui-styling` when the banner concept is approved and needs implementation in HTML/CSS
- hand off to `$design` only when the banner is part of a broader multi-deliverable design request

## Workflow

### 1. Gather the Brief

Identify:

- purpose
- target platform or exact dimensions
- headline, subtext, CTA, and logo needs
- brand constraints
- requested style, or whether style options need to be proposed
- how many variants the user wants

### 2. Choose the Art Direction

Use `$ui-ux-pro-max` if the visual direction is not obvious.

Then use [references/banner-sizes-and-styles.md](references/banner-sizes-and-styles.md) to choose:

- the correct platform size
- the safe zone
- 2-3 art-direction candidates

### 3. Compose the Banner

When building the actual asset:

- keep critical content in the safe zone
- use one clear CTA
- keep typography short and high-contrast
- prefer a simple visual hierarchy over overfilling the canvas

### 4. Export and Iterate

Deliver variants with:

- style name
- target platform and dimensions
- rationale for the direction
- notes about brand fit and readability

## Quick Start

Start with:

- [references/banner-sizes-and-styles.md](references/banner-sizes-and-styles.md)

Use it to map the request to the right size, aspect ratio, style family, and design constraints before generating or implementing the banner.

## Resources

### `references/`

The banner reference file is the reusable knowledge base for platform sizes, art-direction styles, and layout rules.
