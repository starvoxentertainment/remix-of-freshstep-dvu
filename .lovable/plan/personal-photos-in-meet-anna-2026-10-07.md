# Personal photos in "Meet Anna"

Add the two new photos (Anna with her husband by the water, Anna with her dog Koba) to the About section so the "outside the room" part of her story comes to life.

## Layout
- Keep the main portrait and her story as they are.
- Below them, add a small "Outside the room" strip: two photos side by side, slightly overlapping and tilted like film stills pinned to a board, each with a small credit-style caption:
  - "With my husband"
  - "Koba, head of emotional support"
- On phones they stack, one under the other.
- They fade and drift in gently as you scroll, matching the rest of the page.

## Photo treatment
- Same warm, slightly grainy film look as the rest of the site, so the casual phone shots blend in.
- Faces, the dog and the people stay exactly as they are — only colour/warmth and cropping change. The couple photo is cropped closer to the two of them; the dog selfie is cropped to a portrait frame.

## Technical details
- Upload both images as hosted assets, warm-grade them with the image edit tool (preserve identity), and import them in the MeetAnna section of `src/routes/index.tsx`.
- Use the existing `Reveal` animation and scroll parallax; alt text describes each photo.
