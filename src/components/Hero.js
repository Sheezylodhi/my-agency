"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Scene from "./Scene";

export default function Hero() {
  return (
    <section className="h-screen w-full relative bg-white text-[#0F172A] overflow-hidden">

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Soft Blue Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D4ED8]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <p className="text-[10px] md:text-xs text-[#1D4ED8] mb-5 tracking-[0.2em] uppercase font-bold bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            Design • Develop • Dominate
          </p>

          {/* Heading - Size reduced to text-4xl/text-6xl */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.2] text-[#0F172A]">
  Building High-Performance <br />
  <span className="text-[#1D4ED8] block mt-2 text-xl sm:text-2xl md:text-4xl font-bold">
    <Typewriter
      options={{
        strings: [
          "Websites",
          "UI/UX Designs",
          "Full-Stack Apps",
          "WordPress Solutions",
          "Graphic Design"
        ],
        autoStart: true,
        loop: true,
        delay: 60,
        deleteSpeed: 40,
      }}
    />
  </span>
</h1>

          <p className="mt-6 text-[#64748B] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Take your brand online with high-performance websites, stunning designs, and powerful digital solutions.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/quote"
              className="px-8 py-3.5 bg-[#0F172A] hover:bg-[#1D4ED8] transition-all rounded-xl text-white font-semibold shadow-lg hover:-translate-y-0.5 active:scale-95 text-sm"
            >
              Get Free Quote
            </a>

            <a
              href="/portfolio"
              className="px-8 py-3.5 border border-[#E2E8F0] text-[#0F172A] hover:[#1D4ED8] transition-all rounded-xl font-semibold active:scale-95 text-sm"
            >
              Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}