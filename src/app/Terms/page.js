"use client";

import { motion } from "framer-motion";
import { FileText, Scale, Clock, RefreshCcw, AlertCircle, Terminal } from "lucide-react";

const terms = [
  {
    title: "1. Project Initiation",
    icon: <Terminal size={20} />,
    content: "All projects begin with an official discovery phase. Work starts only after the initial deposit is confirmed and the project brief is signed off by both parties."
  },
  {
    title: "2. Payment Milestones",
    icon: <Clock size={20} />,
    content: "We follow a milestone-based payment structure. Final source files and domain transfers are only executed once the full project balance is cleared."
  },
  {
    title: "3. Revisions & Changes",
    icon: <RefreshCcw size={20} />,
    content: "Standard packages include up to 3 rounds of revisions. Any structural changes requested after the development phase starts may incur additional costs."
  },
  {
    title: "4. Intellectual Property",
    icon: <Scale size={20} />,
    content: "Upon final payment, the client owns the full rights to the final designs and code. However, we reserve the right to showcase the work in our portfolio."
  },
  {
    title: "5. Termination Clause",
    icon: <AlertCircle size={20} />,
    content: "Either party can terminate the contract with a 7-day notice. In such cases, the client is billed only for the work completed up to that date."
  }
];

export default function Terms() {
  return (
    <section className="py-32 bg-white text-[#0F172A] px-6 selection:bg-blue-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header - Minimalist SaaS Style */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-blue-600 font-bold uppercase text-xs tracking-[0.3em] mb-4"
          >
            <FileText size={18} /> Legal Agreement
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
            Terms of <span className="text-blue-600">Service.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            Please read these terms carefully. They define our commitment to you and your 
            responsibilities as a client of our agency.
          </p>
        </div>

        {/* The Agreement Body */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-16">
          
          {/* Main Terms */}
          <div className="space-y-12">
            {terms.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-l-4 border-slate-100 hover:border-blue-600 pl-8 transition-all"
              >
                <div className="flex items-center gap-3 mb-4 text-slate-400 group-hover:text-blue-600 transition-colors">
                  {item.icon}
                  <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Side Info / FAQ Summary */}
          <div className="hidden lg:block">
            <div className="sticky top-32 p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-slate-400">Quick Summary</h4>
              <ul className="space-y-4">
                <li className="text-sm font-bold flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Ownership is yours
                </li>
                <li className="text-sm font-bold flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Milestone payments
                </li>
                <li className="text-sm font-bold flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> 3 Revision rounds
                </li>
                <li className="text-sm font-bold flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Secure transfers
                </li>
              </ul>
              <hr className="my-6 border-slate-200" />
              <p className="text-xs text-slate-400 leading-relaxed italic">
                Last updated: April 2026. By continuing to use our services, you agree to these terms.
              </p>
            </div>
          </div>

        </div>

        {/* Final Confirmation Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-slate-100 text-center"
        >
          <p className="text-slate-500 mb-6">Need a custom contract for your enterprise project?</p>
          <a 
            href="mailto:legal@youragency.com" 
            className="text-[#0F172A] font-black text-xl hover:text-blue-600 transition-colors underline decoration-blue-600 decoration-4 underline-offset-8"
          >
            Get in touch with our legal team
          </a>
        </motion.div>

      </div>
    </section>
  );
}