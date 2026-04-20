"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, link: "#", color: "hover:bg-blue-600" },
    { icon: <FaInstagram />, link: "#", color: "hover:bg-pink-600" },
    { icon: <FaTwitter />, link: "#", color: "hover:bg-sky-500" },
    { icon: <FaLinkedinIn />, link: "#", color: "hover:bg-blue-700" },
    { icon: <FaGithub />, link: "#", color: "hover:bg-slate-800" },
  ];

  return (
    <footer className="relative bg-[#020617] text-white pt-24 overflow-hidden">
      
      {/* 1. Floating CTA Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[40px] p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-900/20"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Ready to build something <br/> extraordinary?</h2>
              <p className="text-blue-100 text-lg opacity-90">Let's turn your vision into a high-performance reality.</p>
            </div>
            <Link href="/quote" className="group bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-blue-50 transition-all active:scale-95">
              Start a Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </motion.div>
      </div>

      {/* Main Footer Grid - Adjusted gap and alignment */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 items-start">
        
        {/* Brand Info - Reduced spacing */}
        <div className="flex flex-col items-start space-y-4">
          <Link href="/" className="inline-block -my-22 "> {/* Negative margin to align logo edge with text */}
           <div className="relative h-60 w-500"> {/* Container height fixed to 40px (h-10) */}
              <Image
                src="/webmashlogo1.png"
                alt="Webmash Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <p className="text-slate-400 leading-relaxed font-medium text-sm max-w-[280px]">
            We are a boutique digital agency focused on high-end web experiences, 
            scalable UI systems, and brand-first design.
          </p>
          <div className="flex gap-2 pt-2">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.link}
                className={`w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} hover:text-white hover:-translate-y-1`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation - Solutions */}
        <div className="lg:pl-8">
          <h4 className="text-sm font-black mb-6 text-white uppercase tracking-widest">Solutions</h4>
          <ul className="space-y-3 text-slate-400 font-semibold text-sm">
            {["Custom Web Apps", "E-Commerce", "UI/UX Strategy", "Brand Identity", "SEO Mastery"].map((item) => (
              <li key={item} className="hover:text-blue-500 transition-colors cursor-pointer flex items-center group">
                <span className="w-0 group-hover:w-3 transition-all duration-300 h-[1.5px] bg-blue-500 mr-0 group-hover:mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
       <div>
  <h4 className="text-sm font-black mb-6 text-white uppercase tracking-widest">Quick Links</h4>
  <ul className="space-y-3 text-slate-400 font-semibold text-sm">
    {[
      { name: "Our Work", slug: "/portfolio" },
      { name: "About Us", slug: "/about" },
      { name: "Pricing Plans", slug: "/#prices" },
      { name: "Privacy Policy", slug: "/privacy" },
      { name: "Terms of Service", slug: "/terms" },
    ].map((item) => (
      <li key={item.name}>
        <Link href={item.slug} className="hover:text-blue-500 transition-colors">
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-sm font-black mb-6 text-white uppercase tracking-widest">Get in Touch</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                <Mail size={16} />
              </div>
              <span className="text-slate-400 text-sm font-bold group-hover:text-white transition truncate">hello@webmashlabs.com</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                <Phone size={16} />
              </div>
              <span className="text-slate-400 text-sm font-bold group-hover:text-white transition">+92 300 0000000</span>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                <MapPin size={16} />
              </div>
              <span className="text-slate-400 text-sm font-bold group-hover:text-white transition">Karachi, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="mt-20 border-t border-slate-900/50 py-10 bg-[#01040f]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4 text-slate-500 text-xs font-bold tracking-wider">
          <p>© {currentYear} WEBMASH LABS. All rights reserved.</p>
        
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </footer>
  );
}