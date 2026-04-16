"use client";

import Link from "next/link";
import Image from "next/image";
import Scene from "@/components/Scene"; 
import { useParams } from "next/navigation";// 👈 apna Scene import
import { CheckCircle } from "lucide-react";

const servicesData = {
  "web-development": {
    title: "Web Development",
    image: "/services/web.jpg",
    desc: "High-performance websites built for speed, SEO, and scalability.",
    content: `
We create modern, scalable, and high-performing websites using Next.js and latest technologies.

Our approach focuses on:
• Lightning-fast performance
• SEO-first architecture
• Clean & maintainable code
• Conversion-focused UI

From business websites to SaaS platforms — we build digital products that actually grow your business.
    `,
    features: [
      "Next.js Development",
      "SEO Optimized Structure",
      "Responsive Design",
      "High Performance",
      "Modern UI/UX",
      "Scalable Architecture",
    ],
  },

  "wordpress": {
    title: "WordPress Development",
    image: "/services/wp.jpg",
    desc: "Flexible and powerful WordPress solutions tailored to your needs.",
    content: `
We build fully customized WordPress websites with modern UI and powerful backend control.

Perfect for:
• Business websites
• Blogs & content platforms
• eCommerce stores

You get complete control with a smooth and easy CMS experience.
    `,
    features: [
      "Custom Themes",
      "Elementor Design",
      "Speed Optimization",
      "Easy CMS Control",
      "Plugin Integration",
    ],
  },

  "ui-ux-design": {
    title: "UI/UX Design",
    image: "/services/uiux.jpg",
    desc: "Clean, modern and conversion-focused design systems.",
    content: `
We design interfaces that are not just beautiful — but functional and conversion-driven.

Our process:
• Research & Strategy
• Wireframing
• Prototyping
• Final UI Design

Every pixel is designed to improve user experience and engagement.
    `,
    features: [
      "Figma Design",
      "Wireframes",
      "Prototypes",
      "Design Systems",
      "User Experience Optimization",
    ],
  },

  "graphic-design": {
    title: "Graphic Design",
    image: "/services/graphic.jpg",
    desc: "Creative visuals and branding that make you stand out.",
    content: `
We craft strong visual identities that leave a lasting impression.

Our services include:
• Logo Design
• Branding Kits
• Social Media Graphics

Your brand will look modern, clean, and professional everywhere.
    `,
    features: [
      "Logo Design",
      "Brand Identity",
      "Social Media Design",
      "Creative Assets",
      "Marketing Visuals",
    ],
  },
};

export default function ServiceDetail() {
  const params = useParams(); // ✅ correct
  const service = servicesData[params.slug]; // ✅ direct use

  if (!service) {
    return (
      <div className="py-40 text-center text-[#64748B]">
        Service not found
      </div>
    );
  }

  return (
    <section className="relative py-28 px-6 bg-white text-[#0F172A] overflow-hidden">

      {/* 3D BACKGROUND */}
    <div className="absolute inset-0 z-0">
            <Scene />
          </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <Link href="/#services" className="text-[#1D4ED8] mb-8 inline-block hover:underline">
          ← Back to Services
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>

            <p className="text-[#64748B] text-lg mb-6">
              {service.desc}
            </p>

            <div className="text-[#475569] whitespace-pre-line leading-relaxed">
              {service.content}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-2xl -z-10"></div>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
  {service.features.map((f, i) => (
    <div
      key={i}
      className="group relative p-6 rounded-2xl border border-[#E2E8F0] bg-white shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* animated glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D4ED8]/0 via-[#1D4ED8]/5 to-[#1D4ED8]/0 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative flex items-center gap-3">
        <div className="p-2 rounded-full bg-[#1D4ED8]/10 group-hover:bg-[#1D4ED8]/20 transition">
          <CheckCircle className="w-4 h-4 text-[#1D4ED8]" />
        </div>

        <span className="text-[#334155] font-medium text-sm">
          {f}
        </span>
      </div>
    </div>
  ))}
</div>

        <div className="bg-[#0F172A] text-white p-12 rounded-2xl text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Ready to build something amazing?
          </h2>

          <p className="text-gray-300 mb-6">
            Let’s turn your idea into a powerful digital experience.
          </p>

          <Link
            href="/quote"
            className="px-8 py-3 bg-[#1D4ED8] rounded-lg hover:bg-blue-700 transition"
          >
            Get a Quote →
          </Link>
        </div>

      </div>
    </section>
  );
}