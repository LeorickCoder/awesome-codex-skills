# Awesome Codex Skills

A public repository of reusable Codex skills, focused on design systems, UI direction, frontend styling, brand work, and presentation workflows.

This is a Codex-first skill repository. Each skill in this repo is designed as a practical working unit for Codex: a `SKILL.md` with clear triggers, operating guidance, handoff rules, and optional helper assets such as scripts, references, templates, agents, or data files.

## What This Repository Is

This repository is the shared home for a growing set of Codex-oriented skills that can be:

- used directly in Codex sessions
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

| Skill | Focus | When to use in Codex |
| --- | --- | --- |
| [banner-design](./banner-design/) | Banner art direction and safe-zone guidance | When Codex needs to propose or refine social headers, ad banners, website heroes, or print banner layouts |
| [brand](./brand/) | Brand voice, visual identity, and asset governance | When Codex needs to define, audit, or operationalize brand rules before design or implementation work |
| [design](./design/) | Top-level design routing | When Codex needs to route a broad design request across brand, design-system, UI styling, slides, or visual asset workflows |
| [design-system](./design-system/) | Design tokens and component specifications | When Codex needs to turn an approved visual direction into tokens, component rules, or systemized slide logic |
| [slides](./slides/) | Slide narrative and presentation structure | When Codex needs to plan deck structure, slide-by-slide flow, presentation copy, or HTML slide output |
| [ui-styling](./ui-styling/) | UI implementation patterns | When Codex needs to implement approved UI direction with shadcn/ui, Tailwind CSS, theming, and responsive layout |
| [ui-ux-pro-max](./ui-ux-pro-max/) | UI/UX decision support | When Codex needs to choose or justify layout, typography, palette, charts, or UX direction before implementation |

## How to Use This Repo

1. Pick the skill folder that matches the task you want Codex to handle.
2. Start with the local `SKILL.md`.
3. Use the bundled scripts or references only when that skill tells Codex to use them.
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

Each skill folder keeps its source of truth in `SKILL.md`. Supporting materials may live next to it in folders such as `references/`, `scripts/`, `assets/`, `agents/`, or `data/`. The goal is to make each skill directly usable by Codex without scattering workflow context across the repo.

## Repository Rules

This repo is intentionally simple at the top level:

- one skill per top-level folder
- one `SKILL.md` as the entry point for that skill
- helper files live inside the same skill folder
- repository-wide governance and validation live in `.github/`, `docs/`, and `scripts/`

That keeps the collection readable as it grows and makes it easier to review each skill as a self-contained workflow unit.

## Contributing

Contributions are welcome for:

- new Codex skills with a real workflow behind them
- improvements to existing Codex skills
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

## License

This repository is licensed under the Apache License 2.0. See [LICENSE](./LICENSE).
