"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* ===== FILTER DATA ===== */
const pricingData = {
  web: [
    {
      title: "Basic Business Website",
      price: "$120 - $200",
      sub: "Static / Landing Pages",
      note: "Best for startups & small businesses",
      features: [
        "Responsive Design",
        "SEO Optimized Structure",
        "Fast Loading Speed",
        "Up to 5 Pages",
        "Basic Animations",
        "1 Revision Included",
      ],
    },
    {
      title: "Advanced Web App",
      price: "$250 - $600",
      sub: "Dynamic / Full Stack",
      note: "For scalable business systems",
      features: [
        "Next.js Development",
        "API Integration",
        "Authentication System",
        "Admin Dashboard",
        "Database Integration",
        "Performance Optimization",
      ],
    },
  ],

  wordpress: [
    {
      title: "Starter WordPress Site",
      price: "$100 - $180",
      sub: "Business / Blog Website",
      note: "Easy CMS setup for beginners",
      features: [
        "Custom WordPress Theme",
        "Elementor Setup",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form Integration",
      ],
    },
    {
      title: "E-Commerce WordPress",
      price: "$250 - $500",
      sub: "WooCommerce Store",
      note: "Full online store solution",
      features: [
        "WooCommerce Setup",
        "Payment Gateway Integration",
        "Product Management System",
        "Cart & Checkout Flow",
        "Speed Optimization",
        "Security Setup",
      ],
    },
  ],

  figma: [
    {
      title: "UI/UX Design Basic",
      price: "$80 - $150",
      sub: "Wireframes & UI Screens",
      note: "Clean modern interface design",
      features: [
        "Wireframes",
        "Figma UI Design",
        "User Flow Design",
        "Mobile + Desktop Screens",
        "Prototype Preview",
      ],
    },
    {
      title: "Advanced UX System",
      price: "$200 - $400",
      sub: "Complete Design System",
      note: "For apps & SaaS platforms",
      features: [
        "Design System Creation",
        "High-Fidelity UI",
        "Interactive Prototypes",
        "UX Research",
        "Component Library",
        "Developer Handoff Files",
      ],
    },
  ],

  graphic: [
    {
      title: "Brand Identity Design",
      price: "$50 - $120",
      sub: "Logo + Basic Branding",
      note: "Perfect for new brands",
      features: [
        "Logo Design",
        "Color Palette",
        "Typography Setup",
        "Business Card Design",
        "Brand Guidelines",
      ],
    },
    {
      title: "Social Media Branding",
      price: "$80 - $180",
      sub: "Marketing Designs",
      note: "For online presence growth",
      features: [
        "Instagram Posts",
        "Facebook Banners",
        "Ad Creatives",
        "Post Templates",
        "Brand Consistency Kit",
      ],
    },
  ],
};

export default function Pricing() {
  const sliderRef = useRef(null);

  const [active, setActive] = useState("web");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = sliderRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = sliderRef.current;

    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [active]);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const amount = 320;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="prices" className="py-24 bg-white relative">

      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6">
            Pricing <span className="text-[#1D4ED8]">Plans</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Choose category based pricing packages
          </p>
        </motion.div>

        {/* ===== FILTER BUTTONS ===== */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {Object.keys(pricingData).map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                active === item
                  ? "bg-[#0F172A] text-white border-[#0F172A]"
                  : "bg-white text-[#0F172A] border-[#E2E8F0] hover:border-[#1D4ED8]"
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        {/* ===== ARROWS ===== */}
        <div className="flex justify-end gap-3 mb-6">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              ←
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              →
            </button>
          )}
        </div>

        {/* ===== SLIDER ===== */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
        >
          {pricingData[active].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative min-w-[280px] snap-center bg-white border rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition
                ${plan.popular ? "border-[#1D4ED8]" : "border-[#E2E8F0]"}`}
            >
              <h3 className="text-sm font-semibold text-[#0F172A] mb-4">
                {plan.title}
              </h3>

              <div className="text-4xl font-bold text-[#1D4ED8] mb-1">
                {plan.price}
              </div>

              {plan.sub && (
                <p className="text-sm text-gray-600">{plan.sub}</p>
              )}

              <p className="text-xs text-gray-500 mt-2 mb-6">
                {plan.note}
              </p>

              <ul className="space-y-3 text-sm text-gray-700 text-left mb-8">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-[#1D4ED8]">.</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="/quote"
                className="inline-block bg-[#0F172A] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#1D4ED8] transition"
              >
                ORDER NOW!
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}