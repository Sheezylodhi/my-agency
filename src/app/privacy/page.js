import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | WebMash Labs",
  description: "Learn how WebMash Labs collects, uses, protects, retains and handles personal information when you interact with our digital platforms and services.",
  alternates: {
    canonical: "https://webmashlabs.com/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const tableOfContents = [
  { id: "information-we-collect", title: "01. Information We Collect" },
  { id: "how-we-use-information", title: "02. How We Use Information" },
  { id: "cookies-tracking", title: "03. Cookies & Tracking" },
  { id: "information-sharing", title: "04. Information Sharing" },
  { id: "data-security", title: "05. Data Security" },
  { id: "data-retention", title: "06. Data Retention" },
  { id: "your-rights", title: "07. Your Rights" },
  { id: "third-party-services", title: "08. Third-Party Services" },
  { id: "childrens-privacy", title: "09. Children's Privacy" },
  { id: "policy-updates", title: "10. Policy Updates" },
  { id: "contact", title: "11. Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EF] text-[#0A0A0A] selection:bg-[#2563EB] selection:text-white pt-24 lg:pt-32">
      {/* SECTION 1 — HERO */}
      <header className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 pb-16 lg:pb-24 border-b border-[#E5E2DC]">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-mono tracking-widest uppercase mb-6">
            <Shield className="w-3.5 h-3.5" aria-hidden="true" />
            <span>LEGAL / WEBMASH LABS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.08] mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg sm:text-xl text-[#525252] font-light max-w-2xl leading-relaxed mb-8">
            How we collect, use, protect and handle information when you interact with WebMash Labs.
          </p>

          <div className="flex items-center gap-3 text-xs font-mono text-[#737373] uppercase tracking-wider">
            <span>Last Updated</span>
            <span className="w-1 h-1 rounded-full bg-[#737373]" aria-hidden="true" />
            <span>August 2026</span>
          </div>
        </div>
      </header>

      {/* SECTION 2 — CONTENT LAYOUT */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Sticky Table of Contents (Desktop) */}
          <aside className="lg:col-span-4 hidden lg:block sticky top-32" aria-label="Table of Contents">
            <div className="p-6 rounded-2xl bg-[#F8F8F6] border border-[#E5E2DC]">
              <h2 className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                <span>On this page</span>
              </h2>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-[#525252] hover:text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded px-1 transition-colors py-1 font-light"
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
            <section id="information-we-collect" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">01 / Collection</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Information We Collect
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                We collect information that you provide directly to us when you fill out forms, request consultations, apply for services, or communicate with us. This may include:
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Contact details (such as name, professional email address, and phone number)",
                  "Project requirements, specifications, and business background information",
                  "Communications and correspondence sent through our website or direct channels",
                  "Basic technical information and standard browser or device telemetry data when accessing our digital properties"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#525252] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 02 */}
            <section id="how-we-use-information" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">02 / Purpose</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                How We Use Information
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                The information we gather is utilized solely to operate, maintain, and enhance our digital product engineering services. Specifically, we use information to:
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Respond to inbound inquiries and evaluate prospective project engagements",
                  "Provide, maintain, and scale our digital products and services",
                  "Communicate regarding project updates, proposals, and administrative notifications",
                  "Ensure network security, prevent fraudulent activity, and analyze aggregate website performance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#525252] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 03 */}
            <section id="cookies-tracking" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">03 / Tracking</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Cookies & Tracking
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                For detailed information about cookies and similar technologies, please review our{" "}
                <Link href="/cookie-policy" className="text-[#2563EB] hover:underline font-normal focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded">
                  Cookie Policy
                </Link>. You retain the ability to configure your browser settings to reject or delete cookies at your discretion.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 04 */}
            <section id="information-sharing" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">04 / Sharing</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Information Sharing
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                We do not sell, trade, or rent personal information. Information may be shared with trusted third-party service providers strictly when reasonably necessary to operate our website, secure our infrastructure, or facilitate professional business operations under strict confidentiality obligations.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 05 */}
            <section id="data-security" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">05 / Security</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Data Security
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                We employ reasonable technical, physical, and administrative safeguards designed to protect information against unauthorized access, loss, destruction, or alteration. However, no digital transmission or storage system can be guaranteed completely secure.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 06 */}
            <section id="data-retention" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">06 / Retention</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Data Retention
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                We retain personal and project information only for as long as reasonably necessary to fulfill legitimate business, operational, or legal obligations.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 07 */}
            <section id="your-rights" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">07 / Rights</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Your Rights
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Depending on your location, you may have rights regarding access, correction, or deletion of your personal data. To exercise any applicable rights, please reach out directly through our contact channel.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 08 */}
            <section id="third-party-services" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">08 / External Links</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Third-Party Services
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Our digital platforms may link to external websites or services not operated by WebMash Labs. We assume no responsibility for the privacy practices or content of third-party entities.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 09 */}
            <section id="childrens-privacy" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">09 / Minors</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Children&apos;s Privacy
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                WebMash Labs services and digital properties are designed for professional and commercial use, and are not intentionally directed toward individuals under the age of 18.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 10 */}
            <section id="policy-updates" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">10 / Modifications</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Policy Updates
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our operational workflows or legal requirements. Updated versions will be posted directly on this page with a revised date.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 11 */}
            <section id="contact" className="scroll-mt-32 space-y-6">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">11 / Support</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Contact
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy, please get in touch with our team.
              </p>

              {/* Dark Callout Box */}
              <div className="p-8 rounded-2xl bg-[#05070B] text-white mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Questions about your information?</h3>
                  <p className="text-[#737373] text-sm font-light">Our engineering team is ready to address your inquiries.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm rounded-lg transition-all duration-300 shrink-0 shadow-lg shadow-[#2563EB]/25 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span>Contact WebMash Labs</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </section>

          </div>

        </div>
      </div>
    </main>
  );
}