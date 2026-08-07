import Link from "next/link";
import {
  HeartPulse,
  Building2,
  ShoppingBag,
  Landmark,
  Cpu,
  Factory,
  Truck,
  GraduationCap,
  BriefcaseBusiness,
  Hotel,
  HardHat,
  Car,
  Scale,
  Clapperboard,
  Utensils,
  HandHeart,
  Boxes,
  Rocket ,
  Zap,
  Dumbbell,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ZapIcon,
  Layers,
  Globe2,
  Code2
} from "lucide-react";

export const metadata = {
  title: "Industries We Serve | WebMash Labs",
  description: "We engineer bespoke websites, platforms, portals, and custom software tailored to the unique operational realities of 18+ global industries.",
  alternates: {
    canonical: "https://webmashlabs.com/industries"
  },
  openGraph: {
    title: "Industries We Serve | WebMash Labs",
    description: "Discover how our custom engineering and UI/UX design solutions drive growth across healthcare, fintech, SaaS, real estate, and more.",
    url: "https://webmashlabs.com/industries",
    type: "website"
  }
};

const industries = [
  {
    number: "01",
    title: "Healthcare & Medical",
    slug: "healthcare",
    description: "Patient portals, appointment workflows, healthcare websites, and secure digital experiences.",
    icon: HeartPulse,
    tags: ["Patient Portals", "Healthcare UX", "Secure Systems"]
  },
  {
    number: "02",
    title: "Real Estate",
    slug: "real-estate",
    description: "Property listings platforms, CRM integrations, interactive maps, and virtual tour systems.",
    icon: Building2,
    tags: ["Listing Engines", "Virtual Tours", "CRM Sync"]
  },
  {
    number: "03",
    title: "E-Commerce & Retail",
    slug: "ecommerce-retail",
    description: "High-conversion storefronts, headless architectures, inventory systems, and checkout flows.",
    icon: ShoppingBag,
    tags: ["Headless Commerce", "Payment Gateways", "Conversion Optimization"]
  },
  {
    number: "04",
    title: "Finance & FinTech",
    slug: "finance-fintech",
    description: "Secure banking portals, transaction dashboards, cryptographic workflows, and compliance tools.",
    icon: Landmark,
    tags: ["Secure Portals", "Financial Dashboards", "Compliance"]
  },
  {
    number: "05",
    title: "SaaS & Technology",
    slug: "saas-technology",
    description: "Scalable web applications, high-performance marketing pages, and complex user dashboards.",
    icon: Cpu,
    tags: ["Web Apps", "Cloud Architecture", "UI Design Systems"]
  },
  {
    number: "06",
    title: "Manufacturing & Industrial",
    slug: "manufacturing",
    description: "Supply chain portals, equipment tracking software, and B2B distributor catalogs.",
    icon: Factory,
    tags: ["Supply Chain", "B2B Portals", "Inventory Tools"]
  },
  {
    number: "07",
    title: "Logistics & Transportation",
    slug: "logistics-transportation",
    description: "Fleet tracking dashboards, shipping portals, route optimization tools, and client trackers.",
    icon: Truck,
    tags: ["Fleet Dashboards", "Real-time Tracking", "Dispatch Tools"]
  },
  {
    number: "08",
    title: "Education & EdTech",
    slug: "education-elearning",
    description: "Learning management systems, interactive student portals, and virtual course platforms.",
    icon: GraduationCap,
    tags: ["LMS Platforms", "Student Portals", "Interactive UI"]
  },
  {
    number: "09",
    title: "Professional Services",
    slug: "professional-services",
    description: "Client intake portals, booking engines, secure document vaults, and advisory websites.",
    icon: BriefcaseBusiness,
    tags: ["Client Portals", "Booking Systems", "Secure Vaults"]
  },
  {
    number: "10",
    title: "Hospitality & Travel",
    slug: "hospitality-travel",
    description: "Booking engines, reservation management, interactive itineraries, and luxury web design.",
    icon: Hotel,
    tags: ["Booking Engines", "Reservation Sync", "Luxury Design"]
  },
  {
    number: "11",
    title: "Construction & Engineering",
    slug: "construction-architecture",
    description: "Project management dashboards, blueprint viewers, contractor portals, and bidding systems.",
    icon: HardHat,
    tags: ["Project Management", "Contractor Portals", "Blueprint Tools"]
  },
  {
    number: "12",
    title: "Automotive",
    slug: "automotive",
    description: "Vehicle configurators, dealership inventories, parts catalogs, and service booking apps.",
    icon: Car,
    tags: ["Vehicle Configurator", "Inventory Search", "Service Booking"]
  },
  {
    number: "13",
    title: "Legal Services",
    slug: "legal-services",
    description: "Secure case management, client intake workflows, document automation, and firm websites.",
    icon: Scale,
    tags: ["Case Management", "Client Intake", "Secure Docs"]
  },
  {
    number: "14",
    title: "Media & Entertainment",
    slug: "marketing-media",
    description: "Content streaming platforms, digital asset managers, portfolio showcases, and fan portals.",
    icon: Clapperboard,
    tags: ["Streaming UIs", "Digital Assets", "Portfolio Sites"]
  },
  {
    number: "15",
    title: "Nonprofit & Organizations",
    slug: "nonprofit-organizations",
    description: "Donation platforms, volunteer management systems, impact report sites, and community portals.",
    icon: HandHeart,
    tags: ["Donation Engines", "Volunteer Portals", "Impact Reporting"]
  },
  {
    number: "16",
    title: "B2B & Wholesale",
    slug: "b2b-wholesale",
    description: "Custom wholesale portals, tiered pricing engines, bulk ordering workflows, and ERP sync.",
    icon: Boxes,
    tags: ["Wholesale Portals", "Tiered Pricing", "ERP Integration"]
  },
  {
    number: "17",
    title: "Energy & Utilities",
    slug: "energy-utilities",
    description: "Grid monitoring dashboards, consumption analytics portals, and sustainability tracking tools.",
    icon: Zap,
    tags: ["Grid Monitoring", "Analytics Portals", "Sustainability"]
  },
  {
    number: "18",
    title: "Fitness & Wellness",
    slug: "fitness-wellness",
    description: "Member management apps, workout scheduling systems, wellness blogs, and ecommerce hubs.",
    icon: Dumbbell,
    tags: ["Member Apps", "Scheduling Engines", "Wellness Hubs"]
  },
  {
    number: "19",
    title: "Restaurant & Food Service",
    slug: "restaurants-food",
    description: "Online ordering platforms, table reservation systems, digital menus, and loyalty apps.",
    icon: Utensils,
    tags: ["Online Ordering", "Table Reservations", "Digital Menus"]
  },
  {
    number: "20",
    title: "Startups & Scaleups",
    slug: "startups",
    description: "High-velocity MVPs, scalable web platforms, investor-ready demos, and rapid prototyping.",
    icon: Rocket,
    tags: ["MVP Development", "Rapid Prototyping", "Scalable Tech"]
  }
];

export default function IndustriesPage() {
  const featuredIndustries = industries.slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* 1. HERO SECTION (DARK) */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#020617] overflow-hidden border-b border-slate-800/60">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[40rem] h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Industry-Specific Expertise</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Digital systems built around the way your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">industry works</span>.
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                We engineer websites, platforms, portals, dashboards, and custom software around the operational realities of the industries we serve.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] transition-all duration-200 text-base"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="#directory"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-200 font-semibold hover:bg-slate-800 hover:text-white transition-all duration-200 text-base"
                >
                  Explore Industries
                </Link>
              </div>
            </div>

            {/* Right Column: Abstract Industry Ecosystem Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                {/* Orbital Rings */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-indigo-500/15 border-dashed animate-[spin_30s_linear_infinite_reverse]" />
                
                {/* Glowing Core */}
                <div className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 blur-xl opacity-40 animate-pulse" />
                <div className="relative z-10 w-28 h-28 rounded-2xl bg-slate-900/90 border border-blue-500/30 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/20 text-center p-3">
                  <Cpu className="w-8 h-8 text-blue-400 mb-1" />
                  <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">WebMash</span>
                  <span className="text-[8px] text-cyan-400 font-medium">CORE ENGINE</span>
                </div>

                {/* Floating Node 1: Healthcare */}
                <div className="absolute top-2 left-6 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-xl flex items-center gap-2 animate-bounce duration-1000">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  HEALTHCARE
                </div>

                {/* Floating Node 2: FinTech */}
                <div className="absolute top-8 right-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  FINTECH
                </div>

                {/* Floating Node 3: SaaS */}
                <div className="absolute bottom-12 left-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  SAAS
                </div>

                {/* Floating Node 4: Logistics */}
                <div className="absolute bottom-4 right-8 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  LOGISTICS
                </div>

                {/* Floating Node 5: Real Estate */}
                <div className="absolute top-1/2 -left-6 -translate-y-1/2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-xl hidden sm:flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  REAL ESTATE
                </div>

                {/* Floating Node 6: Retail */}
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-xl hidden sm:flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  RETAIL
                </div>
              </div>
            </div>

          </div>

          {/* 4. HERO MICRO-STATS */}
          <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">18+</p>
              <p className="text-sm text-slate-400 font-medium">Industries Served</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">3+</p>
              <p className="text-sm text-slate-400 font-medium">Years Engineering</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Custom</p>
              <p className="text-sm text-slate-400 font-medium">Digital Systems</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Global</p>
              <p className="text-sm text-slate-400 font-medium">Client Delivery</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTRODUCTION SECTION — LIGHT */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Industry-Focused Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Technology should adapt to your business — not the other way around.
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-6 text-slate-600 text-lg leading-relaxed font-normal">
              <p>
                Every industry operates under unique pressures: complex regulatory environments, specialized client expectations, legacy infrastructure, and distinct internal workflows. Generic software solutions and cookie-cutter website templates consistently fail to capture these nuances.
              </p>
              <p>
                At WebMash Labs, we design and engineer custom web applications, high-performance platforms, and specialized digital experiences around the actual mechanics of your market. By combining deep technical architecture with rigorous UI/UX research, we build digital assets that streamline operations and accelerate growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FEATURED INDUSTRIES — LIGHT SECTION */}
      <section className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Built for complex industries.
            </h2>
            <p className="text-lg text-slate-600">
              From customer-facing experiences to operational software, we design digital systems around the workflows that make each industry unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredIndustries.map((ind) => {
              const IconComponent = ind.icon;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group relative bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                        {ind.number}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {ind.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {ind.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 flex items-center justify-between border-t border-slate-100 mt-6">
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Explore industry
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. PREMIUM INDUSTRY VISUAL (SPLIT SECTION) */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Engineering Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                One engineering standard. Different industry realities.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Whether deploying a high-security patient management platform for healthcare or a high-volume storefront for retail, our core engineering pipeline remains uncompromised. We maintain rigorous standards across every touchpoint of digital product delivery.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "Strategy & Discovery",
                  "UX Architecture",
                  "Frontend Engineering",
                  "Backend Systems",
                  "API Integrations",
                  "Workflow Automation",
                  "Performance Tuning",
                  "Enterprise Security"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-800 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="w-full bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="relative z-10 space-y-6 text-center max-w-md mx-auto">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                    <Code2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">WebMash Labs Engineering Core</h3>
                    <p className="text-sm text-slate-600">
                      Centralized architecture standards applied universally across all 18 vertical sectors.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-around text-xs font-semibold text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Secure Architecture</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ZapIcon className="w-4 h-4 text-amber-500" />
                      <span>Sub-Second Speed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8 & 9. FULL INDUSTRY DIRECTORY */}
      <section id="directory" className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Complete Directory</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Explore all industries we serve
              </h2>
              <p className="text-lg text-slate-600">
                Click any industry below to examine specialized engineering capabilities and bespoke workflows.
              </p>
            </div>
            <div className="text-sm font-semibold text-slate-500">
              Showing 1–18 Industries
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
            {industries.map((ind) => {
              const IconComponent = ind.icon;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 sm:p-8 hover:bg-slate-50/80 transition-all duration-200 gap-6"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <span className="text-sm font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors w-8">
                      {ind.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200 flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 block md:hidden">
                        {ind.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1 max-w-xl px-8">
                    <p className="text-sm text-slate-600 font-normal line-clamp-1">
                      {ind.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity mr-4 hidden sm:flex">
                      <span>View Industry Details</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:translate-x-1 transition-all duration-200 ml-auto md:ml-0">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. INDUSTRY CAPABILITY SECTION — LIGHT */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Different industries. Shared engineering principles.
            </h2>
            <p className="text-lg text-slate-600">
              The foundational pillars that guarantee stability, speed, and scalability across all our development engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                title: "Performance",
                desc: "Fast, scalable experiences designed for real-world traffic spikes and low latency.",
                icon: ZapIcon
              },
              {
                num: "02",
                title: "Security",
                desc: "Thoughtful architecture, granular authentication, permissions, and robust data protection.",
                icon: ShieldCheck
              },
              {
                num: "03",
                title: "Integration",
                desc: "Connect your website or web application with the CRM, ERP, and payment systems your business already uses.",
                icon: Layers
              },
              {
                num: "04",
                title: "Scalability",
                desc: "Build rock-solid digital foundations that expand seamlessly with your users, transactions, and operations.",
                icon: Globe2
              }
            ].map((cap, i) => {
              const IconC = cap.icon;
              return (
                <div key={i} className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between space-y-6 hover:border-blue-500/40 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                        <IconC className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">{cap.num}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{cap.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 11. SEO SECTION */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Industry-specific digital solutions, engineered for growth.
            </h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-base">
            <p>
              WebMash Labs specializes in delivering comprehensive custom web development, robust web applications, high-performance SaaS platforms, interactive customer portals, and enterprise dashboards. We recognize that businesses in sectors ranging from healthcare and financial technology to real estate, logistics, and retail require more than a standard website—they require resilient digital systems tailored to their operational workflows.
            </p>
            <p>
              By combining meticulous UX design with modern full-stack engineering (Next.js, React, Node.js, and cloud database integration), we bridge the gap between complex industry requirements and seamless digital experiences. Whether you are automating internal business processes, launching a multi-vendor e-commerce platform, or securing sensitive client portals, our engineering team provides end-to-end execution designed for measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA (DARK) */}
      <section className="py-24 bg-[#020617] text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Build?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have an industry-specific challenge?
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Tell us what you're trying to build, improve, automate, or scale. We'll help you turn the requirement into a practical digital system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] transition-all duration-200 text-base"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-800 hover:text-white transition-all duration-200 text-base"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}