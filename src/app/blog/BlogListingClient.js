// app/blog/BlogListingClient.js

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function BlogListingClient({ posts, categories, disciplines }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("idle");

  const filteredPosts = activeCategory === "ALL"
    ? posts
    : posts.filter((post) => post.category.toUpperCase() === activeCategory.toUpperCase());

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const editorsPicks = posts.filter((p) => p.editorPick).slice(0, 3);
  const fallbackEditorsPicks = editorsPicks.length > 0 ? editorsPicks : posts.slice(0, 3);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterStatus("success");
    setNewsletterEmail("");
  };

  return (
    <main className="bg-[#FFFFFF] min-h-screen selection:bg-blue-600 selection:text-white text-[#0A0A0A] font-sans">
      
      {/* ========================================== */}
      {/* SECTION 1 — DARK HERO */}
      {/* ========================================== */}
      <section className="relative pt-36 pb-28 md:pt-44 md:pb-36 bg-[#05070B] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-600/15 border border-blue-500/30 px-3 py-1 rounded-full">
                WEBMASH LABS / INSIGHTS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.05]">
                Web Development, SaaS, AI & Technology Insights
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                Practical engineering guides, architectural blueprints, SaaS strategies, AI automation workflows, eCommerce systems, and digital growth perspectives written for founders, engineering leaders, and growing companies.
              </p>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-y-2 gap-x-6 text-xs font-mono text-slate-400 uppercase tracking-wider">
                <span>&bull; Editorial Publication</span>
                <span>&bull; Technical Research</span>
                <span>&bull; Practical Engineering</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-400">KNOWLEDGE BASE</span>
                  <span className="text-xs font-mono text-slate-500">AUTHORITATIVE</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-white font-mono">
                    HUB
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200">
                    Comprehensive Topic Clusters
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    Explore structured documentation covering modern web architecture, SaaS applications, AI workflows, eCommerce, SEO, cloud infrastructure, and enterprise software.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>WEBMASH LABS EDITORIAL</span>
                  <span className="text-blue-400 flex items-center gap-1">
                    EXPLORE <ArrowRight className="w-3.5 h-3.5"/>
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2 — FEATURED ARTICLE */}
      {/* ========================================== */}
      <section className="py-24 bg-[#F5F3EF] border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="mb-10 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              FEATURED ESSAY
            </span>
            <span className="text-xs font-mono text-blue-600 font-medium">
              CORNERSTONE GUIDE
            </span>
          </div>

          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="bg-white rounded-3xl border border-[#E5E2DC] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                
                <div className="lg:col-span-7 relative h-[320px] sm:h-[420px] lg:h-[500px] overflow-hidden bg-slate-100">
                  <Image 
                    src={featuredPost.coverImage} 
                    alt={featuredPost.coverImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:hidden"></div>
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#0A0A0A] border border-[#E5E2DC]">
                    {featuredPost.category}
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs font-mono text-[#737373]">
                      <span>{featuredPost.date}</span>
                      <span>&bull;</span>
                      <span>{featuredPost.readTime}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0A0A0A] group-hover:text-blue-600 transition-colors leading-[1.15]">
                      {featuredPost.title}
                    </h2>

                    <p className="text-base text-[#525252] font-light leading-relaxed line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#E5E2DC] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center text-xs font-bold">
                        {featuredPost.author ? featuredPost.author.charAt(0) : "W"}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#0A0A0A]">{featuredPost.author}</div>
                        <div className="text-[11px] text-[#737373]">{featuredPost.authorRole}</div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-4 h-4"/>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3 — CATEGORY NAVIGATION */}
      {/* ========================================== */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-[#E5E2DC] transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto py-4 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                    isActive ? "text-blue-600 font-bold" : "text-[#525252] hover:text-[#0A0A0A]"
                  }`}
                >
                  {cat}
                  {isActive && (
                    <motion.div 
                      layoutId="activeCategoryIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* SECTION 4 — LATEST THINKING */}
      {/* ========================================== */}
      <section className="py-24 bg-white border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">FROM THE LAB</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
              Latest thinking.
            </h2>
            <p className="text-base sm:text-lg text-[#525252] font-light leading-relaxed">
              Engineering guides, architectural breakdowns, and practical perspectives from our development practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {filteredPosts.map((post, idx) => {
              const isLarge = idx % 3 === 0;
              const colSpan = isLarge ? "lg:col-span-8" : "lg:col-span-4";
              const imageHeight = isLarge ? "h-[320px] sm:h-[380px]" : "h-[240px]";

              return (
                <motion.article 
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`${colSpan} group flex flex-col justify-between bg-[#F8F8F6] rounded-2xl border border-[#E5E2DC] overflow-hidden hover:border-blue-500/50 transition-all duration-300`}
                >
                  <div>
                    <Link href={`/blog/${post.slug}`} className="block relative overflow-hidden bg-slate-100">
                      <div className={`${imageHeight} relative overflow-hidden`}>
                        <Image 
                          src={post.coverImage} 
                          alt={post.coverImageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-mono text-[#0A0A0A] border border-[#E5E2DC]">
                        {post.category}
                      </div>
                    </Link>

                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex items-center gap-3 text-xs font-mono text-[#737373]">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                      </div>

                      <Link href={`/blog/${post.slug}`} className="block">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A0A0A] group-hover:text-blue-600 transition-colors leading-snug">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-sm text-[#525252] font-light leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#E5E2DC]/60 mt-4">
                    <span className="text-xs font-medium text-[#737373]">{post.author}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="w-9 h-9 rounded-full bg-white border border-[#E5E2DC] flex items-center justify-center text-[#0A0A0A] group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"/>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center text-[#737373] font-mono">
              No articles found in this category.
            </div>
          )}

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5 — DARK EDITORIAL STATEMENT */}
      {/* ========================================== */}
      <section className="py-28 bg-[#0A0D12] text-white text-center border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block">
            OUR POINT OF VIEW
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            "Good technology is not about adding more. It's about making the right things work better."
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Every project changes how we think about products, systems and the people who use them.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 6 — EXPLORE BY DISCIPLINE */}
      {/* ========================================== */}
      <section className="py-24 bg-[#F5F3EF] border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">CAPABILITY INDEX</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
              Explore by discipline.
            </h2>
          </div>

          <div className="border-t border-[#E5E2DC]">
            {disciplines.map((item, idx) => {
              const count = posts.filter(p => p.category.toUpperCase() === item.category.toUpperCase()).length;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveCategory(item.category)}
                  className="group py-8 px-6 sm:px-8 bg-transparent hover:bg-white border-b border-[#E5E2DC] transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start md:items-center gap-6 sm:gap-10">
                    <span className="text-xs font-mono text-[#737373] font-bold group-hover:text-blue-600 transition-colors">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] group-hover:text-blue-600 transition-colors mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#525252] font-light max-w-xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6">
                    <span className="text-xs font-mono text-[#737373] bg-[#E5E2DC]/50 group-hover:bg-blue-50 group-hover:text-blue-600 px-3 py-1 rounded-full transition-colors">
                      {count} {count === 1 ? "ESSAY" : "ESSAYS"}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#E5E2DC] group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 7 — EDITOR'S PICKS */}
      {/* ========================================== */}
      <section className="py-24 bg-white border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">EDITOR'S PICKS</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
                Worth your time.
              </h2>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-[#737373] uppercase tracking-wider">
              CURATED ESSAYS &middot; 03 SELECTIONS
            </span>
          </div>

          <div className="space-y-6">
            {fallbackEditorsPicks.map((post, idx) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block p-6 sm:p-8 rounded-2xl bg-[#F8F8F6] border border-[#E5E2DC] hover:border-blue-500/50 hover:bg-white transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  <div className="lg:col-span-1 flex items-center">
                    <span className="text-2xl font-mono font-extrabold text-[#737373] group-hover:text-blue-600 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="lg:col-span-8 space-y-2">
                    <div className="flex items-center gap-3 text-xs font-mono text-[#737373]">
                      <span className="text-blue-600 font-semibold">{post.category}</span>
                      <span>&bull;</span>
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#525252] font-light line-clamp-1">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E5E2DC]">
                    <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 hidden sm:block">
                      <Image 
                        src={post.coverImage} 
                        alt={post.coverImageAlt}
                        fill
                        sizes="64px"
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[#E5E2DC] group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"/>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 8 — NEWSLETTER */}
      {/* ========================================== */}
      <section className="py-24 bg-[#F5F3EF] border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white p-8 sm:p-16 rounded-3xl border border-[#E5E2DC] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block">
                  INSIGHTS, OCCASIONALLY.
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A0A0A]">
                  Useful ideas. No noise.
                </h2>
                <p className="text-base text-[#525252] font-light leading-relaxed max-w-md">
                  Get occasional perspectives on digital products, engineering, design and AI from WebMash Labs. Unsubscribe anytime.
                </p>
              </div>

              <div className="lg:col-span-6">
                {newsletterStatus === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-blue-50 border border-blue-200 rounded-2xl flex items-center gap-4 text-blue-700"
                  >
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0"/>
                    <div>
                      <h4 className="font-bold text-sm">You're on the list.</h4>
                      <p className="text-xs text-blue-600 mt-0.5">We'll send our next publication directly to your inbox.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input 
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                        placeholder="Enter your work email"
                        className="flex-1 bg-[#F8F8F6] border border-[#E5E2DC] rounded-xl px-4 py-3.5 text-sm text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
                      >
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs font-mono text-[#737373]">
                      No spam. Zero marketing fluff. Unsubscribe anytime.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 9 — FINAL CTA */}
      {/* ========================================== */}
      <section className="py-28 bg-[#05070B] text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-4">LET'S CREATE VALUE</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Have something worth building?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Reading is useful. Building is better. Let's turn your idea into something scalable and built to last.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 group"
            >
              Start a Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link 
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}