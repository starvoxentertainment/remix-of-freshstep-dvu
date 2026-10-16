# Fresh Step Therapy — Redesign

A calm, editorial one-page site for Anna Soroka, RP, keeping all her real copy and making it easy to read.

## Look and feel
- Palette: Sage & Clay — cream background (#F5F1EA), sage (#7C8C6E), clay accent for buttons (#C97B5A), warm charcoal text (#2E2A25).
- Type: Instrument Serif for headings (italic accents like "fresh step"), Work Sans for body text.
- Layout: editorial and spacious, with a zigzag rhythm. Soft organic shapes, plenty of white space, one clear "Book a Free Consultation" button.

## Sections (top to bottom)
1. Slim header: logo wordmark, a few anchor links, Book button.
2. Hero: split layout, "Your *fresh step* forward starts here", short intro, portrait of Anna with her name and RP credential.
3. Philosophy: large pull quote ("You don't have to have the whole path mapped out...") plus the philosophy text.
4. Specialties: 4 numbered items (Body Dysmorphia, Disordered Eating, Couples, Confidence) and "also here for" tags.
5. "Is this you?": checklist of six familiar experiences on a sage band.
6. Approach: "Not a leap. A step." with ACT, CBT, DBT, Gottman as a stepped staircase.
7. Why me + credentials (RP, MA, BA).
8. Getting started: three steps.
9. Contact: consultation form (name, email, message) — front-end only for now, shows a thank-you message.
10. Simple footer.

## Images
- Generate a warm placeholder portrait and a soft texture/botanical image. Swap in Anna's real photo later.

## Technical details
- Rewrite `src/routes/index.tsx` with section components under `src/components/site/`.
- Tokens in `src/styles.css` (oklch), fonts loaded via `<link>` in `__root.tsx`.
- Unique head() metadata on the index route; remove "Lovable App" defaults.
- Contact form has no backend yet; can connect it to Lovable Cloud email later.
