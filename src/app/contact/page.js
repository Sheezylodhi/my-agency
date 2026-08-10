"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  Mail, 
  MapPin, 
  Clock 
} from "lucide-react";

// ==========================================
// FAQ DATA
// ==========================================
const FAQ_ITEMS = [
  {
    question: "How do you usually start a project?",
    answer: "Every project begins with a structured discovery phase where we audit your requirements, align on business goals, map technical architecture, and establish a clear timeline before writing any code."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. We collaborate remotely with founders, enterprises, and product teams across the globe, utilizing synchronous and asynchronous workflows designed for seamless cross-border delivery."
  },
  {
    question: "Can you work with an existing website or application?",
    answer: "Absolutely. We routinely perform technical audits, codebase refactoring, UI/UX redesigns, feature expansions, and performance optimizations on existing production applications."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer dedicated post-launch engineering retainers, performance monitoring, security updates, and continuous iterative development to ensure your digital product scales reliably."
  }
];

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "Web Application",
    budget: "$5,000 – $10,000",
    timeline: "2–3 Months",
    details: "",
    referralSource: "Google",
    newsletter: false
  });

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === "checkbox" ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.details) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Work Email, Project Details).");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit inquiry.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "Web Application",
        budget: "$5,000 – $10,000",
        timeline: "2–3 Months",
        details: "",
        referralSource: "Google",
        newsletter: false
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong while sending your inquiry. Please try again.");
    }
  };

  return (
    <main className="bg-[#FFFFFF] min-h-screen selection:bg-blue-600 selection:text-white text-[#0A0A0A] font-sans">
      
      {/* ========================================== */}
      {/* SECTION 1 — DARK HERO */}
      {/* ========================================== */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-[#05070B] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Eyebrow & Availability */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 bg-blue-600/15 border border-blue-500/30 px-3 py-1 rounded-full">
                START A PROJECT
              </span>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Currently accepting selected projects
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
              Let's build something that moves your business forward.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
              Tell us what you're building, what you're trying to solve, or where your current digital experience is falling short. We'll help you figure out the right way forward.
            </p>

            {/* Capabilities Summary */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-y-2 gap-x-6 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <span>&bull; Websites</span>
              <span>&bull; Web Applications</span>
              <span>&bull; Commerce</span>
              <span>&bull; Business Systems</span>
              <span>&bull; AI & Automation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2 — CONTACT / PROJECT FORM */}
      {/* ========================================== */}
      <section className="py-24 bg-[#F5F3EF] border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">
                  START A CONVERSATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
                  Tell us about your project.
                </h2>
                <p className="text-base text-[#525252] font-light leading-relaxed">
                  Whether you need a new digital product, a better website, an internal business system, or an automation workflow, give us a little context and we'll take it from there.
                </p>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white p-8 rounded-2xl border border-[#E5E2DC] shadow-sm space-y-6">
                <div className="border-b border-[#E5E2DC] pb-5">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-1">Email Direct</span>
                  <a href="mailto:hello@webmashlabs.com" className="text-lg font-semibold text-[#0A0A0A] hover:text-blue-600 transition-colors flex items-center justify-between">
                    hello@webmashlabs.com
                    <ArrowRight className="w-4 h-4 text-[#737373]"/>
                  </a>
                </div>

                <div className="border-b border-[#E5E2DC] pb-5">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-1">Location & Operations</span>
                  <p className="text-base font-medium text-[#0A0A0A]">Pakistan &middot; Working Worldwide</p>
                  <p className="text-xs text-[#525252] mt-0.5">Available for selected projects</p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-1">Response Time</span>
                  <p className="text-sm font-medium text-[#0A0A0A]">Typical response time: within 1 business day</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — FORM */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#E5E2DC] shadow-sm">
              
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8"/>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A]">Thank you — your project inquiry has been received.</h3>
                  <p className="text-base text-[#525252] max-w-md mx-auto leading-relaxed">
                    We'll review the details and get back to you within 1 business day.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setStatus("idle")}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0A0A0A] text-white text-sm font-medium hover:bg-[#262626] transition-colors cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {status === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0"/>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* 1 & 2: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2">
                        Full Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        disabled={status === "loading"}
                        className="w-full bg-[#F8F8F6] border border-[#E5E2DC] rounded-lg px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2">
                        Work Email <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        disabled={status === "loading"}
                        className="w-full bg-[#F8F8F6] border border-[#E5E2DC] rounded-lg px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* 3 & 4: Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2">
                        Company / Organization <span className="text-[#737373] font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        disabled={status === "loading"}
                        className="w-full bg-[#F8F8F6] border border-[#E5E2DC] rounded-lg px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2">
                        Phone Number <span className="text-[#737373] font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        disabled={status === "loading"}
                        className="w-full bg-[#F8F8F6] border border-[#E5E2DC] rounded-lg px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* 5: Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2">
                      Project Type <span className="text-blue-600">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full bg-[#F8F8F6] border border-[#E5E2DC] rounded-lg px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer"
                    >
                      <option value="Website">Website</option>
                      <option value="Web Application">Web Application</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Business System / ERP">Business System / ERP</option>
                      <option value="AI & Automation">AI & Automation</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* 6 & 7: Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2">
                        Budget Range <span className="text-[#737373] font-normal lowercase">(optional)</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full bg-[#F8F8F6] border border-[#E5E2DC] rounded-lg px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer"
                      >
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 – $3,000">$1,000 – $3,000</option>
                        <option value="$3,000 – $5,000">$3,000 – $5,000</option>
                        <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2">
                        Project Timeline <span className="text-[#737373] font-normal lowercase">(optional)</span>
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full bg-[#F8F8F6] border border-[#E5E2DC] rounded-lg px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer"
                      >
                        <option value="ASAP">ASAP</option>
                        <option value="1–2 Months">1–2 Months</option>
                        <option value="2–3 Months">2–3 Months</option>
                        <option value="3–6 Months">3–6 Months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* 8: Project Details */}
                  <div>
                    <label htmlFor="details" className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2">
                      Project Details <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={5}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell us about your goals, requirements, current challenges, or what you'd like to build..."
                      disabled={status === "loading"}
                      className="w-full bg-[#F8F8F6] border border-[#E5E2DC] rounded-lg p-4 text-sm text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* 9: Referral Source */}
                  <div>
                    <label htmlFor="referralSource" className="block text-xs font-mono uppercase tracking-wider text-[#0A0A0A] mb-2">
                      How did you hear about us? <span className="text-[#737373] font-normal lowercase">(optional)</span>
                    </label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full bg-[#F8F8F6] border border-[#E5E2DC] rounded-lg px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer"
                    >
                      <option value="Google">Google</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Direct Outreach">Direct Outreach</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* 10: Newsletter Checkbox */}
                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-4 h-4 rounded border-[#E5E2DC] text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <label htmlFor="newsletter" className="text-sm text-[#525252] cursor-pointer">
                      Keep me updated with occasional insights from WebMash Labs.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 group disabled:opacity-50 cursor-pointer"
                    >
                      {status === "loading" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Project Inquiry <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3 — WHAT WE CAN HELP WITH */}
      {/* ========================================== */}
      <section className="py-24 bg-[#0A0D12] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3">WHAT WE CAN BUILD</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              From the first idea to the final product.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              { num: "01", title: "Websites", desc: "High-performance marketing flagships, editorial experiences, and corporate web platforms." },
              { num: "02", title: "Digital Products", desc: "Scalable web applications and modern SaaS solutions built for high user engagement." },
              { num: "03", title: "Commerce Platforms", desc: "Custom, conversion-optimized retail engines and high-volume transaction architectures." },
              { num: "04", title: "Business Systems", desc: "Internal ERP tools, data dashboards, and operational software streamlining workflows." },
              { num: "05", title: "AI & Automation", desc: "LLM integrations, custom document parsing, and automated operational pipelines." },
              { num: "06", title: "Product Design", desc: "Sophisticated UI/UX systems, wireframing, and interactive prototyping in Figma." }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-blue-400 font-bold">{item.num}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"/>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 4 — DIRECT CONTACT */}
      {/* ========================================== */}
      <section className="py-24 bg-white border-b border-[#E5E2DC]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          
          <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">OR REACH OUT DIRECTLY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
            Prefer a direct conversation?
          </h2>
          <p className="text-base sm:text-lg text-[#525252] font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Have a specific question or want to discuss an opportunity before submitting a project inquiry? Reach out directly.
          </p>

          <div className="mb-6">
            <a 
              href="mailto:hello@webmashlabs.com" 
              className="text-2xl sm:text-3xl font-extrabold text-[#2563EB] hover:underline"
            >
              hello@webmashlabs.com
            </a>
          </div>

          <p className="text-xs font-mono text-[#737373] uppercase tracking-wider">
            Available worldwide &middot; Remote-first
          </p>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 5 — FINAL CTA */}
      {/* ========================================== */}
      <section className="py-28 bg-[#05070B] text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-4">LET'S CREATE VALUE</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Have something worth building?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Let's turn your idea, workflow or business challenge into something useful, scalable and built to last.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#project-form"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 group"
            >
              Start a Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
            </a>
            <Link 
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}