import { createFileRoute } from "@tanstack/react-router";
import { PageShell, BookCta } from "@/components/SiteShell";

const TITLE = "Online Therapy in Ontario: Common Questions — Fresh Step Therapy";
const DESC =
  "How online therapy with Anna Soroka, RP (CRPO) works: the free consultation, sessions by video across Ontario, fees, insurance receipts and what to expect.";

// Items marked [CONFIRM] need real details from Anna before publishing.
const FAQS = [
  { q: "How does the free consultation work?", a: "It's a short, no-pressure conversation to talk about what's bringing you in and see whether we're a good fit. Request one using the form on the homepage and Anna will be in touch." },
  { q: "Are sessions online?", a: "Yes. All sessions are held by secure video, so you can join from anywhere in Ontario." },
  { q: "Who can book?", a: "Adults and couples living in Ontario. Because Anna is registered with the CRPO, she can provide therapy to clients located in Ontario." },
  { q: "How much does a session cost?", a: "[CONFIRM] Session fees and length will be listed here. Ask during your free consultation in the meantime." },
  { q: "Is therapy covered by insurance?", a: "[CONFIRM] Many extended health plans in Ontario cover services from a Registered Psychotherapist. Check your plan for 'psychotherapist' coverage. Receipts details to be confirmed." },
  { q: "What happens in the first session?", a: "We'll get to know each other, talk about what you'd like to change, and start shaping goals together — at your pace." },
  { q: "Is what I share confidential?", a: "Yes. What you share stays private, with the limited legal exceptions that apply to all regulated health professionals in Ontario, which Anna will explain at the start." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <PageShell>
      <p className="font-hand text-3xl text-primary">Getting started</p>
      <h1 className="mt-2 text-5xl leading-tight md:text-6xl">Common questions</h1>
      <dl className="mt-10 space-y-8">
        {FAQS.map((f) => (
          <div key={f.q}>
            <dt className="text-2xl font-serif text-secondary">{f.q}</dt>
            <dd className="mt-2 leading-relaxed text-muted-foreground">{f.a}</dd>
          </div>
        ))}
      </dl>
      <BookCta />
    </PageShell>
  );
}
