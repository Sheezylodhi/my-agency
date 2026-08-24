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
      description:
        "The requested digital engineering service could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const pageTitle =
    service.seoTitle || `${service.title || service.name} | WebMash Labs`;

  const pageDescription =
    service.metaDescription ||
    service.overview ||
    `Professional ${service.name} services from WebMash Labs.`;

  return {
    title: pageTitle,
    description: pageDescription,

    keywords: [
      service.primaryKeyword,
      ...(service.secondaryKeywords || []),
      ...(service.semanticKeywords || []),
    ].filter(Boolean),

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

  const pageTitle = service.title || service.name;

  const capabilities = service.capabilities || [];

  const features = service.features || [];

  const technologies = service.technologies || [];

  const process = service.process || [];

  const useCases = service.useCases || [];

  const deliverables = service.deliverables || [];

  const relatedServices = service.relatedServices || [];

  const relatedIndustries = service.relatedIndustries || [];

  const relatedArticles = service.relatedArticles || [];

  /*
   * Structured Data Entity Graph
   */
  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://webmashlabs.com/#organization",
        name: "WebMash Labs",
        url: "https://webmashlabs.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://webmashlabs.com/WMLogo.png",
        },
      },

      {
        "@type": "WebSite",
        "@id": "https://webmashlabs.com/#website",
        url: "https://webmashlabs.com/",
        name: "WebMash Labs",
        publisher: {
          "@id": "https://webmashlabs.com/#organization",
        },
      },

      {
        "@type": "WebPage",
        "@id": `${service.canonical}#webpage`,
        url: service.canonical,
        name: pageTitle,
        headline: pageTitle,
        description: service.metaDescription || service.overview,
        isPartOf: {
          "@id": "https://webmashlabs.com/#website",
        },
        publisher: {
          "@id": "https://webmashlabs.com/#organization",
        },
        breadcrumb: {
          "@id": `${service.canonical}#breadcrumb`,
        },
        mainEntity: {
          "@id": `${service.canonical}#service`,
        },
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${service.canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://webmashlabs.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://webmashlabs.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: service.canonical,
          },
        ],
      },

      {
        "@type": "Service",
        "@id": `${service.canonical}#service`,
        name: service.name,
        serviceType:
          service.primaryKeyword ||
          service.serviceCategory ||
          service.name,
        provider: {
          "@id": "https://webmashlabs.com/#organization",
        },
        description: service.overview,
        url: service.canonical,
        areaServed: {
          "@type": "Country",
          name: service.geoIntent || "United States",
        },
      },

      ...(service.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${service.canonical}#faq`,
              mainEntity: service.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="min-h-screen bg-[#060911] text-slate-100 selection:bg-indigo-600 selection:text-white overflow-x-hidden font-sans">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="bg-[#060911] border-b border-slate-900 py-4 px-6 md:px-16 sticky top-0 z-50 backdrop-blur-md bg-opacity-90"
        >
          <ol className="flex items-center space-x-3 text-xs font-mono text-slate-400 max-w-7xl mx-auto tracking-wider">

            <li>
              <Link
                href="/"
                className="hover:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
              >
                HOME
              </Link>
            </li>

            <li>
              <span className="text-slate-700">/</span>
            </li>

            <li>
              <Link
                href="/services"
                className="hover:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
              >
                SERVICES
              </Link>
            </li>

            <li>
              <span className="text-slate-700">/</span>
            </li>

            <li
              className="text-indigo-400 uppercase font-semibold"
              aria-current="page"
            >
              {service.name}
            </li>
          </ol>
        </nav>

        <main id="main-content">

          {/* =========================================================
              1. HERO
          ========================================================= */}

          <header className="relative py-28 md:py-40 px-6 md:px-16 bg-[#060911] border-b border-slate-800/80 overflow-hidden">

            <div
              className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

              <div className="lg:col-span-7 space-y-8">

                <div className="inline-flex items-center space-x-3 font-mono text-xs text-indigo-400 tracking-widest uppercase">
                  <span
                    className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"
                    aria-hidden="true"
                  />

                  <span>
                    {service.heroEyebrow ||
                      service.serviceCategory ||
                      "DIGITAL ENGINEERING"}
                  </span>
                </div>

                {/* Dynamic H1 */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                  {pageTitle}
                </h1>

                <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
                  {service.heroDescription || service.overview}
                </p>

                <div className="pt-2 flex flex-wrap gap-5">

                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-3 bg-white hover:bg-slate-200 text-slate-950 font-medium px-8 py-4 rounded-full transition-all text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    <span>Initialize Project</span>

                    <ArrowRight
                      className="w-4 h-4"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href="/work"
                    className="inline-flex items-center space-x-3 bg-transparent hover:bg-slate-900/80 text-slate-300 border border-slate-800 font-medium px-8 py-4 rounded-full transition-all text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  >
                    <span>View Case Studies</span>
                  </Link>

                </div>

                <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs text-slate-400">

                  <div>
                    {service.geoIntent
                      ? `${service.geoIntent.toUpperCase()} MARKET`
                      : "GLOBAL MARKET"}
                  </div>

                  <div>
                    {technologies.slice(0, 2).join(" / ") ||
                      "MODERN WEB STACK"}
                  </div>

                  <div>
                    {service.primaryKeyword
                      ? service.primaryKeyword.toUpperCase()
                      : "PERFORMANCE"}
                  </div>

                  <div>
                    {service.serviceCategory
                      ? service.serviceCategory.toUpperCase()
                      : "ENTERPRISE READY"}
                  </div>

                </div>
              </div>

              {/* Architectural Visual */}
              <div className="lg:col-span-5 relative hidden lg:block">

                <div className="bg-[#090e1a] border border-slate-800/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden font-mono text-xs">

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-indigo-400 to-transparent" />

                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-400 mb-6">

                    <div className="flex items-center space-x-2">
                      <Terminal
                        className="w-4 h-4 text-indigo-400"
                        aria-hidden="true"
                      />

                      <span>
                        {service.slug
                          .replace(/-/g, "_")
                          .toUpperCase()}
                        .JS
                      </span>
                    </div>

                    <span className="text-indigo-400">
                      ENGINEERED
                    </span>
                  </div>

                  <div className="space-y-4 text-slate-300">

                    <div className="p-3 bg-slate-900/90 border border-slate-800 rounded flex justify-between items-center gap-4">
                      <span className="text-slate-400">
                        01 / PRIMARY_SERVICE
                      </span>

                      <span className="text-indigo-400 text-right">
                        {service.name}
                      </span>
                    </div>

                    <div className="p-3 bg-slate-900/90 border border-slate-800 rounded flex justify-between items-center gap-4">
                      <span className="text-slate-400">
                        02 / ARCHITECTURE
                      </span>

                      <span className="text-indigo-400 text-right">
                        {technologies.slice(0, 3).join(" / ") ||
                          "MODULAR STACK"}
                      </span>
                    </div>

                    <div className="p-3 bg-slate-900/90 border border-slate-800 rounded flex justify-between items-center gap-4">
                      <span className="text-slate-400">
                        03 / PERFORMANCE
                      </span>

                      <span className="text-indigo-400 text-right">
                        Core Web Vitals
                      </span>
                    </div>

                    <div className="p-3 bg-slate-900/90 border border-slate-800 rounded flex justify-between items-center gap-4">
                      <span className="text-slate-400">
                        04 / DELIVERY
                      </span>

                      <span className="text-indigo-400 text-right">
                        Production Ready
                      </span>
                    </div>

                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                    <span>
                      CATEGORY:{" "}
                      {service.serviceCategory?.toUpperCase() ||
                        "WEB ENGINEERING"}
                    </span>

                    <span>
                      GEO:{" "}
                      {service.geoIntent?.toUpperCase() ||
                        "GLOBAL"}
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </header>

          {/* =========================================================
              2. INTRODUCTION
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-white text-slate-900">

            <div className="max-w-6xl mx-auto space-y-12">

              <span className="font-mono text-xs text-indigo-600 tracking-widest uppercase block">
                01 / SERVICE OVERVIEW
              </span>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl leading-tight">
                {pageTitle} Built Around Your Business Requirements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t border-slate-200">

                <div className="md:col-span-5 text-slate-600 font-mono text-sm leading-relaxed">

                  <p>
                    SERVICE &bull;{" "}
                    {service.serviceCategory?.toUpperCase() ||
                      "DIGITAL ENGINEERING"}
                  </p>

                  <p className="mt-2">
                    AUDIENCE &bull;{" "}
                    {service.geoIntent?.toUpperCase() ||
                      "GLOBAL BUSINESSES"}
                  </p>

                  <p className="mt-2">
                    INTENT &bull;{" "}
                    {service.searchIntent?.toUpperCase() ||
                      "COMMERCIAL"}
                  </p>

                  <p className="mt-2">
                    PRIMARY &bull;{" "}
                    {service.primaryKeyword?.toUpperCase() ||
                      service.name.toUpperCase()}
                  </p>

                </div>

                <div className="md:col-span-7 space-y-6 text-lg text-slate-700 font-light leading-relaxed">

                  <p>
                    {service.overview}
                  </p>

                  {service.targetAudience && (
                    <p>
                      <strong className="font-medium text-slate-900">
                        Best suited for:
                      </strong>{" "}
                      {service.targetAudience}
                    </p>
                  )}

                </div>
              </div>
            </div>
          </section>

          {/* =========================================================
              3. STRATEGY
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-[#060911] border-t border-slate-800/80">

            <div className="max-w-5xl mx-auto space-y-12">

              <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                02 / STRATEGY
              </span>

              <h2 className="text-3xl md:text-5xl font-light text-white leading-snug">
                {pageTitle} Strategy
              </h2>

              <blockquote className="border-l-2 border-indigo-500 pl-6 text-2xl md:text-3xl font-light text-slate-300 italic">
                A strong digital platform should be engineered around the business, its users, its technical requirements, and its long-term growth — not forced into a predefined structure.
              </blockquote>

              <p className="text-slate-400 text-lg font-light max-w-3xl leading-relaxed">
                {service.businessOutcomes ||
                  service.technicalApproach ||
                  service.overview}
              </p>

            </div>
          </section>

          {/* =========================================================
              4. PROBLEMS
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-white text-slate-900">

            <div className="max-w-6xl mx-auto space-y-20">

              <div className="space-y-4 max-w-3xl">

                <span className="font-mono text-xs text-indigo-600 tracking-widest uppercase block">
                  03 / PROBLEM ANALYSIS
                </span>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                  Problems {service.name} Helps Solve
                </h2>

                <p className="text-slate-600 text-base font-light">
                  {service.problemsSolved}
                </p>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                <div className="space-y-6 border-l-2 border-indigo-600 pl-6">

                  <span className="font-mono text-xs text-slate-400">
                    01 / BUSINESS REQUIREMENTS
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Business-Specific Digital Requirements
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.targetAudience}
                  </p>

                  <div className="space-y-2 font-mono text-xs text-slate-600 pt-4 bg-slate-50 p-4 rounded-lg">

                    <p>BUSINESS REQUIREMENTS</p>
                    <p className="text-indigo-600">↓</p>
                    <p>TECHNICAL STRATEGY</p>
                    <p className="text-indigo-600">↓</p>
                    <p>SCALABLE IMPLEMENTATION</p>

                  </div>
                </div>

                <div className="space-y-6 border-l-2 border-indigo-600 pl-6">

                  <span className="font-mono text-xs text-slate-400">
                    02 / TECHNICAL EXECUTION
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Architecture, Performance & Integration
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.technicalApproach}
                  </p>

                  <div className="space-y-2 font-mono text-xs text-slate-600 pt-4 bg-slate-50 p-4 rounded-lg">

                    <p>TECHNICAL ARCHITECTURE</p>
                    <p className="text-indigo-600">↓</p>
                    <p>PERFORMANCE & SEO</p>
                    <p className="text-indigo-600">↓</p>
                    <p>LONG-TERM MAINTAINABILITY</p>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* =========================================================
              5. CAPABILITIES
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-[#060911] border-t border-slate-800/80">

            <div className="max-w-6xl mx-auto space-y-16">

              <div className="space-y-4">

                <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                  04 / CAPABILITY LANDSCAPE
                </span>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  {service.name} Capabilities
                </h2>

                <p className="text-slate-400 text-base font-light max-w-2xl">
                  {service.businessOutcomes}
                </p>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {capabilities.map((capability, idx) => (

                  <article
                    key={idx}
                    className="group p-8 bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 transition-all rounded-xl space-y-4"
                  >

                    <span className="font-mono text-xs text-indigo-400 block">
                      {String(idx + 1).padStart(2, "0")} / CAPABILITY
                    </span>

                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {capability}
                    </h3>

                  </article>

                ))}

              </div>
            </div>
          </section>

          {/* =========================================================
              6. FEATURES
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-white text-slate-900">

            <div className="max-w-6xl mx-auto space-y-16">

              <div className="space-y-4 max-w-3xl">

                <span className="font-mono text-xs text-indigo-600 tracking-widest uppercase block">
                  05 / IMPLEMENTATION
                </span>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  What We Deliver Through {service.name}
                </h2>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {features.map((feature, idx) => (

                  <article
                    key={idx}
                    className="border border-slate-200 rounded-xl p-8 hover:border-indigo-300 transition-colors"
                  >

                    <span className="font-mono text-xs text-indigo-600">
                      {String(idx + 1).padStart(2, "0")} / FEATURE
                    </span>

                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {feature}
                    </p>

                  </article>

                ))}

              </div>

            </div>
          </section>

          {/* =========================================================
              7. TECHNOLOGY
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-[#060911] border-t border-slate-800/80">

            <div className="max-w-6xl mx-auto space-y-16">

              <div className="space-y-4 max-w-3xl">

                <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                  06 / TECHNICAL ARCHITECTURE
                </span>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Technology Stack for {service.name}
                </h2>

                <p className="text-slate-400 text-lg font-light">
                  {service.technicalApproach}
                </p>

              </div>

              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-sm">

                {technologies.map((technology, idx) => (

                  <div
                    key={idx}
                    className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl text-slate-300 flex items-center justify-between"
                  >

                    <span>
                      {technology}
                    </span>

                    <span className="text-indigo-400">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                  </div>

                ))}

              </div>

            </div>
          </section>

          {/* =========================================================
              8. SEO / SEARCH AUTHORITY
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-white text-slate-900">

            <div className="max-w-6xl mx-auto space-y-16">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-5 space-y-6">

                  <span className="font-mono text-xs text-indigo-600 tracking-widest uppercase block">
                    07 / SEARCH AUTHORITY
                  </span>

                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                    Technical SEO for {service.name}
                  </h2>

                  <p className="text-slate-600 text-base font-light leading-relaxed">
                    {service.technicalApproach}
                  </p>

                  <p className="text-slate-600 text-sm font-light leading-relaxed">
                    Search visibility depends on technical implementation as well as content quality, relevance, authority, competition, user intent, and other search factors.
                  </p>

                </div>

                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 rounded-2xl font-mono text-xs space-y-4">

                  <div className="text-indigo-600 font-bold pb-2 border-b border-slate-200">
                    SEARCH ENGINE FOUNDATION
                  </div>

                  {[
                    "Semantic HTML & Accessibility",
                    "Metadata & Canonical URLs",
                    "Structured Data / JSON-LD",
                    "Internal Linking Architecture",
                    "XML Sitemap & Crawlability",
                    "Core Web Vitals",
                  ].map((item, idx) => (

                    <div
                      key={idx}
                      className="flex items-center justify-between text-slate-600 py-2 border-b border-slate-200/70 gap-4"
                    >

                      <span>
                        {String(idx + 1).padStart(2, "0")}.{" "}
                        {item.toUpperCase()}
                      </span>

                      <span className="text-indigo-600">
                        READY
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>
          </section>

          {/* =========================================================
              9. PERFORMANCE
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-[#060911] border-t border-slate-800/80">

            <div className="max-w-6xl mx-auto space-y-16">

              <div className="space-y-4 max-w-3xl">

                <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                  08 / PERFORMANCE ENGINEERING
                </span>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  Performance Engineering for {service.name}
                </h2>

                <p className="text-slate-400 text-base font-light">
                  Performance is considered throughout architecture, implementation, asset delivery, caching, rendering, and deployment rather than treated as a final-stage optimization.
                </p>

              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono border-y border-slate-800 py-12">

                {[
                  ["LCP", "Largest Contentful Paint"],
                  ["INP", "Interaction to Next Paint"],
                  ["CLS", "Cumulative Layout Shift"],
                  ["TTFB", "Time to First Byte"],
                ].map(([metric, label]) => (

                  <div
                    key={metric}
                    className="space-y-2"
                  >

                    <span className="text-3xl md:text-5xl font-bold text-indigo-400">
                      {metric}
                    </span>

                    <p className="text-xs text-white font-bold uppercase">
                      {label}
                    </p>

                    <p className="text-[11px] text-slate-500 font-sans">
                      Core performance metric considered during technical implementation and optimization.
                    </p>

                  </div>

                ))}

              </div>

            </div>
          </section>

          {/* =========================================================
              10. PROCESS
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-white text-slate-900">

            <div className="max-w-4xl mx-auto space-y-16">

              <div className="space-y-4 text-center">

                <span className="font-mono text-xs text-indigo-600 tracking-widest uppercase block">
                  09 / LIFECYCLE
                </span>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  {service.name} Process
                </h2>

              </div>

              <div className="space-y-8 border-l border-slate-200 pl-6 md:pl-10 ml-4 md:ml-0">

                {process.map((item, idx) => (

                  <div
                    key={idx}
                    className="relative space-y-2 group"
                  >

                    <div
                      className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors"
                      aria-hidden="true"
                    />

                    <span className="font-mono text-xs text-indigo-600 block">
                      {item.step || String(idx + 1).padStart(2, "0")} / STAGE
                    </span>

                    <h3 className="text-xl font-bold">
                      {item.name}
                    </h3>

                    <p className="text-slate-600 text-sm font-light leading-relaxed max-w-2xl">
                      {item.description}
                    </p>

                  </div>

                ))}

              </div>

            </div>
          </section>

          {/* =========================================================
              11. USE CASES
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-[#060911] border-t border-slate-800/80">

            <div className="max-w-6xl mx-auto space-y-16">

              <div className="space-y-4">

                <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                  10 / USE CASES
                </span>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  {service.name} Use Cases
                </h2>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {useCases.map((item, idx) => (

                  <article
                    key={idx}
                    className="group p-8 bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 transition-all rounded-xl space-y-4"
                  >

                    <span className="font-mono text-xs text-indigo-400 block">
                      {String(idx + 1).padStart(2, "0")} / USE CASE
                    </span>

                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>

                  </article>

                ))}

              </div>

            </div>
          </section>

          {/* =========================================================
              12. DELIVERABLES
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-white text-slate-900">

            <div className="max-w-6xl mx-auto space-y-16">

              <div className="space-y-4 max-w-3xl">

                <span className="font-mono text-xs text-indigo-600 tracking-widest uppercase block">
                  11 / DELIVERABLES
                </span>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  {service.name} Deliverables
                </h2>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {deliverables.map((item, idx) => (

                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 border border-slate-200 rounded-xl"
                  >

                    <span className="font-mono text-xs text-indigo-600 mt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span className="text-slate-700 text-sm">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>
          </section>

          {/* =========================================================
              13. FAQ
          ========================================================= */}

          <section className="py-32 px-6 md:px-16 bg-[#060911] border-t border-slate-800/80">

            <div className="max-w-4xl mx-auto space-y-16">

              <div className="space-y-4">

                <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                  12 / KNOWLEDGE BASE
                </span>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                  {service.name} FAQs
                </h2>

              </div>

              <FaqAccordion faqs={service.faqs || []} />

            </div>
          </section>

          {/* =========================================================
              14. INTERNAL NAVIGATION
          ========================================================= */}

          <section className="py-24 px-6 md:px-16 bg-white text-slate-900 border-t border-slate-200">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">

              {/* Related Services */}
              <div className="space-y-4">

                <h3 className="font-mono text-xs text-indigo-600 uppercase font-bold tracking-wider">
                  Related Services
                </h3>

                <ul className="space-y-3 text-sm">

                  {relatedServices.map((item, idx) => (

                    <li key={idx}>

                      <Link
                        href={`/services/${item.slug}`}
                        className="text-slate-700 hover:text-indigo-600 focus:outline-none focus:underline transition-colors flex items-center space-x-2"
                      >
                        <span aria-hidden="true">
                          &rarr;
                        </span>

                        <span>
                          {item.name}
                        </span>
                      </Link>

                    </li>

                  ))}

                </ul>
              </div>

              {/* Related Industries */}
              <div className="space-y-4">

                <h3 className="font-mono text-xs text-indigo-600 uppercase font-bold tracking-wider">
                  Relevant Industries
                </h3>

                <ul className="space-y-3 text-sm">

                  {relatedIndustries.map((item, idx) => (

                    <li key={idx}>

                      <Link
                        href={`/industries/${item.slug}`}
                        className="text-slate-700 hover:text-indigo-600 focus:outline-none focus:underline transition-colors flex items-center space-x-2"
                      >
                        <span aria-hidden="true">
                          &rarr;
                        </span>

                        <span>
                          {item.name}
                        </span>
                      </Link>

                    </li>

                  ))}

                </ul>
              </div>

              {/* Related Articles */}
              <div className="space-y-4">

                <h3 className="font-mono text-xs text-indigo-600 uppercase font-bold tracking-wider">
                  Engineering Insights
                </h3>

                <ul className="space-y-3 text-sm">

                  {relatedArticles.map((item, idx) => (

                    <li key={idx}>

                      <Link
                        href={`/blog/${item.slug}`}
                        className="text-slate-700 hover:text-indigo-600 focus:outline-none focus:underline transition-colors flex items-center space-x-2"
                      >
                        <span aria-hidden="true">
                          &rarr;
                        </span>

                        <span>
                          {item.title}
                        </span>
                      </Link>

                    </li>

                  ))}

                </ul>
              </div>

            </div>
          </section>

          {/* =========================================================
              15. FINAL CTA
          ========================================================= */}

          <section className="py-36 px-6 md:px-16 bg-gradient-to-b from-[#060911] via-[#090e1a] to-[#060911] text-white text-center border-t border-slate-800/80 relative overflow-hidden">

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="max-w-4xl mx-auto space-y-8 relative z-10">

              <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block">
                LET&apos;S BUILD THE NEXT SYSTEM
              </span>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Build a Digital Platform Around Your Business
              </h2>

              <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
                Partner with WebMash Labs for {service.name.toLowerCase()} engineered around your business requirements, users, technical architecture, and growth objectives.
              </p>

              <div className="pt-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 bg-white hover:bg-slate-200 text-slate-950 font-medium px-9 py-5 rounded-full transition-all text-base tracking-wide shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <span>
                    Initialize Consultation
                  </span>

                  <ArrowRight
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </Link>

              </div>

            </div>
          </section>

        </main>
      </div>
    </>
  );
}