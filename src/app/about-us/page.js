"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Target,
  Code2,
  LineChart,
  ShieldCheck,
  Workflow,
  Gauge,
  Search,
} from "lucide-react";

const smoothEase = [0.16, 1, 0.3, 1];

const philosophy = [
  {
    num: "01",
    title: "Strategy Before Design",
    desc: "A stunning interface that fails to convert is an expensive decoration. We dissect your business model, customer psychology, and acquisition funnels before crafting a single layout.",
    icon: Target,
  },
  {
    num: "02",
    title: "Design With Purpose",
    desc: "Our experiences prioritize absolute visual clarity, precise typographic hierarchies, and fluid micro-interactions. Every pixel earns its right to exist.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Engineering Without Limits",
    desc: "Engineered on resilient stacks like Next.js, React, and modern serverless infrastructure. We write pristine, scalable code designed for speed, reliability, and effortless growth.",
    icon: Code2,
  },
  {
    num: "04",
    title: "Business First",
    desc: "We measure our ultimate merit through your commercial acceleration. Technology exists to strengthen your brand, improve conversions, and support your bottom line.",
    icon: LineChart,
  },
];

const timeline = [
  {
    year: "2020",
    title: "Foundation & Core Engineering",
    desc: "Established as an independent engineering studio dedicated to high-performance web applications and bespoke digital architecture.",
  },
  {
    year: "2022",
    title: "Enterprise SaaS Expansion",
    desc: "Expanded internationally, working with technology-focused businesses to architect secure applications, cloud databases, and scalable digital ecosystems.",
  },
  {
    year: "2024",
    title: "WebMash Labs Rebrand",
    desc: "Unified advanced UI/UX design with full-stack engineering under the WebMash Labs studio model.",
  },
  {
    year: "2026+",
    title: "Next-Gen Digital Infrastructure",
    desc: "Expanding into AI-integrated workflows, high-performance deployments, and category-defining interactive digital experiences.",
  },
];

const stats = [
  {
    value: "140+",
    label: "Projects Delivered Globally",
  },
  {
    value: "98%",
    label: "Long-term Client Retention",
  },
  {
    value: "99",
    label: "Core Web Vitals Benchmark",
  },
];

const trustItems = [
  {
    title: "Verified Process",
    desc: "Rigorous agile sprints and transparent communication from discovery through launch.",
    icon: Workflow,
  },
  {
    title: "Long-term Partnership",
    desc: "Proactive support and continuous improvement for businesses that want to keep evolving.",
    icon: Target,
  },
  {
    title: "Performance Optimized",
    desc: "Performance-focused architecture designed for fast loading, smooth interactions, and strong Core Web Vitals.",
    icon: Gauge,
  },
  {
    title: "SEO Ready",
    desc: "Clean technical architecture, structured metadata, semantic HTML, and search-friendly implementation.",
    icon: Search,
  },
  {
    title: "Security First",
    desc: "Security-conscious architecture and modern deployment practices designed to protect digital assets.",
    icon: ShieldCheck,
  },
  {
    title: "Senior-Led Execution",
    desc: "Projects are approached with experienced engineering and design oversight from discovery to delivery.",
    icon: Code2,
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 35 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.8,
              delay,
              ease: smoothEase,
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="w-full overflow-hidden bg-[#0F172A] text-white selection:bg-[#2563EB] selection:text-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        aria-labelledby="about-hero-title"
        className="relative flex min-h-[720px] w-full items-center justify-center overflow-hidden bg-[#0F172A] px-6 py-32 sm:px-12 lg:min-h-[800px] lg:px-20"
      >
        {/* Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.20),transparent_60%)]"
        />

        {!shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.16, 0.24, 0.16],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute left-1/2 top-1/4 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/40 blur-[130px]"
          />
        )}

        {/* Floating Object */}
        {!shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            animate={{
              y: [-12, 12, -12],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[10%] top-[18%] hidden h-28 w-28 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl lg:block"
          />
        )}

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <Reveal className="max-w-[1150px]">

            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md">
              <Sparkles
                className="h-4 w-4 text-[#2563EB]"
                strokeWidth={1.5}
              />

              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#CBD5E1]">
                WebMash Labs Studio • Architectural Authority
              </span>
            </div>

            <h1
              id="about-hero-title"
              className="text-balance text-[clamp(3.2rem,7.5vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.055em] text-white"
            >
              We architect the digital apex for market leaders.
            </h1>

            <p className="mt-10 max-w-[64ch] text-lg font-light leading-relaxed text-[#CBD5E1] sm:text-2xl">
              WebMash Labs is an engineering and design studio focused on
              high-performance websites, digital products, and scalable web
              infrastructure built for ambitious businesses.
            </p>

            <div className="mt-14 flex flex-wrap items-center gap-8">

              <motion.a
                href="#genesis"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-10 py-5 text-lg font-medium text-white shadow-[0_0_45px_rgba(37,99,235,0.35)] transition-all duration-300 hover:bg-[#1d4ed8]"
              >
                <span>Explore Our Story</span>

                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </motion.a>

              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500"
                />

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#94A3B8]">
                  Enterprise Grade • Senior-Led
                </span>
              </div>

            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          GENESIS
      ========================================================= */}

      <section
        id="genesis"
        aria-labelledby="genesis-title"
        className="relative w-full overflow-hidden bg-[#F8FAFC] py-32 text-[#0F172A] sm:py-44 lg:py-52"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(#2563EB_1px,transparent_1px)] [background-size:40px_40px]"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
          <Reveal className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1.5 shadow-sm">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#64748B]">
                  Genesis • Who We Are
                </span>
              </div>

              <h2
                id="genesis-title"
                className="text-[clamp(2.6rem,4.8vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.045em]"
              >
                Built because standard agencies treat digital assets as
                commodities.
              </h2>
            </div>

            <div className="space-y-7 text-lg font-light leading-relaxed text-[#475569] sm:text-xl">
              <p>
                Most businesses do not struggle online because their product
                is weak. They struggle because their digital experience
                creates unnecessary friction.
              </p>

              <p>
                WebMash Labs exists to remove that compromise. We combine
                thoughtful design with modern full-stack engineering to turn
                websites and digital products into reliable business assets.
              </p>
            </div>

          </Reveal>
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}

      <section
        aria-labelledby="philosophy-title"
        className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#0F172A] py-32 text-white sm:py-44"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#2563EB]/10 blur-[130px]"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <Reveal className="mb-24 max-w-[850px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#94A3B8]">
              Core Philosophy
            </span>

            <h2
              id="philosophy-title"
              className="mt-6 text-[clamp(2.8rem,5.2vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.045em]"
            >
              Uncompromising principles that guide our craft.
            </h2>
          </Reveal>

          <div className="space-y-20">

            {philosophy.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.num}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 35 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          duration: 0.7,
                          delay: index * 0.08,
                          ease: smoothEase,
                        }
                  }
                  className="grid gap-8 border-b border-white/[0.08] pb-20 last:border-none lg:grid-cols-[1fr_1.6fr]"
                >
                  <div className="flex items-center gap-5">

                    <span className="font-mono text-sm font-bold tracking-[0.3em] text-[#2563EB]">
                      {item.num}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#2563EB]">
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.5}
                      />
                    </div>

                  </div>

                  <div>
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-[58ch] text-lg font-light leading-relaxed text-[#CBD5E1] sm:text-xl">
                      {item.desc}
                    </p>
                  </div>
                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          TIMELINE
      ========================================================= */}

      <section
        aria-labelledby="timeline-title"
        className="relative w-full overflow-hidden bg-[#F8FAFC] py-32 text-[#0F172A] sm:py-44"
      >
        <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <Reveal className="mb-24 max-w-[850px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#64748B]">
              Evolutionary Trajectory
            </span>

            <h2
              id="timeline-title"
              className="mt-6 text-[clamp(2.8rem,5.2vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.045em]"
            >
              A precise lineage of relentless elevation.
            </h2>
          </Reveal>

          <div className="relative ml-4 space-y-20 border-l-2 border-[#2563EB]/30 pl-8 sm:ml-12 sm:pl-20">

            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>

                <article className="relative">

                  <div
                    aria-hidden="true"
                    className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-[#2563EB] ring-8 ring-[#F8FAFC] shadow-[0_0_20px_rgba(37,99,235,0.45)] sm:-left-[89px]"
                  />

                  <span className="font-mono text-sm font-bold tracking-[0.3em] text-[#2563EB]">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[65ch] text-lg font-light leading-relaxed text-[#475569] sm:text-xl">
                    {item.desc}
                  </p>

                </article>

              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}

      <section
        aria-label="WebMash Labs statistics"
        className="w-full border-t border-white/[0.08] bg-[#0F172A] py-28 text-white sm:py-40"
      >
        <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <div className="grid gap-6 md:grid-cols-3">

            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>

                <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8">

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/10 to-transparent"
                  />

                  <p className="relative text-[clamp(4rem,7vw,7rem)] font-extrabold leading-none tracking-tight">
                    {stat.value}
                  </p>

                  <p className="relative mt-5 font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8]">
                    {stat.label}
                  </p>

                </div>

              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          CULTURE
      ========================================================= */}

      <section
        aria-labelledby="culture-title"
        className="relative w-full overflow-hidden bg-[#F8FAFC] py-32 text-[#0F172A] sm:py-44"
      >
        <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <Reveal className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#64748B]">
                Culture & Craft
              </span>

              <h2
                id="culture-title"
                className="mt-6 text-[clamp(2.6rem,4.8vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.045em]"
              >
                Obsessive attention to architectural excellence.
              </h2>

              <p className="mt-8 text-lg font-light leading-relaxed text-[#475569] sm:text-xl">
                Extraordinary software is born from focused work,
                thoughtful collaboration, and zero unnecessary complexity.
                Our studio approach is built around clarity, creativity, and
                precise digital execution.
              </p>
            </div>

            <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-[36px] border border-[#E2E8F0] bg-[#0F172A] p-10 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">

              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20 [background-image:radial-gradient(#2563EB_1px,transparent_1px)] [background-size:32px_32px]"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/25 blur-[90px]"
              />

              <div className="relative z-10 max-w-[400px] text-center">

                <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB]">
                  Studio Mandate
                </span>

                <p className="text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
                  “Simplicity is the ultimate sophistication.”
                </p>

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =========================================================
          FOUNDER
      ========================================================= */}

      <section
        aria-labelledby="founder-title"
        className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#0F172A] py-32 text-white sm:py-44"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#2563EB]/10 blur-[150px]"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <Reveal className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">

            <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-10 shadow-[0_30px_70px_rgba(0,0,0,0.35)] sm:p-12">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-8 top-2 font-mono text-8xl font-bold text-[#2563EB]/10"
              >
                Z
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#2563EB]">
                  Executive Leadership
                </span>

                <h3 className="mt-7 text-4xl font-bold tracking-tight">
                  Zaib
                </h3>

                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-[#94A3B8]">
                  Founder & Principal Architect
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-8">

                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#CBD5E1]">
                  ZS Digitizing • WebMash Labs
                </span>

                <span className="font-serif text-2xl italic text-[#2563EB]">
                  Zaib.
                </span>

              </div>

            </div>

            <div>

              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#94A3B8]">
                Founder&apos;s Perspective
              </span>

              <h2
                id="founder-title"
                className="sr-only"
              >
                Founder&apos;s Perspective
              </h2>

              <blockquote className="mt-8 text-[clamp(1.6rem,3vw,2.6rem)] font-light leading-[1.3] tracking-[-0.02em] text-white">
                “When we partner with a client, we don&apos;t simply hand over
                files—we assume responsibility for building a digital
                presence that supports their long-term growth.”
              </blockquote>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =========================================================
          TRUST
      ========================================================= */}

      <section
        aria-labelledby="trust-title"
        className="w-full bg-[#F8FAFC] py-32 text-[#0F172A] sm:py-44"
      >
        <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <Reveal className="mb-20 max-w-[850px]">

            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#64748B]">
              Enterprise Trust
            </span>

            <h2
              id="trust-title"
              className="mt-6 text-[clamp(2.8rem,5.2vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.045em]"
            >
              Credibility built into every layer of our work.
            </h2>

          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 25 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          duration: 0.65,
                          delay: index * 0.06,
                          ease: smoothEase,
                        }
                  }
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                          transition: { duration: 0.25 },
                        }
                  }
                  className="group rounded-[30px] border border-[#E2E8F0] bg-white p-9 shadow-[0_15px_40px_rgba(15,23,42,0.04)] transition-shadow duration-500 hover:border-[#2563EB]/30 hover:shadow-[0_25px_60px_rgba(37,99,235,0.10)]"
                >

                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#EFF6FF] text-[#2563EB] transition-all duration-300 group-hover:bg-[#2563EB] group-hover:text-white">

                    <Icon
                      className="h-6 w-6"
                      strokeWidth={1.5}
                    />

                  </div>

                  <h3 className="text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base font-light leading-relaxed text-[#475569]">
                    {item.desc}
                  </p>

                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section
        id="contact"
        aria-labelledby="cta-title"
        className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#0F172A] py-32 text-center text-white sm:py-48"
      >

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.18),transparent_70%)]"
        />

        <div className="relative z-10 mx-auto max-w-[1050px] px-6 sm:px-12 lg:px-20">

          <Reveal>

            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#94A3B8]">
              Initiate Partnership
            </span>

            <h2
              id="cta-title"
              className="mt-6 text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.055em]"
            >
              Ready to build something extraordinary?
            </h2>

            <p className="mx-auto mt-8 max-w-[56ch] text-lg font-light leading-relaxed text-[#CBD5E1] sm:text-2xl">
              Let&apos;s discuss your next website, digital product, or
              business-critical web platform.
            </p>

            <div className="mt-12 flex justify-center">

              <motion.a
                href="/contact"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-10 py-5 text-lg font-medium text-white shadow-[0_0_45px_rgba(37,99,235,0.4)] transition-all duration-300 hover:bg-[#1d4ed8]"
              >
                <span>Schedule Discovery Session</span>

                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />

              </motion.a>

            </div>

          </Reveal>

        </div>
      </section>

    </main>
  );
}