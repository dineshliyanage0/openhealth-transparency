# Design System Documentation

## 1. Overview & Creative North Star: "The Civic Ledger"

This design system is built to facilitate radical transparency in Sri Lanka’s healthcare sector. Moving away from the generic, cold aesthetics of corporate SaaS, this system adopts the **"Civic Ledger"** North Star. It treats digital space as a modern public record—authoritative, urgent, yet deeply human.

The "Civic Ledger" breaks away from the "template" look through **Intentional Asymmetry** and **Tonal Depth**. Instead of rigid, centered grids, we utilize left-weighted editorial layouts that mimic professional investigative journalism. We use high-contrast typography scales and layered surfaces to guide the citizen’s eye toward what matters most: action and accountability.

---

## 2. Colors: Tonal Authority

Our palette is rooted in the seriousness of civic duty. We use high-chroma signals for status, set against a sophisticated, multi-tiered neutral foundation.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background provides all the definition needed without the visual clutter of a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine heavy-stock paper. Use the surface-container tiers to create "nested" depth:
*   **Surface (Base):** The foundational canvas (#f9f9fd).
*   **Surface-Container-Low:** For secondary content areas or sidebar backgrounds.
*   **Surface-Container-Lowest:** For primary "High-Action" cards (the most prominent layer).
*   **Surface-Container-Highest:** For persistent navigation or structural headers.

### The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" feel, use **Glassmorphism** for floating action elements (e.g., a "Report an Issue" button) by applying semi-transparent `surface` colors with a 12px-20px backdrop-blur. 
*   **Signature Texture:** Main CTAs should use a subtle linear gradient from `primary` (#005dac) to `primary_container` (#1976d2) at a 135-degree angle. This provides a tactile "soul" to the button that flat color cannot replicate.

---

## 3. Typography: The Editorial Voice

We use **Manrope** as our sole typeface. Its geometric yet humanist qualities provide the "Serious but Accessible" tone required for civic tech.

*   **Display (lg/md):** Used for high-impact data visualizations or urgent system alerts. It should feel massive and undeniable.
*   **Headline (lg/md):** Our primary editorial voice. Use `headline-lg` for page titles to establish a "newspaper-header" authority.
*   **Title (lg/md/sm):** Used for card headings and section headers. These should be bold and concise.
*   **Body (lg/md):** Optimized for readability of long-form reports or policy text.
*   **Label (md/sm):** Used for metadata, timestamps, and status chips.

**Hierarchy Tip:** Contrast a `display-sm` metric (e.g., "98% Oxygen Availability") with a `label-md` descriptor to create a clear, authoritative information hierarchy.

---

## 4. Elevation & Depth: Tonal Layering

We convey importance through light and layering, not structural lines.

*   **The Layering Principle:** Depth is achieved by "stacking" tokens. Place a `surface-container-lowest` card on a `surface-container-low` background. The slight shift in brightness creates a soft, natural lift.
*   **Ambient Shadows:** When a card must "float" (e.g., a critical alert), use a shadow with a blur of 32px and an opacity of 6%. The shadow color must be a tinted version of `on-surface` (#191c1e) to mimic natural light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., in high-contrast modes), use the `outline_variant` token at **15% opacity**. Never use 100% opaque borders.
*   **Glassmorphism:** Use for "floating" navigation bars or mobile action menus to let the content colors bleed through, ensuring the UI feels like a single, integrated environment.

---

## 5. Components: Purpose-Built Primitives

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), `xl` roundedness (0.75rem). No shadow unless hovered.
*   **Secondary:** `surface-container-highest` background with `on-surface` text.
*   **Tertiary:** Ghost style. No background, `primary` text. Use for low-emphasis actions like "Cancel."

### Cards & Lists
*   **Rule:** Forbid divider lines.
*   **Implementation:** Separate list items using 16px of vertical white space or by alternating background colors between `surface` and `surface-container-low`.
*   **Interaction:** Cards should have a subtle scale-up effect (1.02x) on hover rather than a heavy shadow.

### Status Chips
*   **Critical:** `secondary_container` background with `on_secondary_container` text.
*   **Under Review:** `primary_container` background with `on_primary_container` text.
*   **Resolved:** `tertiary_container` background with `on_tertiary_container` text.
*   **Style:** Pill-shaped (`full` roundedness) with `label-md` typography.

### Input Fields
*   Avoid the "four-sided box." Use a `surface-container-high` background with a 2px bottom-accent of `outline_variant`. On focus, the bottom accent transitions to `primary` blue.

### Civic-Specific Components
*   **Urgency Banner:** A full-bleed `secondary` (#b6171e) banner for national health emergencies, using `headline-sm` for maximum visibility.
*   **Transparency Ledger:** A specialized list view using `surface-container-lowest` for every entry, creating a "stacked paper" look that emphasizes individual records.

---

## 6. Do's and Don'ts

### Do
*   **Do** use whitespace as a functional tool. If a section feels crowded, increase the padding rather than adding a divider line.
*   **Do** use asymmetrical layouts. A heavy left column for text and a light right column for metadata creates a premium editorial feel.
*   **Do** prioritize "Human" data. Instead of just numbers, use "Manrope Body-lg" to tell the story behind the data.

### Don't
*   **Don't** use standard 1px borders. They make the platform look like a generic database.
*   **Don't** use pure black (#000000) for shadows. Always use a tinted `on-surface` variant.
*   **Don't** use "Corporate Blue" excessively. Reserve `primary` for actions and `platform-blue` for structural emphasis.
*   **Don't** use "Standard" SaaS icons. Opt for thicker-stroke, custom-feel iconography that matches the weight of the Manrope typeface.