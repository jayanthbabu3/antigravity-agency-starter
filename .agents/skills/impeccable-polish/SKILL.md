---
name: impeccable-polish
description: Load as the final pass before marking any page or component "done" or ready for client review. A checklist-driven quality gate covering detail-level craft, cross-device behavior, and self-review — not a design or layout skill.
---

# Impeccable Polish

Nothing gets marked done with placeholder content, misaligned spacing, or an untested breakpoint. This is the pass that separates "it works" from "it's ready to charge a client for."

## Checklist — go through all of it before handoff
- **Spacing**: every margin/padding value is on the project's spacing scale — no one-off pixel values.
- **Content**: real copy and real (or client-approved placeholder) images everywhere — no lorem ipsum, no obvious stock-photo filler left in.
- **States**: every interactive element has hover, focus, active, disabled, loading, and error states defined — not just the happy path.
- **Responsive**: tested at 375px, 768px, 1024px, 1440px, and one ultra-wide size. Take a screenshot at each and actually look at it — check alignment, overflow, and whether text wraps awkwardly.
- **Images**: correct aspect ratio, compressed, served responsively (srcset or equivalent), meaningful alt text.
- **Metadata**: favicon, page title, meta description, and Open Graph image are set per page — not left as framework defaults.
- **Keyboard pass**: tab through the entire page; confirm the focus order makes sense and every focus state is visible.
- **Motion**: reduced-motion preference is respected for users who have it set at the OS level.
- **Performance**: run a Lighthouse pass; performance and accessibility scores both meet the project's bar in `AGENTS.md` before handoff.

## Final self-critique
Before calling it done, ask: what's the one thing on this page that still looks generic, unfinished, or like a default? Fix that specific thing — don't just re-run the checklist and call it clean if something still nags.
