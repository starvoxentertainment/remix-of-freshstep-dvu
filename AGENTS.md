<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Conventions

- Third-party page scripts (tag manager, analytics) are injected in the root shell in `src/routes/__root.tsx` — the head bootstrap plus the `<noscript>` fallback in `<body>` — so every route carries them without duplicating the snippet per page.
- Analytics events go to the GTM dataLayer via `src/lib/analytics.ts` (one delegated click listener + route-change page views); GA4 tags/triggers live in the GTM container, not in site code — keeps tracking config editable without deploys.
