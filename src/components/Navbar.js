"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact us", href: "/contact" },
  { name: "Services", href: "/#services" },
  { name: "Price", href: "/#prices" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blogs", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-[100] bg-[#0F172A] border-b border-white/10 shadow-xl py-3">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
        {/* Logo Section - Fixed Scaling */}
        <Link href="/" className="relative z-[110] flex items-center">
          <Image
            src="/webmashlogo1.png"
            alt="Webmash Logo"
            width={350} // Size adjust kiya hai taake navbar mein fit aaye
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-semibold text-slate-200 hover:text-blue-400 transition-all relative group"
              >
                {link.name}
                {/* Underline Animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Action Button - Pro Look */}
          <Link 
            href="/qoute" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30 active:scale-95 border border-white/10"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative z-[110] p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Slide Down Pro Style */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0F172A] border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-bold text-slate-300 hover:text-blue-500 flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/qoute"
                onClick={() => setOpen(false)}
                className="mt-4 w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg"
              >
                Start a Project <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}