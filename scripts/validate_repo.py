from __future__ import annotations

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
REQUIRED_ROOT_FILES = [
    ROOT / "README.md",
    ROOT / "CONTRIBUTING.md",
    ROOT / "LICENSE",
    ROOT / "docs" / "branching.md",
]
SKILL_DOC = "SKILL.md"
FRONTMATTER_PATTERN = re.compile(r"\A---\n(.*?)\n---\n", re.DOTALL)
TITLE_PATTERN = re.compile(r"^#\s+.+$", re.MULTILINE)


def parse_frontmatter(text: str) -> dict[str, str]:
    match = FRONTMATTER_PATTERN.match(text)
    if not match:
        return {}

    metadata: dict[str, str] = {}
    for raw_line in match.group(1).splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or ":" not in line:
            continue
        key, value = line.split(":", 1)
        metadata[key.strip()] = value.strip()
    return metadata


def find_skill_dirs() -> list[Path]:
    skill_dirs: list[Path] = []
    for path in sorted(ROOT.iterdir()):
        if not path.is_dir():
            continue
        if path.name.startswith("."):
            continue
        if path.name in {"docs", "scripts"}:
            continue
        if (path / SKILL_DOC).exists():
            skill_dirs.append(path)
    return skill_dirs


def validate_root_files(errors: list[str]) -> None:
    for path in REQUIRED_ROOT_FILES:
        if not path.exists():
            errors.append(f"Missing required repository file: {path.relative_to(ROOT)}")


def validate_skills(errors: list[str]) -> list[Path]:
    skill_dirs = find_skill_dirs()
    if not skill_dirs:
        errors.append("No top-level skill folders with SKILL.md were found.")
        return []

    for skill_dir in skill_dirs:
        skill_doc = skill_dir / SKILL_DOC
        text = skill_doc.read_text(encoding="utf-8")
        metadata = parse_frontmatter(text)

        if not metadata:
            errors.append(f"{skill_doc.relative_to(ROOT)} is missing valid frontmatter.")
            continue

        if metadata.get("name") != skill_dir.name:
            errors.append(
                f"{skill_doc.relative_to(ROOT)} has name={metadata.get('name')!r}, "
                f"expected {skill_dir.name!r}."
            )

        description = metadata.get("description", "")
        if not description:
            errors.append(f"{skill_doc.relative_to(ROOT)} is missing a description field.")

        if not TITLE_PATTERN.search(text):
            errors.append(f"{skill_doc.relative_to(ROOT)} is missing a top-level Markdown heading.")

    return skill_dirs


def validate_readme_links(skill_dirs: list[Path], errors: list[str]) -> None:
    readme_path = ROOT / "README.md"
    if not readme_path.exists():
        return

    readme_text = readme_path.read_text(encoding="utf-8")
    for skill_dir in skill_dirs:
        expected_link = f"](./{skill_dir.name}/)"
        if expected_link not in readme_text:
            errors.append(
                f"README.md does not include a link for skill folder {skill_dir.name!r}."
            )


def main() -> int:
    errors: list[str] = []
    validate_root_files(errors)
    skill_dirs = validate_skills(errors)
    validate_readme_links(skill_dirs, errors)

    if errors:
        print("Repository validation failed:\n")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Repository validation passed.")
    print(f"Validated {len(skill_dirs)} skill folders.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
