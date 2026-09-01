---
name: Lo-Fi Artisan Light
colors:
  surface: "#f9f9fa"
  surface-dim: "#dadadb"
  surface-bright: "#f9f9fa"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f3f4"
  surface-container: "#eeeeef"
  surface-container-high: "#e8e8e9"
  surface-container-highest: "#e2e2e3"
  on-surface: "#1a1c1d"
  on-surface-variant: "#44474a"
  inverse-surface: "#2f3132"
  inverse-on-surface: "#f0f1f2"
  outline: "#75777a"
  outline-variant: "#c5c7ca"
  surface-tint: "#5b5f62"
  primary: "#000000"
  on-primary: "#ffffff"
  primary-container: "#181c1f"
  on-primary-container: "#818488"
  inverse-primary: "#c4c7cb"
  secondary: "#4c6453"
  on-secondary: "#ffffff"
  secondary-container: "#cbe6d1"
  on-secondary-container: "#506858"
  tertiary: "#000000"
  on-tertiary: "#ffffff"
  tertiary-container: "#161c22"
  on-tertiary-container: "#7e848c"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#e0e3e7"
  primary-fixed-dim: "#c4c7cb"
  on-primary-fixed: "#181c1f"
  on-primary-fixed-variant: "#43474b"
  secondary-fixed: "#cee9d4"
  secondary-fixed-dim: "#b2cdb9"
  on-secondary-fixed: "#082013"
  on-secondary-fixed-variant: "#344c3d"
  tertiary-fixed: "#dde3eb"
  tertiary-fixed-dim: "#c1c7cf"
  on-tertiary-fixed: "#161c22"
  on-tertiary-fixed-variant: "#41474e"
  background: "#f9f9fa"
  on-background: "#1a1c1d"
  surface-variant: "#e2e2e3"
typography:
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.3"
    letterSpacing: -0.01em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
    letterSpacing: "0"
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: "400"
    lineHeight: "1.5"
    letterSpacing: "0"
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "700"
    lineHeight: "1"
    letterSpacing: 0.1em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "400"
    lineHeight: "1.4"
    letterSpacing: "0"
spacing:
  base: 4px
  grid-size: 24px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system embodies a "Cyber-Blueprint" aesthetic—a high-fidelity, light-mode translation of technical lo-fi culture. It balances the raw, unrefined energy of Brutalism with the precision of modern engineering documentation. The target audience includes developers, architects, and technical creatives who value clarity and a "manual" tactile feel.

The visual style is **Glitch-Minimal**. It utilizes stark layouts, intentional alignment "errors" (like slight offsets or overlapping borders), and a utilitarian hierarchy. The interface should feel like a sophisticated digital drafting table: clean, professional, and slightly cold, yet deeply functional.

## Colors

The palette shifts the focus to a "paper-white" workspace while maintaining the soul of the Midnight Sage original.

- **Primary (#101417):** A deep charcoal used for all structural elements, primary text, and heavy borders. It provides the "ink" contrast against the light surfaces.
- **Secondary (#8ca693):** The signature Sage Green, slightly darkened for accessibility. Used for success states, active indicators, and secondary technical callouts.
- **Backgrounds:** Use `#fdfdfd` for the base canvas and `#f4f4f5` for secondary containers or recessed areas to create a "blueprint" depth.
- **Accents:** Use a muted coral or safety orange (#d97706) sparingly for error states or urgent warnings to maintain the industrial feel.

## Typography

The typography is strictly monospaced to reinforce the engineer-log and blueprint narrative. **JetBrains Mono** is the sole typeface, used across all levels of hierarchy.

- **Headlines:** Use heavy weights with slightly tight letter-spacing to create a "blocky" impact.
- **Body:** Standard weight with generous line height for legibility against the grid backgrounds.
- **Labels:** Use uppercase for functional labels (buttons, tags, table headers) to mimic technical schematics.
- **Hierarchy:** Rely on weight and scale rather than color shifts. Primary information is always `#101417`.

## Layout & Spacing

This design system utilizes a **Fixed Grid** philosophy rooted in a 4px baseline.

- **Background Texture:** A subtle 24px x 24px grid or graph paper pattern should be applied to the main background (`#fdfdfd`) using a 1px stroke of `#e2e8f0`.
- **Containers:** All containers should align strictly to the 24px grid increments.
- **Layout Model:** A 12-column grid for desktop with 0px gutters between borders (elements share a common center border) to create a "joined" blueprint feel.
- **Mobile:** Transition to a single-column stack with 16px side margins. Elements should retain their boxed appearance.

## Elevation & Depth

Elevation is achieved through **structural stacking and hard offsets** rather than soft shadows.

- **Flat Layers:** Most surfaces are flat, distinguished by 1px or 2px charcoal borders (`#101417`).
- **The "Glitch" Offset:** For hover states or "raised" elements, use a hard, 100% opacity shadow (e.g., `4px 4px 0px #101417`). This creates a neobrutalist, tactile feel.
- **Recessed Areas:** Use the secondary neutral (`#f4f4f5`) with an inner 1px border to indicate input fields or inactive zones.
- **Zero Blur:** Soft shadows are strictly prohibited. Every edge must be "ink-sharp."

## Shapes

The shape language is dominated by **Sharp (0px)** corners. Every button, card, and input field is a perfect rectangle.

In rare instances where a "human" touch is needed (such as specific status chips), a maximum radius of 4px may be applied, but the preference is always for 90-degree angles to maintain the blueprint precision.

## Components

- **Buttons:** Rectangular with a 1px charcoal border. Primary buttons use a sage green (`#8ca693`) background with charcoal text. On hover, apply a 4px hard offset shadow.
- **Input Fields:** Use the recessed background (`#f4f4f5`) with a 1px bottom border. Labels should be small, uppercase, and positioned strictly above the field.
- **Cards:** 1px charcoal border. Headlines inside cards should be separated by a horizontal 1px line, creating a "header" section within the card.
- **Chips/Tags:** Small, sharp rectangles with a light sage background. Use `label-caps` typography.
- **Checkboxes:** Square boxes. When checked, fill with a solid charcoal block or a "X" glyph for a manual, hand-drawn look.
- **Progress Bars:** Segmented blocks rather than a smooth continuous fill to emphasize the technical, "stepped" nature of the UI.
