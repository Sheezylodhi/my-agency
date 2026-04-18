"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, fast and scalable websites using Next.js, optimized for SEO and performance.",
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    description:
      "Custom WordPress websites with Elementor, WooCommerce and full CMS control.",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Clean, modern and conversion-focused UI designs using Figma and design systems.",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Professional branding, logos, and marketing visuals for strong brand identity.",
  },
];

const highlights = [
  "Fast Delivery & Clean Execution",
  "Modern & Conversion-Focused Design",
  "Scalable Development Architecture",
  "Client Satisfaction Priority",
  "SEO & Performance Optimized Work",
  "Long-Term Support & Maintenance",
];

export default function About() {
  return (
    <section className="bg-white text-[#0F172A] overflow-hidden">

      {/* HERO */}
      <div className="relative py-28 px-6 text-center bg-gradient-to-b from-white via-blue-50/40 to-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          About Our Agency
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed"
        >
          We are a modern digital agency focused on building high-performance
          websites, scalable web applications, and powerful brand identities.
          Our goal is simple — turn your ideas into real, converting digital products.
        </motion.p>
      </div>

      {/* STORY SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            We specialize in building modern digital solutions for businesses
            and startups. From web development to UI/UX design and branding,
            we focus on performance, clean design, and real business impact.
            <br /><br />
            Every project is built with attention to detail, scalability, and
            user experience — not just visuals, but real results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-3xl h-80 shadow-2xl"
        />
      </div>

      {/* SERVICES */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <Link key={i} href={`/services/${item.id}`}>
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-xl transition bg-white"
              >
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-6 bg-white rounded-2xl shadow-sm border text-center"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MISSION */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        <div>
          <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To help businesses grow by delivering high-quality digital solutions
            that are fast, scalable, and conversion-focused.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To become a leading digital agency known for creativity, performance,
            and client satisfaction across the globe.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="py-20 text-center bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Powerful
        </h2>

        <p className="text-gray-600 mb-8">
          Start your project with a modern digital agency today.
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