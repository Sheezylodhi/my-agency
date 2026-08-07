import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Code2, 
  Workflow, 
  ShieldCheck, 
  Server, 
  Database, 
  Layout, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Sparkles 
} from "lucide-react";

// ==========================================
// CENTRALIZED CASE STUDY & PROJECT DATA
// ==========================================
const CASE_STUDIES = {
  "zs-digitizing": {
    id: 1,
    number: "01",
    slug: "zs-digitizing",
    title: "ZS Digitizing",
    category: "E-Commerce / Digital Platform",
    industry: "Manufacturing",
    summary: "A custom digital platform designed to simplify product discovery, customer workflows and internal operations through a unified e-commerce experience.",
    statement: "Building digital products around the way high-volume manufacturing businesses actually operate and scale.",
    challenge: "The client operated within a traditional manufacturing space characterized by fragmented client requests, manual catalog handling, and a complete lack of centralized digital discovery. Customers struggled with finding precise product variations, leading to extended sales cycles, communication bottlenecks, and administrative overhead.",
    approach: [
      { num: "01", title: "Strategy", desc: "Mapped out customer purchasing journeys and catalog architecture to streamline high-volume ordering." },
      { num: "02", title: "UX / Architecture", desc: "Designed intuitive catalog hierarchies and instant-search patterns to minimize discovery friction." },
      { num: "03", title: "Design", desc: "Crafted a clean, conversion-focused digital flagship experience tailored to industrial clientele." },
      { num: "04", title: "Engineering", desc: "Implemented a high-performance Next.js full-stack system with rapid database query resolutions." },
      { num: "05", title: "Optimization", desc: "Tuned asset delivery, caching layers, and mobile responsiveness for flawless performance." }
    ],
    features: [
      "Advanced product discovery and filtering system",
      "Dynamic pricing and catalog synchronization",
      "Streamlined customer dashboard for order tracking",
      "Unified e-commerce checkout workflows",
      "Manufacturing-oriented operational views",
      "Secure role-based account management"
    ],
    designDirection: "The visual language combines industrial credibility with modern e-commerce clarity. Generous whitespace, razor-sharp typography, and structured grid compositions establish an authoritative brand presence.",
    engineering: {
      overview: "Built for lightning-fast performance and reliable inventory handling under load.",
      frontend: "Developed with Next.js App Router for optimal server-side rendering, SEO readiness, and smooth client transitions.",
      backend: "Node.js service layer handling secure API endpoints, transactional emails, and order data serialization.",
      database: "MongoDB schema optimized for flexible product attribute variations and rapid document retrieval.",
      apis: "Custom RESTful routing with integrated validation middleware and error handling."
    },
    outcome: "The result is a unified digital experience that transforms traditional manual manufacturing catalog workflows into an automated, high-performance e-commerce platform.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    services: ["Strategy", "UI/UX Design", "Web Development", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop",
    liveUrl: null,
    nextProject: { slug: "atlas-operations", title: "Atlas Operations", number: "02", category: "ERP / Business System" }
  },
  "atlas-operations": {
    id: 2,
    number: "02",
    slug: "atlas-operations",
    title: "Atlas Operations",
    category: "ERP / Business System",
    industry: "Logistics",
    summary: "A unified operations platform for inventory, orders, teams and business workflows.",
    statement: "Eliminating operational drag by replacing disconnected spreadsheets with centralized, real-time enterprise visibility.",
    challenge: "Logistics coordinators and warehouse supervisors relied on fragile, disconnected spreadsheets and legacy desktop tools. This created severe data silos, delayed status updates, and high vulnerability to human error during critical inventory transfers.",
    approach: [
      { num: "01", title: "Strategy", desc: "Audited existing supply chain data structures and mapped out unified data entities." },
      { num: "02", title: "UX / Architecture", desc: "Designed high-density dashboard layouts optimized for rapid data ingestion and status scanning." },
      { num: "03", title: "Design", desc: "Engineered a purposeful, distraction-free enterprise UI with high data legibility." },
      { num: "04", title: "Engineering", desc: "Constructed a real-time reactive frontend paired with a robust relational database core." }
    ],
    features: [
      "Real-time inventory tracking and ledger synchronization",
      "Centralized order management and status pipelines",
      "Role-based team workflows and permission boundaries",
      "High-density operational analytics dashboards",
      "Automated event logging and audit trails",
      "Optimized query performance for large datasets"
    ],
    designDirection: "Functional minimalism. Every pixel serves to communicate operational status instantly, using clear visual hierarchies, crisp typography, and deliberate color coding for system alerts.",
    engineering: {
      overview: "Engineered for uncompromising data integrity, low latency, and high concurrent read/write capacity.",
      frontend: "React-based single-page dashboard architecture with state management optimized for frequent live updates.",
      backend: "Node.js core handling complex transaction logic and background synchronization workers.",
      database: "PostgreSQL relational schema ensuring strict consistency constraints across inventory and orders.",
      apis: "Secure authenticated endpoints supported by Redis caching layers for instant data retrieval."
    },
    outcome: "Atlas Operations successfully consolidated multi-department workflows into a single cohesive system, drastically reducing operational friction and improving inventory tracking accuracy.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    services: ["System Architecture", "Dashboard Design", "Full-Stack Engineering"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    liveUrl: null,
    nextProject: { slug: "medora-health", title: "Medora Health", number: "03", category: "Healthcare / Web Application" }
  },
  "medora-health": {
    id: 3,
    number: "03",
    slug: "medora-health",
    title: "Medora Health",
    category: "Healthcare / Web Application",
    industry: "Healthcare",
    summary: "A modern digital healthcare experience connecting patient services, appointments and secure workflows.",
    statement: "Bridging clinical care coordination with human-centered digital experiences for patients and providers.",
    challenge: "Patient engagement touchpoints were fragmented across outdated portals, phone bookings, and paper forms. Clinicians struggled with administrative overhead while patients experienced disjointed navigation when booking appointments and accessing care summaries.",
    approach: [
      { num: "01", title: "Strategy", desc: "Conducted UX research focused on reducing patient anxiety and streamlining appointment flows." },
      { num: "02", title: "UX / Architecture", desc: "Created empathetic user journeys balancing clinical rigor with accessible digital interactions." },
      { num: "03", title: "Design", desc: "Designed a calm, trustworthy visual identity utilizing reassuring tones and clear typography." },
      { num: "04", title: "Engineering", desc: "Built a secure, type-safe Next.js web application with strict data handling practices." }
    ],
    features: [
      "Intuitive patient appointment scheduling workflows",
      "Secure patient-provider communication portals",
      "Clean clinical dashboard views for care coordinators",
      "Responsive patient intake and medical history forms",
      "Role-segregated access control for staff and patients",
      "Fast, accessible mobile and desktop interfaces"
    ],
    designDirection: "Calm, clean, and trustworthy. The aesthetic avoids clinical coldness in favor of warm neutrals, approachable typography, and uncluttered whitespace.",
    engineering: {
      overview: "Designed with an emphasis on type safety, input validation, and responsive rendering across all devices.",
      frontend: "Next.js with TypeScript ensuring rigorous component typing and predictable state propagation.",
      backend: "Secure API routes implementing stringent sanitization and validation standards.",
      database: "Optimized data models supporting structured patient records and schedule matrices.",
      apis: "RESTful architecture with encrypted payload transmission."
    },
    outcome: "Medora Health delivered a streamlined, human-centric web portal that bridges the gap between administrative healthcare workflows and patient accessibility.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    services: ["UX Research", "UI Design", "Secure Web App"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    liveUrl: null,
    nextProject: { slug: "haven-properties", title: "Haven Properties", number: "04", category: "Real Estate / Digital Experience" }
  },
  "haven-properties": {
    id: 4,
    number: "04",
    slug: "haven-properties",
    title: "Haven Properties",
    category: "Real Estate / Digital Experience",
    industry: "Real Estate",
    summary: "A premium property discovery experience designed around high-intent buyers and modern real estate workflows.",
    statement: "Elevating luxury real estate discovery through cinematic visual storytelling and lightning-fast spatial search.",
    challenge: "High-end real estate properties require presentation standards that match their physical value. Existing platforms relied on cluttered layouts, slow map renderings, and generic listing cards that failed to communicate architectural prestige.",
    approach: [
      { num: "01", title: "Strategy", desc: "Defined an editorial brand positioning suited for high-net-worth property buyers." },
      { num: "02", title: "UX / Architecture", desc: "Integrated immersive media layouts with instantaneous geographic filtering." },
      { num: "03", title: "Design", desc: "Created a magazine-style visual rhythm pairing large architectural photography with minimal UI." },
      { num: "04", title: "Engineering", desc: "Developed fluid map integrations and buttery-smooth property gallery transitions." }
    ],
    features: [
      "Cinematic full-width architectural photo galleries",
      "Interactive Mapbox integration for geographic filtering",
      "Frictionless virtual tour scheduling workflows",
      "Curated high-intent buyer inquiry funnels",
      "Responsive property detail presentations",
      "Optimized asset delivery for high-resolution imagery"
    ],
    designDirection: "Editorial luxury. Inspired by high-end architectural publications, the layout emphasizes generous negative space, sophisticated serif/sans-serif pairing, and immersive imagery.",
    engineering: {
      overview: "Optimized for heavy image assets and fluid client-side mapping interactions without performance degradation.",
      frontend: "React and Next.js frontend with dynamic image optimization and lazy-loading pipelines.",
      backend: "Lightweight API layer serving structured property metadata and geolocation coordinates.",
      apis: "Mapbox GL JS integration for responsive spatial querying and custom map styling."
    },
    outcome: "Haven Properties repositioned the agency's digital catalog into an immersive, editorial showcase that elevates property discovery into a refined digital experience.",
    technologies: ["React", "Next.js", "Mapbox API"],
    services: ["Brand Experience", "Web Design", "Frontend Development"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    liveUrl: null,
    nextProject: { slug: "nova-commerce", title: "Nova Commerce", number: "05", category: "E-Commerce" }
  },
  "nova-commerce": {
    id: 5,
    number: "05",
    slug: "nova-commerce",
    title: "Nova Commerce",
    category: "E-Commerce",
    industry: "Retail",
    summary: "A conversion-focused commerce experience built for modern product discovery and seamless checkout.",
    statement: "Crafting minimalist luxury storefronts designed to maximize product desire and checkout completion.",
    challenge: "Modern retail shoppers demand instantaneous page loads, tactile product visuals, and zero friction during checkout. Standard template storefronts suffer from clumsy cart mechanics, slow transitions, and generic layouts that fail to build brand loyalty.",
    approach: [
      { num: "01", title: "Strategy", desc: "Analyzed checkout drop-off points and restructured product discovery funnels." },
      { num: "02", title: "UX / Architecture", desc: "Streamlined cart drawer mechanics and multi-step payment flows into single-page clarity." },
      { num: "03", title: "Design", desc: "Built a minimalist luxury aesthetic putting high-end product photography front and center." },
      { num: "04", title: "Engineering", desc: "Integrated robust payment gateways with reactive cart state synchronization." }
    ],
    features: [
      "Immersive product discovery grids and galleries",
      "Predictive product recommendations engine",
      "Frictionless slide-over cart experience",
      "Custom Stripe checkout integration",
      "Optimized mobile shopping interactions",
      "Lightning-fast page transitions"
    ],
    designDirection: "Understated elegance. Clean grid systems, subtle borders, monochromatic color grading, and crisp typography allow product imagery to drive the visual narrative.",
    engineering: {
      overview: "Built for speed, reliability, and secure transaction processing under high traffic spikes.",
      frontend: "Next.js application with optimized client-side state for instantaneous cart updates.",
      backend: "Secure serverless API routes interfacing directly with payment infrastructure.",
      apis: "Stripe API integration ensuring encrypted, compliant transaction flows."
    },
    outcome: "Nova Commerce delivered a high-performance, conversion-optimized retail storefront that marries aesthetic minimalism with bulletproof e-commerce engineering.",
    technologies: ["Next.js", "Stripe API", "Tailwind CSS"],
    services: ["E-Commerce Strategy", "UI/UX", "Custom Checkout Integration"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    liveUrl: null,
    nextProject: { slug: "fleetflow", title: "FleetFlow", number: "06", category: "Logistics / Web Application" }
  },
  "fleetflow": {
    id: 6,
    number: "06",
    slug: "fleetflow",
    title: "FleetFlow",
    category: "Logistics / Web Application",
    industry: "Logistics",
    summary: "A centralized logistics platform for fleet visibility, delivery tracking and operational coordination.",
    statement: "Synchronizing real-time telemetry and dispatch logistics into a responsive, high-visibility control center.",
    challenge: "Fleet operators manage dynamic moving assets across vast geographic areas. Without real-time telemetry and unified dispatch interfaces, communication delays led to routing inefficiencies, idle carrier time, and delayed status reporting.",
    approach: [
      { num: "01", title: "Strategy", desc: "Mapped out telemetry ingestion requirements and dispatcher workflow bottlenecks." },
      { num: "02", title: "UX / Architecture", desc: "Designed dual-pane interfaces combining interactive maps with live event logs." },
      { num: "03", title: "Design", desc: "Crafted a dark-mode optimized operational dashboard for around-the-clock monitoring." },
      { num: "04", title: "Engineering", desc: "Implemented WebSocket event streams for real-time tracking updates without polling lag." }
    ],
    features: [
      "Real-time fleet visibility and telemetry monitoring",
      "Live delivery tracking and status progression",
      "Centralized dispatch management interface",
      "WebSocket-powered instant event streaming",
      "Optimized routing schedules and alert triggers",
      "High-performance PostgreSQL data persistence"
    ],
    designDirection: "Tactical precision. Deep slate and dark neutral foundations paired with high-contrast accent indicators provide optimal readability for continuous monitoring environments.",
    engineering: {
      overview: "Architected for real-time bidirectional communication and high-frequency state synchronization.",
      frontend: "React dashboard utilizing efficient canvas/SVG map layers and reactive state bindings.",
      backend: "Node.js server maintaining persistent WebSocket connections for live telemetry broadcast.",
      database: "PostgreSQL optimized for time-series location logs and dispatch event histories.",
      apis: "Socket.io integration paired with RESTful dispatch control endpoints."
    },
    outcome: "FleetFlow provided logistics providers with an enterprise-grade control center that unifies live tracking, dispatch coordination, and route management into one resilient platform.",
    technologies: ["Node.js", "React", "Socket.io", "PostgreSQL"],
    services: ["Dashboard UI", "WebSockets Integration", "Performance Tuning"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    liveUrl: null,
    nextProject: { slug: "educore", title: "EduCore", number: "07", category: "Education / SaaS" }
  },
  "educore": {
    id: 7,
    number: "07",
    slug: "educore",
    title: "EduCore",
    category: "Education / SaaS",
    industry: "Education",
    summary: "A digital learning platform connecting students, instructors, courses and progress in one experience.",
    statement: "Designing modular educational ecosystems that empower students and simplify course management for instructors.",
    challenge: "Educational institutions and course creators often struggle with clunky legacy Learning Management Systems (LMS) that frustrate students and create administrative burdens for instructors grading assignments and tracking engagement.",
    approach: [
      { num: "01", title: "Strategy", desc: "Defined learner engagement loops and instructor content management workflows." },
      { num: "02", title: "UX / Architecture", desc: "Created distinct, role-tailored dashboards for students and educators." },
      { num: "03", title: "Design", desc: "Developed a vibrant, approachable interface design promoting focus and content retention." },
      { num: "04", title: "Engineering", desc: "Constructed a scalable Next.js SaaS architecture with robust database schemas." }
    ],
    features: [
      "Intuitive course management and modular delivery",
      "Student performance analytics and progress tracking",
      "Interactive assignment submission and grading workflows",
      "Clean, distraction-free student learning views",
      "Role-based access for instructors and administrators",
      "Scalable database architecture for growing student bodies"
    ],
    designDirection: "Clean, engaging, and structured. Balanced typography, clear module milestones, and accessible color palettes ensure students stay focused on learning materials.",
    engineering: {
      overview: "Built for scalability, fast course asset loading, and reliable progress persistence.",
      frontend: "Next.js application with modular component architecture for reusable course widgets.",
      backend: "Node.js service layer handling authentication, role authorization, and submission logs.",
      database: "MongoDB document structures ideal for nested course chapters, quizzes, and user progress.",
      apis: "RESTful endpoints supporting secure media streaming and grade calculations."
    },
    outcome: "EduCore delivered a modern, dependable SaaS platform that simplifies course delivery for educators while offering students an engaging, frictionless learning environment.",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
    services: ["Product Design", "SaaS Development", "Database Architecture"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
    liveUrl: null,
    nextProject: { slug: "axiom-ai", title: "Axiom AI", number: "08", category: "AI / Automation" }
  },
  "axiom-ai": {
    id: 8,
    number: "08",
    slug: "axiom-ai",
    title: "Axiom AI",
    category: "AI / Automation",
    industry: "Finance",
    summary: "An AI-powered workflow environment designed to connect intelligent assistants with repeatable business processes.",
    statement: "Orchestrating intelligent LLM workflows and secure corporate document parsing into a cohesive automation workspace.",
    challenge: "Organizations looking to harness artificial intelligence face complex integration hurdles. Isolated chat wrappers fail to connect AI reasoning with core enterprise documents, secure data pipelines, and repeatable operational workflows.",
    approach: [
      { num: "01", title: "Strategy", desc: "Mapped out node-based workflow architectures and secure document parsing pipelines." },
      { num: "02", title: "UX / Architecture", desc: "Designed intuitive visual workspace builders for constructing automated AI chains." },
      { num: "03", title: "Design", desc: "Created a sophisticated, technical dark-themed interface suited for advanced automation engineers." },
      { num: "04", title: "Engineering", desc: "Integrated Python processing microservices with a responsive Next.js frontend." }
    ],
    features: [
      "Modular node-based workflow orchestration",
      "Secure corporate document parsing and embedding",
      "Custom LLM integration and prompt chain management",
      "Real-time execution logs and debugging monitors",
      "Secure API key management and access controls",
      "High-performance asynchronous background workers"
    ],
    designDirection: "Sophisticated technical dark mode. Deep carbon tones paired with electric blue accents and precise monospace metadata communicate high-end artificial intelligence engineering.",
    engineering: {
      overview: "Engineered to handle asynchronous LLM requests, document parsing streams, and complex state graphs.",
      frontend: "Next.js interface featuring interactive drag-and-drop workspace nodes and live status feeds.",
      backend: "Python-powered orchestration backend utilizing LangChain and asynchronous API handlers.",
      database: "PostgreSQL and vector storage for efficient document retrieval and metadata indexing.",
      apis: "OpenAI API integration alongside custom webhook dispatchers."
    },
    outcome: "Axiom AI provided enterprises with a powerful, flexible automation workspace that bridges the gap between advanced artificial intelligence and practical business workflows.",
    technologies: ["Python", "LangChain", "Next.js", "OpenAI API"],
    services: ["AI Integration", "Workflow Engineering", "Interface Design"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    liveUrl: null,
    nextProject: { slug: "zs-digitizing", title: "ZS Digitizing", number: "01", category: "E-Commerce / Digital Platform" }
  }
};

// ==========================================
// REUSABLE CASE STUDY COMPONENTS
// ==========================================

function CaseStudyHero({ project }) {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-[#05070B] text-white overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/work" className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Work
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
            CASE STUDY &bull; {project.number}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full">
                {project.industry}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 group"
                >
                  View Live Project <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 transition-all"
              >
                Back to Work
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 aspect-[16/10] relative">
              <Image
                src={project.image}
                alt={`${project.title} Showcase`}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyOverview({ project }) {
  return (
    <section className="py-24 bg-white border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">PROJECT OVERVIEW</span>
            <p className="text-2xl sm:text-4xl font-light text-[#0A0A0A] leading-relaxed tracking-tight">
              "{project.statement}"
            </p>
          </div>
          <div className="lg:col-span-4 bg-[#F8F8F6] p-6 rounded-2xl border border-[#E5E2DC] space-y-4">
            <div>
              <span className="text-xs font-mono text-[#737373] uppercase block mb-1">Industry</span>
              <span className="text-sm font-semibold text-[#0A0A0A]">{project.industry}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-[#737373] uppercase block mb-1">Project Type</span>
              <span className="text-sm font-semibold text-[#0A0A0A]">{project.category}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-[#737373] uppercase block mb-1">Services</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.services.map((s, idx) => (
                  <span key={idx} className="text-xs bg-white border border-[#E5E2DC] px-2 py-0.5 rounded text-[#525252]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyChallenge({ challenge }) {
  return (
    <section className="py-24 bg-[#F5F3EF] border-b border-[#E5E2DC]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">01 / PROBLEM STATEMENT</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-8">
          The Challenge
        </h2>
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E5E2DC] shadow-sm">
          <p className="text-lg sm:text-xl text-[#525252] font-light leading-relaxed">
            {challenge}
          </p>
        </div>
      </div>
    </section>
  );
}

function CaseStudyApproach({ approach }) {
  return (
    <section className="py-24 bg-white border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">02 / METHODOLOGY</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approach.map((step, idx) => (
            <div key={idx} className="bg-[#F8F8F6] p-8 rounded-2xl border border-[#E5E2DC] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-blue-600 font-bold block mb-4">{step.num}</span>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{step.title}</h3>
                <p className="text-sm text-[#525252] font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyShowcase({ image, title }) {
  return (
    <section className="py-24 bg-[#05070B] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3">VISUAL PRESENTATION</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Product Interface & Experience
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Designed for clarity, performance, and seamless user engagement.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 aspect-[16/10] relative">
          <Image
            src={image}
            alt={`${title} Interface`}
            fill
            className="object-cover object-center"
          />
        </div>
        <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mt-4">
          {title} &mdash; Main Platform Interface
        </p>
      </div>
    </section>
  );
}

function CaseStudyFeatures({ features }) {
  return (
    <section className="py-24 bg-[#F5F3EF] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">03 / CORE CAPABILITIES</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
            The Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-[#E5E2DC] shadow-sm flex items-start space-x-4">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-base text-[#0A0A0A] font-medium leading-relaxed">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyDesign({ designDirection }) {
  return (
    <section className="py-24 bg-white border-b border-[#E5E2DC]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">04 / ART DIRECTION</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-8">
          Designing the Experience
        </h2>
        <div className="bg-[#F8F8F6] p-8 sm:p-12 rounded-3xl border border-[#E5E2DC]">
          <p className="text-lg sm:text-xl text-[#525252] font-light leading-relaxed">
            {designDirection}
          </p>
        </div>
      </div>
    </section>
  );
}

function CaseStudyEngineering({ engineering, technologies }) {
  return (
    <section className="py-24 bg-[#0A0D12] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3">05 / ARCHITECTURE</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Engineering the Product
          </h2>
          <p className="text-slate-400 text-lg font-light">
            {engineering.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <Layout className="w-6 h-6 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Frontend</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{engineering.frontend}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <Server className="w-6 h-6 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Backend</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{engineering.backend}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <Database className="w-6 h-6 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Database</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{engineering.database}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <Code2 className="w-6 h-6 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">APIs & Routing</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{engineering.apis}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyResponsive() {
  return (
    <section className="py-24 bg-[#F5F3EF] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">06 / CROSS-PLATFORM</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-6">
          Built for Every Screen
        </h2>
        <p className="text-[#525252] text-lg font-light max-w-2xl mx-auto mb-16">
          The product interface scales flawlessly across desktop workstations, tablets, and mobile viewports without sacrificing functionality or editorial typography hierarchy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#E5E2DC] flex flex-col items-center">
            <Monitor className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">Desktop Workstations</h3>
            <p className="text-sm text-[#525252] font-light">Spacious layouts optimized for high-density data and immersive visual storytelling.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#E5E2DC] flex flex-col items-center">
            <Tablet className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">Tablet Viewports</h3>
            <p className="text-sm text-[#525252] font-light">Adaptive multi-column restructuring preserving fluid touch navigation.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#E5E2DC] flex flex-col items-center">
            <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">Mobile Devices</h3>
            <p className="text-sm text-[#525252] font-light">Clean single-column stacking ensuring effortless readability on the go.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyOutcome({ outcome }) {
  return (
    <section className="py-24 bg-white border-b border-[#E5E2DC]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">07 / FINAL RESULTS</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-8">
          The Outcome
        </h2>
        <div className="bg-[#F8F8F6] p-8 sm:p-12 rounded-3xl border border-[#E5E2DC]">
          <p className="text-lg sm:text-xl text-[#0A0A0A] font-medium leading-relaxed">
            {outcome}
          </p>
        </div>
      </div>
    </section>
  );
}

function CaseStudyStack({ technologies }) {
  return (
    <section className="py-20 bg-[#F5F3EF] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-2">TECHNOLOGY STACK</span>
            <h3 className="text-2xl font-bold text-[#0A0A0A]">Core Technologies Deployed</h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech, idx) => (
            <div key={idx} className="bg-white px-6 py-4 rounded-xl border border-[#E5E2DC] shadow-sm flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-mono font-semibold text-[#0A0A0A]">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextCaseStudy({ nextProject }) {
  return (
    <section className="py-24 bg-white border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-2">NEXT PROJECT</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A]">
              Explore another case study
            </h2>
          </div>
        </div>

        <Link
          href={`/work/${nextProject.slug}`}
          className="group block bg-[#F8F8F6] border border-[#E5E2DC] p-8 sm:p-12 rounded-3xl hover:border-blue-600/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-blue-600 font-bold block mb-2">
                PROJECT {nextProject.number} &bull; {nextProject.category}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] group-hover:text-blue-600 transition-colors">
                {nextProject.title}
              </h3>
            </div>
            <div className="flex items-center text-sm font-mono font-bold text-[#0A0A0A] group-hover:text-blue-600 transition-colors">
              View Case Study <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function CaseStudyCTA() {
  return (
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
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 transition-all"
          >
            Back to Work →
          </Link>
        </div>

        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          Websites &bull; Applications &bull; Commerce &bull; Business Systems &bull; AI
        </div>
      </div>
    </section>
  );
}

// ==========================================
// DYNAMIC CASE STUDY PAGE COMPONENT
// ==========================================
export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#0A0A0A] font-sans selection:bg-blue-600 selection:text-white">
      <CaseStudyHero project={project} />
      <CaseStudyOverview project={project} />
      <CaseStudyChallenge challenge={project.challenge} />
      <CaseStudyApproach approach={project.approach} />
      <CaseStudyShowcase image={project.image} title={project.title} />
      <CaseStudyFeatures features={project.features} />
      <CaseStudyDesign designDirection={project.designDirection} />
      <CaseStudyEngineering engineering={project.engineering} technologies={project.technologies} />
      <CaseStudyResponsive />
      <CaseStudyOutcome outcome={project.outcome} />
      <CaseStudyStack technologies={project.technologies} />
      <NextCaseStudy nextProject={project.nextProject} />
      <CaseStudyCTA />
    </div>
  );
}