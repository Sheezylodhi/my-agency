"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useEffect, useRef, useState } from "react";

/* ============================================================
   PERFORMANCE NOTES
   ------------------------------------------------------------
   - No WebGL/Canvas anywhere. Everything below is CSS + SVG +
     framer-motion transforms.
   - The curtain intro runs ONCE on mount and then fully unmounts
     (removed from the DOM, not just hidden) — zero ongoing cost.
   - The marquee is a pure CSS keyframe animation — the browser
     compositor handles it, no JS runs per-frame.
   - Cursor-glow / magnetic button listeners are rAF-throttled,
     passive, and skipped entirely on touch devices and when
     prefers-reduced-motion is on.
   ============================================================ */

const easeOut = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

/* ---------------- curtain-reveal intro (signature moment, runs once) ---------------- */

function CurtainIntro({ onDone, skip }) {
  const [visible, setVisible] = useState(!skip);

  useEffect(() => {
    if (skip) return;
    const t = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 1050);
    return () => clearTimeout(t);
  }, [skip, onDone]);

  useEffect(() => {
    if (skip) onDone();
  }, [skip, onDone]);

  return (
    <AnimatePresence onExitComplete={() => {}}>
      {visible && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#0F172A]"
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0F172A]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
            transition={{ duration: 0.9, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex items-center gap-2 text-white font-mono text-xs tracking-[0.3em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              Loading Studio
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- cursor-follow ambient glow (desktop only) ---------------- */

function CursorGlow({ enabled }) {
  const ref = useRef(null);
  const raf = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const handle = (e) => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
        raf.current = null;
      });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handle);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className="hidden lg:block fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1D4ED8]/[0.06] blur-[80px] pointer-events-none z-0"
      style={{ willChange: "transform" }}
    />
  );
}

/* ---------------- magnetic CTA wrapper ---------------- */

function MagneticButton({ children, className, href, enabled }) {
  const ref = useRef(null);
  const raf = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
        raf.current = null;
      });
    };
    const reset = () => {
      el.style.transform = "translate(0px, 0px)";
    };

    el.addEventListener("mousemove", handleMove, { passive: true });
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  return (
    <a ref={ref} href={href} className={className} style={{ transition: "transform 0.15s ease-out", willChange: "transform" }}>
      {children}
    </a>
  );
}

/* ---------------- right-side browser mockup (unchanged concept, refined) ---------------- */

function HeroVisual({ reduceMotion }) {
  const wrapRef = useRef(null);
  const frameRef = useRef(null);
  const raf = useRef(null);

  useEffect(() => {
    if (reduceMotion) return;
    const el = frameRef.current;
    const wrap = wrapRef.current;
    if (!el || !wrap) return;
    const handleMove = (e) => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `rotateY(${px * 6}deg) rotateX(${-py * 6}deg)`;
        raf.current = null;
      });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [reduceMotion]);

  const bars = [40, 70, 55, 90, 65];

  return (
    <div ref={wrapRef} className="relative w-full max-w-[480px] mx-auto" style={{ perspective: 1200 }}>
      <div className="absolute -inset-8 bg-gradient-to-tr from-[#1D4ED8]/15 via-[#1D4ED8]/5 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* 1px gradient border via padding wrapper — premium detail */}
      <div className="rounded-2xl p-px bg-gradient-to-br from-[#1D4ED8]/30 via-slate-200 to-slate-200">
        <div
          ref={frameRef}
          className="relative rounded-2xl bg-white shadow-[0_30px_60px_-15px_rgba(15,23,42,0.25)] overflow-hidden transition-transform duration-300 ease-out"
          style={{ willChange: "transform", transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <div className="ml-3 flex-1 h-5 rounded-md bg-white border border-slate-100" />
          </div>

          <div className="p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div className="h-3 w-24 rounded-full bg-[#1D4ED8]/20" />
              <div className="h-6 w-16 rounded-md bg-[#1D4ED8]" />
            </div>
            <div className="h-28 rounded-xl bg-gradient-to-br from-[#1D4ED8]/10 to-slate-50 border border-slate-100" />
            <div className="flex items-end gap-2 h-20">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: easeOut }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-[#1D4ED8] to-[#1D4ED8]/60"
                />
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-2.5 w-full rounded-full bg-slate-100" />
              <div className="h-2.5 w-4/5 rounded-full bg-slate-100" />
            </div>
          </div>
        </div>
      </div>

      <FloatCard className="-left-6 top-10 hidden sm:block" delay={0.9} reduceMotion={reduceMotion}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <p className="text-xs font-semibold text-[#0F172A] font-mono">+47%</p>
          <p className="text-xs text-[#64748B]">conversion</p>
        </div>
      </FloatCard>
      <FloatCard className="-right-6 bottom-24 hidden sm:block" delay={1.1} reduceMotion={reduceMotion}>
        <p className="text-xs font-semibold text-[#0F172A]">Deploy: <span className="text-[#1D4ED8] font-mono">live ✓</span></p>
      </FloatCard>
      <FloatCard className="right-4 -bottom-6" delay={1.3} reduceMotion={reduceMotion}>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {["#1D4ED8", "#0F172A", "#64748B"].map((c, i) => (
              <span key={i} className="w-5 h-5 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
            ))}
          </div>
          <p className="text-xs font-semibold text-[#0F172A] font-mono">120+</p>
        </div>
      </FloatCard>
    </div>
  );
}

function FloatCard({ className, delay = 0, reduceMotion, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={`absolute z-20 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.1)] ${className}`}
      style={{ willChange: "transform" }}
    >
      <motion.div
        animate={reduceMotion ? {} : { y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ---------------- client marquee — pure CSS, effectively free ---------------- */

function ClientMarquee() {
  const names = ["NOVARA", "ATLAS CO.", "ORBIT LABS", "FINCH", "VELVET", "STRATA", "KIN & CO."];
  return (
    <div className="relative mt-16 lg:mt-24 border-t border-slate-100 pt-8 overflow-hidden">
      <p className="text-center text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 mb-5">
        Trusted by teams building with us
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="hero-marquee-track flex gap-14 w-max">
          {[...names, ...names].map((n, i) => (
            <span key={i} className="text-lg font-bold tracking-tight text-slate-300 whitespace-nowrap">
              {n}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .hero-marquee-track {
          animation: hero-marquee 22s linear infinite;
        }
        @keyframes hero-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ---------------- 3-step process strip — real sequence, reveals once in view ---------------- */

function ProcessStrip() {
  const steps = [
    { n: "01", label: "Discover", desc: "Audit your goals & market" },
    { n: "02", label: "Design", desc: "Craft the UI & experience" },
    { n: "03", label: "Deploy", desc: "Ship fast, iterate faster" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="mt-10 grid grid-cols-3 gap-4 lg:gap-8 max-w-lg mx-auto lg:mx-0"
    >
      {steps.map((s, i) => (
        <div key={s.n} className="relative text-left">
          <p className="font-mono text-[11px] text-[#1D4ED8] mb-1">{s.n}</p>
          <p className="text-sm font-semibold text-[#0F172A]">{s.label}</p>
          <p className="text-[11px] text-[#94A3B8] mt-0.5 leading-snug">{s.desc}</p>
          {i < steps.length - 1 && (
            <span className="hidden lg:block absolute top-1.5 left-[110%] w-6 h-px bg-slate-200" />
          )}
        </div>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const finePointer = !isTouch && !reduceMotion;

  return (
    <>
      <CurtainIntro skip={!!reduceMotion} onDone={() => setIntroDone(true)} />
      <CursorGlow enabled={finePointer} />

      <section className="min-h-screen w-full relative bg-white text-[#0F172A] overflow-hidden">
        {/* faint grid — static, cheap */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:28px_28px]" />

        {/* ambient blobs — transform-only */}
        <motion.div
          className="absolute -top-32 -left-32 w-[26rem] h-[26rem] rounded-full bg-[#1D4ED8]/10 blur-[90px] pointer-events-none"
          animate={reduceMotion ? {} : { x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[22rem] h-[22rem] rounded-full bg-[#1D4ED8]/10 blur-[90px] pointer-events-none"
          animate={reduceMotion ? {} : { x: [0, -20, 0], y: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10">

          {/* status pill — top center, real agency signal */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={introDone || reduceMotion ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#64748B] border border-slate-200 rounded-full px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Now accepting new projects — Q3 2026
            </span>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 py-14 lg:py-10 lg:min-h-[85vh]">

          {/* ---------------- LEFT ---------------- */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={introDone || reduceMotion ? "show" : "hidden"}
            className="text-center lg:text-left"
          >
            <motion.p
              variants={item}
              className="relative inline-block text-[10px] md:text-xs text-[#1D4ED8] mb-5 tracking-[0.25em] uppercase font-bold font-mono bg-blue-50 px-4 py-1.5 rounded-full overflow-hidden"
            >
              <span className="relative z-10">Design • Develop • Scale</span>
              {!reduceMotion && (
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                  initial={{ x: "-120%" }}
                  animate={{ x: "120%" }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                />
              )}
            </motion.p>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-balance">
              We Build Websites That Don't Just Look Good —
              <br />
              <span
                className="bg-gradient-to-r from-[#1D4ED8] via-[#3B6BF5] to-[#1D4ED8] bg-clip-text text-transparent bg-[length:200%_auto]"
                style={{ animation: reduceMotion ? "none" : "hero-shine 6s linear infinite" }}
              >
                They Bring You Clients
              </span>
            </motion.h1>

            <motion.div variants={item} className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-[#334155]">
              <Typewriter
                options={{
                  strings: ["High-Converting Websites", "Modern SaaS Products", "Custom Web Apps"],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                }}
              />
            </motion.div>

            <motion.p variants={item} className="mt-6 text-[#64748B] text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              We help startups and businesses turn ideas into fast, modern, and conversion-focused digital products.
            </motion.p>

            <motion.div variants={item} className="mt-4 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                {["#1D4ED8", "#0F172A", "#64748B", "#94A3B8"].map((c, i) => (
                  <span key={i} className="w-6 h-6 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
                ))}
              </div>
              <p className="text-xs text-gray-400">Trusted by startups & small businesses</p>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <MagneticButton
                href="/quote"
                enabled={finePointer}
                className="group relative px-8 py-3.5 bg-[#0F172A] rounded-xl text-white font-semibold shadow-lg text-sm overflow-hidden inline-block"
              >
                <span className="absolute inset-0 bg-[#1D4ED8] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2">
                  Get Free Strategy Call
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </MagneticButton>

              <MagneticButton
                href="/portfolio"
                enabled={finePointer}
                className="px-8 py-3.5 border border-[#E2E8F0] hover:border-[#1D4ED8] text-[#0F172A] hover:text-[#1D4ED8] transition-colors rounded-xl font-semibold text-sm inline-block"
              >
                View Case Studies
              </MagneticButton>
            </motion.div>

            <motion.div variants={item}>
              <ProcessStrip />
            </motion.div>
          </motion.div>

          {/* ---------------- RIGHT ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={introDone || reduceMotion ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: easeOut }}
            className="hidden lg:block"
          >
            <HeroVisual reduceMotion={reduceMotion} />
          </motion.div>

          {/* mobile visual — lightweight */}
          <div className="lg:hidden -order-1 mb-4">
            <div className="relative max-w-xs mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100 bg-slate-50">
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="w-2 h-2 rounded-full bg-slate-300" />
              </div>
              <div className="p-4 space-y-3">
                <div className="h-16 rounded-lg bg-gradient-to-br from-[#1D4ED8]/10 to-slate-50 border border-slate-100" />
                <div className="h-2 w-full rounded-full bg-slate-100" />
                <div className="h-2 w-3/4 rounded-full bg-slate-100" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10">
          <ClientMarquee />
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={introDone || reduceMotion ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] text-[#94A3B8] uppercase font-mono">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-[#CBD5E1] flex justify-center pt-1.5">
            <motion.span
              className="w-1 h-1.5 rounded-full bg-[#1D4ED8]"
              animate={reduceMotion ? {} : { y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes hero-shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </>
  );
}