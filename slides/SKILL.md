---
name: slides
description: Plan and refine slide decks, slide structure, and presentation content after the design direction is known. Use when Codex needs deck-specific narrative, structure, copy flow, and HTML presentation guidance rather than general UI direction, token design, or frontend implementation.
---

# Slides

## Overview

Use this skill for slide decks, pitch presentations, and other HTML-based presentation work once the deck direction is clear. Treat it as the presentation orchestration layer on top of `$design-system`.

Start with `$design-system` when the deck needs strategy, layout, copy, chart, or token decisions. Use this skill to turn those decisions into a concrete deck structure and slide-by-slide content.

## Typical Triggers

Use this skill when requests sound like:

- "Plan a 10-slide pitch deck for this topic"
- "Turn this topic into slide-by-slide speaking content"
- "How should I structure the narrative and pacing of these slides"
- "Improve the titles, rhythm, and content order of this presentation"
- "Expand this presentation topic into a slide-by-slide outline"

## Handoff Rules

- hand off to `$design-system` when the missing piece is slide strategy, layout search, chart choice, or token structure
- hand off to `$brand` when the deck must align with brand voice or identity rules that are not yet defined
- hand off to `$ui-styling` only if the deck needs frontend-level implementation help beyond the narrative/content layer

## Workflow

### 1. Clarify the Deck Goal

Identify:

- audience
- purpose
- slide count
- tone
- whether the deck is persuasive, educational, or status-oriented

### 2. Pick a Deck Strategy

Use the slide strategy reference to choose the right structure, such as:

- investor pitch
- sales pitch
- product demo
- conference talk
- workshop
- case study

If the narrative depends on contrast, use the Duarte sparkline pattern from the strategy reference.

### 3. Match Layout and Copy

Use the layout reference for the slide shape and the copywriting reference for headline structure and section flow.

### 4. Generate or Refine the Deck

When you need concrete slide content or implementation guidance, use the references for:

- HTML template structure
- layout patterns
- copywriting formulas
- slide strategy selection

Then turn the result into the actual deck files in the project.

## Quick Start

Use these references to steer the work:

- [references/create.md](references/create.md)
- [references/layout-patterns.md](references/layout-patterns.md)
- [references/html-template.md](references/html-template.md)
- [references/copywriting-formulas.md](references/copywriting-formulas.md)
- [references/slide-strategies.md](references/slide-strategies.md)

## Relationship To Other Skills

- use `$design-system` for token, chart, strategy, and layout search
- use `$ui-styling` if the deck needs frontend implementation help
- use `$brand` if the deck must follow brand voice or identity rules

## Resources

### `references/`

These files contain the reusable slide knowledge base and deck templates.
