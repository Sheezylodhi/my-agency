import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, SERVICES } from "@/data/services";
import FaqAccordion from "@/components/FaqAccordion";
import { ArrowRight, Terminal } from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | WebMash Labs",
      description: "The requested digital engineering service could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const pageTitle = service.seoTitle || `${service.name} | WebMash Labs`;
  const pageDescription =
    service.metaDescription ||
    "Custom website development services for businesses requiring high performance, enterprise architecture, and technical SEO optimization.";

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: service.canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: service.canonical,
      siteName: "WebMash Labs",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://webmashlabs.com/og-services.jpg",
          width: 1200,
          height: 630,
          alt: `${service.name} - WebMash Labs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["https://webmashlabs.com/og-services.jpg"],
    },
  };
}

export default async function ServiceSlugPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  // Structured Data Entity Graph (Schema.org compliant)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://webmashlabs.com/#organization",
        "name": "WebMash Labs",
        "url": "https://webmashlabs.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://webmashlabs.com/logo.png",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://webmashlabs.com/#website",
        "url": "https://webmashlabs.com/",
        "name": "WebMash Labs",
        "publisher": {
          "@id": "https://webmashlabs.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${service.canonical}#webpage`,
        "url": service.canonical,
        "name": service.seoTitle || service.name,
        "headline": "Custom Website Development Services",
        "description": service.metaDescription,
        "isPartOf": {
          "@id": "https://webmashlabs.com/#website",
        },
        "publisher": {
          "@id": "https://webmashlabs.com/#organization",
        },
        "breadcrumb": {
          "@id": `${service.canonical}#breadcrumb`,
        },
        "mainEntity": {
          "@id": `${service.canonical}#service`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${service.canonical}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://webmashlabs.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://webmashlabs.com/services",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.name,
            "item": service.canonical,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${service.canonical}#service`,
        "name": service.name,
        "serviceType": service.primaryKeyword || "Custom Website Development",
        "provider": {
          "@id": "https://webmashlabs.com/#organization",
        },
        "description": service.overview,
        "url": service.canonical,
        "areaServed": {
          "@type": "Country",
          "name": "United States",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${service.canonical}#faq`,
        "mainEntity": (service.faqs || []).map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#060911] text-slate-100 selection:bg-indigo-600 selection:text-white overflow-x-hidden font-sans">
        
        {/* Minimal Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="bg-[#060911] border-b border-slate-900 py-4 px-6 md:px-16 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
          <ol className="flex items-center space-x-3 text-xs font-mono text-slate-400 max-w-7xl mx-auto tracking-wider">
            <li>
              <Link href="/" className="hover:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors">
                HOME
              </Link>
            </li>
            <li><span className="text-slate-700">/</span></li>
            <li>
              <Link href="/services" className="hover:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors">
                SERVICES
              </Link>
            </li>
            <li><span className="text-slate-700">/</span></li>
            <li className="text-indigo-400 uppercase font-semibold" aria-current="page">
              {service.name}
            </li>
          </ol>
        </nav>

        <main id="main-content">
          {/* 1. HERO — DARK CINEMATIC COMPOSITION WITH SINGLE H1 */}
          <header className="relative py-28 md:py-40 px-6 md:px-16 bg-[#060911] border-b border-slate-800/80 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center space-x-3 font-mono text-xs text-indigo-400 tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true" />
                  <span>{service.heroEyebrow || "ENTERPRISE WEB ENGINEERING"}</span>
                </div>

                {/* SINGLE STRICT H1 ON ENTIRE PAGE */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                  Custom Website Development Services
                </h1>

                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
                  {service.heroDescription ||
                    "We design and build bespoke, high-performance web applications and corporate digital platforms that replace rigid templates with scalable, API-first Next.js architecture."}
                </p>

                <div className="pt-2 flex flex-wrap gap-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-3 bg-white hover:bg-slate-200 text-slate-950 font-medium px-8 py-4 rounded-full transition-all text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    <span>Initialize Project</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center space-x-3 bg-transparent hover:bg-slate-900/80 text-slate-300 border border-slate-800 font-medium px-8 py-4 rounded-full transition-all text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    <span>View Case Studies</span>
                  </Link>
                </div>

                <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs text-slate-400">
                  <div>US MARKET INTENT</div>
                  <div>NEXT.JS / REACT</div>
                  <div>CORE WEB VITALS</div>
                  <div>ENTERPRISE READY</div>
                </div>
              </div>

              {/* Architectural Visual Component */}
              <div className="lg:col-span-5 relative hidden lg:block">
                <div className="bg-[#090e1a] border border-slate-800/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden font-mono text-xs">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-indigo-400 to-transparent" />
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-indigo-400" aria-hidden="true" />
                      <span>SYS_ARCH_v2.4.js</span>
                    </div>
                    <span className="text-indigo-400">DEPLOYED</span>
                  </div>
                  <div className="space-y-4 text-slate-300">
                    <div className="p-3 bg-slate-900/90 border border-slate-800 rounded flex justify-between items-center">
                      <span className="text-slate-400">01 // RENDER_STRATEGY</span>
                      <span className="text-indigo-400">SSR + Edge Caching</span>
                    </div>
                    <div className="p-3 bg-slate-900/90 border border-slate-800 rounded flex justify-between items-center">
                      <span className="text-slate-400">02 // DATA_PIPELINE</span>
                      <span className="text-indigo-400">REST / GraphQL / JSON-LD</span>
                    </div>
                    <div className="p-3 bg-slate-900/90 border border-slate-800 rounded flex justify-between items-center">
                      <span className="text-slate-400">03 // OPTIMIZATION</span>
                      <span className="text-indigo-400">Core Web Vitals Focused</span>
                    </div>
                    <div className="p-3 bg-slate-900/90 border border-slate-800 rounded flex justify-between items-center">
                      <span className="text-slate-400">04 // ACCESSIBILITY</span>
                      <span className="text-indigo-400">Accessibility-Conscious</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                    <span>SECURITY: ENCRYPTED</span>
                    <span>CDN: GLOBAL EDGE</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* 2. LIGHT SECTION — EDITORIAL INTRODUCTION & SEARCH INTENT */}
          <section className="py-32 px-6 md:px-16 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto space-y-12">
              <span className="font-mono text-xs text-indigo-600 tracking-widest uppercase block">
                01 / STRATEGIC PHILOSOPHY
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl leading-tight">
                Custom Website Development for Business Growth
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t border-slate-200">
                <div className="md:col-span-5 text-slate-600 font-mono text-sm leading-relaxed">
                  <p>TARGET AUDIENCE &bull; US BUSINESSES & B2B ENTERPRISES</p>
                  <p className="mt-2">ENGINEERING &bull; MODULAR / API-FIRST ARCHITECTURE</p>
                  <p className="mt-2">PERFORMANCE &bull; CORE WEB VITALS OPTIMIZATION</p>
                  <p className="mt-2">DELIVERY &bull; CONTINUOUS INTEGRATION & DEPLOYMENT</p>
                </div>
                <div className="md:col-span-7 space-y-6 text-lg text-slate-700 font-light leading-relaxed">
                  <p>
                    Custom website development involves engineering bespoke digital platforms from the ground up, precisely tailored to a business’s unique workflows, conversion paths, and technical requirements. Unlike off-the-shelf templates, bespoke development gives companies complete authority over code quality, semantic structure, security protocols, and third-party integrations.
                  </p>
                  <p>
                    {service.overview ||
                      "At WebMash Labs, we replace rigid theme silos with modern React and Next.js custom website architecture. Whether you require enterprise B2B website development, a custom CMS frontend, or complex API integrations with your CRM and ERP, our web development agency delivers platforms built for long-term scalability and organic search visibility."}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. DARK SECTION — ENGINEERING MANIFESTO */}
          <section className="py-32 px-6 md:px-16 bg-[#060911] border-t border-slate-800/80">
            <div className="max-w-5xl mx-auto space-y-12">
              <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                02 / MANIFESTO
              </span>
              <h2 className="text-3xl md:text-5xl font-light text-white leading-snug">
                Custom Website Development Strategy
              </h2>
              <blockquote className="border-l-2 border-indigo-500 pl-6 text-2xl md:text-3xl font-light text-slate-300 italic">
                &ldquo;A commercial website is not a static display of pages. It is an enterprise system connecting brand identity, structured content, user intent, search engine crawlers, and revenue pipelines.&rdquo;
              </blockquote>
              <p className="text-slate-400 text-lg font-light max-w-3xl leading-relaxed">
                Every component, database schema, and route structure we engineer serves a dual purpose: providing frictionless user experience and offering search engines a clean, crawlable semantic graph.
              </p>
            </div>
          </section>

          {/* 4. LIGHT SECTION — PROBLEMS / FRICTION ANALYSIS */}
          <section className="py-32 px-6 md:px-16 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto space-y-20">
              <div className="space-y-4 max-w-3xl">
                <span className="font-mono text-xs text-indigo-600 tracking-widest uppercase block">
                  03 / FRICTION ANALYSIS
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                  Common Website Performance and Architecture Problems
                </h2>
                <p className="text-slate-600 text-base font-light">
                  Growing organizations frequently encounter critical technical bottlenecks when scaling rigid commercial site builds.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-6 border-l-2 border-indigo-600 pl-6">
                  <span className="font-mono text-xs text-slate-400">01 // PERFORMANCE DEGRADATION</span>
                  <h3 className="text-2xl font-bold text-slate-900">Slow Rendering & High Bounce Rates</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Bloated JavaScript bundles and unoptimized database queries delay rendering times. When interactive response is sluggish, bounce rates rise and user trust degrades.
                  </p>
                  <div className="space-y-2 font-mono text-xs text-slate-600 pt-4 bg-slate-50 p-4 rounded-lg">
                    <p>UNOPTIMIZED ASSETS</p>
                    <p className="text-indigo-600">↓</p>
                    <p>POOR CORE WEB VITALS</p>
                    <p className="text-indigo-600">↓</p>
                    <p>REDUCED CONVERSION EFFICIENCY</p>
                  </div>
                </div>
                <div className="space-y-6 border-l-2 border-indigo-600 pl-6">
                  <span className="font-mono text-xs text-slate-400">02 // ARCHITECTURAL RIGIDITY</span>
                  <h3 className="text-2xl font-bold text-slate-900">Template Bloat & Plugin Dependencies</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Commercial templates rely on excessive third-party plugins that introduce security vulnerabilities, break during updates, and restrict custom API integrations.
                  </p>
                  <div className="space-y-2 font-mono text-xs text-slate-600 pt-4 bg-slate-50 p-4 rounded-lg">
                    <p>BRITTLE PLUGIN CHAIN</p>
                    <p className="text-indigo-600">↓</p>
                    <p>MAINTENANCE OVERHEAD</p>
                    <p className="text-indigo-600">↓</p>
                    <p>DEFERRED FEATURE RELEASES</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. DARK SECTION — WHAT WE BUILD */}
          <section className="py-32 px-6 md:px-16 bg-[#060911] border-t border-slate-800/80">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="space-y-4">
                <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                  04 / CAPABILITY LANDSCAPE
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Custom Website Development Solutions
                </h2>
                <p className="text-slate-400 text-base font-light max-w-2xl">
                  We engineer tailor-made digital platforms designed to handle complex business requirements, website migrations, and enterprise scale.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(service.useCases && service.useCases.length > 0 ? service.useCases : [
                  { title: "Corporate & B2B Web Portals", description: "Scalable, secure website architecture built to showcase complex offerings and drive corporate lead generation." },
                  { title: "SaaS Marketing Websites", description: "High-conversion frontends integrated with custom auth, subscription workflows, and automated product analytics." },
                  { title: "Custom CMS & Editorial Hubs", description: "Bespoke content management interfaces that offer content teams complete control over semantic layouts." },
                  { title: "API-Driven Digital Platforms", description: "Seamless integrations connecting customer-facing frontends to enterprise CRMs, ERPs, and custom backend logic." },
                  { title: "Website Redesign & Migration", description: "Zero-downtime platform migrations preserving technical SEO authority and structural link integrity." },
                  { title: "Customer & Partner Portals", description: "Authenticated web applications featuring real-time data sync, dynamic dashboards, and strict access controls." }
                ]).map((uc, idx) => (
                  <article key={idx} className="group p-8 bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 transition-all rounded-xl space-y-4">
                    <span className="font-mono text-xs text-indigo-400 block">0{idx + 1} // SOLUTION</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{uc.title}</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">{uc.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 6. LIGHT SECTION — TECHNICAL ARCHITECTURE */}
          <section className="py-32 px-6 md:px-16 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="space-y-4 max-w-3xl">
                <span className="font-mono text-xs text-indigo-600 tracking-widest uppercase block">
                  05 / TECHNICAL ARCHITECTURE
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                  Custom Website Architecture and Technology Stack
                </h2>
                <p className="text-slate-600 text-lg font-light">
                  Our custom web development stack utilizes modular layers for ultimate speed, security, and developer ergonomics.
                </p>
              </div>

              {/* Architectural Visual Stack */}
              <div className="max-w-3xl mx-auto space-y-4 font-mono text-sm">
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                  <span className="text-xs text-indigo-600 font-bold block">EXPERIENCE LAYER</span>
                  <p className="text-slate-900 font-bold">Next.js / React / TypeScript / Tailwind CSS</p>
                </div>
                <div className="flex justify-center text-indigo-600" aria-hidden="true">↓</div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                  <span className="text-xs text-indigo-600 font-bold block">APPLICATION LAYER</span>
                  <p className="text-slate-900 font-bold">Node.js APIs / REST & GraphQL / Secure Authentication / CRM Integrations</p>
                </div>
                <div className="flex justify-center text-indigo-600" aria-hidden="true">↓</div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                  <span className="text-xs text-indigo-600 font-bold block">DATA LAYER</span>
                  <p className="text-slate-900 font-bold">PostgreSQL / MongoDB (where appropriate) / Redis Caching</p>
                </div>
                <div className="flex justify-center text-indigo-600" aria-hidden="true">↓</div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                  <span className="text-xs text-indigo-600 font-bold block">INFRASTRUCTURE LAYER</span>
                  <p className="text-slate-900 font-bold">Vercel Edge / Cloudflare CDN / Automated CI/CD Pipelines</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-sm text-slate-600 font-light leading-relaxed max-w-5xl mx-auto">
                <div>
                  <h3 className="font-bold text-slate-900 font-mono mb-2">Frontend Engineering</h3>
                  <p>Leveraging Next.js and React to build responsive UI components that deliver fast initial page renders and interactive dynamic client states.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 font-mono mb-2">API & Business Logic</h3>
                  <p>Connecting web frontends to custom Node.js microservices, payment gateways, and third-party platforms via secure REST and GraphQL endpoints.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 font-mono mb-2">Edge Infrastructure</h3>
                  <p>Deploying application builds onto global Content Delivery Networks (CDNs) to ensure quick asset delivery and automated scaling depending on traffic requirements.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. DARK SECTION — TECHNICAL SEO */}
          <section className="py-32 px-6 md:px-16 bg-[#060911] border-t border-slate-800/80">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-6">
                  <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                    06 / SEARCH AUTHORITY
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    Technical SEO for Custom Website Development
                  </h2>
                  <p className="text-slate-400 text-base font-light leading-relaxed">
                    Organic search visibility depends on solid technical foundations. Proper heading hierarchies, semantic HTML markup, valid JSON-LD structured data, clean URL structures, and managed 301 redirects create an optimal architecture for search engine crawlers.
                  </p>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    While technical implementation provides an optimal foundation for indexing and performance, overall search engine rankings depend on multiple factors including content quality, user intent matching, and domain authority.
                  </p>
                </div>
                <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 p-8 rounded-2xl font-mono text-xs space-y-4">
                  <div className="text-indigo-400 font-bold pb-2 border-b border-slate-800">SEO INDEXATION & CRAWL PIPELINE</div>
                  <div className="flex items-center justify-between text-slate-300 py-2 border-b border-slate-800/60">
                    <span>01. SEMANTIC HTML & ACCESSIBILITY</span>
                    <span className="text-indigo-400">Clean Header Hierarchy</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 py-2 border-b border-slate-800/60">
                    <span>02. SERVER-SIDE RENDERING (SSR)</span>
                    <span className="text-indigo-400">Direct Crawler Indexing</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 py-2 border-b border-slate-800/60">
                    <span>03. STRUCTURED DATA GRAPH</span>
                    <span className="text-indigo-400">JSON-LD Schema Entities</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 py-2 border-b border-slate-800/60">
                    <span>04. INTERNAL LINK STRUCTURE</span>
                    <span className="text-indigo-400">Crawl Path Optimization</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300 py-2">
                    <span>05. CORE WEB VITALS</span>
                    <span className="text-indigo-400">LCP / INP / CLS Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. LIGHT SECTION — PERFORMANCE & CORE WEB VITALS */}
          <section className="py-32 px-6 md:px-16 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="space-y-4 max-w-3xl">
                <span className="font-mono text-xs text-indigo-600 tracking-widest uppercase block">
                  07 / PERFORMANCE ENGINEERING
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                  Website Performance and Core Web Vitals Optimization
                </h2>
                <p className="text-slate-600 text-base font-light">
                  Core Web Vitals measure the real-world user experience of a website. Our custom development process focuses on optimizing key performance metrics through modern frontend engineering.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono border-y border-slate-200 py-12">
                <div className="space-y-2">
                  <span className="text-3xl md:text-5xl font-bold text-indigo-600">LCP</span>
                  <p className="text-xs text-slate-900 font-bold uppercase">Largest Contentful Paint</p>
                  <p className="text-[11px] text-slate-500 font-sans">Measures loading performance and main visual element rendering.</p>
                </div>
                <div className="space-y-2">
                  <span className="text-3xl md:text-5xl font-bold text-indigo-600">INP</span>
                  <p className="text-xs text-slate-900 font-bold uppercase">Interaction to Next Paint</p>
                  <p className="text-[11px] text-slate-500 font-sans">Assesses visual responsiveness to user inputs and interactions.</p>
                </div>
                <div className="space-y-2">
                  <span className="text-3xl md:text-5xl font-bold text-indigo-600">CLS</span>
                  <p className="text-xs text-slate-900 font-bold uppercase">Cumulative Layout Shift</p>
                  <p className="text-[11px] text-slate-500 font-sans">Quantifies unexpected visual movement of elements during load.</p>
                </div>
                <div className="space-y-2">
                  <span className="text-3xl md:text-5xl font-bold text-indigo-600">TTFB</span>
                  <p className="text-xs text-slate-900 font-bold uppercase">Time to First Byte</p>
                  <p className="text-[11px] text-slate-500 font-sans">Evaluates web server response speed and edge routing efficiency.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 9. DARK SECTION — ENGINEERING PROCESS */}
          <section className="py-32 px-6 md:px-16 bg-[#060911] border-t border-slate-800/80">
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="space-y-4 text-center">
                <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                  08 / LIFECYCLE
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Custom Website Development Process
                </h2>
              </div>
              <div className="space-y-8 border-l border-slate-800 pl-6 md:pl-10 ml-4 md:ml-0">
                {(service.process && service.process.length > 0 ? service.process : [
                  { step: "01", name: "Architecture & Discovery", description: "Analyzing commercial objectives, user intent workflows, SEO targets, and technical requirements." },
                  { step: "02", name: "UX/UI Design Systems", description: "Designing scalable, accessible layout design systems optimized for conversion." },
                  { step: "03", name: "Frontend & Backend Build", description: "Developing responsive UI components in React/Next.js and implementing custom API microservices." },
                  { step: "04", name: "QA & SEO Testing", description: "Executing automated testing across devices, validating JSON-LD schema, and auditing Core Web Vitals." },
                  { step: "05", name: "Deployment & Support", description: "Deploying onto edge CDN networks with automated CI/CD and continuous performance monitoring." }
                ]).map((p, idx) => (
                  <div key={idx} className="relative space-y-2 group">
                    <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors" aria-hidden="true" />
                    <span className="font-mono text-xs text-indigo-400 block">{p.step || `0${idx + 1}`} // STAGE</span>
                    <h3 className="text-xl font-bold text-white">{p.name}</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed max-w-2xl">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 10. LIGHT SECTION — CUSTOM VS TEMPLATE COMPARISON */}
          <section className="py-32 px-6 md:px-16 bg-white text-slate-900">
            <div className="max-w-6xl mx-auto space-y-16">
              <div className="space-y-4 max-w-3xl">
                <span className="font-mono text-xs text-indigo-600 tracking-widest uppercase block">
                  09 / ARCHITECTURAL COMPARISON
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                  Custom Website Development vs. Templates
                </h2>
                <p className="text-slate-600 text-base font-light">
                  While commercial templates and page builders may suit simple websites with limited customization needs, custom web development provides necessary control when businesses require specialized API integrations, advanced performance, and scalable architecture.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-xs font-mono text-slate-500 uppercase">
                      <th className="py-4 px-6">Evaluation Criteria</th>
                      <th className="py-4 px-6 text-slate-400">Generic Templates / Page Builders</th>
                      <th className="py-4 px-6 text-indigo-600 font-bold">WebMash Custom Engineering</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    <tr>
                      <td className="py-4 px-6 font-medium text-slate-900">Architecture</td>
                      <td className="py-4 px-6 text-slate-500">Monolithic themes with pre-built layouts</td>
                      <td className="py-4 px-6 text-slate-900 font-medium">Bespoke modular Next.js / React components</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-slate-900">Performance Control</td>
                      <td className="py-4 px-6 text-slate-500">Dependent on theme bundle size & plugins</td>
                      <td className="py-4 px-6 text-slate-900 font-medium">Fine-grained asset loading & server rendering</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-slate-900">Technical SEO Control</td>
                      <td className="py-4 px-6 text-slate-500">Constrained by CMS theme markup limits</td>
                      <td className="py-4 px-6 text-slate-900 font-medium">Complete authority over semantic HTML & JSON-LD</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-slate-900">Integrations</td>
                      <td className="py-4 px-6 text-slate-500">Limited to pre-made plugin connectors</td>
                      <td className="py-4 px-6 text-slate-900 font-medium">Direct REST / GraphQL API pipelines to CRM/ERP</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-slate-900">Scalability & Code Ownership</td>
                      <td className="py-4 px-6 text-slate-900 font-medium" colSpan="2">
                        <span className="text-slate-500 font-normal">Templates carry low upfront costs; custom solutions offer total code ownership and long-term scalability.</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 11. DARK SECTION — FAQ ACCORDION */}
          <section className="py-32 px-6 md:px-16 bg-[#060911] border-t border-slate-800/80">
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="space-y-4">
                <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                  10 / KNOWLEDGE BASE
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Custom Website Development FAQs
                </h2>
              </div>
              <FaqAccordion faqs={service.faqs || []} />
            </div>
          </section>

          {/* 12. LIGHT SECTION — CRAWLABLE INTERNAL NAVIGATION LINKS */}
          <section className="py-24 px-6 md:px-16 bg-white text-slate-900 border-t border-slate-200">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
              <div className="space-y-4">
                <h3 className="font-mono text-xs text-indigo-600 uppercase font-bold tracking-wider">
                  Related Services
                </h3>
                <ul className="space-y-3 text-sm">
                  {(service.relatedServices && service.relatedServices.length > 0 ? service.relatedServices : [
                    { name: "UI/UX Design Services", slug: "ui-ux-design" },
                    { name: "Technical SEO Services", slug: "technical-seo" },
                    { name: "SaaS Development", slug: "saas-development" }
                  ]).map((rel, idx) => (
                    <li key={idx}>
                      <Link
                        href={`/services/${rel.slug}`}
                        className="text-slate-700 hover:text-indigo-600 focus:outline-none focus:underline transition-colors flex items-center space-x-2"
                      >
                        <span aria-hidden="true">&rarr;</span>
                        <span>{rel.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-mono text-xs text-indigo-600 uppercase font-bold tracking-wider">
                  Relevant Industries
                </h3>
                <ul className="space-y-3 text-sm">
                  {(service.relatedIndustries && service.relatedIndustries.length > 0 ? service.relatedIndustries : [
                    { name: "SaaS & Technology", slug: "technology-saas" },
                    { name: "Professional Services", slug: "professional-services" },
                    { name: "B2B & Wholesale", slug: "b2b-wholesale" }
                  ]).map((ind, idx) => (
                    <li key={idx}>
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="text-slate-700 hover:text-indigo-600 focus:outline-none focus:underline transition-colors flex items-center space-x-2"
                      >
                        <span aria-hidden="true">&rarr;</span>
                        <span>{ind.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-mono text-xs text-indigo-600 uppercase font-bold tracking-wider">
                  Engineering Insights
                </h3>
                <ul className="space-y-3 text-sm">
                  {(service.relatedArticles && service.relatedArticles.length > 0 ? service.relatedArticles : [
                    { title: "Custom Website Development vs Templates", slug: "custom-website-vs-templates" },
                    { title: "Next.js vs WordPress Architecture", slug: "nextjs-vs-wordpress" },
                    { title: "Website Migration SEO Checklist", slug: "website-migration-seo" }
                  ]).map((art, idx) => (
                    <li key={idx}>
                      <Link
                        href={`/blog/${art.slug}`}
                        className="text-slate-700 hover:text-indigo-600 focus:outline-none focus:underline transition-colors flex items-center space-x-2"
                      >
                        <span aria-hidden="true">&rarr;</span>
                        <span>{art.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 13. DRAMATIC DARK GRADIENT FINAL CTA */}
          <section className="py-36 px-6 md:px-16 bg-gradient-to-b from-[#060911] via-[#090e1a] to-[#060911] text-white text-center border-t border-slate-800/80 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />
            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
              <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                LET&apos;S BUILD THE NEXT SYSTEM
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Turn Your Website Into a Scalable Digital Platform
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
                Partner with WebMash Labs for enterprise-grade custom engineering tailored to your growth objectives.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 bg-white hover:bg-slate-200 text-slate-950 font-medium px-9 py-5 rounded-full transition-all text-base tracking-wide shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <span>Initialize Consultation</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </main>

      </div>
    </>
  );
}