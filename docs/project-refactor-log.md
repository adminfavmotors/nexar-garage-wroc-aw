# Nexar Refactor Log

Last updated: 2026-04-08

## Purpose

This file is the running report for architecture and design refactors in the project.
It is meant to be extended over time instead of rewritten.

## Current direction

- Move the project to a layered architecture: `app`, `pages`, `sections`, `features`, `shared`, `styles`.
- Replace the old heavy dark template look with a calmer and more premium visual system.
- Avoid patching old components with decorative fixes. Replace the underlying patterns instead.
- Keep behavior, routes, SEO structure, and service flows stable while redesigning the UI.

## Refactor sequence

### Phase 1. Local reference and working rules

- Added local reference file: [ai-dev-prompt.md](C:/Users/Admin/Desktop/project/nexar/docs/ai-dev-prompt.md).
- Established it as the working rule set before every code change.

### Phase 2. Architecture normalization

- Introduced `app` layer for application shell, providers, and routes.
- Introduced `shared` layer for layout, navigation, SEO, cookies, hooks, and UI primitives.
- Introduced `sections` layer for page-level content blocks.
- Introduced `features` layer for business domains such as language, cookie consent, and services.
- Converted `pages` into top-level page compositions instead of large monolithic page files.
- Reworked the project so new code uses the new layer structure as the source of truth.

### Phase 3. Legacy cleanup

- Removed old wrapper components from `src/components/*`.
- Removed old UI source-of-truth under `src/components/ui/*`.
- Removed old wrappers from `src/hooks/*`, `src/contexts/*`, and `src/data/*`.
- Removed old page wrappers such as legacy home, services, privacy, and not-found page entries.
- Consolidated navigation through a single route map in `src/shared/navigation/routes.ts`.

### Phase 4. Services domain restructuring

- Split the services page into smaller feature components.
- Moved service directory state into a dedicated hook.
- Separated intro, grid, details, and FAQ into dedicated components.
- Kept service data and SEO schema generation centralized in the services feature.

### Phase 5. Visual foundation rebuild

- Rewrote the styling foundation into dedicated files:
  - `src/styles/tokens.css`
  - `src/styles/base.css`
  - `src/styles/layout.css`
  - `src/styles/motion.css`
- Expanded the palette beyond the original dark/red pairing.
- Added calmer surface levels and softer section separation.
- Replaced the previous “same dark card everywhere” pattern with reusable surface and layout primitives.
- Added shared utility patterns for:
  - editorial section intros
  - section spacing and shell widths
  - premium primary and secondary buttons
  - trust chips and stat chips
  - form field shells and inputs

### Phase 6. Shared layout redesign

- Rebuilt header into a softer floating shell with calmer navigation and clearer CTA hierarchy.
- Rebuilt footer to match the new visual system instead of the old slab layout.
- Rebuilt cookie banner to match the new tone and shared button primitives.

### Phase 7. Home page section redesign

- Rebuilt hero with a two-zone editorial layout instead of a single aggressive text wall.
- Rebuilt services preview with one featured service and a secondary grid.
- Rebuilt stats into a lighter chip-based strip.
- Rebuilt “Why Us” into an editorial/service-selector hybrid instead of another generic card block.
- Rebuilt reviews away from a template-style slider into a proof-oriented section.
- Rebuilt booking into a structured form with grouped fields and clearer flow.
- Rebuilt contact into a calmer information block with a stronger map panel.

### Phase 8. Services page visual alignment

- Rebuilt services directory intro on the new foundation.
- Rebuilt services grid with a featured item and secondary service cards.
- Rebuilt service details accordion to use the new surface system.
- Rebuilt service FAQ to match the new section language.

### Phase 9. Readability and palette correction

- Rebalanced the global color system because the interface still relied too heavily on near-black surfaces with low-contrast secondary text.
- Lifted the background and surface values so the project no longer sits inside one very dark tonal band.
- Expanded the palette with warmer and cooler supporting tones instead of relying on one dark hue in multiple shades.
- Increased contrast for:
  - muted copy
  - borders
  - surface separation
  - secondary buttons
  - chips and small labels
- Updated the shared visual foundation so readability improvements propagate across home, shared blocks, and the services page.

### Phase 10. Typography and section accent refinement

- Reduced the visual weight of major display headings so the interface feels less poster-like and more premium.
- Added dedicated heading scales:
  - `hero-title`
  - `section-title`
  - `section-title-compact`
- Added calmer body-copy scales:
  - `section-copy`
  - `body-relaxed`
  - `body-fine`
- Introduced subtle section accents that are not based only on color:
  - `section-accent`
  - `accent-rule`
- Applied the new typography and accent patterns to the main home sections and services directory components.
- Shifted emphasis from aggressive uppercase mass to hierarchy, spacing, rhythm, and smaller precision details.

### Phase 11. Card surface highlight integration

- Adapted the requested “highlighted card” idea into the existing design system instead of copying a standalone demo class.
- Implemented a dark-compatible dual-shadow surface treatment for the main card primitives.
- Updated the following shared surface layers:
  - `surface-panel`
  - `surface-panel-soft`
  - `surface-panel-strong`
  - `service-card`
  - `service-card-interactive`
  - `service-card-active`
- Added lighter matching depth for:
  - `trust-chip`
  - `stat-chip`
- Kept the effect aligned with the project palette and hierarchy, so cards feel more dimensional without turning the UI into light neumorphism.

## Files with major changes

### Architecture and entry points

- `src/App.tsx`
- `src/app/*`
- `src/pages/HomePage.tsx`
- `src/pages/ServicesPage.tsx`
- `src/pages/PrivacyPage.tsx`
- `src/pages/NotFoundPage.tsx`

### Shared and foundation

- `src/shared/layout/*`
- `src/shared/navigation/*`
- `src/shared/seo/*`
- `src/shared/cookies/*`
- `src/shared/ui/*`
- `src/styles/*`
- `src/index.css`

### Home sections

- `src/sections/home/*`

### Services feature

- `src/features/services/*`

## Validation performed

- `npm run build`
- `npm test`

Both commands passed after the architecture cleanup, after the visual refactor pass, after the palette/readability correction, and again after the typography refinement.
Both commands also passed after the card-surface highlight integration.

## Known next steps

- Perform a visual browser pass on desktop, tablet, and mobile.
- Introduce real photo slots and integrate provided workshop imagery.
- Fine-tune typography rhythm section by section once media assets are available.
- Revisit a few remaining high-emphasis UI labels if screenshots still show isolated heavy spots.
- Validate whether the new card depth should stay equally strong across all card tiers or be reduced on secondary panels.
- Continue removing any remaining dead code or styles that no longer serve the new system.

## Update protocol

For every next iteration, append:

1. The date.
2. The phase or objective.
3. What changed.
4. What was validated.
5. What remains open.
