"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // Prevent default form submission behavior
    if (e) e.preventDefault();
    
    if (isLoading) return;
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setShowPopup(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-gray-50/50 min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-[#0e2c1c] text-sm font-bold mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D4ED8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1D4ED8]"></span>
            </span>
            Available for new projects
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4">
            Let’s <span className="text-[#1D4ED8]">Connect</span>
          </h1>
          <p className="text-[#0F172A] text-lg">
            Have a question or a brilliant idea? Drop us a message below.
          </p>
        </div>

        {/* Contact Form Card */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-10 rounded-[32px] border border-gray-200 shadow-2xl shadow-green-900/5 space-y-6 relative overflow-hidden"
        >
          {/* Decorative Blur */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-50/50 blur-3xl rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 ml-1">
                <User size={16} className="text-gray-400" /> Full Name
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full h-14 px-5 border border-gray-300 rounded-2xl outline-none focus:ring-4 focus:ring-[#0e2c1c]/5 focus:border-[#0e2c1c] transition-all bg-gray-50/30"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 ml-1">
                <Mail size={16} className="text-gray-400" /> Email Address
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full h-14 px-5 border border-gray-300 rounded-2xl outline-none focus:ring-4 focus:ring-[#0e2c1c]/5 focus:border-[#0e2c1c] transition-all bg-gray-50/30"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 ml-1">
              <MessageSquare size={16} className="text-gray-400" /> Your Message
            </label>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project or inquiry..."
              rows={5}
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl outline-none focus:ring-4 focus:ring-[#0e2c1c]/5 focus:border-[#0e2c1c] transition-all bg-gray-50/30 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-16 rounded-2xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-3
              ${isLoading 
                ? "bg-gray-400 cursor-not-allowed text-white" 
                : "bg-[#0F172A] cursor-poniter text-white hover:bg-[#1D4ED8] hover:-translate-y-0.5 active:scale-95 shadow-green-900/10"
              }`}
          >
            {isLoading ? (
              <div className=" cursor-pointer w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="bg-white rounded-[40px] p-10 w-full max-w-md text-center shadow-2xl relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#0F172A] to-[#1D4ED8] flex items-center justify-center shadow-xl shadow-green-100"
              >
                <CheckCircle2 size={48} className="text-white" />
              </motion.div>

              <h2 className="text-3xl font-bold text-[#0F172A] mb-3">Message Received!</h2>
              <p className="text-[#0F172A] mb-8 leading-relaxed">
                Thank you for reaching out. We've received your message and will respond as quickly as possible.
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-4 bg-[#0F172A] text-white cursor-pointer rounded-2xl font-bold hover:bg-[#1D4ED8] transition-all active:scale-95 shadow-lg shadow-green-900/10"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}