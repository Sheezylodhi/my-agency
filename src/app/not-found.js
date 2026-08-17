import React from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#05070B] text-white selection:bg-[#2563EB] selection:text-white flex flex-col justify-between relative overflow-hidden pt-24 lg:pt-32">
      {/* Background Architectural Grid & Subtle Blue Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2563EB]/10 blur-[140px] rounded-full pointer-events-none" aria-hidden="true" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center my-auto">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-mono tracking-widest uppercase mb-8">
          <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
          <span>ERROR / PAGE NOT FOUND</span>
        </div>

        <div className="text-7xl sm:text-9xl font-extrabold tracking-tighter text-white mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent select-none" aria-hidden="true">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
          Page Not Found
        </h1>

        <p className="text-base sm:text-lg text-[#737373] font-light max-w-lg mb-12 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm rounded-lg transition-all duration-300 group shadow-lg shadow-[#2563EB]/25 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 font-medium text-sm rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="text-xs font-mono tracking-widest uppercase text-[#737373] hover:text-white transition-colors inline-flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded px-1 py-0.5"
          >
            <Compass className="w-3.5 h-3.5 text-[#2563EB]" aria-hidden="true" />
            <span>Need assistance? Contact Us</span>
          </Link>
        </div>

      </div>

      {/* Bottom Navigation Bar */}
      <footer className="relative z-10 border-t border-white/10 py-6 bg-[#05070B]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between gap-6 text-xs text-[#737373] font-mono uppercase tracking-widest">
          <nav className="flex items-center gap-6" aria-label="Not Found Recovery">
            <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white rounded">
              Home
            </Link>
            <Link href="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white rounded">
              Services
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white rounded">
              Contact
            </Link>
          </nav>
          <p>© 2026 WebMash Labs</p>
        </div>
      </footer>
    </main>
  );
}