"use client";

import { motion } from "framer-motion";
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

const cinematicReveal = {
  initial: { opacity: 0, y: 45, filter: "blur(16px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-100px" },
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#0F172A] text-white selection:bg-[#2563EB] selection:text-white overflow-hidden relative">

      {/* GLOBAL NOISE TEXTURE OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-50"
        aria-hidden="true"
      />

      {/* ========================================================= */}
      {/* 1. CINEMATIC HERO SECTION */}
      {/* ========================================================= */}

      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center bg-[#0F172A] px-6 sm:px-12 lg:px-20 overflow-hidden">

        {/* Static Background Glow - LCP Optimized */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.22),transparent_60%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Static Blue Glow - No Continuous Animation */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[850px] rounded-full blur-[140px] pointer-events-none bg-[#2563EB]/20"
          aria-hidden="true"
        />

        {/* Floating Glass Object - Static */}
        <div
          className="absolute top-[18%] right-[12%] hidden lg:block h-32 w-32 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(37,99,235,0.15)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Floating Glass Object - Static */}
        <div
          className="absolute bottom-[22%] left-[10%] hidden lg:block h-24 w-24 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(37,99,235,0.15)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1400px] w-full z-10">

          {/* IMPORTANT:
              Hero content is intentionally NOT animated.
              This allows the H1 to become LCP immediately.
          */}
          <div className="max-w-[1150px]">

            {/* Hero Label */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
              <Sparkles
                className="h-4 w-4 text-[#2563EB]"
                strokeWidth={1.5}
              />

              <span className="font-mono text-[11px] tracking-[0.35em] text-[#CBD5E1] uppercase">
                WebMash Labs Studio &bull; Architectural Authority
              </span>
            </div>

            {/* LCP ELEMENT */}
            <h1 className="text-balance text-[clamp(3.2rem,7.5vw,7rem)] leading-[0.92] font-extrabold tracking-[-0.055em] text-white">
              We architect the digital apex for market leaders.
            </h1>

            <p className="mt-10 max-w-[64ch] text-lg sm:text-2xl leading-relaxed text-[#CBD5E1] font-light">
              WebMash Labs is an elite engineering and design studio. We
              dismantle commoditized templates to construct uncompromising
              digital infrastructure that dominates categories.
            </p>

            <div className="mt-14 flex flex-wrap items-center gap-8">

              <motion.a
                href="#genesis"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-10 py-5 font-medium text-white text-lg transition-all duration-300 hover:bg-[#1d4ed8] shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)]"
              >
                <span>Enter Our Genesis</span>

                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </motion.a>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />

                <span className="font-mono text-xs tracking-[0.25em] text-[#94A3B8] uppercase">
                  Global Enterprise Grade &bull; Senior-Led
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. GENESIS & WHO WE ARE */}
      {/* ========================================================= */}

      <section
        id="genesis"
        className="relative w-full bg-[#F8FAFC] py-36 sm:py-52 lg:py-60 text-[#0F172A] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <motion.div
            {...cinematicReveal}
            className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
          >

            <div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E2E8F0] bg-white shadow-sm mb-6">
                <span className="font-mono text-[11px] tracking-[0.35em] text-[#64748B] uppercase">
                  Genesis &bull; Who We Are
                </span>
              </div>

              <h2 className="text-balance text-[clamp(2.6rem,4.8vw,4.5rem)] leading-[1.02] font-extrabold tracking-[-0.045em] text-[#0F172A]">
                Built because standard agencies treat digital assets as
                commodities.
              </h2>

            </div>

            <div className="space-y-8 text-lg sm:text-xl leading-relaxed text-[#475569]">

              <p className="font-light">
                Most enterprises falter online not due to their core product
                offering, but because their digital touchpoints introduce
                friction. Sluggish interactions, bloated codebases, and generic
                layouts steadily erode client conviction.
              </p>

              <p className="font-light">
                WebMash Labs was founded to eradicate this compromise. We fuse
                rigorous full-stack engineering with cinematic design
                architecture, transforming your web presence into an
                unstoppable commercial engine.
              </p>

            </div>

          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR PHILOSOPHY */}
      {/* ========================================================= */}

      <section className="relative w-full bg-[#0F172A] py-36 sm:py-52 text-white border-t border-white/[0.08] overflow-hidden">

        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <motion.div
            {...cinematicReveal}
            className="max-w-[850px] mb-28"
          >
            <span className="font-mono text-[11px] tracking-[0.35em] text-[#94A3B8] uppercase">
              Core Philosophy
            </span>

            <h2 className="mt-6 text-[clamp(2.8rem,5.2vw,4.8rem)] font-extrabold tracking-[-0.045em] text-white leading-[1.02]">
              Uncompromising principles that guide our craft.
            </h2>
          </motion.div>

          <div className="space-y-28">

            {[
              {
                num: "01",
                title: "Strategy Before Design",
                desc: "A stunning interface that fails to convert is an expensive decoration. We dissect your business model, customer psychology, and acquisition funnels before crafting a single layout.",
                icon: Target,
              },
              {
                num: "02",
                title: "Design With Purpose",
                desc: "Inspired by Apple and Linear, our experiences prioritize absolute visual clarity, precise typographic hierarchies, and fluid micro-interactions. Every pixel earns its right to exist.",
                icon: Sparkles,
              },
              {
                num: "03",
                title: "Engineering Without Limits",
                desc: "Engineered on resilient stacks like Next.js, React, and serverless edge databases. We write pristine, bulletproof code that guarantees lightning-fast execution and effortless scale.",
                icon: Code2,
              },
              {
                num: "04",
                title: "Business First",
                desc: "We measure our ultimate merit through your commercial acceleration. Whether expanding multi-tenant SaaS platforms or capturing elite enterprise accounts, technology serves your bottom line.",
                icon: LineChart,
              },
            ].map((phil, i) => (

              <motion.div
                key={phil.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.1,
                  ease: smoothEase,
                }}
                className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start border-b border-white/[0.08] pb-24 last:border-none"
              >

                <div className="flex items-center gap-6">

                  <span className="font-mono text-base tracking-[0.3em] text-[#2563EB] font-bold">
                    {phil.num}
                  </span>

                  <div className="relative h-16 w-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] flex items-center justify-center shadow-[0_10px_30px_rgba(37,99,235,0.2)] backdrop-blur-xl group">

                    <div className="absolute inset-0 rounded-2xl bg-[#2563EB]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <phil.icon
                      className="relative z-10 h-7 w-7 text-[#2563EB]"
                      strokeWidth={1.5}
                    />

                  </div>
                </div>

                <div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {phil.title}
                  </h3>

                  <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#CBD5E1] font-light max-w-[58ch]">
                    {phil.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. COMPANY TIMELINE */}
      {/* ========================================================= */}

      <section className="relative w-full bg-[#F8FAFC] py-36 sm:py-52 text-[#0F172A] overflow-hidden">

        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.04),transparent_50%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <motion.div
            {...cinematicReveal}
            className="max-w-[850px] mb-28"
          >

            <span className="font-mono text-[11px] tracking-[0.35em] text-[#64748B] uppercase">
              Evolutionary Trajectory
            </span>

            <h2 className="mt-6 text-[clamp(2.8rem,5.2vw,4.8rem)] font-extrabold tracking-[-0.045em] text-[#0F172A] leading-[1.02]">
              A precise lineage of relentless elevation.
            </h2>

          </motion.div>

          <div className="relative border-l-2 border-[#2563EB]/30 ml-4 sm:ml-12 pl-8 sm:pl-20 space-y-24">

            {[
              {
                year: "2020",
                title: "Foundation & Core Engineering",
                desc: "Established as an elite independent engineering cell dedicated to high-performance web applications and bespoke client architecture.",
              },
              {
                year: "2022",
                title: "Enterprise SaaS Expansion",
                desc: "Scaled operations internationally, partnering with hyper-growth technology companies to architect secure cloud databases and immersive digital ecosystems.",
              },
              {
                year: "2024",
                title: "WebMash Labs Rebrand",
                desc: "Consolidated advanced UI/UX design disciplines with enterprise-grade full-stack architecture under a unified studio model.",
              },
              {
                year: "2026+",
                title: "Next-Gen Digital Infrastructure",
                desc: "Pioneering AI-integrated workflows, lightning-edge deployments, and category-defining interactive experiences worldwide.",
              },
            ].map((t, i) => (

              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: smoothEase,
                }}
                className="relative group"
              >

                <div className="absolute -left-[41px] sm:-left-[89px] top-2 h-5 w-5 rounded-full bg-[#2563EB] ring-8 ring-[#F8FAFC] shadow-[0_0_20px_rgba(37,99,235,0.6)] group-hover:scale-125 transition-transform duration-300" />

                <span className="font-mono text-base tracking-[0.3em] text-[#2563EB] font-bold">
                  {t.year}
                </span>

                <h3 className="mt-3 text-3xl font-bold text-[#0F172A] tracking-tight">
                  {t.title}
                </h3>

                <p className="mt-4 text-lg sm:text-xl leading-relaxed text-[#475569] font-light max-w-[65ch]">
                  {t.desc}
                </p>

              </motion.div>

            ))}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. COMPANY NUMBERS */}
      {/* ========================================================= */}

      <section className="relative w-full bg-[#0F172A] py-32 sm:py-44 text-white border-t border-white/[0.08]">

        <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">

            {[
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
            ].map((stat, i) => (

              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: smoothEase,
                }}
                className="relative p-8 rounded-3xl border border-white/[0.06] bg-white/[0.01] backdrop-blur-xl"
              >

                <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/10 to-transparent rounded-3xl pointer-events-none" />

                <p className="relative z-10 text-[clamp(4.5rem,8vw,8rem)] font-extrabold tracking-tight text-white leading-none">
                  {stat.value}
                </p>

                <p className="relative z-10 mt-6 font-mono text-xs tracking-[0.3em] text-[#94A3B8] uppercase">
                  {stat.label}
                </p>

              </motion.div>

            ))}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. WORKSPACE & CULTURE */}
      {/* ========================================================= */}

      <section className="relative w-full bg-[#F8FAFC] py-36 sm:py-52 text-[#0F172A] overflow-hidden">

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <motion.div
            {...cinematicReveal}
            className="grid gap-20 lg:grid-cols-2 lg:items-center"
          >

            <div>

              <span className="font-mono text-[11px] tracking-[0.35em] text-[#64748B] uppercase">
                Culture & Craft
              </span>

              <h2 className="mt-6 text-[clamp(2.6rem,4.8vw,4.5rem)] font-extrabold tracking-[-0.045em] text-[#0F172A] leading-[1.02]">
                Obsessive attention to architectural excellence.
              </h2>

              <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[#475569] font-light">
                Extraordinary software is born from focused deep work and zero
                bureaucratic overhead. Our studio environment is tailored for
                absolute clarity, intense creative rigor, and flawless digital
                execution.
              </p>

            </div>

            <div className="relative rounded-[36px] overflow-hidden bg-[#0F172A] min-h-[440px] flex items-center justify-center p-12 border border-[#E2E8F0] shadow-[0_30px_90px_rgba(15,23,42,0.12)]">

              <div
                className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:32px_32px] opacity-20"
                aria-hidden="true"
              />

              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#2563EB]/30 rounded-full blur-[100px] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 text-center max-w-[400px]">

                <span className="font-mono text-xs tracking-[0.35em] text-[#2563EB] uppercase block mb-4">
                  Studio Mandate
                </span>

                <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                  &ldquo;Simplicity is the ultimate sophistication.&rdquo;
                </p>

              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FOUNDER STORY */}
      {/* ========================================================= */}

      <section className="relative w-full bg-[#0F172A] py-36 sm:py-52 text-white border-t border-white/[0.08] overflow-hidden">

        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[180px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <motion.div
            {...cinematicReveal}
            className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-center"
          >

            <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 p-12 flex flex-col justify-between min-h-[480px] shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">

              <div className="absolute top-0 right-0 p-8 text-[#2563EB]/20 font-mono text-8xl font-bold select-none pointer-events-none">
                Z
              </div>

              <div>

                <span className="font-mono text-xs tracking-[0.35em] text-[#2563EB] uppercase">
                  Executive Leadership
                </span>

                <h3 className="mt-8 text-4xl font-bold text-white tracking-tight">
                  Zaib
                </h3>

                <p className="mt-2 font-mono text-xs tracking-[0.2em] text-[#94A3B8] uppercase">
                  Founder & Principal Architect
                </p>

              </div>

              <div className="pt-10 border-t border-white/10 flex items-center justify-between">

                <span className="font-mono text-xs tracking-[0.3em] text-[#CBD5E1] uppercase">
                   WEBMASH LABS
                </span>

                <span className="font-serif italic text-2xl text-[#2563EB]">
                  Zaib.
                </span>

              </div>

            </div>

            <div>

              <span className="font-mono text-[11px] tracking-[0.35em] text-[#94A3B8] uppercase">
                Founder&apos;s Perspective
              </span>

              <blockquote className="mt-8 text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.3] font-light tracking-[-0.02em] text-white">
                &ldquo;When we partner with a client, we don&apos;t simply hand
                over files—we assume absolute custodianship of their digital
                dominance. Every line of code is engineered to accelerate
                enterprise growth.&rdquo;
              </blockquote>

            </div>

          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. TRUST & CREDIBILITY */}
      {/* ========================================================= */}

      <section className="relative w-full bg-[#F8FAFC] py-36 sm:py-52 text-[#0F172A]">

        <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">

          <motion.div
            {...cinematicReveal}
            className="max-w-[850px] mb-24"
          >

            <span className="font-mono text-[11px] tracking-[0.35em] text-[#64748B] uppercase">
              Enterprise Trust
            </span>

            <h2 className="mt-6 text-[clamp(2.8rem,5.2vw,4.8rem)] font-extrabold tracking-[-0.045em] text-[#0F172A] leading-[1.02]">
              Absolute credibility embedded in our architecture.
            </h2>

          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Verified Process",
                desc: "Rigorous agile sprints and absolute transparency from discovery to launch.",
                icon: Workflow,
              },
              {
                title: "Long-term Partnership",
                desc: "Proactive retainers ensuring continuous evolution, scaling, and support.",
                icon: Target,
              },
              {
                title: "Performance Optimized",
                desc: "Guaranteed sub-second load speeds and flawless Core Web Vitals.",
                icon: Gauge,
              },
              {
                title: "SEO Ready",
                desc: "Automated structured JSON-LD schemas and pristine technical metadata.",
                icon: Search,
              },
              {
                title: "Security First",
                desc: "Encrypted infrastructure and robust enterprise DDoS protection.",
                icon: ShieldCheck,
              },
              {
                title: "Senior Leadership Only",
                desc: "Executed exclusively by seasoned industry experts with zero juniors.",
                icon: Code2,
              },
            ].map((item, idx) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.08,
                  ease: smoothEase,
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className="group relative rounded-[32px] border border-[#E2E8F0] bg-white p-10 shadow-[0_15px_40px_rgba(15,23,42,0.04)] hover:shadow-[0_30px_70px_rgba(37,99,235,0.1)] hover:border-[#2563EB]/40 transition-all duration-500"
              >

                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#2563EB]/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative h-14 w-14 rounded-full border border-[#E2E8F0] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-500">

                  <item.icon
                    className="h-6 w-6"
                    strokeWidth={1.5}
                  />

                </div>

                <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#475569] font-light">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. LUXURY CTA */}
      {/* ========================================================= */}

      <section className="relative w-full bg-[#0F172A] py-36 sm:py-52 text-white overflow-hidden text-center border-t border-white/[0.08]">

        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.2),transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1050px] px-6 sm:px-12 lg:px-20 z-10">

          <motion.div {...cinematicReveal}>

            <span className="font-mono text-[11px] tracking-[0.4em] text-[#94A3B8] uppercase">
              Initiate Partnership
            </span>

            <h2 className="mt-6 text-[clamp(3rem,7vw,6.5rem)] font-extrabold tracking-[-0.055em] text-white leading-[0.95]">
              Ready to build something extraordinary?
            </h2>

            <p className="mt-8 max-w-[56ch] mx-auto text-lg sm:text-2xl text-[#CBD5E1] font-light leading-relaxed">
              Book an introductory discovery session with our principal
              engineers. Let&apos;s architect your digital dominance.
            </p>

            <div className="mt-14 flex items-center justify-center">

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-12 py-6 font-medium text-white text-lg transition-all duration-300 hover:bg-[#1d4ed8] shadow-[0_0_50px_rgba(37,99,235,0.45)] hover:shadow-[0_0_70px_rgba(37,99,235,0.65)]"
              >

                <span>Schedule Discovery Session</span>

                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />

              </motion.a>

            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}