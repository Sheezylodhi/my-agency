"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const services = [
    {
      number: "01",
      title: "Website Design",
      category: "Website Design",
      href: "/services/web-design-development",
      description: "Beautiful websites crafted to convert visitors into customers while reflecting your brand perfectly.",
      visualContent: (
        <div className="relative w-full h-full rounded-2xl border border-blue-500/25 bg-[#080C14] shadow-[0_0_60px_rgba(37,99,235,0.18)] backdrop-blur-3xl overflow-hidden flex flex-col group font-sans">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-white/10 bg-[#0E1526]/90 z-20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="px-3 sm:px-4 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[10px] sm:text-[11px] text-blue-300 flex items-center space-x-2 truncate max-w-[180px] sm:max-w-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate">https://apex-architecture.com</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400 hidden sm:block">Live Production</div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 relative z-10 custom-scrollbar">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-md">AP</div>
                <span className="font-semibold text-sm tracking-wide text-white">APEX & CO.</span>
              </div>
              <div className="hidden md:flex items-center space-x-6 text-xs text-slate-400 font-medium">
                <span className="text-white">Portfolio</span>
                <span>Services</span>
                <span>Studio</span>
                <span>Insights</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium text-xs shadow-lg shadow-blue-600/30">
                Book
              </div>
            </div>

            <div className="py-4 sm:py-8 text-center space-y-4 max-w-lg mx-auto">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[10px]">
                <span>GLOBAL DESIGN PRACTICE</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Architectural Mastery for Digital Spaces
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                We partner with visionaries to engineer world-class brand identities and high-converting digital flagships.
              </p>
              <div className="pt-2 flex items-center justify-center space-x-3">
                <button className="px-4 sm:px-5 py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-xs shadow-xl">
                  Explore Works
                </button>
                <button className="px-4 sm:px-5 py-2.5 rounded-xl border border-white/15 text-white font-medium text-xs hover:bg-white/5 transition-colors">
                  Philosophy
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 backdrop-blur-md">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-slate-700 overflow-hidden text-[10px] flex items-center justify-center font-bold text-white">JD</div>
                  <div>
                    <p className="text-xs font-medium text-white">Jonathan Davis</p>
                    <p className="text-[10px] text-slate-400">CEO, Vanguard Global</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-300 italic">&quot;The absolute pinnacle of digital craftsmanship and execution speed.&quot;</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 backdrop-blur-md">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 overflow-hidden text-[10px] flex items-center justify-center font-bold text-white">SR</div>
                  <div>
                    <p className="text-xs font-medium text-white">Sophia Reynolds</p>
                    <p className="text-[10px] text-slate-400">Founder, Atelier Studio</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-300 italic">&quot;Our conversion metrics doubled within 30 days of platform launch.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "Website Development",
      category: "Website Development",
      href: "/services/web-applications",
      description: "Modern engineering built for speed, scalability and long-term growth.",
      visualContent: (
        <div className="relative w-full h-full rounded-2xl border border-purple-500/25 bg-[#080C14] shadow-[0_0_60px_rgba(147,51,234,0.18)] backdrop-blur-3xl overflow-hidden flex flex-col font-mono z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-white/10 bg-[#0E1526]/90">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[11px] text-purple-300 flex items-center space-x-1 sm:space-x-2 truncate max-w-[160px] sm:max-w-none">
              <span className="text-slate-400 hidden sm:inline">~/projects/core</span>
              <span className="hidden sm:inline">—</span>
              <span className="text-white font-bold truncate">page.tsx</span>
            </div>
            <div className="text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              Git: main ✓
            </div>
          </div>

          <div className="flex-1 grid grid-cols-12 overflow-hidden text-xs">
            <div className="col-span-4 border-r border-white/10 p-3 space-y-2 bg-white/[0.01] text-slate-400 hidden md:block">
              <p className="text-[10px] tracking-wider uppercase text-slate-500 mb-3 font-bold">Explorer</p>
              <div className="space-y-1.5 font-mono text-[11px]">
                <p className="text-white font-medium flex items-center space-x-1.5"><span>📁</span> <span>app/</span></p>
                <p className="pl-4 text-purple-400 flex items-center space-x-1.5"><span>📄</span> <span>layout.tsx</span></p>
                <p className="pl-4 text-white font-medium flex items-center space-x-1.5 bg-white/5 p-1 rounded"><span>📄</span> <span>page.tsx</span></p>
                <p className="pl-4 text-slate-400 flex items-center space-x-1.5"><span>📄</span> <span>api/route.ts</span></p>
                <p className="text-slate-400 flex items-center space-x-1.5 pt-2"><span>📁</span> <span>components/</span></p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 p-4 flex flex-col justify-between space-y-4 overflow-y-auto">
              <div className="space-y-1.5 text-[11px] text-slate-300">
                <p><span className="text-purple-400">import</span> &#123; <span className="text-blue-400">DatabaseCluster</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">&apos;@db/client&apos;</span>;</p>
                <p><span className="text-purple-400">import</span> &#123; <span className="text-blue-400">NextResponse</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">&apos;next/server&apos;</span>;</p>
                <p className="text-slate-500">// Initialize high-throughput pool</p>
                <p><span className="text-purple-400">export async function</span> <span className="text-yellow-400">GET</span>() &#123;</p>
                <p className="pl-4"><span className="text-blue-400">const</span> metrics = <span className="text-purple-400">await</span> DatabaseCluster.<span className="text-yellow-400">query</span>(&apos;SELECT * FROM telemetry&apos;);</p>
                <p className="pl-4"><span className="text-purple-400">return</span> NextResponse.<span className="text-yellow-400">json</span>(&#123; status: <span className="text-emerald-400">&apos;healthy&apos;</span>, metrics &#125;);</p>
                <p>&#125;</p>
              </div>

              <div className="p-3 rounded-xl bg-[#05080E] border border-white/10 space-y-1 text-[10px]">
                <div className="flex items-center justify-between text-slate-500 border-b border-white/5 pb-1 mb-1">
                  <span>TERMINAL // Edge Build</span>
                  <span className="text-emerald-400">● Live</span>
                </div>
                <p className="text-slate-400">&gt; next build --experimental-minify</p>
                <p className="text-blue-400">✓ Compiled TypeScript in 840ms</p>
                <p className="text-emerald-400">✓ Production build success (142ms deployment)</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "03",
      title: "UI / UX Design",
      category: "UI / UX Design",
      href: "/services/ui-ux-design",
      description: "Interfaces designed around people, not trends.",
      visualContent: (
        <div className="relative w-full h-full rounded-2xl border border-pink-500/25 bg-[#080C14] shadow-[0_0_60px_rgba(236,72,153,0.18)] backdrop-blur-3xl overflow-hidden p-5 sm:p-8 flex flex-col justify-between font-sans">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center font-bold text-white text-xs shadow-md">Fi</div>
              <div>
                <p className="text-xs font-semibold text-white truncate max-w-[140px] sm:max-w-none">Design_System_2026.fig</p>
                <p className="text-[10px] text-pink-400 font-mono">Auto Layout & Variables active</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">Frame 1440px</span>
              <span className="px-2.5 py-1 rounded bg-pink-500/20 text-pink-300 text-[10px] font-mono">Prototype Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 z-10">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 backdrop-blur-md">
              <span className="font-mono text-[10px] text-slate-400 block">COLOR TOKENS</span>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-purple-600 shadow-md ring-2 ring-white/20" />
                <div className="w-6 h-6 rounded-full bg-pink-500 shadow-md ring-2 ring-white/20" />
                <div className="w-6 h-6 rounded-full bg-slate-900 shadow-md ring-2 ring-white/20" />
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1 backdrop-blur-md">
              <span className="font-mono text-[10px] text-slate-400 block">TYPOGRAPHY</span>
              <p className="text-base sm:text-lg font-bold text-white tracking-tight">Inter Pro</p>
              <p className="text-[10px] text-slate-400 font-mono">Scale: 1.25</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1 backdrop-blur-md">
              <span className="font-mono text-[10px] text-slate-400 block">SPACING SYSTEM</span>
              <div className="flex items-center space-x-1 pt-1">
                <div className="w-2 h-5 bg-pink-500/40 rounded-sm" />
                <div className="w-4 h-5 bg-pink-500/60 rounded-sm" />
                <div className="w-7 h-5 bg-pink-500 rounded-sm" />
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/10 flex items-center justify-between text-xs z-10">
            <span className="text-white font-medium truncate">Component: Navigation_Bar</span>
            <span className="text-slate-400 font-mono text-[10px] shrink-0 ml-2">Variant: Scrolled</span>
          </div>
        </div>
      ),
    },
    {
      number: "04",
      title: "SEO",
      category: "SEO",
      href: "/services/seo",
      description: "Technical SEO and content strategies that generate sustainable organic growth.",
      visualContent: (
        <div className="relative w-full h-full rounded-2xl border border-emerald-500/25 bg-[#080C14] shadow-[0_0_60px_rgba(16,185,129,0.18)] backdrop-blur-3xl overflow-hidden p-5 sm:p-8 flex flex-col justify-between font-sans">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-xs shadow-md">📈</div>
              <div>
                <p className="text-xs font-semibold text-white truncate max-w-[150px] sm:max-w-none">Google Search Console — Report</p>
                <p className="text-[10px] text-emerald-400 font-mono">zaibdigitizing.com (28 Days)</p>
              </div>
            </div>
            <div className="hidden sm:block px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
              Live Indexing
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 my-2 z-10">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 block">Clicks</span>
              <p className="text-base sm:text-xl font-bold text-white mt-1">142.8K</p>
              <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono">+34.8%</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 block">Impressions</span>
              <p className="text-base sm:text-xl font-bold text-white mt-1">2.4M</p>
              <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono">+18.2%</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 block">Avg Pos</span>
              <p className="text-base sm:text-xl font-bold text-emerald-400 mt-1">1.4</p>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono">Top Rank</span>
            </div>
          </div>

          <div className="h-28 sm:h-32 w-full flex items-end space-x-1.5 sm:space-x-2 pt-2 border-b border-white/10 z-10">
            {[30, 45, 52, 48, 65, 72, 80, 88, 85, 95, 110, 128].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                className="flex-1 rounded-t bg-gradient-to-t from-emerald-600/60 to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      number: "05",
      title: "Branding",
      category: "Branding",
      href: "/services/branding",
      description: "Create memorable brands that people instantly recognize.",
      visualContent: (
        <div className="relative w-full h-full rounded-2xl border border-orange-500/25 bg-[#080C14] shadow-[0_0_60px_rgba(249,115,22,0.18)] backdrop-blur-3xl overflow-hidden p-5 sm:p-8 flex flex-col justify-between font-sans">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center font-bold text-white text-xs shadow-md">ID</div>
              <div>
                <p className="text-xs font-semibold text-white">Brand Identity Guidelines</p>
                <p className="text-[10px] text-orange-400 font-mono">Client: Vanguard Capital</p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 font-mono text-[10px] border border-orange-500/20">
              Slide 04
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 z-10">
            <div className="p-5 rounded-xl bg-gradient-to-br from-orange-600 to-pink-600 text-white flex flex-col justify-between h-32 sm:h-36 shadow-xl">
              <span className="font-mono text-[10px] opacity-90">LOGOTYPE</span>
              <div>
                <h4 className="text-xl sm:text-2xl font-black tracking-wider">VANGUARD</h4>
                <p className="text-[10px] opacity-80 font-mono">Custom geometric sans</p>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between h-32 sm:h-36 backdrop-blur-md">
              <span className="font-mono text-[10px] text-slate-400">COLOR PALETTE</span>
              <div className="flex space-x-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-950 border border-white/20 shadow-md" />
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-500 shadow-md" />
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-pink-600 shadow-md" />
              </div>
              <p className="text-[10px] text-slate-400 font-mono">Pantone Certified Hex</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.01] border border-white/10 flex items-center justify-between text-xs z-10">
            <span className="text-slate-300 font-medium truncate">Stationery & Packaging Included</span>
            <span className="text-orange-400 font-mono text-[10px] shrink-0 ml-2">PDF ✓</span>
          </div>
        </div>
      ),
    },
    {
      number: "06",
      title: "Hosting Setup",
      category: "Hosting Setup",
      href: "/services/hosting-setup",
      description: "Reliable cloud infrastructure engineered for security and performance.",
      visualContent: (
        <div className="relative w-full h-full rounded-2xl border border-cyan-500/25 bg-[#080C14] shadow-[0_0_60px_rgba(6,182,212,0.18)] backdrop-blur-3xl overflow-hidden p-5 sm:p-8 flex flex-col justify-between font-mono">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs z-10">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-cyan-600 flex items-center justify-center font-bold text-white text-xs shadow-md">☁️</div>
              <div>
                <p className="text-xs font-semibold text-white">Cloudflare & AWS Cluster</p>
                <p className="text-[10px] text-cyan-400">280+ Active Regions</p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-[10px] border border-cyan-500/20">
              99.999%
            </span>
          </div>

          <div className="space-y-3 z-10 my-2">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex justify-between items-center backdrop-blur-md">
              <div className="space-y-0.5">
                <span className="text-xs text-white font-medium block">Edge Security Proxy (WAF)</span>
                <span className="text-[10px] text-slate-400">DDoS Mitigation & TLS 1.3</span>
              </div>
              <span className="text-cyan-400 text-xs px-2 py-0.5 rounded bg-cyan-500/10">Protected</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex justify-between items-center backdrop-blur-md">
              <div className="space-y-0.5">
                <span className="text-xs text-white font-medium block">Global CDN Delivery</span>
                <span className="text-[10px] text-slate-400">Average TTFB Response</span>
              </div>
              <span className="text-emerald-400 text-xs font-bold">11ms</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-between text-xs z-10">
            <span className="text-slate-300">Automated DNS Routing</span>
            <span className="text-cyan-400">Synced ✓</span>
          </div>
        </div>
      ),
    },
    {
      number: "07",
      title: "Business Email Setup",
      category: "Business Email Setup",
      href: "/services/business-email-setup",
      description: "Professional communication powered by your own domain.",
      visualContent: (
        <div className="relative w-full h-full rounded-2xl border border-blue-500/25 bg-[#080C14] shadow-[0_0_60px_rgba(37,99,235,0.18)] backdrop-blur-3xl overflow-hidden p-5 sm:p-8 flex flex-col justify-between font-sans">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-md">✉️</div>
              <div>
                <p className="text-xs font-semibold text-white">Mailbox Manager</p>
                <p className="text-[10px] text-blue-400 font-mono truncate max-w-[140px] sm:max-w-none">executive@zaibdigitizing.com</p>
              </div>
            </div>
            <span className="hidden sm:inline px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
              SPF / DKIM / DMARC Valid
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3 backdrop-blur-md z-10 my-2">
            <div className="flex justify-between text-xs font-mono text-slate-400 border-b border-white/5 pb-2">
              <span>Incoming Inquiry</span>
              <span className="text-emerald-400">TLS 1.3</span>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold text-white">Enterprise Contract Inquiry</p>
              <p className="text-[11px] text-slate-300 font-light line-clamp-2">
                &quot;We would like to secure your agency for our upcoming full-stack platform launch...&quot;
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.01] border border-white/10 flex items-center justify-between text-xs z-10">
            <span className="text-slate-300 font-medium">Delivery Placement Rate</span>
            <span className="text-emerald-400 font-mono">100.0% Inbox</span>
          </div>
        </div>
      ),
    },
    {
      number: "08",
      title: "Website Maintenance",
      category: "Website Maintenance",
      href: "/services/website-maintenance",
      description: "Continuous monitoring, optimization and protection for your digital presence.",
      visualContent: (
        <div className="relative w-full h-full rounded-2xl border border-emerald-500/25 bg-[#080C14] shadow-[0_0_60px_rgba(16,185,129,0.18)] backdrop-blur-3xl overflow-hidden p-5 sm:p-8 flex flex-col justify-between font-sans">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-xs shadow-md">🛡️</div>
              <div>
                <p className="text-xs font-semibold text-white">Live Uptime Sentinel</p>
                <p className="text-[10px] text-emerald-400 font-mono">Scanned 1m ago • Secure</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
              Optimal
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 my-2 z-10 text-center">
            <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <span className="font-mono text-[10px] text-slate-400 block mb-1">UPTIME</span>
              <span className="text-base sm:text-xl font-bold text-white">99.99%</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <span className="font-mono text-[10px] text-slate-400 block mb-1">SPEED</span>
              <span className="text-base sm:text-xl font-bold text-emerald-400">0.2s</span>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
              <span className="font-mono text-[10px] text-slate-400 block mb-1">SECURITY</span>
              <span className="text-base sm:text-xl font-bold text-cyan-400">A+</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.01] border border-white/10 flex items-center justify-between text-xs z-10">
            <span className="text-slate-300 font-medium">Automatic Security Patches</span>
            <span className="text-emerald-400 font-mono text-[10px]">Active</span>
          </div>
        </div>
      ),
    },
    {
      number: "09",
      title: "AI Automation",
      category: "AI Automation",
      href: "/services/ai-automation",
      description: "Automate repetitive work and connect your business with intelligent workflows.",
      visualContent: (
        <div className="relative w-full h-full rounded-2xl border border-purple-500/25 bg-[#080C14] shadow-[0_0_60px_rgba(168,85,247,0.18)] backdrop-blur-3xl overflow-hidden p-5 sm:p-8 flex flex-col justify-between font-mono">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs z-10">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center font-bold text-white text-xs shadow-md">🤖</div>
              <div>
                <p className="text-xs font-semibold text-white">Neural Workflow Pipeline</p>
                <p className="text-[10px] text-purple-300">Groq SDK / LLM Parser</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 text-[10px] border border-purple-500/30">
              Active
            </span>
          </div>

          <div className="space-y-2.5 z-10 my-2 text-xs">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between backdrop-blur-md">
              <span className="text-slate-300 truncate max-w-[180px] sm:max-w-none">[Trigger] PDF / CRM Form</span>
              <span className="text-blue-400 font-mono shrink-0">Parsed ✓</span>
            </div>
            <div className="text-center text-slate-600 text-xs font-bold">↓</div>
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-between text-purple-300 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <span className="truncate max-w-[180px] sm:max-w-none">[AI Node] Semantic Matching</span>
              <span className="font-mono shrink-0">45ms</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.01] border border-white/10 flex items-center justify-between text-xs z-10">
            <span className="text-slate-300">CRM & WhatsApp Sync</span>
            <span className="text-emerald-400 font-mono text-[10px]">Connected</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative isolate overflow-hidden bg-[#FFFFFF] text-white py-24 lg:py-48 border-t border-white/10"
    >
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 h-[900px] w-[1400px] -translate-x-1/2 -translate-y-1/2 opacity-25 blur-[160px]"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.18) 0%, rgba(17,24,39,0) 70%)" }}
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.025] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-32">
          <p className="font-mono text-[11px] tracking-[0.34em] text-[#2563EB] uppercase">
            OUR SERVICES
          </p>
          <h2 className="mt-4 text-[clamp(2.2rem,4vw,4.5rem)] leading-[1.05] font-bold tracking-[-0.03em] text-[#0F172A]">
            Everything your business needs.<br />
            Built under one roof.
          </h2>
          <p className="mt-6 text-sm lg:text-lg text-[#475569] leading-relaxed font-light">
            From strategy and branding to development, cloud infrastructure and AI automation, we build complete digital ecosystems that help businesses launch, grow and scale.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          <div className="w-full lg:w-[40%] lg:sticky lg:top-32 space-y-3">
            {services.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div 
                  key={index}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) setActiveIndex(index);
                  }}
                  onClick={() => {
                    setActiveIndex(index);
                    const rightPreview = document.getElementById("services-preview-container");
                    if (rightPreview && window.innerWidth < 1024) {
                      rightPreview.scrollIntoView({ behavior: "smooth", block: "nearest" });
                    }
                  }}
                  className="group cursor-pointer py-3 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline space-x-4 sm:space-x-6">
                      <span className={`font-mono text-lg sm:text-xl font-bold transition-all duration-300 ${
                        isActive ? "text-[#0F172A] scale-105" : "text-[#2563EB] group-hover:text-white/70"
                      }`}>
                        {service.number}
                      </span>
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <h3 className={`text-lg sm:text-2xl font-semibold transition-all duration-300 ${
                          isActive ? "text-[#2563EB] font-bold translate-x-1" : "text-[#0F172A] group-hover:text-white/70"
                        }`}>
                          {service.title}
                        </h3>
                        <Link 
                          href={service.href}
                          onClick={(e) => e.stopPropagation()}
                          className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity text-[xs] font-mono text-blue-400 hover:underline flex items-center space-x-1"
                        >
                          <span>Details</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>

                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="hidden lg:block w-8 h-[2px] bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>

                  <div className={`mt-3 h-[1px] w-full transition-colors duration-300 ${
                    isActive ? "bg-blue-500/30" : "bg-white/10 group-hover:bg-white/20"
                  }`} />
                </div>
              );
            })}
          </div>

          <div 
            id="services-preview-container"
            className="w-full lg:w-[60%] h-[500px] sm:h-[580px] lg:h-[680px] relative flex items-center"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10 blur-xl pointer-events-none opacity-60" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative z-10"
              >
                {services[activeIndex].visualContent}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}