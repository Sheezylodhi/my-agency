"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Layers,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

// ==========================================
// PROJECTS DATA STRUCTURE
// ==========================================
const PROJECTS = [
  {
    id: 1,
    number: "01",
    slug: "zs-digitizing",
    title: "ZS Digitizing",
    category: "E-Commerce / Digital Platform",
    filterCategory: "Commerce",
    industry: "Manufacturing",
    description: "A custom digital platform designed to simplify product discovery, customer workflows and internal operations through a unified e-commerce experience.",
    longDescription: "Engineered for high-volume manufacturing workflows, bringing seamless catalog synchronization, dynamic pricing, and an intuitive customer dashboard together under a high-performance Next.js architecture.",
    services: ["Strategy", "UI/UX Design", "Web Development", "E-Commerce"],
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    featured: true,
    theme: "dark",
    layout: "featured-large",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "ZS Digitizing E-Commerce Platform Showcase",
    caseStudyHref: "/work/zs-digitizing",
    liveUrl: null
  },
  {
    id: 2,
    number: "02",
    slug: "atlas-operations",
    title: "Atlas Operations",
    category: "ERP / Business System",
    filterCategory: "Business Systems",
    industry: "Logistics",
    description: "A unified operations platform for inventory, orders, teams and business workflows.",
    longDescription: "A centralized enterprise resource platform designed to replace fragmented legacy spreadsheets with real-time operational visibility and automated data synchronization.",
    services: ["System Architecture", "Dashboard Design", "Full-Stack Engineering"],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    featured: false,
    theme: "light",
    layout: "split-left",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Atlas Operations Dashboard Interface",
    caseStudyHref: "/work/atlas-operations",
    liveUrl: null
  },
  {
    id: 3,
    number: "03",
    slug: "medora-health",
    title: "Medora Health",
    category: "Healthcare / Web Application",
    filterCategory: "Applications",
    industry: "Healthcare",
    description: "A modern digital healthcare experience connecting patient services, appointments and secure workflows.",
    longDescription: "Built with zero-knowledge encryption standards and a human-centric interface to bridge patient care coordination with clinical record management.",
    services: ["UX Research", "UI Design", "Secure Web App"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    theme: "white",
    layout: "split-right",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Medora Health Patient Portal",
    caseStudyHref: "/work/medora-health",
    liveUrl: null
  },
  {
    id: 4,
    number: "04",
    slug: "haven-properties",
    title: "Haven Properties",
    category: "Real Estate / Digital Experience",
    filterCategory: "Websites",
    industry: "Real Estate",
    description: "A premium property discovery experience designed around high-intent buyers and modern real estate workflows.",
    longDescription: "An art-directed digital showcase pairing high-end architectural photography with lightning-fast interactive property search and virtual tour scheduling.",
    services: ["Brand Experience", "Web Design", "Frontend Development"],
    technologies: ["React", "Next.js", "Mapbox API"],
    featured: false,
    theme: "light",
    layout: "split-left",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Haven Properties Luxury Real Estate Portal",
    caseStudyHref: "/work/haven-properties",
    liveUrl: null
  },
  {
    id: 5,
    number: "05",
    slug: "nova-commerce",
    title: "Nova Commerce",
    category: "E-Commerce",
    filterCategory: "Commerce",
    industry: "Retail",
    description: "A conversion-focused commerce experience built for modern product discovery and seamless checkout.",
    longDescription: "A minimalist luxury storefront utilizing predictive product recommendations and streamlined checkout flows to maximize average order value.",
    services: ["E-Commerce Strategy", "UI/UX", "Custom Checkout Integration"],
    technologies: ["Next.js", "Stripe API", "Tailwind CSS"],
    featured: false,
    theme: "white",
    layout: "split-right",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Nova Commerce Luxury Storefront",
    caseStudyHref: "/work/nova-commerce",
    liveUrl: null
  },
  {
    id: 6,
    number: "06",
    slug: "fleetflow",
    title: "FleetFlow",
    category: "Logistics / Web Application",
    filterCategory: "Applications",
    industry: "Logistics",
    description: "A centralized logistics platform for fleet visibility, delivery tracking and operational coordination.",
    longDescription: "Real-time telemetry and dispatch dashboard designed to optimize routing schedules and minimize carrier downtime.",
    services: ["Dashboard UI", "WebSockets Integration", "Performance Tuning"],
    technologies: ["Node.js", "React", "Socket.io", "PostgreSQL"],
    featured: false,
    theme: "dark",
    layout: "full-width",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "FleetFlow Logistics Control Hub",
    caseStudyHref: "/work/fleetflow",
    liveUrl: null
  },
  {
    id: 7,
    number: "07",
    slug: "educore",
    title: "EduCore",
    category: "Education / SaaS",
    filterCategory: "Applications",
    industry: "Education",
    description: "A digital learning platform connecting students, instructors, courses and progress in one experience.",
    longDescription: "An interactive learning management ecosystem offering robust student performance analytics and modular course delivery.",
    services: ["Product Design", "SaaS Development", "Database Architecture"],
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    featured: false,
    theme: "light",
    layout: "split-left",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "EduCore Learning Management Interface",
    caseStudyHref: "/work/educore",
    liveUrl: null
  },
  {
    id: 8,
    number: "08",
    slug: "axiom-ai",
    title: "Axiom AI",
    category: "AI / Automation",
    filterCategory: "AI",
    industry: "Finance",
    description: "An AI-powered workflow environment designed to connect intelligent assistants with repeatable business processes.",
    longDescription: "Modular node-based automation workspace that pairs LLM intelligence with secure corporate document parsers.",
    services: ["AI Integration", "Workflow Engineering", "Interface Design"],
    technologies: ["Python", "LangChain", "Next.js", "OpenAI API"],
    featured: false,
    theme: "dark",
    layout: "full-width",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop",
    imageAlt: "Axiom AI Workflow Orchestration",
    caseStudyHref: "/work/axiom-ai",
    liveUrl: null
  }
];

const FILTER_TABS = ["ALL", "WEBSITES", "APPLICATIONS", "COMMERCE", "BUSINESS SYSTEMS", "AI"];

const CAPABILITIES = [
  { num: "01", title: "Websites", desc: "High-performance brand storytelling and immersive digital experiences." },
  { num: "02", title: "Digital Products", desc: "Custom web applications engineered for speed, scale, and usability." },
  { num: "03", title: "Commerce Platforms", desc: "Frictionless online stores optimized for conversion and operations." },
  { num: "04", title: "Business Systems", desc: "Tailored ERP, CRM, and internal tools that eliminate operational drag." },
  { num: "05", title: "AI & Automation", desc: "Intelligent agent workflows and smart document processing pipelines." },
  { num: "06", title: "Mobile Experiences", desc: "Responsive applications built for seamless cross-device engagement." }
];

const INDUSTRIES = [
  { name: "Manufacturing", project: "ZS Digitizing", slug: "zs-digitizing" },
  { name: "Healthcare", project: "Medora Health", slug: "medora-health" },
  { name: "Real Estate", project: "Haven Properties", slug: "haven-properties" },
  { name: "Retail", project: "Nova Commerce", slug: "nova-commerce" },
  { name: "Logistics", project: "Atlas Operations", slug: "atlas-operations" },
  { name: "Education", project: "EduCore", slug: "educore" },
  { name: "Finance", project: "Axiom AI", slug: "axiom-ai" }
];

// ==========================================
// REUSABLE PROJECT IMAGE COMPONENT
// ==========================================
function ProjectImage({ src, alt, theme }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-xl aspect-[16/10] bg-slate-100 dark:bg-slate-900 group`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none"></div>
    </div>
  );
}

// ==========================================
// MAIN REDESIGNED WORK PAGE
// ==========================================
export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = activeFilter === "ALL"
    ? PROJECTS.filter(p => !p.featured)
    : PROJECTS.filter(p => !p.featured && p.filterCategory.toUpperCase() === activeFilter);

  const featuredProject = PROJECTS.find(p => p.featured);

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#0A0A0A] font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ==========================================
          SECTION 1: HERO (Light background #F5F3EF)
          ========================================== */}
{/* ==========================================
    SECTION 1: HERO (Dark background #05070B)
    ========================================== */}
<section className="pt-36 pb-24 md:pt-44 md:pb-32 bg-[#05070B] text-white border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">

      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-4">
          SELECTED WORK / 2024—2026
        </span>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.05]">
          Digital products built to move businesses forward.
        </h1>
      </div>

      <div className="max-w-md md:pb-2">
        <p className="text-lg text-slate-400 font-normal leading-relaxed mb-6">
          A selection of websites, digital products, commerce platforms and
          business systems designed and engineered by WebMash Labs.
        </p>

        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span>Available for Q3/Q4 Projects</span>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ==========================================
          SECTION 2: INTRO / STATEMENT (White background)
          ========================================== */}
      <section className="py-24 bg-white border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-2xl sm:text-4xl font-light text-[#0A0A0A] leading-relaxed tracking-tight mb-12">
              From high-converting websites to complex business platforms, we turn ideas, workflows and operational problems into <span className="font-semibold text-blue-600">digital products</span> people can actually use.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-10 border-t border-[#E5E2DC]">
            {[
              { num: "01", label: "Websites" },
              { num: "02", label: "Web Applications" },
              { num: "03", label: "Commerce" },
              { num: "04", label: "Business Systems" },
              { num: "05", label: "AI & Automation" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs font-mono text-[#737373] mb-1">{item.num}</span>
                <span className="text-sm font-semibold text-[#0A0A0A]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: FILTER SYSTEM (Light Warm background)
          ========================================== */}
      <div className="sticky top-0 z-40 bg-[#F8F8F6]/95 backdrop-blur-md border-b border-[#E5E2DC] py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between overflow-x-auto no-scrollbar gap-6">
          <div className="flex items-center space-x-8 min-w-max">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`text-xs font-mono uppercase tracking-widest transition-colors relative py-2 ${
                    isActive ? "text-[#0A0A0A] font-bold" : "text-[#737373] hover:text-[#0A0A0A]"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="text-xs font-mono text-[#737373] hidden md:block">
            {activeFilter === "ALL" ? PROJECTS.length : filteredProjects.length + (featuredProject && activeFilter === "COMMERCE" ? 1 : 0)} Projects Indexed
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 4: FEATURED PROJECT (Dark immersive background #05070B)
          ========================================== */}
      {featuredProject && (activeFilter === "ALL" || activeFilter === "COMMERCE") && (
        <section className="py-24 bg-[#05070B] text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-500 block mb-2">
                  FEATURED CASE STUDY &bull; {featuredProject.number}
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  {featuredProject.title}
                </h2>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded bg-white/10 text-slate-300 text-xs font-mono border border-white/10">
                Selected Concept
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-3">
                    {featuredProject.category} &bull; {featuredProject.industry}
                  </span>
                  <p className="text-slate-300 text-lg font-light leading-relaxed mb-6">
                    {featuredProject.longDescription}
                  </p>
                  
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 uppercase mb-2">Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.services.map((s, idx) => (
                          <span key={idx} className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded text-slate-300">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 uppercase mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.technologies.map((t, idx) => (
                          <span key={idx} className="text-xs bg-blue-600/20 border border-blue-500/30 px-2.5 py-1 rounded text-blue-300 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <Link
                    href={featuredProject.caseStudyHref}
                    className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-400 transition-colors group"
                  >
                    View Case Study <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      Visit Live Site <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <ProjectImage src={featuredProject.image} alt={featuredProject.imageAlt} theme="dark" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
          SECTION 5: MAIN PROJECT SHOWCASE (Hybrid Rhythm)
          ========================================== */}
      <section className="py-24 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-32">
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                const isEven = index % 2 === 0;
                const isDarkTheme = project.theme === "dark";
                const containerBg = isDarkTheme ? "bg-[#0A0D12] text-white p-8 sm:p-14 rounded-3xl" : "bg-transparent";

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    key={project.id}
                    className={`${containerBg} transition-all`}
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                      
                      {/* Text Column */}
                      <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`text-xs font-mono font-bold ${isDarkTheme ? "text-blue-400" : "text-blue-600"}`}>
                            {project.number}
                          </span>
                          <span className={`${isDarkTheme ? "text-slate-700" : "text-slate-300"}`}>&bull;</span>
                          <span className={`text-xs font-mono uppercase tracking-wider ${isDarkTheme ? "text-slate-400" : "text-[#737373]"}`}>
                            {project.category}
                          </span>
                        </div>

                        <h3 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-4 ${isDarkTheme ? "text-white" : "text-[#0A0A0A]"}`}>
                          {project.title}
                        </h3>

                        <p className={`text-base font-light leading-relaxed mb-6 ${isDarkTheme ? "text-slate-300" : "text-[#525252]"}`}>
                          {project.longDescription}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`text-[11px] font-mono px-2.5 py-1 rounded border ${
                                isDarkTheme
                                  ? "bg-white/5 border-white/10 text-slate-300"
                                  : "bg-white border-[#E5E2DC] text-[#525252]"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-6">
                          <Link
                            href={project.caseStudyHref}
                            className={`inline-flex items-center text-sm font-semibold transition-colors group ${
                              isDarkTheme ? "text-white hover:text-blue-400" : "text-[#0A0A0A] hover:text-blue-600"
                            }`}
                          >
                            View Case Study <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center text-sm font-semibold transition-colors ${
                                isDarkTheme ? "text-slate-400 hover:text-white" : "text-[#737373] hover:text-[#0A0A0A]"
                              }`}
                            >
                              Visit Live Site <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Image Column */}
                      <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-1"}`}>
                        <div className="shadow-xl rounded-2xl overflow-hidden border border-black/5 dark:border-white/10">
                          <ProjectImage src={project.image} alt={project.imageAlt} theme={project.theme} />
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: VISUAL BREAK SECTION (Dark statement #0A0D12)
          ========================================== */}
      <section className="py-28 bg-[#0A0D12] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-mono block mb-4">THE ENGINEERING MINDSET</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Different problems. Different industries. One engineering mindset.
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            From customer-facing experiences to internal business systems, we design and engineer digital products around the way organizations actually work.
          </p>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: CAPABILITIES SECTION (White background)
          ========================================== */}
      <section className="py-24 bg-white border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-2">WHAT WE BUILD</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A]">
              Capabilities engineered for scale.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F8F8F6] border border-[#E5E2DC] hover:border-blue-600/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono text-blue-600 font-bold block mb-4">{cap.num}</span>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 group-hover:text-blue-600 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#525252] font-light leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E5E2DC] flex items-center justify-between text-xs font-mono text-[#737373]">
                  <span>Explore capability</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-blue-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 8: INDUSTRY CONNECTION (Light Warm background)
          ========================================== */}
      <section className="py-24 bg-[#F5F3EF] border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-2">INDUSTRY EXPERTISE</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A]">
                Built across diverse sectors.
              </h2>
            </div>
            <p className="text-sm text-[#525252] max-w-sm font-light">
              Tailoring high-performance digital infrastructure to meet strict industry-specific demands and regulatory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 divide-y divide-[#E5E2DC] border-y border-[#E5E2DC]">
            {INDUSTRIES.map((ind, idx) => (
              <Link
                key={idx}
                href={`/work/${ind.slug}`}
                className="py-6 flex items-center justify-between group hover:px-4 transition-all duration-300 bg-transparent hover:bg-white"
              >
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-[#737373]">0{idx + 1}</span>
                  <span className="text-lg sm:text-xl font-semibold text-[#0A0A0A] group-hover:text-blue-600 transition-colors">
                    {ind.name}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-[#737373] hidden sm:inline-block">
                    Featured: {ind.project}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#E5E2DC] group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#0A0A0A] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 9: CASE STUDY PREVIEW (White background)
          ========================================== */}
      <section className="py-24 bg-white border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-2">BEHIND THE WORK</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A] mb-4">
              See how the work comes together.
            </h2>
            <p className="text-sm text-[#525252] font-light">
              Explore how we approach strategy, design and engineering through detailed project case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "ZS Digitizing", category: "E-Commerce Platform", slug: "zs-digitizing", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop" },
              { title: "Atlas Operations", category: "Business Operations Platform", slug: "atlas-operations", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" }
            ].map((cs, idx) => (
              <div key={idx} className="group bg-[#F8F8F6] border border-[#E5E2DC] rounded-2xl overflow-hidden flex flex-col justify-between">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#737373] block mb-1">{cs.category}</span>
                    <h3 className="text-xl font-bold text-[#0A0A0A]">{cs.title}</h3>
                  </div>
                  <Link
                    href={`/work/${cs.slug}`}
                    className="inline-flex items-center text-xs font-mono font-bold text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 10: FINAL CTA (Dark immersive background #05070B)
          ========================================== */}
      <section className="py-32 bg-[#05070B] text-white relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-mono block mb-4">START A CONVERSATION</span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Have something worth building?
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl font-light max-w-xl mx-auto leading-relaxed mb-10">
            Tell us what you're working on. We'll help turn the idea, workflow or challenge into a digital product built for real-world use.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-xl shadow-blue-600/25 group"
            >
              Start a Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact?expert=true"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 transition-all"
            >
              Talk to an Expert →
            </Link>
          </div>

          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Websites &bull; Applications &bull; Commerce &bull; Business Systems &bull; AI
          </div>
        </div>
      </section>

    </div>
  );
}