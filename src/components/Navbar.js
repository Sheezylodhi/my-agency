"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full h-20 top-0 z-50 bg-[#0F172A] backdrop-blur-xl border-b border-[#E2E8F0]">
      
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white tracking-tight">
          DevAgency
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-white">

            
           <a
            href="/"
            className="hover:text-[#1D4ED8] transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#1D4ED8] hover:after:w-full after:transition-all"
          >
            Home
          </a>
            <a
            href="/about"
            className="hover:text-[#1D4ED8] transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#1D4ED8] hover:after:w-full after:transition-all"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-[#1D4ED8] transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#1D4ED8] hover:after:w-full after:transition-all"
          >
            Services
          </a>
           <a
            href="/contact"
            className="hover:text-[#1D4ED8] transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#1D4ED8] hover:after:w-full after:transition-all"
          >
            Contact
          </a>

          <a
            href="/portfolio"
            className="hover:text-[#1D4ED8] transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#1D4ED8] hover:after:w-full after:transition-all"
          >
            Portfolio
          </a>
           <a
            href="/qoute"
            className="hover:text-[#1D4ED8] transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#1D4ED8] hover:after:w-full after:transition-all"
          >
            Quote
          </a>
           <a
            href="/blog"
            className="hover:text-[#1D4ED8] transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#1D4ED8] hover:after:w-full after:transition-all"
          >
            Blogs
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-6 py-4 flex flex-col gap-4 text-[#334155]">
        
           <a href="/" className="hover:text-[#1D4ED8]">
            Home
          </a>
          <a href="/about" className="hover:text-[#1D4ED8]">
            About
          </a>
          <a href="/contact" className="hover:text-[#1D4ED8]">
            Contact
          </a>
          <a href="#services" className="hover:text-[#1D4ED8]">
            Services
          </a>
          <a href="/portfolio" className="hover:text-[#1D4ED8]">
            Portfolio
          </a>
           <a href="/qoute" className="hover:text-[#1D4ED8]">
            Quote
          </a>
          
           
           <a href="/blog" className="hover:text-[#1D4ED8]">
            Blogs
          </a>
        </div>
      )}
    </nav>
  );
}