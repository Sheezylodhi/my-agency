"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "Website Design",
    href: "/services/web-design-development",
    description:
      "Professional website design services focused on responsive layouts, modern user experiences, high performance, and conversion optimization.",
    visualContent: (
      <div className="flex flex-col h-full font-sans select-none">
        {/* Window Chrome */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.06] bg-[#0A0E17]/80 backdrop-blur-xl z-20">
          <div className="flex items-center space-x-2" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>

          <div className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] font-mono text-[10px] text-slate-400 flex items-center space-x-2">
            <span
              className="w-1.5 h-1.5 rounded-full bg-blue-500"
              aria-hidden="true"
            />
            <span>webmashlabs.com/design</span>
          </div>

          <div className="text-[10px] font-mono tracking-wider text-slate-300 uppercase">
            Concept 01
          </div>
        </div>

        {/* Preview Canvas */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 relative z-10 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div className="flex items-center space-x-2.5">
              <div
                className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-mono font-bold text-white text-xs shadow-inner"
                aria-hidden="true"
              >
                W
              </div>

              <span className="font-semibold text-xs tracking-widest text-slate-200">
                WEBMASH LABS
              </span>
            </div>

            <div
              className="hidden sm:flex items-center space-x-6 text-[11px] text-slate-400 font-medium"
              aria-hidden="true"
            >
              <span className="text-white">Studio</span>
              <span>Work</span>
              <span>Process</span>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-white text-slate-950 font-semibold text-[11px] shadow-sm">
              Initialize
            </div>
          </div>

          <div className="py-4 space-y-4 max-w-lg">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] tracking-wide">
              <span>EDITORIAL ARCHITECTURE</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white leading-snug">
              Immersive digital spaces engineered for conversion.
            </h3>

            <p className="text-slate-400 text-xs lg:text-sm font-light leading-relaxed">
              Meticulously crafted interfaces balancing high-end aesthetic
              restraint with uncompromising technical performance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5 backdrop-blur-md">
              <div className="flex items-center space-x-2">
                <div
                  className="w-5 h-5 rounded-full bg-slate-800 text-[9px] flex items-center justify-center font-bold text-slate-300"
                  aria-hidden="true"
                >
                  A
                </div>

                <span className="text-[11px] font-medium text-slate-200">
                  Typography Scale
                </span>
              </div>

              <p className="text-[10px] text-slate-400 font-mono">
                Fluid modular hierarchy
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5 backdrop-blur-md">
              <div className="flex items-center space-x-2">
                <div
                  className="w-5 h-5 rounded-full bg-blue-600/30 text-[9px] flex items-center justify-center font-bold text-blue-400"
                  aria-hidden="true"
                >
                  B
                </div>

                <span className="text-[11px] font-medium text-slate-200">
                  Grid Alignment
                </span>
              </div>

              <p className="text-[10px] text-slate-400 font-mono">
                Strict 8pt baseline rhythm
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    number: "02",
    title: "Website Development",
    href: "/services/web-applications",
    description:
      "Custom website development using modern technologies to build fast, secure, scalable, and SEO-friendly websites and web applications.",
    visualContent: (
      <div className="flex flex-col h-full font-mono select-none z-10">
        {/* Window Chrome */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.06] bg-[#0A0E17]/80 backdrop-blur-xl">
          <div className="flex items-center space-x-2" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>

          <div className="text-[11px] text-slate-400 flex items-center space-x-2">
            <span className="text-slate-400">workspace</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-200 font-semibold">core.ts</span>
          </div>

          <div className="text-[10px] text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Build: Optimized
          </div>
        </div>

        {/* IDE Layout */}
        <div className="flex-1 grid grid-cols-12 overflow-hidden text-xs">
          <div className="col-span-4 border-r border-white/[0.06] p-4 space-y-3 bg-white/[0.005] text-slate-400 hidden lg:block">
            <p className="text-[10px] tracking-widest uppercase text-slate-600 font-semibold">
              Structure
            </p>

            <div className="space-y-2 text-[11px]">
              <p className="text-slate-300 flex items-center space-x-2">
                <span aria-hidden="true">📁</span>
                <span>src/core</span>
              </p>

              <p className="pl-4 text-blue-400 flex items-center space-x-2">
                <span aria-hidden="true">📄</span>
                <span>runtime.ts</span>
              </p>

              <p className="pl-4 text-slate-300 bg-white/[0.03] px-2 py-1 rounded-md border border-white/[0.04] flex items-center space-x-2">
                <span aria-hidden="true">📄</span>
                <span>engine.ts</span>
              </p>

              <p className="pl-4 text-slate-400 flex items-center space-x-2">
                <span aria-hidden="true">📄</span>
                <span>types.d.ts</span>
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 p-6 flex flex-col justify-between space-y-4 overflow-y-auto">
            <div className="space-y-2 text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
              <p>
                <span className="text-purple-400">import</span> &#123;{" "}
                <span className="text-blue-300">Cluster</span> &#125;{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-emerald-300">
                  &apos;@webmash/core&apos;
                </span>
                ;
              </p>

              <p>
                <span className="text-purple-400">import</span> &#123;{" "}
                <span className="text-blue-300">EdgeCache</span> &#125;{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-emerald-300">
                  &apos;@edge/runtime&apos;
                </span>
                ;
              </p>

              <p className="text-slate-600">
                // Compile high-performance node cluster
              </p>

              <p>
                <span className="text-purple-400">
                  export async function
                </span>{" "}
                <span className="text-amber-300">initializePipeline</span>()
                &#123;
              </p>

              <p className="pl-4">
                <span className="text-blue-300">const</span> node ={" "}
                <span className="text-purple-400">await</span>{" "}
                Cluster.<span className="text-amber-300">bind</span>(&#123;
                latency: <span className="text-emerald-300">&apos;0ms&apos;</span>{" "}
                &#125;);
              </p>

              <p className="pl-4">
                <span className="text-purple-400">return</span>{" "}
                EdgeCache.<span className="text-amber-300">verify</span>(node);
              </p>

              <p>&#125;</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#04060B] border border-white/[0.06] space-y-1.5 text-[10px]">
              <div className="flex items-center justify-between text-slate-400 border-b border-white/[0.04] pb-2 mb-2 font-mono">
                <span>SYSTEM TELEMETRY</span>

                <span className="text-emerald-400 flex items-center space-x-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                    aria-hidden="true"
                  />
                  <span>ONLINE</span>
                </span>
              </div>

              <p className="text-slate-400">
                &gt; compiling static assets &amp; server routes...
              </p>

              <p className="text-emerald-400">
                ✓ Global edge deployment completed successfully.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    number: "03",
    title: "UI / UX Design",
    href: "/services/ui-ux-design",
    description:
      "User-focused UI/UX design services creating intuitive, accessible, and conversion-focused digital experiences for websites and web applications.",
    visualContent: (
      <div className="flex flex-col justify-between h-full p-6 lg:p-8 font-sans select-none">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] z-10">
          <div className="flex items-center space-x-3">
            <div
              className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-xs shadow-md"
              aria-hidden="true"
            >
              UI
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-200">
                Design_System_Tokens.fig
              </p>

              <p className="text-[10px] text-pink-400 font-mono">
                Variables Synchronized
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-slate-400">
              1440px Grid
            </span>

            <span className="px-2.5 py-1 rounded bg-pink-500/10 text-pink-400 text-[10px] font-mono border border-pink-500/20">
              Active Node
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 z-10">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 backdrop-blur-md">
            <span className="font-mono text-[10px] tracking-wider text-slate-400 block">
              PALETTE
            </span>

            <div className="flex space-x-2" aria-hidden="true">
              <div className="w-5 h-5 rounded-full bg-purple-500 shadow-sm ring-1 ring-white/20" />
              <div className="w-5 h-5 rounded-full bg-pink-500 shadow-sm ring-1 ring-white/20" />
              <div className="w-5 h-5 rounded-full bg-slate-900 shadow-sm ring-1 ring-white/20" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1 backdrop-blur-md">
            <span className="font-mono text-[10px] tracking-wider text-slate-400 block">
              TYPOGRAPHY
            </span>

            <p className="text-base font-semibold text-white tracking-tight">
              Inter Pro
            </p>

            <p className="text-[10px] text-slate-400 font-mono">
              Modular Scale
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1 backdrop-blur-md">
            <span className="font-mono text-[10px] tracking-wider text-slate-400 block">
              SPACING
            </span>

            <div
              className="flex items-center space-x-1.5 pt-1"
              aria-hidden="true"
            >
              <div className="w-2 h-4 bg-pink-500/40 rounded-sm" />
              <div className="w-4 h-4 bg-pink-500/70 rounded-sm" />
              <div className="w-6 h-4 bg-pink-500 rounded-sm" />
            </div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.06] flex items-center justify-between text-xs z-10">
          <span className="text-slate-300 font-medium">
            Component: Navigation_Bar
          </span>

          <span className="text-slate-400 font-mono text-[10px]">
            Variant: Primary
          </span>
        </div>
      </div>
    ),
  },

  {
    number: "04",
    title: "SEO",
    href: "/services/seo",
    description:
      "Professional SEO services focused on technical SEO, on-page optimization, content strategy, and improving organic search visibility.",
    visualContent: (
      <div className="flex flex-col justify-between h-full p-6 lg:p-8 font-sans select-none">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] z-10">
          <div className="flex items-center space-x-3">
            <div
              className="w-7 h-7 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-xs shadow-md"
              aria-hidden="true"
            >
              ↗
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-200">
                Organic Growth Architecture
              </p>

              <p className="text-[10px] text-emerald-400 font-mono">
                Search Engine Indexing Active
              </p>
            </div>
          </div>

          <span className="hidden sm:inline px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
            Performance Optimized
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 my-4 z-10">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <span className="text-[10px] font-mono text-slate-400 block">
              VISIBILITY
            </span>

            <p className="text-lg font-semibold text-white mt-1">
              Optimized
            </p>

            <span className="text-[10px] text-emerald-400 font-mono">
              Structured Data
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <span className="text-[10px] font-mono text-slate-400 block">
              CRAWL RATE
            </span>

            <p className="text-lg font-semibold text-white mt-1">
              Configured
            </p>

            <span className="text-[10px] text-emerald-400 font-mono">
              Technical SEO Ready
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <span className="text-[10px] font-mono text-slate-400 block">
              HEALTH
            </span>

            <p className="text-lg font-semibold text-emerald-400 mt-1">
              Standard
            </p>

            <span className="text-[10px] text-slate-400 font-mono">
              Compliant
            </span>
          </div>
        </div>

        <div
          className="h-28 w-full flex items-end space-x-2 pt-2 border-b border-white/[0.06] z-10"
          aria-hidden="true"
        >
          {[30, 42, 38, 55, 60, 72, 68, 82, 90, 95].map((h, i) => (
            <div
              key={`seo-bar-${i}`}
              style={{ height: `${h}%` }}
              className="flex-1 rounded-t bg-gradient-to-t from-emerald-600/30 to-emerald-400"
            />
          ))}
        </div>
      </div>
    ),
  },

  {
    number: "05",
    title: "Branding",
    href: "/services/branding",
    description:
      "Professional branding services that create cohesive visual identities, brand guidelines, and memorable digital experiences for growing businesses.",
    visualContent: (
      <div className="flex flex-col justify-between h-full p-6 lg:p-8 font-sans select-none">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] z-10">
          <div className="flex items-center space-x-3">
            <div
              className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-white text-xs shadow-md"
              aria-hidden="true"
            >
              ID
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-200">
                Brand Identity Guidelines
              </p>

              <p className="text-[10px] text-orange-400 font-mono">
                Visual Systems & Assets
              </p>
            </div>
          </div>

          <span className="hidden sm:inline px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 font-mono text-[10px] border border-orange-500/20">
            Systemized
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 z-10">
          <div className="p-5 rounded-xl bg-gradient-to-br from-orange-600/20 to-amber-600/10 border border-orange-500/20 text-white flex flex-col justify-between h-32">
            <span className="font-mono text-[10px] tracking-wider text-orange-300">
              WORDMARK CONCEPT
            </span>

            <div>
              <p className="text-xl font-bold tracking-wider">
                WEBMASH LABS
              </p>

              <p className="text-[10px] text-slate-400 font-mono mt-1">
                Custom geometric typography
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between h-32 backdrop-blur-md">
            <span className="font-mono text-[10px] tracking-wider text-slate-400">
              COLOR MATRIX
            </span>

            <div className="flex space-x-2.5" aria-hidden="true">
              <div className="w-6 h-6 rounded-full bg-slate-950 border border-white/20 shadow-sm" />
              <div className="w-6 h-6 rounded-full bg-orange-500 shadow-sm" />
              <div className="w-6 h-6 rounded-full bg-amber-600 shadow-sm" />
            </div>

            <p className="text-[10px] text-slate-400 font-mono">
              Curated tonal spectrum
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.06] flex items-center justify-between text-xs z-10">
          <span className="text-slate-300 font-medium">
            Identity System Package
          </span>

          <span className="text-orange-400 font-mono text-[10px]">
            Production Ready
          </span>
        </div>
      </div>
    ),
  },

  {
    number: "06",
    title: "Hosting Setup",
    href: "/services/hosting-setup",
    description:
      "Secure website hosting setup and cloud infrastructure configuration focused on performance, reliability, security, and fast global delivery.",
    visualContent: (
      <div className="flex flex-col justify-between h-full p-6 lg:p-8 font-mono select-none">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] text-xs z-10">
          <div className="flex items-center space-x-3">
            <div
              className="w-7 h-7 rounded-lg bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400 text-xs shadow-md"
              aria-hidden="true"
            >
              ☁
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-200">
                Edge Infrastructure & CDN
              </p>

              <p className="text-[10px] text-cyan-400">
                Global Distribution Network
              </p>
            </div>
          </div>

          <span className="hidden sm:inline px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] border border-cyan-500/20">
            Global Edge Deployment
          </span>
        </div>

        <div className="space-y-3 z-10 my-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex justify-between items-center backdrop-blur-md">
            <div className="space-y-0.5">
              <span className="text-xs text-white font-medium block">
                Edge Security Proxy
              </span>

              <span className="text-[10px] text-slate-400">
                DDoS Mitigation &amp; TLS 1.3
              </span>
            </div>

            <span className="text-cyan-400 text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Protected
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex justify-between items-center backdrop-blur-md">
            <div className="space-y-0.5">
              <span className="text-xs text-white font-medium block">
                Global CDN Routing
              </span>

              <span className="text-[10px] text-slate-400">
                Anycast DNS Resolution
              </span>
            </div>

            <span className="text-emerald-400 text-xs font-semibold">
              High Availability
            </span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-cyan-500/[0.03] border border-cyan-500/20 flex items-center justify-between text-xs z-10">
          <span className="text-slate-300">
            Automated SSL Provisioning
          </span>

          <span className="text-cyan-400 font-semibold">Configured</span>
        </div>
      </div>
    ),
  },

  {
    number: "07",
    title: "Business Email Setup",
    href: "/services/business-email-setup",
    description:
      "Professional business email setup using your custom domain with secure mail configuration and domain authentication for reliable email delivery.",
    visualContent: (
      <div className="flex flex-col justify-between h-full p-6 lg:p-8 font-sans select-none">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] z-10">
          <div className="flex items-center space-x-3">
            <div
              className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 text-xs shadow-md"
              aria-hidden="true"
            >
              @
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-200">
                Mailbox Infrastructure
              </p>

              <p className="text-[10px] text-blue-400 font-mono">
                Authenticated Domain Routing
              </p>
            </div>
          </div>

          <span className="hidden sm:inline px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
            SPF / DKIM / DMARC
          </span>
        </div>

        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3 backdrop-blur-md z-10 my-4">
          <div className="flex justify-between text-xs font-mono text-slate-400 border-b border-white/[0.04] pb-2">
            <span>INCOMING SECURE STREAM</span>

            <span className="text-emerald-400">
              TLS 1.3 ENCRYPTED
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold text-white">
              Executive Partnership Inquiry
            </p>

            <p className="text-[11px] text-slate-400 font-light leading-relaxed">
              &quot;Inquiring about enterprise digital architecture services
              for our upcoming scale phase...&quot;
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.06] flex items-center justify-between text-xs z-10">
          <span className="text-slate-300 font-medium">
            Deliverability Status
          </span>

          <span className="text-emerald-400 font-mono text-[10px]">
            Deliverability Configured
          </span>
        </div>
      </div>
    ),
  },

  {
    number: "08",
    title: "Website Maintenance",
    href: "/services/website-maintenance",
    description:
      "Ongoing website maintenance services including security updates, performance optimization, monitoring, backups, and technical support.",
    visualContent: (
      <div className="flex flex-col justify-between h-full p-6 lg:p-8 font-sans select-none">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] z-10">
          <div className="flex items-center space-x-3">
            <div
              className="w-7 h-7 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-xs shadow-md"
              aria-hidden="true"
            >
              🛡
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-200">
                Continuous Health Engine
              </p>

              <p className="text-[10px] text-emerald-400 font-mono">
                Proactive System Oversight
              </p>
            </div>
          </div>

          <span className="hidden sm:inline px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
            24/7 Monitoring
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 my-4 z-10 text-center">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <span className="font-mono text-[10px] text-slate-400 block mb-1">
              AVAILABILITY
            </span>

            <span className="text-sm font-semibold text-white">
              High Availability
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <span className="font-mono text-[10px] text-slate-400 block mb-1">
              LATENCY
            </span>

            <span className="text-sm font-semibold text-emerald-400">
              Low Latency Architecture
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            <span className="font-mono text-[10px] text-slate-400 block mb-1">
              BACKUPS
            </span>

            <span className="text-sm font-semibold text-cyan-400">
              Automated
            </span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.06] flex items-center justify-between text-xs z-10">
          <span className="text-slate-300 font-medium">
            Proactive Security Patches
          </span>

          <span className="text-emerald-400 font-mono text-[10px]">
            Applied Live
          </span>
        </div>
      </div>
    ),
  },

  {
    number: "09",
    title: "AI Automation",
    href: "/services/ai-automation",
    description:
      "AI automation services that connect intelligent workflows, APIs, and business processes to reduce repetitive work and improve operational efficiency.",
    visualContent: (
      <div className="flex flex-col justify-between h-full p-6 lg:p-8 font-mono select-none">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] text-xs z-10">
          <div className="flex items-center space-x-3">
            <div
              className="w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center font-bold text-purple-400 text-xs shadow-md"
              aria-hidden="true"
            >
              ⚡
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-200">
                Intelligent Workflow Engine
              </p>

              <p className="text-[10px] text-purple-300">
                Neural API Pipelines
              </p>
            </div>
          </div>

          <span className="hidden sm:inline px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-[10px] border border-purple-500/20">
            Automated
          </span>
        </div>

        <div className="space-y-3 z-10 my-4 text-xs">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between backdrop-blur-md">
            <span className="text-slate-400">
              [Trigger] Realtime Event Ingestion
            </span>

            <span className="text-blue-400">Active</span>
          </div>

          <div
            className="text-center text-slate-600 text-xs"
            aria-hidden="true"
          >
            ↓
          </div>

          <div className="p-3.5 rounded-xl bg-purple-500/[0.06] border border-purple-500/20 flex items-center justify-between text-purple-300 backdrop-blur-md">
            <span className="text-purple-200">
              [AI Node] Semantic Intent Routing
            </span>

            <span>Optimized</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.06] flex items-center justify-between text-xs z-10">
          <span className="text-slate-300">
            System API Synchronization
          </span>

          <span className="text-emerald-400 text-[10px]">
            Connected
          </span>
        </div>
      </div>
    ),
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const shouldReduceMotion = useReducedMotion();

  const handleKeyDown = useCallback((e, index) => {
    let newIndex = index;
    const maxIndex = SERVICES.length - 1;

    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        newIndex = index < maxIndex ? index + 1 : 0;
        break;

      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        newIndex = index > 0 ? index - 1 : maxIndex;
        break;

      case "Home":
        e.preventDefault();
        newIndex = 0;
        break;

      case "End":
        e.preventDefault();
        newIndex = maxIndex;
        break;

      case "Enter":
      case " ":
        e.preventDefault();
        setActiveIndex(index);
        return;

      default:
        return;
    }

    setActiveIndex(newIndex);
    tabRefs.current[newIndex]?.focus();
  }, []);

  const animationProps = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
      }
    : {
        initial: {
          opacity: 0,
          scale: 0.98,
          filter: "blur(2px)",
        },
        animate: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        },
        exit: {
          opacity: 0,
          scale: 0.98,
          filter: "blur(2px)",
        },
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        },
      };

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-white text-slate-900 py-24 sm:py-32 lg:py-40 border-t border-slate-200/50"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(255,255,255,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-16">
        <header className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <p className="font-mono text-[11px] tracking-[0.3em] text-blue-600 uppercase font-semibold">
            OUR CAPABILITIES
          </p>

          <h2
            id="services-heading"
            className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]"
          >
            Web Design, Web Development & Digital Services for Growing
            Businesses
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            Explore WebMash Labs&apos; professional digital services,
            including custom website design, web development, UI/UX design,
            SEO, branding, hosting setup, business email, website maintenance,
            and AI automation designed to scale your business online.
          </p>
        </header>

        <div className="relative flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* SERVICES NAVIGATION */}
          <nav
            className="w-full lg:w-[42%] lg:sticky lg:top-28 space-y-1 sm:space-y-2"
            aria-label="WebMash Labs Services Navigation"
          >
            {SERVICES.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={service.href}
                  className="group py-2 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 min-w-0 pr-4">
                      {/* ACCESSIBLE SELECTION BUTTON */}
                      <button
                        ref={(el) => {
                          tabRefs.current[index] = el;
                        }}
                        type="button"
                        aria-pressed={isActive}
                        onPointerEnter={(e) => {
                          if (e.pointerType === "mouse") {
                            setActiveIndex(index);
                          }
                        }}
                        onClick={() => setActiveIndex(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className={`font-mono text-sm sm:text-base font-semibold transition-all duration-300 shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded min-w-11 min-h-11 flex items-center justify-center ${
                          isActive
                            ? "text-blue-600"
                            : "text-slate-700 group-hover:text-slate-900"
                        }`}
                        aria-label={`Show preview for ${service.title}`}
                      >
                        {service.number}
                      </button>

                      <h3
                        className={`text-lg sm:text-xl font-medium transition-all duration-300 truncate ${
                          isActive
                            ? "text-slate-900 font-semibold translate-x-1"
                            : "text-slate-600 group-hover:text-slate-900"
                        }`}
                      >
                        <Link
                          href={service.href}
                          className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                        >
                          {service.title}
                        </Link>
                      </h3>
                    </div>

                    <div className="flex items-center space-x-4 shrink-0">
                      {isActive && !shouldReduceMotion && (
                        <motion.div
                          layoutId="active-services-indicator"
                          className="hidden lg:block w-6 h-[2px] bg-blue-600 shrink-0"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                          aria-hidden="true"
                        />
                      )}

                      <Link
                        href={service.href}
                        aria-label={`Explore professional ${service.title} services by WebMash Labs`}
                       className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:focus-within:opacity-100 transition-opacity text-xs font-mono text-blue-700 hover:text-blue-800 hover:underline focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-2 min-w-11 min-h-11 flex items-center justify-center space-x-1"
                      >
                        <span>Details</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>

                  <p className="mt-1 ml-10 text-xs sm:text-sm text-slate-600 font-light leading-relaxed pr-6">
                    {service.description}
                  </p>

                  <div
                    className={`mt-3 h-[1px] w-full transition-colors duration-300 ${
                      isActive
                        ? "bg-slate-300"
                        : "bg-slate-100 group-hover:bg-slate-200"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </nav>

          {/* SERVICE PREVIEW */}
          <div
            id="services-preview-container"
            className="w-full lg:w-[58%] h-[440px] sm:h-[500px] lg:h-[620px] relative flex items-center rounded-2xl"
          >
            <div
              className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-emerald-600/5 blur-xl pointer-events-none"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                role="region"
                aria-label={`${SERVICES[activeIndex].title} preview`}
                tabIndex={-1}
                {...animationProps}
                className="w-full h-full relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-2xl shadow-xl"
              >
                <div className="w-full h-full rounded-2xl border border-white/[0.08] bg-[#070A10] overflow-hidden shadow-2xl flex flex-col">
                  {SERVICES[activeIndex].visualContent}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}