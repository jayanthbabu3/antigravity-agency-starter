---
name: taste
description: Load before any visual or aesthetic decision — color palette, typography, imagery direction, motion, or overall look and feel. Exists to keep output from reading as generic, templated, or obviously AI-generated.
---

# Taste

The client is paying for a site that looks like it was made specifically for them — not a site that could be reskinned for any other business by swapping the logo. Every aesthetic choice should trace back to what this particular brand, audience, and content actually are.

## Start from the subject, not from a look
Before choosing colors or fonts, be able to answer: what industry is this, who's the audience, what's the one feeling this page needs to land? A boutique bakery and a cybersecurity startup should never default to visually similar layouts just because both came from the same tool.

## Mandatory Kickoff Font Selection
At the start of every new design or project (Checkpoint 1), the agent **must ask the user** to select from their preferred foundation fonts:
- **Option 1 (Swiss Brutalism / Modernist Precision)**:
  - Headline: `Cabinet Grotesk` (Weight: 800 / 900, tracking: -0.035em)
  - Body: `Plus Jakarta Sans`
- **Option 2 (Tall High-Fashion / Continental Luxury)**:
  - Headline: `Italiana` (Weight: 400, tracking: 0.01em)
  - Body: `Plus Jakarta Sans`
- **Option 3 (Custom)**: User-specified choice from the curated library.

## Known clichés — check the output against this list before shipping
These patterns aren't wrong in isolation, but they're the tells of a page that wasn't actually designed for its brief. If more than one shows up without a specific reason, revise:
- A warm neutral/cream background paired with exactly one warm accent color (terracotta, clay, amber) — currently the single most common "AI-made-this" signature.
- Purple-to-blue gradients, especially as a hero background.
- Identical rounded-corner cards with the same soft drop shadow used for every content block regardless of what it contains.
- An all-caps, letter-spaced "eyebrow" label sitting above every section heading.
- Every button or link ending in a "→" arrow.
- Numbered badges (01 / 02 / 03) attached to content that isn't actually a sequence or process.
- Checkmark-emoji bullet lists.
- A hero formula of: big headline with one word in a different color or italic, a generic subheadline, two buttons side by side.
- Three-or-four-column feature grids where every card is icon-on-top, bold title, one sentence of body copy — repeated identically down the page.

## Typography
- **Single-Font Headings (Strict Rule)**: Every heading, title, and masthead MUST be set in ONE single font family. Never split a heading across two fonts, and NEVER italicize or color a single word to force contrast. Authority and drama come from intentional scale, letter tracking, line-height, and strong copy.
- Pick at most two typefaces per project, on purpose — not whatever the framework defaults to (system-ui, Inter-by-default). If you can't say why this typeface fits this brand, keep looking.
- Set a real type scale with intentional weights and letter spacing; don't just pick font-sizes that feel roughly right.
- Body text: line length under ~80 characters, generous line-height, especially for serif faces.
- Use self-hosted, variable-weight font files where the typeface offers them — this gets a real weight range instead of two static cuts, and it's faster than a third-party font CDN.
- Note the exact typefaces and where they're sourced from (Google Fonts, Fontshare, a licensed foundry) in this project's `AGENTS.md` once chosen, so every page pulls the same files.

## Color
Before writing any CSS, name the actual palette: 4–6 hex values, each with a role (background, surface, text, accent, etc.). A palette chosen this way holds together; colors picked ad hoc as you go usually don't.

## Motion
One deliberate, orchestrated moment (a page-load sequence, one meaningful reveal) reads as more premium than fade-and-slide-up animations scattered on every section and a hover transition on every card. Motion should answer something the user did, not just decorate scroll.

## Restraint
Spend boldness in exactly one place per page and keep everything else quiet and disciplined around it. Before calling a page done, look for the one element that could be removed or toned down without losing anything — and remove it.
