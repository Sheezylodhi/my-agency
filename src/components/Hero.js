"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="h-screen w-full relative bg-white text-[#0F172A] overflow-hidden">

      {/* 3D ONLY DESKTOP */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-90">
          <Scene />
        </div>
      )}

      {/* MOBILE BACKGROUND */}
    {isMobile && (
  <div className="absolute inset-0 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
    {/* Soft fading blue glow at the bottom */}
    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-50 to-transparent" />
  </div>
)}

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D4ED8]/5 to-transparent pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >

          {/* BADGE */}
          <p className="text-[10px] md:text-xs text-[#1D4ED8] mb-5 tracking-[0.25em] uppercase font-bold bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            Design • Develop • Scale
          </p>

          {/* HEADING */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            We Build Websites That Don’t Just Look Good —
            <br />
            <span className="text-[#1D4ED8]">
              They Bring You Clients
            </span>
          </h1>

          {/* TYPEWRITER */}
          <div className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[#334155]">
            <Typewriter
              options={{
                strings: [
                  "High-Converting Websites",
                  "Modern SaaS Products",
                  "Custom Web Apps"
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-[#64748B] text-base md:text-lg max-w-xl mx-auto">
            We help startups and businesses turn ideas into fast, modern, and conversion-focused digital products.
          </p>

          {/* TRUST LINE */}
          <p className="mt-3 text-xs text-gray-400">
            ⭐ Trusted by startups & small businesses
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">

            <a
              href="/quote"
              className="px-8 py-3.5 bg-[#0F172A] hover:bg-[#1D4ED8] transition-all rounded-xl text-white font-semibold shadow-lg hover:-translate-y-0.5 active:scale-95 text-sm"
            >
              Get Free Strategy Call
            </a>

            <a
              href="/portfolio"
              className="px-8 py-3.5 border border-[#E2E8F0] hover:border-[#1D4ED8] text-[#0F172A] hover:text-[#1D4ED8] transition-all rounded-xl font-semibold active:scale-95 text-sm"
            >
              View Case Studies
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
}