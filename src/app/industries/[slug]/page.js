import { notFound } from "next/navigation";
import Link from "next/link";
import { getIndustry, INDUSTRIES } from "@/data/industries";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Network, 
  Workflow, 
  Layers, 
  Terminal, 
  ChevronRight, 
  Sparkles, 
  Lock, 
  Database, 
  Activity, 
  Globe, 
  Server, 
  Zap, 
  BarChart3,
  Layers3,
  GitBranch,
  FileCode2
} from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) {
    return {
      title: "Industry Not Found | WebMash Labs",
      description: "The requested industry software engineering solution page could not be found.",
    };
  }

  return {
    title: industry.seoTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `https://webmashlabs.com/industries/${industry.slug}`,
    },
    openGraph: {
      title: industry.seoTitle,
      description: industry.metaDescription,
      url: `https://webmashlabs.com/industries/${industry.slug}`,
      siteName: "WebMash Labs",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: industry.seoTitle,
      description: industry.metaDescription,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}

function generateJsonLd(industry) {
  const baseUrl = "https://webmashlabs.com";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebMash Labs",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      "https://github.com/webmashlabs",
      "https://linkedin.com/company/webmashlabs"
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: industry.primaryKeyword || `${industry.name} Software Development`,
    provider: {
      "@type": "Organization",
      name: "WebMash Labs",
      url: baseUrl,
    },
    areaServed: industry.geoIntent || "Global",
    description: industry.metaDescription,
  };

  const faqSchema = industry.faqs && industry.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${baseUrl}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.name,
        item: `${baseUrl}/industries/${industry.slug}`,
      },
    ],
  };

  const schemas = [organizationSchema, serviceSchema, breadcrumbSchema];
  if (faqSchema) schemas.push(faqSchema);

  return JSON.stringify(schemas);
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  const jsonLd = generateJsonLd(industry);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <main className="min-h-screen bg-[#060911] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
        
        {/* ========================================================= */}
        {/* SECTION 1: HERO - IMMERSIVE DARK ARCHITECTURAL POSITIONING */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32 border-b border-slate-800/60 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#060911] to-[#04060b]">
          {/* Subtle background grid & architectural glow */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
              <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
              <span className="text-slate-600">/</span>
              <Link href="/industries" className="hover:text-indigo-400 transition-colors">Industries</Link>
              <span className="text-slate-600">/</span>
              <span className="text-indigo-400">{industry.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Editorial Positioning */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 text-xs font-mono tracking-wider uppercase backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{industry.heroAccent || `${industry.name} Technology Practice`}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                  {industry.name} Software Development & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200">Digital Infrastructure</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                  {industry.heroDescription}
                </p>

                {/* Technical Entity Metadata Strip */}
                {industry.industryEntities && industry.industryEntities.length > 0 && (
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">Core Entities:</span>
                    {industry.industryEntities.map((entity, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
                        {entity}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm tracking-wide transition-all shadow-lg shadow-indigo-600/25 group"
                  >
                    Schedule Technical Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href="#solutions"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-200 font-medium text-sm tracking-wide transition-all backdrop-blur-sm"
                  >
                    Explore Architecture
                  </a>
                </div>
              </div>

              {/* Right Column: Integrated Technical Blueprint Surface */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#090d16] border border-slate-800/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Enterprise Grade
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 pb-6 border-b border-slate-800/80 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">System Parameters</h3>
                      <p className="text-xs text-slate-400 font-mono">Domain: {industry.slug}.webmashlabs.sys</p>
                    </div>
                  </div>

                  <div className="space-y-4 font-mono text-xs">
                    <div className="flex justify-between items-center py-2.5 border-b border-slate-800/50">
                      <span className="text-slate-400">Target Audience</span>
                      <span className="text-slate-200 text-right max-w-[180px] truncate">{industry.targetAudience}</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 border-b border-slate-800/50">
                      <span className="text-slate-400">Compliance Standard</span>
                      <span className="text-emerald-400 font-semibold">Strict Regulatory Alignment</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 border-b border-slate-800/50">
                      <span className="text-slate-400">Architecture Paradigm</span>
                      <span className="text-indigo-300">Cloud-Native Microservices</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-slate-400">Search Intent</span>
                      <span className="text-slate-200">{industry.searchIntent || "Commercial / Enterprise"}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>SECURITY: ISO/IEC 27001</span>
                    <span className="text-indigo-400">WEB-MASH-CORE v4.2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: INDUSTRY OVERVIEW - EDITORIAL RESEARCH REPORT STYLE */}
        {/* ========================================================= */}
        <section className="py-24 bg-[#fafbfc] text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-600 uppercase">
                  <span>// Research Brief</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Navigating Structural Complexity in {industry.name}
                </h2>
                <p className="text-sm font-mono text-slate-500 uppercase tracking-wider">
                  Operational Domain & Strategic Engineering
                </p>
              </div>

              <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p className="font-medium text-slate-900 text-xl leading-snug">
                  {industry.industryIntro}
                </p>
                <p className="text-slate-600">
                  {industry.contentSummary}
                </p>

                {/* Supporting Data Strip */}
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200">
                  <div>
                    <div className="text-2xl font-bold text-indigo-600 font-mono">100%</div>
                    <div className="text-xs font-mono text-slate-500 mt-1 uppercase">Custom Architecture</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600 font-mono">Zero-Trust</div>
                    <div className="text-xs font-mono text-slate-500 mt-1 uppercase">Security Model</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600 font-mono">Scalable</div>
                    <div className="text-xs font-mono text-slate-500 mt-1 uppercase">Cloud Infrastructure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: INDUSTRY CHALLENGES - NUMBERED EDITORIAL STATEMENTS */}
        {/* ========================================================= */}
        <section className="py-24 bg-[#0b101d] text-slate-100 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3">
                <span>// Architectural Friction</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Critical Challenges in {industry.name} Operations
              </h2>
              <p className="mt-4 text-slate-400 text-base sm:text-lg">
                Traditional software approaches fail to address the core operational bottlenecks inherent to modern {industry.name.toLowerCase()} environments.
              </p>
            </div>

            {industry.challenges && industry.challenges.length > 0 && (
              <div className="space-y-12">
                {industry.challenges.map((challenge, index) => (
                  <div key={index} className="group pt-8 border-t border-slate-800/80 first:border-t-0 first:pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      <div className="lg:col-span-2">
                        <span className="text-4xl sm:text-5xl font-extrabold font-mono text-indigo-500/40 group-hover:text-indigo-400 transition-colors">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="lg:col-span-5">
                        <h3 className="text-xl font-semibold text-white tracking-tight">
                          {challenge.title}
                        </h3>
                      </div>
                      <div className="lg:col-span-5 space-y-3">
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {challenge.description}
                        </p>
                        <div className="inline-flex items-center text-xs font-mono text-indigo-400/80 bg-indigo-950/40 px-3 py-1 rounded border border-indigo-900/50">
                          <span>Business & Technical Consequence Assessed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: SOLUTIONS - ENGINEERING CASE-STUDY FLOW */}
        {/* ========================================================= */}
        <section id="solutions" className="py-24 bg-white text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-600 uppercase mb-3">
                <span>// Engineered Resolutions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Architectural Solutions for {industry.name}
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                How WebMash Labs engineers high-performance systems to overcome industry-specific obstacles.
              </p>
            </div>

            {industry.solutions && industry.solutions.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {industry.solutions.map((solution, index) => (
                  <div key={index} className="flex flex-col justify-between p-8 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-mono font-bold">
                        S{index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        {solution.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-indigo-600">
                      <span>Architectural Response</span>
                      <span className="font-bold">→ Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 5: CAPABILITIES - ENTERPRISE CAPABILITY MAP */}
        {/* ========================================================= */}
        <section className="py-24 bg-[#060911] text-slate-100 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3">
                <span>// Core Competencies</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Enterprise Capability Matrix
              </h2>
              <p className="mt-4 text-slate-400 text-base sm:text-lg">
                Comprehensive technical capabilities deployed for {industry.name} market leaders.
              </p>
            </div>

            {industry.capabilities && industry.capabilities.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industry.capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-colors">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-wide">
                        {capability}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        Production-ready module
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: TECHNOLOGY ARCHITECTURE - LAYERED STACK */}
        {/* ========================================================= */}
        <section className="py-24 bg-[#fafbfc] text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-600 uppercase mb-3">
                <span>// Technology Stack</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Engineered System Architecture
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                Modern, resilient technologies powering enterprise {industry.name} applications.
              </p>
            </div>

            {industry.technology && industry.technology.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {industry.technology.map((tech, index) => (
                  <div key={index} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 font-semibold">
                        {tech.category}
                      </span>
                      <Cpu className="w-4 h-4 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {tech.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-2">
                      Optimized for low-latency & high throughput
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 7: INTEGRATIONS - CONNECTED ECOSYSTEM VISUALIZATION */}
        {/* ========================================================= */}
        <section className="py-24 bg-[#060911] text-slate-100 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3">
                <span>// Ecosystem Interoperability</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Seamless Third-Party Integrations
              </h2>
              <p className="mt-4 text-slate-400 text-base sm:text-lg">
                Connecting {industry.name} workflows with global enterprise standards and APIs.
              </p>
            </div>

            {industry.integrationEntities && industry.integrationEntities.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {industry.integrationEntities.map((integration, index) => (
                  <div key={index} className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 text-center hover:border-indigo-500/50 transition-colors flex flex-col items-center justify-center space-y-2">
                    <Network className="w-6 h-6 text-indigo-400" />
                    <span className="text-sm font-semibold text-slate-200 font-mono tracking-tight">
                      {integration}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">API Gateway Ready</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 8: DEVELOPMENT WORKFLOW - ENGINEERING LIFECYCLE */}
        {/* ========================================================= */}
        <section className="py-24 bg-[#0b101d] text-slate-100 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3">
                <span>// Delivery Lifecycle</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Engineering Workflow & Execution
              </h2>
              <p className="mt-4 text-slate-400 text-base sm:text-lg">
                Rigorous, phased methodology ensuring enterprise reliability from discovery to deployment.
              </p>
            </div>

            {industry.workflow && industry.workflow.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industry.workflow.map((item, index) => (
                  <div key={index} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 relative">
                    <span className="text-2xl font-bold font-mono text-indigo-400 mb-4 block">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 9: PROJECT TYPES & OUTCOMES - EXECUTIVE SUMMARY */}
        {/* ========================================================= */}
        <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Project Types */}
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-600 uppercase mb-3">
                  <span>// Solution Deployments</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
                  Core Project Types
                </h2>
                {industry.projectTypes && industry.projectTypes.length > 0 && (
                  <ul className="space-y-4">
                    {industry.projectTypes.map((project, index) => (
                      <li key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
                        <ChevronRight className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                        <span className="text-slate-800 font-medium text-sm sm:text-base">
                          {project}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Outcomes */}
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-600 uppercase mb-3">
                  <span>// Value Realization</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-8">
                  Expected Business Outcomes
                </h2>
                {industry.outcomes && industry.outcomes.length > 0 && (
                  <ul className="space-y-4">
                    {industry.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-indigo-50/50 border border-indigo-100">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-800 font-medium text-sm sm:text-base">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 10: INTERNAL LINKING - SERVICES, INDUSTRIES & BLOGS */}
        {/* ========================================================= */}
        <section className="py-24 bg-[#060911] text-slate-100 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Related Services */}
              {industry.services && industry.services.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                    // Related Services
                  </h3>
                  <ul className="space-y-3">
                    {industry.services.map((service, index) => (
                      <li key={index}>
                        <Link 
                          href={service.href}
                          className="group inline-flex items-center text-slate-300 hover:text-white text-sm transition-colors"
                        >
                          <ChevronRight className="w-3.5 h-3.5 mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Industries */}
              {industry.relatedIndustries && industry.relatedIndustries.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                    // Related Sectors
                  </h3>
                  <ul className="space-y-3">
                    {industry.relatedIndustries.map((rel, index) => (
                      <li key={index}>
                        <Link 
                          href={`/industries/${rel.slug}`}
                          className="group inline-flex items-center text-slate-300 hover:text-white text-sm transition-colors"
                        >
                          <ChevronRight className="w-3.5 h-3.5 mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                          <span>{rel.name} Software Development</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Blogs */}
              {industry.relatedBlogs && industry.relatedBlogs.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                    // Engineering Insights
                  </h3>
                  <ul className="space-y-3">
                    {industry.relatedBlogs.map((blog, index) => (
                      <li key={index}>
                        <Link 
                          href={blog.href}
                          className="group inline-flex items-center text-slate-300 hover:text-white text-sm transition-colors"
                        >
                          <ChevronRight className="w-3.5 h-3.5 mr-2 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                          <span>{blog.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 11: FAQ SEO - EXPERT KNOWLEDGE LAYER */}
        {/* ========================================================= */}
        {industry.faqs && industry.faqs.length > 0 && (
          <section className="py-24 bg-[#0b101d] text-slate-100 border-b border-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-indigo-400 uppercase mb-3">
                  <span>// Knowledge Base</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-slate-400 text-base">
                  Expert answers regarding {industry.name} engineering, compliance, and deployment.
                </p>
              </div>

              <div className="space-y-6">
                {industry.faqs.map((faq, index) => (
                  <div key={index} className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-start">
                      <span className="text-indigo-400 font-mono mr-3">Q{index + 1}.</span>
                      {faq.question}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-7">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* SECTION 12: FINAL CTA - ENTERPRISE CONVERSION */}
        {/* ========================================================= */}
        <section className="py-28 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950 via-[#060911] to-[#04060b] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ready for Production Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Accelerate Your {industry.name} Engineering Initiative
            </h2>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Partner with WebMash Labs to build secure, compliant, and scalable digital solutions tailored to your enterprise.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm tracking-wide transition-all shadow-xl shadow-indigo-600/30 group"
              >
                Schedule Architecture Review
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm tracking-wide transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}