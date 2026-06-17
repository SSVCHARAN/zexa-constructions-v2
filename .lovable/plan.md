## Zexa — Premium Builders Website

A single-page, editorial-style marketing site for Zexa Builders. Aesthetic direction: premium, ascetic, modern — generous whitespace, large editorial typography, warm neutral palette (off-white, charcoal, muted concrete tones with a single refined accent), restrained motion, full-bleed architectural photography.

### Design direction
Before building, I'll generate 3 rendered design directions (locked to a premium minimal aesthetic) so you can pick the one to ship. Variants will differ in composition, density, and hero treatment — not in style category.

Typography: distinctive serif display + clean grotesk body (e.g. Instrument Serif + Inter-style). No generic AI gradients.

Palette: warm off-white background, deep charcoal text, concrete grey mid-tone, single warm accent (terracotta or burnished bronze).

### Sections (single landing page)
1. **Nav** — minimal logo wordmark "Zexa", thin section links, WhatsApp CTA button (right).
2. **Hero** — full-bleed architectural image, oversized editorial headline, short subline, primary WhatsApp CTA + secondary "View work" anchor.
3. **About + Stats** — short brand story; stat row (Years of experience, Projects delivered, Sq.ft built, Happy clients).
4. **Services** — 4 service cards: Residential Construction, Commercial Builds, Renovation & Remodeling, Interior Fit-out. Each with icon, short description.
5. **Projects portfolio** — asymmetric/masonry gallery of 6 generated project images with title + category overlay on hover. Filter chips (All / Residential / Commercial / Renovation) — client-side filter only.
6. **Trust builders** — 3-column "Our Process" (Consult → Design → Build → Handover), a testimonials block (3 quotes), and a small certifications/credentials strip.
7. **Contact CTA band** — bold full-width section: "Let's build something that lasts" + large WhatsApp CTA.
8. **Footer** — wordmark, brief address placeholder, social links, copyright.

### WhatsApp CTA
All "Contact" / "WhatsApp" buttons link to `https://wa.me/917337036740?text=Hi%20Zexa%2C%20I%27d%20like%20to%20discuss%20a%20project.` (opens in new tab). A persistent floating WhatsApp button bottom-right on all viewports.

### Imagery
Generate ~8 images via imagegen (fast tier, JPG, saved to `src/assets/`):
- 1 hero (modern architectural exterior, golden hour)
- 6 portfolio (mix: villa, apartment tower, office interior, retail facade, renovated heritage home, luxury interior)
- 1 about/process supporting image

### Technical
- TanStack Start; single route `src/routes/index.tsx` composed of section components in `src/components/sections/`.
- Define palette + font tokens in `src/styles.css` under `@theme`; load fonts via `<link>` in `src/routes/__root.tsx`.
- Update root `head()` and index `head()` with Zexa-specific SEO (title, meta description, OG tags, single H1 in hero).
- Use shadcn Button with a custom "whatsapp" variant; lucide icons for services/process.
- Subtle motion: fade/translate on scroll for section reveals (framer-motion), restrained — no parallax overload.
- Fully responsive; floating WhatsApp FAB.
- No backend / forms — all contact flows route to WhatsApp.

### Out of scope (call out if needed later)
- CMS / admin to edit projects
- Contact form, email integration, booking
- Blog, multi-page routing
- Real project photos (placeholders generated for now)

### Build flow
1. Generate 3 design directions → you pick one.
2. Generate images.
3. Implement tokens, sections, WhatsApp CTAs, SEO, FAB.
4. Verify in preview.
