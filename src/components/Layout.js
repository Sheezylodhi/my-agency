"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-white text-[#0F172A]">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}