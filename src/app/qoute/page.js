"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle2 } from "lucide-react";

export default function Quote() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle file select
  const handleFiles = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles);
    setFiles((prev) => [...prev, ...fileArray]);
  };

  // Drag & Drop
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  // Remove file
  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    files.forEach((file) => data.append("files", file));

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        setShowPopup(true);
        setForm({
          name: "", email: "", service: "",
          budget: "", timeline: "", message: "",
        });
        setFiles([]);
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (err) {
      alert("Server error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-gray-50/50 min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4">
            Get a <span className="text-[#1D4ED8]">Custom Quote</span>
          </h1>
          <p className="text-[#0F172A] text-lg max-w-xl mx-auto">
            Ready to start your project? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-6 md:p-10 rounded-[32px] border border-gray-200 shadow-2xl shadow-green-900/5 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Your Name</label>
              <input name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className="w-full h-14 px-5 border border-gray-300 rounded-2xl outline-none focus:ring-4 focus:ring-[#0e2c1c]/5 focus:border-[#0e2c1c] transition-all bg-gray-50/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" className="w-full h-14 px-5 border border-gray-300 rounded-2xl outline-none focus:ring-4 focus:ring-[#0e2c1c]/5 focus:border-[#0e2c1c] transition-all bg-gray-50/50" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Service Required</label>
            <select name="service" required value={form.service} onChange={handleChange} className="w-full h-14 px-5 border border-gray-300 rounded-2xl outline-none focus:ring-4 focus:ring-[#0e2c1c]/5 focus:border-[#0e2c1c] transition-all bg-gray-50/50 appearance-none">
              <option value="">Select a service</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Wordpress</option>
              <option>Graphic Designer</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Budget ($)</label>
              <input name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. $50 - $100" className="w-full h-14 px-5 border border-gray-300 rounded-2xl outline-none focus:ring-4 focus:ring-[#0e2c1c]/5 focus:border-[#0e2c1c] transition-all bg-gray-50/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Timeline</label>
              <input name="timeline" value={form.timeline} onChange={handleChange} placeholder="e.g. 24 Hours" className="w-full h-14 px-5 border border-gray-300 rounded-2xl outline-none focus:ring-4 focus:ring-[#0e2c1c]/5 focus:border-[#0e2c1c] transition-all bg-gray-50/50" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Project Details</label>
            <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Describe your project requirements in detail..." rows={4} className="w-full px-5 py-4 border border-gray-300 rounded-2xl outline-none focus:ring-4 focus:ring-[#0e2c1c]/5 focus:border-[#0e2c1c] transition-all bg-gray-50/50 resize-none" />
          </div>

          {/* 🔥 Advanced Drag & Drop */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Reference Files</label>
            <div
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              className={`group border-2 border-dashed rounded-[24px] p-8 text-center transition-all duration-300
                ${dragActive ? "border-green-600 bg-green-50 scale-[0.99]" : "border-gray-200 bg-gray-50/30 hover:bg-gray-50 hover:border-[#0e2c1c]/30"}`}
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#0e2c1c]/5 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Upload size={20} className="text-[#0e2c1c]" />
                </div>
                <p className="text-gray-600 font-medium">Drag & drop files here</p>
                <p className="text-xs text-gray-400 mt-1 mb-4">Support PDF, JPG, PNG, AI, DST (Max 10MB)</p>
                
                <input type="file" multiple onChange={(e) => handleFiles(e.target.files)} className="hidden" id="fileUpload" />
                <label htmlFor="fileUpload" className="cursor-pointer px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-95">
                  Browse Files
                </label>
              </div>

              {/* File Preview Chips */}
              {files.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {files.map((file, index) => (
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }} 
                      animate={{ scale: 1, opacity: 1 }}
                      key={index} 
                      className="flex items-center gap-2 bg-[#0e2c1c] text-white px-3 py-1.5 rounded-full text-xs font-medium"
                    >
                      <span className="truncate max-w-[120px]">{file.name}</span>
                      <button type="button" onClick={() => removeFile(index)} className="hover:text-red-300 transition-colors">
                        <X size={14} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-16 rounded-[20px] font-bold text-lg transition-all shadow-lg shadow-green-900/10 flex items-center justify-center gap-3
              ${isLoading 
                ? "bg-gray-400 cursor-not-allowed text-white" 
                : "bg-[#0F172A] cursor-pointer text-white hover:bg-[#0F172A] hover:-translate-y-0.5 active:scale-95"
              }`}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Send Request →"
            )}
          </button>
        </form>
      </motion.div>

      {/* 🔥 SUCCESS POPUP */}
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
              className="bg-white rounded-[40px] p-10 w-full max-w-md text-center shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full" />
              
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#0F172A] to-[#1D4ED8] flex items-center justify-center shadow-xl shadow-[#0F172A]"
                >
                  <CheckCircle2 size={48} className="text-white" />
                </motion.div>

                <h2 className="text-3xl font-bold text-[#0F172A] mb-3">Quote Sent!</h2>
                <p className="text-[#0F172A] mb-8 leading-relaxed">
                  Thank you for your interest. Our experts are reviewing your details and will get back to you shortly via email.
                </p>

                <button
                  onClick={() => setShowPopup(false)}
                  className="w-full cursor-pointer  py-4 bg-[#0F172A] text-white rounded-2xl font-bold hover:bg-[#1D4ED8] transition-all active:scale-95 shadow-lg shadow-green-900/10"
                >
                  Got it, thanks!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}