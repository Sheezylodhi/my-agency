"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Price", href: "/#prices" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact us", href: "/contact" },
];

const easeOut = [0.22, 1, 0.36, 1];

/* ---------------- magnetic CTA — same pattern used in Hero, kept consistent ---------------- */

function MagneticLink({ href, className, children, enabled }) {
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
    const reset = () => { el.style.transform = "translate(0px, 0px)"; };
    el.addEventListener("mousemove", handleMove, { passive: true });
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  return (
    <Link ref={ref} href={href} className={className} style={{ transition: "transform 0.15s ease-out", willChange: "transform" }}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    setFinePointer(window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion);
  }, [reduceMotion]);

  // scroll progress + compact-on-scroll state — single rAF-throttled, passive listener
  useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        setScrolled(scrollTop > 24);
        raf = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // lock body scroll while the full-screen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-[100] bg-[#0F172A] border-b transition-all duration-300 ${
          scrolled ? "border-white/10 shadow-2xl py-2" : "border-white/5 py-4"
        }`}
      >
        {/* scroll progress bar — thin, sits on the bottom edge of the nav */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#3B6BF5]" style={{ width: `${progress}%` }} />

        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12">

          {/* Logo */}
          <Link href="/" className="relative flex items-center h-full group">
            <motion.div whileHover={finePointer ? { scale: 1.04 } : {}} transition={{ duration: 0.2 }} className="relative w-auto h-[80%] flex items-center">
              <Image
                src="/webmashlogo1.png"
                alt="Webmash Logo"
                width={200}
                height={50}
                className="w-auto h-full object-contain object-left"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[14px] font-semibold text-slate-300 hover:text-white transition-colors relative group flex items-center gap-1.5"
                >
                  <span className="w-0 group-hover:w-1.5 h-1.5 rounded-full bg-[#1D4ED8] transition-all duration-300 overflow-hidden" />
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#1D4ED8] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <MagneticLink
              href="/qoute"
              enabled={finePointer}
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#1D4ED8] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-600/25 border border-white/10"
            >
              <span className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                Get a Quote <ArrowRight size={16} />
              </span>
            </MagneticLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden relative z-[110] p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ---------------- Full-screen premium mobile menu ---------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 32px) 32px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 32px) 32px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 32px) 32px)" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="fixed inset-0 z-[90] bg-[#0F172A] lg:hidden flex flex-col"
          >
            {/* faint grid backdrop for texture, consistent with hero */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

            <div className="relative flex-1 flex flex-col justify-center px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.06, ease: easeOut }}
                  className="border-b border-white/10 py-4"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between group"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-xs font-mono text-[#1D4ED8]">0{i + 1}</span>
                      <span className="text-3xl sm:text-4xl font-bold text-slate-200 group-hover:text-white transition-colors tracking-tight">
                        {link.name}
                      </span>
                    </span>
                    <ArrowUpRight size={22} className="text-slate-500 group-hover:text-[#1D4ED8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + navLinks.length * 0.06, ease: easeOut }}
              >
                <Link
                  href="/qoute"
                  onClick={() => setOpen(false)}
                  className="mt-8 w-full bg-[#1D4ED8] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg"
                >
                  Start a Project <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>

            {/* footer row — contact + socials, quiet agency detail */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="relative border-t border-white/10 px-8 py-6 flex items-center justify-between text-xs text-slate-500 font-mono"
            >
              <span>© {new Date().getFullYear()} Webmash</span>
              <a href="mailto:hello@webmash.com" className="hover:text-[#1D4ED8] transition-colors">hello@webmash.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}