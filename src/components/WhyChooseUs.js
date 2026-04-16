"use client";

import { motion } from "framer-motion";

const data = [
  {
    title: "Fast & Reliable Delivery",
    desc: "We deliver high-quality work on time without compromising performance or design standards.",
  },
  {
    title: "Modern UI/UX Design",
    desc: "Clean, modern and conversion-focused designs built for real business growth.",
  },
  {
    title: "SEO Optimized Structure",
    desc: "Every project is built with SEO best practices to improve visibility and ranking.",
  },
  {
    title: "Client-Focused Approach",
    desc: "We prioritize communication, satisfaction, and long-term client relationships.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 px-6 bg-white text-[#0F172A]">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Why Choose <span className="text-[#1D4ED8]">Us</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 70, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: i * 0.12,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative p-10 bg-white border border-[#E2E8F0] rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
          >
            {/* soft glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8]/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition" />

            {/* top accent line */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[#1D4ED8] rounded-t-3xl" />

            <div className="relative z-10">

              <h3 className="text-2xl font-semibold mb-4 text-[#0F172A]">
                {item.title}
              </h3>

              <p className="text-[#64748B] leading-relaxed text-base">
                {item.desc}
              </p>

              {/* subtle highlight dot */}
              <div className="mt-6 w-10 h-[2px] bg-[#1D4ED8] group-hover:w-16 transition-all duration-500" />

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}