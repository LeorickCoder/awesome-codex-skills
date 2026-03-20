# Social Photos Design Guide

Use this workflow to create social media images via HTML/CSS rendering plus screenshot export.

## Core Skills

- `brand` for colors, fonts, and tone
- `design-system` for spacing and typography tokens
- `ui-ux-pro-max` for composition and hierarchy
- `ui-styling` for implementation details

## Platform Sizes

| Platform | Type | Size (px) | Aspect |
|----------|------|-----------|--------|
| Instagram | Post | 1080 x 1080 | 1:1 |
| Instagram | Story/Reel | 1080 x 1920 | 9:16 |
| Instagram | Carousel | 1080 x 1350 | 4:5 |
| Facebook | Post | 1200 x 630 | ~1.9:1 |
| Twitter/X | Post | 1200 x 675 | 16:9 |
| LinkedIn | Post | 1200 x 627 | ~1.91:1 |
| Pinterest | Pin | 1000 x 1500 | 2:3 |
| YouTube | Thumbnail | 1280 x 720 | 16:9 |
| TikTok | Cover | 1080 x 1920 | 9:16 |

## Workflow

1. Break the request into requirement analysis, ideation, design, export, and report tasks.
2. Ask the user to approve the concepts before generating files.
3. Use `brand`, `design-system`, and `ui-ux-pro-max` to shape the layout and hierarchy.
4. Build one HTML file per idea and size.
5. Use Playwright or browser screenshot tooling to export exact-size PNGs.
6. Review the screenshots and fix any overflow or contrast issues.

## HTML Rules

- Keep the canvas fixed to the target dimensions.
- Inline the CSS.
- Load only the fonts you need.
- Keep the layout readable at thumbnail size.
- Keep critical content inside the safe zone.

## Export

Use `playwright` or `screenshot` to capture the final PNGs after a short delay for fonts and images.
