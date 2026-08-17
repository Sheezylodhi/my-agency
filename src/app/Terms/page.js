import React from "react";
import Link from "next/link";
import { ArrowRight, FileCheck, FileText } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | WebMash Labs",
  description: "Terms governing use of the WebMash Labs website and general terms applicable to digital services, subject to individual agreements.",
  alternates: {
    canonical: "https://webmashlabs.com/terms",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const tableOfContents = [
  { id: "introduction", title: "01. Introduction" },
  { id: "website-use", title: "02. Website Use" },
  { id: "services", title: "03. Services" },
  { id: "project-engagements", title: "04. Project Engagements" },
  { id: "intellectual-property", title: "05. Intellectual Property" },
  { id: "client-responsibilities", title: "06. Client Responsibilities" },
  { id: "payments-fees", title: "07. Payments & Fees" },
  { id: "third-party-services", title: "08. Third-Party Services" },
  { id: "warranties-disclaimers", title: "09. Warranties & Disclaimers" },
  { id: "limitation-liability", title: "10. Limitation of Liability" },
  { id: "confidentiality", title: "11. Confidentiality" },
  { id: "termination", title: "12. Termination" },
  { id: "changes-to-terms", title: "13. Changes to These Terms" },
  { id: "governing-law", title: "14. Governing Law" },
  { id: "contact", title: "15. Contact" },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F5F3EF] text-[#0A0A0A] selection:bg-[#2563EB] selection:text-white pt-24 lg:pt-32">
      {/* SECTION 1 — HERO */}
      <header className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 pb-16 lg:pb-24 border-b border-[#E5E2DC]">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-mono tracking-widest uppercase mb-6">
            <FileCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>LEGAL / WEBMASH LABS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.08] mb-6">
            Terms & Conditions
          </h1>

          <p className="text-lg sm:text-xl text-[#525252] font-light max-w-2xl leading-relaxed mb-8">
            The terms that govern your use of the WebMash Labs website and our digital services.
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
            <section id="introduction" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">01 / Agreement</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Introduction
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Welcome to WebMash Labs. By accessing our website or engaging our digital product engineering services, you agree to comply with and be bound by these Terms & Conditions. If you disagree with any part of these terms, please refrain from using our website or services.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 02 */}
            <section id="website-use" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">02 / Usage</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Website Use
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                The content, design, code, and graphical assets on the WebMash Labs website are provided for informational and commercial engagement purposes. You agree not to misuse, scrape, duplicate, or disrupt our website infrastructure or security protocols. For information on how we handle personal data, please review our{" "}
                <Link href="/privacy-policy" className="text-[#2563EB] hover:underline font-normal focus:outline-none focus:ring-2 focus:ring-[#2563EB] rounded">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 03 */}
            <section id="services" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">03 / Offerings</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Services
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                WebMash Labs provides high-end digital product engineering, web development, e-commerce platforms, business systems, and technical consulting. Scope of work, deliverables, and timelines are established on a per-project basis.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 04 */}
            <section id="project-engagements" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">04 / Contracts</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Project Engagements
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Actual client engagements and custom software development projects are governed by separate, mutually executed statements of work (SOW), professional service agreements, or formal proposals that supersede general website terms where specific project terms apply.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 05 */}
            <section id="intellectual-property" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">05 / Property</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Intellectual Property
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                All proprietary branding, visual design, agency trademarks, and original code structures on this website remain the exclusive property of WebMash Labs. Client-specific work deliverables transfer upon full project completion and settlement per individual contract terms.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 06 */}
            <section id="client-responsibilities" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">06 / Obligations</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Client Responsibilities
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                During active project engagements, clients agree to provide timely feedback, necessary credentials, accurate assets, approvals, and cooperative communication required for successful engineering milestone delivery.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 07 */}
            <section id="payments-fees" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">07 / Commercials</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Payments & Fees
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Payment schedules, milestone installments, and billing terms are defined within individual project proposals, invoices, or specific agreements. Timely settlement of invoices is required to maintain active development queues.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 08 */}
            <section id="third-party-services" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">08 / Third-Party</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Third-Party Services
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Projects may integrate third-party APIs, cloud hosting providers, payment gateways, or software platforms. Third-party services operate under their own terms and policies. WebMash Labs is not liable for service interruptions or policy modifications originating from third-party vendors.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 09 */}
            <section id="warranties-disclaimers" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">09 / Disclaimers</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Warranties & Disclaimers
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                The website and general informational materials are provided on an &quot;as is&quot; basis without express or implied warranties of any kind. Specific technical guarantees are governed exclusively by signed client agreements.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 10 */}
            <section id="limitation-liability" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">10 / Liability</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Limitation of Liability
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                WebMash Labs shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our website or informational content. Specific liability provisions for client projects are defined in individual service contracts.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 11 */}
            <section id="confidentiality" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">11 / Privacy</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Confidentiality
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Both parties agree to protect sensitive business information, proprietary technical data, and trade secrets shared during consultations and active project execution, subject to any separate non-disclosure agreements where applicable.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 12 */}
            <section id="termination" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">12 / Termination</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Termination
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Either party may conclude project engagements or ongoing arrangements according to the specific cancellation terms outlined in their respective project contract.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 13 */}
            <section id="changes-to-terms" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">13 / Updates</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Changes to These Terms
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                We reserve the right to modify these website terms at any time. Updates will be posted directly on this page. Project-specific contractual terms remain governed by their respective signed agreements.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 14 */}
            <section id="governing-law" className="scroll-mt-32 space-y-4">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">14 / Jurisdiction</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Governing Law
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                These terms are interpreted and governed in accordance with applicable commercial standards, subject to specific jurisdiction clauses outlined in individual client service contracts.
              </p>
            </section>

            <hr className="border-[#E5E2DC]" />

            {/* 15 */}
            <section id="contact" className="scroll-mt-32 space-y-6">
              <span className="font-mono text-xs text-[#2563EB] tracking-widest uppercase">15 / Support</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Contact
              </h2>
              <p className="text-[#525252] font-light leading-relaxed">
                Have questions about working with WebMash Labs or reviewing our terms? Our partnership team is available to assist you.
              </p>

              {/* Dark Callout Box */}
              <div className="p-8 rounded-2xl bg-[#05070B] text-white mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Have a question about working with us?</h3>
                  <p className="text-[#737373] text-sm font-light">Let&apos;s discuss your next digital product engineering initiative.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm rounded-lg transition-all duration-300 shrink-0 shadow-lg shadow-[#2563EB]/25 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span>Start a Conversation</span>
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