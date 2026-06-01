"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { Check, ArrowRight, Star, Layout, Globe, Zap, Palette, ChevronLeft, ChevronRight } from "lucide-react";

const pricingData = {
 web: {
  icon: <Globe size={18} />,
  color: "from-blue-600 to-cyan-500",
  plans: [
    {
      title: "Landing Page Lite",
      price: "$60",
      range: "$60 - $100",
      desc: "Perfect for quick launches.",
      features: ["1 Page", "Contact Form", "Basic SEO", "Mobile Optimized"],
      popular: false,
    },
    {
      title: "Portfolio Pro",
      price: "$150",
      range: "$150 - $250",
      desc: "For creatives and freelancers.",
      features: ["3 Pages", "Gallery/Blog", "Animations", "Speed Optimization", "Newsletter"],
      popular: false,
    },
    {
      title: "Business Growth",
      price: "$350",
      range: "$350 - $600",
      desc: "Everything for a serious business.",
      features: ["5-8 Pages", "CMS Integration", "SEO Suite", "Performance Boost", "Analytics"],
      popular: false,
    },
    {
      title: "E-Commerce Start",
      price: "$600",
      range: "$600 - $1000",
      desc: "Launch your online shop.",
      features: ["Store Setup", "Payment Gateway", "Product Mgmt", "Security Kit", "SSL"],
      popular: false,
    },
    {
      title: "Full-Stack Scale",
      price: "$1200",
      range: "$1200 - $2500",
      desc: "For complex web applications.",
      features: ["Next.js / Node.js", "Custom Admin Panel", "Auth System", "DB Integration", "Priority Support"],
      popular: false,
    },
  ],
},
  wordpress: {
    icon: <Layout size={18} />,
    color: "from-slate-800 to-slate-900",
    plans: [
      { title: "WP Starter", price: "$50", range: "$50 - $90", desc: "Basic site for small brands.", features: ["Theme Install", "Contact Forms", "Security"], popular: false },
      { title: "E-Com Power", price: "$250", range: "$250 - $500", desc: "Professional online store.", features: ["WooCommerce", "Payment Gateway", "Inventory"], popular: false },
      { title: "WP Enterprise", price: "$600", range: "$600 - $1200", desc: "Complex membership sites.", features: ["Custom Theme", "API Integration", "Performance"], popular: false },
    ],
  },
  figma: {
    icon: <Zap size={18} />,
    color: "from-purple-600 to-pink-500",
    plans: [
      { title: "UI Essence", price: "$40", range: "$40 - $80", desc: "Quick wireframes.", features: ["Wireframe", "User Flow"], popular: false },
      { title: "Pro Prototype", price: "$150", range: "$150 - $300", desc: "Modern High-Fi UI.", features: ["Screens", "Clickable Prototype"], popular: false },
      { title: "SaaS Ecosystem", price: "$400", range: "$400 - $800", desc: "Complete app design.", features: ["Design System", "UX Research"], popular: false },
    ],
  },
  graphic: {
    icon: <Palette size={18} />,
    color: "from-orange-500 to-red-600",
    plans: [
      { title: "Quick Identity", price: "$70", range: "$70 - $120", desc: "Modern logo basics.", features: ["2 Logo Concepts", "Color Palette"], popular: false },
      { title: "Social Growth", price: "$250", range: "$250 - $450", desc: "Total social package.", features: ["10 Posts", "Ad Banners", "Vector Files"], popular: false },
      { title: "Brand Authority", price: "$500", range: "$500 - $1000", desc: "Full corporate kit.", features: ["Style Guide", "Stationery", "Print Assets"], popular: false },
    ],
  },
};

export default function Pricing() {
  const [active, setActive] = useState("web");
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="prices" className="py-20 px-4 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900">Investing in <span className="text-blue-600">Growth.</span></h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16 px-2">
          <div className="bg-white p-1.5 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 flex gap-1 overflow-x-auto">
            {Object.keys(pricingData).map((key) => (
              <button key={key} onClick={() => setActive(key)} className={`relative px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 ${active === key ? "text-white" : "text-slate-500"}`}>
                {active === key && <motion.div layoutId="activeTab" className={`absolute inset-0 bg-gradient-to-r ${pricingData[key].color} rounded-xl`} />}
                <span className="relative z-10">{pricingData[key].icon}</span>
                <span className="relative z-10 capitalize">{key === 'graphic' ? 'Design' : key}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards Container with Navigation */}
        <div className="relative group max-w-5xl mx-auto">
          {/* Left Arrow */}
          <button onClick={() => scroll("left")} className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg border border-slate-100 hover:bg-blue-600 hover:text-white hidden md:block">
            <ChevronLeft size={24} />
          </button>

          <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 no-scrollbar">
            <AnimatePresence mode="wait">
              {pricingData[active].plans.map((plan, i) => (
                <motion.div key={`${active}-${i}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative flex-shrink-0 w-[280px] md:w-[320px] snap-center p-1 bg-white rounded-[32px] border border-slate-100 shadow-xl">
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest z-10 shadow-lg">MOST POPULAR</div>
                  )}
                  <div className="p-6 h-full flex flex-col bg-white rounded-[31px]">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{plan.title}</h3>
                    <p className="text-slate-500 text-[11px] font-bold mb-6">{plan.desc}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-black">{plan.price}</span>
                      <p className="text-[10px] text-blue-600 font-bold uppercase italic">Est: {plan.range}</p>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[12px] font-bold text-slate-700">
                          <Check size={14} className="text-blue-600" /> {feat}
                        </li>
                      ))}
                    </ul>
                    <Link href="/qoute" className="w-full">
                      <button className={`w-full py-3 rounded-xl font-bold ${plan.popular ? "bg-blue-600 text-white" : "bg-slate-900 text-white"}`}>
                        Start Project <ArrowRight size={16} className="inline ml-2" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button onClick={() => scroll("right")} className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg border border-slate-100 hover:bg-blue-600 hover:text-white hidden md:block">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}