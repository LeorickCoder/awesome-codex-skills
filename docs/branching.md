# Branching and Merge Strategy

This repository uses a lightweight trunk-based workflow with a protected `main` branch.

## Branch Roles

- `main` is the default branch and should always stay releasable.
- All feature, fix, and documentation work should happen in short-lived branches created from `main`.

## Branch Naming

Use descriptive branch names with a type prefix:

- `feat/<scope>`
- `fix/<scope>`
- `docs/<scope>`
- `chore/<scope>`
- `refactor/<scope>`

Examples:

- `feat/add-automation-skills`
- `fix/readme-links`
- `docs/contributing-refresh`

## Pull Request Rules

- Do not push directly to `main`.
- Open a pull request for every change.
- Keep each PR focused on one topic.
- Rebase or update your branch from `main` before merging if it has drifted.
- CI must pass before merge.
- Prefer squash merging to keep history readable.

## Review Policy

- Repository changes should normally be reviewed before merge.
- Small documentation-only fixes may be self-merged by a maintainer after CI passes.
- Larger structural changes should wait for review, especially if they change skill layout, validation rules, or repository conventions.

## Recommended GitHub Repository Settings

After creating the remote repository, apply these settings to `main`:

1. Set `main` as the default branch.
2. Enable branch protection for `main`.
3. Require a pull request before merging.
4. Require the `Validate Repository` status check to pass.
5. Require linear history if your team prefers a strict squash-only flow.
6. Allow squash merge and disable merge commits if you want a cleaner public history.

## Commit Guidance

- Use small, descriptive commits.
- Prefer imperative commit messages such as `Add repository validation workflow`.
- Avoid mixing unrelated changes in a single commit.
