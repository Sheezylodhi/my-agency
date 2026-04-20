"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, Eye, Rocket, Zap, Shield, Heart } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "80+" },
  { label: "Years Experience", value: "5+" },
  { label: "Success Rate", value: "99%" },
];

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: <Zap className="text-blue-500" />,
    description: "Modern, fast and scalable websites using Next.js, optimized for SEO and performance.",
  },
  {
    id: "wordpress",
    title: "WordPress Mastery",
    icon: <Shield className="text-blue-500" />,
    description: "Custom WordPress websites with Elementor, WooCommerce and full CMS control.",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: <Rocket className="text-blue-500" />,
    description: "Clean, modern and conversion-focused UI designs using Figma and design systems.",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: <Heart className="text-blue-500" />,
    description: "Professional branding, logos, and marketing visuals for strong brand identity.",
  },
];

export default function About() {
  return (
    <section className="bg-[#FCFDFF] text-[#0F172A] overflow-hidden">
      
      {/* 1. HERO SECTION - Premium Split Layout */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              Our Agency Story
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8">
              We design the <span className="text-blue-600 italic">Future</span> of Digital.
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-10">
              We are a collective of designers and developers dedicated to crafting high-performance 
              web experiences. We don't just build websites; we build digital assets that grow your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="px-8 py-4 bg-[#0F172A] text-white rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center gap-2 shadow-xl">
                View Our Work <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full" />
            <div className="relative grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-8 bg-white rounded-[32px] shadow-2xl shadow-blue-900/5 border border-slate-50 flex flex-col items-center text-center">
                  <h3 className="text-4xl font-black text-blue-600 mb-2">{stat.value}</h3>
                  <p className="text-slate-500 font-bold text-sm uppercase tracking-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. SERVICES SECTION - Modern Cards */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">What We Excel At</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-blue-900/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-black text-xl mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. MISSION & VISION - Glassmorphism Side-by-Side */}
      <div className="bg-[#0F172A] py-28 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Target className="text-blue-500 mb-6" size={40} />
            <h3 className="text-3xl font-black mb-4 text-white">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To empower entrepreneurs by providing access to world-class design and engineering. 
              We aim to bridge the gap between complex technology and user-friendly interfaces.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Eye className="text-blue-500 mb-6" size={40} />
            <h3 className="text-3xl font-black mb-4 text-white">Our Vision</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To be the most trusted digital partner globally, recognized for our ability 
              to transform businesses through rapid innovation and impeccable design quality.
            </p>
          </motion.div>

        </div>
      </div>

      {/* 4. WHY US - Checklist Pro */}
      <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Why Smart Founders <br/><span className="text-blue-600">Choose Webmash.</span></h2>
          <p className="text-slate-500 text-lg mb-10 font-medium">
            We don't just write code; we solve problems. Our process is designed for 
            speed, transparency, and high-quality outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Fast Delivery & Execution",
              "Clean Scalable Code",
              "SEO Optimized Architecture",
              "24/7 Priority Support",
              "Conversion Focused UI",
              "Modern Tech Stack"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 shrink-0" size={24} />
                <span className="font-bold text-slate-800">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 h-[500px] w-full bg-slate-100 rounded-[50px] overflow-hidden relative group">
           <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-all duration-500" />
           {/* Add a professional agency photo here */}
           <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold italic">
             [Professional Team/Office Image]
           </div>
        </div>
      </div>

      {/* 5. FINAL CTA */}
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-[50px] p-12 md:p-20 text-white shadow-2xl shadow-blue-900/30">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Start Your Transformation.</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Ready to build a digital presence that actually works? Let's discuss 
            your project goals today.
          </p>
          <Link href="/quote" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-700 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all active:scale-95 shadow-xl">
            Request a Free Quote <ArrowRight size={24} />
          </Link>
        </div>
      </div>

    </section>
  );
}