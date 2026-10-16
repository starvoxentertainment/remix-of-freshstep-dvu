export type Specialty = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  signs: string[];
  how: string[];
  faqs: { q: string; a: string }[];
};

export const SPECIALTIES: Specialty[] = [
  {
    slug: "body-dysmorphia-therapy",
    name: "Body Dysmorphia & Body Image",
    title: "Body Dysmorphia Therapy Online in Ontario — Fresh Step Therapy",
    description:
      "Online therapy for body dysmorphia and body image concerns across Ontario with Anna Soroka, Registered Psychotherapist (CRPO). Book a free consultation.",
    intro:
      "If you spend hours checking mirrors, comparing yourself to others, or avoiding photos and plans because of how you look, you're not vain and you're not alone. Body dysmorphia and painful body image are real, and they can ease with the right support. Together we work toward peace with your body — not forced positivity.",
    signs: [
      "Frequent mirror checking, or avoiding mirrors altogether",
      "Constant comparison on social media or in public",
      "Fixating on a feature others barely notice",
      "Skipping events, photos or intimacy because of appearance",
      "Feeling your worth depends on how you look",
    ],
    how: [
      "Understanding the thoughts and habits that keep the fixation going",
      "Gently reducing checking, comparing and avoidance",
      "Building self-worth rooted in your values, not your appearance",
      "Self-compassion for the days that still feel hard",
    ],
    faqs: [
      { q: "Is body dysmorphia the same as low self-esteem?", a: "Not quite. Body dysmorphia involves intense, ongoing preoccupation with perceived flaws that takes up a lot of time and affects daily life. We'll explore what fits your experience — no label is required to get support." },
      { q: "Can body image therapy happen online?", a: "Yes. Sessions are held by secure video, so you can join from anywhere in Ontario, often from the comfort of your own home." },
    ],
  },
  {
    slug: "disordered-eating-therapy",
    name: "Disordered & Emotional Eating",
    title: "Disordered & Emotional Eating Therapy Online in Ontario — Fresh Step Therapy",
    description:
      "Online therapy for disordered eating, emotional eating, bingeing and food noise across Ontario with Anna Soroka, RP (CRPO). Book a free consultation.",
    intro:
      "Food can start to feel like a battle — rules, guilt, cycles of restriction and bingeing, or constant 'food noise'. Therapy is a space to step out of diet culture and rebuild a calmer, kinder relationship with food and your body.",
    signs: [
      "Strict food rules or feeling guilty after eating",
      "Cycles of restricting, then bingeing",
      "Eating to cope with stress, boredom or emotions",
      "Constant thoughts about food, weight or calories",
      "Feeling out of control around certain foods",
    ],
    how: [
      "Exploring what your eating patterns are trying to do for you",
      "Loosening food rules and the guilt that comes with them",
      "New ways to cope with difficult emotions",
      "Rebuilding trust with your body's signals",
    ],
    faqs: [
      { q: "Do I need an eating disorder diagnosis to get help?", a: "No. Many people struggle with their relationship with food without a formal diagnosis, and that struggle deserves support too." },
      { q: "Is online therapy right for eating concerns?", a: "For many people, yes. If more intensive or medical care is needed, Anna will help you find the right additional support." },
    ],
  },
  {
    slug: "couples-therapy",
    name: "Couples Therapy",
    title: "Online Couples Therapy in Ontario (Gottman Method) — Fresh Step Therapy",
    description:
      "Online couples therapy across Ontario grounded in the Gottman Method — communication, trust, conflict and reconnection — with Anna Soroka, RP (CRPO).",
    intro:
      "Every relationship hits hard stretches. Whether you're stuck in the same arguments, feeling distant, or rebuilding trust, couples therapy gives you both a space to be heard. Anna's work is grounded in the Gottman Method, a research-based approach to understanding and strengthening relationships.",
    signs: [
      "The same arguments keep coming back",
      "You feel more like roommates than partners",
      "Trust has been shaken",
      "Big life changes are adding strain",
      "You want to strengthen a good relationship before problems grow",
    ],
    how: [
      "Learning to talk about hard things without escalating",
      "Understanding each other's needs and triggers",
      "Repairing after conflict",
      "Rebuilding connection, fondness and trust",
    ],
    faqs: [
      { q: "Do both partners need to attend?", a: "Couples sessions are usually held together. If only one of you is ready, reach out and we can talk about options." },
      { q: "Can we do couples therapy online from different locations?", a: "Yes, as long as you're both in Ontario. Many couples join from the same room; some join from separate places." },
    ],
  },
  {
    slug: "confidence-self-esteem-therapy",
    name: "Confidence & Self-Worth",
    title: "Therapy for Confidence & Self-Esteem Online in Ontario — Fresh Step Therapy",
    description:
      "Online therapy for low self-esteem, perfectionism and burnout across Ontario with Anna Soroka, Registered Psychotherapist (CRPO). Book a free consultation.",
    intro:
      "When your worth feels tied to how you look or how much you achieve, nothing ever feels like enough. Therapy can help you quiet the inner critic, ease perfectionism and burnout, and build confidence that doesn't disappear on a bad day.",
    signs: [
      "A harsh inner critic that never lets up",
      "Perfectionism or fear of failing",
      "Burnout from always pushing harder",
      "Needing approval to feel okay",
      "Self-worth that rises and falls with appearance or achievement",
    ],
    how: [
      "Noticing and softening self-critical thoughts",
      "Setting boundaries and realistic standards",
      "Reconnecting with what actually matters to you",
      "Building steady, values-based confidence",
    ],
    faqs: [
      { q: "Is therapy only for serious problems?", a: "Not at all. Many people come to therapy simply because they want to feel better about themselves and live more freely." },
      { q: "How long does it take to feel more confident?", a: "It's different for everyone. Many people notice small shifts early on; we'll check in together on what's helping." },
    ],
  },
];
