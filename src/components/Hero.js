"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Rocket, 
  BadgeCheck, 
  Braces, 
  Cloud, 
  Code2, 
  Component, 
  Cpu, 
  Database, 
  GitBranch, 
  Globe, 
  Layers3, 
  LayoutTemplate, 
  Mail, 
  MonitorSmartphone, 
  Network, 
  Search, 
  Server, 
  ShieldCheck, 
  Workflow,
  Code,
  TrendingUp,
  ChevronRight
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Sub-components for EcosystemVisual                                         */
/* -------------------------------------------------------------------------- */

function WindowChrome({ label, Icon }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-white/10 px-4 py-2.5 bg-white/[0.02]">
      <Icon className="h-3 w-3 text-blue-400" strokeWidth={1.25} aria-hidden="true" />
      <span className="font-mono text-[9px] tracking-[0.22em] text-slate-400 uppercase">
        {label}
      </span>
      <span className="ml-auto h-px w-6 bg-white/10" aria-hidden="true" />
    </div>
  );
}

function Line({ d, dur, delay = 0 }) {
  return (
    <>
      <path
        d={d}
        stroke="currentColor"
        className="text-blue-500/30"
        strokeWidth="1"
        strokeDasharray="2 8"
        style={{ animation: `lux-dash ${dur}s linear infinite` }}
      />
      <circle r="2.5" fill="currentColor" className="text-blue-400">
        <animateMotion
          dur={`${dur * 0.55}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          path={d}
          keyPoints="0;1"
          keyTimes="0;1"
          calcMode="linear"
        />
      </circle>
    </>
  );
}

export function EcosystemVisual() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[640px] [perspective:1800px] hidden lg:block" aria-hidden="true">
      {/* blueprint plane */}
      <div
        className="blueprint-field pointer-events-none absolute inset-[6%] rounded-2xl bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{ transform: "rotateX(6deg) rotateY(-8deg)" }}
      />

      {/* connection system */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 620 775"
        fill="none"
      >
        <Line d="M150 235 C 265 250, 245 420, 355 425" dur={24} />
        <Line d="M470 190 C 470 300, 300 320, 250 465" dur={30} delay={3} />
        <Line d="M120 545 C 245 560, 300 625, 430 610" dur={26} delay={6} />
        <Line d="M520 430 C 560 520, 470 600, 400 655" dur={28} delay={9} />
        <Line d="M200 120 C 320 110, 420 140, 500 120" dur={34} delay={2} />
        {[
          [150, 235],
          [355, 425],
          [470, 190],
          [250, 465],
          [430, 610],
          [520, 430],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill="currentColor"
            className="text-blue-400"
            style={{ animation: `lux-node ${7 + i}s ease-in-out infinite` }}
          />
        ))}
        <g stroke="currentColor" className="text-white/10" strokeWidth="1">
          <path d="M0 118 H620" />
          <path d="M0 692 H620" />
          <path d="M76 0 V775" />
        </g>
      </svg>

      {/* hosting status */}
      <div
        className="absolute top-[26%] right-[20%] w-[34%] overflow-hidden rounded-xl opacity-60 bg-[#0B0F19]/90 border border-white/10 shadow-2xl"
        data-parallax="-14"
        style={{ transform: "rotateY(-9deg)" }}
      >
        <WindowChrome label="hosting" Icon={Server} />
        <div className="flex items-center justify-between px-4 py-4">
          <BadgeCheck className="h-4 w-4 text-blue-400" strokeWidth={1.25} aria-hidden="true" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-14 rounded-full bg-white/20" />
            <div className="h-1.5 w-9 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      {/* database */}
      <div
        className="absolute top-[62%] right-[6%] flex w-[30%] items-center gap-3 rounded-lg px-4 py-3 opacity-60 bg-[#0B0F19]/90 border border-white/10 shadow-2xl"
        data-parallax="-18"
      >
        <Database className="h-4 w-4 text-slate-400" strokeWidth={1.25} aria-hidden="true" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-12 rounded-full bg-white/20" />
          <div className="h-1.5 w-7 rounded-full bg-white/10" />
        </div>
      </div>

      {/* desktop website preview */}
      <div
        className="absolute top-[8%] left-[2%] w-[70%] overflow-hidden rounded-xl bg-[#0B0F19] border border-white/10 shadow-2xl"
        data-parallax="30"
        style={{ transform: "rotateY(7deg) rotateX(2deg)" }}
      >
        <WindowChrome label="webmashlabs.com" Icon={Globe} />
        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <LayoutTemplate className="h-4 w-4 text-blue-400" strokeWidth={1.25} aria-hidden="true" />
            <div className="flex gap-4 text-slate-500">
              <Component className="h-3.5 w-3.5" strokeWidth={1.25} aria-hidden="true" />
              <Layers3 className="h-3.5 w-3.5" strokeWidth={1.25} aria-hidden="true" />
              <Network className="h-3.5 w-3.5" strokeWidth={1.25} aria-hidden="true" />
            </div>
          </div>
          <div className="h-2.5 w-4/5 rounded-full bg-white/20" />
          <div className="h-2 w-3/5 rounded-full bg-white/10" />
          <div className="grid grid-cols-3 gap-2.5 pt-2">
            <div className="h-16 rounded-md border border-white/10 bg-white/[0.02]" />
            <div className="h-16 rounded-md border border-white/10 bg-blue-600/20" />
            <div className="h-16 rounded-md border border-white/10 bg-white/[0.02]" />
          </div>
        </div>
      </div>

      {/* code / build window */}
      <div
        className="absolute top-0 right-0 w-[40%] overflow-hidden rounded-xl bg-[#0B0F19] border border-white/10 shadow-2xl"
        data-parallax="-46"
      >
        <WindowChrome label="build" Icon={Code2} />
        <div className="space-y-2 p-4 font-mono text-[9px] text-slate-400">
          <p className="text-blue-400">&lt;section class=&quot;hero&quot;&gt;</p>
          <p className="pl-3">craft · systems</p>
          <p className="pl-3 text-slate-500">precision: absolute</p>
          <p>&lt;/section&gt;</p>
          <div className="flex items-center gap-3 pt-2 text-slate-500">
            <Braces className="h-3 w-3" strokeWidth={1.25} aria-hidden="true" />
            <GitBranch className="h-3 w-3" strokeWidth={1.25} aria-hidden="true" />
            <Rocket className="h-3 w-3" strokeWidth={1.25} aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* mobile preview */}
      <div
        className="absolute top-[46%] left-0 w-[25%] overflow-hidden rounded-2xl p-3 bg-[#0B0F19] border border-white/10 shadow-2xl"
        data-parallax="58"
      >
        <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/20" />
        <div className="space-y-2">
          <div className="h-14 rounded-lg bg-blue-600/20" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/20" />
          <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
        </div>
        <MonitorSmartphone
          className="mt-3 h-3.5 w-3.5 text-slate-500"
          strokeWidth={1.25}
          aria-hidden="true"
        />
      </div>

      {/* design system panel */}
      <div
        className="absolute top-[38%] left-[27%] w-[38%] overflow-hidden rounded-xl bg-[#0B0F19] border border-white/10 shadow-2xl"
        data-parallax="-24"
        style={{ transform: "rotateY(-5deg)" }}
      >
        <WindowChrome label="design system" Icon={Component} />
        <div className="grid grid-cols-4 gap-2 p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`h-6 rounded-sm border border-white/10 ${
                i === 2 ? "bg-blue-600/30" : "bg-white/[0.04]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* infrastructure grid */}
      <div
        className="absolute right-[2%] bottom-[14%] w-[56%] overflow-hidden rounded-xl bg-[#0B0F19] border border-white/10 shadow-2xl"
        data-parallax="-32"
      >
        <WindowChrome label="infrastructure" Icon={Cloud} />
        <div className="grid grid-cols-4 gap-px bg-white/10">
          {[Cloud, Server, Database, ShieldCheck, Network, Workflow, Cpu, Mail].map((Icon, i) => (
            <div key={i} className="flex h-14 items-center justify-center bg-[#0B0F19]/60">
              <Icon
                className={i === 5 ? "h-4 w-4 text-blue-400" : "h-4 w-4 text-slate-400"}
                strokeWidth={1.25}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      {/* AI automation flow chip */}
      <div
        className="absolute top-[33%] left-[52%] flex items-center gap-3 rounded-full px-4 py-2.5 bg-[#0B0F19] border border-white/10 shadow-2xl"
        data-parallax="70"
      >
        <Workflow className="h-3.5 w-3.5 text-blue-400" strokeWidth={1.25} aria-hidden="true" />
        <span className="font-mono text-[9px] tracking-[0.22em] text-slate-400 uppercase">
          AI automation
        </span>
      </div>

      {/* SEO card */}
      <div
        className="absolute bottom-[2%] left-[4%] w-[36%] overflow-hidden rounded-xl bg-[#0B0F19] border border-white/10 shadow-2xl"
        data-parallax="66"
      >
        <WindowChrome label="seo" Icon={Search} />
        <div className="space-y-2 px-4 py-4">
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-3/4 rounded-full bg-blue-500/50" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
        </div>
      </div>

      {/* business email chip */}
      <div
        className="absolute bottom-[22%] left-[30%] flex items-center gap-3 rounded-lg px-4 py-3 bg-[#0B0F19] border border-white/10 shadow-2xl"
        data-parallax="44"
      >
        <Mail className="h-4 w-4 text-slate-400" strokeWidth={1.25} aria-hidden="true" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-14 rounded-full bg-white/20" />
          <div className="h-1.5 w-8 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main Hero Component                                                        */
/* -------------------------------------------------------------------------- */

export function Hero() {
  const stageRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const layers = Array.from(
      stage.querySelectorAll("[data-parallax]"),
    ).map((el) => ({ el, depth: Number(el.dataset["parallax"]) / 100 }));

    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      tx = (e.clientX - r.left - r.width / 2) / r.width;
      ty = (e.clientY - r.top - r.height / 2) / r.height;
    };

    const tick = () => {
      cx += (tx - cx) * 0.035;
      cy += (ty - cy) * 0.035;
      for (const { el, depth } of layers) {
        el.style.transform = `translate3d(${cx * depth * 100}px, ${cy * depth * 70}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={stageRef}
      className="relative isolate min-h-screen overflow-hidden bg-[#0B0F19] text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[900px] w-[1300px] -translate-x-1/2 opacity-40"
        style={{ background: "radial-gradient(circle, rgba(29,78,216,0.12) 0%, rgba(11,15,25,0) 70%)" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0B0F19] to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-8 pt-32 pb-28 lg:px-16 lg:pt-36">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <header>
              <p className="font-mono text-[11px] tracking-[0.34em] text-slate-400 uppercase">
                DIGITAL PRODUCT ENGINEERING · WEB APPLICATIONS · AI AUTOMATION
              </p>

              <h1 className="mt-8 text-[clamp(3rem,6.6vw,6.2rem)] leading-[0.92] font-bold tracking-[-0.045em] text-white">
                Engineering
                <br />
                Digital Products
                <br />
                <span className="italic font-normal text-slate-400">That Scale Growth.</span>
              </h1>
            </header>

            <p className="mt-10 max-w-[46ch] text-lg leading-relaxed text-slate-400">
              WebMash Labs is a full-service digital product engineering agency building high-performance web applications, custom e-commerce platforms, scalable business systems, and AI automation workflows for ambitious organizations.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-medium text-white transition-all duration-700 hover:bg-blue-500 shadow-[0_10px_30px_rgba(29,78,216,0.4)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0F19]"
                aria-label="Start your digital product or web development project with WebMash Labs"
              >
                Start a project
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white transition-colors duration-700 hover:border-white/30 hover:bg-white/5 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B0F19]"
                aria-label="Explore selected digital engineering case studies and work by WebMash Labs"
              >
                <Rocket className="h-4 w-4 text-slate-400" strokeWidth={1.5} aria-hidden="true" />
                View selected work
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <EcosystemVisual />
          </div>
        </div>

        {/* Workflow Lifecycle Cards spanning full container width */}
        <div className="mt-24 border-t border-white/10 pt-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch relative">
            <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" aria-hidden="true" />

            {/* Card 1: Launch */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.04] hover:-translate-y-1 shadow-xl">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blue-400 transition-colors duration-500 group-hover:border-blue-500/30 group-hover:bg-blue-500/10" aria-hidden="true">
                    <Rocket className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">01 / Launch</span>
                </div>
                <h2 className="text-base font-semibold tracking-tight text-white flex items-center justify-between">
                  Launch
                  <ChevronRight className="h-3.5 w-3.5 text-slate-600 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-blue-400 hidden lg:block" aria-hidden="true" />
                </h2>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed whitespace-nowrap">Strategy • Brand • Positioning</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] text-blue-400/80 font-mono">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse mr-2" aria-hidden="true" />
                Phase initiated
              </div>
            </div>

            {/* Card 2: Build */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.04] hover:-translate-y-1 shadow-xl">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blue-400 transition-colors duration-500 group-hover:border-blue-500/30 group-hover:bg-blue-500/10" aria-hidden="true">
                    <Code className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">02 / Build</span>
                </div>
                <h2 className="text-base font-semibold tracking-tight text-white flex items-center justify-between">
                  Build
                  <ChevronRight className="h-3.5 w-3.5 text-slate-600 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-blue-400 hidden lg:block" aria-hidden="true" />
                </h2>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">Websites • Applications • Custom Experiences</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] text-slate-500 font-mono">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-600 mr-2" aria-hidden="true" />
                Next milestone
              </div>
            </div>

            {/* Card 3: Automate */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.04] hover:-translate-y-1 shadow-xl">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blue-400 transition-colors duration-500 group-hover:border-blue-500/30 group-hover:bg-blue-500/10" aria-hidden="true">
                    <Cpu className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">03 / Automate</span>
                </div>
                <h2 className="text-base font-semibold tracking-tight text-white flex items-center justify-between">
                  Automate
                  <ChevronRight className="h-3.5 w-3.5 text-slate-600 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-blue-400 hidden lg:block" aria-hidden="true" />
                </h2>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">AI Workflows • Integrations • Business Systems</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] text-slate-500 font-mono">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-600 mr-2" aria-hidden="true" />
                Queued sequence
              </div>
            </div>

            {/* Card 4: Scale */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.04] hover:-translate-y-1 shadow-xl">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blue-400 transition-colors duration-500 group-hover:border-blue-500/30 group-hover:bg-blue-500/10" aria-hidden="true">
                    <TrendingUp className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">04 / Scale</span>
                </div>
                <h2 className="text-base font-semibold tracking-tight text-white">Scale</h2>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">SEO • Infrastructure • Expansion & Growth</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] text-slate-500 font-mono">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-600 mr-2" aria-hidden="true" />
                Enterprise tier
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}