"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className="border-b border-slate-800 pb-6 transition-colors"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex items-center justify-between text-left py-2 group focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-lg md:text-xl font-medium text-slate-200 group-hover:text-indigo-400 transition-colors flex items-center space-x-4">
                <span className="text-xs font-mono text-indigo-500">0{idx + 1}</span>
                <span>{faq.question}</span>
              </span>
              <span className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-transform duration-300 ${isOpen ? "rotate-180 bg-indigo-600/20 text-indigo-400 border-indigo-500/30" : ""}`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            <div 
              className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}