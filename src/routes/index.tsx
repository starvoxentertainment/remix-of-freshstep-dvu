import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteShell";
import { track } from "@/lib/analytics";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionConfig, type MotionValue } from "motion/react";
import anna from "@/assets/anna-real.jpg";
import annaHusband from "@/assets/anna-husband.jpg";
import annaKoba from "@/assets/anna-koba.jpg";
import tea from "@/assets/cozy-tea.jpg";
import plant from "@/assets/cozy-plant.jpg";
import mugs from "@/assets/cozy-mugs.jpg";
import walk from "@/assets/cozy-walk.jpg";

const TITLE = "Online Psychotherapy in Ontario — Anna Soroka, RP | Fresh Step Therapy";
const DESC =
  "Warm, judgment-free online therapy across Ontario for body image, body dysmorphia, disordered eating, confidence and couples with Anna Soroka, RP (CRPO). Book a free consultation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Fresh Step Therapy",
          description: DESC,
          areaServed: { "@type": "AdministrativeArea", name: "Ontario, Canada" },
          serviceType: ["Psychotherapy", "Online therapy", "Couples therapy"],
          founder: {
            "@type": "Person",
            name: "Anna Soroka",
            jobTitle: "Registered Psychotherapist",
            hasCredential: "Registered Psychotherapist, College of Registered Psychotherapists of Ontario (CRPO)",
          },
          knowsAbout: ["Body dysmorphia", "Body image", "Disordered eating", "Emotional eating", "Couples therapy", "Self-esteem", "Anxiety"],
        }),
      },
    ],
  }),
  component: Index,
});

const ease = [0.22, 1, 0.36, 1] as const;
const btn =
  "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_var(--primary)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_var(--primary)]";

function Hand({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`font-hand text-2xl text-primary md:text-3xl ${className}`}>{children}</span>;
}
function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-hand text-3xl text-primary">{children}</p>;
}

function Pop({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Blob({ className, y, color = "bg-sage/30" }: { className: string; y?: MotionValue<string>; color?: string }) {
  return (
    <motion.div
      aria-hidden
      style={y ? { y } : {}}
      animate={{ borderRadius: ["42% 58% 63% 37% / 45% 40% 60% 55%", "58% 42% 38% 62% / 55% 60% 40% 45%", "42% 58% 63% 37% / 45% 40% 60% 55%"] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute blur-2xl ${color} ${className}`}
    />
  );
}

function Wave({ fill, flip }: { fill: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={`block h-12 w-full md:h-20 ${flip ? "rotate-180" : ""}`} aria-hidden>
      <path d="M0 40 C 240 90 480 0 720 30 S 1200 80 1440 30 V80 H0 Z" className={fill} />
    </svg>
  );
}

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="paper min-h-screen overflow-x-clip">
        <Nav />
        <main>
          <Welcome />
          <Noise />
          <MeetAnna />
          <Quote />
          <Specialties />
          <IsThisYou />
          <Approach />
          <WhyMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 30));
  const link = "font-semibold text-foreground/80 transition hover:text-secondary";
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? "bg-background/85 shadow-sm backdrop-blur-lg" : ""}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-2xl text-secondary">
          Fresh <em className="text-primary">Step</em>
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          <Link to="/about" className={link}>About</Link>
          <a href="#specialties" className={link}>Specialties</a>
          <a href="#approach" className={link}>Approach</a>
          <Link to="/faq" className={link}>FAQ</Link>
        </nav>
        <a href="#contact" className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition hover:opacity-90">
          Book a free consult
        </a>
      </div>
    </header>
  );
}

function Welcome() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const words = ["Your", "fresh", "step", "forward", "starts", "here."];
  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-28 pb-16 md:pt-36">
      <Blob y={y1} className="-left-32 top-10 h-96 w-96" />
      <Blob y={y2} color="bg-accent/60" className="right-0 top-1/2 h-80 w-80" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm font-semibold uppercase tracking-[0.2em] text-sage-foreground/70">
            Anna Soroka · Registered Psychotherapist
          </motion.p>
          <h1 className="mt-5 text-6xl leading-[1] md:text-8xl">
            {words.map((w, i) => (
              <motion.span
                key={w}
                className={`mr-[0.2em] inline-block ${w === "fresh" || w === "step" ? "italic text-primary" : ""}`}
                initial={{ opacity: 0, y: 40, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.9, ease }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-8 max-w-xl text-lg leading-relaxed">
            A warm, judgment-free space for body image, food, confidence and relationships. You don't need
            to have it all figured out — just bring yourself.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#contact" className={btn}>Book a free consultation →</a>
            <a href="#about" className="font-semibold text-secondary underline decoration-primary decoration-2 underline-offset-8">Meet Anna</a>
          </motion.div>
        </div>
        <motion.div style={{ y: photoY }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1.2, ease }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-t-full bg-sage/40" />
          <img src={anna} alt="Anna Soroka smiling" width={1024} height={1280} className="relative aspect-[4/5] w-full rounded-t-full object-cover shadow-xl" />
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }} className="absolute -left-6 bottom-16 -rotate-6 md:-left-24">
            <Hand className="text-4xl">Hi, I'm Anna!</Hand>
            <svg width="70" height="40" viewBox="0 0 70 40" className="ml-24 text-primary" aria-hidden>
              <path d="M2 5 C 25 35, 45 35, 65 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M55 14 L66 20 L57 29" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const noiseLines = [
  "You should eat healthy.",
  "You should be fit.",
  "Clear skin. A flat stomach. Long, healthy hair.",
  "Or — love your body.",
  "Embrace every feature. Never hide anything.",
];
const noteStyles = [
  { c: "bg-accent", r: -6, x: "-18vw", y: "-24vh" },
  { c: "bg-sage-soft", r: 4, x: "16vw", y: "-18vh" },
  { c: "bg-card", r: -3, x: "-14vw", y: "8vh" },
  { c: "bg-card", r: 7, x: "18vw", y: "14vh" },
  { c: "bg-sage-soft", r: -8, x: "0vw", y: "-4vh" },
];

function Noise() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const finalOpacity = useTransform(scrollYProgress, [0.72, 0.82], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.72, 0.85], [0.85, 1]);
  return (
    <section ref={ref} className="relative h-[320vh]">
      <Wave fill="fill-sand" />
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-sand px-6">
        <p className="absolute top-24 font-hand text-3xl text-primary">Sound familiar?</p>
        {noiseLines.map((l, i) => (
          <Note key={l} text={l} i={i} p={scrollYProgress} />
        ))}
        <motion.h2 style={{ opacity: finalOpacity, scale: finalScale }} className="relative max-w-4xl text-center text-5xl leading-tight md:text-7xl">
          Feeling heard is already a <em className="text-primary">fresh step.</em>
        </motion.h2>
      </div>
    </section>
  );
}

function Note({ text, i, p }: { text: string; i: number; p: MotionValue<number> }) {
  const s = noteStyles[i]!;
  const start = i * 0.12;
  const opacity = useTransform(p, [start, start + 0.06, 0.65, 0.75], [0, 1, 1, 0]);
  const scale = useTransform(p, [start, start + 0.06], [1.4, 1]);
  const sweep = useTransform(p, [0.62, 0.75], ["0vw", i % 2 ? "70vw" : "-70vw"]);
  return (
    <motion.div style={{ opacity, scale, x: sweep, rotate: s.r, left: `calc(50% + ${s.x})`, top: `calc(50% + ${s.y})` }} className="absolute">
      <div className={`${s.c} w-64 -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg md:w-80`}>
        <p className="font-hand text-3xl leading-snug text-foreground md:text-4xl">{text}</p>
      </div>
    </motion.div>
  );
}

function MeetAnna() {
  return (
    <section id="about" className="relative">
      <Wave fill="fill-sand" flip />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <div className="space-y-6">
          <Pop><Eyebrow>Meet Anna</Eyebrow></Pop>
          <Pop delay={0.1}><h2 className="text-5xl leading-tight md:text-6xl">Hi, I'm Anna. <em className="text-primary">It's all about you.</em></h2></Pop>
          <Pop delay={0.2}>
            <p className="text-lg leading-relaxed">
              My own relationship with my body, weight and confidence hasn't always been easy, and living
              with Graves' disease added another layer. I know firsthand how hard it is when your body
              doesn't feel fully within your control.
            </p>
          </Pop>
          <Pop delay={0.3}>
            <p className="leading-relaxed text-muted-foreground">
              I hold a BA in Sociology and an MA in Counselling Psychology. My passion is supporting people
              with body dysmorphia, disordered eating, body image and confidence — so they can build a life
              rooted in their values, not defined by how they look. Outside the room: Pilates, my dog Koba,
              travelling, my husband, and simply being present.
            </p>
          </Pop>
        </div>
        <div className="relative mx-auto h-[560px] w-full max-w-lg">
          <Blob className="left-10 top-10 h-72 w-72" color="bg-sage/30" />
          <Polaroid src={annaHusband} alt="Anna with her husband by the water" caption="me & my husband ♡" className="left-0 top-0 w-64 md:w-72" rotate={-6} delay={0} pos="object-[55%_center]" />
          <Polaroid src={annaKoba} alt="Anna cuddling her dog Koba" caption="that's Koba! head of emotional support" className="bottom-0 right-0 w-64 md:w-72" rotate={5} delay={0.2} />
        </div>
      </div>
    </section>
  );
}

function Polaroid({ src, alt, caption, className, rotate, delay, pos = "" }: { src: string; alt: string; caption: string; className: string; rotate: number; delay: number; pos?: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 60, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay, ease }}
      className={`absolute ${className}`}
    >
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }} className="bg-card p-3 pb-4 shadow-xl">
        <img src={src} alt={alt} loading="lazy" width={1200} height={1500} className={`aspect-[4/5] w-full object-cover ${pos}`} />
        <figcaption className="mt-2 text-center font-hand text-2xl text-secondary">{caption}</figcaption>
      </motion.div>
    </motion.figure>
  );
}

function Quote() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section ref={ref} className="relative">
      <Wave fill="fill-sage-soft" />
      <div className="relative overflow-hidden bg-sage-soft px-6 py-24 text-center md:py-32">
        <svg viewBox="0 0 1200 200" className="absolute inset-x-0 bottom-6 h-40 w-full text-sage" aria-hidden>
          <motion.path d="M0 150 C 200 40, 350 190, 600 110 S 1000 30, 1200 120" stroke="currentColor" strokeWidth="4" strokeDasharray="2 14" strokeLinecap="round" fill="none" style={{ pathLength: draw }} />
        </svg>
        <Pop className="relative mx-auto max-w-4xl">
          <blockquote className="font-serif text-4xl italic leading-snug text-secondary md:text-6xl">
            “You don't have to have the whole path mapped out. You don't have to feel like you need to be
            fixed. You just have to take <span className="text-primary">the next step.</span>”
          </blockquote>
          <Hand className="mt-8 block">— Anna</Hand>
        </Pop>
      </div>
      <Wave fill="fill-sage-soft" flip />
    </section>
  );
}

const specialties = [
  { t: "Body Dysmorphia & Body Image", d: "For the constant checking, comparing and fixation on appearance — toward peace, not forced positivity.", img: plant, slug: "body-dysmorphia-therapy" },
  { t: "Disordered & Emotional Eating", d: "Breaking free from diet culture and cycles of restriction, bingeing or food noise.", img: tea, slug: "disordered-eating-therapy" },
  { t: "Couples Therapy", d: "Communication, trust, conflict and reconnection, grounded in the Gottman Method.", img: mugs, slug: "couples-therapy" },
  { t: "Confidence & Self-Worth", d: "Perfectionism, burnout, and self-worth tied to appearance or achievement.", img: walk, slug: "confidence-self-esteem-therapy" },
];

function Specialties() {
  return (
    <section id="specialties" className="mx-auto max-w-7xl px-6 py-24">
      <Pop><Eyebrow>What I specialize in</Eyebrow></Pop>
      <Pop delay={0.1}><h2 className="mt-2 text-5xl md:text-6xl">Support shaped by <em className="text-primary">listening.</em></h2></Pop>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {specialties.map((s, i) => (
          <Pop key={s.t} delay={i * 0.12}>
            <motion.article whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }} className="h-full overflow-hidden rounded-[2rem] bg-card shadow-md">
              <img src={s.img} alt="" loading="lazy" width={896} height={1024} className="aspect-[4/3] w-full rounded-b-[2rem] object-cover" />
              <div className="p-6">
                <h3 className="text-2xl leading-tight">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <a href={`/${s.slug}`} data-track="specialty_click" data-track-label={s.t} className="mt-4 inline-block text-sm font-semibold text-secondary underline decoration-primary underline-offset-4">Learn more →</a>
              </div>
            </motion.article>
          </Pop>
        ))}
      </div>
      <Pop className="mt-12 flex flex-wrap items-center gap-3">
        <Hand className="mr-2">also here for:</Hand>
        {["Anxiety", "Trauma", "Depression", "Addiction-related concerns", "General therapy"].map((t) => (
          <span key={t} className="rounded-full bg-sage-soft px-4 py-2 text-sm font-semibold text-secondary">{t}</span>
        ))}
      </Pop>
    </section>
  );
}

function IsThisYou() {
  const items = [
    "Constant food noise or scrutinizing your body",
    "Fear around “forbidden” foods",
    "Guilt that follows you after eating",
    "Cycles of restriction and bingeing",
    "Self-worth tied to body shape or weight",
    "Avoiding social events over body image anxiety",
  ];
  return (
    <section className="bg-sand">
      <Wave fill="fill-background" flip />
      <div className="mx-auto max-w-4xl px-6 py-24">
        <Pop className="text-center"><Eyebrow>Is this you?</Eyebrow></Pop>
        <ul className="mt-10 space-y-4">
          {items.map((t, i) => (
            <Pop key={t} delay={i * 0.05}>
              <li className="flex items-center gap-5 rounded-full bg-card px-6 py-4 shadow-sm">
                <svg viewBox="0 0 32 32" className="h-9 w-9 shrink-0" aria-hidden>
                  <circle cx="16" cy="16" r="15" className="fill-sage-soft" />
                  <motion.path d="M9 16.5 L14 21 L23 11" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-secondary"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }} />
                </svg>
                <span className="text-lg">{t}</span>
              </li>
            </Pop>
          ))}
        </ul>
        <Pop className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-lg leading-relaxed">
            If any of this feels familiar, you're in the right place. You don't need “love your body”
            positivity forced on you. You need peace — and a relationship with food, your body and
            yourself that actually functions.
          </p>
        </Pop>
      </div>
      <Wave fill="fill-background" />
    </section>
  );
}

function Approach() {
  const a = [
    ["ACT", "Acceptance & Commitment — psychological flexibility so hard thoughts have less power over your actions."],
    ["CBT", "Cognitive Behavioural — reshaping the thought patterns behind anxiety and self-criticism."],
    ["DBT", "Dialectical Behaviour — practical skills for intense emotions and distress tolerance."],
    ["Gottman", "Research-backed couples work — communication, conflict, trust and connection."],
  ];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  return (
    <section id="approach" ref={ref} className="relative mx-auto max-w-7xl px-6 py-24">
      <Pop><Eyebrow>My approach</Eyebrow></Pop>
      <Pop delay={0.1}><h2 className="mt-2 text-6xl md:text-7xl">Not a leap. <em className="text-primary">A step.</em></h2></Pop>
      <div className="relative mt-16">
        <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="absolute inset-0 hidden h-full w-full text-primary md:block" aria-hidden>
          <motion.path d="M20 280 C 200 280, 220 200, 380 190 S 600 110, 720 90 S 900 20, 980 20" stroke="currentColor" strokeWidth="3" strokeDasharray="3 12" strokeLinecap="round" fill="none" style={{ pathLength: scrollYProgress }} />
        </svg>
        <div className="relative grid items-end gap-6 md:grid-cols-4">
          {a.map(([t, d], i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.18, ease }}
              style={{ marginBottom: `${i * 3}rem` }}
              className="rounded-[2.5rem] bg-card p-7 shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-soft font-serif text-xl text-secondary">{i + 1}</span>
              <h3 className="mt-4 text-3xl text-primary">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMe() {
  const creds = [
    ["Registered Psychotherapist", "CRPO · ~4 years clinical experience"],
    ["Master of Arts, Counselling Psychology", "Yorkville University · 2019–2021"],
    ["Bachelor of Arts, Sociology", "York University · 2011–2017"],
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center">
      <Pop><Eyebrow>Why me</Eyebrow></Pop>
      <Pop delay={0.1}><h2 className="mt-2 text-5xl md:text-6xl">No judgment, <em className="text-primary">ever.</em></h2></Pop>
      <Pop delay={0.2} className="mx-auto mt-6 max-w-2xl">
        <p className="text-lg leading-relaxed">
          A space to be honest — including about the things you haven't said out loud anywhere else.
          I bring lived understanding, not theory alone.
        </p>
      </Pop>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {creds.map(([t, d], i) => (
          <Pop key={t} delay={i * 0.1}>
            <div className="h-full rounded-[2rem] bg-sage-soft p-8">
              <p className="font-serif text-2xl text-secondary">{t}</p>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          </Pop>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const started = useRef(false);
  const onStart = () => {
    if (started.current) return;
    started.current = true;
    track("form_start", { form_name: "consultation", page_path: window.location.pathname });
  };
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement | null)?.value.trim();
    track("generate_lead", { form_name: "consultation", page_path: window.location.pathname, has_message: Boolean(msg) });
    setSent(true);
  };
  const field = "w-full rounded-2xl border border-input bg-card px-5 py-4 outline-none placeholder:text-muted-foreground focus:border-secondary";
  const steps = ["Reach out", "Free consultation", "First session"];
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24">
      <Blob className="-right-20 top-0 h-96 w-96" color="bg-accent/60" />
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <Pop><Eyebrow>Getting started</Eyebrow></Pop>
          <Pop delay={0.1}><h2 className="mt-2 text-6xl leading-tight md:text-7xl">Take your <em className="text-primary">fresh step.</em></h2></Pop>
          <ol className="mt-10 space-y-5">
            {steps.map((s, i) => (
              <Pop key={s} delay={0.2 + i * 0.1}>
                <li className="flex items-center gap-5 text-xl font-semibold">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-serif text-secondary-foreground">{i + 1}</span>{s}
                </li>
              </Pop>
            ))}
          </ol>
        </div>
        <Pop delay={0.2}>
          <div className="rounded-[2.5rem] bg-accent p-8 shadow-xl md:p-10">
            {sent ? (
              <p className="font-serif text-3xl text-secondary">Thank you — Anna will be in touch soon. ♡</p>
            ) : (
              <form onSubmit={submit} onFocus={onStart} className="space-y-4">
                <p className="font-hand text-3xl text-secondary">Book a free, confidential consultation</p>
                <input required placeholder="Your name" className={field} />
                <input required type="email" placeholder="Email" className={field} />
                <textarea name="message" rows={4} placeholder="What brings you here? (optional)" className={field} />
                <button className="w-full rounded-full bg-secondary px-7 py-4 font-semibold text-secondary-foreground transition hover:opacity-90">Request consultation →</button>
              </form>
            )}
          </div>
        </Pop>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <Wave fill="fill-secondary" />
      <SiteFooter />
    </>
  );
}
