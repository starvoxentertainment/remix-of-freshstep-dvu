# Fresh Step Therapy — Cinematic Redesign

Turn the page into a film-like scroll: dark, moody, full-screen photography, huge type, and scenes that reveal as you move down. Same words and sections, very different feeling.

## Look and feel
- Mood: a quiet indie film at golden hour. Deep warm charcoal background, cream text, clay as the glowing accent, sage for soft highlights. Light film grain over everything.
- Type: Instrument Serif set huge (headlines filling most of the screen width), with small spaced-out Work Sans labels like film credits ("Scene 01 — The Noise").
- Photography: full-bleed, warm, slightly grainy shots (window light, a walk outdoors, hands around tea, a path through tall grass). Anna's portrait framed like a film still.

## Scenes (top to bottom)
1. **Opening title** — full-screen image of a sunlit path with a slow zoom. Giant "Your *fresh step* forward starts here." fades in word by word. Letterbox bars at top and bottom. One button: Book a free consultation.
2. **"The noise"** — black screen, the "you should eat healthy, be fit, clear skin…" lines drift in and fade one after another, then resolve to "Feeling heard is already a fresh step."
3. **Meet Anna** — wide film-still portrait on one side, her story on the other, captioned like credits (Anna Soroka · RP, CRPO).
4. **The quote** — full-screen image, darkened, with the "You just have to take the next step" quote in huge italic.
5. **Specialties** — four large numbered panels that scroll sideways like a filmstrip, each with its own image.
6. **"Is this you?"** — the six experiences appear one line at a time as you scroll, large and centered.
7. **Not a leap. A step.** — ACT, CBT, DBT, Gottman as steps that rise as you scroll.
8. **Credentials + why me** — understated, like end credits.
9. **Final scene / contact** — warm sunset image, "Take your fresh step", the consultation form on a soft glass panel.
10. Footer styled as closing credits.

## Images to generate
Opening path, quote backdrop, four specialty images, contact sunset — all in one consistent warm, grainy film look. Keep the current portrait.

## Technical details
- Add the `motion` package for scroll-linked reveals, slow zoom, the horizontal filmstrip and word-by-word titles; respect reduced-motion settings.
- Dark tokens replace the light ones in `src/styles.css`; grain via a CSS overlay utility.
- Split sections into `src/components/site/*` files; `src/routes/index.tsx` composes them and keeps its head() metadata.
- Contact form stays front-end only.
