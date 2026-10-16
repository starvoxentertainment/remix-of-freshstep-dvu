# Fresh Step Therapy — Warm & Cozy Rebuild

A fresh start: a site that feels like sitting in Anna's cozy, sunlit room with a cup of tea. Same real words and Anna's photos, new design from scratch, with plenty of playful scroll animation.

## Look and feel
- Colours: Sage & cream — cream background (#FAF7F2), soft sage (#A7B59A), deep sage for text and headings (#5E6B52), peachy clay for buttons and highlights (#D9A68A). Warm brown-grey body text.
- Shapes: rounded everything — arched photo frames (like windows), pill buttons, soft blob shapes floating in the background, wavy section dividers instead of hard edges.
- Type: a friendly rounded serif for headings (Fraunces, soft and warm) with a cozy body font (Nunito Sans). Handwritten-style accents (Caveat) for little notes like "that's Koba!".
- Texture: a faint paper texture, no film grain, no dark overlays.

## Sections (top to bottom)
1. Header: cream bar, logo, links, "Book a free consult" pill.
2. Welcome: Anna's portrait in a tall arched frame on the right, big warm headline "Your fresh step forward starts here" on the left, floating sage blobs that drift as you scroll, small handwritten "Hi, I'm Anna" note with an arrow.
3. "The noise": the "you should..." lines appear as sticky notes that pile up as you scroll, then sweep away to reveal "Feeling heard is already a fresh step."
4. Meet Anna: her story beside the husband and Koba photos as tilted polaroids with handwritten captions, gently floating.
5. Quote: large centred quote on a sage band, with a winding dotted path that draws itself as you scroll.
6. Specialties: four rounded cards with soft illustrations/photos that pop up one after another.
7. "Is this you?": six items that tick themselves off as you scroll.
8. Approach: "Not a leap. A step." — ACT, CBT, DBT, Gottman as stepping stones along the drawn path.
9. Why me + credentials: cozy cards.
10. Getting started + consultation form on a soft peach card.
11. Footer: deep sage with cream text.

## Images
- Keep Anna's portrait, husband and Koba photos (original colours restored, warmer and brighter).
- Generate four soft, bright, cozy images for the specialties (tea and blanket, plant on a windowsill, two mugs, a sunny walk).

## Technical details
- New tokens in `src/styles.css`, remove grain; new fonts linked in `__root.tsx`.
- Rebuild `src/routes/index.tsx`, splitting sections into `src/components/site/*`; keep head() metadata.
- Animations with `motion` (scroll-linked blobs, sticky notes, SVG path drawing, staggered pop-ins), respecting reduced motion.
- Form stays front-end only. Verify desktop and phone with screenshots.
