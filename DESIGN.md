# Design System

## Overview

**Scene:** a clean appliance service bay after dark—black lacquer panels, white enamel machines, sky-blue inspection tags, steel fasteners, and diagnostic lights.

**Strategy:** committed monochrome with one saturated sky-blue service accent. The site alternates near-black operational zones with true-white information zones.

## Color

All production tokens use OKLCH.

```css
--background: oklch(0.075 0 0);
--surface-dark: oklch(0.12 0 0);
--surface: oklch(0.965 0 0);
--paper: oklch(1 0 0);
--ink: oklch(0.12 0 0);
--ink-inverse: oklch(0.985 0 0);
--muted: oklch(0.48 0.01 10);
--muted-inverse: oklch(0.76 0.005 10);
--primary: oklch(0.58 0.18 245);
--primary-dark: oklch(0.44 0.14 248);
--accent: oklch(0.84 0.16 92);
--line: oklch(0.28 0 0);
--line-light: oklch(0.88 0 0);
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
- Hero diagnostic console with real logo poster and progressive GLB enhancement
- Appliance line-up that behaves like a labeled shop diagram
- Dryer airflow SVG with animated lint/air path
- Buy · Sell · Fix lifecycle dial
- Service-area radar map centered on Macon
- Mobile Call / Book action dock

## Motion

- One orchestrated hero sequence: crown mark, diagnostic sweep, and service indicators
- SVG stroke motion communicates airflow or diagnostic progress
- Hover motion is limited to 2–4px or a small rotation
- No content begins hidden
- `prefers-reduced-motion: reduce` disables model rotation, stroke travel, and scroll smoothing

## Responsive Behavior

- Mobile-first layouts with content priority unchanged at every width
- Sticky desktop actions move into the mobile action dock under 900px
- Dropdown escapes header overflow and remains keyboard operable
- Long service names wrap without overflow
- Calendly reserves height to avoid layout shift
