import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SPECIALTIES, type Specialty } from "@/lib/specialties";

export function SiteHeader() {
  const link = "font-semibold text-foreground/80 transition hover:text-secondary";
  return (
    <header className="sticky top-0 z-50 bg-background/85 shadow-sm backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-serif text-2xl text-secondary">
          Fresh <em className="text-primary">Step</em>
        </Link>
        <nav className="hidden gap-8 text-sm md:flex">
          <Link to="/about" className={link}>About</Link>
          <Link to="/" hash="specialties" className={link}>Specialties</Link>
          <Link to="/faq" className={link}>FAQ</Link>
        </nav>
        <Link to="/" hash="contact" className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition hover:opacity-90">
          Book a free consult
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-secondary px-6 py-16 text-center text-secondary-foreground">
      <p className="font-serif text-3xl">Fresh <em className="text-primary">Step</em> Therapy</p>
      <p className="mt-2 font-hand text-2xl">with Anna Soroka, RP</p>
      <nav className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        {SPECIALTIES.map((s) => (
          <a key={s.slug} href={`/${s.slug}`} className="underline-offset-4 hover:underline">{s.name}</a>
        ))}
        <Link to="/about" className="underline-offset-4 hover:underline">About Anna</Link>
        <Link to="/faq" className="underline-offset-4 hover:underline">FAQ</Link>
      </nav>
      <p className="mt-6 text-sm opacity-80">Online psychotherapy across Ontario · © {new Date().getFullYear()}</p>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function BookCta() {
  return (
    <div className="mt-16 rounded-[2rem] bg-accent p-8 text-center">
      <p className="font-serif text-3xl text-secondary">Ready for your fresh step?</p>
      <p className="mt-2 text-muted-foreground">A free, confidential consultation — online, anywhere in Ontario.</p>
      <Link to="/" hash="contact" className="mt-6 inline-flex rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground">
        Book a free consultation →
      </Link>
    </div>
  );
}

export function SpecialtyPage({ s }: { s: Specialty }) {
  return (
    <PageShell>
      <p className="font-hand text-3xl text-primary">Online therapy · Ontario</p>
      <h1 className="mt-2 text-5xl leading-tight md:text-6xl">{s.name}</h1>
      <p className="mt-6 text-lg leading-relaxed">{s.intro}</p>
      <h2 className="mt-12 text-3xl">Does this sound like you?</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
        {s.signs.map((x) => <li key={x}>{x}</li>)}
      </ul>
      <h2 className="mt-12 text-3xl">How we'll work together</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
        {s.how.map((x) => <li key={x}>{x}</li>)}
      </ul>
      <p className="mt-8 leading-relaxed">
        Sessions are with <Link to="/about" className="text-secondary underline">Anna Soroka</Link>, a Registered
        Psychotherapist with the College of Registered Psychotherapists of Ontario (CRPO), held securely online
        for clients anywhere in Ontario.
      </p>
      <h2 className="mt-12 text-3xl">Common questions</h2>
      <dl className="mt-4 space-y-6">
        {s.faqs.map((f) => (
          <div key={f.q}>
            <dt className="font-semibold">{f.q}</dt>
            <dd className="mt-1 text-muted-foreground">{f.a}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6"><Link to="/faq" className="text-secondary underline">More questions about getting started →</Link></p>
      <BookCta />
    </PageShell>
  );
}

export function specialtyHead(slug: string) {
  const s = SPECIALTIES.find((x) => x.slug === slug)!;
  return {
    meta: [
      { title: s.title },
      { name: "description", content: s.description },
      { property: "og:title", content: s.title },
      { property: "og:description", content: s.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/${slug}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `/${slug}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: s.name, item: `/${slug}` },
          ],
        }),
      },
    ],
  };
}

export function getSpecialty(slug: string) {
  return SPECIALTIES.find((x) => x.slug === slug)!;
}
