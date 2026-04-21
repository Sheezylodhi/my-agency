"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap, Star, Layout, PenTool, Globe, Palette } from "lucide-react";

const pricingData = {
  web: {
    icon: <Globe size={18} />,
    color: "from-blue-600 to-cyan-500",
    plans: [
      {
        title: "Starter Launch",
        price: "$120",
        range: "$120 - $200",
        desc: "Best for startups & landing pages.",
        features: ["5 Responsive Pages", "SEO Ready", "Fast Load Speed", "Basic Animations"],
        popular: false,
      },
      {
        title: "Full-Stack Scale",
        price: "$250",
        range: "$250 - $600",
        desc: "Dynamic apps with full backend.",
        features: ["Next.js & Node.js", "API Integration", "Admin Dashboard", "Auth System", "DB Integration"],
        popular: false,
      },
    ],
  },
  wordpress: {
    icon: <Layout size={18} />,
    color: "from-slate-800 to-slate-900",
    plans: [
      {
        title: "Standard CMS",
        price: "$100",
        range: "$100 - $180",
        desc: "Professional blog or business site.",
        features: ["Elementor Pro", "Custom Theme", "Basic SEO", "Mobile Responsive"],
        popular: false,
      },
      {
        title: "E-Com Power",
        price: "$250",
        range: "$250 - $500",
        desc: "Full-fledged online store.",
        features: ["WooCommerce Setup", "Payment Gateway", "Product Management", "Security Kit"],
        popular: false,
      },
    ],
  },
  figma: {
    icon: <Zap size={18} />,
    color: "from-purple-600 to-pink-500",
    plans: [
      {
        title: "UI Essence",
        price: "$80",
        range: "$80 - $150",
        desc: "Clean & modern UI screens.",
        features: ["Wireframing", "UI Design", "User Flow", "Prototype"],
        popular: false,
      },
      {
        title: "UX Ecosystem",
        price: "$200",
        range: "$200 - $400",
        desc: "Complete design systems for SaaS.",
        features: ["UX Research", "Design System", "Component Library", "Dev Handoff"],
        popular: false,
      },
    ],
  },
  graphic: {
    icon: <Palette size={18} />,
    color: "from-orange-500 to-red-600",
    plans: [
      {
        title: "Brand Identity",
        price: "$150",
        range: "$150 - $300",
        desc: "Complete visual branding kit.",
        features: ["Vector Logo Design", "Brand Guidelines", "Color Palette", "Stationery Mockups"],
        popular: false,
      },
      {
        title: "Marketing Assets",
        price: "$200",
        range: "$200 - $450",
        desc: "Everything you need for socials.",
        features: ["10 Social Posts", "Ad Creatives", "Banner Designs", "Vector Assets", "Print Ready Files"],
        popular: false,
      },
    ],
  },
};

export default function Pricing() {
  const [active, setActive] = useState("web");

  return (
    <section id="prices" className="py-32 px-4 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <motion.span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] bg-blue-50 px-4 py-2 rounded-full">
            Flexible Pricing
          </motion.span>
          <motion.h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 leading-tight">
            Investing in <span className="text-blue-600">Growth.</span>
          </motion.h2>
        </div>

        {/* --- FIXED: Filter Tabs with Horizontal Scroll & Fade --- */}
        <div className="relative mb-20 max-w-fit mx-auto overflow-hidden">
          <div className="flex overflow-x-auto no-scrollbar px-6 md:px-2">
            <div className="bg-white p-1.5 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 flex gap-1 whitespace-nowrap">
              {Object.keys(pricingData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`relative px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 shrink-0 ${
                    active === key ? "text-white" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {active === key && (
                    <motion.div 
                      layoutId="activeTab"
                      className={`absolute inset-0 bg-gradient-to-r ${pricingData[key].color} rounded-xl shadow-lg`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{pricingData[key].icon}</span>
                  <span className="relative z-10 capitalize">{key === 'graphic' ? 'Graphic Design' : key}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- FIXED: Most Popular Badge + Horizontal Scrollable Cards --- */}
        <div className="relative pt-6"> {/* Added pt-6 to prevent badge cutting */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-0 no-scrollbar pb-10 max-w-5xl mx-auto justify-start md:justify-center">
            <AnimatePresence mode="wait">
              {pricingData[active].plans.map((plan, i) => (
                <motion.div
                  key={`${active}-${i}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`relative flex-shrink-0 w-[85vw] md:w-[400px] snap-center p-1 bg-white rounded-[32px] border ${
                    plan.popular ? "border-blue-200 shadow-2xl shadow-blue-900/10" : "border-slate-100 shadow-xl"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-[9px] font-black tracking-[0.15em] flex items-center gap-1.5 z-[30] shadow-xl shadow-blue-600/20 whitespace-nowrap border border-blue-400">
                      <Star size={10} fill="currentColor" /> MOST POPULAR
                    </div>
                  )}

                  <div className="p-8 h-full flex flex-col bg-white rounded-[31px]">
                    <div className="mb-8">
                      <h3 className="text-xl font-black text-slate-900 mb-2">{plan.title}</h3>
                      <p className="text-slate-500 text-[11px] font-bold leading-relaxed">{plan.desc}</p>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                        <span className="text-slate-400 font-bold text-sm">/start</span>
                      </div>
                      <p className="text-[10px] font-bold text-blue-600 tracking-widest mt-2 uppercase italic">Est: {plan.range}</p>
                    </div>

                    <ul className="space-y-4 mb-10 flex-grow">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-[13px] font-bold text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                            <Check size={12} strokeWidth={4} />
                          </div>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <Link href="/quote" className="w-full">
  <button className={`w-full cursor-pointer py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
    plan.popular 
    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200" 
    : "bg-slate-900 text-white hover:bg-slate-800"
  }`}>
    Start Project <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
  </button>
</Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="md:hidden text-center text-slate-300 text-[10px] font-black uppercase tracking-widest mt-2 animate-pulse">
            ← Swipe for plans →
          </div>
        </div>

        <p className="text-center mt-12 text-slate-400 text-sm font-medium">
          Need a custom bundle? <Link href="/contact" className="w-full"><span className="text-blue-600 cursor-pointer hover:underline font-extrabold">Let's talk.</span></Link>
        </p>
      </div>

     
    </section>
  );
}