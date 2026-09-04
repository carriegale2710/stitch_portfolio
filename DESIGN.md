---
name: Lo-Fi Artisan
colors:
  surface: "#101417"
  surface-dim: "#101417"
  surface-bright: "#363a3d"
  surface-container-lowest: "#0b0f11"
  surface-container-low: "#181c1f"
  surface-container: "#1c2023"
  surface-container-high: "#262a2d"
  surface-container-highest: "#313538"
  on-surface: "#e0e3e7"
  on-surface-variant: "#c2c8c1"
  inverse-surface: "#e0e3e7"
  inverse-on-surface: "#2d3134"
  outline: "#8c928c"
  outline-variant: "#424843"
  surface-tint: "#b2cdb9"
  primary: "#b2cdb9"
  on-primary: "#1e3527"
  primary-container: "#8ca693"
  on-primary-container: "#243c2d"
  inverse-primary: "#4c6453"
  secondary: "#aacbdf"
  on-secondary: "#113444"
  secondary-container: "#2d4d5e"
  on-secondary-container: "#9cbdd1"
  tertiary: "#cfc6ae"
  on-tertiary: "#35301f"
  tertiary-container: "#a79f89"
  on-tertiary-container: "#3b3625"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#cee9d4"
  primary-fixed-dim: "#b2cdb9"
  on-primary-fixed: "#082013"
  on-primary-fixed-variant: "#344c3d"
  secondary-fixed: "#c6e7fc"
  secondary-fixed-dim: "#aacbdf"
  on-secondary-fixed: "#001e2b"
  on-secondary-fixed-variant: "#2a4b5b"
  tertiary-fixed: "#ece2c9"
  tertiary-fixed-dim: "#cfc6ae"
  on-tertiary-fixed: "#201b0c"
  on-tertiary-fixed-variant: "#4c4634"
  background: "#101417"
  on-background: "#e0e3e7"
  surface-variant: "#313538"
typography:
  headline-xl:
    fontFamily: Geist Pixel
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist Pixel
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.2"
  headline-lg-mobile:
    fontFamily: Geist Pixel
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.2"
  body-md:
    fontFamily: Geist Pixel
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  body-sm:
    fontFamily: Geist Pixel
    fontSize: 14px
    fontWeight: "400"
    lineHeight: "1.5"
  label-md:
    fontFamily: Silkscreen
    fontSize: 12px
    fontWeight: "500"
    lineHeight: "1"
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1200px
---

## Brand & Style

The design system is built for a developer portfolio that bridges the gap between high-tech precision and human-centric warmth. It avoids the aggressive, high-contrast tropes of "hacker" aesthetics in favor of a "cozy-tech" vibe.

The style is a blend of **Minimalism** and **Tactile Retro**. It utilizes soft textures, pixel-perfect alignment, and a "dithered" visual language inspired by early computing interfaces and lo-fi hip-hop aesthetics. The emotional goal is to evoke a sense of calm, intellectual curiosity, and approachability. It is technical but tactile, modern but nostalgic.

## Colors

The palette is deeply rooted in muted, organic tones.

- **Primary (Sage Green):** Used for primary actions and success states, grounding the technical UI in a natural hue.
- **Secondary (Slate Blue):** Used for information density, accents, and decorative pixel-art elements.
- **Tertiary (Warm Cream):** The "ink" of the system, used for primary typography and high-contrast highlights on dark backgrounds.
- **Neutral (Soft Charcoal):** The canvas. A deep, desaturated charcoal that is easier on the eyes than pure black, providing a matte, paper-like feel to the screen.

Functional colors like errors should be rendered in a muted terracotta rather than a bright red to maintain the lo-fi harmony.

## Typography

The system uses a dual-font strategy. **Geist Pixel** provides the pixel-inspired backbone for headings and readable interface copy. **Silkscreen** is reserved for technical labels, buttons, and code-like UI elements.

The font roles map directly to Tailwind: `font-headline-xl`, `font-headline-lg`, `font-headline-lg-mobile`, `font-body-md`, and `font-body-sm` use **Geist Pixel**; `font-label-md` and `font-mono` use **Silkscreen**. All headers should have a slight negative letter-spacing to feel more compact and deliberate.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to create a centered, intentional "document" feel.

- **Desktop:** 12-column grid with a 1200px max-width.
- **Tablet:** 8-column grid with 24px gutters.
- **Mobile:** 4-column fluid grid with 16px margins.

The spacing rhythm is strictly based on a **4px base unit**. Component internals should use multiples of 4 (e.g., 8px, 12px, 16px). This mathematical precision mirrors the pixel-art aesthetic where every "block" has its place. Whitespace should be used generously to emphasize the "minimalist" aspect of the lo-fi aesthetic.

## Elevation & Depth

This design system rejects traditional shadows. Depth is achieved through **Tonal Layers** and **Bold Outlines**.

- **Surface Level 0:** The main background (#24282B).
- **Surface Level 1:** Secondary containers use a slightly lighter charcoal or a very subtle dithered pattern.
- **Depth:** Elements are brought "forward" using a 1px solid border in Slate Blue or Sage Green.
- **Interactions:** Use a "manual" offset for active states (e.g., a button moving 2px down and to the right when clicked) to simulate mechanical tactility rather than light-based depth.

## Shapes

The shape language is **Soft (Level 1)**. While the aesthetic is lo-fi and pixel-inspired, pure sharp corners can feel too aggressive for a "cozy" portfolio. A 4px (0.25rem) corner radius on cards and buttons provides a subtle "hardware" feel, reminiscent of early portable electronics or game consoles. Icons and pixel-art elements should remain sharp to maintain their retro integrity.

## Components

- **Buttons:** Solid Sage Green background with Charcoal text. Use a 1px Slate Blue border for "Ghost" variants. Buttons should have a slight hover state change—increasing border thickness or a subtle "flicker" effect.
- **Chips/Tags:** Monospaced text inside a Slate Blue pill. Used for technical stack tags (e.g., "React", "TypeScript").
- **Cards:** Background matches the neutral charcoal but features a 1px Cream border. Header areas within cards should be separated by a 1px horizontal line.
- **Inputs:** Darker background than the surface, with a Cream-colored monospaced cursor. No glows on focus—only a color change of the border to Sage Green.
- **Lists:** Use custom pixel-art glyphs (like a small 8-bit square or a cat icon) as bullet points.
- **Specialty Component - "Status Monitor":** A small UI block that mimics a terminal or status bar, showing "System Online" or "Currently Reading," rendered in Silkscreen.
