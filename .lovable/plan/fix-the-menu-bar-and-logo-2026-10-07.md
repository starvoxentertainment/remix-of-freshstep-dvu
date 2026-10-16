# Fix the menu bar and logo

## What's wrong
The logo and "Book a consult" link use a color-inverting effect so they show up on both light and dark backgrounds. At the top of the page they sit right on the edge between the black letterbox bar and the sunset photo. That makes the text look split, faded and grey, so it looks broken. Over the other photos further down, the colors also flip in odd ways.

## Fix
- Remove the color-inverting effect. Use solid cream text for the logo and links.
- Give the bar a subtle dark see-through background with a soft blur and a thin bottom line. It stays transparent at the very top of the page, then fades in once you start scrolling, so it reads clearly over any photo.
- Make the top letterbox bar line up with the menu bar's height, so the logo no longer straddles the edge.
- Tidy the menu: logo on the left; About, Specialties and Approach links in the middle (on larger screens); a small clay-outlined "Book a consult" button on the right.
- Check the bar at the top, over the photos and over the dark sections, on desktop and phone.

## Technical details
- In `src/routes/index.tsx` `Nav`: drop `mix-blend-difference`; use `useScroll`/`useMotionValueEvent` to toggle a `bg-background/70 backdrop-blur border-b` state after ~40px.
- Set the hero's top letterbox height to match the header (about 80px) instead of `5vh`.
