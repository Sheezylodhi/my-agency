"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Layout, Layers, PenTool, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { 
    id: "Real-Time", // Added ID for routing
    title: "TeamSync - Real-Time Collaboration Platform", 
    category: "web", 
    desc: "A MERN stack application designed for dynamic team collaboration. It features real-time Kanban boards, instant messaging using WebSockets, and personalized dashboards for tracking project progress and team productivity.",
    image: "/web6.png",
    icon: <Globe size={20} />
  },
   { 
    id: "ZS Digitizing", // Added ID for routing
    title: "ZS Digitizing – End-to-End Enterprise Management System", 
    category: "web", 
    desc: "A comprehensive full-stack web application designed for an embroidery digitizing business. This project features a high-conversion landing page with responsive desktop and mobile views, a transparent tiered pricing system, and a dynamic portfolio with advanced filtering. Beyond the frontend, it includes a robust Admin Dashboard for operational overview (order and visitor tracking) and a dedicated Client Dashboard for seamless order monitoring and request management. Built with modern web technologies to ensure scalability, security, and a premium user experience.",
    image: "/web1.png",
    icon: <Globe size={20} />
  },
  { 
    id: "CraftHome",
    title: "CraftHome - Headless E-commerce Solution", 
    category: "web", 
    desc: "A high-performance headless e-commerce storefront built using Next.js for the frontend and Shopify API for backend. Focused on core Web Vitals, it delivers lightning-fast page loads, dynamic routing, and a secure checkout flow.",
    image: "/web5.png",
    icon: <Globe size={20} />
  },
  { 
    id: "CryptoPulse", // Added ID for routing
    title: "CryptoPulse - Real-Time Crypto Tracker", 
    category: "web", 
    desc: "A React.js application that integrates with live cryptocurrency APIs to display real-time market data, dynamic interactive price charts, and portfolio performance metrics. Built with a responsive design and optimized for fast data updates.",
    image: "/web4.png",
    icon: <Globe size={20} />
  },
  { 
    id: "AI-Write", // Added ID for routing
    title: "AI-Write - SaaS Content Generation Tool", 
    category: "web", 
    desc: "A modern SaaS application powered by Next.js and OpenAI API. This platform allows users to generate SEO-friendly blog posts, marketing copy, and social media captions using advanced AI, featuring a clean user interface and output customization.",
    image: "/web3.png",
    icon: <Globe size={20} />
  },
  { 
    id: "DevBlog", // Added ID for routing
    title: "DevBlog - Dynamic Content Platform", 
    category: "web", 
    desc: "A full stack blog application utilizing Next.js for Server-Side Rendering (SSR) and a headless CMS (like Strapi) for content management. It features dynamic routing, SEO optimization, and a responsive reading experience.",
    image: "/web2.png",
    icon: <Globe size={20} />
  },
 
  { 
    id: "miller-associates",
    title: "Miller & Associates – Professional Law Firm Website", 
    category: "wordpress", 
    desc: "A high-authority WordPress site built for a law firm. Features integrated consultation forms, practice area modules, and a professional layout optimized for lead generation.",
    image: "/wordpress5.png",
    icon: <Layout size={20} />
  },
  { 
    id: "artisan-collective",
    title: "The Artisan Collective – Full WooCommerce Store", 
    category: "wordpress", 
    desc: "A high-performing e-commerce store built on WordPress and WooCommerce. Includes custom product grids, secure payment gateway integration, and automated inventory management.",
    image: "/wordpress4.png",
    icon: <Layout size={20} />
  },
  { 
    id: "wanderlust-diary",
    title: "Wanderlust Diary – SEO-Optimized Lifestyle Blog", 
    category: "wordpress", 
    desc: "A fast-loading, content-driven blog designed for travel enthusiasts. Features include social media auto-sync, ad-optimized layouts, and a clean reading experience for high user retention.",
    image: "/wordpress3.png",
    icon: <Layout size={20} />
  },
  { 
    id: "capture-moments",
    title: "Capture Moments – Minimalist Photography Portfolio", 
    category: "wordpress", 
    desc: "A visual-first WordPress portfolio designed to showcase high-resolution photography. Minimalist navigation ensures that the focus remains entirely on the artist's work.",
    image: "/wordpress2.png",
    icon: <Layout size={20} />
  },
  { 
    id: "digital-growth",
    title: "Digital Growth – High-Conversion Landing Page", 
    category: "wordpress", 
    desc: "A conversion-focused landing page built to sell digital products. Designed with psychological triggers and clear CTA sections to maximize download rates and sales.",
    image: "/wordpress1.png",
    icon: <Layout size={20} />
  },
  { 
    id: "sneaker-hub",
    title: "Sneaker Hub – E-commerce Mobile UI", 
    category: "figma", 
    desc: "A user-centric mobile app design focused on a seamless shopping experience. Features include intuitive product filtering, an interactive gallery, and a streamlined one-page checkout.",
    image: "/Figma5.png",
    icon: <Layers size={20} />
  },
  { 
    id: "datascale-analytics",
    title: "DataScale – SaaS Analytics Dashboard", 
    category: "figma", 
    desc: "A complex data visualization dashboard designed for SaaS platforms. Featuring a sleek dark-mode interface with interactive charts to help users track business KPIs effortlessly.",
    image: "/Figma4.png",
    icon: <Layers size={20} />
  },
  { 
    id: "foodie-express",
    title: "Foodie Express – Order Tracking & User Profile", 
    category: "figma", 
    desc: "A clean and functional UI for a food delivery service. Focused on user convenience, the design features easy navigation for order history, tracking, and personalized settings.",
    image: "/Figma3.png",
    icon: <Layers size={20} />
  },
  { 
    id: "quantum-studio",
    title: "Quantum Studio – Responsive Agency Web UI", 
    category: "figma", 
    desc: "A modern, grid-based web interface for a creative agency. The design is fully responsive, ensuring a consistent and premium brand experience across desktop, tablet, and mobile devices.",
    image: "/Figma2.png",
    icon: <Layers size={20} />
  },
  { 
    id: "payswift-fintech",
    title: "PaySwift – FinTech Digital Wallet Interface", 
    category: "figma", 
    desc: "A secure and minimalist UI for a digital banking app. Designed with a focus on trust and clarity, making money transfers and transaction monitoring simple for every user.",
    image: "/Figma1.png",
    icon: <Layers size={20} />
  },
  { 
    id: "aroma-blend",
    title: "Aroma Blend - Minimalist Brand Identity", 
    category: "graphic", 
    desc: "A comprehensive branding solution for a premium coffee shop. This project includes logo design, stationery, and a refined color palette, creating a cohesive and inviting brand image.",
    image: "/Graphic5.png",
    icon: <PenTool size={20} />
  },
  { 
    id: "earth-soul",
    title: "Earth & Soul – Organic Skincare Packaging", 
    category: "graphic", 
    desc: "Eco-conscious packaging design for a natural skincare line. Utilizing botanical motifs and earthy tones to emphasize the brand’s commitment to organic and sustainable products.",
    image: "/Graphic1.png",
    icon: <PenTool size={20} />
  },
  { 
    id: "futuretech-vector",
    title: "FutureTech – Conceptual Vector Illustration", 
    category: "graphic", 
    desc: "A modern digital illustration exploring themes of AI and connectivity. Designed for tech blogs and landing pages, it simplifies complex technological concepts into a visually stunning piece.",
    image: "/Graphic2.png",
    icon: <PenTool size={20} />
  },
  { 
    id: "azure-realty",
    title: "Azure Realty – Luxury Real Estate Brochure", 
    category: "graphic", 
    desc: "An elegant tri-fold brochure designed for high-end real estate marketing. The layout prioritizes high-resolution property visuals and sophisticated typography to appeal to premium buyers.",
    image: "/Graphic3.png",
    icon: <PenTool size={20} />
  },
  { 
    id: "fitpulse-campaign",
    title: "FitPulse – Dynamic Social Media Campaign", 
    category: "graphic", 
    desc: "A high-energy social media kit designed for a fitness app. Focused on increasing user engagement through bold typography, vibrant aesthetics, and clear call-to-action elements.",
    image: "/Graphic4.png",
    icon: <PenTool size={20} />
  },
];

const filters = [
  { id: "all", label: "All Works" },
  { id: "web", label: "Development" },
  { id: "wordpress", label: "WordPress" },
  { id: "figma", label: "Design Systems" },
  { id: "graphic", label: "Branding" },
];

export default function Portfolio() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" 
    ? projects 
    : projects.filter((p) => p.category === active);

  return (
    <section className="py-32 bg-[#f8fafc] text-[#0F172A]" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block"
            >
              Selected Portfolio
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-slate-900">
              Digital Works <br/>
              <span className="text-blue-600">Reimagined.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-3 bg-white p-2 rounded-[20px] shadow-sm border border-slate-100">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all duration-300 ${
                  active === f.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-transparent text-slate-500 hover:text-blue-600"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <Link key={item.id} href={`/portfolio/${item.id}`}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative h-[550px] flex flex-col rounded-[35px] overflow-hidden bg-white border border-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Container - Fixed 55% height */}
                  <div className="relative h-[55%] w-full bg-slate-50 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 to-transparent" />
                  </div>

                  {/* Content Section - Fixed 45% height with Flex justify-between */}
                  <div className="relative p-8 bg-white h-[45%] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-blue-600 mb-3">
                        {item.icon}
                        <span className="text-[10px] font-black uppercase tracking-widest">{item.category}</span>
                      </div>
                      
                      {/* Title limited to 2 lines to prevent overflow */}
                      <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      
                      {/* Description limited to 2 lines */}
                      <p className="text-slate-500 text-sm mt-3 line-clamp-2 font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Action Area - Always stuck to bottom because of justify-between */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                      <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        Full Case Study <ArrowRight size={14} />
                      </span>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                         <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <div className="mt-24 text-center">
          <Link 
            href="/quote" 
            className="group relative inline-flex items-center gap-4 px-14 py-6 bg-slate-900 text-white rounded-[24px] font-black text-xl hover:bg-blue-600 transition-all shadow-2xl"
          >
            Start Your Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}