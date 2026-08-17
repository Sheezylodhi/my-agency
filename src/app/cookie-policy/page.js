import React from "react";
import Link from "next/link";
import { ArrowRight, Cookie, FileText } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | WebMash Labs",
  description: "Learn how WebMash Labs uses cookies and similar technologies on our website and how you can manage your preferences.",
  alternates: {
    canonical: "https://webmashlabs.com/cookie-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const tableOfContents = [
  { id: "what-are-cookies", title: "01. What Are Cookies?" },
  { id: "how-we-use-cookies", title: "02. How We Use Cookies" },
  { id: "types-of-cookies", title: "03. Types of Cookies" },
  { id: "essential-cookies", title: "04. Essential Cookies" },
  { id: "preference-cookies", title: "05. Preference Cookies" },
  { id: "analytics-performance", title: "06. Analytics & Performance" },
  { id: "third-party-cookies", title: "07. Third-Party Technologies" },
  { id: "managing-cookies", title: "08. Managing Cookies" },
  { id: "changes-to-policy", title: "09. Changes to This Policy" },
  { id: "contact", title: "10. Contact" },
];

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#0A0A0A] selection:bg-[#2563EB] selection:text-white pt-24 lg:pt-32">
      {/* SECTION 1 — HERO */}
      <header className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 pb-16 lg:pb-24 border-b border-[#E5E2DC]">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-mono tracking-widest uppercase mb-6">
            <Cookie className="w-3.5 h-3.5" aria-hidden="true" />
            <span>LEGAL / WEBMASH LABS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.08] mb-6">
            Cookie Policy
          </h1>

          <p className="text-lg sm:text-xl text-[#525252] font-light max-w-2xl leading-relaxed mb-8">
            How cookies and similar technologies may be used across the WebMash Labs website.
          </p>

          <div className="flex items-center gap-3 text-xs font-mono text-[#737373] uppercase tracking-wider">
            <span>Last Updated</span>
            <span className="w-1 h-1 rounded-full bg-[#737373]" aria-hidden="true" />
            <span>August 2026</span>
          </div>
        </div>
      </header>

      {/* SECTION 2 — CONTENT LAYOUT */}
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Sticky Table of Contents (Desktop) */}
          <aside className="lg:col-span-4 hidden lg:block sticky top-32" aria-label="Table of Contents">
            <div className="p-6 rounded-2xl bg-[#F8F8F6] border border-[#E5E2DC]">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                <span>On this page</span>
              </h2>
              <nav className="space-y-2" aria-label="Cookie Policy Sections">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-[#525252] hover:text-[#2563EB] transition-colors py-1 font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Right Side: Legal Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 01 */}
            <section id="what-are-cookies" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">01 / Overview</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                What Are Cookies?
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They are widely used to make websites function efficiently, enhance user experience, and provide analytical telemetry where implemented.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 02 */}
            <section id="how-we-use-cookies" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">02 / Purpose</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                How We Use Cookies
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Depending on the services enabled on the website, we utilize cookies and local storage to remember user preferences, maintain session stability, and evaluate aggregate website performance to ensure a seamless technical experience.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 03 */}
            <section id="types-of-cookies" className="scroll-mt-32 space-y-6">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">03 / Classifications</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Types of Cookies
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                We categorize cookies used across our digital properties into specific functional areas:
              </p>

              {/* Visual Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-6 rounded-xl bg-[#F8F8F6] border border-[#E5E2DC]">
                  <h3 className="font-bold text-[#0A0A0A] mb-1">Essential Cookies</h3>
                  <p className="text-sm text-[#525252] font-light">Required for core website functionality, security, session behavior, or technically necessary services.</p>
                </div>
                <div className="p-6 rounded-xl bg-[#F8F8F6] border border-[#E5E2DC]">
                  <h3 className="font-bold text-[#0A0A0A] mb-1">Preference Cookies</h3>
                  <p className="text-sm text-[#525252] font-light">Used to remember user choices or interface preferences when such functionality exists.</p>
                </div>
                <div className="p-6 rounded-xl bg-[#F8F8F6] border border-[#E5E2DC]">
                  <h3 className="font-bold text-[#0A0A0A] mb-1">Analytics Cookies</h3>
                  <p className="text-sm text-[#525252] font-light">Used only where analytics technologies are actually implemented to understand usage patterns.</p>
                </div>
                <div className="p-6 rounded-xl bg-[#F8F8F6] border border-[#E5E2DC]">
                  <h3 className="font-bold text-[#0A0A0A] mb-1">Third-Party Cookies</h3>
                  <p className="text-sm text-[#525252] font-light">May originate from embedded or externally hosted services when those technologies are present.</p>
                </div>
              </div>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 04 */}
            <section id="essential-cookies" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">04 / Essential</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Essential Cookies
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Required for core website functionality, security, session behavior, or technically necessary services. These cannot be disabled through site toggles as the website cannot operate properly without them.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 05 */}
            <section id="preference-cookies" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">05 / Preferences</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Preference Cookies
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Used to remember user choices or interface preferences when such functionality exists, delivering a more tailored browsing session.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 06 */}
            <section id="analytics-performance" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">06 / Performance</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Analytics & Performance
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Used only where analytics technologies are actually implemented to monitor site traffic, page load behavior, and overall platform performance.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 07 */}
            <section id="third-party-cookies" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">07 / External</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Third-Party Technologies
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                May originate from embedded or externally hosted services when those technologies are present on specific pages. These third-party providers manage their own cookie sets and privacy policies.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 08 */}
            <section id="managing-cookies" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">08 / Control</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Managing Cookies
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                You may control cookies through browser settings, clearing stored cookies, blocking certain categories where supported, or utilizing cookie preference controls where the website actually provides them.
              </p>

              {/* Informational Callout */}
              <div className="p-4 rounded-xl bg-[#F8F8F6] border border-[#E5E2DC] text-sm text-[#525252] font-light mt-4">
                <span className="font-medium text-[#0A0A0A]">Note: </span>
                Consult your browser&apos;s documentation for instructions on managing storage preferences or blocking specific persistent items.
              </div>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 09 */}
            <section id="changes-to-policy" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">09 / Updates</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Changes to This Policy
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                We may update this Cookie Policy from time to time to reflect technical upgrades or operational adjustments. Any updates will be published directly on this page with a revised modification date.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 10 */}
            <section id="contact" className="scroll-mt-32 space-y-6">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">10 / Support</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Contact
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                If you have any questions regarding our use of cookies or related technical practices, please reach out through our contact channel.
              </p>

              {/* Dark Callout Box */}
              <div className="p-8 rounded-2xl bg-[#05070B] text-white mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Need more information?</h3>
                  <p className="text-[#737373] text-sm font-light">We are here to answer any technical questions you may have.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm rounded-lg transition-all duration-300 shrink-0 shadow-lg shadow-[#2563EB]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
}