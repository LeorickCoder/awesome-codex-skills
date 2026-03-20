#!/usr/bin/env node
/**
 * sync-brand-to-tokens.cjs
 *
 * Syncs brand-guidelines.md colors -> design-tokens.json -> design-tokens.css
 *
 * Usage:
 *   node sync-brand-to-tokens.cjs
 *   node sync-brand-to-tokens.cjs --dry-run
 *   node sync-brand-to-tokens.cjs --brand-guidelines docs/brand-guidelines.md
 *   node sync-brand-to-tokens.cjs --tokens-json assets/design-tokens.json --tokens-css assets/design-tokens.css
 *   node sync-brand-to-tokens.cjs --generate-script ../design-system/scripts/generate-tokens.cjs
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DEFAULT_BRAND_GUIDELINES = 'docs/brand-guidelines.md';
const DEFAULT_DESIGN_TOKENS_JSON = 'assets/design-tokens.json';
const DEFAULT_DESIGN_TOKENS_CSS = 'assets/design-tokens.css';

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    dryRun: false,
    brandGuidelines: DEFAULT_BRAND_GUIDELINES,
    tokensJson: DEFAULT_DESIGN_TOKENS_JSON,
    tokensCss: DEFAULT_DESIGN_TOKENS_CSS,
    generateScript: null,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--brand-guidelines' && args[i + 1]) {
      options.brandGuidelines = args[++i];
    } else if (arg === '--tokens-json' && args[i + 1]) {
      options.tokensJson = args[++i];
    } else if (arg === '--tokens-css' && args[i + 1]) {
      options.tokensCss = args[++i];
    } else if (arg === '--generate-script' && args[i + 1]) {
      options.generateScript = args[++i];
    }
  }

  return options;
}

function resolvePath(projectRoot, targetPath) {
  return path.isAbsolute(targetPath) ? targetPath : path.resolve(projectRoot, targetPath);
}

function resolveGenerateTokensScript(projectRoot, explicitPath = null) {
  const candidates = [
    explicitPath,
    'scripts/generate-tokens.cjs',
    path.resolve(__dirname, '..', '..', 'design-system', 'scripts', 'generate-tokens.cjs'),
  ].filter(Boolean);

  for (const candidate of candidates) {
    const resolved = path.isAbsolute(candidate) ? candidate : path.resolve(projectRoot, candidate);
    if (fs.existsSync(resolved)) {
      return resolved;
    }
  }

  return null;
}

/**
 * Extract color info from brand guidelines markdown
 */
function extractColorsFromMarkdown(content) {
  const colors = {
    primary: { name: 'primary', shades: {} },
    secondary: { name: 'secondary', shades: {} },
    accent: { name: 'accent', shades: {} }
  };

  const quickRefMatch = content.match(/Primary Color\s*\|\s*#([A-Fa-f0-9]{6})\s*\(([^)]+)\)/);
  if (quickRefMatch) {
    colors.primary.name = quickRefMatch[2].toLowerCase().replace(/\s+/g, '-');
    colors.primary.base = `#${quickRefMatch[1]}`;
  }

  const secondaryMatch = content.match(/Secondary Color\s*\|\s*#([A-Fa-f0-9]{6})\s*\(([^)]+)\)/);
  if (secondaryMatch) {
    colors.secondary.name = secondaryMatch[2].toLowerCase().replace(/\s+/g, '-');
    colors.secondary.base = `#${secondaryMatch[1]}`;
  }

  const accentMatch = content.match(/Accent Color\s*\|\s*#([A-Fa-f0-9]{6})\s*\(([^)]+)\)/);
  if (accentMatch) {
    colors.accent.name = accentMatch[2].toLowerCase().replace(/\s+/g, '-');
    colors.accent.base = `#${accentMatch[1]}`;
  }

  const primarySection = content.match(/### Primary Colors[\s\S]*?\|[\s\S]*?(?=###|$)/i);
  if (primarySection) {
    const hexMatches = primarySection[0].matchAll(/\*\*([^*]+)\*\*\s*\|\s*#([A-Fa-f0-9]{6})/g);
    for (const match of hexMatches) {
      const name = match[1].trim().toLowerCase();
      const hex = `#${match[2]}`;
      if (name.includes('dark')) colors.primary.dark = hex;
      else if (name.includes('light')) colors.primary.light = hex;
      else colors.primary.base = hex;
    }
  }

  const secondarySection = content.match(/### Secondary Colors[\s\S]*?\|[\s\S]*?(?=###|$)/i);
  if (secondarySection) {
    const hexMatches = secondarySection[0].matchAll(/\*\*([^*]+)\*\*\s*\|\s*#([A-Fa-f0-9]{6})/g);
    for (const match of hexMatches) {
      const name = match[1].trim().toLowerCase();
      const hex = `#${match[2]}`;
      if (name.includes('dark')) colors.secondary.dark = hex;
      else if (name.includes('light')) colors.secondary.light = hex;
      else colors.secondary.base = hex;
    }
  }

  const accentSection = content.match(/### Accent Colors[\s\S]*?\|[\s\S]*?(?=###|$)/i);
  if (accentSection) {
    const hexMatches = accentSection[0].matchAll(/\*\*([^*]+)\*\*\s*\|\s*#([A-Fa-f0-9]{6})/g);
    for (const match of hexMatches) {
      const name = match[1].trim().toLowerCase();
      const hex = `#${match[2]}`;
      if (name.includes('dark')) colors.accent.dark = hex;
      else if (name.includes('light')) colors.accent.light = hex;
      else colors.accent.base = hex;
    }
  }

  if (!colors.primary.base) {
    const fallbackPrimary = content.match(/#([A-Fa-f0-9]{6})/);
    if (fallbackPrimary) colors.primary.base = `#${fallbackPrimary[1]}`;
  }

  if (!colors.secondary.base) {
    const secondaryFallback = content.match(/### Secondary Colors[\s\S]*?#([A-Fa-f0-9]{6})/i);
    if (secondaryFallback) colors.secondary.base = `#${secondaryFallback[1]}`;
  }

  if (!colors.accent.base) {
    const semanticFallback = content.match(/### Semantic Colors[\s\S]*?#([A-Fa-f0-9]{6})/i);
    const accentFallback = semanticFallback
      || content.match(/Accent[^\n|]*\|\s*#([A-Fa-f0-9]{6})/i)
      || content.match(/### Secondary Colors[\s\S]*?#([A-Fa-f0-9]{6})/i);
    if (accentFallback) colors.accent.base = `#${accentFallback[1]}`;
  }

  return colors;
}

function generateColorScale(baseHex, darkHex, lightHex) {
  return {
    "50": { "$value": lightHex || adjustBrightness(baseHex, 0.9), "$type": "color" },
    "100": { "$value": lightHex || adjustBrightness(baseHex, 0.8), "$type": "color" },
    "200": { "$value": adjustBrightness(baseHex, 0.6), "$type": "color" },
    "300": { "$value": adjustBrightness(baseHex, 0.4), "$type": "color" },
    "400": { "$value": adjustBrightness(baseHex, 0.2), "$type": "color" },
    "500": { "$value": baseHex, "$type": "color" },
    "600": { "$value": darkHex || adjustBrightness(baseHex, -0.15), "$type": "color" },
    "700": { "$value": adjustBrightness(baseHex, -0.3), "$type": "color" },
    "800": { "$value": adjustBrightness(baseHex, -0.45), "$type": "color" },
    "900": { "$value": adjustBrightness(baseHex, -0.6), "$type": "color" }
  };
}

function adjustBrightness(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + Math.round(255 * percent)));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + Math.round(255 * percent)));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + Math.round(255 * percent)));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0').toUpperCase()}`;
}

function updateDesignTokens(tokens, colors) {
  const brandName = `Brand System - ${colors.primary.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`;
  tokens.brand = brandName;

  const primitiveColors = tokens.primitive?.color || {};
  delete primitiveColors.coral;
  delete primitiveColors.purple;
  delete primitiveColors.mint;

  primitiveColors[colors.primary.name] = generateColorScale(
    colors.primary.base,
    colors.primary.dark,
    colors.primary.light
  );
  primitiveColors[colors.secondary.name] = generateColorScale(
    colors.secondary.base,
    colors.secondary.dark,
    colors.secondary.light
  );
  primitiveColors[colors.accent.name] = generateColorScale(
    colors.accent.base,
    colors.accent.dark,
    colors.accent.light
  );

  tokens.primitive.color = primitiveColors;

  if (tokens.semantic?.color) {
    const sem = tokens.semantic.color;
    const p = colors.primary.name;
    const s = colors.secondary.name;
    const a = colors.accent.name;

    sem.primary = { "$value": `{primitive.color.${p}.500}`, "$type": "color" };
    sem['primary-hover'] = { "$value": `{primitive.color.${p}.600}`, "$type": "color" };
    sem['primary-active'] = { "$value": `{primitive.color.${p}.700}`, "$type": "color" };
    sem['primary-light'] = { "$value": `{primitive.color.${p}.400}`, "$type": "color" };
    sem['primary-lighter'] = { "$value": `{primitive.color.${p}.100}`, "$type": "color" };
    sem['primary-dark'] = { "$value": `{primitive.color.${p}.600}`, "$type": "color" };

    sem.secondary = { "$value": `{primitive.color.${s}.500}`, "$type": "color" };
    sem['secondary-hover'] = { "$value": `{primitive.color.${s}.600}`, "$type": "color" };
    sem['secondary-light'] = { "$value": `{primitive.color.${s}.300}`, "$type": "color" };
    sem['secondary-dark'] = { "$value": `{primitive.color.${s}.600}`, "$type": "color" };

    sem.accent = { "$value": `{primitive.color.${a}.500}`, "$type": "color" };
    sem['accent-hover'] = { "$value": `{primitive.color.${a}.600}`, "$type": "color" };
    sem['accent-light'] = { "$value": `{primitive.color.${a}.300}`, "$type": "color" };

    sem.success = { "$value": `{primitive.color.${a}.500}`, "$type": "color" };
    sem['success-light'] = { "$value": `{primitive.color.${a}.300}`, "$type": "color" };
    sem.error = { "$value": `{primitive.color.${p}.500}`, "$type": "color" };
    sem['error-light'] = { "$value": `{primitive.color.${p}.300}`, "$type": "color" };
    sem.info = { "$value": `{primitive.color.${s}.500}`, "$type": "color" };
    sem['info-light'] = { "$value": `{primitive.color.${s}.300}`, "$type": "color" };
  }

  if (tokens.component?.button?.secondary) {
    const primaryBase = colors.primary.base;
    tokens.component.button.secondary['bg-hover'] = {
      "$value": `${primaryBase}1A`,
      "$type": "color"
    };
  }

  return tokens;
}

function main() {
  const options = parseArgs();
  const projectRoot = process.cwd();

  console.log('Syncing brand guidelines -> design tokens\n');

  const guidelinesPath = resolvePath(projectRoot, options.brandGuidelines);
  if (!fs.existsSync(guidelinesPath)) {
    console.error(`Brand guidelines not found: ${guidelinesPath}`);
    process.exit(1);
  }
  const guidelinesContent = fs.readFileSync(guidelinesPath, 'utf-8');

  const colors = extractColorsFromMarkdown(guidelinesContent);
  if (!colors.primary.base || !colors.secondary.base || !colors.accent.base) {
    console.error('Could not extract primary, secondary, and accent colors from the brand guidelines.');
    console.error('Provide a guideline with recognizable color tables or update the parser for your format.');
    process.exit(1);
  }
  console.log('Extracted colors:');
  console.log(`  Primary: ${colors.primary.name} (${colors.primary.base})`);
  console.log(`  Secondary: ${colors.secondary.name} (${colors.secondary.base})`);
  console.log(`  Accent: ${colors.accent.name} (${colors.accent.base})\n`);

  const tokensPath = resolvePath(projectRoot, options.tokensJson);
  let tokens = {};
  if (fs.existsSync(tokensPath)) {
    tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf-8'));
  }

  tokens = updateDesignTokens(tokens, colors);

  if (options.dryRun) {
    console.log('Would update design-tokens.json:');
    console.log(JSON.stringify(tokens.primitive.color, null, 2).slice(0, 500) + '...');
    console.log('\nDry run - no files changed');
    return;
  }

  fs.mkdirSync(path.dirname(tokensPath), { recursive: true });
  fs.writeFileSync(tokensPath, JSON.stringify(tokens, null, 2));
  console.log(`Updated: ${options.tokensJson}`);

  const generateScript = resolveGenerateTokensScript(projectRoot, options.generateScript);
  if (generateScript) {
    try {
      execSync(`node "${generateScript}" --config "${options.tokensJson}" -o "${options.tokensCss}"`, {
        cwd: projectRoot,
        stdio: 'inherit'
      });
      console.log(`Regenerated: ${options.tokensCss}`);
    } catch (e) {
      console.error('Failed to regenerate CSS:', e.message);
    }
  } else {
    console.warn('Could not find generate-tokens.cjs. Tokens JSON was updated, but CSS was not regenerated.');
  }

  console.log('\nBrand sync complete.');
}

main();
