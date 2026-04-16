"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 bg-white/5 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl mb-6">About Us</h2>
          <p className="text-gray-400">
            We are a creative digital agency focused on building modern,
            high-performing websites and brands. Our goal is to turn your ideas
            into powerful digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="h-80 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl"
        ></motion.div>

      </div>
    </section>
  );
}