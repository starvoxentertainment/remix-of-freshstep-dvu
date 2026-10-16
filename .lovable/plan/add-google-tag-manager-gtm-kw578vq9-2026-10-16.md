# Add Google Tag Manager (GTM-KW578VQ9)

## What I'll do

Install your Google Tag Manager container on every page of the site, in the two places Google requires:

1. **The tracking script** goes as high as possible in the page `<head>`, before anything else loads.
2. **The `<noscript>` fallback** (for visitors with JavaScript off) goes immediately at the top of the page `<body>`, as an invisible zero-size frame.

The container ID `GTM-KW578VQ9` is written exactly as you pasted it, and the same code serves every page — the homepage and anything added later — because it lives in the site's shared page shell rather than in one page.

Nothing else on the page changes: no visual, content, or layout edits.

## How I'll check it worked

- Load the running site in a headless browser and confirm the tag manager actually boots: the `dataLayer` queue exists, the `googletagmanager.com/gtm.js?id=GTM-KW578VQ9` request is made, and the invisible fallback frame sits at the top of the body.
- Take a screenshot of the page afterwards to confirm nothing shifted visually.
- You can then verify in Google Tag Manager's own **Preview** mode: open the site with preview enabled and the container should connect.

## Technical details

**File touched:** `src/routes/__root.tsx` (the root shell that renders `<html>`, `<head>`, `<body>` for every route). No new files, no new packages.

The shell currently looks like this:

```text
<html lang="en">
  <head>
    <HeadContent />
  </head>
  <body>
    {children}
    <Scripts />
  </body>
</html>
```

It becomes:

```text
<html lang="en">
  <head>
    <script> GTM bootstrap + gtm.js?id=GTM-KW578VQ9 loader </script>
    <HeadContent />
  </head>
  <body>
    <noscript><iframe src=".../ns.html?id=GTM-KW578VQ9" hidden /></noscript>
    {children}
    <Scripts />
  </body>
</html>
```

Notes on the approach:

- The container ID is held in one constant at the top of the file, so swapping or removing it later is a one-line change.
- The inline bootstrap is injected as a literal string so it runs in place, before the app's own bundles — matching Google's "as high in the head as possible" requirement. It renders identically on the server and in the browser, so there is no hydration mismatch.
- The `<noscript>` frame stays in `<body>` (putting it in `<head>` breaks the SSR HTML parser).
- It loads on every environment, including the editor preview, so you can confirm it in GTM Preview right away. If you would rather keep preview and remix traffic out of your reports, say so and I'll gate it to the published domain only — also a one-line change.
- No automated test is added: this is markup, not business logic.

## After this

The container is installed but empty until you publish tags inside it. Once you publish the site, the tags you've configured in Tag Manager (Google Analytics, ads, pixels) will start firing on the live URL.
