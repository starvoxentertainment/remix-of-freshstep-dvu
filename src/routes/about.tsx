import { createFileRoute } from "@tanstack/react-router";
import { PageShell, BookCta } from "@/components/SiteShell";
import anna from "@/assets/anna-real.jpg";

const TITLE = "About Anna Soroka, Registered Psychotherapist (CRPO) — Fresh Step Therapy";
const DESC =
  "Meet Anna Soroka, RP (CRPO), MA Counselling Psychology — an online psychotherapist in Ontario supporting body image, disordered eating, confidence and couples.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <p className="font-hand text-3xl text-primary">Meet Anna</p>
      <h1 className="mt-2 text-5xl leading-tight md:text-6xl">Hi, I'm Anna. It's all about you.</h1>
      <img src={anna} alt="Anna Soroka, Registered Psychotherapist" width={1200} height={1500} className="mt-8 aspect-[4/3] w-full rounded-[2rem] object-cover" />
      <p className="mt-8 text-lg leading-relaxed">
        My own relationship with my body, weight and confidence hasn't always been easy, and living with Graves'
        disease added another layer. I know firsthand how hard it is when your body doesn't feel fully within your control.
      </p>
      <h2 className="mt-12 text-3xl">Training & registration</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>Registered Psychotherapist (RP) with the College of Registered Psychotherapists of Ontario (CRPO)</li>
        <li>MA in Counselling Psychology</li>
        <li>BA in Sociology</li>
        <li>About four years of clinical experience</li>
        <li>Couples work grounded in the Gottman Method</li>
      </ul>
      <h2 className="mt-12 text-3xl">My approach</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Warm, judgment-free and paced by you. My passion is supporting people with body dysmorphia, disordered
        eating, body image and confidence — so they can build a life rooted in their values, not defined by how they
        look. I also support anxiety, trauma, depression, addiction-related concerns and general therapy. All sessions
        are online, for clients anywhere in Ontario.
      </p>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Outside the room: Pilates, my dog Koba, travelling, my husband, and simply being present.
      </p>
      <BookCta />
    </PageShell>
  );
}
