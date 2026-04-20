"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Scene from "@/components/Scene"; 
import { useParams } from "next/navigation";
import { CheckCircle2, ArrowLeft, Zap, ShieldCheck, Target, MousePointer2 } from "lucide-react";

const servicesData = {
  "web-development": {
    title: "Web Development",
    subtitle: "Engineered for Performance",
    image: "/services/web.jpg",
    desc: "We build ultra-fast, SEO-optimized, and scalable web applications that turn visitors into loyal customers.",
    content: `In today's digital economy, your website is your hardest-working salesperson. We specialize in building high-end digital experiences using Next.js 15, React, and Node.js. 

    Our development philosophy centers on three pillars: Speed, Security, and Scalability. Whether it's a complex SaaS platform or a high-converting business site, we ensure every line of code is optimized for peak performance and search engine visibility.`,
    features: [
      "Next.js 15 Architecture",
      "Full-Stack Integration",
      "SEO & Core Web Vitals Optimization",
      "PWA & Mobile-First Approach",
      "API & Microservices Design",
      "Cloud Deployment (Vercel/AWS)",
    ],
    accent: "#1D4ED8"
  },
  "wordpress": {
    title: "WordPress Development",
    subtitle: "Custom-Tailored CMS Solutions",
    image: "/services/wp.jpg",
    desc: "Beyond templates—we create high-end, custom-coded WordPress environments that are easy to manage and impossible to ignore.",
    content: `Stop fighting with clunky builders. We deliver enterprise-grade WordPress solutions that combine the flexibility of the world's most popular CMS with the performance of a custom-coded site.

    From bespoke theme development to complex plugin logic and WooCommerce scaling, we provide a seamless editing experience for you and a premium browsing experience for your users.`,
    features: [
      "Custom Theme Development",
      "Headless WordPress Options",
      "WooCommerce Ecosystems",
      "Advanced Custom Fields (ACF)",
      "High-Security Hardening",
      "Speed & Database Optimization",
    ],
    accent: "#0F172A"
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    subtitle: "Human-Centric Interfaces",
    image: "/services/uiux.jpg",
    desc: "We design intuitive digital products that bridge the gap between user needs and your business goals.",
    content: `Design is not just how it looks; it's how it works. Our design process is rooted in user psychology and data-driven insights. 

    We move beyond aesthetic trends to create functional design systems that reduce friction, increase retention, and build brand equity. From rapid prototyping in Figma to full-scale design systems, we bring clarity to complex digital problems.`,
    features: [
      "User Psychology Research",
      "High-Fidelity Prototyping",
      "Interactive Wireframing",
      "Comprehensive Design Systems",
      "Conversion Rate Optimization",
      "Accessibility (WCAG) Compliance",
    ],
    accent: "#1D4ED8"
  },
  "graphic-design": {
    title: "Graphic Design",
    subtitle: "Visual Identity & Branding",
    image: "/services/graphic.jpg",
    desc: "Strategic branding that defines your presence and commands attention in a crowded marketplace.",
    content: `Your brand is the gut feeling people have about your company. We help you control that narrative through sharp, cohesive, and modern visual identities.

    From logo engineering to complete brand guidelines and high-impact marketing collateral, we ensure your business looks as professional as the services you provide. We don't just make things look good; we make them look like leaders.`,
    features: [
      "Strategic Logo Engineering",
      "Brand Guidelines & Manuals",
      "Marketing & Sales Collateral",
      "Social Media Ecosystems",
      "Vector Illustration",
      "Corporate Stationery Design",
    ],
    accent: "#0F172A"
  },
};

export default function ServiceDetail() {
  const params = useParams();
  const service = servicesData[params.slug];

  if (!service) {
    return <div className="py-40 text-center font-bold text-slate-400">Service Not Found</div>;
  }

  return (
    <section className="relative min-h-screen bg-white text-[#0F172A] selection:bg-blue-100">
      
      {/* 3D Scene Background Layer */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <Scene />
      </div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/#services" className="group inline-flex items-center gap-2 text-slate-500 font-bold text-sm mb-12 hover:text-blue-600 transition-colors">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
              View All Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                {service.subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
                {service.title}
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10">
                  Start a Project
                </Link>
                <div className="flex -space-x-3 items-center ml-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                      <Image src={``} alt="client" width={40} height={40} />
                    </div>
                  ))}
                  <span className="pl-6 text-sm font-bold text-slate-400">Trusted by 50+ Clients</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[48px] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 aspect-[4/3] relative">
                <Image src={service.image} alt={service.title} fill className="object-cover" priority />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-12 p-6 bg-white rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 max-w-[240px]">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Zap fill="currentColor" />
                </div>
                <p className="text-xs font-bold text-slate-800 leading-tight">
                  High Performance <br /> Engineering Guaranteed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- CONTENT & FEATURES --- */}
        <div className="py-24 bg-slate-50/50 backdrop-blur-md border-y border-slate-100 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_400px] gap-20">
            
            {/* Detailed Description */}
            <div>
              <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
                <Target className="text-blue-600" /> Service Overview
              </h2>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed whitespace-pre-line">
                {service.content}
              </div>
              
              <div className="mt-16 grid sm:grid-cols-2 gap-8">
                 <div className="p-8 rounded-[32px] bg-white border border-slate-100">
                    <ShieldCheck className="text-blue-600 mb-4" size={32} />
                    <h4 className="font-bold mb-2">Secure by Design</h4>
                    <p className="text-sm text-slate-500 font-medium">We implement military-grade security protocols for every build.</p>
                 </div>
                 <div className="p-8 rounded-[32px] bg-white border border-slate-100">
                    <MousePointer2 className="text-blue-600 mb-4" size={32} />
                    <h4 className="font-bold mb-2">User Optimized</h4>
                    <p className="text-sm text-slate-500 font-medium">Layouts engineered to guide users towards your primary goals.</p>
                 </div>
              </div>
            </div>

            {/* Feature Sticky Sidebar */}
            <div className="relative">
              <div className="sticky top-32 p-10 rounded-[40px] bg-white border border-slate-100 shadow-xl shadow-blue-900/5">
                <h3 className="text-xl font-black mb-8 tracking-tight">Core Deliverables</h3>
                <ul className="space-y-5">
                  {service.features.map((f, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2 className="mt-1 text-blue-600 shrink-0" size={20} />
                      <span className="text-slate-600 font-bold text-sm group-hover:text-blue-600 transition-colors">
                        {f}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <hr className="my-8 border-slate-100" />
                <button className="w-full py-4 rounded-2xl bg-blue-50 text-blue-600 font-black hover:bg-blue-600 hover:text-white transition-all">
                  Download Full Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- FINAL CTA --- */}
        <div className="py-32 px-6">
          <div className="max-w-5xl mx-auto rounded-[60px] bg-[#0F172A] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none">
                Ready to dominate your <br /> <span className="text-blue-500 italic">Digital Space?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-medium">
                We are currently accepting new projects for Q2 2026. Let's discuss how we can scale your vision.
              </p>
              <Link href="/quote" className="inline-block px-12 py-5 bg-blue-600 text-white rounded-3xl font-black text-xl hover:bg-white hover:text-slate-900 transition-all active:scale-95 shadow-2xl shadow-blue-600/30">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}