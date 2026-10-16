// Pushes named events to the GTM data layer. GA4 tags live in the GTM container, not here.
type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window { dataLayer?: unknown[] }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function trackPageView() {
  track("page_view_virtual", {
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
    page_location: window.location.href,
  });
}

function clickLocation(el: Element) {
  if (el.closest("header")) return "nav";
  if (el.closest("footer")) return "footer";
  const section = el.closest("section[id]");
  return section?.id || "page";
}

/** One site-wide click listener: classifies every link/button click. Returns cleanup. */
export function startClickTracking() {
  const onClick = (e: MouseEvent) => {
    const el = (e.target as Element | null)?.closest("a, button");
    if (!el || el.closest("form")) return; // form buttons are tracked as form events
    const text = (el.getAttribute("data-track-label") || el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 100);
    const href = el.getAttribute("href") || "";
    const explicit = el.getAttribute("data-track");
    const event =
      explicit ||
      (/book|consult/i.test(text) || href.endsWith("#contact") ? "cta_click" : "nav_click");
    track(event, {
      click_text: text,
      click_location: el.getAttribute("data-track-location") || clickLocation(el),
      click_destination: href,
      page_path: window.location.pathname,
    });
  };
  document.addEventListener("click", onClick, true);
  return () => document.removeEventListener("click", onClick, true);
}
