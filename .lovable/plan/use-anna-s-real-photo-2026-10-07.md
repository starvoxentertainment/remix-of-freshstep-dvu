# Use Anna's real photo

Replace the stand-in portrait in the "Meet Anna" scene with the uploaded photo of Anna.

## What changes
- The uploaded photo is small and square with a plain white wall, which would look flat and blurry in the dark, film-like page.
- Edit it with AI: extend it to a taller portrait shape (4:5) and replace the white wall with a warm, softly lit room in the site's golden, moody tones, adding gentle film grain.
- Keep Anna herself exactly as she is: face, hair, smile, blazer and top unchanged.
- Swap it into the "Meet Anna" scene, keeping the same framing, slow drift on scroll and "Anna Soroka · RP, CRPO" caption.
- Delete the old stand-in portrait.

## Check
- View the edited photo to make sure her likeness wasn't altered, and screenshot the section on the page.

## Technical details
- `imagegen--edit_image` on `user-uploads://image.png` at 1024x1280, saved to `src/assets/anna-real.jpg`; update the import in `src/routes/index.tsx` and remove `src/assets/anna.jpg`.
- Lighten the existing `sepia` filter on the portrait if it muddies her skin tones.
