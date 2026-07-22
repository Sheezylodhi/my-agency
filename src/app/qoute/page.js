"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle2, ArrowRight, Zap, Shield, Clock, Check } from "lucide-react";

export default function Quote() {
  const [form, setForm] = useState({
    name: "", email: "", service: "",
    budget: "", timeline: "", message: "",
  });

  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFiles = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles);
    setFiles((prev) => [...prev, ...fileArray]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    files.forEach((file) => formData.append("files", file));

    try {
      // Yahan apni API endpoint/backend URL lagayein (e.g., fetch('/api/contact', { method: 'POST', body: formData }))
      const response = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      // Agar aapka backend successfully response de ya simulation karni ho:
      // const result = await response.json();

      // Simulated network request (Agar backend abhi setup nahi hai toh yeh chalega, API connect hone par response check laga sakte hain)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setShowPopup(true);
      setForm({ name: "", email: "", service: "", budget: "", timeline: "", message: "" });
      setFiles([]);
    } catch (err) {
      console.error("API Error:", err);
      alert("Server error or connection failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = "w-full h-14 px-5 border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-300 transition-all bg-white text-gray-900 placeholder:text-gray-400 shadow-inner";
  const labelClass = "text-sm font-semibold text-gray-800 ml-1 block mb-2";

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50/50 min-h-screen flex items-center justify-center selection:bg-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl w-full bg-white rounded-[40px] border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row overflow-hidden"
      >
        {/* LEFT SIDE PANEL */}
        <div className="w-full lg:w-[42%] bg-[#0F172A] p-8 md:p-12 lg:p-14 flex flex-col justify-between text-white relative overflow-hidden shrink-0">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap size={14} /> Enterprise-Grade Quality
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
              Let's turn your vision into <span className="text-blue-500">reality.</span>
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Submit your project details and experience seamless collaboration, swift delivery, and unmatched execution.
            </p>
          </div>

          <div className="space-y-5 relative z-10 my-8">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Clock size={18} className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">24-Hour Quick Turnaround</h4>
                <p className="text-xs text-gray-400 mt-0.5">Our project coordinators review requests instantly.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Shield size={18} className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Secure & Confidential</h4>
                <p className="text-xs text-gray-400 mt-0.5">Your files and ideas are completely protected with NDA.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={18} className="text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Dedicated Team</h4>
                <p className="text-xs text-gray-400 mt-0.5">Direct access to skilled developers & designers.</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-5 border-t border-gray-800/80">
            <p className="text-[11px] text-gray-500 font-medium uppercase tracking-widest mb-1.5">Trusted Worldwide</p>
            <p className="text-xs text-gray-300 italic">"The process was smooth, transparent, and delivered ahead of schedule."</p>
          </div>

          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full lg:w-[58%] p-6 md:p-12 xl:p-14 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-2">
              Request a <span className="text-[#1D4ED8]">Custom Quote</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Your Name</label>
                <input name="name" required value={form.name} onChange={handleChange} placeholder="e.g. Alex Johnson" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email Address</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="e.g. alex@email.com" className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Service Required</label>
              <select name="service" required value={form.service} onChange={handleChange} className={`${inputClass} appearance-none bg-white`} style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1.25rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.25rem'}}>
                <option value="">Select a service...</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Wordpress</option>
                <option>Graphic Design</option>
                <option>Digital Marketing</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Budget Estimate ($)</label>
                <input name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. $1,000 - $5,000" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Project Timeline</label>
                <input name="timeline" value={form.timeline} onChange={handleChange} placeholder="e.g. 4 Weeks" className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Project Description & Details</label>
              <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Tell us about your project goals, features needed, etc..." rows={3} className={`${inputClass} py-3.5 resize-none h-auto`} />
            </div>

            {/* File Upload Area */}
            <div>
              <label className={labelClass}>Upload Reference Files (Optional)</label>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                className={`group border-2 border-dashed rounded-[20px] p-5 text-center transition-all duration-300 ${dragActive ? "border-blue-500 bg-blue-50/50 scale-[0.98]" : "border-gray-200 bg-white hover:border-blue-200 hover:bg-gray-50"}`}
              >
                <div className="flex flex-col items-center pointer-events-none">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2.5 transition-colors ${dragActive ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-blue-50'}`}>
                    <Upload size={22} className={`transition-colors ${dragActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-500'}`} />
                  </div>
                  <p className="text-gray-800 font-semibold text-xs">Drag & drop reference files</p>
                  <p className="text-[11px] text-gray-400 mt-1 mb-3">Supports PDF, DOCX, JPG, PNG, AI (Max 10MB)</p>
                  
                  <input type="file" multiple onChange={(e) => handleFiles(e.target.files)} className="hidden" id="fileUpload" />
                  <label htmlFor="fileUpload" className="pointer-events-auto cursor-pointer px-4 py-2 bg-gray-900 text-white rounded-xl text-xs font-semibold shadow-sm hover:bg-blue-600 transition-all active:scale-95">
                    Browse Files
                  </label>
                </div>

                {files.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-100 w-full">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {files.map((file, index) => (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          key={index}
                          className="flex items-center gap-2 bg-blue-50 text-blue-800 pl-3 pr-2 py-1 rounded-full text-xs font-medium border border-blue-100"
                        >
                          <span className="truncate max-w-[140px]">{file.name}</span>
                          <button type="button" onClick={() => removeFile(index)} className="p-0.5 rounded-full hover:bg-blue-100 text-blue-600 hover:text-blue-900 transition-colors">
                            <X size={12} />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              type="submit"
              disabled={isLoading}
              className={`w-full h-15 rounded-[18px] font-bold text-base transition-all shadow-lg flex items-center justify-center gap-3 mt-4
                ${isLoading
                  ? "bg-gray-300 cursor-not-allowed text-gray-600"
                  : "bg-[#0F172A] text-white hover:bg-blue-600 shadow-blue-900/10"
                }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing Request...
                </>
              ) : (
                <>
                  Send Quote Request
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-[36px] p-10 w-full max-w-lg text-center shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="w-28 h-28 mx-auto mb-8 rounded-full bg-blue-50 flex items-center justify-center border-4 border-blue-100"
                >
                  <CheckCircle2 size={60} className="text-blue-600" strokeWidth={2.5} />
                </motion.div>

                <h2 className="text-4xl font-extrabold text-[#0F172A] mb-4">Request Received!</h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                  Thank you for reaching out. Our team will carefully review your request and get in touch with you via email shortly.
                </p>

                <button
                  onClick={() => setShowPopup(false)}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all active:scale-[0.98] shadow-lg shadow-blue-500/30"
                >
                  Close & Return to Site
                </button>
              </div>

              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-50 rounded-full opacity-50" />
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-gray-100 rounded-full opacity-50" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}