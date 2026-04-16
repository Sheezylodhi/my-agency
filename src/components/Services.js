"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Web Development",
    desc: "High-performance Next.js websites with SEO, speed & scalability.",
    features: ["SEO Optimized", "Fast Loading", "Responsive Design"],
    link: "/services/web-development",
    accent: "#1D4ED8",
  },
  {
    title: "WordPress",
    desc: "Custom WordPress solutions with modern UI & flexibility.",
    features: ["Elementor", "Custom Theme", "Easy CMS"],
    link: "/services/wordpress",
    accent: "#0F172A",
  },
  {
    title: "UI/UX Design",
    desc: "Figma designs focused on user experience & conversions.",
    features: ["Wireframes", "Prototypes", "Modern UI"],
    link: "/services/ui-ux-design",
    accent: "#1D4ED8",
  },
  {
    title: "Graphic Design",
    desc: "Modern branding, logos & visuals that make your brand stand out.",
    features: ["Logo Design", "Brand Identity", "Social Media Posts"],
   link: "/services/graphic-design",
    accent: "#0F172A",
  },
];

export default function Services() {
  const router = useRouter();

  return (
    <section
      id="services"
      className="relative py-32 px-6 bg-white text-[#0F172A] overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.08),transparent_60%)]"></div>

      <div className="relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          Our <span className="text-[#1D4ED8]">Services</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.03}
                transitionSpeed={1200}
              >
                <div
                  onClick={() => router.push(service.link)}
                  className="group relative cursor-pointer p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >

                  {/* INNER GLOW BORDER */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
                    style={{
                      background: `radial-gradient(circle at top left, ${service.accent}22, transparent 60%)`,
                    }}
                  />

                  {/* TOP ACCENT LINE */}
                  <div
                    className="absolute top-0 left-0 w-full h-[3px] rounded-t-2xl"
                    style={{ background: service.accent }}
                  />

                  {/* CONTENT */}
                  <div className="relative z-10">

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2 text-[#0F172A]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#64748B] mb-5 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f, index) => (
                        <li
                          key={index}
                          className="text-sm text-[#475569] flex items-center gap-2"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: service.accent }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA (subtle, no noise) */}
                    <div
                      className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ color: service.accent }}
                    >
                      View Details <span>→</span>
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