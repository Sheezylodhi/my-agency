import {
  ArrowUpRight,
  Sparkles,
  Target,
  Code2,
  LineChart,
  ShieldCheck,
  Workflow,
  Gauge,
  Search,
} from "lucide-react";

export const metadata = {
  title: "About WebMash Labs | Elite Web Design & Full-Stack Engineering",
  description:
    "Discover WebMash Labs, a senior-led digital engineering and design studio building high-performance websites, SaaS platforms, and digital infrastructure for ambitious businesses.",
  keywords: [
    "WebMash Labs",
    "web development agency",
    "web design agency",
    "full stack development",
    "Next.js development",
    "React development",
    "SaaS development",
    "digital agency",
    "enterprise web development",
  ],
  authors: [{ name: "WebMash Labs" }],
  creator: "WebMash Labs",
  publisher: "WebMash Labs",
  alternates: {
    canonical: "https://webmashlabs.com/about-us",
  },
  openGraph: {
    title: "About WebMash Labs | Digital Engineering & Design Studio",
    description:
      "WebMash Labs builds high-performance digital experiences, web applications, and scalable digital infrastructure for ambitious businesses.",
    url: "https://webmashlabs.com/about-us",
    siteName: "WebMash Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About WebMash Labs | Digital Engineering & Design Studio",
    description:
      "Meet WebMash Labs — a senior-led engineering and design studio building high-performance digital experiences.",
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
};

const philosophy = [
  {
    num: "01",
    title: "Strategy Before Design",
    desc: "A stunning interface that fails to convert is an expensive decoration. We dissect your business model, customer psychology, and acquisition funnels before crafting a single layout.",
    icon: Target,
  },
  {
    num: "02",
    title: "Design With Purpose",
    desc: "Inspired by modern product leaders, our experiences prioritize visual clarity, precise typography, and purposeful micro-interactions. Every pixel earns its right to exist.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Engineering Without Limits",
    desc: "Engineered on resilient stacks like Next.js, React, and modern cloud infrastructure. We write maintainable, performance-focused code designed for scale.",
    icon: Code2,
  },
  {
    num: "04",
    title: "Business First",
    desc: "We measure our work through commercial impact. Whether scaling SaaS platforms or capturing enterprise accounts, technology exists to support your business goals.",
    icon: LineChart,
  },
];

const timeline = [
  {
    year: "2020",
    title: "Foundation & Core Engineering",
    desc: "Established as an independent engineering studio focused on high-performance web applications and bespoke digital architecture.",
  },
  {
    year: "2022",
    title: "Enterprise SaaS Expansion",
    desc: "Expanded internationally, partnering with technology companies to build secure cloud applications and scalable digital ecosystems.",
  },
  {
    year: "2024",
    title: "WebMash Labs Rebrand",
    desc: "Unified advanced UI/UX design with full-stack engineering under the WebMash Labs studio model.",
  },
  {
    year: "2026+",
    title: "Next-Gen Digital Infrastructure",
    desc: "Building AI-integrated workflows, edge-optimized deployments, and high-performance interactive digital experiences.",
  },
];

const stats = [
  {
    value: "140+",
    label: "Projects Delivered Globally",
  },
  {
    value: "98%",
    label: "Long-term Client Retention",
  },
  {
    value: "99",
    label: "Core Web Vitals Benchmark",
  },
];

const trustItems = [
  {
    title: "Verified Process",
    desc: "Rigorous agile sprints and transparent communication from discovery to launch.",
    icon: Workflow,
  },
  {
    title: "Long-term Partnership",
    desc: "Ongoing support and strategic development for businesses that continue to evolve.",
    icon: Target,
  },
  {
    title: "Performance Optimized",
    desc: "Performance-focused architecture designed around fast loading and strong Core Web Vitals.",
    icon: Gauge,
  },
  {
    title: "SEO Ready",
    desc: "Structured metadata, semantic HTML, clean architecture, and technical SEO foundations.",
    icon: Search,
  },
  {
    title: "Security First",
    desc: "Modern security practices and carefully designed infrastructure for reliable applications.",
    icon: ShieldCheck,
  },
  {
    title: "Senior Leadership",
    desc: "Direct involvement from experienced developers and decision-makers throughout the project.",
    icon: Code2,
  },
];

function Reveal({ children, className = "" }) {
  return (
    <div className={`about-reveal ${className}`}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebMash Labs",
    url: "https://webmashlabs.com",
    description:
      "WebMash Labs is a digital engineering and design studio specializing in high-performance websites, full-stack applications, and scalable digital infrastructure.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main className="w-full overflow-hidden bg-[#0F172A] text-white selection:bg-[#2563EB] selection:text-white">
        {/* GLOBAL TEXTURE */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.025] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section
          className="relative flex min-h-[760px] w-full items-center justify-center overflow-hidden bg-[#0F172A] px-6 py-28 sm:min-h-[800px] sm:px-12 lg:px-20"
          aria-labelledby="about-hero-title"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.22),transparent_60%)]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute left-1/2 top-[25%] h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/20 blur-[130px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute right-[12%] top-[18%] hidden h-32 w-32 rounded-3xl border border-white/10 bg-white/[0.02] shadow-[0_20px_50px_rgba(37,99,235,0.15)] backdrop-blur-xl lg:block"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute bottom-[22%] left-[10%] hidden h-24 w-24 rounded-full border border-white/10 bg-white/[0.02] shadow-[0_20px_50px_rgba(37,99,235,0.15)] backdrop-blur-xl lg:block"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto w-full max-w-[1400px]">
            <div className="max-w-[1150px]">
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 shadow-[0_0_30px_rgba(37,99,235,0.15)] backdrop-blur-md">
                <Sparkles
                  className="h-4 w-4 text-[#2563EB]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#CBD5E1]">
                  WebMash Labs Studio &bull; Architectural Authority
                </span>
              </div>

              <h1
                id="about-hero-title"
                className="max-w-[1150px] text-balance text-[clamp(3.2rem,7.5vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.055em] text-white"
              >
                We architect the digital apex for market leaders.
              </h1>

              <p className="mt-10 max-w-[64ch] text-lg font-light leading-relaxed text-[#CBD5E1] sm:text-2xl">
                WebMash Labs is an elite engineering and design studio. We
                dismantle commoditized templates to construct uncompromising
                digital infrastructure that creates measurable business
                impact.
              </p>

              <div className="mt-14 flex flex-wrap items-center gap-8">
                <a
                  href="#genesis"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-10 py-5 text-lg font-medium text-white shadow-[0_0_50px_rgba(37,99,235,0.4)] transition-transform duration-300 hover:scale-[1.02] hover:bg-[#1d4ed8] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-[#0F172A]"
                >
                  <span>Enter Our Genesis</span>

                  <ArrowUpRight
                    className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>

                <div className="flex items-center gap-3">
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />

                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8]">
                    Global Enterprise Grade &bull; Senior-Led
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* GENESIS */}
        {/* ===================================================== */}

        <section
          id="genesis"
          className="relative w-full overflow-hidden bg-[#F8FAFC] py-32 text-[#0F172A] sm:py-44 lg:py-52"
          aria-labelledby="genesis-title"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#2563EB_1px,transparent_1px)] [background-size:40px_40px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
            <Reveal className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1.5 shadow-sm">
                  <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#64748B]">
                    Genesis &bull; Who We Are
                  </span>
                </div>

                <h2
                  id="genesis-title"
                  className="text-balance text-[clamp(2.6rem,4.8vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-[#0F172A]"
                >
                  Built because standard agencies treat digital assets as
                  commodities.
                </h2>
              </div>

              <div className="space-y-8 text-lg font-light leading-relaxed text-[#475569] sm:text-xl">
                <p>
                  Most businesses struggle online not because of their core
                  product, but because their digital touchpoints introduce
                  friction. Sluggish interactions, bloated codebases, and
                  generic layouts steadily erode client confidence.
                </p>

                <p>
                  WebMash Labs was founded to eliminate that compromise. We
                  combine rigorous full-stack engineering with refined digital
                  design to transform websites and applications into reliable
                  commercial assets.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================================================== */}
        {/* PHILOSOPHY */}
        {/* ===================================================== */}

        <section
          className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#0F172A] py-32 text-white sm:py-44"
          aria-labelledby="philosophy-title"
        >
          <div
            className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#2563EB]/10 blur-[150px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
            <Reveal className="mb-20 max-w-[850px] sm:mb-28">
              <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#94A3B8]">
                Core Philosophy
              </span>

              <h2
                id="philosophy-title"
                className="mt-6 text-balance text-[clamp(2.8rem,5.2vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.045em]"
              >
                Uncompromising principles that guide our craft.
              </h2>
            </Reveal>

            <div className="space-y-20 sm:space-y-28">
              {philosophy.map((item) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.num}
                    className="grid gap-10 border-b border-white/[0.08] pb-20 lg:grid-cols-[1fr_1.6fr] lg:items-start sm:pb-24"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-base font-bold tracking-[0.3em] text-[#2563EB]">
                        {item.num}
                      </span>

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] shadow-[0_10px_30px_rgba(37,99,235,0.2)]">
                        <Icon
                          className="h-7 w-7 text-[#2563EB]"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {item.title}
                      </h3>

                      <p className="mt-6 max-w-[58ch] text-lg font-light leading-relaxed text-[#CBD5E1] sm:text-xl">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* TIMELINE */}
        {/* ===================================================== */}

        <section
          className="relative w-full overflow-hidden bg-[#F8FAFC] py-32 text-[#0F172A] sm:py-44"
          aria-labelledby="timeline-title"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(37,99,235,0.04),transparent_50%)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
            <Reveal className="mb-20 max-w-[850px] sm:mb-28">
              <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#64748B]">
                Evolutionary Trajectory
              </span>

              <h2
                id="timeline-title"
                className="mt-6 text-balance text-[clamp(2.8rem,5.2vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.045em]"
              >
                A precise lineage of relentless elevation.
              </h2>
            </Reveal>

            <div className="relative ml-4 space-y-20 border-l-2 border-[#2563EB]/30 pl-8 sm:ml-12 sm:space-y-24 sm:pl-20">
              {timeline.map((item) => (
                <Reveal key={item.year} className="relative">
                  <div
                    className="absolute -left-[41px] top-2 h-5 w-5 rounded-full bg-[#2563EB] ring-8 ring-[#F8FAFC] shadow-[0_0_20px_rgba(37,99,235,0.6)] sm:-left-[89px]"
                    aria-hidden="true"
                  />

                  <span className="font-mono text-base font-bold tracking-[0.3em] text-[#2563EB]">
                    {item.year}
                  </span>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[65ch] text-lg font-light leading-relaxed text-[#475569] sm:text-xl">
                    {item.desc}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* NUMBERS */}
        {/* ===================================================== */}

        <section
          className="relative w-full border-t border-white/[0.08] bg-[#0F172A] py-28 text-white sm:py-40"
          aria-labelledby="numbers-title"
        >
          <h2 id="numbers-title" className="sr-only">
            WebMash Labs in numbers
          </h2>

          <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
              {stats.map((stat) => (
                <Reveal key={stat.label}>
                  <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.01] p-8">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-[#2563EB]/10 to-transparent"
                      aria-hidden="true"
                    />

                    <p className="relative text-[clamp(4.5rem,8vw,8rem)] font-extrabold leading-none tracking-tight">
                      {stat.value}
                    </p>

                    <p className="relative mt-6 font-mono text-xs uppercase tracking-[0.3em] text-[#94A3B8]">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* CULTURE */}
        {/* ===================================================== */}

        <section
          className="relative w-full overflow-hidden bg-[#F8FAFC] py-32 text-[#0F172A] sm:py-44"
          aria-labelledby="culture-title"
        >
          <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
            <Reveal className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#64748B]">
                  Culture & Craft
                </span>

                <h2
                  id="culture-title"
                  className="mt-6 text-balance text-[clamp(2.6rem,4.8vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.045em]"
                >
                  Obsessive attention to architectural excellence.
                </h2>

                <p className="mt-8 text-lg font-light leading-relaxed text-[#475569] sm:text-xl">
                  Extraordinary software is born from focused deep work and
                  zero unnecessary complexity. Our studio environment is
                  designed for clarity, creative rigor, and reliable digital
                  execution.
                </p>
              </div>

              <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-[36px] border border-[#E2E8F0] bg-[#0F172A] p-10 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:min-h-[440px] sm:p-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#2563EB_1px,transparent_1px)] [background-size:32px_32px]"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/30 blur-[100px]"
                  aria-hidden="true"
                />

                <div className="relative z-10 max-w-[400px] text-center">
                  <span className="mb-4 block font-mono text-xs uppercase tracking-[0.35em] text-[#2563EB]">
                    Studio Mandate
                  </span>

                  <p className="text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
                    &ldquo;Simplicity is the ultimate sophistication.&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================================================== */}
        {/* FOUNDER */}
        {/* ===================================================== */}

        <section
          className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#0F172A] py-32 text-white sm:py-44"
          aria-labelledby="founder-title"
        >
          <div
            className="pointer-events-none absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[#2563EB]/10 blur-[180px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
            <Reveal className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-16">
              <div className="relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:min-h-[480px] sm:p-12">
                <div
                  className="pointer-events-none absolute right-8 top-0 select-none font-mono text-8xl font-bold text-[#2563EB]/20"
                  aria-hidden="true"
                >
                  Z
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#2563EB]">
                    Executive Leadership
                  </span>

                  <h3 className="mt-8 text-4xl font-bold tracking-tight">
                    Zaib
                  </h3>

                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-[#94A3B8]">
                    Founder & Principal Architect
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#CBD5E1] sm:text-xs">
                     WEBMASH LABS
                  </span>

                  <span className="font-serif text-2xl italic text-[#2563EB]">
                    Zaib.
                  </span>
                </div>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#94A3B8]">
                  Founder&apos;s Perspective
                </span>

                <h2 id="founder-title" className="sr-only">
                  Founder&apos;s Perspective
                </h2>

                <blockquote className="mt-8 text-[clamp(1.6rem,3vw,2.6rem)] font-light leading-[1.3] tracking-[-0.02em]">
                  &ldquo;When we partner with a client, we don&apos;t simply
                  hand over files—we assume absolute custodianship of their
                  digital presence. Every line of code is engineered to
                  support long-term growth.&rdquo;
                </blockquote>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================================================== */}
        {/* TRUST */}
        {/* ===================================================== */}

        <section
          className="relative w-full bg-[#F8FAFC] py-32 text-[#0F172A] sm:py-44"
          aria-labelledby="trust-title"
        >
          <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20">
            <Reveal className="mb-20 max-w-[850px] sm:mb-24">
              <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#64748B]">
                Enterprise Trust
              </span>

              <h2
                id="trust-title"
                className="mt-6 text-balance text-[clamp(2.8rem,5.2vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.045em]"
              >
                Absolute credibility embedded in our architecture.
              </h2>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title}>
                    <article className="group relative h-full rounded-[32px] border border-[#E2E8F0] bg-white p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_30px_70px_rgba(37,99,235,0.1)] sm:p-10">
                      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#EFF6FF] text-[#2563EB] shadow-sm transition-all duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                        <Icon
                          className="h-6 w-6"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="text-2xl font-bold tracking-tight text-[#0F172A]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-base font-light leading-relaxed text-[#475569]">
                        {item.desc}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* CTA */}
        {/* ===================================================== */}

        <section
          className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#0F172A] py-32 text-center text-white sm:py-44"
          aria-labelledby="cta-title"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.2),transparent_70%)]"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[1050px] px-6 sm:px-12 lg:px-20">
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#94A3B8]">
                Initiate Partnership
              </span>

              <h2
                id="cta-title"
                className="mt-6 text-balance text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.055em]"
              >
                Ready to build something extraordinary?
              </h2>

              <p className="mx-auto mt-8 max-w-[56ch] text-lg font-light leading-relaxed text-[#CBD5E1] sm:text-2xl">
                Book an introductory discovery session with our principal
                engineers. Let&apos;s architect your next digital advantage.
              </p>

              <div className="mt-14 flex justify-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#2563EB] px-10 py-5 text-lg font-medium text-white shadow-[0_0_50px_rgba(37,99,235,0.45)] transition-transform duration-300 hover:scale-[1.02] hover:bg-[#1d4ed8] hover:shadow-[0_0_70px_rgba(37,99,235,0.65)] focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-[#0F172A] sm:px-12 sm:py-6"
                >
                  <span>Schedule Discovery Session</span>

                  <ArrowUpRight
                    className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}