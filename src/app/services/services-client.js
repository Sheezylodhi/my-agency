"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  Code2,
  PenTool,
  Smartphone,
  Cpu,
  Sparkles,
  Database,
  Workflow,
  ShoppingBag,
  Cloud,
  TrendingUp,
  Mail,
  Wrench,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Building2,
  Home,
  Store,
  GraduationCap,
  Factory,
  Truck,
  Briefcase,
  Utensils,
  Plane,
  Scale,
  Compass
} from "lucide-react";

// ==========================================
// DATA STRUCTURES (NO DUPLICATION)
// ==========================================

const SERVICES_DATA = [
  {
    num: "01",
    title: "Web Design & Development",
    slug: "web-design-development",
    href: "/services/web-design-development",
    icon: Globe2,
    desc: "High-performance websites designed around your brand, audience and business objectives.",
    category: "experience",
    tags: ["Corporate Websites", "Landing Pages", "Marketing Websites", "Custom Websites", "Performance Optimization"],
    capabilities: ["Editorial Precision", "Responsive Architecture", "Core Web Vitals Optimized", "Conversion Focused"]
  },
  {
    num: "02",
    title: "Web Applications",
    slug: "web-applications",
    href: "/services/web-applications",
    icon: Code2,
    desc: "Scalable web applications built to simplify workflows, connect teams and power digital products.",
    category: "systems",
    tags: ["SaaS Platforms", "Dashboards", "Customer Portals", "Business Applications", "API Integrations"],
    capabilities: ["Full-Stack Architecture", "Real-Time Sync", "Secure Authentication", "High Scalability"]
  },
  {
    num: "03",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    href: "/services/ui-ux-design",
    icon: PenTool,
    desc: "Research-driven interfaces and design systems that make complex digital products feel simple.",
    category: "experience",
    tags: ["UX Strategy", "Wireframes", "Prototypes", "Design Systems", "Interaction Design"],
    capabilities: ["User Journey Mapping", "Design Systems", "Interactive Prototyping", "Usability Testing"]
  },
  {
    num: "04",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    desc: "Modern mobile experiences built for customers, teams and businesses across iOS and Android.",
    category: "experience",
    tags: ["iOS", "Android", "Cross-Platform", "Business Apps", "Mobile UX"],
    capabilities: ["Native Performance", "Offline Capability", "Push Notifications", "App Store Deployment"]
  },
  {
    num: "05",
    title: "AI Solutions & Automation",
    slug: "ai-automation",
    href: "/services/ai-automation",
    icon: Cpu,
    desc: "Intelligent automation and AI-powered systems that reduce repetitive work and unlock new operational efficiency.",
    category: "systems",
    tags: ["AI Assistants", "Workflow Automation", "AI Integrations", "Document Processing", "Custom AI Tools"],
    capabilities: ["LLM Integration", "Automated Pipelines", "Smart Data Extraction", "Custom Copilots"]
  },
  {
    num: "06",
    title: "ERP & CRM Solutions",
    slug: "erp-crm",
    href: "/services/erp-crm",
    icon: Database,
    desc: "Custom business management platforms that connect sales, customers, inventory, purchasing, finance and operations.",
    category: "systems",
    tags: ["ERP", "CRM", "Inventory", "Sales", "Purchasing", "Reporting"],
    capabilities: ["Unified Operations", "Automated Workflows", "Advanced Reporting", "Role-Based Access"]
  },
  {
    num: "07",
    title: "eCommerce Development",
    slug: "ecommerce-development",
    href: "/services/ecommerce-development",
    icon: ShoppingBag,
    desc: "Conversion-focused commerce experiences built for modern product catalogs, payments and scalable online sales.",
    category: "experience",
    tags: ["Online Stores", "Product Catalogs", "Payments", "Order Management", "Custom Commerce"],
    capabilities: ["Frictionless Checkout", "Secure Payments", "Inventory Sync", "High-Volume Scaling"]
  },
  {
    num: "08",
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    href: "/services/cloud-devops",
    icon: Cloud,
    desc: "Reliable cloud infrastructure, deployment pipelines and environments engineered for performance and scale.",
    category: "infrastructure",
    tags: ["Cloud Deployment", "Docker", "CI/CD", "Cloudflare", "Monitoring", "Security"],
    capabilities: ["Zero Downtime", "Automated CI/CD", "Edge Caching", "Robust Security"]
  },
  {
    num: "09",
    title: "SEO & Digital Growth",
    slug: "seo",
    href: "/services/seo",
    icon: TrendingUp,
    desc: "Technical optimization and growth strategies designed to improve visibility, performance and organic acquisition.",
    category: "growth",
    tags: ["Technical SEO", "On-Page SEO", "Core Web Vitals", "Performance", "Organic Growth"],
    capabilities: ["Technical Audits", "Keyword Dominance", "Speed Optimization", "Conversion Audits"]
  },
  {
    num: "10",
    title: "Branding & Digital Identity",
    slug: "branding",
    href: "/services/branding",
    icon: Sparkles,
    desc: "Distinctive visual identities that create consistency, credibility and recognition across every digital touchpoint.",
    category: "growth",
    tags: ["Logo Design", "Visual Identity", "Brand Systems", "Guidelines", "Digital Branding"],
    capabilities: ["Market Positioning", "Brand Guidelines", "Collateral Design", "Visual Consistency"]
  },
  {
    num: "11",
    title: "Business Email & Domain Setup",
    slug: "business-email-setup",
    href: "/services/business-email-setup",
    icon: Mail,
    desc: "Professional domain and email infrastructure configured for credibility, security and reliable business communication.",
    category: "infrastructure",
    tags: ["Domain Setup", "Business Email", "SPF", "DKIM", "DMARC", "DNS"],
    capabilities: ["Maximum Deliverability", "Secure DNS Records", "Workspace Integration", "Spam Prevention"]
  },
  {
    num: "12",
    title: "Website Maintenance & Support",
    slug: "website-maintenance",
    href: "/services/website-maintenance",
    icon: Wrench,
    desc: "Ongoing technical support, security updates, performance improvements and maintenance after launch.",
    category: "infrastructure",
    tags: ["Security", "Updates", "Backups", "Bug Fixes", "Performance", "Monitoring"],
    capabilities: ["Proactive Monitoring", "Regular Backups", "Emergency Support", "Continuous Updates"]
  }
];

const CAPABILITY_FLOW = [
  { step: "01", title: "Discover", desc: "Uncover requirements, user psychology, and commercial goals." },
  { step: "02", title: "Strategy", desc: "Map out the technical blueprint, architecture, and roadmap." },
  { step: "03", title: "Design", desc: "Craft intuitive UX frameworks and high-end visual systems." },
  { step: "04", title: "Engineering", desc: "Write clean, robust, high-performance code across stack layers." },
  { step: "05", title: "Automation", desc: "Integrate smart workflows and AI logic to remove friction." },
  { step: "06", title: "Infrastructure", desc: "Deploy on secure, redundant, edge-optimized cloud environments." },
  { step: "07", title: "Growth", desc: "Drive acquisition, search visibility, and brand authority." },
  { step: "08", title: "Support", desc: "Provide continuous monitoring, care, and proactive updates." }
];

const BUSINESS_NEEDS = [
  {
    title: "BUILD SOMETHING NEW",
    subtitle: "Launch high-impact digital touchpoints from scratch.",
    desc: "For companies needing pristine market entry, modern web assets, custom software products, or native multi-platform apps.",
    items: ["Web Design & Development", "Web Applications", "Mobile App Development", "eCommerce Development"]
  },
  {
    title: "AUTOMATE OPERATIONS",
    subtitle: "Connect systems and eliminate manual administrative overhead.",
    desc: "For growing organizations looking to unify sales, customer records, warehouse inventory, and AI-driven workflows.",
    items: ["ERP & CRM Solutions", "AI Solutions & Automation", "Web Applications"]
  },
  {
    title: "IMPROVE PERFORMANCE",
    subtitle: "Harden your infrastructure, security, and runtime speed.",
    desc: "For teams experiencing scaling pains, server vulnerabilities, latency issues, or looking for reliable maintenance.",
    items: ["Cloud & DevOps", "Website Maintenance & Support", "Business Email & Domain Setup"]
  },
  {
    title: "GROW DIGITAL PRESENCE",
    subtitle: "Build enduring brand equity and organic market visibility.",
    desc: "For businesses wanting to sharpen their market positioning, visual identity, and technical search performance.",
    items: ["SEO & Digital Growth", "Branding & Digital Identity", "Web Design & Development"]
  }
];

const INDUSTRIES = [
  { name: "Healthcare", icon: Building2, slug: "healthcare", desc: "Patient portals & compliant records." },
  { name: "Real Estate", icon: Home, slug: "real-estate", desc: "Property listings & CRM systems." },
  { name: "E-commerce & Retail", icon: Store, slug: "ecommerce-retail", desc: "High-conversion online storefronts." },
  { name: "Education", icon: GraduationCap, slug: "education", desc: "LMS platforms & student portals." },
  { name: "Manufacturing", icon: Factory, slug: "manufacturing", desc: "Supply chain & ERP automation." },
  { name: "Logistics", icon: Truck, slug: "logistics", desc: "Fleet tracking & routing software." },
  { name: "Finance", icon: Briefcase, slug: "finance", desc: "Secure transaction dashboards." },
  { name: "Hospitality", icon: Utensils, slug: "hospitality", desc: "Booking systems & menus." },
  { name: "Travel", icon: Plane, slug: "travel", desc: "Itinerary management engines." },
  { name: "Legal", icon: Scale, slug: "legal", desc: "Client portals & secure document handling." }
];

const TECH_GROUPS = [
  { category: "FRONTEND", items: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"] },
  { category: "BACKEND", items: ["Node.js", "Express", "ASP.NET", "Python", "REST APIs"] },
  { category: "DATABASE", items: ["MongoDB", "PostgreSQL", "SQL Server", "Redis", "Prisma"] },
  { category: "INFRASTRUCTURE", items: ["Cloudflare", "Docker", "Vercel", "AWS", "Git"] },
  { category: "AI / AUTOMATION", items: ["OpenAI APIs", "LangChain", "Custom Workflows", "Vector DBs", "Webhooks"] }
];

const WHY_POINTS = [
  { num: "01", title: "BUSINESS-FIRST THINKING", desc: "We don't start with technology. We start by understanding the business problem." },
  { num: "02", title: "DESIGN + ENGINEERING", desc: "Design and development work together instead of being treated as separate processes." },
  { num: "03", title: "SCALABLE ARCHITECTURE", desc: "Systems are built with maintainability and future growth in mind." },
  { num: "04", title: "TRANSPARENT PROCESS", desc: "Clear communication, milestones and expectations throughout the project." },
  { num: "05", title: "LONG-TERM SUPPORT", desc: "Our relationship doesn't have to end at launch." },
  { num: "06", title: "ONE DIGITAL PARTNER", desc: "Strategy, design, engineering, automation, infrastructure and support under one roof." }
];

const PROCESS_STEPS = [
  { num: "01", title: "DISCOVER", desc: "Understand the business, users and objectives." },
  { num: "02", title: "DEFINE", desc: "Turn requirements into a clear strategy and technical direction." },
  { num: "03", title: "DESIGN", desc: "Create the visual system, UX and interaction model." },
  { num: "04", title: "BUILD", desc: "Engineer the platform using scalable architecture." },
  { num: "05", title: "LAUNCH", desc: "Test, optimize and deploy." },
  { num: "06", title: "EVOLVE", desc: "Measure, improve and support the product after launch." }
];

const CASE_STUDIES = [
  {
    category: "Apparel Branding & E-Commerce",
    title: "ZS Digitizing Platform Architecture",
    result: "Custom full-stack digital platform with automated workflows, real-time sync, and secure cloud deployment.",
    slug: "zs-digitizing"
  },
  {
    category: "Digital Agency Infrastructure",
    title: "WebMash Labs Hub & Client Portal",
    result: "Modular service architecture featuring high-speed routing, automated notifications, and role-gated workspaces.",
    slug: "webmash-labs"
  },
  {
    category: "Cloud ERP & Operations",
    title: "Enterprise Inventory & Resource Engine",
    result: "Scalable backend database serialization and intuitive dashboard interfaces for streamlined business operations.",
    slug: "enterprise-erp"
  }
];

const FAQS = [
  { q: "What types of websites do you build?", a: "We build custom, high-performance corporate websites, marketing landing pages, and editorial platforms optimized for speed, conversion, and brand authority." },
  { q: "Can you build custom web applications?", a: "Yes. We specialize in robust SaaS platforms, custom dashboards, customer portals, and internal business applications built on modern frameworks like Next.js and Node.js." },
  { q: "Do you develop mobile applications?", a: "We engineer modern cross-platform and native mobile apps for iOS and Android tailored for customer-facing experiences and business operations." },
  { q: "Can you build ERP or CRM systems?", a: "Absolutely. We design bespoke business management platforms connecting sales, customers, inventory, purchasing, finance, and operations into a single unified system." },
  { q: "Do you provide AI automation solutions?", a: "We integrate smart AI assistants, automated workflows, document processing pipelines, and custom AI tooling designed to eliminate repetitive operational tasks." },
  { q: "Can you handle cloud deployment?", a: "Yes. We configure secure, high-availability cloud infrastructure on Vercel, AWS, and Cloudflare with optimized CDNs, SSL, and automated scaling." },
  { q: "Do you provide ongoing website maintenance?", a: "We offer proactive security oversight, uptime monitoring, dependency updates, and dedicated developer support to ensure long-term stability." },
  { q: "Can you work with an existing website or system?", a: "We frequently audit, refactor, modernize, and scale existing codebases, cloud setups, and design systems." },
  { q: "How long does a typical project take?", a: "Timelines range from 3 to 8 weeks depending on complexity, scope, and integration requirements. We provide clear milestone schedules during discovery." },
  { q: "How do we start a project?", a: "Simply reach out via our contact form or book a consultation call. We discuss your business requirements and formulate the right technical roadmap." }
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function ServicesPageClient() {
  const [activeServiceSlug, setActiveServiceSlug] = useState(SERVICES_DATA[0].slug);
const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const activeService = SERVICES_DATA.find((s) => s.slug === activeServiceSlug) || SERVICES_DATA[0];

  return (
    <div className="min-h-screen text-slate-900 selection:bg-blue-600 selection:text-white overflow-x-hidden font-sans">

      {/* ==========================================
          SECTION 1 — HERO (ALWAYS DARK: #020617)
      ========================================== */}
      <section className="relative pt-32 lg:pt-40 pb-28 px-6 sm:px-8 lg:px-12 xl:px-20 bg-[#020617] text-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
              SERVICES
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Web Development Services Built Around <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                the Way Your Business Works
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              WebMash Labs brings together strategy, design, engineering, automation, infrastructure and growth to build digital solutions that help businesses operate, scale and compete.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-600/20 group"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-white/10 font-medium transition-all"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Architectural Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#070b14]/90 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" aria-hidden="true" />
                </div>
                <div className="text-xs font-mono text-slate-400">WEBMASH LABS // SYSTEM ECOSYSTEM</div>
              </div>

              <div className="space-y-3 relative z-10">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between group hover:border-blue-500/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400">
                      <Compass className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">LAYER 01</div>
                      <div className="text-sm font-semibold text-white">Strategy & Discovery</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">ACTIVE</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between group hover:border-blue-500/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400">
                      <PenTool className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">LAYER 02</div>
                      <div className="text-sm font-semibold text-white">UX & Visual Architecture</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">DESIGNED</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between group hover:border-blue-500/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400">
                      <Code2 className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">LAYER 03</div>
                      <div className="text-sm font-semibold text-white">Full-Stack Engineering</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">SCALABLE</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between group hover:border-blue-500/40 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400">
                      <Cpu className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">LAYER 04</div>
                      <div className="text-sm font-semibold text-white">AI Automation & Cloud</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">OPTIMIZED</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-slate-400">STATUS: ALL SYSTEMS OPERATIONAL</span>
                <span className="font-mono text-blue-400">100% SECURE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* ==========================================
          SECTION 2 — INTRODUCTION (GREY/WHITE: #F8FAFC)
      ========================================== */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-20 border-b border-slate-200 bg-[#F8FAFC] text-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">AGENCY POSITIONING</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              One technology partner. <br />
              Built for the full digital journey.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Businesses shouldn&apos;t have to stitch together disconnected vendors for strategy, design, engineering, automation, and ongoing support. WebMash Labs unifies every digital requirement under one disciplined engineering roof.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col gap-6 relative shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                  <Workflow className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Unified Execution</div>
                  <div className="text-xs text-slate-500">Seamless transition across all phases</div>
                </div>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed pt-4 border-t border-slate-100">
                Every solution is architected with strict adherence to enterprise security, high performance standards, and absolute scalability.
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 3 — PRIMARY SERVICES SHOWCASE (DARK: #0B1120)
      ========================================== */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-20 border-b border-white/10 bg-[#0B1120] text-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400">PRIMARY CAPABILITIES</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">The WebMash Labs Service Suite</h2>
            <p className="text-slate-400">Explore our comprehensive array of 12 foundational digital services.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Vertical Numbered Navigation */}
            <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-2" role="tablist" aria-label="Services list">
              {SERVICES_DATA.map((srv) => {
                const IconComponent = srv.icon;
                const isActive = activeServiceSlug === srv.slug;
                return (
                  <button
                    key={srv.slug}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`service-panel-${srv.slug}`}
                    onClick={() => setActiveServiceSlug(srv.slug)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                      isActive
                        ? "bg-blue-600/15 border-blue-500/50 text-white shadow-lg shadow-blue-600/10"
                        : "bg-slate-900/60 border-white/10 text-slate-400 hover:bg-slate-900 hover:border-white/20 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono ${isActive ? "text-blue-400 font-bold" : "text-slate-500"}`}>{srv.num}</span>
                      <IconComponent className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"}`} aria-hidden="true" />
                      <span className="text-sm font-medium">{srv.title}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "text-blue-400 translate-x-1" : "text-slate-600"}`} aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            {/* Right Dynamic Detail Panel */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeService.slug}
                  id={`service-panel-${activeService.slug}`}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl relative overflow-hidden space-y-8"
                >
                  <div className="absolute top-0 right-0 p-8 text-blue-500/10 font-mono text-7xl font-bold pointer-events-none" aria-hidden="true">
                    {activeService.num}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                        <activeService.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 uppercase">
                        SERVICE {activeService.num}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{activeService.title}</h3>
                    <p className="text-slate-300 text-base leading-relaxed">{activeService.desc}</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="text-xs font-mono text-slate-500 uppercase">Core Capabilities:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeService.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <div className="text-xs font-mono text-slate-500 uppercase">Technical Tags:</div>
                    <div className="flex flex-wrap gap-2">
                      {activeService.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-white/5 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-white/10">
                    <span className="text-xs text-slate-500 font-mono">ROUTE: {activeService.href}</span>
                    <Link
                      href={activeService.href}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all shadow-md shadow-blue-600/20"
                    >
                      Explore {activeService.title} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

          </div>

          {/* Hidden crawlable fallback list so search crawlers can discover all 12 services in plain HTML even when JavaScript state changes */}
          <div className="sr-only">
            <h3>All Services Offered</h3>
            <ul>
              {SERVICES_DATA.map((srv) => (
                <li key={srv.slug}>
                  <Link href={srv.href}>{srv.title}</Link>: {srv.desc}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 4 — CAPABILITY FLOW (WHITE: #FFFFFF)
      ========================================== */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-20 border-b border-slate-200 bg-[#FFFFFF] text-slate-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">SYSTEM ARCHITECTURE</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How capabilities connect across the lifecycle.</h2>
            <p className="text-slate-600">A synchronized digital pipeline from initial discovery to continuous support.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITY_FLOW.map((node) => (
              <div key={node.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-6 relative group hover:border-blue-500/40 hover:bg-white transition-all shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-600 font-bold">{node.step}</span>
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">{node.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 5 — BUSINESS NEEDS (GREY/WHITE: #F1F5F9)
      ========================================== */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-20 border-b border-slate-200 bg-[#F1F5F9] text-slate-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">SOLUTIONS BY NEED</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Tailored for your exact commercial objectives.</h2>
            <p className="text-slate-600">Whether launching an enterprise platform or scaling operations, we align technology with business intent.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BUSINESS_NEEDS.map((need, idx) => (
              <motion.div
                key={need.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-6 group shadow-sm"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 font-semibold">
                    SOLUTION GROUP 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{need.title}</h3>
                  <p className="text-sm font-medium text-slate-800">{need.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{need.desc}</p>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-mono text-slate-500 uppercase">Core Focus Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    {need.items.map((item) => (
                      <span key={item} className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 6 — INDUSTRIES (WHITE: #FFFFFF)
      ========================================== */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-20 border-b border-slate-200 bg-[#FFFFFF] text-slate-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">INDUSTRIES SERVED</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Technology shaped around your industry.</h2>
            <p className="text-slate-600">Every business has different workflows and customers. Our solutions adapt to how your industry operates.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INDUSTRIES.map((ind) => {
              const IndIcon = ind.icon;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500/40 hover:bg-white transition-all flex flex-col justify-between space-y-6 group shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                      <IndIcon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{ind.name}</h3>
                    <p className="text-xs text-slate-600">{ind.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 7 — TECHNOLOGY STACK (DARK: #020617)
      ========================================== */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-20 border-b border-white/10 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-400">TECHNOLOGY STACK</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Built with modern, battle-tested technology.</h2>
            <p className="text-slate-400">Enterprise-grade frameworks engineered for performance, security, and maintainability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TECH_GROUPS.map((group) => (
              <div key={group.category} className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 space-y-6">
                <div className="text-xs font-mono text-blue-400 uppercase tracking-widest">{group.category}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-xl bg-slate-800 text-slate-200 border border-white/5 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 8 — WHY WEBMASH LABS (GREY/WHITE: #F8FAFC)
      ========================================== */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-20 border-b border-slate-200 bg-[#F8FAFC] text-slate-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">WHY WEBMASH LABS</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why businesses choose WebMash Labs.</h2>
            <p className="text-slate-600">A commitment to rigorous engineering, strategic thinking, and flawless execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_POINTS.map((pt) => (
              <div key={pt.num} className="p-8 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
                <span className="text-xs font-mono text-blue-600 font-bold">{pt.num}</span>
                <h3 className="text-lg font-bold text-slate-900">{pt.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 9 — PROCESS (WHITE: #FFFFFF)
      ========================================== */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-20 border-b border-slate-200 bg-[#FFFFFF] text-slate-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">ENGAGEMENT PROCESS</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">From idea to dependable digital system.</h2>
            <p className="text-slate-600">A clear, phased methodology designed to keep projects on track and aligned with objectives.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-6 shadow-sm">
                <span className="text-xs font-mono text-blue-600 font-bold">{step.num}</span>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 10 — FEATURED WORK (GREY/WHITE: #F1F5F9)
      ========================================== */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-20 border-b border-slate-200 bg-[#F1F5F9] text-slate-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">FEATURED WORK</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Built for real business outcomes.</h2>
            <p className="text-slate-600">Explore selected digital products, websites and systems built by WebMash Labs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.slug} className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-6 group shadow-sm">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 font-semibold">
                    {cs.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{cs.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{cs.result}</p>
                </div>
                <Link
                  href={`/work/${cs.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-blue-600 group-hover:text-blue-700 transition-colors pt-4 border-t border-slate-100"
                >
                  View Case Study <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 11 — FAQ (WHITE: #FFFFFF)
      ========================================== */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-20 border-b border-slate-200 bg-[#FFFFFF] text-slate-900">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">FAQ</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently asked questions</h2>
            <p className="text-slate-600">Everything you need to know about partnering with WebMash Labs.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const contentId = `faq-answer-${idx}`;
              return (
                <div key={idx} className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden transition-all shadow-sm">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-blue-600" : ""}`} aria-hidden="true" />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 12 — FINAL CTA (ALWAYS DARK: #020617)
      ========================================== */}
      <section className="py-28 px-6 sm:px-8 lg:px-12 xl:px-20 bg-[#020617] text-white relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
            START A PROJECT
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Have a digital system <br />
            worth building?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us what you&apos;re trying to build, improve or automate. We&apos;ll help you define the right digital solution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-600/20 group"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/contact?expert=true"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-white/10 font-medium transition-all"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}