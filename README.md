# Awesome Codex Skills

A curated collection of practical Codex skills for design, UI, brand, and presentation workflows.

This repository is inspired by [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills), but tailored for Codex-centric workflows, local skill repositories, and contribution-friendly GitHub collaboration.

## Why This Repo Exists

- Collect reusable Codex skills in one public, versioned place.
- Make skill discovery easier for design-heavy and frontend-heavy workflows.
- Standardize contribution quality with a clear structure, templates, and CI checks.
- Keep skills composable, so one skill can route or hand off work to another cleanly.

## Current Skills

| Skill | Focus | When to use |
| --- | --- | --- |
| [banner-design](./banner-design/) | Banner art direction and safe-zone guidance | Social headers, ads, website heroes, and print banners |
| [brand](./brand/) | Brand voice, visual identity, and asset governance | Brand systems, palette rules, messaging, and brand audits |
| [design](./design/) | Top-level design routing | Multi-domain design requests that need the right skill path |
| [design-system](./design-system/) | Design tokens and component specifications | Turning an approved visual direction into reusable systems |
| [slides](./slides/) | Slide narrative and presentation structure | Deck planning, slide flow, and presentation storytelling |
| [ui-styling](./ui-styling/) | UI implementation patterns | shadcn/ui, Tailwind CSS, responsive layout, and theming |
| [ui-ux-pro-max](./ui-ux-pro-max/) | UI/UX decision support | Choosing style, typography, color, layout, and UX direction before implementation |

## Quick Start

1. Open the folder for the skill you need.
2. Read the local `SKILL.md` first.
3. Follow any bundled scripts, references, assets, or workflow notes from that skill.
4. If the skill calls for a handoff, continue with the linked companion skill instead of improvising a parallel workflow.

## Repository Layout

```text
.
|-- .github/
|   |-- ISSUE_TEMPLATE/
|   |-- workflows/
|   `-- pull_request_template.md
|-- docs/
|   `-- branching.md
|-- scripts/
|   `-- validate_repo.py
|-- banner-design/
|-- brand/
|-- design/
|-- design-system/
|-- slides/
|-- ui-styling/
`-- ui-ux-pro-max/
```

Each skill folder should keep its own source of truth inside `SKILL.md`. Optional supporting materials may live alongside it in folders such as `references/`, `scripts/`, `assets/`, `agents/`, or `data/`.

## Contribution Model

We accept improvements to existing skills, new skills, and repository tooling that helps keep the collection healthy.

Before opening a pull request:

1. Create a short-lived branch from `main`.
2. Keep your change scoped and documented.
3. Run the repository validation script locally when possible.
4. Open a PR with a clear summary and validation notes.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution rules and [docs/branching.md](./docs/branching.md) for the branch and merge strategy.

## Quality Gates

GitHub Actions validates repository structure on every pull request and on pushes to `main`. The current checks verify:

- required repository files exist
- each top-level skill folder contains a valid `SKILL.md`
- skill metadata matches its folder name
- the root `README.md` links to every published skill folder

## Roadmap

- Add more Codex skills across engineering, research, automation, and document workflows
- Improve repository validation to catch broken relative references inside skills
- Add automated skill indexing or searchable metadata exports

## License

This repository is licensed under the Apache License 2.0. See [LICENSE](./LICENSE).
