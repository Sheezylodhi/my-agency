"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-28 px-6 bg-white text-[#0F172A]">

      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Contact <span className="text-[#1D4ED8]">Us</span>
        </h1>

        <p className="text-center text-[#64748B] mb-10">
          Have a question or idea? Let’s talk.
        </p>

        {/* Form */}
        <div className="space-y-5">

          <input
            name="name"
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-[#E2E8F0] p-4 rounded-xl focus:outline-none focus:border-[#1D4ED8]"
          />

          <input
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border border-[#E2E8F0] p-4 rounded-xl focus:outline-none focus:border-[#1D4ED8]"
          />

          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Your Message..."
            rows={5}
            className="w-full border border-[#E2E8F0] p-4 rounded-xl"
          />

          <button className="w-full py-4 rounded-xl bg-[#0F172A] text-white font-medium hover:bg-[#1D4ED8] transition shadow-lg">
            Send Message →
          </button>

        </div>
      </div>
    </section>
  );
}