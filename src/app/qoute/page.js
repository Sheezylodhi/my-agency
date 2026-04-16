"use client";

import { useState } from "react";

export default function Quote() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <section className="py-28 px-6 bg-white text-[#0F172A]">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get a <span className="text-[#1D4ED8]">Custom Quote</span>
        </h1>

        <p className="text-center text-[#64748B] mb-10">
          Tell us about your project and get a response within 24 hours.
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

          <select
            name="service"
            onChange={handleChange}
            className="w-full border border-[#E2E8F0] p-4 rounded-xl"
          >
            <option>Select Service</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>WordPress</option>
            <option>Graphic Design</option>
          </select>

          {/* Budget + Timeline */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="budget"
              onChange={handleChange}
              placeholder="Budget (e.g. $200 - $500)"
              className="border border-[#E2E8F0] p-4 rounded-xl"
            />

            <input
              name="timeline"
              onChange={handleChange}
              placeholder="Timeline (e.g. 1 week)"
              className="border border-[#E2E8F0] p-4 rounded-xl"
            />
          </div>

          {/* File Upload */}
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full border border-[#E2E8F0] p-3 rounded-xl bg-white"
          />

          <textarea
            name="message"
            onChange={handleChange}
            placeholder="Project Details..."
            rows={5}
            className="w-full border border-[#E2E8F0] p-4 rounded-xl"
          />

          <button className="w-full py-4 rounded-xl bg-[#0F172A] text-white font-medium hover:bg-[#1D4ED8] transition shadow-lg">
            Get Quote →
          </button>

        </div>
      </div>
    </section>
  );
}