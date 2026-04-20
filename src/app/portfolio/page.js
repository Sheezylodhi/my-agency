"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Maine Figma ko hata kar Layers add kiya hai jo design system ko represent karta hai
import { ArrowUpRight, Globe, Layout, Layers, PenTool, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Link import miss tha wo bhi add kar diya

const projects = [
  { 
    title: "E-commerce Ecosystem", 
    category: "web", 
    desc: "A high-performance Next.js store with seamless checkout.",
    image: "",
    icon: <Globe size={20} />
  },
  { 
    title: "Fintech Dashboard", 
    category: "uiux", 
    desc: "Complex data visualization simplified for user clarity.",
    image: "",
    icon: <Layout size={20} />
  },
  { 
    title: "Design System 2.0", 
    category: "figma", 
    desc: "A comprehensive UI kit built for massive scalability.",
    image: "",
    icon: <Layers size={20} /> // Yahan Layers use kiya hai
  },
  { 
    title: "Brand Identity: VORA", 
    category: "graphic", 
    desc: "Modern logo and brand guidelines for a tech startup.",
    image: "",
    icon: <PenTool size={20} />
  },
  { 
    title: "SaaS Landing Page", 
    category: "web", 
    desc: "Conversion-focused landing page for a global SaaS brand.",
    image: "",
    icon: <Globe size={20} />
  },
  { 
    title: "Admin Analytics Panel", 
    category: "uiux", 
    desc: "Intuitive admin panel for managing large-scale data.",
    image: "",
    icon: <Layout size={20} />
  },
];

const filters = [
  { id: "all", label: "All Works" },
  { id: "web", label: "Development" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "figma", label: "Design Systems" },
  { id: "graphic", label: "Branding" },
];

export default function Portfolio() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-32 bg-[#FCFDFF] text-[#0F172A]" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Our Works
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-slate-900">
              Transforming Ideas into <br/>
              <span className="text-blue-600">Digital Reality.</span>
            </h2>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  active === f.id
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                    : "bg-white text-slate-500 border-slate-100 hover:border-blue-300"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[450px] rounded-[40px] overflow-hidden bg-slate-100 cursor-pointer shadow-xl shadow-blue-900/5"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 text-blue-400 mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {item.icon}
                    <span className="text-xs font-bold uppercase tracking-widest">{item.category}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    View Case Study <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                  <ArrowUpRight size={24} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 font-medium mb-6">Have a unique project in mind?</p>
          <Link 
            href="/quote" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#0F172A] text-white rounded-3xl font-black text-lg hover:bg-blue-600 transition-all active:scale-95 shadow-2xl"
          >
            Let's Build It Together <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}