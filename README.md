# Awesome Codex Skills

A public repository of reusable Codex skills, focused on design systems, UI direction, frontend styling, brand work, and presentation workflows.

This is not a generic prompt collection. Each skill in this repo is meant to be a practical working unit: a `SKILL.md` with clear triggers, handoff rules, and optional helper assets such as scripts, references, templates, agents, or data files.

## What This Repository Is

This repository is the shared home for a growing set of Codex-oriented skills that can be:

- used directly in day-to-day work
- versioned and improved in public
- combined across related workflows
- reviewed with the same discipline as code and documentation

The current collection leans heavily toward design and frontend execution:

- brand and visual identity work
- UI/UX direction and decision support
- design-system structure and token thinking
- UI implementation patterns
- slide and banner workflows

## Skill Map

| Skill | Focus | When to use |
| --- | --- | --- |
| [banner-design](./banner-design/) | Banner art direction and safe-zone guidance | Social headers, ads, website heroes, and print banners |
| [brand](./brand/) | Brand voice, visual identity, and asset governance | Brand systems, palette rules, messaging, and brand audits |
| [design](./design/) | Top-level design routing | Multi-domain design requests that need the right skill path |
| [design-system](./design-system/) | Design tokens and component specifications | Turning an approved visual direction into reusable systems |
| [slides](./slides/) | Slide narrative and presentation structure | Deck planning, slide flow, and presentation storytelling |
| [ui-styling](./ui-styling/) | UI implementation patterns | shadcn/ui, Tailwind CSS, responsive layout, and theming |
| [ui-ux-pro-max](./ui-ux-pro-max/) | UI/UX decision support | Choosing style, typography, color, layout, and UX direction before implementation |

## How to Use This Repo

1. Pick the skill folder that matches the task.
2. Start with the local `SKILL.md`.
3. Use the bundled scripts or references only when that skill tells you to.
4. Follow handoff guidance when the skill points to a companion skill.

If you are unsure where to start:

- use [design](./design/) as the top-level router for multi-domain design requests
- use [ui-ux-pro-max](./ui-ux-pro-max/) when the problem is about choosing direction before implementation
- use [ui-styling](./ui-styling/) when the direction is already known and the next step is implementation

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

Each skill folder keeps its source of truth in `SKILL.md`. Supporting materials may live next to it in folders such as `references/`, `scripts/`, `assets/`, `agents/`, or `data/`.

## Repository Rules

This repo is intentionally simple at the top level:

- one skill per top-level folder
- one `SKILL.md` as the entry point for that skill
- helper files live inside the same skill folder
- repository-wide governance and validation live in `.github/`, `docs/`, and `scripts/`

That keeps the collection readable as it grows and makes it easier to review each skill as a self-contained workflow unit.

## Contributing

Contributions are welcome for:

- new skills with a real workflow behind them
- improvements to existing skills
- validation and tooling for repository quality
- documentation that makes the repo easier to adopt and maintain

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution requirements and [docs/branching.md](./docs/branching.md) for the branch and merge policy.

## Validation

GitHub Actions validates repository structure on pull requests and on pushes to `main`.

The current checks verify:

- required repository files exist
- each top-level skill folder contains a valid `SKILL.md`
- skill metadata matches its folder name
- the root `README.md` links to every published skill folder

You can run the same validation locally:

```bash
python scripts/validate_repo.py
```

## Project Direction

- Add more Codex skills across engineering, research, automation, and document workflows
- Improve repository validation to catch broken relative references inside skills
- Add automated skill indexing or searchable metadata exports

## Acknowledgement

The idea of organizing reusable agent skills in a public repository was informed by projects such as [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills), but this repository is structured around Codex workflows and the specific skill set maintained here.

## License

This repository is licensed under the Apache License 2.0. See [LICENSE](./LICENSE).
