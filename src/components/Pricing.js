"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* ===== FILTER DATA ===== */
const pricingData = {
  web: [
    {
      title: "LEFT CHEST / CAP",
      price: "10$ - 15$ ",
      sub: "No limit of stitch",
      note: "Depends on complexity",
      features: [
        "6 hours turnaround",
        "3 hours if rush",
        "EMB DST PDF Jpeg File",
        "Other Formats (On request)",
        "Small edit free",
        "Discount on bulk order",
      ],
    },
    {
      title: "JACKET BACK",
      price: "20$ - 25$",
      sub: "",
      note: "Depends on complexity",
      features: [
        "6 hours turnaround",
        "4 hours if rush",
        "EMB DST PDF Jpeg File",
        "Other Formats (On request)",
        "Small edit free",
        "Discount on bulk order",
      ],
    },
  ],

  figma: [
    {
      title: "VECTOR GRAPHICS",
      price: "15$ - 150$",
      sub: "",
      note: "Depends on complexity",
      features: [
        "24 hours turnaround",
        "12 hours if rush",
        "All Formats (On request)",
        "Small edit free",
        "Discount on bulk orders",
      ],
    },
  ],

  graphic: [
    {
      title: "CUSTOM PATCHES",
      price: "Vary By Quantity",
      sub: "Min Order: 30 Pcs",
      note: "(Negotiable)",
      features: [
        "8 - 10 days turnaround",
        "Other Formats (On request)",
        "Discount on bulk order",
      ],
      popular: true,
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
                    <span className="mr-2 text-[#1D4ED8]">✔</span>
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