# Contributing to Awesome Codex Skills

Thanks for helping improve this repository.

The goal of this project is to keep Codex skills practical, reusable, and easy to maintain. Contributions should make the repo more useful for real workflows, not just add surface area.

## What We Accept

- New Codex skills with a clear real-world use case
- Improvements to an existing skill's structure, docs, or helper scripts
- Repository tooling that improves validation, onboarding, or contribution quality
- Documentation that makes the collection easier to understand or maintain

## Contribution Principles

- Prefer real workflows over hypothetical ones.
- Keep instructions actionable and easy to follow.
- Reuse existing skills when a handoff is clearer than duplication.
- Keep changes focused. Small, reviewable PRs move faster than broad refactors.
- Avoid breaking existing skill references, scripts, or relative paths without updating docs.

## Skill Requirements

Every top-level skill folder should:

1. Use a lowercase, hyphenated directory name.
2. Include a `SKILL.md` at the folder root.
3. Start `SKILL.md` with frontmatter containing `name` and `description`.
4. Keep the frontmatter `name` identical to the directory name.
5. Include a first-level Markdown heading in `SKILL.md`.
6. Store supporting materials in clearly named subfolders such as `references/`, `scripts/`, `assets/`, `agents/`, or `data/`.

## Recommended Skill Layout

```text
skill-name/
|-- SKILL.md
|-- references/
|-- scripts/
|-- assets/
|-- agents/
`-- data/
```

Only include the folders you actually need.

## Adding a New Skill

1. Create a new top-level folder using lowercase kebab-case.
2. Add `SKILL.md` with:
   - frontmatter `name`
   - frontmatter `description`
   - a clear overview
   - trigger guidance
   - workflow or handoff rules
   - examples or operational details when useful
3. Add the skill to the table in `README.md`.
4. Run the validation script:

```bash
python scripts/validate_repo.py
```

## Updating an Existing Skill

When modifying a skill:

- keep the skill's purpose stable unless the PR clearly explains a repositioning
- preserve relative links or update all affected references
- document new scripts or assets inside the skill's `SKILL.md` when they become part of the workflow

## Branching and PR Flow

Use the branch model from [docs/branching.md](./docs/branching.md).

In short:

- branch from `main`
- use a descriptive branch name such as `feat/new-skill`, `fix/validator`, or `docs/readme-refresh`
- open a pull request instead of pushing directly to `main`
- keep `main` releasable at all times

## Pull Request Checklist

Before requesting review, confirm:

- the change is scoped to one topic
- `README.md` is updated when a skill is added, renamed, or removed
- `SKILL.md` frontmatter is valid
- CI passes
- the PR description explains what changed and how it was checked

## Review Expectations

Review focuses on:

- usefulness of the workflow
- clarity of the skill instructions
- repository consistency
- maintainability of scripts and references
- whether the change creates duplication that should be a handoff instead

## Need Help?

Open an issue if you are unsure where a skill belongs, whether a workflow should be a new skill, or how to structure supporting materials.
