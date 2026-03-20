# Logo Design Reference

Use the local logo workflow for AI-powered logo search, briefing, and generation.

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/logo/search.py` | Search logo styles, colors, and industries; generate briefs |
| `scripts/logo/generate.py` | Generate logo variants with Gemini |
| `scripts/logo/core.py` | BM25 search engine for the logo data |

## Commands

### Design Brief

```bash
python3 scripts/logo/search.py "tech startup modern" --design-brief -p "BrandName"
```

### Search Domains

```bash
python3 scripts/logo/search.py "minimalist clean" --domain style
python3 scripts/logo/search.py "tech professional" --domain color
python3 scripts/logo/search.py "healthcare medical" --domain industry
```

### Generate Logo

```bash
python3 scripts/logo/generate.py --brand "TechFlow" --style minimalist --industry tech
python3 scripts/logo/generate.py --prompt "coffee shop vintage badge" --style vintage
```

## Best Practices

- Use a white background for output logos unless the user explicitly wants transparency or a dark lockup.
- Keep the logo simple enough to work at small sizes.
- Prefer one primary mark and a small set of variations rather than many unrelated concepts.

## Workflow

1. Generate a brief with `scripts/logo/search.py --design-brief`.
2. Generate a small set of logo variations with `scripts/logo/generate.py`.
3. If the user wants a gallery or mockup, hand off to `ui-ux-pro-max` for layout.
