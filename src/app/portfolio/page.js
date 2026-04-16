"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Ecommerce Website", category: "web", desc: "Modern Shopify-style UI" },
  { title: "Agency Website", category: "web", desc: "High conversion landing page" },
  { title: "Figma UI Kit", category: "figma", desc: "Full design system" },
  { title: "Logo Design Pack", category: "graphic", desc: "Brand identity kit" },
  { title: "Dashboard UI", category: "uiux", desc: "Admin panel design" },
];

const filters = ["all", "web", "figma", "graphic", "uiux"];

export default function Portfolio() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="py-28 bg-white text-[#0F172A]">

      {/* Heading */}
      <div className="text-center mb-10 px-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-[#1D4ED8]">Portfolio</span>
        </h2>
        <p className="text-[#64748B] mt-3">
          Selected projects that showcase our expertise
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-3 mb-12 px-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-2 rounded-full border text-sm transition ${
              active === f
                ? "bg-[#0F172A] text-white border-[#0F172A]"
                : "border-[#E2E8F0] text-[#0F172A] hover:border-[#1D4ED8]"
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {filtered.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition bg-white"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-[#64748B]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}