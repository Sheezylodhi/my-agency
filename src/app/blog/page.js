"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, ArrowUpRight, Search } from "lucide-react";

const blogs = [
  {
    slug: "modern-website-trends-2026",
    title: "Modern Website Trends 2026: The Era of Motion",
    desc: "Explore the latest UI/UX patterns, motion design trends and conversion-focused layouts that are dominating the industry this year.",
    tag: "Design",
    image: "/",
    author: "Olivia Rhye",
    date: "20 Jan 2026",
    avatar: "",
  },
  {
    slug: "seo-guide",
    title: "The Ultimate SEO Guide for 2026 & Beyond",
    desc: "Step-by-step guide to ranking your website and building long-term organic traffic using AI-driven keyword strategies.",
    tag: "Marketing",
    image: "/",
    author: "Phoenix Baker",
    date: "18 Jan 2026",
    avatar: "",
  },
  {
    slug: "performance-optimization",
    title: "Optimizing Next.js for Core Web Vitals",
    desc: "How modern agencies build ultra-fast websites using Next.js 15 and smart rendering patterns to hit 100/100 on Lighthouse.",
    tag: "Development",
    image: "/",
    author: "Lana Steiner",
    date: "15 Jan 2026",
    avatar: "",
  },
];

export default function Blog() {
  return (
    <section className="bg-[#FCFDFF] text-[#0F172A] selection:bg-blue-100">
      
      {/* 1. HERO - Minimalist & Bold */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto border-b border-slate-100 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                The Journal
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                Stories & <br /> <span className="text-slate-400 font-outline-2">Perspectives.</span>
              </h1>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-slate-500 font-medium max-w-[300px]">
                Daily insights into the future of design, development, and digital growth.
              </p>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-full w-full focus:outline-none focus:border-blue-600 transition-all shadow-sm"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${b.slug}`}>
                {/* Image Container */}
                <div className="relative h-[300px] w-full rounded-[40px] overflow-hidden mb-6 bg-slate-100">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 border border-white/20">
                      {b.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                    <ArrowUpRight className="text-slate-900" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {b.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>5 min read</span>
                  </div>
                  
                  <h2 className="text-2xl font-black leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                    {b.title}
                  </h2>
                  
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-2">
                    {b.desc}
                  </p>

                  {/* Author Box */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <Image src={b.avatar} alt={b.author} fill className="object-cover" />
                      </div>
                      <span className="text-sm font-bold text-slate-800">{b.author}</span>
                    </div>
                    <div className="text-blue-600 opacity-0 group-hover:opacity-100 flex items-center gap-1 text-sm font-black transition-all">
                      Read More <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. NEWSLETTER - Glassmorphic Dark CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative p-12 md:p-24 rounded-[60px] bg-slate-900 overflow-hidden text-center">
          {/* Background Gradients */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Get the latest <br /> <span className="text-blue-500 italic">Industry Hacks.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
              Join 5,000+ developers and designers receiving our weekly digital strategy newsletter.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-3xl text-white focus:outline-none focus:border-blue-600 backdrop-blur-md"
              />
              <button className="px-10 py-5 bg-blue-600 text-white rounded-3xl font-black text-lg hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-600/20">
                Subscribe
              </button>
            </form>
            <p className="text-slate-600 text-xs mt-6">Zero spam. Only high-value insights. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>

    </section>
  );
}