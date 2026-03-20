# CIP Design Reference

Use the local CIP workflow for corporate identity programs, deliverables, and mockup rendering.

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/cip/search.py` | Search deliverables, styles, and industries; generate CIP briefs |
| `scripts/cip/generate.py` | Generate CIP mockups with Gemini |
| `scripts/cip/render-html.py` | Render HTML presentations from CIP mockups |
| `scripts/cip/core.py` | BM25 search engine for CIP data |

## Commands

### CIP Brief

```bash
python3 scripts/cip/search.py "tech startup" --cip-brief -b "BrandName"
```

### Search Domains

```bash
python3 scripts/cip/search.py "business card letterhead" --domain deliverable
python3 scripts/cip/search.py "luxury premium elegant" --domain style
python3 scripts/cip/search.py "hospitality hotel" --domain industry
python3 scripts/cip/search.py "office reception" --domain mockup
```

### Generate Mockups

```bash
python3 scripts/cip/generate.py --brand "TopGroup" --logo /path/to/logo.png --deliverable "business card" --industry "consulting"
python3 scripts/cip/generate.py --brand "TopGroup" --logo /path/to/logo.png --industry "consulting" --set
python3 scripts/cip/generate.py --brand "TopGroup" --logo logo.png --deliverable "business card" --model pro
python3 scripts/cip/generate.py --brand "TechFlow" --deliverable "business card" --no-logo-prompt
```

### Render HTML Presentation

```bash
python3 scripts/cip/render-html.py --brand "TopGroup" --industry "consulting" --images /path/to/cip-output
```

## Workflow

1. Generate a brief with `scripts/cip/search.py --cip-brief`.
2. Generate mockups with `scripts/cip/generate.py`.
3. Render a single-file HTML presentation with `scripts/cip/render-html.py`.

## Notes

- Use a provided logo when one exists.
- If no logo exists, generate or approximate one first, then mock up the CIP system around it.
