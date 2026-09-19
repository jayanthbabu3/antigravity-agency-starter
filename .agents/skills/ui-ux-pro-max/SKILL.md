---
name: ui-ux-pro-max
description: Load before any layout, navigation, component, or interaction decision on client website work — new pages, new components, forms, or a review of existing UI. Covers hierarchy, spacing systems, responsive behavior, and interaction states.
---

# UI/UX Pro Max

Treat every screen as part of a system, not a one-off page. Consistency across a site is itself a UX feature — it's how a visitor learns to navigate without thinking about it.

## Hierarchy and layout
- Every screen needs exactly one clear focal point. If two elements compete for attention, one of them loses on purpose.
- Use a single spacing scale across the whole site (e.g. 4/8/16/24/32/48/64/96px) — no ad hoc margins. Vertical rhythm should feel deliberate, not accidental.
- Group related content with proximity and whitespace before reaching for borders or dividers.

## Navigation
- Primary actions should never be more than one click from anywhere on the site.
- Only add breadcrumbs when the hierarchy is genuinely deep (3+ levels) — otherwise they're clutter.
- Sticky navigation earns its place when users need to act from anywhere on a long page (e.g. "Book now"); don't add it by default.

## Responsive behavior
- Design mobile, tablet, and desktop as distinct layouts with distinct decisions — not one layout that just reflows. What's a 3-column grid at 1440px might need to become a swipeable carousel at 375px, not three stacked cards.
- Touch targets on mobile: minimum 44x44px.
- Test breakpoints: 375px, 768px, 1024px, 1440px, and one ultra-wide (1920px+).

## Interaction states & Micro-Animations
Every interactive element needs all of these explicitly designed, not left to browser defaults:
- Default, hover, focus, active, disabled, loading, error, empty.
- Focus states must be visible (not `outline: none` with nothing replacing it) — this is both an accessibility and a polish requirement.
- Prefer skeleton states over spinners for content that's loading in — they reduce perceived wait time.
- **Animation standard**: Use Framer Motion (`motion/react`) with spring physics and deliberate restraint. Avoid bouncy, hyperactive, or linear CSS keyframe transitions.

## Iconography Standard
- **Vector Icons Only**: Always use **Lucide Icons** (`lucide-react`) with consistent stroke widths (1.5px or 1.75px).
- **Zero Emoji Markers**: Never use emojis (👉, 🚀, ✅, 💡) as UI icons, list bullets, or buttons.

## Forms
- Labels are always visible (not just placeholder text that disappears on focus).
- Validate inline, as the user leaves a field — not only on submit.
- Error messages say what went wrong and how to fix it, next to the field that has the problem.

## Accessibility floor (non-negotiable, not a stretch goal)
- Text contrast meets WCAG AA (4.5:1 for body text, 3:1 for large text).
- Full keyboard navigation: every interactive element reachable and operable via keyboard, in a sensible tab order.
- Semantic HTML first — reach for a `<div>` with a click handler only when no semantic element fits.
- Meaningful `alt` text on every content image; decorative images get empty `alt=""`.

## Performance as UX
- Optimize and lazy-load images below the fold.
- A fast, slightly-less-flashy page beats a slow, impressive one — perceived speed is part of the design, not a backend concern to bolt on later.
