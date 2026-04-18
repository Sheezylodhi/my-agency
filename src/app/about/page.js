"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Scene from "@/components/Scene";
import TiltCard from "@/components/TiltCard";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "High-performance websites built with Next.js, focused on speed, SEO and scalability.",
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    description:
      "Custom CMS websites with Elementor, WooCommerce and full control dashboard.",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Modern UI systems designed in Figma with conversion-focused UX principles.",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Brand identity, logos and marketing visuals that make your business stand out.",
  },
];

const highlights = [
  "Fast Delivery & Clean Code",
  "Modern UI/UX Standards",
  "Scalable Architecture",
  "SEO Optimized Output",
  "Client Satisfaction Focus",
  "Long-Term Support",
];

export default function About() {
  return (
    <section className="bg-white text-[#0F172A] overflow-hidden">

      {/* HERO */}
      <div className="relative py-28 px-6 text-center bg-gradient-to-b from-white via-blue-50/40 to-white">

        <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-blue-200/30 blur-[130px] rounded-full" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          About Our Agency
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed"
        >
          We build modern digital products that are fast, scalable and conversion focused.
          Our goal is simple — turn ideas into powerful online experiences.
        </motion.p>
      </div>

      {/* STORY */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We are a digital agency focused on building high-quality websites,
            web applications and brand identities.
            <br /><br />
            Every project is built with attention to performance, design quality
            and real business results — not just visuals.
          </p>
        </motion.div>

        {/* 3D TILT CARD */}
        <TiltCard>
          <div className="relative p-10 rounded-3xl bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden">

            {/* glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 blur-3xl rounded-full" />

            <h3 className="text-xl font-semibold mb-3">
              Digital Studio
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              We combine design + development + strategy to deliver modern digital solutions
              that help brands grow online.
            </p>

            <div className="mt-6 text-sm font-medium text-blue-600">
              Fast • Clean • Scalable • Modern
            </div>
          </div>
        </TiltCard>
      </div>

      {/* SERVICES */}
      <div className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-center mb-14">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((item, i) => (
            <Link key={i} href={`/services/${item.id}`}>

              <TiltCard>
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition relative overflow-hidden">

                  {/* soft glow */}
                  <div className="absolute inset-0 bg-blue-50 opacity-0 hover:opacity-100 transition" />

                  <div className="relative">
                    <h3 className="font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>

                </div>
              </TiltCard>

            </Link>
          ))}

        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-gray-50 py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-14">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {highlights.map((item, i) => (
              <TiltCard key={i}>
                <div className="p-6 bg-white rounded-2xl border shadow-sm text-center hover:shadow-xl transition">
                  <p className="text-gray-700 font-medium">
                    {item}
                  </p>
                </div>
              </TiltCard>
            ))}

          </div>

        </div>

      </div>

      {/* MISSION */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">

        <TiltCard>
          <div className="p-8 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To help businesses grow with modern, fast and scalable digital solutions.
            </p>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="p-8 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become a leading digital agency known for innovation, performance and trust.
            </p>
          </div>
        </TiltCard>

      </div>

      {/* CTA */}
      <div className="py-24 text-center bg-gradient-to-b from-white to-blue-50">

        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Amazing
        </h2>

        <p className="text-gray-600 mb-8">
          Start your project with a modern digital team.
        </p>

        <Link
          href="/quote"
          className="px-8 py-4 bg-[#1D4ED8] text-white rounded-xl hover:bg-blue-700 transition"
        >
          Get Started
        </Link>

      </div>

    </section>
  );
}