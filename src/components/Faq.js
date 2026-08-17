"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "custom-development",
    category: "Services",
    question: "What is the difference between template-based sites and custom website development?",
    answer: "Template-based websites rely on rigid pre-made themes with performance limitations and unnecessary code bloat. In contrast, custom website development builds tailored digital platforms from the ground up to match your exact business model, user journeys, and brand identity. Custom development ensures superior performance, scalable architecture, flexible CMS solutions, and tailored UI/UX design optimized for conversion.",
  },
  {
    id: "timeline",
    category: "Process",
    question: "How long does custom website development take?",
    answer: "Project timelines typically range from 4 to 8 weeks for standard business websites, while complex custom web applications or SaaS platforms require a phased roadmap. The exact duration depends on project scope, design complexity, content readiness, third-party API integrations, and review cycles during development.",
  },
  {
    id: "cost",
    category: "Pricing",
    question: "How much does custom web design and development cost?",
    answer: "Investment requirements vary based on your specific project scope, number of pages, custom interactive features, backend/database requirements, CMS configuration, and third-party API integrations. We provide transparent, custom proposals following an initial discovery session to align technical specifications with your business objectives.",
  },
  {
    id: "redesign",
    category: "Services",
    question: "Can you redesign an existing website without losing SEO rankings?",
    answer: "Yes. Our website redesign process includes strategic UX/UI modernization, responsive improvements, Core Web Vitals optimization, and meticulous SEO migration planning. We implement proper 301 redirects, URL mapping, canonical updates, and maintain URL structures where appropriate to preserve valuable search equity and minimize organic traffic fluctuations.",
  },
  {
    id: "saas-apps",
    category: "Engineering",
    question: "Do you build custom web applications and SaaS platforms?",
    answer: "Yes, WebMash Labs specializes in full-stack web development, building custom web applications, customer portals, dashboards, and SaaS platforms using modern React and Next.js frameworks. We engineer scalable database architectures, secure user authentication systems, role-based access, and robust API integrations designed for performance and long-term business growth.",
  },
  {
    id: "seo-performance",
    category: "Optimization",
    question: "How do you handle technical SEO and website performance?",
    answer: "We engineer websites following strict technical SEO and performance best practices. This includes clean semantic HTML, heading hierarchies, optimized page load speeds, responsive mobile-first design, secure SSL configurations, structured metadata, XML sitemaps, and Core Web Vitals optimization to support strong search engine crawlability and indexability.",
  },
  {
    id: "maintenance",
    category: "Support",
    question: "What website maintenance and support do you provide after launch?",
    answer: "We offer ongoing website maintenance and support packages to keep your digital platform secure and high-performing. Our maintenance services cover regular security updates, dependency patches, uptime monitoring, bug fixes, performance audits, and iterative feature enhancements.",
  },
  {
    id: "getting-started",
    category: "Process",
    question: "How do I start a website or web application project with WebMash Labs?",
    answer: "Getting started is straightforward. Reach out through our contact form to schedule an initial consultation where we discuss your business goals, project requirements, target audience, and digital strategy. From there, we formulate a clear roadmap and architectural proposal to bring your vision to life.",
  },
];

export function FAQ() {
  const [activeId, setActiveId] = useState(faqs[0].id);

  const activeFaq = faqs.find((f) => f.id === activeId) || faqs[0];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-24 lg:py-32 bg-[#0A1222] text-white selection:bg-blue-600 selection:text-white overflow-hidden"
    >
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10 space-y-16">
        
        {/* HEADER */}
        <div className="max-w-2xl space-y-4">
          <p className="font-mono text-xs tracking-[0.4em] text-blue-400 uppercase">
            KNOWLEDGE BASE // FAQ
          </p>
          <h2 id="faq-heading" className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-light">
            Clear insights into our custom web development services, technical capabilities, project timelines, and collaborative agency process.
          </p>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* FAQ BUTTONS LIST */}
          <div className="lg:col-span-6 space-y-3" role="region" aria-label="Frequently Asked Questions List">
            {faqs.map((faq, index) => {
              const isActive = faq.id === activeId;
              return (
                <button
                  key={faq.id}
                  id={`faq-btn-${faq.id}`}
                  type="button"
                  onClick={() => setActiveId(faq.id)}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${faq.id}`}
                  className={`w-full text-left p-5 lg:p-6 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                    isActive
                      ? "bg-blue-600/10 border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.15)]"
                      : "bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20"
                  }`}
                >
                  <div className="space-y-1 pr-4">
                    <span className="font-mono text-[10px] text-blue-400 tracking-widest block">
                      0{index + 1} // {faq.category}
                    </span>
                    <span className={`text-base lg:text-lg font-semibold block transition-colors ${
                      isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all shrink-0 ${
                    isActive
                      ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                      : "bg-white/5 border-white/10 text-slate-400 group-hover:border-white/30 group-hover:text-white"
                  }`}>
                    <span className="text-sm font-bold">{isActive ? "−" : "+"}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ACTIVE ANSWER CARD (VISUAL) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="p-8 lg:p-10 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-3xl shadow-[0_30px_90px_rgba(0,0,0,0.5)] relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" aria-hidden="true" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4 font-mono text-xs text-slate-400">
                  <span>RESPONSE // {activeFaq.category.toUpperCase()}</span>
                  <span className="text-blue-400 font-semibold">Active Index</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFaq.id}
                    id={`faq-answer-${activeFaq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${activeFaq.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                      {activeFaq.question}
                    </h3>
                    <p className="text-slate-300 font-light leading-relaxed text-base lg:text-lg">
                      {activeFaq.answer}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
                <span>WEBMASH LABS // EXPERTISE</span>
                <span className="text-emerald-400 font-semibold">Verified Q&amp;A</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}