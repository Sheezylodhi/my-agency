"use client";

import { useParams } from "next/navigation";
// Fix: Added ArrowRight to the imports below
import { ArrowLeft, CheckCircle2, ExternalLink, Cpu, Target, Rocket, Shield, PenTool, Layout, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Exhaustive Content Database for all projects
const projectsData = {
  // WEB PROJECTS
  "ecommerce-ecosystem": {
    title: "E-commerce Ecosystem",
    category: "Web Development",
    longDesc: "A high-conversion digital storefront built with Next.js 14. We focused on reducing page load times to under 1.2s and optimizing the checkout flow for mobile users.",
    problem: "The client had a slow legacy site with a 65% cart abandonment rate.",
    solution: "Implemented a headless commerce architecture with real-time inventory and a one-page checkout system.",
    tools: ["Next.js", "Tailwind CSS", "MongoDB", "Stripe API"],
    features: ["Global State Management", "Dynamic Product Search", "Secure Payment Gateway", "Admin Dashboard"],
    liveLink: "https://example.com",
    image: "/web1.png"
  },
  "saas-landing-page": {
    title: "SaaS Landing Page",
    category: "Web Development",
    longDesc: "A conversion-optimized landing page for a global SaaS brand. Built with Framer Motion for high-end engagement and performance.",
    problem: "Low sign-up rates due to complex messaging and slow interactions.",
    solution: "Simplified the UI/UX and added interactive demos of the software features.",
    tools: ["React", "Framer Motion", "TypeScript", "Sanity CMS"],
    features: ["Interactive Pricing Toggle", "A/B Tested Hero Section", "Lead Magnet Integration", "Custom SVG Animations"],
    liveLink: "https://saas-demo.com",
    image: "/web2.png"
  },

  // WORDPRESS PROJECTS
  "miller-associates": {
    title: "Miller & Associates",
    category: "WordPress",
    longDesc: "A professional law firm website designed to establish authority and generate high-quality leads through trust-based design.",
    problem: "The previous site felt outdated and didn't display correctly on mobile devices.",
    solution: "Built a fully responsive, SEO-friendly site using custom post types for Practice Areas.",
    tools: ["WordPress", "Elementor Pro", "ACF", "Yoast SEO"],
    features: ["Legal Practice Modules", "Live Chat Integration", "Attorney Bio Sections", "Lead Capture Forms"],
    liveLink: "https://millerlaw.com",
    image: "/wordpress5.png"
  },
  "the-artisan-collective": {
    title: "The Artisan Collective",
    category: "WordPress",
    longDesc: "A premium WooCommerce store for high-end handmade products, focusing on storytelling and visual appeal.",
    problem: "Difficult navigation made it hard for customers to find unique product categories.",
    solution: "Implemented an advanced mega-menu and high-speed product filtering system.",
    tools: ["WooCommerce", "WordPress", "WP Rocket", "RankMath"],
    features: ["Advanced Filter System", "Wholesale Portal", "Automated Invoice Generation", "Multi-currency Support"],
    liveLink: "https://artisan-shop.com",
    image: "/wordpress4.png"
  },
  "wanderlust-diary": {
    title: "Wanderlust Diary",
    category: "WordPress",
    longDesc: "A fast-loading, content-driven blog designed for travel enthusiasts.",
    problem: "High bounce rates because of slow image loading and poor mobile layout.",
    solution: "Optimized Core Web Vitals and implemented lazy-loading with a clean grid system.",
    tools: ["WordPress", "Custom CSS", "WP Rocket"],
    features: ["Auto-sync Social Feed", "Ad-optimized Layout", "Clean Typography", "SEO Foundation"],
    liveLink: "https://example.com",
    image: "/wordpress3.png"
  },

  // FIGMA / DESIGN SYSTEMS
  "sneaker-hub": {
    title: "Sneaker Hub App",
    category: "Design System",
    longDesc: "A complete mobile app design from research to high-fidelity prototyping. Focused on the Gen-Z sneaker culture.",
    problem: "Standard shopping apps felt too 'corporate' for the sneakerhead community.",
    solution: "Created a vibrant, dark-mode UI with high-quality card layouts and swipe-to-buy features.",
    tools: ["Figma", "Adobe Illustrator", "Prototyping", "Design Tokens"],
    features: ["Dynamic Sneaker Feed", "Auction Bidding System", "User Profile Dashboard", "Animated Checkout Flow"],
    liveLink: null,
    image: "/Figma5.png"
  },
  "datascale-analytics": {
    title: "DataScale Dashboard",
    category: "Design System",
    longDesc: "A complex analytics dashboard for SaaS founders to track their MRR, Churn, and Growth metrics at a glance.",
    problem: "The data was overwhelming for users to interpret quickly.",
    solution: "Used a modular grid system and strategic color-coding for instant data recognition.",
    tools: ["Figma", "Component Architecture", "Design Systems"],
    features: ["KPI Visualization", "Role-based Access Views", "Dark/Light Mode", "Exportable PDF Reports"],
    liveLink: null,
    image: "/Figma4.png"
  },

  // GRAPHIC / BRANDING
  "aroma-blend": {
    title: "Aroma Blend Identity",
    category: "Branding",
    longDesc: "A full brand identity for a luxury coffee shop, including logo design, packaging, and interior color palettes.",
    problem: "The brand lacked a cohesive identity that matched its premium price point.",
    solution: "Developed a minimalist, organic visual language that emphasizes quality and origin.",
    tools: ["Illustrator", "Photoshop", "Brand Strategy"],
    features: ["Primary & Secondary Logos", "Brand Guidelines", "Social Media Templates", "Packaging Mockups"],
    liveLink: null,
    image: "/Graphic5.png"
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-black text-slate-900">Project Not Found</h1>
        <Link href="/#portfolio" className="text-blue-600 font-bold flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#FCFDFF] min-h-screen">
      {/* 1. Header Navigation */}
      <nav className="p-6 fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/#portfolio" className="flex items-center gap-2 font-black text-slate-900 hover:text-blue-600 transition-colors">
            <ArrowLeft size={20} /> BACK TO CASE STUDIES
          </Link>
          <div className="hidden md:block text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            Case Study: {project.title}
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">
                {project.category}
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                {project.title.split(' ')[0]} <br/>
                <span className="text-blue-600">{project.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                {project.longDesc}
              </p>
              
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-2xl active:scale-95"
                >
                  Explore Live Project <ExternalLink size={20} />
                </a>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[400px] md:h-[600px] bg-slate-50 rounded-[40px] border border-slate-100 overflow-hidden"
            >
              <Image src={project.image} alt={project.title} fill className="object-contain p-12" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Breakdown Grid */}
      <section className="py-20 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="p-10 bg-slate-50 rounded-[40px] space-y-4">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900">The Challenge</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-10 bg-blue-50 rounded-[40px] space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
              <Rocket size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900">The Solution</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{project.solution}</p>
          </div>

          <div className="p-10 bg-slate-900 rounded-[40px] space-y-6 text-white">
            <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center">
              <Cpu size={24} />
            </div>
            <h3 className="text-2xl font-black">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold border border-white/10">
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Features List */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 tracking-tighter">
            Key Features & <span className="text-blue-600">Capabilities.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 border border-slate-100 rounded-3xl hover:border-blue-200 transition-colors">
                <div className="mt-1 text-green-500">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">{feature}</h4>
                  <p className="text-slate-500 text-sm font-medium">Delivering high performance and industry-standard security.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[50px] p-12 md:p-24 text-center text-white shadow-2xl shadow-blue-200">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to build something <br/> similar for your brand?</h2>
          <Link href="/quote" className="inline-flex items-center gap-4 px-14 py-6 bg-white text-blue-600 rounded-[24px] font-black text-xl hover:bg-slate-900 hover:text-white transition-all shadow-xl">
            Start Your Project <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </main>
  );
}