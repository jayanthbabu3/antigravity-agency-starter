# Project Rules — Premium Website Builds

This project ships websites a client is paying a premium price for. Generic, templated, or "looks like every other AI build" output is a failed deliverable, even if it's functionally correct.

## Stack Defaults
Unless a client project explicitly mandates otherwise in a local `AGENTS.md`, all new web builds strictly adhere to this modern foundation:
- **Framework**: Next.js (App Router) or Astro (Never legacy Create-React-App, raw Webpack, or outdated setups).
- **Styling**: Tailwind CSS v4 or CSS Modules (Never messy inline styles, raw `<style>` tags in components, or ad-hoc CSS).
- **Icons**: Lucide Icons (`lucide-react`) exclusively (Emojis like 👉, 🚀, ✅, 🔥 are strictly prohibited as icons or bullet markers).
- **Animation**: Framer Motion (`motion/react`) with spring physics and deliberate restraint (Never bouncy or cheesy CSS keyframes).
- **Font Loading**: Self-hosted variable fonts via `next/font/local` or `@font-face` with `font-display: swap`.
- **Deployment Target**: Vercel or Cloudflare Pages.

## Mandatory Project Kickoff: Typography Selection
Whenever starting a new web project, page, or major redesign, the agent **MUST ALWAYS** ask the user to confirm their font pairing at **Checkpoint 1** (before writing code). Present the user's preferred options:

- **Option 1: Swiss Brutalism / Modernist Precision**
  - Headline Font: `Cabinet Grotesk` (Weight: 800 / 900, tracking: -0.035em)
  - Body Font: `Plus Jakarta Sans`
  - Micro / Meta Font: `JetBrains Mono`

- **Option 2: Tall High-Fashion / Continental Luxury**
  - Headline Font: `Italiana` (Weight: 400, tracking: 0.01em)
  - Body Font: `Plus Jakarta Sans`
  - Micro / Meta Font: `Space Mono`

- **Option 3: Custom Curated Selection**
  - Prompt user if they want another system from the library (e.g., `Instrument Serif`, `Cormorant Garamond`, `Cinzel`, `Fraunces`).

## Skills to load, and when
- Before any layout, navigation, component, or interaction decision → load `ui-ux-pro-max`
- Before any visual/aesthetic decision — color, type, imagery, motion → load `taste`
- Before marking any page "done" or handing it off for client review → load `impeccable-polish`

Load a skill even if the task looks small. A one-line copy change still touches the voice rules in `taste`; a single new button still needs the states defined in `ui-ux-pro-max`.

## Non-negotiables
- **Mandatory Kickoff Font Selection**: Never guess, assume, or silently pick a font. Prompt the user to select from their preferred options (Option 1 Cabinet Grotesk or Option 2 Italiana) at project kickoff.
- **Single-Font Headings (Strict)**: Headings, titles, and mastheads are ALWAYS in ONE single cohesive font. Never split a heading across two fonts, and NEVER italicize or recolor a single word inside a title for artificial contrast. A heading must derive its power from pure proportion, tracking, scale, and copy discipline.
- **Iconography**: 100% clean vector SVG icons via Lucide (`lucide-react`). Zero emoji bullets.
- **Real Content & Imagery**: Real copy and authentic high-resolution imagery before final review — no lorem ipsum, no placeholder boxes.
- **Cross-Device Testing**: Test and verify at 375px, 768px, 1024px, and 1440px minimum.
- **Quality Thresholds**: Lighthouse performance ≥ 90, accessibility ≥ 95, before handoff.
- Every page passes the `impeccable-polish` checklist before a client sees it.

## Review checkpoints — pause here, don't run past them silently
1. **Checkpoint 1 (Kickoff & Tokens)**: Present the design token plan (palette, layout concept) and prompt the user to select between **Option 1 (Cabinet Grotesk)**, **Option 2 (Italiana)**, or custom fonts before any code is written.
2. **Checkpoint 2 (First Build Pass)**: Review after the first complete build pass of a new page or major component.
3. **Checkpoint 3 (Final Polish)**: After the final polish pass and quality gate checklist, right before client handoff.

## Autonomy
Run in Antigravity's "review-driven development" mode by default on client work. Switch to a more autonomous mode only for internal prototyping, not client deliverables.
