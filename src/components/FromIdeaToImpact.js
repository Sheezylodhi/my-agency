"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function FromIdeaToImpact() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Pinning and cinematic scrubbing transformations across 6 chapters (GPU-friendly transforms)
  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.166, 0.333, 0.5, 0.666, 0.833, 1],
    ["0%", "-16.666%", "-33.333%", "-50%", "-66.666%", "-83.333%", "-83.333%"]
  );

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="process"
      aria-labelledby="process-heading"
      className="relative lg:h-[600vh] bg-[#0A1222] text-white selection:bg-blue-600 selection:text-white"
    >
      {/* MOBILE / TABLET FALLBACK: STACKED PRACTICAL LAYOUT (NO FORCED 600VH EXCESSIVE SCROLL) 
          DESKTOP: CINEMATIC PINNED CONTAINER */}
      <div className="relative lg:sticky lg:top-0 lg:h-screen w-full overflow-hidden flex flex-col justify-between py-20 lg:py-0">
        
        {/* TOP CINEMATIC HEADER */}
        <div className="px-6 lg:absolute lg:top-8 lg:left-16 lg:px-0 z-40 space-y-1 mb-10 lg:mb-0 pointer-events-none">
          <p className="font-mono text-[10px] tracking-[0.4em] text-blue-400 uppercase">
            CINEMATIC PRESENTATION // WEBMASH LABS
          </p>
          <h2 id="process-heading" className="text-xl lg:text-3xl font-extrabold tracking-tight text-white">
            From Idea to Impact
          </h2>
        </div>

        {/* FLOATING VERTICAL PROGRESS BAR (DESKTOP ONLY) */}
        <div className="absolute left-6 lg:left-12 top-28 bottom-28 w-[2px] bg-white/10 z-40 hidden lg:block" aria-hidden="true">
          <motion.div
            style={{ height: shouldReduceMotion ? "100%" : progressHeight }}
            className="w-full bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.9)] origin-top"
          />
        </div>

        {/* HORIZONTAL SCROLLING TRACK FOR DESKTOP / GRID STACK FOR MOBILE */}
        <motion.div
          style={{ x: shouldReduceMotion ? "0%" : xTransform }}
          className="flex flex-col lg:flex-row h-full w-full lg:w-[600%] items-center space-y-16 lg:space-y-0"
        >
          {/* CHAPTER 01: DISCOVERY */}
          <div className="w-full lg:w-[100vw] lg:h-screen flex items-center justify-center px-6 lg:px-28 relative bg-gradient-to-br from-[#070A12] via-[#0D1527] to-[#0A0F1D] py-12 lg:py-0">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" aria-hidden="true" />
            <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-xs font-bold text-blue-400 tracking-widest">CHAPTER 01 // DISCOVERY</span>
                <h3 className="text-3xl lg:text-6xl font-extrabold text-white tracking-tight">
                  Laying the groundwork for success.
                </h3>
                <p className="text-slate-400 font-light leading-relaxed text-base lg:text-lg">
                  Every project starts with thorough research into your business goals, target audience, and customer needs. We establish a clear website strategy and define conversion goals to guide your custom website development.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="p-6 lg:p-10 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-3xl space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4 font-mono text-xs text-slate-400">
                    <span>WORKSPACE // RESEARCH BOARD v2.4</span>
                    <span className="text-blue-400 font-semibold">Active Sync ✓</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-1 backdrop-blur-md">
                      <span className="text-[10px] font-mono text-blue-400">PERSONA</span>
                      <p className="text-xs font-bold text-white">Enterprise Clients</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] font-mono text-slate-400">MARKET</span>
                      <p className="text-xs font-bold text-white">Gap Analysis</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1 col-span-2 md:col-span-1">
                      <span className="text-[10px] font-mono text-slate-400">OBJECTIVE</span>
                      <p className="text-xs font-bold text-white">Conversion Velocity</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs flex items-center justify-between border border-white/10">
                    <span className="text-slate-300">Whiteboard Session: User Flow Mapping</span>
                    <span className="text-emerald-400 font-semibold">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CHAPTER 02: STRATEGY */}
          <div className="w-full lg:w-[100vw] lg:h-screen flex items-center justify-center px-6 lg:px-28 relative bg-gradient-to-br from-[#0A0F1D] via-[#0D1830] to-[#080E1B] py-12 lg:py-0">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" aria-hidden="true" />
            <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-xs font-bold text-blue-400 tracking-widest">CHAPTER 02 // STRATEGY</span>
                <h3 className="text-3xl lg:text-6xl font-extrabold text-white tracking-tight">
                  Architecting the system blueprint.
                </h3>
                <p className="text-slate-400 font-light leading-relaxed text-base lg:text-lg">
                  We connect database architecture, cloud infrastructure, secure API endpoints, and CMS pathways into a seamless, high-performance blueprint.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="p-6 lg:p-10 rounded-3xl bg-white/[0.04] border border-blue-500/30 backdrop-blur-3xl space-y-4 shadow-[0_30px_90px_rgba(37,99,235,0.15)]">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4 font-mono text-xs text-slate-400">
                    <span>SYSTEM ARCHITECTURE // TOPOLOGY</span>
                    <span className="text-blue-400 font-semibold">Connected</span>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-4 rounded-xl bg-slate-900 text-white flex justify-between items-center border border-white/10">
                      <span>Client Request → Cloudflare Edge Proxy</span>
                      <span className="text-blue-400">TLS 1.3</span>
                    </div>
                    <div className="flex justify-center"><span className="text-blue-400 font-bold">↓</span></div>
                    <div className="p-4 rounded-xl bg-blue-600 text-white flex justify-between items-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                      <span>Next.js App Router (Serverless Engine)</span>
                      <span className="text-blue-200">Optimized</span>
                    </div>
                    <div className="flex justify-center"><span className="text-blue-400 font-bold">↓</span></div>
                    <div className="p-4 rounded-xl bg-slate-900 text-white flex justify-between items-center border border-white/10">
                      <span>Scalable Database Layer + ORM</span>
                      <span className="text-emerald-400">Optimized</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CHAPTER 03: DESIGN */}
          <div className="w-full lg:w-[100vw] lg:h-screen flex items-center justify-center px-6 lg:px-28 relative bg-gradient-to-br from-[#080E1B] via-[#0E1528] to-[#0A0F1D] py-12 lg:py-0">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" aria-hidden="true" />
            <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-xs font-bold text-indigo-400 tracking-widest">CHAPTER 03 // DESIGN</span>
                <h3 className="text-3xl lg:text-6xl font-extrabold text-white tracking-tight">
                  Crafting premium visual interfaces.
                </h3>
                <p className="text-slate-400 font-light leading-relaxed text-base lg:text-lg">
                  Drawing inspiration from elite global agencies, we assemble design components, responsive desktop and mobile frames, and buttery-smooth micro-interactions.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="p-6 lg:p-10 rounded-3xl bg-white/[0.04] border border-indigo-500/30 backdrop-blur-3xl space-y-6 shadow-[0_30px_90px_rgba(99,102,241,0.15)]">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4 font-mono text-xs text-slate-400">
                    <span>FIGMA DESIGN SYSTEM // COMPONENTS</span>
                    <span className="text-indigo-400 font-semibold">Auto Layout Active</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] font-mono text-slate-400">TYPOGRAPHY</span>
                      <p className="text-xs font-bold text-white">Geist / Inter</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] font-mono text-slate-400">PALETTE</span>
                      <div className="flex space-x-1.5 pt-1">
                        <span className="w-3.5 h-3.5 rounded-full bg-white" />
                        <span className="w-3.5 h-3.5 rounded-full bg-blue-500" />
                        <span className="w-3.5 h-3.5 rounded-full bg-indigo-500" />
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] font-mono text-slate-400">MOTION</span>
                      <p className="text-xs font-bold text-indigo-400">Framer 60fps</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex justify-between items-center shadow-2xl">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-200 block">PREVIEW FRAME</span>
                      <p className="text-lg font-bold">Responsive Desktop &amp; Mobile</p>
                    </div>
                    <span className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md text-xs font-mono font-bold">Inspect →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CHAPTER 04: DEVELOPMENT */}
          <div className="w-full lg:w-[100vw] lg:h-screen flex items-center justify-center px-6 lg:px-28 relative bg-[#04060B] py-12 lg:py-0">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" aria-hidden="true" />
            <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-xs font-bold text-emerald-400 tracking-widest">CHAPTER 04 // DEVELOPMENT</span>
                <h3 className="text-3xl lg:text-6xl font-extrabold text-white tracking-tight">
                  Engineering clean, living code.
                </h3>
                <p className="text-slate-400 font-light leading-relaxed text-base lg:text-lg">
                  Our engineering workspace comes alive with real-time VS Code environments, git commits, terminal build logs, and high-speed API connections.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="p-6 lg:p-10 rounded-3xl bg-slate-950 border border-emerald-500/30 shadow-[0_30px_90px_rgba(16,185,129,0.1)] font-mono text-xs space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4 text-slate-400">
                    <span>VS CODE // WEBMASH PRODUCTION KERNEL</span>
                    <span className="text-emerald-400 font-semibold flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>LIVE COMPILE</span>
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/80 text-emerald-400 space-y-2 border border-white/5 shadow-inner">
                    <p className="text-slate-500">$ npm run build &amp;&amp; deploy --production</p>
                    <p className="text-slate-300">⚡ Initializing Next.js 15 App Router...</p>
                    <p className="text-slate-300">✓ Bundling static assets and server components</p>
                    <p className="text-white font-bold">✓ Compiled successfully (Production Ready)</p>
                    <p className="text-blue-400 pt-2">Route (App) &nbsp; &nbsp; Status &nbsp; &nbsp; Optimization</p>
                    <p className="text-slate-400">┌ ○ / &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Active &nbsp; &nbsp; SEO Focused</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CHAPTER 05: LAUNCH */}
          <div className="w-full lg:w-[100vw] lg:h-screen flex items-center justify-center px-6 lg:px-28 relative bg-gradient-to-br from-[#070A12] via-[#0B1428] to-[#0A0F1D] py-12 lg:py-0">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" aria-hidden="true" />
            <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-xs font-bold text-sky-400 tracking-widest">CHAPTER 05 // LAUNCH</span>
                <h3 className="text-3xl lg:text-6xl font-extrabold text-white tracking-tight">
                  Deploying secure infrastructure.
                </h3>
                <p className="text-slate-400 font-light leading-relaxed text-base lg:text-lg">
                  Cloud dashboards light up green. DNS routing, Cloudflare WAF protection, SSL certificates, business email routing, and edge hosting go live simultaneously.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="p-6 lg:p-10 rounded-3xl bg-white/[0.04] border border-sky-500/30 backdrop-blur-3xl space-y-4 shadow-[0_30px_90px_rgba(56,189,248,0.15)]">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4 font-mono text-xs text-slate-400">
                    <span>INFRASTRUCTURE // CLOUD DASHBOARD</span>
                    <span className="text-emerald-400 font-semibold">100% Operational</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1 backdrop-blur-md">
                      <span className="text-[10px] text-emerald-400 block">SSL CERTIFICATE</span>
                      <p className="text-xs font-bold text-white">TLS 1.3 Active ✓</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-1 backdrop-blur-md">
                      <span className="text-[10px] text-blue-400 block">DNS ROUTING</span>
                      <p className="text-xs font-bold text-white">Cloudflare Proxy ✓</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-slate-400 block">BUSINESS EMAIL</span>
                      <p className="text-xs font-bold text-white">MX Verified ✓</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-slate-400 block">PRODUCTION</span>
                      <p className="text-xs font-bold text-emerald-400">LIVE DEPLOY ✓</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CHAPTER 06: GROWTH */}
          <div className="w-full lg:w-[100vw] lg:h-screen flex items-center justify-center px-6 lg:px-28 relative bg-gradient-to-br from-[#080E1B] via-[#091226] to-[#04060B] py-12 lg:py-0">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" aria-hidden="true" />
            <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-xs font-bold text-blue-400 tracking-widest">CHAPTER 06 // GROWTH</span>
                <h3 className="text-3xl lg:text-6xl font-extrabold text-white tracking-tight">
                  Accelerating long-term scale.
                </h3>
                <p className="text-slate-400 font-light leading-relaxed text-base lg:text-lg">
                  Launching is only the beginning. We continuously monitor analytics, optimize SEO performance, and integrate AI automations to drive exponential revenue growth.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="p-6 lg:p-10 rounded-3xl bg-slate-900 border border-blue-500/30 shadow-[0_30px_90px_rgba(37,99,235,0.2)] space-y-6">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4 font-mono text-xs text-slate-400">
                    <span>TELEMETRY // GROWTH TELEMETRY</span>
                    <span className="text-emerald-400 font-semibold">Continuous Optimization</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-slate-400">SEO RANKING</span>
                      <p className="text-lg font-bold text-emerald-400">SEO Focused</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-slate-400">CORE WEB VITALS</span>
                      <p className="text-lg font-bold text-blue-400">Performance Ready</p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex justify-between items-center shadow-2xl">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-200 block">AI WORKFLOWS</span>
                      <p className="text-lg font-bold">Autonomous Client Engine Active</p>
                    </div>
                    <span className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md text-xs font-mono font-bold">24/7 Running</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}