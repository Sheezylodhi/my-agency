"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, HelpCircle, Sparkles } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const reveal = {
  initial: { opacity: 0, y: 35, filter: "blur(14px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
};

const faqs = [
  {
    id: "01",
    question: "How much does a custom digital platform cost?",
    answer:
      "Every project is custom-scoped based on your precise growth objectives, technical requirements, and design depth. Rather than offering rigid template packages, we invest time upfront to understand your business model and deliver transparent, fixed-price proposals tailored to your ROI targets.",
    category: "Investment",
    timeline: "Fixed-price scope",
  },
  {
    id: "02",
    question: "How long does a typical project take from start to launch?",
    answer:
      "Most core brand websites and custom web applications move from initial discovery to high-impact launch within 4 to 8 weeks. Our streamlined agile workflows ensure zero communication gaps, weekly design milestones, and rigorous quality assurance before your platform goes live.",
    category: "Timeline",
    timeline: "4–8 weeks average",
  },
  {
    id: "03",
    question: "Can you completely redesign my existing website?",
    answer:
      "Yes. We specialize in transforming underperforming or outdated digital properties into high-converting revenue engines. We audit your existing analytics, preserve your established SEO equity and backlinks, and rebuild your architecture around modern user conversion patterns.",
    category: "Transformation",
    timeline: "SEO equity preserved",
  },
  {
    id: "04",
    question: "Do you provide comprehensive search engine optimization?",
    answer:
      "Foundational technical SEO is architected into every single line of code we write. From lightning-fast Core Web Vitals performance and semantic HTML structure to clean metadata and sitemaps, your platform is engineered to rank powerfully from day one.",
    category: "Growth",
    timeline: "Built-in optimization",
  },
  {
    id: "05",
    question: "Do you build custom web applications and SaaS platforms?",
    answer:
      "Beyond marketing sites, our engineering team architects bespoke full-stack web applications, custom dashboards, client portals, and interactive digital products utilizing robust modern frameworks like Next.js, React, and secure cloud databases.",
    category: "Engineering",
    timeline: "Full-stack scalable",
  },
  {
    id: "06",
    question: "Will my website look and perform flawlessly on mobile devices?",
    answer:
      "We design mobile-first with meticulous attention to thumb-driven navigation, fluid typography scaling, and responsive touch interactions. Every animation and layout is rigorously tested across physical iOS and Android devices to guarantee a native app-like experience.",
    category: "Experience",
    timeline: "Mobile-first rigor",
  },
  {
    id: "07",
    question: "Do you provide ongoing maintenance and support after launch?",
    answer:
      "Your partnership with us doesn't end at deployment. We offer proactive maintenance retainers covering security updates, performance monitoring, content iteration, and continuous conversion rate optimization to ensure your digital presence stays ahead of the market.",
    category: "Partnership",
    timeline: "Proactive retainers",
  },
  {
    id: "08",
    question: "How do we start working together on our next project?",
    answer:
      "Starting is seamless. Book a brief introductory discovery session through our calendar or send us an overview of your vision. We will review your requirements, discuss potential strategies, and provide a clear roadmap within 48 hours.",
    category: "Onboarding",
    timeline: "48-hour response",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden bg-[#F8FAFC] py-24 sm:py-32 lg:py-44"
      aria-labelledby="faq-heading"
    >
      {/* Subtle Mesh Glow Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease }}
        className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[700px] w-[900px] rounded-full blur-[150px]"
        style={{ background: "#2563EB" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-16">
        
        {/* EDITORIAL HEADER */}
        <motion.div
          {...reveal}
          transition={{ duration: 1.1, ease }}
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end border-b border-[#E2E8F0] pb-16 lg:pb-24"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="font-mono text-[11px] tracking-[0.34em] text-[#64748B] uppercase flex items-center gap-2"
            >
              <Sparkles className="h-3 w-3 text-[#2563EB]" strokeWidth={1.5} />
              Clarity & Transparency
            </motion.p>
            <h2
              id="faq-heading"
              className="text-balance-tight mt-6 text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[0.98] font-bold tracking-[-0.04em] text-[#0F172A]"
            >
              Everything you need to know before we build.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-[#475569] lg:max-w-[48ch]">
            Straightforward answers to common questions about our process, investment, and engineering standards. Designed to eliminate guesswork and build absolute confidence.
          </p>
        </motion.div>

        {/* CUSTOM INTERACTIVE SPLIT LAYOUT */}
        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-16">
          
          {/* LEFT COLUMN: LIST OF QUESTIONS */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.button
                  key={faq.id}
                  onClick={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: index * 0.04 }}
                  whileHover={{ y: -2 }}
                  className={`group relative text-left w-full rounded-2xl p-6 transition-all duration-500 border ${
                    isActive
                      ? "bg-white border-[#2563EB] shadow-xl ring-1 ring-[#2563EB]/10"
                      : "bg-white border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs tracking-wider transition-colors duration-300 ${
                        isActive ? "text-[#2563EB] font-semibold" : "text-[#64748B]"
                      }`}>
                        {faq.id}
                      </span>
                      <span className={`text-base sm:text-lg tracking-[-0.015em] transition-colors duration-300 ${
                        isActive ? "text-[#0F172A] font-semibold" : "text-[#0F172A] group-hover:text-[#2563EB]"
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className={`h-8 w-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive ? "bg-[#2563EB] text-white rotate-45" : "bg-[#EFF6FF] text-[#2563EB] group-hover:bg-[#DBEAFE]"
                    }`}>
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: DYNAMIC ACTIVE ANSWER CARD */}
          <div className="lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -25, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease }}
                className="rounded-[32px] border border-[#E2E8F0] bg-white p-8 sm:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)] relative overflow-hidden transition-all duration-500 hover:shadow-xl"
              >
                {/* Subtle internal gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none" />

                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-6 relative z-10">
                  <span className="font-mono text-[11px] tracking-[0.28em] text-[#2563EB] uppercase">
                    {faqs[activeIndex].category}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-[#2563EB] uppercase bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-full">
                    {faqs[activeIndex].timeline}
                  </span>
                </div>

                <div className="mt-8 relative z-10">
                  <span className="font-mono text-xs text-[#64748B] block mb-3">
                    Question {faqs[activeIndex].id} of 08
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-[#0F172A] leading-[1.25]">
                    {faqs[activeIndex].question}
                  </h3>
                  <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#475569]">
                    {faqs[activeIndex].answer}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-3 pt-8 border-t border-[#E2E8F0] relative z-10">
                  <div className="h-2 w-2 rounded-full bg-[#2563EB] animate-pulse" />
                  <p className="font-mono text-[10px] tracking-[0.22em] text-[#64748B] uppercase">
                    Verified WebMash Labs Standard
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}