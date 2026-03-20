# Icon Design Reference

Use the local icon workflow for SVG icon search and generation.

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/icon/generate.py` | Generate SVG icons with Gemini 3.1 Pro Preview |

## Commands

### Generate Single Icon

```bash
python3 scripts/icon/generate.py --prompt "settings gear" --style outlined
python3 scripts/icon/generate.py --prompt "shopping cart" --style filled --color "#6366F1"
python3 scripts/icon/generate.py --name "dashboard" --category navigation --style duotone
```

### Generate Batch Variations

```bash
python3 scripts/icon/generate.py --prompt "cloud upload" --batch 4 --output-dir ./icons
python3 scripts/icon/generate.py --prompt "notification bell" --batch 6 --style outlined --output-dir ./icons
```

### Generate Multiple Sizes

```bash
python3 scripts/icon/generate.py --prompt "user profile" --sizes "16,24,32,48" --output-dir ./icons
```

### List Styles/Categories

```bash
python3 scripts/icon/generate.py --list-styles
python3 scripts/icon/generate.py --list-categories
```

## Workflow

1. Pick a style and category.
2. Generate one icon or a small batch.
3. Export SVG and verify it works at 16px, 24px, and 48px.

## Notes

- Use `currentColor` in SVG output when possible.
- Keep the path count minimal so the icon stays crisp.
