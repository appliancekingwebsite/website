# Design System

## Overview

**Scene:** a clean daytime appliance service counter—white enamel surfaces, sky-blue inspection tags, steel fasteners, clear forms, and calm diagnostic lights.

**Strategy:** white-first service clarity with one saturated sky-blue action accent. The site uses light, high-contrast sections for fast mobile scanning and reserves dark ink for text, footer contrast, and small mechanical details.

## Color

All production tokens use OKLCH.

```css
--background: oklch(0.995 0 0);
--surface: oklch(0.965 0.012 245);
--surface-blue: oklch(0.93 0.025 245);
--paper: oklch(0.995 0 0);
--ink: oklch(0.18 0.018 252);
--ink-inverse: oklch(0.985 0 0);
--muted: oklch(0.46 0.022 252);
--muted-inverse: oklch(0.76 0.005 10);
--primary: oklch(0.58 0.18 245);
--primary-dark: oklch(0.44 0.14 248);
--accent: oklch(0.84 0.16 92);
--line: oklch(0.86 0.018 245);
```

White text is used on the saturated primary. Body copy meets at least 4.5:1 contrast, with primary reading surfaces targeting 7:1.

## Typography

- Display: Barlow Condensed, 600–800
- Body and UI: Public Sans, 400–700
- Headings use `text-wrap: balance`, body copy uses `text-wrap: pretty`
- Display tracking never tighter than `-0.035em`
- Body measure: 65–72ch

## Shape and Structure

- Small mechanical radii: 0–14px, never oversized soft cards
- Full borders or compact hard shadows, never border-plus-wide-ghost-shadow
- Large sections use rails, panels, cut lines, status lamps, and labeled diagrams
- Cards are reserved for genuinely discrete services, FAQs, and articles

## Signature Components

- Service-bay header with an accessible fixed-position services panel
- Hero estimate panel with calm service indicators and progressive GLB enhancement
- Appliance line-up that behaves like a labeled shop diagram
- Dryer airflow SVG with animated lint/air path
- Buy · Sell · Fix lifecycle dial
- Service-area radar map centered on Macon
- Mobile Call / Book action dock

## Motion

- One calm hero sequence: service indicators, slow appliance motion, and clear action buttons
- SVG stroke motion communicates airflow or diagnostic progress only when it adds understanding
- Hover motion is limited to 2–4px or a small rotation
- No content begins hidden
- `prefers-reduced-motion: reduce` disables model rotation, stroke travel, and scroll smoothing

## Responsive Behavior

- Mobile-first layouts with content priority unchanged at every width
- Sticky desktop actions move into the mobile action dock under 900px
- Dropdown escapes header overflow and remains keyboard operable
- Long service names wrap without overflow
- Calendly reserves height to avoid layout shift
