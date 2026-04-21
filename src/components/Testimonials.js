"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Robert J. Smith",
    role: "Ocean Shore Store Owner",
    feedback: "The quality is top-notch! My logos look crisp on every product. Highly recommended for any serious business.",
    rating: 5,
  },
  {
    name: "David Smith",
    role: "Apparel Brand Owner",
    feedback: "Working with Zaib was seamless. The results exceeded expectations, especially the speed of the Next.js site.",
    rating: 5,
  },
  {
    name: "Emma",
    role: "Textile CEO Texas",
    feedback: "Innovative approach and constant support. They are now our go-to partner for all digital design needs.",
    rating: 4.5,
  },
  {
    name: "Alex Miller",
    role: "Startup Owner",
    feedback: "Impressive quality and delivery speed. Their conversion-focused UI design helped us double our sales.",
    rating: 5,
  },
  {
    name: "Jason Reed",
    role: "MotorSport Team Owner",
    feedback: "Best quality I’ve seen so far. My brand looks extremely professional and ready for the global market.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "E-com Strategist",
    feedback: "The WordPress customization was flawless. Extremely easy to manage and very fast loading times.",
    rating: 5,
  },
];

// Marquee Row Component
const TestimonialRow = ({ items, direction = -1, speed = 20 }) => {
  return (
    <div className="flex overflow-hidden group">
      <motion.div
        initial={{ x: direction === -1 ? 0 : "-50%" }}
        animate={{ x: direction === -1 ? "-50%" : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex flex-nowrap gap-6 py-4"
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="w-[350px] md:w-[450px] flex-shrink-0 bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 group-hover:pause"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4 items-center">
               
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{item.name}</h4>
                  <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
              <Quote className="text-slate-100 group-hover:text-blue-50 transition-colors" size={32} />
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  fill={i < Math.floor(item.rating) ? "#1D4ED8" : "transparent"} 
                  className={i < Math.floor(item.rating) ? "text-blue-600" : "text-slate-200"}
                />
              ))}
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              "{item.feedback}"
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  // Hum 2 rows banayenge taake density zyada lage
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <section className="py-32 bg-[#FCFDFF] overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs"
        >
          Social Proof
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-slate-900 mt-6"
        >
          Real Stories from <br />
          <span className="text-blue-600">Global Clients.</span>
        </motion.h2>
      </div>

      {/* The Wall of Love (Marquee) */}
      <div className="relative">
        {/* Gradients to hide edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FCFDFF] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FCFDFF] to-transparent z-10 pointer-events-none" />

        <div className="space-y-4">
          <TestimonialRow items={firstRow} direction={-1} speed={30} />
          <TestimonialRow items={secondRow} direction={1} speed={25} />
        </div>
      </div>

      {/* Trust Badges */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
      >
        <div className="text-xl font-black text-slate-900">UPWORK</div>
        <div className="text-xl font-black text-slate-900">FIVERR</div>
        <div className="text-xl font-black text-slate-900">FREELANCER</div>
        <div className="text-xl font-black text-slate-900">TRUSTPILOT</div>
      </motion.div>
    </section>
  );
}