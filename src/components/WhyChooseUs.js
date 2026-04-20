"use client";

import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Search, Users, Zap, Code2 } from "lucide-react";

const data = [
  {
    title: "Fast & Reliable Delivery",
    desc: "We don't just meet deadlines; we crush them. Our agile workflow ensures high-performance delivery without cutting corners.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Modern UI/UX Design",
    desc: "Design that speaks. We create high-converting, aesthetic interfaces that align perfectly with your brand's core identity.",
    icon: <Rocket className="w-6 h-6" />,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "SEO Optimized Structure",
    desc: "Visibility is everything. Every line of code is written with SEO in mind to ensure your brand ranks where it belongs: at the top.",
    icon: <Search className="w-6 h-6" />,
    color: "from-blue-700 to-indigo-600",
  },
  {
    title: "Full-Stack Expertise",
    desc: "From complex database architecture to smooth frontend animations, we handle the entire tech stack with surgical precision.",
    icon: <Code2 className="w-6 h-6" />,
    color: "from-slate-800 to-slate-900",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-6 bg-[#FCFDFF] relative overflow-hidden">
      
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block"
            >
              The Agency Advantage
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              Why Brands Trust <br />
              <span className="text-blue-600">Our Digital Craft.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#64748B] text-lg max-w-sm mb-2 font-medium"
          >
            We combine technical excellence with business strategy to deliver results that matter.
          </motion.p>
        </div>

        {/* Pro Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-[40px] bg-white border border-gray-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden flex flex-col justify-between">
                
                {/* Floating Icon Box */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-lg group-hover:rotate-6 transition-transform duration-500`}>
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#0F172A] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-8 font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Progress-like decorative line */}
                <div className="relative h-1 w-full bg-gray-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20`}
                  />
                  <div className={`h-full w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r ${item.color}`} />
                </div>

                {/* Card Numbering (Subtle) */}
                <span className="absolute top-8 right-8 text-5xl font-black text-gray-50 group-hover:text-blue-50 transition-colors pointer-events-none">
                  0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">
            Precision • Quality • Results
          </p>
        </motion.div>
      </div>
    </section>
  );
}