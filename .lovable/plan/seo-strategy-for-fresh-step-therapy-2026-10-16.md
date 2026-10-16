# SEO strategy for Fresh Step Therapy

Goal: help people in Ontario who search for online therapy for body image, eating concerns, confidence and couples find Anna, and book a free consultation.

## 1. Research (first step of the build)
- Look up real search demand in Canada with Semrush for terms like "online therapist Ontario", "body dysmorphia therapist", "disordered eating therapy Ontario", "couples therapy online Ontario", "psychotherapist for self-esteem".
- Check 2-3 competing Ontario practices to see what they rank for.
- Save the results to a written strategy document (keywords, what each page targets, a 3-month to-do list) in Files.

## 2. Fix the basics
- Better homepage title and description that mention "Online Psychotherapy across Ontario".
- Add a share image (Anna's photo, sized for link previews).
- Add structured business info so Google knows this is a psychotherapy practice serving Ontario online (practitioner name, CRPO registration, services).
- Check robots.txt allows search engines. The sitemap gets added after the site is published and has its own address.

## 3. New pages (each with its own title, description and links to "Book a free consultation")
- /body-dysmorphia-therapy
- /disordered-eating-therapy
- /couples-therapy
- /confidence-self-esteem-therapy
- /about (Anna's training, CRPO registration, approach)
- /faq (cost, insurance coverage, how online sessions work, first session)
- Homepage specialty cards and footer link to these pages; a simple shared navigation is added.

Page text is written in Anna's warm voice from what's already on the site. Facts I don't have (fees, insurance details, session length) are left as clearly marked placeholders and listed for you to confirm, not invented.

## 4. Off-site steps (in the strategy document, for you to do)
- Publish the site and connect a domain.
- Set up Google Search Console and a Google Business Profile (service-area, Ontario).
- List Anna on Psychology Today, CRPO directory, and Canadian therapist directories.
- Ideas for future helpful articles based on the questions people search.

## Technical details
- New route files under src/routes with per-route head() (title, description, og tags, relative canonical).
- JSON-LD (ProfessionalService / Person) on the homepage; BreadcrumbList on specialty pages.
- og:image only where an absolute URL exists; otherwise omitted.
- Strategy doc saved to /mnt/documents/seo-strategy.md.
