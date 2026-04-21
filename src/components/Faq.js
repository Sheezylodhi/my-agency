"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What specific technologies do you use?",
    answer: "We specialize in the T3 Stack (Next.js, TypeScript, Tailwind CSS) for web apps, and custom PHP/Elementor engines for WordPress. Our goal is always performance and scalability."
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard landing page takes 5-7 days, while complex full-stack applications or e-commerce stores usually range from 3-6 weeks depending on requirements."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. Every project includes 30 days of free technical support. We also offer monthly maintenance plans for security updates and performance monitoring."
  },
  {
    question: "Is SEO included in the development?",
    answer: "Yes, basic technical SEO (meta tags, semantic HTML, image optimization, and fast LCP scores) is integrated into every project we build from scratch."
  },
  {
    question: "How do we handle project payments?",
    answer: "We usually follow a 50/50 or 40/40/20 payment structure depending on the project size, ensuring milestones are met before final payments."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Pehla hamesha open rakhein pro feel ke liye

  return (
    <section className="py-32 bg-[#FCFDFF] overflow-hidden" id="faq">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Content - Sticky Header */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
                <HelpCircle size={14} /> Support Center
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-[1.1] mb-6">
                Got <span className="text-blue-600">Questions?</span> <br /> 
                We’ve Got Answers.
              </h2>
              <p className="text-slate-500 text-lg font-medium mb-10">
                Can't find what you're looking for? Reach out to our team for a personal consultation.
              </p>
              <Link href="/contact" className="w-full">
              <button className=" cursor-pointer px-8 py-4 bg-[#0F172A] text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
                Contact Support
              </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Accordions */}
          <div className="lg:w-2/3 space-y-4">
            {faqData.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group border-2 rounded-[24px] transition-all duration-300 ${
                    isOpen ? "border-blue-600 bg-white shadow-2xl shadow-blue-900/5" : "border-slate-100 bg-transparent hover:border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full cursor-pointer flex justify-between items-center p-6 md:p-8 text-left"
                  >
                    <span className={`text-lg md:text-xl font-bold transition-colors ${
                      isOpen ? "text-blue-600" : "text-[#0F172A]"
                    }`}>
                      {item.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                    }`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 text-slate-500 text-base md:text-lg font-medium leading-relaxed border-t border-slate-50 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}