"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function FeaturedWork() {
  const projects = [
    {
      id: "01",
      title: "Saffron & Vine — Culinary Hospitality & Reserve Engine",
      industry: "Gastronomy & Restaurant Group",
      description: "Crafted a sensory digital flagship featuring immersive cinematic video viewports, real-time table reservations, and an elite brand identity that increased online booking revenue by 240%.",
      services: ["Website Design", "Development", "Branding", "Hosting"],
      results: "+240% Direct Bookings • 0.18s TTFB Speed",
      timeline: "4 Weeks",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Cloudflare WAF"],
      href: "/work/saffron-vine",
      bgColor: "bg-[#050816]",
      textColor: "text-white",
      subColor: "text-slate-400",
      accentColor: "from-orange-500 to-amber-600",
      accentBorder: "border-orange-500/30",
      accentGlow: "shadow-[0_0_90px_rgba(249,115,22,0.18)]",
      badgeBg: "bg-orange-500/10 text-orange-400 border-orange-500/30",
      reverse: false,
      visualContent: (
        <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl border border-orange-500/30 bg-[#0A0F1D] shadow-[0_0_90px_rgba(249,115,22,0.15)] backdrop-blur-3xl overflow-hidden flex flex-col font-sans group">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-orange-600/15 rounded-full blur-[130px] pointer-events-none" />
          
          {/* Browser Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0E1526]/90 z-20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="px-4 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-orange-300 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span>https://saffron-vine.com</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 hidden sm:block">TLS 1.3 Secure</div>
          </div>

          {/* Interactive Screen Preview */}
          <div className="flex-1 overflow-hidden p-6 lg:p-10 flex flex-col justify-between relative z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-mono text-[10px]">
                <span>MICHELIN-GRADE CULINARY EXPERIENCE</span>
              </div>
              <h4 className="text-2xl lg:text-4xl font-bold text-white tracking-tight">
                Gastronomy Elevated Through Cinematic Design
              </h4>
              <p className="text-slate-400 text-xs lg:text-sm font-light leading-relaxed">
                Seamless table reservation flow synchronized with automated CRM table management.
              </p>
            </div>

            {/* Floating Device / UI Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-2">
                <span className="text-[10px] font-mono text-orange-400 block">RESERVATION NODE</span>
                <p className="text-xs font-semibold text-white">Chef &apos;s Table — Tasting Menu</p>
                <span className="text-[10px] text-emerald-400 font-mono">Confirmed • Party of 4</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-2">
                <span className="text-[10px] font-mono text-slate-400 block">SERVICES SYNCED</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 text-[10px] font-mono">Design</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 text-[10px] font-mono">Development</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 text-[10px] font-mono">Hosting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "02",
      title: "Vitalis Health — Biometric Telemetry & Patient Portal",
      industry: "Healthcare & Biotech",
      description: "Engineered an enterprise-grade, HIPAA-compliant patient management web application with instantaneous appointment booking, encrypted telemetry records, and ultra-accessible UI/UX.",
      services: ["Website Design", "UI/UX Design", "Development", "SEO", "Hosting"],
      results: "100% HIPAA Compliance • 99.99% Uptime",
      timeline: "6 Weeks",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS Cluster", "PostgreSQL"],
      href: "/work/vitalis-health",
      bgColor: "bg-[#FFFFFF]",
      textColor: "text-slate-900",
      subColor: "text-slate-600",
      accentColor: "from-emerald-500 to-teal-600",
      accentBorder: "border-emerald-500/30",
      accentGlow: "shadow-[0_0_90px_rgba(16,185,129,0.18)]",
      badgeBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
      reverse: true,
      visualContent: (
        <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl border border-emerald-500/30 bg-[#FFFFFF] shadow-[0_20px_60px_rgba(16,185,129,0.12)] backdrop-blur-3xl overflow-hidden flex flex-col font-sans group">
          <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
          
          {/* Browser Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90 z-20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="px-4 py-1 rounded-md bg-slate-200/60 border border-slate-300 font-mono text-xs text-emerald-700 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>https://vitalis-health.org</span>
            </div>
            <div className="text-[11px] font-mono text-slate-500 hidden sm:block">HIPAA Secure</div>
          </div>

          {/* Interactive Screen Preview */}
          <div className="flex-1 overflow-hidden p-6 lg:p-10 flex flex-col justify-between relative z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 font-mono text-[10px]">
                <span>BIOMETRIC TELEMETRY ENGINE</span>
              </div>
              <h4 className="text-2xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Next-Generation Patient Care Architecture
              </h4>
              <p className="text-slate-600 text-xs lg:text-sm font-light leading-relaxed">
                Real-time physician dispatch and encrypted medical record pipelines.
              </p>
            </div>

            {/* Telemetry Mockup Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-2">
                <span className="text-[10px] font-mono text-emerald-600 block">ACTIVE CONSULTATION</span>
                <p className="text-xs font-semibold text-slate-900">Dr. Sarah Jenkins — Cardiology</p>
                <span className="text-[10px] text-emerald-600 font-mono">Live Video Session Active</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-2">
                <span className="text-[10px] font-mono text-slate-500 block">SERVICES SYNCED</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono">UI/UX</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono">SEO</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono">Hosting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "03",
      title: "Apex Residences — Ultra-Luxury Architectural Flagship",
      industry: "Real Estate & Architecture",
      description: "Designed a breathtaking interactive real estate portfolio showcasing high-end penthouses with 3D virtual tours, instant valuation calculators, and an ultra-refined editorial grid.",
      services: ["Website Design", "Development", "Branding", "AI Automation", "SEO"],
      results: "+310% Property Inquiries • 1.4 Avg Search Rank",
      timeline: "5 Weeks",
      techStack: ["Next.js", "Three.js", "Tailwind CSS", "Groq LLM", "Cloudflare"],
      href: "/work/apex-residences",
      bgColor: "bg-[#050816]",
      textColor: "text-white",
      subColor: "text-slate-400",
      accentColor: "from-blue-500 to-indigo-600",
      accentBorder: "border-blue-500/30",
      accentGlow: "shadow-[0_0_90px_rgba(37,99,235,0.18)]",
      badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      reverse: false,
      visualContent: (
        <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl border border-blue-500/30 bg-[#0A0F1D] shadow-[0_0_90px_rgba(37,99,235,0.15)] backdrop-blur-3xl overflow-hidden flex flex-col font-sans group">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
          
          {/* Browser Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0E1526]/90 z-20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="px-4 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-blue-300 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>https://apex-residences.com</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 hidden sm:block">WebGL 3D Active</div>
          </div>

          {/* Interactive Screen Preview */}
          <div className="flex-1 overflow-hidden p-6 lg:p-10 flex flex-col justify-between relative z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[10px]">
                <span>SPATIAL REAL ESTATE SHOWCASE</span>
              </div>
              <h4 className="text-2xl lg:text-4xl font-bold text-white tracking-tight">
                Architectural Mastery for Digital Flagships
              </h4>
              <p className="text-slate-400 text-xs lg:text-sm font-light leading-relaxed">
                AI-powered property matching engine paired with immersive 3D walkthroughs.
              </p>
            </div>

            {/* Property Inquiry Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-2">
                <span className="text-[10px] font-mono text-blue-400 block">FEATURED LISTING</span>
                <p className="text-xs font-semibold text-white">The Sky Penthouse — Manhattan</p>
                <span className="text-[10px] text-emerald-400 font-mono">$18,500,000 • Available</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-2">
                <span className="text-[10px] font-mono text-slate-400 block">SERVICES SYNCED</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono">Branding</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono">AI Automation</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono">SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <section
          key={project.id}
          className={`relative isolate overflow-hidden ${project.bgColor} ${project.textColor} min-h-screen flex items-center py-28 lg:py-36 border-t border-white/10 transition-colors duration-700`}
        >
          {/* Layered Mesh Lighting & Subtle Noise Texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30 blur-[150px]"
            style={{
              background: `radial-gradient(circle at ${index % 2 === 0 ? "20% 30%" : "80% 70%"}, rgba(37,99,235,0.15) 0%, transparent 60%)`,
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16 w-full">
            <div
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                project.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* LEFT / RIGHT: EDITORIAL TYPOGRAPHY & DETAILS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[45%] space-y-8"
              >
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                    {project.id}
                  </span>
                  <span className="text-slate-500">/</span>
                  <span className={`px-3.5 py-1.5 rounded-full border text-xs font-mono ${project.badgeBg}`}>
                    {project.industry}
                  </span>
                </div>

                <h2 className="text-[clamp(2.2rem,4vw,3.8rem)] font-extrabold tracking-tight leading-[1.08]">
                  {project.title}
                </h2>

                <p className={`text-base lg:text-lg font-light leading-relaxed ${project.subColor}`}>
                  {project.description}
                </p>

                {/* SERVICES USED */}
                <div className="space-y-3">
                  <p className="font-mono text-[11px] tracking-widest uppercase text-slate-500">
                    Services Applied
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, sIndex) => (
                      <span
                        key={sIndex}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-transform hover:scale-105 duration-200 ${
                          index % 2 === 0
                            ? "bg-white/[0.03] border-white/10 text-slate-300"
                            : "bg-slate-200/60 border-slate-300 text-slate-700"
                        }`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RESULTS ACHIEVED */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md space-y-1">
                  <span className="font-mono text-[10px] text-slate-500 block uppercase tracking-wider">
                    Results Achieved
                  </span>
                  <p className="text-sm font-semibold tracking-wide text-emerald-400">
                    {project.results}
                  </p>
                </div>

                {/* VIEW CASE STUDY BUTTON */}
                <div className="pt-2">
                  <Link
                    href={project.href}
                    className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-white text-slate-950 font-bold text-xs shadow-2xl hover:bg-slate-100 hover:scale-105 transition-all duration-300 group"
                  >
                    <span>View Case Study</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>

              {/* RIGHT / LEFT: PREMIUM MOCKUP & VISUAL SHOWCASE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[55%]"
              >
                <motion.div
                  whileHover={{ scale: 1.01, rotateX: 1, rotateY: -1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ perspective: 1000 }}
                  className="w-full"
                >
                  {project.visualContent}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* PREMIUM FULL-WIDTH CLOSING CTA */}
      <section className="relative isolate overflow-hidden bg-[#070A12] text-white py-36 lg:py-48 border-t border-white/10 text-center">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(7,10,18,0) 70%)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-6 space-y-8">
          <p className="font-mono text-xs tracking-[0.4em] text-blue-400 uppercase">
            CONTINUE EXPLORING
          </p>

          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-extrabold tracking-tight leading-[1.05] text-white">
            Explore More Success Stories
          </h2>

          <p className="text-base lg:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Discover our complete portfolio of digital products, websites and growth experiences.
          </p>

          <div className="pt-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-4 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:shadow-[0_0_80px_rgba(37,99,235,0.7)] hover:scale-105 transition-all duration-300 group"
            >
              <span>View All Projects</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2 text-lg">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}