"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide web development, UI/UX design, WordPress development, and custom digital solutions tailored for modern businesses."
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on project size and complexity. Basic websites start from affordable packages, while advanced systems are custom quoted."
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes, we offer revisions to ensure the final product matches your expectations and business goals."
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We specialize in redesigning outdated websites into modern, fast, and conversion-focused digital experiences."
  },
  {
    question: "How can I request a quote?",
    answer:
      "Simply contact us or submit your project details through the quote form, and we’ll respond within 24 hours."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-28 bg-white text-[#0F172A]" id="faq">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-14 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Frequently Asked <span className="text-[#1D4ED8]">Questions</span>
        </h2>

        <p className="text-[#64748B] mt-4 max-w-2xl mx-auto">
          Everything you need to know about our services, pricing, and process.
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto px-6 space-y-4">

        {faqData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border border-[#E2E8F0] rounded-2xl bg-white shadow-sm hover:shadow-md transition overflow-hidden"
          >

            {/* Question */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className="text-lg font-semibold text-[#0F172A]">
                {item.question}
              </h3>

              <span className="text-[#1D4ED8] text-2xl font-bold">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-[#64748B] leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        ))}
      </div>
    </section>
  );
}