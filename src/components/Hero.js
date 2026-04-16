"use client";

import { motion } from "framer-motion";
import Scene from "./Scene";

export default function Hero() {
  return (
    <section className="h-screen w-full relative bg-bg text-text overflow-hidden">

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >

          {/* Badge */}
          <p className="text-sm text-[#1D4ED8] mb-4 tracking-widest uppercase font-medium">
            Digital Agency • Web Development • UI/UX
          </p>

          {/* Heading */}
         <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#0F172A]">
  We Build{" "}
  <span className="text-[#1D4ED8]">Modern Digital Experiences</span>
</h1>

<p className="mt-6 text-[#334155] text-lg leading-relaxed max-w-2xl mx-auto">
  We design and develop high-performance websites, 3D interfaces, and
  modern UI systems that help your business stand out and convert better.
</p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4 justify-center">

           <a
  href="/qoute"
  className="px-7 py-3 bg-[#0F172A] hover:bg-[#1E293B] transition rounded-xl text-white font-medium shadow-lg"
>
  Get Free Quote
</a>

<a
  href="/portfolio"
  className="px-7 py-3 border border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition rounded-xl"
>
  View Our Work
</a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}