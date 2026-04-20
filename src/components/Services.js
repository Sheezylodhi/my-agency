"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useRouter } from "next/navigation";
import { Globe, Layout, Palette, PenTool, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    desc: "Scale-ready Next.js solutions with robust Node.js backends and API integrations.",
    icon: <Globe className="w-6 h-6" />,
    features: ["Performance Optimized", "Server-Side Rendering", "Custom API Logic"],
    link: "/services/web-development",
    accent: "#1D4ED8",
  },
  {
    title: "WordPress Excellence",
    desc: "Enterprise-grade WordPress sites with custom themes and headless CMS capabilities.",
    icon: <Layout className="w-6 h-6" />,
    features: ["High-Speed Core", "Custom Plugin Logic", "SEO Managed"],
    link: "/services/wordpress",
    accent: "#0F172A",
  },
  {
    title: "Product UI/UX Design",
    desc: "Data-driven Figma prototypes focused on user psychology and conversion funnels.",
    icon: <Palette className="w-6 h-6" />,
    features: ["User Journey Mapping", "High-Fidelity Wireframes", "Design Systems"],
    link: "/services/ui-ux-design",
    accent: "#1D4ED8",
  },
  {
    title: "Identity & Branding",
    desc: "Strategic graphic design that positions your brand as a leader in its industry.",
    icon: <PenTool className="w-6 h-6" />,
    features: ["Vector Logo Design", "Visual Guidelines", "Marketing Assets"],
    link: "/services/graphic-design",
    accent: "#0F172A",
  },
];

export default function Services() {
  const router = useRouter();

  return (
    <section id="services" className="relative py-32 px-6 bg-[#fbfcfd] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs bg-blue-50 px-4 py-2 rounded-full"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mt-6 text-[#0F172A]"
          >
            Digital Solutions, <br />
            <span className="text-blue-600">Engineered for Success.</span>
          </motion.h2>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            We don't just build websites; we create digital assets that drive 
            growth, engagement, and measurable results for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                perspective={1000}
                className="h-full"
              >
                <div
                  onClick={() => router.push(service.link)}
                  className="group relative h-full p-8 rounded-[32px] bg-white border border-gray-100 shadow-xl shadow-blue-900/5 hover:border-blue-200 transition-all duration-500 cursor-pointer flex flex-col justify-between"
                >
                  {/* Hover Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[32px]"
                    style={{ background: `radial-gradient(circle at 10% 10%, ${service.accent}08, transparent 50%)` }}
                  />

                  <div>
                    {/* Icon Box */}
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-blue-900/5"
                      style={{ background: service.accent, color: 'white' }}
                    >
                      {service.icon}
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-xl font-bold mb-4 text-[#0F172A] group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 font-medium">
                      {service.desc}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-3">
                      {service.features.map((f, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600 font-semibold">
                          <CheckCircle2 size={16} className="text-blue-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Button */}
                  <div className="mt-10 pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#0F172A]">Learn More</span>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#0F172A] group-hover:text-white border border-gray-100"
                    >
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}