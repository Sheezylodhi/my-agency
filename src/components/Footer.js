"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F172A] text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#1D4ED8] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#1D4ED8] opacity-10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">

        {/* 1. Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            DevAgency
          </h3>

          <p className="text-[#94A3B8] text-sm leading-relaxed">
            We build modern websites, UI/UX systems, and digital experiences
            that help businesses grow and convert better online.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>

          <ul className="space-y-2 text-[#94A3B8] text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Services", link: "/#services" },
              { name: "Pricing", link: "/#prices" },
              { name: "Testimonials", link: "/#testimonials" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="hover:text-[#1D4ED8] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Legal + Social */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Legal</h4>

          <ul className="space-y-2 text-[#94A3B8] text-sm mb-5">
            <li>
              <Link href="/privacy" className="hover:text-[#1D4ED8] transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#1D4ED8] transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex gap-4 text-[#94A3B8]">
            <a className="hover:text-[#1D4ED8] hover:scale-110 transition" href="#">
              <FaFacebookF />
            </a>
            <a className="hover:text-[#1D4ED8] hover:scale-110 transition" href="#">
              <FaInstagram />
            </a>
            <a className="hover:text-[#1D4ED8] hover:scale-110 transition" href="#">
              <FaTiktok />
            </a>
            <a className="hover:text-[#1D4ED8] hover:scale-110 transition" href="#">
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* 4. Contact */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Contact</h4>

          <p className="text-[#94A3B8] text-sm">
            Email:
            <br />
            <a
              href="mailto:info@devagency.com"
              className="text-[#1D4ED8] font-medium hover:underline"
            >
              info@devagency.com
            </a>
          </p>

          <p className="text-[#94A3B8] text-sm">
            We usually respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mt-10 py-6 text-center text-[#94A3B8] text-sm relative z-10">
        <p>© {new Date().getFullYear()} DevAgency. All rights reserved.</p>
        <p className="mt-1">
          Designed & Developed with ❤️
        </p>
      </div>
    </footer>
  );
}