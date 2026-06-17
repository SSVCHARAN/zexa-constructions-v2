import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zexa — Builders of Quiet Precision" },
      {
        name: "description",
        content:
          "Zexa is a builders and construction studio crafting residential, commercial, renovation, and interior works defined by material honesty and structural rigor.",
      },
      { property: "og:title", content: "Zexa — Builders of Quiet Precision" },
      {
        property: "og:description",
        content:
          "Residential, commercial, renovation, and interior construction defined by material honesty and structural rigor.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

type Category = "All" | "Residential" | "Commercial" | "Renovation" | "Interior";

type Project = {
  title: string;
  meta: string;
  category: Exclude<Category, "All">;
  img: string;
  alt: string;
  span: string;
  aspect: string;
  offset?: string;
};

const projects: Project[] = [
  {
    title: "Ligneous House",
    meta: "Residential / 2023",
    category: "Residential",
    img: project1,
    alt: "Concrete house in a misty forest",
    span: "md:col-span-8",
    aspect: "aspect-[3/2]",
  },
  {
    title: "The Void Gallery",
    meta: "Commercial / 2024",
    category: "Commercial",
    img: project2,
    alt: "Travertine staircase in soft morning light",
    span: "md:col-span-4",
    aspect: "aspect-[2/3]",
    offset: "md:mt-48",
  },
  {
    title: "Unit 402 Refinement",
    meta: "Interior / 2024",
    category: "Interior",
    img: project3,
    alt: "Minimalist apartment interior",
    span: "md:col-span-7 md:col-start-2",
    aspect: "aspect-[16/9]",
  },
  {
    title: "Marina Heights",
    meta: "Residential / 2023",
    category: "Residential",
    img: project4,
    alt: "Modern residential tower at golden hour",
    span: "md:col-span-5 md:col-start-9 md:-mt-32",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Halcyon Atelier",
    meta: "Commercial / 2022",
    category: "Commercial",
    img: project5,
    alt: "Warm timber-clad office interior",
    span: "md:col-span-8",
    aspect: "aspect-[3/2]",
  },
  {
    title: "Cobblestone No. 14",
    meta: "Renovation / 2024",
    category: "Renovation",
    img: project6,
    alt: "Heritage stone facade with modern insertion",
    span: "md:col-span-4 md:mt-32",
    aspect: "aspect-[4/5]",
  },
];

const services = [
  {
    n: "01",
    title: "Residential Construction",
    body: "Ground-up family homes and private residences executed with structural rigor and tactile material care.",
  },
  {
    n: "02",
    title: "Commercial Builds",
    body: "Workplaces, retail, and hospitality interiors that hold their value through restraint and detail.",
  },
  {
    n: "03",
    title: "Renovation & Restoration",
    body: "Considered interventions into existing fabric — modernizing without erasing what came before.",
  },
  {
    n: "04",
    title: "Interior Fit-Out",
    body: "Joinery, stone, and finish work delivered to millimetric tolerances by our in-house craftsmen.",
  },
];

const process = [
  { n: "I", title: "Consult", body: "Site study, brief, feasibility." },
  { n: "II", title: "Design", body: "Drawings, materials, budget." },
  { n: "III", title: "Build", body: "Self-performed, on schedule." },
  { n: "IV", title: "Handover", body: "Walkthrough, snag, warranty." },
];

const testimonials = [
  {
    quote:
      "Zexa delivered on a brief most builders would have softened. The detail and the silence in the finished work speak for themselves.",
    name: "A. Iyer",
    role: "Private Client, Bengaluru",
  },
  {
    quote:
      "Calm, exact, never theatrical. Our office reads as the building we always wanted but could never quite describe.",
    name: "Studio Mehra",
    role: "Architecture Practice",
  },
  {
    quote:
      "They restored a hundred-year-old structure as if they had built it themselves. Rare patience, rare craft.",
    name: "R. Khan",
    role: "Heritage Property Owner",
  },
];

const filters: Category[] = ["All", "Residential", "Commercial", "Renovation", "Interior"];

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.19, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Index() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="font-display text-2xl font-bold tracking-tighter">
            ZEXA
          </a>
          <div className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.2em] md:flex">
            <a href="#work" className="transition-colors hover:text-accent">Work</a>
            <a href="#services" className="transition-colors hover:text-accent">Services</a>
            <a href="#process" className="transition-colors hover:text-accent">Process</a>
            <a href="#contact" className="transition-colors hover:text-accent">Contact</a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground px-5 py-2.5 text-background transition-all hover:bg-accent"
            >
              WhatsApp
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-background md:hidden"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <main id="top">
        {/* Hero */}
        <header className="pt-24 pb-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 max-w-[1000px] animate-fade-up">
              <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                Architecture &amp; Construction — Est. 2012
              </span>
              <h1 className="text-balance font-display text-5xl leading-[0.9] tracking-tighter md:text-8xl">
                Quiet <span className="italic">precision</span> built for generations.
              </h1>
              <div className="mt-12 flex flex-wrap gap-8">
                <a
                  href="#work"
                  className="border-b-2 border-foreground pb-1 font-mono text-[11px] uppercase tracking-widest transition-all hover:border-accent hover:text-accent"
                >
                  View Selected Work
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-2 border-foreground pb-1 font-mono text-[11px] uppercase tracking-widest transition-all hover:border-accent hover:text-accent"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="w-full animate-fade-up [animation-delay:200ms]">
              <img
                src={heroImg}
                alt="Minimalist concrete villa at dusk with warm interior lighting"
                width={1920}
                height={832}
                className="h-[60vh] w-full object-cover"
              />
              <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>The Malaparte Project</span>
                <span>2024 / Residential</span>
              </div>
            </div>
          </div>
        </header>

        {/* About + Stats */}
        <section id="about" className="border-b border-border py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 md:grid-cols-12">
            <FadeIn className="md:col-span-5">
              <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                The Studio
              </span>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                We translate architectural intent into physical permanence.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} className="md:col-span-6 md:col-start-7">
              <p className="mb-16 max-w-prose text-lg leading-relaxed text-muted-foreground">
                Founded on the principles of material honesty and structural rigor, Zexa
                specializes in residential, commercial, and renovation works that prioritize
                silence over noise. We self-perform the difficult parts, and we believe the best
                building is the one that feels inevitable.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
                {[
                  ["12", "Years Active"],
                  ["84", "Built Projects"],
                  ["250k", "Sq.Ft Crafted"],
                  ["06", "Design Awards"],
                ].map(([n, label]) => (
                  <div key={label} className="space-y-1">
                    <span className="block font-display text-3xl md:text-4xl">{n}</span>
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-b border-border py-32">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn className="mb-20 flex items-end justify-between">
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Capabilities
                </span>
                <h2 className="font-display text-4xl tracking-tight md:text-5xl">
                  What we build.
                </h2>
              </div>
              <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">
                01 — 04
              </span>
            </FadeIn>
            <div className="divide-y divide-border border-y border-border">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.05}>
                  <div className="group grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:items-baseline md:py-12">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent md:col-span-1">
                      {s.n}
                    </span>
                    <h3 className="font-display text-2xl italic transition-colors group-hover:text-accent md:col-span-5 md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="max-w-prose text-base leading-relaxed text-muted-foreground md:col-span-6">
                      {s.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="work" className="py-32">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn className="mb-24 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Selection
                </span>
                <h2 className="font-display text-4xl italic tracking-tight md:text-5xl">
                  Selected Frames
                </h2>
              </div>
              <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={
                      filter === f
                        ? "border-b border-foreground pb-1 text-foreground"
                        : "pb-1 transition-colors hover:text-foreground"
                    }
                  >
                    {f}
                  </button>
                ))}
              </div>
            </FadeIn>

            <div className="grid grid-cols-12 gap-x-6 gap-y-20 md:gap-y-32">
              {visible.map((p, i) => (
                <FadeIn
                  key={p.title}
                  delay={i * 0.05}
                  className={`col-span-12 ${p.span} ${p.offset ?? ""} group cursor-pointer`}
                >
                  <div className="mb-6 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.alt}
                      loading="lazy"
                      className={`w-full ${p.aspect} object-cover transition-transform duration-700 group-hover:scale-[1.03]`}
                    />
                  </div>
                  <div className="flex flex-col gap-2 border-t border-border pt-4 md:flex-row md:items-baseline md:justify-between">
                    <span className="font-display text-xl md:text-2xl">{p.title}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.meta}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-y border-border bg-muted py-32">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn className="mb-20 max-w-2xl">
              <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                Method
              </span>
              <h2 className="font-display text-4xl tracking-tight md:text-5xl">
                Four movements, one standard.
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
              {process.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.06} className="bg-muted">
                  <div className="flex h-full flex-col gap-8 p-8 md:p-10">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {p.n}
                    </span>
                    <h3 className="font-display text-3xl italic">{p.title}</h3>
                    <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-6">
            <FadeIn className="mb-20">
              <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                In Their Words
              </span>
              <h2 className="max-w-3xl font-display text-4xl tracking-tight md:text-5xl">
                Clients return because the work holds.
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.08}>
                  <figure className="flex h-full flex-col border-t border-border pt-8">
                    <blockquote className="font-display text-xl leading-snug italic md:text-2xl">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-auto pt-10 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      <span className="block text-foreground">{t.name}</span>
                      <span>{t.role}</span>
                    </figcaption>
                  </figure>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Band */}
        <section id="contact" className="mt-16 bg-accent py-32 text-accent-foreground">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <FadeIn>
              <span className="mb-8 block font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                Begin
              </span>
              <h2 className="mb-12 text-balance font-display text-4xl tracking-tighter md:text-7xl">
                Have a project in mind?
              </h2>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-background px-10 py-5 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Start a WhatsApp Consultation
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <span className="mb-4 block font-display text-3xl font-bold tracking-tighter">
                  ZEXA
                </span>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Builders of quiet, durable architecture. Residential, commercial, renovation,
                  and interior work — self-performed.
                </p>
              </div>
              <div className="md:col-span-3 md:col-start-7">
                <span className="mb-4 block font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  Studio
                </span>
                <a href="#work" className="block py-1 text-sm hover:text-accent">Work</a>
                <a href="#services" className="block py-1 text-sm hover:text-accent">Services</a>
                <a href="#process" className="block py-1 text-sm hover:text-accent">Process</a>
              </div>
              <div className="md:col-span-3">
                <span className="mb-4 block font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                  Contact
                </span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-1 text-sm hover:text-accent"
                >
                  +91 73370 36740
                </a>
                <span className="block py-1 text-sm text-muted-foreground">
                  Mon — Sat, 9:30 to 18:00
                </span>
              </div>
            </div>
            <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 font-mono text-[9px] uppercase tracking-widest text-muted-foreground md:flex-row md:items-center md:justify-between">
              <span>© {new Date().getFullYear()} Zexa Builders</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </footer>
      </main>

      {/* WhatsApp FAB */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Zexa on WhatsApp"
        className="fixed bottom-6 right-6 z-[60] flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-xl transition-all hover:scale-105 hover:bg-accent"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
