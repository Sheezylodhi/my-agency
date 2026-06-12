"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, EyeOff, Database, Bell, UserCheck } from "lucide-react";

const sections = [
  {
    title: "Data Collection",
    icon: <Database className="text-blue-600" size={24} />,
    content: "We collect essential information such as your name, email address, and project requirements to provide tailored digital solutions. We ensure that no unnecessary data is ever tracked or stored."
  },
  {
    title: "Security Protocols",
    icon: <Lock className="text-blue-600" size={24} />,
    content: "Our systems utilize industry-standard SSL encryption and secure cloud architecture. This ensures that your project files and personal details remain protected and inaccessible to unauthorized parties."
  },
  {
    title: "Third-Party Privacy",
    icon: <EyeOff className="text-blue-600" size={24} />,
    content: "We maintain a strict 'No-Sell' policy. Your data is never shared with third-party marketers. We only integrate with trusted, globally compliant tools, such as Stripe, to facilitate secure payments."
  },
  {
    title: "User Consent",
    icon: <UserCheck className="text-blue-600" size={24} />,
    content: "By initiating a project or using our contact forms, you agree to our data handling practices. You retain the right to request access to your data or its complete deletion at any stage of our collaboration."
  }
];

export default function Privacy() {
  return (
    <section className="py-32 bg-[#FCFDFF] text-[#0F172A] px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100"
          >
            <ShieldCheck size={16} /> Secure & Transparent
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-slate-500 font-medium">
            Last Updated: April 2026 • Version 2.1
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-blue-900/5 hover:border-blue-200 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Disclosure Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-10 rounded-[40px] bg-slate-900 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Bell className="text-blue-400" /> Important Updates
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                We periodically update our privacy policy to ensure full compliance with evolving digital laws, including GDPR and CCPA. In the event of any significant changes, we notify our active clients directly via email.
              </p>
              <p>
                We treat your data as a commitment to trust, not just information. If you have any questions regarding the security of your data or our practices, please feel free to reach out to us at any time.
              </p>
            </div>
          </div>
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
        </motion.div>

        {/* Contact Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-medium">
            Have questions? <a href="mailto:webmashlabs21@gmail.com" className="text-blue-600 font-bold hover:underline">Contact our support team</a>
          </p>
        </div>

      </div>
    </section>
  );
}