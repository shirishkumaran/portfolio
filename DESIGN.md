---
name: Lumina Nexus
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#859399'
  outline-variant: '#3c494e'
  surface-tint: '#47d6ff'
  primary: '#a5e7ff'
  on-primary: '#003543'
  primary-container: '#00d2ff'
  on-primary-container: '#00566a'
  inverse-primary: '#00677f'
  secondary: '#edb1ff'
  on-secondary: '#520070'
  secondary-container: '#6e208c'
  on-secondary-container: '#e498ff'
  tertiary: '#dfdcdb'
  on-tertiary: '#313030'
  tertiary-container: '#c3c0c0'
  on-tertiary-container: '#4f4e4e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b6ebff'
  primary-fixed-dim: '#47d6ff'
  on-primary-fixed: '#001f28'
  on-primary-fixed-variant: '#004e60'
  secondary-fixed: '#f9d8ff'
  secondary-fixed-dim: '#edb1ff'
  on-secondary-fixed: '#320046'
  on-secondary-fixed-variant: '#6e208c'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Poppins
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Poppins
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

This design system is engineered for a high-end Data Engineering portfolio, blending technical precision with a premium, cinematic aesthetic. The brand personality is authoritative yet visionary—positioning data as a fluid, illuminating force within a dark, structured environment.

The design style utilizes **Glassmorphism** as its primary structural driver. Surfaces are not solid; they are frosted apertures that hint at the complexity beneath. This is balanced with a **Minimalist** layout philosophy to ensure that dense technical data and architectural diagrams remain the focal point. The emotional response should be one of "sophisticated intelligence"—evoking the feeling of a high-end command center or a futuristic developer IDE.

## Colors

The palette is anchored in deep shadows to provide maximum contrast for "glowing" data elements. 

- **Primary (Electric Blue):** Used for interactive states, primary actions, and "live" data streams. It represents the flow of information.
- **Secondary (Subtle Purple):** Used for accents, gradients, and to signify secondary data categories or depth. 
- **Neutral / Background:** The base is a true deep black (`#0a0a0a`), while surfaces use charcoal gray (`#1a1a1a`) with varying levels of transparency to create the glass effect.
- **Data Visualization:** Use the primary and secondary colors in gradients to show transitions or pipeline flows.

## Typography

The typographic scale emphasizes hierarchy through significant size variance. **Poppins** is used for headlines to provide a modern, geometric, and friendly tone. **Inter** is utilized for body text and technical labels due to its exceptional legibility in dark mode and its systematic, "tech-first" appearance. 

For large display text, apply a subtle linear gradient from Primary Blue to Secondary Purple to reinforce the premium aesthetic. Ensure all body text maintains at least a 4.5:1 contrast ratio against the dark backgrounds by using high-transparency white (e.g., 90% opacity).

## Layout & Spacing

The design system employs a **Fluid Grid** with generous margins to create a sense of "breathability" and luxury. 

- **Desktop:** 12-column grid with 24px gutters. Content is centered within a 1200px max-width container.
- **Mobile:** 4-column grid with 16px gutters and 20px side margins.
- **Spacing Logic:** Use an 8px base unit. Component internal padding should be consistent (e.g., 24px for cards, 12px for buttons). Large sections should be separated by 128px or 160px to maintain the "Awwwards-winning" minimalist feel.

## Elevation & Depth

Elevation is achieved through **Glassmorphism** rather than traditional shadows. 

1.  **Base Layer:** Solid `#0a0a0a`.
2.  **Surface Layer (Cards):** Background blur (20px to 40px) with a semi-transparent fill of `#1a1a1a` at 60% opacity.
3.  **Edge Treatment:** All glass elements must have a 1px inner border (stroke) using a linear gradient: `rgba(255,255,255,0.15)` at the top-left to `rgba(255,255,255,0.05)` at the bottom-right. This simulates a light catch on the edge of the glass.
4.  **Glows:** For high-priority elements, use a soft, colored background glow (drop-shadow with 100px blur, 10% opacity) in Primary Blue to lift the element from the darkness.

## Shapes

The design system uses a hyper-modern, rounded language to soften the "coldness" of technical data. 

- **Cards/Containers:** Use `rounded-2xl` (1.5rem / 24px) to create a friendly, high-end feel.
- **Buttons/Inputs:** Use `rounded-lg` (1rem / 16px) for a consistent but slightly more precise look.
- **Avatars/Badges:** Use full pills where appropriate to denote status or tags.

## Components

### Buttons
- **Primary:** Gradient background (Blue to Purple), white text, `rounded-lg`. On hover: increase glow intensity.
- **Secondary (Ghost):** 1px glass border, transparent background. On hover: slight background fill (`rgba(255,255,255,0.05)`).

### Cards
- Apply the glassmorphic treatment: 24px border radius, background blur, and the thin gradient border. These are the primary vessels for project case studies and technical skills.

### Data Chips
- Small, pill-shaped tags used for tech stacks (e.g., Python, AWS, Spark). Dark background (`#1a1a1a`) with a subtle Primary Blue border.

### Input Fields
- Dark, recessed appearance. On focus, the border should glow with the Primary Blue color and a 4px outer blur.

### Progress/Pipeline Visuals
- Use rounded, thick lines with gradient strokes to represent data pipelines. Intersections should have "nodes" with a pulse animation in the Primary Blue color.