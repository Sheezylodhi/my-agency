"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, Bookmark, Calendar } from "lucide-react";
import React from "react";
import Image from "next/image"; // Next.js wala component

const posts = {
  "modern-website-trends-2026": {
    title: "Modern Website Trends in 2026: The Future of Digital Experiences",
    date: "April 20, 2026",
    readTime: "6 min read",
    author: "Olivia Rhye",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
    content: `Web design is evolving rapidly. In 2026, we are seeing a shift towards emotional design and ultra-fast performance.

    ### 1. Minimal UI & Spatial Awareness
    The interface is becoming invisible. Users now prefer clean, spacious layouts that let the content breathe.

    ### 2. 3D & Immersive Interactions
    Websites are no longer flat. With WebGL and advanced CSS, we can now create depth that feels natural.

    ### 3. Hyper-Fast Performance
    If it's not instant, it's old. Next.js 15 and server-side optimization are now the standard for modern agencies.`,
  },
  "seo-guide": {
    title: "SEO Guide for Beginners: Mastering Search in the AI Era",
    date: "April 18, 2026",
    readTime: "8 min read",
    author: "Phoenix Baker",
    category: "Marketing",
    image: "/",
    content: `SEO helps your website rank higher on Google, but the rules have changed with AI search.

    ### Keywords & Context
    It's no longer just about repeating words; it's about answering the user's intent with high-quality data.

    ### Core Web Vitals
    Speed is a ranking factor. A fast website isn't just a luxury; it's a legal requirement for ranking high.`,
  },
};

export default function BlogPost({ params }) {
  // Reading Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Params unwrapping (Next.js 15 pattern)
  const resolvedParams = React.use(params);
  const { slug } = resolvedParams;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="h-screen flex items-center justify-center text-slate-400 font-bold">
        Article not found.
      </div>
    );
  }

  return (
    <section className="bg-white text-[#0F172A] pb-32">
      {/* 1. Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* 2. Post Header */}
      <div className="relative pt-32 pb-16 px-6 border-b border-slate-100 bg-[#FCFDFF]">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-slate-500 font-bold text-sm mb-12 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 text-sm font-bold flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {post.author[0]}
                </div>
              </div>
              <div>
                <p className="text-sm font-black text-slate-900">{post.author}</p>
                <p className="text-xs text-slate-500 font-bold flex items-center gap-1">
                  <Calendar size={12} /> {post.date}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="p-3 rounded-full border border-slate-100 hover:bg-slate-50 text-slate-400 hover:text-blue-600 transition-all">
                <Share2 size={20} />
              </button>
              <button className="p-3 rounded-full border border-slate-100 hover:bg-slate-50 text-slate-400 hover:text-blue-600 transition-all">
                <Bookmark size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Featured Image */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 mb-20">
        <div className="relative h-[400px] md:h-[600px] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority
          />
        </div>
      </div>

      {/* 4. Article Body */}
      <div className="max-w-3xl mx-auto px-6">
        <article className="prose prose-slate prose-lg lg:prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:text-slate-600 prose-p:leading-relaxed whitespace-pre-line">
          {post.content}
        </article>

        {/* 5. Author Bio Card */}
        <div className="mt-32 p-10 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full bg-blue-600 shrink-0 flex items-center justify-center text-white text-3xl font-black">
            {post.author[0]}
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-black mb-2">Written by {post.author}</h4>
            <p className="text-slate-500 font-medium leading-relaxed">
              Senior Digital Strategist at our agency. Specialized in high-frequency 
              conversion design and performance engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}