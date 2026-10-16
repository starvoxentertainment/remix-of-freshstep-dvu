# GA4 tracking through Google Tag Manager

Goal: every button/link click, every page change, and the consultation form submission show up in GA4, all sent through your existing GTM container (GTM-KW578VQ9). No GA4 code goes directly on the site.

## 1. Site sends clear events to Tag Manager
The site pushes these named events into Tag Manager's data layer:

| Event | When | Details sent |
|---|---|---|
| `page_view_virtual` | Every page change (home, About, FAQ, 4 specialty pages), plus first load | page path, page title |
| `cta_click` | Any "Book a free consultation" / "Book a free consult" button | button text, location (nav, hero, page CTA, footer), destination |
| `nav_click` | Menu and footer links (About, Specialties, Approach, FAQ, specialty pages) | link text, location, destination |
| `specialty_click` | "Learn more" on homepage specialty cards | specialty name |
| `form_start` | First time someone types in the consultation form | form name |
| `generate_lead` | Consultation form successfully submitted | form name, page path, whether a message was written (never the name, email or message text) |

Buttons and links get small labels (`data-track`) so clicks are named consistently, and one site-wide listener sends them, so future buttons are tracked by adding a label.

## 2. Ready-to-import GTM setup file
A JSON file in Files you import into Tag Manager (Admin → Import Container → Merge). It contains:
- Variables: Data Layer variables for each detail above, plus a constant `GA4 Measurement ID` you fill in once.
- Triggers: one Custom Event trigger per event above.
- Tags: a GA4 Google Tag (config) firing on all pages, and one GA4 Event tag per event, passing the details as event parameters.
- Built-in page view is turned off on the Google tag so page changes aren't counted twice.

## 3. Short setup guide
A one-page guide: import steps, where to paste the G- ID, how to test with GTM Preview, which events to mark as Key Events in GA4 (`generate_lead`, `cta_click`), and registering the custom details as custom dimensions so they appear in reports.

## Technical details
- `src/lib/analytics.ts`: `track(event, params)` pushing to `window.dataLayer`.
- Route change listener in `__root.tsx` via router `onResolved` subscription.
- Delegated document click listener reading `data-track`, `data-track-location`, `data-track-label`.
- Contact form `onFocus`/`onSubmit` calls in `src/routes/index.tsx`; no personal data in events.
- Files: `/mnt/documents/gtm-ga4-container.json`, `/mnt/documents/ga4-setup-guide.md`.
