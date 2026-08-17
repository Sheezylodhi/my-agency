"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================================================
// DATA ARCHITECTURE (PURE BUSINESS VALUE PILLARS)
// ============================================================================

const TRUST_PILLARS = [
  {
    id: "business-understanding",
    number: "01",
    tag: "STRATEGIC ALIGNMENT",
    headline: "We understand your business first.",
    description:
      "Before writing a single line of code or designing a layout, WebMash Labs dives deep into your business model, target audience, and market position. Our custom web design and website development solutions are strategically aligned with your unique business goals and customer journey.",
    renderVisual: () => (
      <div className="space-y-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4 text-xs font-mono text-slate-400">
          <span>STRATEGY SESSION // 01</span>
          <span className="text-blue-600 font-semibold">Discovery &amp; Alignment</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-wider block">OBJECTIVE</span>
            <h4 className="font-bold text-slate-900 text-sm">Revenue Model Analysis</h4>
            <p className="text-xs text-slate-500 font-light leading-relaxed">Mapping your client acquisition channels and conversion bottlenecks.</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-wider block">ALIGNMENT</span>
            <h4 className="font-bold text-slate-900 text-sm">Target Audience Blueprint</h4>
            <p className="text-xs text-slate-500 font-light leading-relaxed">Understanding what motivates your high-value buyers to take action.</p>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100/60 flex items-center justify-between text-xs font-mono text-blue-900">
          <span>Status: Foundation Secured</span>
          <span className="text-blue-600 font-bold">100% Focused on Your Goals</span>
        </div>
      </div>
    ),
  },
  {
    id: "trust-credibility",
    number: "02",
    tag: "BRAND AUTHORITY",
    headline: "Your website should build instant trust.",
    description:
      "First impressions happen in seconds. As a professional web design agency, we create premium digital experiences that position your company as a credible industry leader through strong branding, thoughtful UI/UX design, and polished websites.",
    renderVisual: () => (
      <div className="space-y-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4 text-xs font-mono text-slate-400">
          <span>BRAND PERCEPTION // 02</span>
          <span className="text-blue-600 font-semibold">Credibility Elevation</span>
        </div>
        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest block">CLIENT IMPRESSION</span>
              <p className="text-base font-bold">Absolute Market Authority</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 font-mono text-xs">Verified</span>
          </div>
          <p className="text-xs text-slate-300 font-light leading-relaxed border-t border-slate-800 pt-3">
            Visitors immediately recognize your professionalism, removing friction and building unshakeable confidence in your services.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "business-growth",
    number: "03",
    tag: "REVENUE ACCELERATION",
    headline: "Designed to generate enquiries and growth.",
    description:
      "A beautiful website is meaningless if it does not perform. Every layout, message, and user journey is strategically optimized for clear communication, better user experience, and qualified enquiries that support sustainable business growth.",
    renderVisual: () => (
      <div className="space-y-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4 text-xs font-mono text-slate-400">
          <span>GROWTH ENGINE // 03</span>
          <span className="text-blue-600 font-semibold">Enquiry &amp; Conversion Focus</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">CLARITY</span>
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Clear Messaging</h4>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">FLOW</span>
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Frictionless UX</h4>
          </div>
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-center space-y-1">
            <span className="text-[10px] font-mono text-blue-600 uppercase block">RESULT</span>
            <h4 className="font-bold text-blue-900 text-xs sm:text-sm">More Enquiries</h4>
          </div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 font-light text-center">
          Transforming your online presence into your hardest-working business asset.
        </div>
      </div>
    ),
  },
  {
    id: "long-term-partnership",
    number: "04",
    tag: "ENDURING RELATIONSHIP",
    headline: "Long-term partners, not one-time vendors.",
    description:
      "We do not disappear after launch. WebMash Labs provides ongoing website maintenance, technical support, and performance improvements to help your website remain secure, reliable, and effective as your business grows.",
    renderVisual: () => (
      <div className="space-y-6">
        <div className="flex justify-between items-center border-b border-slate-100 pb-4 text-xs font-mono text-slate-400">
          <span>PARTNERSHIP // 04</span>
          <span className="text-blue-600 font-semibold">Continuous Collaboration</span>
        </div>
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-slate-400 block uppercase">LAUNCH PHASE</span>
              <span className="font-bold text-slate-900 text-sm">Seamless Go-Live Support</span>
            </div>
            <span className="text-xs font-mono text-emerald-600 font-semibold">Done ✓</span>
          </div>
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-blue-600 block uppercase">GROWTH PHASE</span>
              <span className="font-bold text-blue-950 text-sm">Ongoing Guidance &amp; Updates</span>
            </div>
            <span className="text-xs font-mono text-blue-600 font-semibold animate-pulse">Active</span>
          </div>
        </div>
      </div>
    ),
  },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePillar = TRUST_PILLARS[activeIndex];

  return (
    <section className="relative isolate overflow-hidden bg-[#FBFBFD] text-slate-900 py-32 lg:py-44 border-t border-slate-200/80">
      
      {/* Subtle Luxury Mesh Lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 blur-[180px]"
        style={{
          background: "radial-gradient(circle at 10% 20%, rgba(37,99,235,0.06) 0%, transparent 60%), radial-gradient(circle at 90% 80%, rgba(99,102,241,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1300px] px-6 lg:px-16 space-y-20">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-xs tracking-[0.4em] text-blue-600 uppercase">
            WHY WEBMASH LABS
          </p>
          <h2 className="text-[clamp(2.5rem,4.5vw,4.2rem)] font-extrabold tracking-tight leading-[1.08] text-slate-950">
            Why Businesses Trust WebMash Labs for Web Design &amp; Digital Growth
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 font-light leading-relaxed">
            Hiring a digital agency is an investment in your company’s future. WebMash Labs combines professional web design, custom website development, and strategic digital solutions to create websites that support long-term business growth.
          </p>
        </div>

        {/* MOBILE HORIZONTAL TAB SCROLLER */}
        <div className="flex lg:hidden overflow-x-auto space-x-2 pb-2 scrollbar-none">
          {TRUST_PILLARS.map((pillar, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveIndex(index)}
                className={`px-5 py-3 rounded-xl font-mono text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-slate-950 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200"
                }`}
              >
                {pillar.number} // {pillar.tag}
              </button>
            );
          })}
        </div>

        {/* DESKTOP SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: NAVIGATION TABS (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col space-y-3">
            {TRUST_PILLARS.map((pillar, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={pillar.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`relative p-7 rounded-3xl transition-all duration-500 cursor-pointer border backdrop-blur-xl ${
                    isActive
                      ? "bg-white border-blue-500/40 shadow-[0_20px_40px_rgba(37,99,235,0.08)] translate-x-2"
                      : "bg-white/40 border-slate-200/80 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-blue-600 rounded-r-full shadow-[0_0_10px_rgba(37,99,235,0.6)]" />
                  )}

                  <div className="space-y-2 pl-3">
                    <span className={`font-mono text-xs font-bold ${isActive ? "text-blue-600" : "text-slate-400"}`}>
                      {pillar.number} // {pillar.tag}
                    </span>
                    <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-slate-950" : "text-slate-700"}`}>
                      {pillar.headline}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: CINEMATIC VISUAL STAGE & DESCRIPTION */}
          <div className="w-full lg:col-span-7 space-y-8">
            
            {/* MOBILE ACTIVE PILLAR HEADER & DESCRIPTION */}
            <div className="block lg:hidden space-y-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <span className="font-mono text-xs font-bold text-blue-600 tracking-widest block">
                {activePillar.number} // {activePillar.tag}
              </span>
              <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                {activePillar.headline}
              </h3>
              <p className="text-slate-600 font-light leading-relaxed text-base">
                {activePillar.description}
              </p>
            </div>

            {/* ANIMATED VISUAL PANEL */}
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full p-8 lg:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-[0_30px_70px_rgba(15,23,42,0.06)] overflow-hidden"
            >
              {activePillar.renderVisual()}
            </motion.div>

            {/* DESKTOP ACTIVE PILLAR DESCRIPTION */}
            <div className="hidden lg:block space-y-3 pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                    {activePillar.headline}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed text-base lg:text-lg max-w-2xl">
                    {activePillar.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}