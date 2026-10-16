# Fresh Step Therapy — Warm & Inviting Rework

Keep the cinematic feel (big type, full-screen photos, scroll reveals, Anna's photos) but move from "night film" to "sunlit morning". Bright, warm, welcoming.

## Look and feel
- Background: warm cream (#F7F1E8) with soft peach/sand sections for rhythm; text in warm brown-charcoal (#3A322B), never pure black.
- Accent: clay (#C97B5A) for buttons; sage (#8A9A78) for highlights and tags.
- Photos: brighter, airier treatment — remove heavy dark overlays; use soft cream gradients behind text instead.
- Grain: keep, but much subtler (barely visible).
- Letterbox black bars removed; rounded image corners and soft shadows for a gentler, more human feel.

## Scene changes
1. Opening: sunlit path photo with a light cream fade at the bottom; headline in dark text on cream panel side, not over a dark image.
2. "The noise": cream background, the pressure lines drift in soft grey, resolving to "Feeling heard is already a fresh step" in clay.
3. Meet Anna + "Outside the room" photos: unchanged layout, light background.
4. Quote: light window image, gently washed, dark italic text.
5. Specialties filmstrip, "Is this you?", Approach steps, Credits: same motion, light panels alternating cream / soft sand / pale sage.
6. Final scene: warm sunset image with a light frosted form panel.
7. Header: cream with blur on scroll, dark text, clay button. Footer: soft sand.

## Technical details
- Swap the dark oklch tokens in `src/styles.css` for light ones; add `--sand` and `--sage-soft` surface tokens; lower grain opacity to ~0.035.
- Update `src/routes/index.tsx`: replace dark overlays (`bg-background/xx`, black gradients) with cream gradients, drop letterbox bars, adjust text colors via tokens.
- Verify desktop and phone with Playwright, checking text contrast over every photo.
