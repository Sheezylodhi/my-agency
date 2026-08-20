"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1];

const navigationLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const serviceLinks = [
  { name: "Custom Websites", href: "#services" },
  { name: "Web Applications", href: "#services" },
  { name: "UI/UX Design", href: "#services" },
  { name: "SEO & Optimization", href: "#services" },
  { name: "Maintenance", href: "#services" },
];

const contactLinks = [
  { name: "hello@webmashlabs.com", href: "mailto:hello@webmashlabs.com" },
  { name: "LinkedIn", href: "https://linkedin.com", external: true },
  { name: "Instagram", href: "https://instagram.com", external: true },
  { name: "Behance", href: "https://behance.net", external: true },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="relative w-full bg-[#02040A] pt-28 pb-14 text-white overflow-hidden border-t border-white/15 selection:bg-blue-600 selection:text-white font-['Manrope',sans-serif]"
      aria-labelledby="footer-heading"
    >
      {/* SUBTLE BLUE GLOW */}
      <div
        className="pointer-events-none absolute top-20 left-10 h-[400px] w-[500px] rounded-full blur-[140px] opacity-[0.08] bg-blue-600"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        <h2 id="footer-heading" className="sr-only">
          WebMash Labs Footer
        </h2>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 pb-24 border-b border-white/15">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="lg:col-span-7 flex flex-col justify-between items-start"
          >
            <div className="w-full">

              {/* AVAILABILITY STATUS */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 font-mono text-[11px] tracking-[0.25em] text-slate-200 uppercase mb-8 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                    aria-hidden="true"
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
                    aria-hidden="true"
                  />
                </span>

                Available for Select Projects — Q3 / Q4
              </div>

              {/* LOGO */}
              <div className="relative h-[100px] sm:h-[100px] w-auto max-w-[240px] mb-8">
                <Image
                  src="/WMLogo.png"
                  alt="WebMash Labs Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  sizes="(max-width: 640px) 200px, 240px"
                />
              </div>

              {/* EDITORIAL STATEMENT */}
              <p className="mt-8 max-w-[38ch] text-lg sm:text-xl font-normal leading-relaxed text-slate-300 tracking-[-0.01em]">
                We build digital experiences that help ambitious businesses
                become impossible to ignore.
              </p>
            </div>

            {/* COPYRIGHT */}
            <div className="mt-16 font-mono text-xs text-slate-400 tracking-wider">
              <span>
                © {new Date().getFullYear()} WebMash Labs. All rights reserved.
              </span>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-10 pt-2 lg:pt-4"
          >

            {/* NAVIGATION */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-slate-300 uppercase mb-6">
                Navigation
              </p>

              <ul className="space-y-3.5">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-slate-300 uppercase mb-6">
                Services
              </p>

              <ul className="space-y-3.5">
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="group inline-flex items-center text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                        {service.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-[11px] tracking-[0.25em] text-slate-300 uppercase mb-6">
                Connect
              </p>

              <ul className="space-y-3.5">
                {contactLinks.map((contact, index) => (
                  <li key={index}>
                    <a
                      href={contact.href}
                      target={contact.external ? "_blank" : undefined}
                      rel={
                        contact.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group inline-flex items-center gap-1 text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors duration-300 break-all sm:break-normal"
                    >
                      <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                        {contact.name}
                      </span>

                      {contact.external && (
                        <ArrowUpRight
                          className="h-3.5 w-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          <div className="space-y-1">
            <p className="text-sm sm:text-base font-medium text-slate-300">
              Made with precision in Pakistan. Building for businesses
              worldwide.
            </p>

            <p className="font-mono text-xs text-slate-400">
              2026 © WebMash Labs
            </p>
          </div>

          {/* BACK TO TOP */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease }}
            className="group inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-white cursor-pointer pt-2 sm:pt-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#02040A] rounded"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>

            <div className="h-8 w-8 rounded-full border border-white/30 group-hover:border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-[#030614]">
              <ArrowUp
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </div>
          </motion.button>

        </div>
      </div>
    </footer>
  );
}