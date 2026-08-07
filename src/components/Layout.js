"use client";

import Navbar from "./Navbar";
import {Footer} from "./Footer";
import Chat from "./Chat";

export default function Layout({ children }) {
  return (
    <div className="bg-white text-[#0F172A]">
      <Navbar />
      <main className="">
        <Chat />{children}
        
      </main>
      <Footer />
    </div>
  );
}