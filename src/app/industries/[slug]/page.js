import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Activity,
  Home,
  ShoppingBag,
  Cpu,
  TrendingUp,
  GraduationCap,
  Compass,
  Building2,
  Truck,
  Briefcase,
  Factory,
  Car,
  UtensilsCrossed,
  HandHeart ,
  Rocket ,
  Presentation ,
  RefreshCw ,
  Settings ,
  Lightbulb ,
  Users ,
  PieChart ,
  Globe ,
  Target ,
  CalendarCheck ,
  Scale,
  Megaphone,
  ArrowRight,
  ShieldCheck,
  Boxes,
  Tag ,
  Database ,
  ShoppingCart ,
  Receipt ,
  LayoutDashboard ,
  BarChart3 ,
  Gauge ,
  Leaf,
  Bell ,
  LineChart ,
  Info ,
  UserCircle ,
  CalendarDays ,
  BookOpen ,
  BellRing ,
  CheckCircle2,
  Code2,
  Layers,
  Zap,
  Check,
  HelpCircle
} from "lucide-react";

// ==========================================
// CENTRALIZED INDUSTRIES DATA STORE
// ==========================================
const industries = {
  healthcare: {
    id: "01",
    slug: "healthcare",
    title: "Digital Experiences for Healthcare",
    shortTitle: "Healthcare",
    eyebrow: "01 — HEALTHCARE",
    heroDescription: "Healthcare experiences have to balance clinical clarity, rigid accessibility standards, and absolute security. We engineer resilient digital platforms that help patients, providers, and administrative teams navigate critical care journeys with zero friction.",
    heroAccent: "Engineered for Trust, Privacy & Clarity",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern healthcare technology environment and medical professional reviewing digital platform",
    imageCaption: "Clinical Workflow Modernization — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Advanced digital health dashboard and secure patient portal interface",
    industryIntro: "Healthcare is no longer defined solely by clinical excellence. The digital touchpoints surrounding the patient—from initial booking to post-care portals—fundamentally shape trust, compliance, and continuity of care.",
    challengeTitle: "Where healthcare digital systems break down.",
    challengeDescription: "Legacy infrastructure and disjointed point solutions create immense friction for both patients and healthcare providers.",
    challenges: [
      { number: "01", title: "Fragmented Patient Journeys", description: "Disconnected booking, intake, and records systems create frustrating siloes and administrative overhead." },
      { number: "02", title: "Complex Information Architecture", description: "Dense medical data and broad service catalogs structured poorly lead to high drop-off rates on web properties." },
      { number: "03", title: "Legacy Infrastructure", description: "Outdated backend setups hinder real-time provider communication and secure patient record retrieval." },
      { number: "04", title: "Accessibility & Trust Gaps", description: "Failing to meet strict accessibility standards alienates vulnerable demographic groups and damages institutional credibility." }
    ],
    solutions: [
      { number: "01", title: "Secure Patient Portals", description: "Unified, intuitive dashboards empowering patients to manage records, appointments, and billing securely.", icon: Activity },
      { number: "02", title: "Provider Directories", description: "High-performance search and filtering systems connecting patients with the right clinical specialists instantly.", icon: CheckCircle2 },
      { number: "03", title: "Appointment Platforms", description: "Frictionless scheduling engines synchronized seamlessly with internal practice management software.", icon: Zap },
      { number: "04", title: "Enterprise Healthcare Websites", description: "Scalable, lightning-fast digital flagships optimized for search visibility and patient conversion.", icon: Layers },
      { number: "05", title: "Internal Clinical Dashboards", description: "Streamlined operational interfaces designed to reduce cognitive load for busy medical staff.", icon: Code2 },
      { number: "06", title: "Digital Intake Systems", description: "Paperless, HIPAA-aware onboarding forms that pre-populate electronic health records cleanly.", icon: ShieldCheck }
    ],
    capabilities: [
      "End-to-end encrypted data transit",
      "WCAG 2.1 AA accessibility compliance",
      "HL7 / FHIR integration readiness",
      "High-speed server-side rendering",
      "Role-based authentication architectures"
    ],
    services: [
      { title: "Website Design & Development", description: "High-performance digital flagships engineered for trust and speed.", href: "/services/web-design-development" },
      { title: "Custom Web Applications", description: "Secure portals and clinical workflows built for heavy daily usage.", href: "/services/web-applications" },
      { title: "UI/UX & Product Design", description: "Human-centered interfaces simplifying complex medical interactions.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating local and national search for critical healthcare services.", href: "/services/seo" },
      { title: "Business Automation", description: "Eliminating manual form entry and streamlining patient reminders.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze patient, provider, and administrative workflows to map core friction points." },
      { number: "02", title: "Map", description: "Architect secure information hierarchies and intuitive user journeys that prioritize clarity." },
      { number: "03", title: "Design", description: "Craft clean, accessible UI systems that foster absolute confidence and calm." },
      { number: "04", title: "Engineer", description: "Develop robust, scalable web applications with rigorous security protocols." },
      { number: "05", title: "Optimize", description: "Refine performance, accessibility metrics, and search engine visibility continuously." }
    ],
    technology: ["Next.js", "React", "Node.js", "PostgreSQL", "Cloudflare", "Tailwind CSS", "Docker", "REST APIs"],
    outcomes: [
      { number: "01", metric: "FASTER EXPERIENCES", title: "Reduced Load Times", description: "Sub-second page transitions keeping patients engaged across mobile and desktop devices." },
      { number: "02", metric: "CLEARER JOURNEYS", title: "Simplified Intake", description: "Streamlined digital onboarding that drastically lowers administrative error rates." },
      { number: "03", metric: "BETTER ACCESSIBILITY", title: "Inclusive Design", description: "Fully compliant digital interfaces accessible to users of all technical and physical abilities." },
      { number: "04", metric: "SECURE ARCHITECTURE", title: "Protected Data Flow", description: "Resilient infrastructure safeguarding sensitive patient and organizational information." }
    ],
    projectTypes: [
      "Healthcare Corporate Websites",
      "Patient Portals",
      "Specialist Provider Directories",
      "Online Appointment Systems",
      "Clinical Staff Dashboards",
      "Automated Intake Workflows"
    ],
    relatedIndustries: [
      { slug: "saas-technology", title: "SaaS & Technology", shortTitle: "SaaS", description: "Scalable software products and high-conversion landing systems." },
      { slug: "finance-fintech", title: "Finance & FinTech", shortTitle: "Finance", description: "Secure portals and data-heavy customer dashboards." },
      { slug: "education-elearning", title: "Education & E-Learning", shortTitle: "Education", description: "Student portals and interactive learning ecosystems." }
    ],
    faqs: [
      { question: "Can you build secure healthcare portals?", answer: "Yes. We architect our applications with strict role-based access control, encrypted data transmission, and rigorous security hygiene tailored for sensitive environments." },
      { question: "Can you integrate existing healthcare systems?", answer: "We build modular APIs and middleware that connect your frontend digital experience smoothly with existing backend databases and scheduling tools." },
      { question: "Can you redesign an existing healthcare website?", answer: "We perform comprehensive audits of your current web presence, preserving high-value SEO equity while upgrading performance and visual authority." },
      { question: "Do you build accessible healthcare experiences?", answer: "Every healthcare digital product we engineer adheres strictly to WCAG accessibility standards to ensure patients of all capabilities can navigate seamlessly." }
    ],
    metaTitle: "Healthcare Digital Solutions & Web Development | WebMash Labs",
    metaDescription: "WebMash Labs designs and develops high-performance digital experiences, secure portals, and web applications for healthcare organizations."
  },
  
  "real-estate": {
    id: "02",
    slug: "real-estate",
    title: "Digital Experiences for Real Estate",
    shortTitle: "Real Estate",
    eyebrow: "02 — REAL ESTATE",
    heroDescription: "In real estate, visual impact and lightning-fast property discovery drive conversion. We build immersive web platforms, listing engines, and agent portals that captivate buyers and streamline transactions.",
    heroAccent: "Engineered for Property Discovery & Lead Generation",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern luxury real estate architecture and digital property discovery environment",
    imageCaption: "Immersive Property Platforms — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Real estate agent managing listings and client CRM dashboards",
    industryIntro: "Real estate buyers expect immediate access to high-resolution visual data, instant property filtering, and effortless contact channels. Web platforms must balance aesthetic elegance with massive catalog performance.",
    challengeTitle: "Where real estate web platforms fall short.",
    challengeDescription: "Slow listing searches, clunky map integrations, and weak lead capture workflows cost agencies high-value deals every single day.",
    challenges: [
      { number: "01", title: "Sluggish Property Searches", description: "Heavy image loads and unoptimized databases cause frustrating delays when filtering massive listing inventories." },
      { number: "02", title: "Disjointed Lead Capture", description: "Inquiry forms disconnected from CRM tools lead to delayed agent follow-ups and lost prospects." },
      { number: "03", title: "Subpar Mobile Experience", description: "Most property seekers browse on mobile; non-responsive layouts and awkward image galleries ruin engagement." },
      { number: "04", title: "Generic Visual Identity", description: "Template-heavy real estate sites fail to communicate the luxury or modern sophistication of high-end portfolios." }
    ],
    solutions: [
      { number: "01", title: "Advanced Property Platforms", description: "Lightning-fast listing engines with multi-parameter filtering and instant search capabilities.", icon: Home },
      { number: "02", title: "Interactive Map Experiences", description: "Geospatial property discovery tools integrated seamlessly with custom property boundaries.", icon: Compass },
      { number: "03", title: "Agent Portals", description: "Dedicated internal dashboards allowing agents to manage listings, inquiries, and client notes effortlessly.", icon: Briefcase },
      { number: "04", title: "High-Conversion Lead Systems", description: "Strategic booking widgets, virtual tour schedulers, and mortgage calculators driving immediate buyer action.", icon: TrendingUp },
      { number: "05", title: "CRM Integrations", description: "Automated data pipelines routing web leads directly into HubSpot, Salesforce, or custom CRMs.", icon: Zap },
      { number: "06", title: "Development Showcases", description: "Immersive storytelling micro-sites for major residential and commercial real estate developments.", icon: Building2 }
    ],
    capabilities: [
      "High-speed image optimization pipelines",
      "MLS / IDX data feed synchronization",
      "Interactive mapping and geolocation",
      "Advanced lead capture workflows",
      "Mobile-first responsive design systems"
    ],
    services: [
      { title: "Website Design & Development", description: "Stunning property portals built for high visual impact and speed.", href: "/services/web-design-development" },
      { title: "Custom Web Applications", description: "Specialized property management and agent workspaces.", href: "/services/web-applications" },
      { title: "UI/UX & Product Design", description: "Intuitive property search and filtering experiences.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating local real estate search terms and property queries.", href: "/services/seo" },
      { title: "Business Automation", description: "Automating lead distribution and instant viewing notifications.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze buyer demographics, property inventory types, and brokerage sales pipelines." },
      { number: "02", title: "Map", description: "Design frictionless property discovery funnels and inquiry conversion paths." },
      { number: "03", title: "Design", description: "Create editorial, imagery-forward layouts that emphasize architectural beauty and clarity." },
      { number: "04", title: "Engineer", description: "Build high-speed search engines capable of handling thousands of rich media listings." },
      { number: "05", title: "Optimize", description: "Fine-tune asset delivery, mobile touch targets, and SEO metadata for maximum reach." }
    ],
    technology: ["Next.js", "React", "Node.js", "MongoDB", "Mapbox API", "Tailwind CSS", "AWS S3", "Cloudflare"],
    outcomes: [
      { number: "01", metric: "INSTANT DISCOVERY", title: "Lightning Search", description: "Sub-second filtering across thousands of active real estate listings." },
      { number: "02", metric: "HIGHER ENGAGEMENT", title: "Extended Sessions", description: "Immersive visual layouts and smooth galleries keeping buyers engaged longer." },
      { number: "03", metric: "SEAMLESS LEADS", title: "Automated Routing", description: "Instant CRM synchronization ensuring zero dropped inquiries for agents." },
      { number: "04", metric: "BRAND AUTHORITY", title: "Premium Positioning", description: "Sophisticated digital aesthetics that elevate developer and brokerage prestige." }
    ],
    projectTypes: [
      "Real Estate Agency Flagships",
      "Property Listing Portals",
      "Commercial Development Showcases",
      "Agent Recruitment Websites",
      "Interactive Map Search Engines",
      "Client Inquiry & Tour Portals"
    ],
    relatedIndustries: [
      { slug: "construction-architecture", title: "Construction & Architecture", shortTitle: "Construction", description: "Building portfolios and project showcase platforms." },
      { slug: "professional-services", title: "Professional Services", shortTitle: "Services", description: "Authority websites for advisory and consultancy firms." },
      { slug: "finance-fintech", title: "Finance & FinTech", shortTitle: "Finance", description: "Mortgage calculators and secure transaction workflows." }
    ],
    faqs: [
      { question: "Can you integrate MLS or external listing feeds?", answer: "Yes. We build custom API sync engines that pull live property inventories from MLS, IDX, or proprietary property databases into your website." },
      { question: "How do you handle heavy property photo galleries?", answer: "We utilize modern image optimization pipelines, responsive image sizing, and cloud CDN caching to ensure high-res photo grids load instantly without lagging." },
      { question: "Can you build interactive map search features?", answer: "We integrate advanced mapping libraries like Mapbox or Google Maps with custom clustering and polygon filtering for precise property discovery." },
      { question: "Do your real estate websites connect with CRMs?", answer: "We seamlessly connect property inquiry forms with CRMs like HubSpot, Salesforce, or specialized real estate management tools." }
    ],
    metaTitle: "Real Estate Web Development & Property Platforms | WebMash Labs",
    metaDescription: "WebMash Labs designs high-performance real estate websites, property search platforms, and agent portals optimized for lead conversion."
  },

  "ecommerce-retail": {
    id: "03",
    slug: "ecommerce-retail",
    title: "Digital Experiences for E-Commerce & Retail",
    shortTitle: "E-Commerce",
    eyebrow: "03 — E-COMMERCE & RETAIL",
    heroDescription: "In retail, every millisecond of latency and every point of friction directly impacts revenue. We engineer high-performance e-commerce experiences, lightning-fast product catalogs, and frictionless checkout flows.",
    heroAccent: "Engineered for Product Discovery, Conversion & Scale",
    heroImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern e-commerce retail technology environment and digital shopping experience",
    imageCaption: "High-Performance Retail Architecture — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1556742049-0a67d55362a8?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Retail inventory management and digital checkout interface",
    industryIntro: "Modern retail consumers demand instant page loads, intuitive product filtering, and flawless checkout experiences across every device. Brands need resilient digital infrastructure that handles traffic spikes effortlessly.",
    challengeTitle: "Where retail digital platforms lose sales.",
    challengeDescription: "Slow catalog filtering, confusing cart architectures, and generic shopping interfaces drive potential buyers straight to competitors.",
    challenges: [
      { number: "01", title: "High Cart Abandonment", description: "Clunky checkout flows and unexpected friction points cause users to abandon carts before purchase." },
      { number: "02", title: "Catalog Performance Lag", description: "Large inventories with thousands of SKUs bog down search speeds and filter response times." },
      { number: "03", title: "Generic Merchandising", description: "Flat product pages fail to tell a compelling brand story or highlight key product value propositions." },
      { number: "04", title: "Inventory Siloes", description: "Disconnected stock levels between online storefronts and warehouse management systems lead to unfulfilled orders." }
    ],
    solutions: [
      { number: "01", title: "Headless E-Commerce Engines", description: "Blazing-fast storefronts decoupled from rigid backend platforms for ultimate speed and custom UX.", icon: ShoppingBag },
      { number: "02", title: "Instant Product Discovery", description: "Sub-second faceted search and AI-assisted recommendations guiding buyers to exact products.", icon: Zap },
      { number: "03", title: "Optimized Checkout Flows", description: "Streamlined, single-page or express checkout experiences engineered to maximize conversion rates.", icon: CheckCircle2 },
      { number: "04", title: "Immersive Product Showcases", description: "Rich media layouts, interactive galleries, and compelling storytelling modules for high-ticket items.", icon: Layers },
      { number: "05", title: "Inventory & ERP Sync", description: "Robust API pipelines keeping online catalogs synchronized with real-time stock and logistics.", icon: Truck },
      { number: "06", title: "Customer Retention Portals", description: "Self-service subscription management, order tracking, and loyalty reward dashboards.", icon: TrendingUp }
    ],
    capabilities: [
      "Headless commerce architecture (Shopify Plus, WooCommerce, Medusa)",
      "Instant faceted search with Algolia or Typesense",
      "Stripe, PayPal, and multi-currency payment integration",
      "Core Web Vitals optimization for maximum SEO ranking",
      "Automated abandoned cart recovery workflows"
    ],
    services: [
      { title: "E-Commerce Development", description: "Custom storefronts built for speed, scale, and high conversion.", href: "/services/ecommerce" },
      { title: "Website Design & Development", description: "Stunning retail flagships reflecting absolute brand authority.", href: "/services/web-design-development" },
      { title: "UI/UX & Product Design", description: "Frictionless shopping journeys and intuitive category navigation.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating product search queries and outranking retail competitors.", href: "/services/seo" },
      { title: "Business Automation", description: "Automated fulfillment alerts, customer tagging, and inventory sync.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze product catalog complexity, customer buying behaviors, and conversion drop-off points." },
      { number: "02", title: "Map", description: "Architect seamless product discovery funnels and frictionless checkout pathways." },
      { number: "03", title: "Design", description: "Craft visually captivating retail interfaces that highlight product craftsmanship and urgency." },
      { number: "04", title: "Engineer", description: "Build lightning-fast headless or platform-integrated storefronts with robust security." },
      { number: "05", title: "Optimize", description: "Monitor Core Web Vitals, conversion metrics, and search engine positioning continually." }
    ],
    technology: ["Next.js", "Shopify Plus", "Stripe", "Algolia", "Tailwind CSS", "Redis", "Node.js", "PostgreSQL"],
    outcomes: [
      { number: "01", metric: "HIGHER CONVERSION", title: "Streamlined Checkout", description: "Optimized purchase pathways removing friction and boosting completed transactions." },
      { number: "02", metric: "LIGHTNING SPEED", title: "Sub-Second Catalogs", description: "Instant product filtering and page loads ensuring zero buyer frustration." },
      { number: "03", metric: "STRONGER RETENTION", title: "Loyalty Portals", description: "Engaging post-purchase experiences driving repeat customer purchases." },
      { number: "04", metric: "SEARCH DOMINANCE", title: "SEO Performance", description: "Technical optimization putting your product pages at the top of buyer searches." }
    ],
    projectTypes: [
      "Direct-to-Consumer (D2C) Brand Flagships",
      "High-Volume Retail Catalogs",
      "Headless E-Commerce Platforms",
      "B2B Wholesale Ordering Portals",
      "Subscription Box Ecosystems",
      "Multi-Vendor Marketplace Interfaces"
    ],
    relatedIndustries: [
      { slug: "logistics-transportation", title: "Logistics & Transportation", shortTitle: "Logistics", description: "Supply chain visibility and fulfillment tracking platforms." },
      { slug: "manufacturing", title: "Manufacturing", shortTitle: "Manufacturing", description: "B2B product catalogs and distributor ordering portals." },
      { slug: "marketing-media", title: "Marketing & Media", shortTitle: "Marketing", description: "Brand storytelling and high-impact digital experiences." }
    ],
    faqs: [
      { question: "Can you build custom headless e-commerce stores?", answer: "Yes. We specialize in headless commerce architectures utilizing Next.js paired with platforms like Shopify Plus or Medusa for unmatched speed and design flexibility." },
      { question: "How do you handle large product catalogs with thousands of items?", answer: "We implement advanced search engines like Algolia or Typesense paired with server-side rendering and incremental static regeneration to ensure instant filtering." },
      { question: "Can you integrate complex payment gateways?", answer: "We integrate secure global payment gateways including Stripe, PayPal, Apple Pay, Klarna, and regional multi-currency processors." },
      { question: "How do you prevent cart abandonment?", answer: "We design streamlined single-page checkouts, clear shipping cost transparency, guest checkout options, and automated recovery workflow integrations." }
    ],
    metaTitle: "E-Commerce Web Development & Retail Platforms | WebMash Labs",
    metaDescription: "WebMash Labs builds high-performance e-commerce websites, headless retail stores, and custom shopping platforms engineered for maximum conversion."
  },

  "saas-technology": {
    id: "04",
    slug: "saas-technology",
    title: "Digital Experiences for SaaS & Technology",
    shortTitle: "SaaS & Tech",
    eyebrow: "04 — SAAS & TECHNOLOGY",
    heroDescription: "Technology buyers evaluate software based on clarity, product capability, and onboarding ease. We design high-converting SaaS marketing websites, intuitive product dashboards, and scalable web applications.",
    heroAccent: "Engineered for Product Adoption, Onboarding & Scale",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern SaaS technology workspace and software product analytics dashboard",
    imageCaption: "SaaS Product Ecosystems — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Software development workspace and UI component architecture",
    industryIntro: "SaaS companies live and die by their product-led growth loops. From the marketing landing page to the in-app onboarding experience, every touchpoint must communicate value instantly and reduce time-to-value.",
    challengeTitle: "Where SaaS digital platforms fall short.",
    challengeDescription: "Complex value propositions, confusing pricing tiers, and sluggish product interfaces lead to high churn and low trial conversions.",
    challenges: [
      { number: "01", title: "Complex Value Proposition", description: "Failing to explain complex software features simply on marketing pages confuses prospective buyers." },
      { number: "02", title: "Friction in Trial Onboarding", description: "Clunky signup flows and poor initial guidance lead to immediate drop-off before users experience product value." },
      { number: "03", title: "Cluttered Product Dashboards", description: "Overwhelming UI layouts cause cognitive overload for users trying to navigate key analytics or settings." },
      { number: "04", title: "Scalability Bottlenecks", description: "Legacy codebases that fail to handle rapid user acquisition and high concurrent API requests." }
    ],
    solutions: [
      { number: "01", title: "High-Conversion SaaS Websites", description: "Lightning-fast marketing sites with compelling feature breakdowns and interactive pricing calculators.", icon: Cpu },
      { number: "02", title: "Frictionless Onboarding Flows", description: "Streamlined multi-step signups and guided product tours reducing time-to-value.", icon: Zap },
      { number: "03", title: "Intuitive Product Dashboards", description: "Clean, responsive web application interfaces designed for heavy daily user engagement.", icon: Layers },
      { number: "04", title: "Subscription & Billing Portals", description: "Self-service account management, tier upgrades, and invoice history portals.", icon: TrendingUp },
      { number: "05", title: "Documentation & Knowledge Bases", description: "Searchable, developer-friendly documentation hubs built for instant technical clarity.", icon: CheckCircle2 },
      { number: "06", title: "Enterprise SSO & Security Portals", description: "Robust authentication architectures supporting SAML, OAuth, and enterprise compliance.", icon: ShieldCheck }
    ],
    capabilities: [
      "Next.js App Router performance optimization",
      "Stripe Billing and subscription lifecycle management",
      "Complex dashboard UI component libraries",
      "Enterprise authentication (Auth0, Clerk, NextAuth)",
      "REST and GraphQL API architecture"
    ],
    services: [
      { title: "Custom Web Applications", description: "Scalable SaaS products built for heavy concurrent usage.", href: "/services/web-applications" },
      { title: "Website Design & Development", description: "High-converting marketing flagships for tech enterprises.", href: "/services/web-design-development" },
      { title: "UI/UX & Product Design", description: "Complex data visualization and intuitive dashboard design.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating technical search terms and software categories.", href: "/services/seo" },
      { title: "Business Automation", description: "Automating user onboarding sequences and subscription lifecycle emails.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze user personas, core software value propositions, and product-led growth metrics." },
      { number: "02", title: "Map", description: "Architect conversion funnels from landing page visit to in-app activation." },
      { number: "03", title: "Design", description: "Craft sleek, technical UI systems that communicate innovation and reliability." },
      { number: "04", title: "Engineer", description: "Develop robust, scalable web applications with bulletproof component architecture." },
      { number: "05", title: "Optimize", description: "Refine load speeds, conversion rates, and user telemetry continuously." }
    ],
    technology: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker", "Stripe"],
    outcomes: [
      { number: "01", metric: "HIGHER TRIAL CONVERSION", title: "Optimized Funnels", description: "Clearer messaging and streamlined signups driving more trial activations." },
      { number: "02", metric: "LOWER CHURN", title: "Intuitive Dashboards", description: "Cleaner product interfaces that reduce user frustration and increase daily utility." },
      { number: "03", metric: "ENTERPRISE READINESS", title: "Secure Architecture", description: "Robust authentication and compliance features built for enterprise buyers." },
      { number: "04", metric: "LIGHTNING PERFORMANCE", title: "Sub-Second Apps", description: "Blazing-fast web applications providing a premium software experience." }
    ],
    projectTypes: [
      "SaaS Marketing Websites",
      "B2B Software Product Dashboards",
      "Developer Documentation Hubs",
      "Self-Service Billing Portals",
      "Multi-Tenant Application UI",
      "AI-Powered Tool Interfaces"
    ],
    relatedIndustries: [
      { slug: "finance-fintech", title: "Finance & FinTech", shortTitle: "FinTech", description: "Secure financial software and real-time transaction dashboards." },
      { slug: "professional-services", title: "Professional Services", shortTitle: "Services", description: "Client portals and operational workflow software." },
      { slug: "education-elearning", title: "Education & E-Learning", shortTitle: "E-Learning", description: "Interactive learning management systems and portals." }
    ],
    faqs: [
      { question: "Can you build complex SaaS product dashboards?", answer: "Yes. We specialize in building sophisticated, responsive web application dashboards utilizing React, Next.js, and modular component libraries." },
      { question: "How do you handle complex subscription billing models?", answer: "We integrate Stripe Billing and custom webhook listeners to handle multi-tiered subscriptions, usage-based billing, trials, and invoices smoothly." },
      { question: "Can you help improve our SaaS trial-to-paid conversion rate?", answer: "We audit your onboarding funnel, redesign sign-up flows, and implement guided product tours that accelerate user time-to-value." },
      { question: "Do you build enterprise-ready authentication systems?", answer: "We implement robust authentication solutions supporting SSO, SAML, OAuth, and granular role-based access control." }
    ],
    metaTitle: "SaaS Web Development & Software UI/UX | WebMash Labs",
    metaDescription: "WebMash Labs designs and develops high-converting SaaS marketing websites, product dashboards, and scalable web applications."
  },

  "finance-fintech": {
    id: "05",
    slug: "finance-fintech",
    title: "Digital Experiences for Finance & FinTech",
    shortTitle: "Finance & FinTech",
    eyebrow: "05 — FINANCE & FINTECH",
    heroDescription: "Financial services and FinTech platforms require absolute security, unshakeable trust, and pristine data clarity. We engineer secure customer portals, financial dashboards, and compliant web applications.",
    heroAccent: "Engineered for Trust, Security & Data Clarity",
    heroImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern financial technology dashboard and secure banking environment",
    imageCaption: "Secure Financial Architecture — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Financial data analytics and secure transaction monitoring",
    industryIntro: "In finance, user confidence is paramount. Whether managing wealth, processing payments, or offering lending products, digital interfaces must translate complex financial metrics into actionable clarity while maintaining impenetrable security.",
    challengeTitle: "Where financial web platforms fall short.",
    challengeDescription: "Cluttered data visualizations, confusing security protocols, and sluggish transaction interfaces erode customer trust instantly.",
    challenges: [
      { number: "01", title: "Data Overload & Confusion", description: "Presenting complex financial analytics without clear hierarchy overwhelms retail and business users." },
      { number: "02", title: "Rigid Compliance Friction", description: "Balancing strict regulatory compliance with a smooth, modern user experience is exceptionally difficult." },
      { number: "03", title: "Perceived Security Vulnerability", description: "Outdated design aesthetics or unclear security indicators make users hesitant to transfer funds or sensitive data." },
      { number: "04", title: "Slow Transaction Processing", description: "Laggy payment flows and unoptimized database queries create anxiety during high-value transfers." }
    ],
    solutions: [
      { number: "01", title: "Secure Customer Portals", description: "Impenetrable, encrypted client dashboards for wealth management, banking, and investments.", icon: ShieldCheck },
      { number: "02", title: "Financial Data Dashboards", description: "Clean, real-time data visualization interfaces translating complex metrics into actionable insights.", icon: TrendingUp },
      { number: "03", title: "FinTech Marketing Flagships", description: "High-trust, conversion-optimized websites for modern financial technology disruptors.", icon: Cpu },
      { number: "04", title: "Loan & Application Workflows", description: "Multi-step financial application engines with instant document verification and credit checks.", icon: CheckCircle2 },
      { number: "05", title: "Payment & Billing Gateways", description: "Custom payment orchestration layers supporting multi-currency transactions and automated reporting.", icon: Zap },
      { number: "06", title: "Compliance & Audit Hubs", description: "Transparent reporting interfaces and secure audit logging for regulatory requirements.", icon: Scale }
    ],
    capabilities: [
      "Bank-grade encryption and security protocols",
      "Complex financial data charting and visualization",
      "Plaid and banking API integrations",
      "Multi-factor authentication (MFA) architectures",
      "SOC 2 compliance-ready codebases"
    ],
    services: [
      { title: "Custom Web Applications", description: "Secure financial portals and transaction engines.", href: "/services/web-applications" },
      { title: "UI/UX & Product Design", description: "Simplifying complex financial data into intuitive user experiences.", href: "/services/ui-ux-design" },
      { title: "Website Design & Development", description: "High-trust digital flagships for financial institutions.", href: "/services/web-design-development" },
      { title: "SEO & Performance", description: "Ranking high for competitive financial and banking search terms.", href: "/services/seo" },
      { title: "Business Automation", description: "Automated compliance checks and transactional notifications.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze regulatory requirements, target demographic trust factors, and transactional workflows." },
      { number: "02", title: "Map", description: "Architect secure information flows that minimize user anxiety during high-value actions." },
      { number: "03", title: "Design", description: "Craft authoritative, calm UI systems that inspire absolute confidence and clarity." },
      { number: "04", title: "Engineer", description: "Develop bulletproof web applications with rigorous encryption and zero security gaps." },
      { number: "05", title: "Optimize", description: "Test performance under heavy load and ensure flawless data integrity." }
    ],
    technology: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Plaid API", "AWS", "Tailwind CSS"],
    outcomes: [
      { number: "01", metric: "ABSOLUTE TRUST", title: "Secure Architecture", description: "Bank-grade security and polished UI that instill immediate user confidence." },
      { number: "02", metric: "DATA CLARITY", title: "Simplified Dashboards", description: "Complex financial metrics presented with pristine legibility and intuitive charts." },
      { number: "03", metric: "REDUCED FRICTION", title: "Smooth Onboarding", description: "Streamlined KYC and account opening workflows boosting completed applications." },
      { number: "04", metric: "INSTANT SPEED", title: "High-Performance Apps", description: "Lightning-fast transaction interfaces preventing user drop-off." }
    ],
    projectTypes: [
      "FinTech Startup Flagships",
      "Wealth Management Client Portals",
      "Real-Time Financial Dashboards",
      "Secure Lending Application Workflows",
      "Investment Platform Interfaces",
      "Banking API Integration Portals"
    ],
    relatedIndustries: [
      { slug: "saas-technology", title: "SaaS & Technology", shortTitle: "SaaS", description: "Software products and scalable web applications." },
      { slug: "professional-services", title: "Professional Services", shortTitle: "Services", description: "Consultancy portals and client communication hubs." },
      { slug: "legal-services", title: "Legal Services", shortTitle: "Legal", description: "Secure document exchange and confidential client portals." }
    ],
    faqs: [
      { question: "How do you ensure bank-grade security on financial websites?", answer: "We implement rigorous security hygiene including end-to-end encryption, secure token authentication, strict role-based access control, and adherence to financial compliance standards." },
      { question: "Can you integrate financial APIs like Plaid or Stripe?", answer: "Yes. We regularly integrate banking APIs, payment processors like Stripe and PayPal, and credit verification services seamlessly into web applications." },
      { question: "How do you present complex financial data without overwhelming users?", answer: "We employ clean typography, hierarchical data visualization, interactive charting libraries, and progressive disclosure to keep dashboards digestible." },
      { question: "Can you build multi-step financial onboarding and KYC flows?", answer: "We design secure, multi-step application funnels with document upload capabilities and real-time validation checks." }
    ],
    metaTitle: "FinTech Web Development & Financial Portals | WebMash Labs",
    metaDescription: "WebMash Labs builds secure financial web applications, customer portals, and high-trust digital platforms for FinTech and finance enterprises."
  },

  "education-elearning": {
    id: "06",
    slug: "education-elearning",
    title: "Digital Experiences for Education & E-Learning",
    shortTitle: "Education",
    eyebrow: "06 — EDUCATION & E-LEARNING",
    heroDescription: "Educational institutions and e-learning platforms need engaging, accessible digital environments that foster active learning and effortless course discovery. We build intuitive student portals, LMS interfaces, and school websites.",
    heroAccent: "Engineered for Engagement, Accessibility & Knowledge Transfer",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern e-learning and educational technology environment with digital student portal",
    imageCaption: "Interactive Learning Ecosystems — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Students engaging with digital learning platform and course dashboard",
    industryIntro: "Education is transitioning entirely to digital-first experiences. Students, parents, and educators expect lightning-fast course enrollment, interactive learning management systems, and flawless mobile accessibility.",
    challengeTitle: "Where educational digital platforms break down.",
    challengeDescription: "Clunky student portals, confusing course catalogs, and poor mobile accessibility frustrate learners and damage institutional reputation.",
    challenges: [
      { number: "01", title: "Confusing Course Discovery", description: "Disorganized curriculum catalogs and poor search functionality make it difficult for students to find programs." },
      { number: "02", title: "Clunky Student Portals", description: "Outdated, sluggish learning management interfaces that discourage active student participation." },
      { number: "03", title: "Accessibility Barriers", description: "Websites and learning tools that fail to accommodate students with diverse physical or visual needs." },
      { number: "04", title: "Low Enrollment Conversion", description: "Friction-heavy admissions and application processes causing prospective students to abandon enrollment." }
    ],
    solutions: [
      { number: "01", title: "Interactive Student Portals", description: "Clean, responsive dashboards for tracking assignments, grades, and course materials.", icon: GraduationCap },
      { number: "02", title: "Dynamic Course Catalogs", description: "Advanced filtering engines helping students explore programs, schedules, and prerequisites instantly.", icon: Compass },
      { number: "03", title: "Institution Flagship Websites", description: "Prestigious, lightning-fast web presences for universities, schools, and edtech companies.", icon: Building2 },
      { number: "04", title: "Streamlined Admissions Workflows", description: "Paperless application forms with integrated fee payment and document verification.", icon: CheckCircle2 },
      { number: "05", title: "E-Learning Platform Interfaces", description: "Custom video streaming, quiz modules, and progress tracking engineered for engagement.", icon: Cpu },
      { number: "06", title: "Faculty & Staff Directories", description: "Searchable academic directories connecting students with professors and advisors easily.", icon: Check }
    ],
    capabilities: [
      "WCAG 2.1 AA accessible learning interfaces",
      "LMS and SCORM content integration readiness",
      "High-speed server-side rendering for large catalogs",
      "Secure student authentication and role management",
      "Optimized video streaming layout architectures"
    ],
    services: [
      { title: "Website Design & Development", description: "Prestigious educational flagships and responsive portals.", href: "/services/web-design-development" },
      { title: "Custom Web Applications", description: "Specialized learning management systems and student dashboards.", href: "/services/web-applications" },
      { title: "UI/UX & Product Design", description: "Human-centered interfaces simplifying complex academic pathways.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Ranking high for competitive degree and course search terms.", href: "/services/seo" },
      { title: "Business Automation", description: "Automated enrollment notifications and student onboarding flows.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze student demographics, curriculum structures, and administrative enrollment goals." },
      { number: "02", title: "Map", description: "Architect intuitive course discovery paths and frictionless application funnels." },
      { number: "03", title: "Design", description: "Craft engaging, accessible UI systems that encourage exploration and academic focus." },
      { number: "04", title: "Engineer", description: "Build scalable web applications with robust security and lightning-fast asset delivery." },
      { number: "05", title: "Optimize", description: "Refine accessibility metrics, mobile responsiveness, and search engine visibility." }
    ],
    technology: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS S3", "Docker"],
    outcomes: [
      { number: "01", metric: "HIGHER ENROLLMENT", title: "Streamlined Applications", description: "Frictionless admissions workflows converting more prospective students." },
      { number: "02", metric: "BETTER ACCESSIBILITY", title: "Inclusive Learning", description: "Fully compliant digital platforms accessible to learners of all abilities." },
      { number: "03", metric: "INCREASED ENGAGEMENT", title: "Intuitive Portals", description: "Clean student dashboards keeping learners organized and motivated." },
      { number: "04", metric: "PRESTIGE POSITIONING", title: "Authoritative Brand", description: "Sophisticated digital design reflecting institutional excellence." }
    ],
    projectTypes: [
      "University & College Flagships",
      "EdTech SaaS Platforms",
      "Student Learning Portals",
      "Online Course Marketplaces",
      "Admissions & Enrollment Engines",
      "Faculty & Research Directories"
    ],
    relatedIndustries: [
      { slug: "saas-technology", title: "SaaS & Technology", shortTitle: "SaaS", description: "Software products and scalable platform architectures." },
      { slug: "professional-services", title: "Professional Services", shortTitle: "Services", description: "Training portals and advisory resource hubs." },
      { slug: "marketing-media", title: "Marketing & Media", shortTitle: "Media", description: "Content hubs and digital publishing platforms." }
    ],
    faqs: [
      { question: "Can you build custom learning management systems (LMS)?", answer: "Yes. We design and engineer bespoke student portals, course tracking interfaces, and interactive learning tools tailored to your curriculum." },
      { question: "How do you ensure educational websites are fully accessible?", answer: "We build all educational platforms in strict adherence to WCAG accessibility guidelines, ensuring screen-reader compatibility and keyboard navigation." },
      { question: "Can you integrate student information systems (SIS)?", answer: "We build secure API connectors linking your front-end digital portals with existing back-end SIS and CRM databases." },
      { question: "How do you streamline online admissions?", answer: "We create multi-step application forms with integrated fee collection, document uploading, and automated status tracking." }
    ],
    metaTitle: "Education Web Development & E-Learning Platforms | WebMash Labs",
    metaDescription: "WebMash Labs designs educational websites, student portals, and e-learning platforms engineered for engagement and accessibility."
  },

  "hospitality-travel": {
    id: "07",
    slug: "hospitality-travel",
    title: "Digital Experiences for Hospitality & Travel",
    shortTitle: "Hospitality",
    eyebrow: "07 — HOSPITALITY & TRAVEL",
    heroDescription: "In hospitality and travel, the digital experience is the first touchpoint of a guest's journey. We craft immersive booking engines, luxury hotel flagships, and travel portals that inspire wanderlust and drive direct reservations.",
    heroAccent: "Engineered for Immersive Storytelling & Direct Bookings",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Luxury hospitality resort and immersive travel booking digital platform",
    imageCaption: "Immersive Hospitality Architecture — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Hotel room interior and digital reservation management interface",
    industryIntro: "Travelers demand visual inspiration paired with frictionless booking. Relying solely on third-party aggregators cuts into margins; brands need breathtaking direct-booking websites that capture attention instantly.",
    challengeTitle: "Where hospitality web platforms lose bookings.",
    challengeDescription: "Heavy image lags, confusing reservation calendars, and generic layouts cause travelers to abandon direct booking in favor of OTAs.",
    challenges: [
      { number: "01", title: "Heavy Visual Lag", description: "Unoptimized high-resolution resort photography causes slow page loads and high user bounce rates." },
      { number: "02", title: "Clunky Booking Engines", description: "Fragmented or confusing reservation widgets that frustrate guests trying to check availability and rates." },
      { number: "03", title: "Weak Direct-Booking Incentives", description: "Websites failing to showcase unique property value, resulting in heavy reliance on expensive third-party OTAs." },
      { number: "04", title: "Poor Mobile Reservation Flow", description: "Mobile booking experiences that require excessive pinching, zooming, and form filling." }
    ],
    solutions: [
      { number: "01", title: "Luxury Hospitality Flagships", description: "Breathtaking, image-forward websites capturing the true ambiance of hotels and resorts.", icon: Building2 },
      { number: "02", title: "Seamless Booking Integrations", description: "Lightning-fast reservation calendars synchronized with property management systems (PMS).", icon: Zap },
      { number: "03", title: "Interactive Destination Guides", description: "Rich editorial maps and localized attraction directories enhancing the guest experience.", icon: Compass },
      { number: "04", title: "Guest Concierge Portals", description: "Digital pre-arrival check-in, amenity booking, and service request dashboards.", icon: CheckCircle2 },
      { number: "05", title: "Tour & Activity Booking Engines", description: "Custom reservation workflows for experiential travel companies and tour operators.", icon: ShoppingBag },
      { number: "06", title: "Multi-Property Portfolios", description: "Centralized corporate hubs connecting visitors to a global collection of distinct properties.", icon: Layers }
    ],
    capabilities: [
      "Ultra-fast image delivery via global CDN",
      "PMS and booking engine API synchronization",
      "Immersive video and high-res gallery layouts",
      "Mobile-optimized reservation funnels",
      "Multi-language and multi-currency support"
    ],
    services: [
      { title: "Website Design & Development", description: "Immersive luxury flagships built for direct reservations.", href: "/services/web-design-development" },
      { title: "UI/UX & Product Design", description: "Stunning visual interfaces and frictionless booking flows.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating local travel search and destination keywords.", href: "/services/seo" },
      { title: "Custom Web Applications", description: "Bespoke guest concierge and reservation management portals.", href: "/services/web-applications" },
      { title: "Business Automation", description: "Automated booking confirmations and pre-arrival guest emails.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze brand positioning, guest demographics, and booking engine requirements." },
      { number: "02", title: "Map", description: "Architect inspiring visual discovery paths leading directly to room selection." },
      { number: "03", title: "Design", description: "Craft cinematic, high-impact UI layouts that evoke emotion and luxury." },
      { number: "04", title: "Engineer", description: "Build lightning-fast web pages with optimized imagery and seamless reservation sync." },
      { number: "05", title: "Optimize", description: "Fine-tune asset delivery, mobile conversion funnels, and search engine visibility." }
    ],
    technology: ["Next.js", "React", "Cloudinary", "Node.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    outcomes: [
      { number: "01", metric: "DIRECT BOOKINGS", title: "Increased Direct Revenue", description: "Captivating direct-booking flagships reducing costly OTA commission fees." },
      { number: "02", metric: "VISUAL IMMERSION", title: "Cinematic Speed", description: "Instant loading of high-resolution resort photography and video." },
      { number: "03", metric: "SMOOTH RESERVATIONS", title: "Frictionless Checkout", description: "Streamlined booking calendars optimized for mobile and desktop." },
      { number: "04", metric: "BRAND PRESTIGE", title: "Unmatched Aesthetics", description: "Sophisticated digital design reflecting world-class hospitality standards." }
    ],
    projectTypes: [
      "Luxury Hotel & Resort Flagships",
      "Boutique Hospitality Websites",
      "Travel Agency & Tour Portals",
      "Destination Marketing Hubs",
      "Guest Concierge Web Apps",
      "Multi-Property Collection Portals"
    ],
    relatedIndustries: [
      { slug: "real-estate", title: "Real Estate", shortTitle: "Real Estate", description: "Property visualization and immersive media platforms." },
      { slug: "restaurants-food", title: "Restaurants & Food", shortTitle: "Food & Bev", description: "Reservation platforms and culinary brand flagships." },
      { slug: "marketing-media", title: "Marketing & Media", shortTitle: "Media", description: "Editorial storytelling and high-impact visual design." }
    ],
    faqs: [
      { question: "Can you integrate booking engines and PMS systems?", answer: "Yes. We integrate popular reservation engines and property management systems (PMS) to ensure real-time rate and availability synchronization." },
      { question: "How do you handle heavy resort photography and video without slowing down the site?", answer: "We utilize modern image optimization pipelines, responsive sizing, lazy loading, and global content delivery networks (CDNs) for lightning-fast delivery." },
      { question: "Can you help increase direct bookings over third-party OTAs?", answer: "We design compelling direct-booking incentives, streamlined checkout flows, and immersive brand storytelling that convert visitors on your own domain." },
      { question: "Do you support multi-language and multi-currency visitors?", answer: "We build localized multi-currency and multi-language architectures tailored for global travel audiences." }
    ],
    metaTitle: "Hospitality & Travel Web Development | WebMash Labs",
    metaDescription: "WebMash Labs designs luxury hotel websites, immersive travel portals, and high-conversion direct booking platforms."
  },

  "construction-architecture": {
    id: "08",
    slug: "construction-architecture",
    title: "Digital Experiences for Construction & Architecture",
    shortTitle: "Construction",
    eyebrow: "08 — CONSTRUCTION & ARCHITECTURE",
    heroDescription: "Architecture and construction firms build physical marvels; their digital presence should reflect the same precision, scale, and craftsmanship. We build striking project portfolios and contractor portals.",
    heroAccent: "Engineered for Structural Precision & Portfolio Impact",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18f86f6?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern architecture construction site and digital project management platform",
    imageCaption: "Architectural Portfolio Architecture — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Architect reviewing blueprints and modern building design digital interface",
    industryIntro: "Clients in architecture and heavy construction look for proof of engineering capability and aesthetic mastery. Web portfolios must showcase massive project imagery with immaculate typography and responsive grid layouts.",
    challengeTitle: "Where construction and architecture websites fall short.",
    challengeDescription: "Generic templates and poorly compressed project galleries fail to convey the true scale and sophistication of built work.",
    challenges: [
      { number: "01", title: "Unoptimized Project Galleries", description: "Massive architectural photography files crashing or lagging on mobile browsers." },
      { number: "02", title: "Weak RFP Lead Capture", description: "Complex project inquiry forms that lack clear specification fields for prospective commercial clients." },
      { number: "03", title: "Outdated Brand Presentation", description: "Websites that fail to reflect the modern, innovative engineering techniques utilized by the firm." },
      { number: "04", title: "Disjointed Subcontractor Portals", description: "Lack of centralized digital spaces for managing project bids, blueprints, and vendor documentation." }
    ],
    solutions: [
      { number: "01", title: "Immersive Project Portfolios", description: "Stunning, high-performance case study galleries showcasing architectural masterworks.", icon: Building2 },
      { number: "02", title: "Commercial RFP Intake Engines", description: "Sophisticated project inquiry forms tailored for large-scale construction bids.", icon: CheckCircle2 },
      { number: "03", title: "Subcontractor & Vendor Portals", description: "Secure document exchange and bidding management hubs for project stakeholders.", icon: Briefcase },
      { number: "04", title: "Interactive 3D & BIM Showcases", description: "Integration of modern WebGL and 3D modeling viewers for prospective developers.", icon: Cpu },
      { number: "05", title: "Firm Brand Flagships", description: "Authoritative digital flagships communicating engineering rigor and design excellence.", icon: Layers },
      { number: "06", title: "Safety & Compliance Portals", description: "Digital access hubs for OSHA documentation, safety protocols, and field reports.", icon: ShieldCheck }
    ],
    capabilities: [
      "High-resolution architectural photography optimization",
      "Interactive project filtering (by sector, scale, location)",
      "Secure client document and blueprint sharing portals",
      "Responsive editorial grid design systems",
      "Advanced RFP lead capture integration"
    ],
    services: [
      { title: "Website Design & Development", description: "Striking architectural portfolios and contractor flagships.", href: "/services/web-design-development" },
      { title: "UI/UX & Product Design", description: "Editorial typography and immersive project case study layouts.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating regional commercial construction and architectural search.", href: "/services/seo" },
      { title: "Custom Web Applications", description: "Bespoke bidding and contractor management portals.", href: "/services/web-applications" },
      { title: "Business Automation", description: "Automated RFP routing and project inquiry notifications.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze firm portfolio scale, target commercial clients, and bidding workflows." },
      { number: "02", title: "Map", description: "Architect editorial project discovery paths and high-value RFP submission funnels." },
      { number: "03", title: "Design", description: "Craft bold, minimalist UI systems highlighting structural photography and precision." },
      { number: "04", title: "Engineer", description: "Build lightning-fast web applications with optimized media delivery pipelines." },
      { number: "05", title: "Optimize", description: "Refine mobile performance, search engine rankings, and lead capture conversion." }
    ],
    technology: ["Next.js", "React", "Cloudinary", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker"],
    outcomes: [
      { number: "01", metric: "IMPRESSIVE PORTFOLIOS", title: "Cinematic Showcases", description: "Blazing-fast rendering of heavy architectural photography and video." },
      { number: "02", metric: "QUALIFIED RFPS", title: "Structured Inquiries", description: "Targeted intake forms capturing precise commercial project parameters." },
      { number: "03", metric: "BRAND AUTHORITY", title: "Sophisticated Design", description: "Digital presence reflecting the exact craftsmanship of your built work." },
      { number: "04", metric: "SECURE COLLABORATION", title: "Vendor Portals", description: "Streamlined document and blueprint exchange for project stakeholders." }
    ],
    projectTypes: [
      "Architecture Firm Flagship Websites",
      "Commercial Construction Portfolios",
      "Engineering Consultancy Hubs",
      "Subcontractor Bidding Portals",
      "Real Estate Development Showcases",
      "Sustainable Building Initiatives"
    ],
    relatedIndustries: [
      { slug: "real-estate", title: "Real Estate", shortTitle: "Real Estate", description: "Property platforms and architectural visualization." },
      { slug: "logistics-transportation", title: "Logistics & Transportation", shortTitle: "Logistics", description: "Supply chain and heavy equipment management." },
      { slug: "professional-services", title: "Professional Services", shortTitle: "Services", description: "Advisory and corporate consultancy websites." }
    ],
    faqs: [
      { question: "How do you showcase large architectural photography files without slowing down the site?", answer: "We use advanced image compression, responsive sizing, lazy loading, and global content delivery networks to ensure lightning-fast rendering of high-res portfolios." },
      { question: "Can you build client portals for reviewing blueprints and project docs?", answer: "Yes. We build secure, password-protected client and subcontractor portals for exchanging blueprints, contracts, and project milestones." },
      { question: "How do you optimize lead generation for commercial construction?", answer: "We design structured RFP intake forms that capture project scope, budget range, and timeline details before inquiries reach your team." },
      { question: "Can you integrate 3D models or BIM viewers into our website?", answer: "We integrate WebGL and interactive 3D rendering components to showcase complex architectural designs directly in the browser." }
    ],
    metaTitle: "Construction & Architecture Web Development | WebMash Labs",
    metaDescription: "WebMash Labs designs striking portfolio websites and digital portals for architecture firms and commercial construction companies."
  },

  "logistics-transportation": {
    id: "09",
    slug: "logistics-transportation",
    title: "Digital Experiences for Logistics & Transportation",
    shortTitle: "Logistics",
    eyebrow: "09 — LOGISTICS & TRANSPORTATION",
    heroDescription: "Global supply chains and logistics operations rely on real-time data visibility, tracking accuracy, and operational efficiency. We engineer robust logistics portals, tracking dashboards, and supply chain web applications.",
    heroAccent: "Engineered for Supply Chain Visibility & Real-Time Tracking",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern logistics supply chain warehouse and digital freight tracking platform",
    imageCaption: "Logistics Dashboard Architecture — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Freight container terminal and real-time shipping analytics interface",
    industryIntro: "Logistics enterprises need digital systems that handle complex routing, real-time shipment tracking, and high-volume freight data without latency. Operational clarity is the ultimate competitive advantage.",
    challengeTitle: "Where logistics digital systems break down.",
    challengeDescription: "Fragmented tracking systems, sluggish database queries, and poor customer portals lead to operational blind spots and frustrated clients.",
    challenges: [
      { number: "01", title: "Fragmented Tracking Systems", description: "Disconnected carrier APIs and outdated databases causing delays in real-time shipment visibility." },
      { number: "02", title: "Complex Freight Rate Calculators", description: "Clunky estimation tools that make it difficult for shippers to calculate quotes across zones and weight tiers." },
      { number: "03", title: "Outdated Customer Portals", description: "Legacy client interfaces that lack self-service booking, invoicing, and document retrieval." },
      { number: "04", title: "High-Volume Data Latency", description: "Web applications choking under massive streams of telemetry and shipment status updates." }
    ],
    solutions: [
      { number: "01", title: "Real-Time Tracking Dashboards", description: "Interactive shipment tracking interfaces integrated with GPS and carrier telemetry.", icon: Truck },
      { number: "02", title: "Automated Rate Calculators", description: "Dynamic freight quotation engines calculating rates instantly based on distance, weight, and mode.", icon: Zap },
      { number: "03", title: "Client Freight Portals", description: "Self-service customer hubs for booking shipments, downloading BOLs, and managing invoices.", icon: Briefcase },
      { number: "04", title: "Logistics Enterprise Websites", description: "Authoritative digital flagships showcasing global reach, fleet capabilities, and sustainability.", icon: Building2 },
      { number: "05", title: "Warehouse Management Interfaces", description: "Streamlined internal dashboards optimizing inventory picking, packing, and dispatch workflows.", icon: Layers },
      { number: "06", title: "Fleet Maintenance Hubs", description: "Digital tracking systems for scheduled vehicle maintenance, compliance, and driver logs.", icon: ShieldCheck }
    ],
    capabilities: [
      "Real-time carrier API and IoT sensor integration",
      "High-performance telemetry data visualization",
      "Automated freight quote calculation engines",
      "Secure document generation (BOL, customs paperwork)",
      "Scalable cloud architecture handling high transaction volume"
    ],
    services: [
      { title: "Custom Web Applications", description: "Real-time tracking portals and logistics management dashboards.", href: "/services/web-applications" },
      { title: "Website Design & Development", description: "High-performance digital flagships for global freight enterprises.", href: "/services/web-design-development" },
      { title: "UI/UX & Product Design", description: "Simplifying complex supply chain data into intuitive interfaces.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Ranking high for regional freight, warehousing, and logistics search.", href: "/services/seo" },
      { title: "Business Automation", description: "Automated shipment status alerts and customer notification workflows.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze freight operations, tracking data feeds, and shipper workflow requirements." },
      { number: "02", title: "Map", description: "Architect seamless shipment booking and real-time tracking user journeys." },
      { number: "03", title: "Design", description: "Craft clean, industrial UI systems prioritizing data clarity and operational speed." },
      { number: "04", title: "Engineer", description: "Build scalable web applications with robust API connections and low latency." },
      { number: "05", title: "Optimize", description: "Test system performance under peak cargo volume and refine user workflows." }
    ],
    technology: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Docker", "Tailwind CSS", "Mapbox API"],
    outcomes: [
      { number: "01", metric: "REAL-TIME VISIBILITY", title: "Instant Tracking", description: "Seamless shipment tracking interfaces providing absolute transparency." },
      { number: "02", metric: "OPERATIONAL SPEED", title: "Automated Quotes", description: "Instant freight quotation engines reducing manual sales friction." },
      { number: "03", metric: "CLIENT SELF-SERVICE", title: "Unified Portals", description: "Centralized document and invoice management reducing support calls." },
      { number: "04", metric: "SCALABLE INFRASTRUCTURE", title: "High-Volume Ready", description: "Resilient web apps handling massive streams of logistics data effortlessly." }
    ],
    projectTypes: [
      "Global Logistics Enterprise Sites",
      "Real-Time Shipment Tracking Portals",
      "Freight Quotation & Booking Engines",
      "Warehouse Management Dashboards",
      "Fleet Compliance & Maintenance Hubs",
      "Supply Chain Analytics Interfaces"
    ],
    relatedIndustries: [
      { slug: "ecommerce-retail", title: "E-Commerce & Retail", shortTitle: "E-Commerce", description: "Fulfillment integration and online retail platforms." },
      { slug: "manufacturing", title: "Manufacturing", shortTitle: "Manufacturing", description: "Supply chain and industrial distribution portals." },
      { slug: "construction-architecture", title: "Construction", shortTitle: "Construction", description: "Heavy equipment and project logistics management." }
    ],
    faqs: [
      { question: "Can you integrate real-time tracking APIs and IoT telemetry?", answer: "Yes. We build custom API connectors that ingest real-time GPS tracking data and carrier telemetry to display live shipment statuses on customer dashboards." },
      { question: "Can you build automated freight rate calculation engines?", answer: "We develop custom calculation logic based on distance, weight, dimensional parameters, carrier tariffs, and fuel surcharges." },
      { question: "How do you handle high transaction volumes in logistics apps?", answer: "We utilize optimized database indexing, caching layers (Redis), and scalable cloud infrastructure to ensure sub-second response times under heavy load." },
      { question: "Can you build customer portals for downloading bills of lading and invoices?", answer: "We create secure self-service client portals where shippers can access historical bookings, custom paperwork, and financial invoices." }
    ],
    metaTitle: "Logistics Web Development & Tracking Portals | WebMash Labs",
    metaDescription: "WebMash Labs designs real-time tracking portals, freight booking engines, and supply chain web applications for logistics enterprises."
  },

  "professional-services": {
    id: "10",
    slug: "professional-services",
    title: "Digital Experiences for Professional Services",
    shortTitle: "Professional Services",
    eyebrow: "10 — PROFESSIONAL SERVICES",
    heroDescription: "Consultancies, advisory firms, and professional service agencies need digital presences that project undeniable authority, deep expertise, and institutional trust. We engineer high-authority websites and client portals.",
    heroAccent: "Engineered for Institutional Authority & Client Conversion",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern corporate advisory boardroom and professional services digital environment",
    imageCaption: "Executive Advisory Architecture — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Professional services team collaborating on strategic digital advisory",
    industryIntro: "High-net-worth clients and corporate buyers evaluate professional service firms based on thought leadership, case studies, and polished brand execution. Your website is your primary business card.",
    challengeTitle: "Where professional service websites fall short.",
    challengeDescription: "Generic corporate templates, buried expertise, and weak inquiry pathways cause high-value prospects to look elsewhere.",
    challenges: [
      { number: "01", title: "Buried Thought Leadership", description: "Valuable insights, whitepapers, and case studies hidden behind poor information architecture." },
      { number: "02", title: "Generic Brand Positioning", description: "Websites that look indistinguishable from competitors, failing to highlight unique advisory methodologies." },
      { number: "03", title: "Friction-Heavy Consultation Booking", description: "Outdated contact forms that fail to qualify prospective enterprise clients effectively." },
      { number: "04", title: "Fragmented Client Communication", description: "Lack of secure digital spaces for sharing confidential reports and project deliverables." }
    ],
    solutions: [
      { number: "01", title: "High-Authority Corporate Flagships", description: "Immaculate, editorial-grade web presences projecting supreme industry expertise.", icon: Briefcase },
      { number: "02", title: "Thought Leadership Hubs", description: "Advanced publishing platforms for whitepapers, case studies, insights, and media appearances.", icon: Megaphone },
      { number: "03", title: "Secure Client Portals", description: "Confidential document exchange and project milestone tracking hubs for high-tier clients.", icon: ShieldCheck },
      { number: "04", title: "Executive Consultation Booking", description: "Streamlined intake funnels qualifying prospective clients and scheduling partner meetings.", icon: CheckCircle2 },
      { number: "05", title: "Expertise & Team Directories", description: "Sophisticated partner and senior advisor profiles highlighting credentials and past successes.", icon: Building2 },
      { number: "06", title: "Interactive Service Showcases", description: "Clear, structured breakdowns of complex advisory engagements and deliverables.", icon: Layers }
    ],
    capabilities: [
      "Editorial typography and minimalist enterprise design",
      "Advanced content management systems (Sanity, Strapi, WordPress VIP)",
      "Secure client document vaults with role-based access",
      "Sophisticated consultation booking and qualification funnels",
      "Core Web Vitals and technical SEO optimization"
    ],
    services: [
      { title: "Website Design & Development", description: "Authoritative digital flagships for advisory and consulting firms.", href: "/services/web-design-development" },
      { title: "UI/UX & Product Design", description: "Editorial layouts and sophisticated corporate visual identity.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating high-intent search terms for executive advisory services.", href: "/services/seo" },
      { title: "Custom Web Applications", description: "Secure client portals and confidential document exchange hubs.", href: "/services/web-applications" },
      { title: "Business Automation", description: "Automated client intake routing and consultation scheduling.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze firm advisory methodologies, target enterprise clients, and thought leadership goals." },
      { number: "02", title: "Map", description: "Architect content hierarchies and high-value consultation conversion funnels." },
      { number: "03", title: "Design", description: "Craft sophisticated, minimalist UI systems reflecting absolute professionalism." },
      { number: "04", title: "Engineer", description: "Build lightning-fast web applications with bulletproof security and content management." },
      { number: "05", title: "Optimize", description: "Refine search engine positioning, site speed, and prospective client conversion rates." }
    ],
    technology: ["Next.js", "React", "Sanity CMS", "Node.js", "PostgreSQL", "Tailwind CSS", "Cloudflare"],
    outcomes: [
      { number: "01", metric: "AUTHORITATIVE BRAND", title: "Executive Presence", description: "Immaculate digital design reflecting elite advisory standards." },
      { number: "02", metric: "QUALIFIED LEADS", title: "Structured Intake", description: "Advanced consultation funnels filtering and converting high-value clients." },
      { number: "03", metric: "THOUGHT LEADERSHIP", title: "Insight Hubs", description: "Seamless publishing platforms showcasing deep industry research and expertise." },
      { number: "04", metric: "SECURE VAULTS", title: "Client Portals", description: "Encrypted digital spaces for sharing confidential reports and deliverables." }
    ],
    projectTypes: [
      "Management Consulting Flagships",
      "Executive Advisory Firm Websites",
      "Financial & Tax Advisory Portals",
      "Corporate Strategy Publishing Hubs",
      "Secure Client Document Vaults",
      "B2B Professional Service Sites"
    ],
    relatedIndustries: [
      { slug: "finance-fintech", title: "Finance & FinTech", shortTitle: "Finance", description: "Secure portals and financial advisory platforms." },
      { slug: "legal-services", title: "Legal Services", shortTitle: "Legal", description: "Law firm websites and confidential client portals." },
      { slug: "saas-technology", title: "SaaS & Technology", shortTitle: "SaaS", description: "Enterprise software and digital product platforms." }
    ],
    faqs: [
      { question: "How do you project executive authority through web design?", answer: "We employ minimalist layouts, editorial typography, generous whitespace, and restrained color palettes that signal absolute confidence and high-end positioning." },
      { question: "Can you build content hubs for whitepapers and case studies?", answer: "Yes. We integrate advanced headless content management systems (like Sanity or Strapi) that make publishing research, case studies, and insights effortless." },
      { question: "How do you qualify prospective corporate clients through the website?", answer: "We design multi-step consultation intake forms that gather project scope, organization size, and budget before routing leads to senior partners." },
      { question: "Do you build secure client portals for advisory deliverables?", answer: "We engineer encrypted client portals with role-based access for exchanging confidential reports, contracts, and strategic documents." }
    ],
    metaTitle: "Professional Services Web Development | WebMash Labs",
    metaDescription: "WebMash Labs designs authoritative websites, client portals, and digital platforms for consultancies and professional service firms."
  },

  "manufacturing": {
    id: "11",
    slug: "manufacturing",
    title: "Digital Experiences for Manufacturing",
    shortTitle: "Manufacturing",
    eyebrow: "11 — MANUFACTURING",
    heroDescription: "Industrial and B2B manufacturing enterprises require robust digital catalogs, distributor portals, and precise technical specification hubs. We engineer high-performance manufacturing web platforms.",
    heroAccent: "Engineered for Industrial Catalogs & Distributor Portals",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Advanced manufacturing industrial production plant and digital engineering interface",
    imageCaption: "Industrial Catalog Architecture — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Industrial machinery manufacturing and technical specification review",
    industryIntro: "Modern industrial buyers expect digital catalogs as robust as consumer e-commerce stores, complete with CAD downloads, technical datasheets, and frictionless distributor quote requests.",
    challengeTitle: "Where manufacturing digital platforms fall short.",
    challengeDescription: "Outdated PDF catalogs, sluggish search engines, and disconnected distributor networks make it difficult for buyers to specify and purchase parts.",
    challenges: [
      { number: "01", title: "Outdated Static PDF Catalogs", description: "Heavy PDF spec sheets that are impossible to search, index on Google, or navigate on mobile." },
      { number: "02", title: "Complex Part Filtering Lags", description: "Websites struggling to filter thousands of SKUs by technical parameters (material, tolerance, size)." },
      { number: "03", title: "Disjointed Distributor Networks", description: "Lack of digital tools connecting global buyers with regional authorized distributors." },
      { number: "04", title: "Friction in Custom RFQs", description: "Complex custom manufacturing inquiry forms that lack technical specification upload capabilities." }
    ],
    solutions: [
      { number: "01", title: "High-Performance Digital Catalogs", description: "Lightning-fast searchable product databases replacing static PDF spec sheets.", icon: Factory },
      { number: "02", title: "Technical Datasheet & CAD Hubs", description: "Secure download centers for CAD drawings, spec sheets, and compliance certificates.", icon: Cpu },
      { number: "03", title: "Distributor Locator & Portal", description: "Interactive dealer maps and restricted login portals for authorized distributors.", icon: Compass },
      { number: "04", title: "Custom Manufacturing RFQ Engines", description: "Advanced quote request forms supporting file attachments (STEP, IGES, PDF) and specs.", icon: CheckCircle2 },
      { number: "05", title: "Industrial Enterprise Flagships", description: "Authoritative digital presences highlighting global production capacity and quality control.", icon: Building2 },
      { number: "06", title: "Inventory & ERP Integration APIs", description: "Backend synchronization connecting online inquiries with enterprise resource planning tools.", icon: Zap }
    ],
    capabilities: [
      "Advanced faceted search for thousands of industrial SKUs",
      "Secure CAD file and technical document hosting",
      "Interactive global distributor locator maps",
      "Custom RFQ builder with file attachment handling",
      "ERP and inventory management API integration"
    ],
    services: [
      { title: "Website Design & Development", description: "Authoritative manufacturing flagships and digital catalogs.", href: "/services/web-design-development" },
      { title: "Custom Web Applications", description: "Distributor portals and custom RFQ engineering platforms.", href: "/services/web-applications" },
      { title: "UI/UX & Product Design", description: "Intuitive technical parameter filtering and specification layouts.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating industrial part search and manufacturing keywords.", href: "/services/seo" },
      { title: "Business Automation", description: "Automated RFQ routing to regional sales managers and distributors.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze product inventory complexity, engineering spec requirements, and distributor networks." },
      { number: "02", title: "Map", description: "Architect intuitive part discovery paths and custom RFQ submission funnels." },
      { number: "03", title: "Design", description: "Craft clean, industrial UI systems emphasizing engineering precision and clarity." },
      { number: "04", title: "Engineer", description: "Build scalable web applications with high-speed search and secure document vaults." },
      { number: "05", title: "Optimize", description: "Refine part search performance, mobile responsiveness, and SEO indexing." }
    ],
    technology: ["Next.js", "React", "Algolia", "Node.js", "PostgreSQL", "AWS S3", "Tailwind CSS"],
    outcomes: [
      { number: "01", metric: "SEARCHABLE CATALOGS", title: "Instant Part Discovery", description: "Replacing static PDFs with blazing-fast searchable digital part inventories." },
      { number: "02", metric: "QUALIFIED RFQS", title: "Precision Inquiries", description: "Structured quote requests capturing exact material and tolerance specifications." },
      { number: "03", metric: "DISTRIBUTOR NETWORK", title: "Global Reach", description: "Interactive dealer locators connecting buyers with local authorized suppliers." },
      { number: "04", metric: "TECHNICAL VAULTS", title: "CAD & Datasheets", description: "Secure, instant downloading of engineering drawings and compliance certificates." }
    ],
    projectTypes: [
      "Industrial Manufacturing Flagships",
      "Digital Part Catalogs & Spec Hubs",
      "Authorized Distributor Portals",
      "Custom Manufacturing RFQ Engines",
      "CAD Drawing Download Centers",
      "Global Dealer Locator Systems"
    ],
    relatedIndustries: [
      { slug: "logistics-transportation", title: "Logistics & Transportation", shortTitle: "Logistics", description: "Supply chain and freight distribution platforms." },
      { slug: "ecommerce-retail", title: "E-Commerce & Retail", shortTitle: "E-Commerce", description: "High-volume catalog and inventory architectures." },
      { slug: "construction-architecture", title: "Construction", shortTitle: "Construction", description: "Building materials and heavy equipment portals." }
    ],
    faqs: [
      { question: "Can you replace static PDF catalogs with searchable digital databases?", answer: "Yes. We build high-performance digital part catalogs with advanced faceted search, allowing engineers to filter by material, size, tolerance, and rating instantly." },
      { question: "How do you handle heavy CAD files and technical datasheets?", answer: "We configure secure cloud storage vaults (AWS S3) paired with instant download links and access permission controls for authorized buyers." },
      { question: "Can you build custom RFQ forms that accept engineering file uploads?", answer: "We build advanced inquiry forms capable of handling large CAD file attachments (STEP, IGES, PDF) alongside detailed material specifications." },
      { question: "Do you support distributor networks with dealer locators and portals?", answer: "We integrate interactive map-based dealer locators and build restricted-access distributor portals for pricing and inventory." }
    ],
    metaTitle: "Manufacturing Web Development & Digital Catalogs | WebMash Labs",
    metaDescription: "WebMash Labs builds digital part catalogs, distributor portals, and high-performance web platforms for manufacturing enterprises."
  },

  "automotive": {
    id: "12",
    slug: "automotive",
    title: "Digital Experiences for Automotive",
    shortTitle: "Automotive",
    eyebrow: "12 — AUTOMOTIVE",
    heroDescription: "Automotive brands and dealerships require high-impact visual platforms, vehicle configuration engines, and seamless service booking portals. We engineer premium digital experiences for the automotive industry.",
    heroAccent: "Engineered for Visual Impact & Vehicle Configuration",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern luxury automotive vehicle and digital showroom platform",
    imageCaption: "Automotive Showroom Architecture — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Automotive vehicle configurator and digital dealership dashboard",
    industryIntro: "Car buyers research extensively online before ever stepping onto a lot. Automotive digital platforms must combine cinematic vehicle presentation with real-time inventory filtering and friction-free service scheduling.",
    challengeTitle: "Where automotive web platforms fall short.",
    challengeDescription: "Laggy inventory search, clunky service booking calendars, and weak vehicle configuration tools cause buyers to look elsewhere.",
    challenges: [
      { number: "01", title: "Sluggish Inventory Search", description: "Unoptimized vehicle search filters causing slow load times when browsing large pre-owned or new car inventories." },
      { number: "02", title: "Fragmented Service Booking", description: "Outdated maintenance scheduling tools that are disconnected from dealership repair shop calendars." },
      { number: "03", title: "Generic Visual Presentation", description: "Websites failing to capture the sleek, dynamic aesthetic of modern automotive engineering." },
      { number: "04", title: "Complex Financing Calculators", description: "Clunky loan and lease estimation widgets that confuse prospective buyers instead of clarifying payments." }
    ],
    solutions: [
      { number: "01", title: "Cinematic Brand Flagships", description: "Breathtaking, image-forward web presences showcasing vehicle design and performance.", icon: Car },
      { number: "02", title: "Advanced Inventory Platforms", description: "Lightning-fast vehicle search engines with multi-parameter filtering (trim, mileage, price, features).", icon: Compass },
      { number: "03", title: "Interactive Vehicle Configurators", description: "Custom digital tools allowing buyers to customize trims, colors, packages, and accessories.", icon: Cpu },
      { number: "04", title: "Service & Maintenance Booking", description: "Frictionless online scheduling for vehicle servicing, repairs, and test drives.", icon: CheckCircle2 },
      { number: "05", title: "Financing & Trade-In Estimators", description: "Transparent loan calculators and instant trade-in valuation submission workflows.", icon: TrendingUp },
      { number: "06", title: "Dealership Network Portals", description: "Centralized corporate hubs connecting buyers with regional dealership showrooms.", icon: Building2 }
    ],
    capabilities: [
      "High-speed inventory search and multi-parameter filtering",
      "Cinematic vehicle gallery and video integration",
      "Interactive vehicle configurator architectures",
      "Seamless service appointment calendar synchronization",
      "Transparent finance and lease calculation engines"
    ],
    services: [
      { title: "Website Design & Development", description: "Cinematic automotive flagships and vehicle inventory platforms.", href: "/services/web-design-development" },
      { title: "UI/UX & Product Design", description: "Immersive vehicle configurators and intuitive search interfaces.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating local dealership and vehicle search terms.", href: "/services/seo" },
      { title: "Custom Web Applications", description: "Service booking portals and dealership management tools.", href: "/services/web-applications" },
      { title: "Business Automation", description: "Automated test drive confirmations and service reminder workflows.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze vehicle inventory types, dealership sales pipelines, and customer buying journeys." },
      { number: "02", title: "Map", description: "Architect seamless vehicle discovery, configuration, and reservation funnels." },
      { number: "03", title: "Design", description: "Craft bold, high-impact UI layouts that emphasize vehicle performance and design." },
      { number: "04", title: "Engineer", description: "Build lightning-fast web applications with optimized media and real-time inventory sync." },
      { number: "05", title: "Optimize", description: "Refine mobile responsiveness, search engine visibility, and lead conversion rates." }
    ],
    technology: ["Next.js", "React", "Node.js", "PostgreSQL", "Cloudinary", "Tailwind CSS", "Stripe"],
    outcomes: [
      { number: "01", metric: "CINEMATIC SHOWCASES", title: "Visual Impact", description: "Blazing-fast rendering of heavy automotive photography and video assets." },
      { number: "02", metric: "INSTANT INVENTORY", title: "Sub-Second Search", description: "Lightning-fast filtering across thousands of new and pre-owned vehicle listings." },
      { number: "03", metric: "SEAMLESS BOOKINGS", title: "Service Scheduling", description: "Frictionless online appointment booking synchronized with repair shop calendars." },
      { number: "04", metric: "HIGHER ENGAGEMENT", title: "Configurator Tools", description: "Interactive customization experiences keeping buyers on site longer." }
    ],
    projectTypes: [
      "Automotive Brand Flagships",
      "Dealership Group Websites",
      "Vehicle Inventory Search Platforms",
      "Interactive Car Configurators",
      "Service & Repair Booking Portals",
      "Financing & Trade-In Calculators"
    ],
    relatedIndustries: [
      { slug: "ecommerce-retail", title: "E-Commerce & Retail", shortTitle: "E-Commerce", description: "Catalog architectures and digital shopping platforms." },
      { slug: "logistics-transportation", title: "Logistics & Transportation", shortTitle: "Logistics", description: "Fleet management and transport operations." },
      { slug: "real-estate", title: "Real Estate", shortTitle: "Real Estate", description: "High-value asset discovery and filtering platforms." }
    ],
    faqs: [
      { question: "Can you build interactive vehicle configurators?", answer: "Yes. We design and develop custom digital configurators that allow buyers to customize vehicle colors, trims, interior packages, and accessories in real time." },
      { question: "How do you handle large vehicle inventory feeds?", answer: "We build high-performance search engines that ingest inventory feeds (from DMS providers or custom databases) and allow instant multi-parameter filtering." },
      { question: "Can you integrate online service and maintenance booking?", answer: "We create frictionless scheduling widgets synchronized directly with dealership service department calendars." },
      { question: "How do you showcase high-res automotive photography without latency?", answer: "We utilize advanced image optimization, responsive sizing, and global CDN delivery to ensure cinematic vehicle galleries load instantly." }
    ],
    metaTitle: "Automotive Web Development & Showroom Platforms | WebMash Labs",
    metaDescription: "WebMash Labs designs automotive brand websites, vehicle inventory platforms, and service booking portals for dealerships."
  },

  "restaurants-food": {
    id: "13",
    slug: "restaurants-food",
    title: "Digital Experiences for Restaurants & Food",
    shortTitle: "Restaurants & Food",
    eyebrow: "18 — RESTAURANTS & FOOD",
    heroDescription: "Culinary brands and hospitality groups need mouth-watering digital flagships, seamless table reservation systems, and direct online ordering workflows. We engineer high-appetite web experiences.",
    heroAccent: "Engineered for Culinary Storytelling & Direct Orders",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Fine dining restaurant interior and culinary digital ordering environment",
    imageCaption: "Culinary Platform Architecture — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Chef preparing gourmet dishes and digital reservation dashboard",
    industryIntro: "Restaurant guests eat with their eyes first. Digital flagships must combine stunning food photography, intuitive menu navigation, and instant reservation or ordering capabilities without third-party commission bloat.",
    challengeTitle: "Where restaurant web platforms fall short.",
    challengeDescription: "Unreadable PDF menus, clunky reservation widgets, and heavy reliance on expensive third-party food delivery apps cut into profitability.",
    challenges: [
      { number: "01", title: "Unreadable PDF Menus", description: "Static PDF menus that fail to load properly on mobile phones and cannot be indexed by Google." },
      { number: "02", title: "Commission-Heavy Ordering", description: "Heavy reliance on third-party delivery aggregators that eat into restaurant profit margins." },
      { number: "03", title: "Clunky Reservation Widgets", description: "Confusing table booking calendars that frustrate diners trying to secure a table." },
      { number: "04", title: "Flat Visual Presentation", description: "Websites failing to evoke the atmosphere, culinary artistry, and ambiance of the dining room." }
    ],
    solutions: [
      { number: "01", title: "Cinematic Culinary Flagships", description: "Breathtaking, appetite-driven website designs capturing the ambiance of dining venues.", icon: UtensilsCrossed },
      { number: "02", title: "Interactive Digital Menus", description: "Searchable, category-filtered online menus highlighting dish imagery, ingredients, and dietary tags.", icon: ShoppingBag },
      { number: "03", title: "Direct Table Reservation Systems", description: "Frictionless online booking widgets synchronized with host stand management software.", icon: CheckCircle2 },
      { number: "04", title: "Direct Online Ordering Portals", description: "Zero-commission custom ordering engines for pickup and delivery integration.", icon: Zap },
      { number: "05", title: "Private Dining & Event Enquiries", description: "Specialized event booking workflows for private parties, catering, and buyouts.", icon: Briefcase },
      { number: "06", title: "Multi-Location Concept Hubs", description: "Centralized corporate websites connecting diners to multiple restaurant brands and locations.", icon: Building2 }
    ],
    capabilities: [
      "Appetite-driven high-resolution food photography optimization",
      "Interactive dietary-filtered digital menu systems",
      "Direct table reservation and POS integration",
      "Mobile-first ordering and checkout flows",
      "Local SEO optimization for 'near me' restaurant searches"
    ],
    services: [
      { title: "Website Design & Development", description: "Cinematic culinary flagships and direct ordering portals.", href: "/services/web-design-development" },
      { title: "UI/UX & Product Design", description: "Appetite-driven visual layouts and intuitive menu navigation.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating local food search and restaurant keyword rankings.", href: "/services/seo" },
      { title: "E-Commerce Development", description: "Zero-commission online ordering and merchandise stores.", href: "/services/ecommerce" },
      { title: "Business Automation", description: "Automated reservation confirmations and guest feedback loops.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze culinary brand identity, menu structures, and reservation volume goals." },
      { number: "02", title: "Map", description: "Architect seamless menu discovery, table booking, and ordering pathways." },
      { number: "03", title: "Design", description: "Craft sensory, appetite-evoking UI systems highlighting culinary craftsmanship." },
      { number: "04", title: "Engineer", description: "Build lightning-fast web pages with optimized imagery and reservation API sync." },
      { number: "05", title: "Optimize", description: "Fine-tune local search visibility, mobile ordering speed, and conversion rates." }
    ],
    technology: ["Next.js", "React", "Cloudinary", "Stripe", "Node.js", "Tailwind CSS", "PostgreSQL"],
    outcomes: [
      { number: "01", metric: "DIRECT RESERVATIONS", title: "Increased Bookings", description: "Frictionless table reservation widgets converting hungry visitors into diners." },
      { number: "02", metric: "HIGHER MARGINS", title: "Direct Ordering", description: "Custom online ordering portals eliminating costly third-party commission fees." },
      { number: "03", metric: "SENSORY APPEAL", title: "Cinematic Design", description: "Appetite-driven visual storytelling evoking the ambiance of your dining room." },
      { number: "04", metric: "LOCAL DOMINANCE", title: "Search Visibility", description: "Optimized local SEO putting your restaurant at the top of diner searches." }
    ],
    projectTypes: [
      "Fine Dining Restaurant Flagships",
      "Hospitality Group Corporate Portals",
      "Interactive Digital Menu Hubs",
      "Direct Table Reservation Systems",
      "Zero-Commission Ordering Portals",
      "Private Dining & Catering Sites"
    ],
    relatedIndustries: [
      { slug: "hospitality-travel", title: "Hospitality & Travel", shortTitle: "Hospitality", description: "Hotels, resorts, and travel booking experiences." },
      { slug: "ecommerce-retail", title: "E-Commerce & Retail", shortTitle: "E-Commerce", description: "Online ordering and retail checkout architectures." },
      { slug: "marketing-media", title: "Marketing & Media", shortTitle: "Media", description: "Visual storytelling and brand design flagships." }
    ],
    faqs: [
      { question: "Can you replace static PDF menus with interactive digital menus?", answer: "Yes. We build searchable, mobile-friendly digital menus with high-res dish photography, ingredient descriptions, and dietary filtering (gluten-free, vegan, etc.)." },
      { question: "Can you build direct online ordering to avoid high third-party commission fees?", answer: "We develop custom zero-commission ordering portals integrated with Stripe and local POS or kitchen printing systems." },
      { question: "How do you handle table reservation system integration?", answer: "We integrate popular table management widgets (OpenTable, Resy, SevenRooms) or custom reservation calendars directly into your website." },
      { question: "How do you showcase food photography without slowing down mobile load times?", answer: "We use modern image compression, responsive sizing, and global CDN delivery so mouth-watering food photos load instantly on all phones." }
    ],
    metaTitle: "Restaurant Web Design & Direct Ordering Portals | WebMash Labs",
    metaDescription: "WebMash Labs designs culinary website flagships, interactive digital menus, and direct reservation platforms for restaurants."
  },

  "legal-services": {
    id: "14",
    slug: "legal-services",
    title: "Digital Experiences for Legal Services",
    shortTitle: "Legal Services",
    eyebrow: "14 — LEGAL SERVICES",
    heroDescription: "Law firms and legal practices require digital flagships that project unshakeable credibility, confidentiality, and rigorous expertise. We engineer high-trust law firm websites and secure client portals.",
    heroAccent: "Engineered for Unshakeable Trust, Confidentiality & Authority",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Law firm legal library and professional legal services digital environment",
    imageCaption: "Legal Authority Architecture — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1453945619913-73ec89ba5619?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Attorney reviewing legal contracts and secure client portal interface",
    industryIntro: "Legal clients seek reassurance and proven competence during high-stakes moments. Law firm websites must project absolute professionalism, detail past case victories clearly, and offer secure confidential intake.",
    challengeTitle: "Where law firm websites fall short.",
    challengeDescription: "Dated legal web designs, difficult attorney directories, and insecure contact forms cause potential clients to question firm credibility.",
    challenges: [
      { number: "01", title: "Dated & Uninspiring Design", description: "Stale legal templates that fail to convey modern firm sophistication or trial success." },
      { number: "02", title: "Buried Practice Areas", description: "Poor information architecture hiding specific legal specialties and attorney credentials." },
      { number: "03", title: "Insecure Client Intake", description: "Standard contact forms lacking the confidentiality and encryption required for sensitive legal disclosures." },
      { number: "04", title: "Lack of Thought Leadership", description: "Absence of legal insights, case outcomes, and scholarly articles establishing firm authority." }
    ],
    solutions: [
      { number: "01", title: "Authoritative Law Firm Flagships", description: "Immaculate, high-trust digital presences projecting legal excellence and authority.", icon: Scale },
      { number: "02", title: "Secure Confidential Client Portals", description: "Encrypted document exchange and case status tracking hubs for clients.", icon: ShieldCheck },
      { number: "03", title: "Attorney & Practice Directories", description: "Sophisticated profiles highlighting partner credentials, case victories, and bar admissions.", icon: Briefcase },
      { number: "04", title: "Confidential Case Evaluation Funnels", description: "Multi-step secure intake forms qualifying prospective legal cases with absolute privacy.", icon: CheckCircle2 },
      { number: "05", title: "Legal Insights & Publication Hubs", description: "Advanced publishing platforms for legal commentary, articles, and client alerts.", icon: Megaphone },
      { number: "06", title: "Multi-Office Regional Hubs", description: "Centralized corporate websites connecting clients across multiple firm locations.", icon: Building2 }
    ],
    capabilities: [
      "Bank-grade encryption for confidential client intake",
      "Editorial typography and minimalist legal design systems",
      "Advanced content management for case studies and insights",
      "Secure client document vaults with role-based access",
      "Local and national SEO optimization for legal practice areas"
    ],
    services: [
      { title: "Website Design & Development", description: "Authoritative law firm flagships and digital presences.", href: "/services/web-design-development" },
      { title: "Custom Web Applications", description: "Secure confidential client portals and document exchange vaults.", href: "/services/web-applications" },
      { title: "UI/UX & Product Design", description: "Editorial layouts and sophisticated legal brand identity.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating competitive legal practice area search rankings.", href: "/services/seo" },
      { title: "Business Automation", description: "Automated confidential case intake routing and consultation scheduling.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze firm practice specialties, target client demographics, and intake protocols." },
      { number: "02", title: "Map", description: "Architect secure consultation funnels and clear practice area hierarchies." },
      { number: "03", title: "Design", description: "Craft dignified, minimalist UI systems projecting absolute trust and authority." },
      { number: "04", title: "Engineer", description: "Build lightning-fast web applications with rigorous encryption and data security." },
      { number: "05", title: "Optimize", description: "Refine search engine positioning, site speed, and prospective client conversion rates." }
    ],
    technology: ["Next.js", "React", "Node.js", "PostgreSQL", "Sanity CMS", "Tailwind CSS", "Cloudflare"],
    outcomes: [
      { number: "01", metric: "ABSOLUTE TRUST", title: "Authoritative Design", description: "Dignified digital design establishing immediate credibility and prestige." },
      { number: "02", metric: "CONFIDENTIAL INTAKE", title: "Secure Portals", description: "Encrypted consultation funnels protecting sensitive client communications." },
      { number: "03", metric: "EXPERT DIRECTORIES", title: "Attorney Profiles", description: "Sophisticated credential showcases highlighting partner victories and experience." },
      { number: "04", metric: "LEGAL DOMINANCE", title: "SEO Performance", description: "Targeted technical optimization putting your firm at the top of practice area searches." }
    ],
    projectTypes: [
      "Law Firm Corporate Flagships",
      "Personal Injury & Litigation Sites",
      "Corporate Law Practice Portals",
      "Secure Confidential Client Vaults",
      "Attorney Credential & Case Hubs",
      "Legal Commentary Publishing Sites"
    ],
    relatedIndustries: [
      { slug: "professional-services", title: "Professional Services", shortTitle: "Services", description: "Advisory, consultancy, and corporate websites." },
      { slug: "finance-fintech", title: "Finance & FinTech", shortTitle: "Finance", description: "Secure financial portals and compliance hubs." },
      { slug: "real-estate", title: "Real Estate", shortTitle: "Real Estate", description: "Property law and real estate transaction portals." }
    ],
    faqs: [
      { question: "How do you ensure confidentiality for legal client intake forms?", answer: "We build all legal intake funnels with end-to-end encryption, secure token authentication, and strict adherence to attorney-client confidentiality standards." },
      { question: "Can you build secure client portals for sharing confidential case files?", answer: "Yes. We engineer encrypted client document vaults with role-based access control for exchanging sensitive legal contracts and evidence." },
      { question: "How do you project prestige and authority through law firm web design?", answer: "We utilize editorial typography, restrained color palettes, dignified photography, and minimalist layouts that signal unshakeable professional rigor." },
      { question: "Can you help our firm rank higher for competitive legal search terms?", answer: "We execute comprehensive technical SEO and local optimization strategies tailored specifically for legal practice areas and jurisdictions." }
    ],
    metaTitle: "Law Firm Web Design & Legal Web Development | WebMash Labs",
    metaDescription: "WebMash Labs designs authoritative law firm websites, secure confidential client portals, and digital platforms for legal practices."
  },

  "marketing-media": {
    id: "15",
    slug: "marketing-media",
    title: "Digital Experiences for Marketing & Media",
    shortTitle: "Marketing & Media",
    eyebrow: "15 — MARKETING & MEDIA",
    heroDescription: "Advertising agencies, media houses, and creative studios live by their visual taste and storytelling impact. We engineer bold, high-performance digital flagships and interactive content platforms.",
    heroAccent: "Engineered for Creative Storytelling & Bold Visual Impact",
    heroImage: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Creative marketing agency studio and digital media production environment",
    imageCaption: "Creative Studio Architecture — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1533750349033-2f7b7f14e2c8?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Marketing strategy session and digital media asset management interface",
    industryIntro: "Creative agencies and media companies cannot afford a boring website. Your digital presence must serve as living proof of your creative firepower, motion design capability, and strategic vision.",
    challengeTitle: "Where marketing and media websites fall short.",
    challengeDescription: "Slow-loading video reels, gimmicky animations that break on mobile, and weak case study presentations undermine creative authority.",
    challenges: [
      { number: "01", title: "Heavy Video Reel Latency", description: "Unoptimized portfolio background videos causing slow page loads and choppy playback on mobile devices." },
      { number: "02", title: "Gimmicky, Broken Animations", description: "Overly complex JavaScript animations that crash browsers and hurt accessibility." },
      { number: "03", title: "Weak Creative Case Studies", description: "Portfolios that show pretty visuals without explaining the strategic business impact of the campaign." },
      { number: "04", title: "Outdated Content Publishing", description: "Rigid content management systems that make publishing new campaigns or press releases painful." }
    ],
    solutions: [
      { number: "01", title: "Cinematic Agency Flagships", description: "Bold, visually striking web presences showcasing creative brilliance and campaign impact.", icon: Megaphone },
      { number: "02", title: "Immersive Case Study Portfolios", description: "Rich editorial storytelling layouts highlighting creative strategy, execution, and client results.", icon: Layers },
      { number: "03", title: "High-Performance Video Showreels", description: "Optimized video streaming architectures delivering buttery-smooth motion across all screens.", icon: Cpu },
      { number: "04", title: "Interactive Content Hubs", description: "Dynamic publishing platforms for magazines, podcasts, editorial pieces, and brand journalism.", icon: Compass },
      { number: "05", title: "Client Pitch & Brief Portals", description: "Secure collaborative spaces for sharing creative proposals and campaign assets with brands.", icon: Briefcase },
      { number: "06", title: "Lead Generation & RFP Engines", description: "Sophisticated project inquiry forms qualifying prospective brand partners.", icon: CheckCircle2 }
    ],
    capabilities: [
      "Cinematic video optimization and streaming architecture",
      "Editorial case study grid systems with fluid typography",
      "Headless CMS integration (Sanity, Strapi) for rapid publishing",
      "Sub-second page transitions and smooth micro-interactions",
      "Core Web Vitals optimization for heavy visual sites"
    ],
    services: [
      { title: "Website Design & Development", description: "Bold creative agency flagships and immersive portfolios.", href: "/services/web-design-development" },
      { title: "UI/UX & Product Design", description: "Cinematic visual storytelling and cutting-edge digital experiences.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Dominating search rankings for creative production and marketing agencies.", href: "/services/seo" },
      { title: "Custom Web Applications", description: "Interactive publishing hubs and client pitch portals.", href: "/services/web-applications" },
      { title: "Business Automation", description: "Automated project brief routing and creative inquiry scheduling.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze brand creative identity, portfolio assets, and agency growth objectives." },
      { number: "02", title: "Map", description: "Architect immersive case study journeys and high-value project inquiry funnels." },
      { number: "03", title: "Design", description: "Craft bold, cinematic UI systems that showcase unmatched aesthetic taste." },
      { number: "04", title: "Engineer", description: "Build lightning-fast web applications with optimized video delivery and smooth motion." },
      { number: "05", title: "Optimize", description: "Refine performance metrics, mobile responsiveness, and creative search visibility." }
    ],
    technology: ["Next.js", "React", "Cloudinary", "Sanity CMS", "Tailwind CSS", "Node.js", "PostgreSQL"],
    outcomes: [
      { number: "01", metric: "CREATIVE AUTHORITY", title: "Cinematic Flagships", description: "Bold digital design acting as living proof of your agency's creative firepower." },
      { number: "02", metric: "BUTTERY SMOOTH", title: "Optimized Video", description: "Blazing-fast streaming of heavy showreels and campaign video assets." },
      { number: "03", metric: "DEEP STORYTELLING", title: "Editorial Portfolios", description: "Immersive case study layouts highlighting both design excellence and business ROI." },
      { number: "04", metric: "QUALIFIED RFPS", title: "Strategic Intake", description: "Sophisticated inquiry funnels capturing high-budget brand partnerships." }
    ],
    projectTypes: [
      "Creative Advertising Agency Sites",
      "Digital Media Publishing Hubs",
      "Brand Studio Portfolios",
      "Interactive Video Showreel Sites",
      "Editorial & Magazine Platforms",
      "Client Campaign Pitch Portals"
    ],
    relatedIndustries: [
      { slug: "ecommerce-retail", title: "E-Commerce & Retail", shortTitle: "E-Commerce", description: "D2C brand flagships and retail storytelling platforms." },
      { slug: "hospitality-travel", title: "Hospitality & Travel", shortTitle: "Hospitality", description: "Resort branding and immersive travel experiences." },
      { slug: "saas-technology", title: "SaaS & Technology", shortTitle: "SaaS", description: "Software marketing sites and tech product flagships." }
    ],
    faqs: [
      { question: "How do you ensure heavy video showreels do not slow down our website?", answer: "We utilize optimized video encoding, progressive streaming, lazy loading, and global CDN delivery to ensure cinematic reels play instantly without lag." },
      { question: "Can you build editorial case study portfolios that highlight our agency work?", answer: "Yes. We design custom editorial layouts that weave together high-res imagery, typography, video, and strategic metrics to showcase campaign success." },
      { question: "How do you balance bold creative design with fast performance and SEO?", answer: "We use Next.js server-side rendering and modern image/video optimization pipelines to deliver lightning-fast load times and top-tier SEO rankings without sacrificing aesthetics." },
      { question: "Can you integrate headless CMS platforms for publishing articles and campaigns?", answer: "We integrate flexible headless content management systems like Sanity or Strapi so your team can publish new case studies and press releases effortlessly." }
    ],
    metaTitle: "Marketing & Media Web Development | WebMash Labs",
    metaDescription: "WebMash Labs designs cinematic agency websites, immersive creative portfolios, and digital media platforms."
  },
  // Nonprofit & Organizations
  "nonprofit-organizations": {
    id: "15",
    slug: "nonprofit-organizations",
    title: "Digital Solutions for Nonprofits & NGOs",
    shortTitle: "Nonprofit",
    eyebrow: "15 — NONPROFIT & ORGANIZATIONS",
    heroDescription: "Nonprofits thrive on trust and impact. We build digital ecosystems—from donation engines to volunteer management platforms—that help your organization connect with donors, mobilize supporters, and showcase the real-world change you create.",
    heroAccent: "Driving Impact through Accessible Digital Design",
    heroImage: "https://images.unsplash.com/photo-1488521787935-749e7a83d735?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Community outreach and nonprofit digital impact dashboard",
    imageCaption: "Impact Digitization — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Volunteer management and donation portal interface",
    industryIntro: "Your mission is global, but your digital tools often feel local and constrained. We bridge that gap by creating robust, secure, and highly accessible platforms that convert passive visitors into active supporters.",
    challengeTitle: "Where nonprofit digital efforts fall short.",
    challengeDescription: "Technical barriers often prevent passionate organizations from reaching their full fundraising and volunteer recruitment potential.",
    challenges: [
      { number: "01", title: "Low Donation Conversion", description: "Complex, multi-step donation flows lead to high drop-off rates on mobile devices." },
      { number: "02", title: "Volunteer Management Silos", description: "Manual volunteer coordination is time-consuming and difficult to scale." },
      { number: "03", title: "Impact Obscurity", description: "Failure to visualize success stories makes it hard to prove ROI to potential donors." },
      { number: "04", title: "Accessibility Barriers", description: "Non-inclusive design alienates potential supporters and limits your digital footprint." }
    ],
    solutions: [
      { number: "01", title: "Donation Engines", description: "Frictionless, one-click payment flows optimized for recurring donations.", icon: HandHeart },
      { number: "02", title: "Volunteer Portals", description: "Centralized platforms for sign-ups, scheduling, and volunteer onboarding.", icon: Users },
      { number: "03", title: "Impact Report Sites", description: "Interactive, data-driven sites that showcase your organization's progress.", icon: PieChart },
      { number: "04", title: "Community Hubs", description: "Secure portals for your supporters to engage and collaborate.", icon: Globe },
      { number: "05", title: "Campaign Landing Pages", description: "High-conversion pages built to drive awareness for specific initiatives.", icon: Target },
      { number: "06", title: "Event Management", description: "Simplified systems for event registration and fundraising galas.", icon: CalendarCheck }
    ],
    capabilities: ["Secure payment gateway integration", "WCAG 2.1 accessibility focus", "Interactive data visualization", "Scalable cloud deployment", "SEO-optimized impact storytelling"],
    services: [
      { title: "Website Design & Development", description: "Modern, trust-building digital flagships for your organization.", href: "/services/web-design-development" },
      { title: "Custom Web Applications", description: "Portal development for volunteer and donor management.", href: "/services/web-applications" },
      { title: "SEO & Content Strategy", description: "Boosting your reach to connect with global donors.", href: "/services/seo" }
    ],
    workflow: [
      { number: "01", title: "Identify", description: "Define your organization’s core impact goals and audience." },
      { number: "02", title: "Architect", description: "Create user flows that prioritize ease of giving and engagement." },
      { number: "03", title: "Design", description: "Build empathetic, clear UI that reflects your brand’s mission." },
      { number: "04", title: "Engineer", description: "Develop secure, lightning-fast portals for donation and management." },
      { number: "05", title: "Empower", description: "Launch tools that make it simple for supporters to help." }
    ],
    technology: ["Next.js", "React", "Node.js", "Stripe", "PostgreSQL", "Cloudflare", "Tailwind CSS"],
    outcomes: [
      { number: "01", metric: "HIGHER GIVING", title: "Seamless Donations", description: "Optimized payment flows increase donor conversion rates." },
      { number: "02", metric: "BETTER RECRUITMENT", title: "Engaged Volunteers", description: "Easy sign-up processes lead to stronger community support." },
      { number: "03", metric: "MORE VISIBILITY", title: "Measurable Impact", description: "Digital storytelling proves your results clearly to stakeholders." },
      { number: "04", metric: "INCLUSIVE", title: "Accessible Reach", description: "Every supporter can participate, regardless of ability." }
    ],
    projectTypes: ["Donation & Fundraising Platforms", "Volunteer Recruitment Portals", "Impact Report Websites", "Community Organization Hubs"],
    relatedIndustries: [
      { slug: "healthcare", title: "Healthcare & Medical", shortTitle: "Healthcare", description: "Health-focused nonprofit portals." },
      { slug: "education-edtech", title: "Education & EdTech", shortTitle: "Education", description: "Learning and empowerment platforms." }
    ],
    faqs: [
      { question: "How do you improve donation rates?", answer: "We streamline the donation flow, removing unnecessary form fields and ensuring high-speed performance across all devices." },
      { question: "Can you help us showcase our impact?", answer: "Yes. We design interactive impact report sites that turn raw data and success stories into compelling visual narratives." }
    ],
    metaTitle: "Nonprofit Digital Solutions & Web Development | WebMash Labs",
    metaDescription: "WebMash Labs builds donation platforms, volunteer management portals, and impact report websites for nonprofits."
  },
  // B2B & Wholesale
  "b2b-wholesale": {
    id: "16",
    slug: "b2b-wholesale",
    title: "Digital Portals for B2B & Wholesale",
    shortTitle: "B2B & Wholesale",
    eyebrow: "16 — B2B & WHOLESALE",
    heroDescription: "In the wholesale world, efficiency is your currency. We build custom B2B portals that replace manual spreadsheets with automated ordering, tiered pricing, and seamless ERP integration, ensuring your business stays agile 24/7.",
    heroAccent: "Engineered for Bulk Scale, Precision & ERP Sync",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8317d?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern warehouse management interface and supply chain digital dashboard",
    imageCaption: "Wholesale Digitization — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Digital inventory tracking and bulk ordering system",
    industryIntro: "Wholesale isn't just about selling; it's about managing complex relationships, multi-level pricing, and inventory at scale. Digital transformation here means unlocking revenue through self-service.",
    challengeTitle: "Where wholesale processes fail to scale.",
    challengeDescription: "Reliance on manual emails and phone calls for ordering creates bottlenecks that slow down revenue growth.",
    challenges: [
      { number: "01", title: "Manual Order Processing", description: "Phone-based or email-based ordering is prone to human error and limits your team's bandwidth." },
      { number: "02", title: "Complex Pricing Disparity", description: "Maintaining tiered pricing for different customer segments is impossible without a centralized digital engine." },
      { number: "03", title: "Inventory Opacity", description: "Clients lack real-time visibility into stock availability, leading to constant support inquiries." },
      { number: "04", title: "Legacy System Silos", description: "Your frontend web presence fails to communicate with your backend ERP/Accounting software." }
    ],
    solutions: [
      { number: "01", title: "Custom B2B Portals", description: "Dedicated customer portals for 24/7 self-service ordering and tracking.", icon: Boxes },
      { number: "02", title: "Tiered Pricing Engines", description: "Automated logic to show the right price to the right customer group instantly.", icon: Tag },
      { number: "03", title: "ERP/Inventory Sync", description: "Direct data bridges between your storefront and your inventory management system.", icon: Database },
      { number: "04", title: "Bulk Ordering Flows", description: "Optimized interfaces for fast, repeatable, and high-volume purchases.", icon: ShoppingCart },
      { number: "05", title: "Digital Invoicing", description: "Automated billing and payment portals integrated with financial systems.", icon: Receipt },
      { number: "06", title: "Wholesale Dashboards", description: "Clear visual overview of order history, account status, and reorder alerts.", icon: LayoutDashboard }
    ],
    capabilities: ["Real-time inventory synchronization", "Role-based customer permissions", "Scalable high-volume architecture", "Multi-currency/region support", "Custom ERP middleware"],
    services: [
      { title: "Custom Web Portals", description: "Bespoke portals designed for high-frequency B2B transactions.", href: "/services/web-applications" },
      { title: "UI/UX & Product Design", description: "Interfaces that turn complex catalog browsing into simple workflows.", href: "/services/ui-ux-design" },
      { title: "Business Automation", description: "Reducing manual workload through automated ordering workflows.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Analyze", description: "Audit your current order management and ERP data structure." },
      { number: "02", title: "Architect", description: "Design the logic for tiered pricing and inventory syncing." },
      { number: "03", title: "Design", description: "Create intuitive, fast interfaces for bulk buyers." },
      { number: "04", title: "Engineer", description: "Develop secure portals that talk directly to your back office." },
      { number: "05", title: "Launch", description: "Deploy with full training and ongoing performance tracking." }
    ],
    technology: ["Next.js", "React", "Node.js", "PostgreSQL", "Shopify Plus/Headless", "REST APIs", "Redis"],
    outcomes: [
      { number: "01", metric: "3X FASTER", title: "Reduced Order Time", description: "Shift from manual entry to self-service digital orders." },
      { number: "02", metric: "99% ACCURACY", title: "Fewer Human Errors", description: "Automation eliminates costly miscounts and input mistakes." },
      { number: "03", metric: "SCALABLE", title: "Higher Order Volume", description: "Your digital platform handles growth without extra headcount." },
      { number: "04", metric: "SECURE", title: "Data Integrity", description: "Consistent and secure data flow across your business ecosystem." }
    ],
    projectTypes: ["Wholesale Portals", "Distributor Catalog Sites", "Bulk Ordering Dashboards", "ERP-integrated Storefronts"],
    relatedIndustries: [
      { slug: "ecommerce-retail", title: "E-Commerce & Retail", shortTitle: "Retail", description: "Direct-to-consumer sales optimization." },
      { slug: "manufacturing-industrial", title: "Manufacturing", shortTitle: "Manufacturing", description: "Supply chain and inventory portals." }
    ],
    faqs: [
      { question: "Can you connect our existing ERP?", answer: "Yes. We specialize in building middleware that syncs your digital frontend with your current ERP software." },
      { question: "How do we handle different price lists?", answer: "We implement dynamic pricing engines that automatically detect user roles and apply the correct tiered pricing." }
    ],
    metaTitle: "B2B & Wholesale Digital Portals | WebMash Labs",
    metaDescription: "WebMash Labs develops custom B2B wholesale portals and bulk ordering platforms with full ERP integration for streamlined operations."
  },

  // Energy & Utilities
  "energy-utilities": {
    id: "17",
    slug: "energy-utilities",
    title: "Digital Dashboards for Energy & Utilities",
    shortTitle: "Energy",
    eyebrow: "17 — ENERGY & UTILITIES",
    heroDescription: "Energy management requires precision, real-time data analysis, and visual clarity. We build high-performance dashboards that turn complex grid and consumption data into actionable insights for utilities and their customers.",
    heroAccent: "Visualizing Sustainability & Grid Performance",
    heroImage: "https://images.unsplash.com/photo-1473341617437-c8da0fc4e99f?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Renewable energy grid visualization and digital monitoring dashboard",
    imageCaption: "Utility Analytics — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Smart grid monitoring and energy consumption analytics",
    industryIntro: "The utility sector is digitizing rapidly. Bridging the gap between raw grid data and intuitive user interfaces is critical for operational success and customer transparency.",
    challengeTitle: "Solving data complexity in utilities.",
    challengeDescription: "Transforming vast amounts of raw telemetry data into clear, user-friendly digital experiences is a massive hurdle.",
    challenges: [
      { number: "01", title: "Data Overload", description: "Raw energy data is too dense; users need simplified, actionable visual representations." },
      { number: "02", title: "Transparency Gaps", description: "Utility customers often feel disconnected from their consumption patterns." },
      { number: "03", title: "Performance Latency", description: "Real-time monitoring dashboards often suffer from lag when processing large sensor streams." },
      { number: "04", title: "Compliance Requirements", description: "Energy sectors face strict regulations regarding data display and privacy." }
    ],
    solutions: [
      { number: "01", title: "Grid Monitoring Dashboards", description: "High-speed visualization of grid performance and sensor data.", icon: BarChart3 },
      { number: "02", title: "Consumption Portals", description: "User-friendly interfaces for customers to track and manage energy usage.", icon: Gauge },
      { number: "03", title: "Sustainability Trackers", description: "Impact reporting tools for organizations tracking green initiatives.", icon: Leaf },
      { number: "04", title: "Alerting Systems", description: "Automated notification engines for grid anomalies or usage thresholds.", icon: Bell },
      { number: "05", title: "Analytical Tools", description: "Custom data visualization suites for internal utility analytics.", icon: LineChart },
      { number: "06", title: "Public Information Hubs", description: "Accessible platforms for sharing grid health and sustainability updates.", icon: Info }
    ],
    capabilities: ["Real-time data visualization", "High-frequency telemetry processing", "Scalable cloud infrastructure", "WCAG compliant data reporting", "Custom alerting engines"],
    services: [
      { title: "Custom Web Applications", description: "High-performance data dashboards for utility management.", href: "/services/web-applications" },
      { title: "UI/UX Design", description: "Translating complex utility data into intuitive visuals.", href: "/services/ui-ux-design" },
      { title: "SEO & Performance", description: "Optimizing public-facing portals for accessibility and visibility.", href: "/services/seo" }
    ],
    workflow: [
      { number: "01", title: "Assess", description: "Identify core data metrics and user pain points." },
      { number: "02", title: "Visualize", description: "Design clear data hierarchies that reduce cognitive load." },
      { number: "03", title: "Engineer", description: "Build scalable backends to handle streaming utility data." },
      { number: "04", title: "Optimize", description: "Ensure ultra-low latency for dashboard responsiveness." },
      { number: "05", title: "Deliver", description: "Launch secure, accessible portals for staff and consumers." }
    ],
    technology: ["Next.js", "React", "Node.js", "D3.js", "PostgreSQL", "Cloudflare", "Tailwind CSS"],
    outcomes: [
      { number: "01", metric: "INSTANT INSIGHTS", title: "Real-time Clarity", description: "Dashboards that display critical grid info without delay." },
      { number: "02", metric: "BETTER ENGAGEMENT", title: "Consumer Empowerment", description: "Customers clearly understand and manage their energy footprint." },
      { number: "03", metric: "SCALABLE DATA", title: "Robust Infrastructure", description: "Systems designed to grow with your data stream capacity." },
      { number: "04", metric: "COMPLIANT", title: "Regulatory Ready", description: "Data presentation that meets strict industry standards." }
    ],
    projectTypes: ["Grid Monitoring Dashboards", "Consumer Usage Portals", "Impact Reporting Tools", "Utility Analytics Suites"],
    relatedIndustries: [
      { slug: "saas-technology", title: "SaaS & Technology", shortTitle: "SaaS", description: "Software for data analytics." },
      { slug: "manufacturing-industrial", title: "Manufacturing", shortTitle: "Industrial", description: "Industrial equipment tracking." }
    ],
    faqs: [
      { question: "Can you handle real-time data?", answer: "Yes. We optimize our frontend and backend architectures to handle streaming data feeds with minimal latency." },
      { question: "Are your portals accessible?", answer: "Absolutely. Data visualization, while complex, is designed with accessibility first to ensure all users can interpret metrics." }
    ],
    metaTitle: "Energy & Utilities Digital Solutions | WebMash Labs",
    metaDescription: "WebMash Labs builds high-performance grid monitoring dashboards, energy consumption analytics, and utility portals."
  },

  // Fitness & Wellness
  "fitness-wellness": {
    id: "18",
    slug: "fitness-wellness",
    title: "Digital Ecosystems for Fitness & Wellness",
    shortTitle: "Fitness",
    eyebrow: "18 — FITNESS & WELLNESS",
    heroDescription: "Fitness is about motivation, tracking, and community. We build digital hubs—from member management apps to scheduling engines—that help health brands engage their users and scale their membership base effectively.",
    heroAccent: "Empowering Healthy Lifestyles through Tech",
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Modern fitness studio app and wellness tracking interface",
    imageCaption: "Wellness Technology — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1571019613454-1b2f9dd85373?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "User interface for workout scheduling and fitness tracking",
    industryIntro: "The wellness space is crowded. To stand out, you need a digital experience that is as frictionless as a personal trainer's guidance—fast, intuitive, and mobile-first.",
    challengeTitle: "Removing friction from the fitness journey.",
    challengeDescription: "When booking a class or tracking a workout is difficult, members leave. We fix the technical barriers that kill retention.",
    challenges: [
      { number: "01", title: "Clunky Booking Systems", description: "Hard-to-use scheduling keeps potential members from committing to classes." },
      { number: "02", title: "Low Engagement", description: "Generic web experiences fail to motivate members to return regularly." },
      { number: "03", title: "Fragmented Tech Stack", description: "Membership, payment, and content systems that don't talk to each other." },
      { number: "04", title: "Mobile-First Neglect", description: "Fitness members live on mobile; a poor mobile experience is a death sentence." }
    ],
    solutions: [
      { number: "01", title: "Member Apps & Portals", description: "Custom portals for member account management and profile tracking.", icon: UserCircle },
      { number: "02", title: "Scheduling Engines", description: "Real-time class booking and trainer appointment management systems.", icon: CalendarDays },
      { number: "03", title: "Ecommerce Hubs", description: "Integration for selling merchandise, supplements, or workout plans.", icon: ShoppingBag },
      { number: "04", title: "Wellness Content Hubs", description: "Beautiful blog and video platforms for wellness education.", icon: BookOpen },
      { number: "05", title: "Progression Trackers", description: "Interactive dashboards that visualize member activity and milestones.", icon: TrendingUp },
      { number: "06", title: "Automated Reminders", description: "Integrated notifications to keep members motivated and present.", icon: BellRing }
    ],
    capabilities: ["Mobile-first responsive design", "Seamless payment integration", "Real-time scheduling logic", "High-performance content delivery", "Community forum integration"],
    services: [
      { title: "Web Design & Development", description: "High-performance sites that showcase your studio’s vibe.", href: "/services/web-design-development" },
      { title: "Custom Web Applications", description: "Membership portals that handle complex booking workflows.", href: "/services/web-applications" },
      { title: "UI/UX & Product Design", description: "Motivating interfaces designed for active, mobile users.", href: "/services/ui-ux-design" }
    ],
    workflow: [
      { number: "01", title: "Understand", description: "Analyze your members' behavior and common drop-off points." },
      { number: "02", title: "Map", description: "Design a smooth, fast user journey from signup to workout." },
      { number: "03", title: "Design", description: "Create high-energy, clean UI that fits your brand identity." },
      { number: "04", title: "Engineer", description: "Build scalable web apps with rock-solid scheduling engines." },
      { number: "05", title: "Optimize", description: "Refine mobile performance to ensure your app is always accessible." }
    ],
    technology: ["Next.js", "React", "Node.js", "Stripe", "PostgreSQL", "Cloudflare", "Tailwind CSS"],
    outcomes: [
      { number: "01", metric: "HIGHER RETENTION", title: "Seamless Experience", description: "Frictionless booking keeps members coming back." },
      { number: "02", metric: "MOBILE READY", title: "Anywhere Access", description: "Perfect performance on every device your members use." },
      { number: "03", metric: "SCALABLE", title: "Grow Memberships", description: "Your digital platform is ready for 100 or 100,000 members." },
      { number: "04", metric: "CONVERSION", title: "More Revenue", description: "Integrated ecommerce turns members into consistent buyers." }
    ],
    projectTypes: ["Fitness Membership Portals", "Class Scheduling Apps", "Wellness Content Platforms", "Personal Trainer Dashboards"],
    relatedIndustries: [
      { slug: "healthcare", title: "Healthcare & Medical", shortTitle: "Healthcare", description: "Patient wellness and health monitoring." },
      { slug: "ecommerce-retail", title: "E-Commerce & Retail", shortTitle: "Retail", description: "Merchandise sales and hubs." }
    ],
    faqs: [
      { question: "Can you build a class booking system?", answer: "Yes. We build custom scheduling engines that integrate directly with your calendar and payment system." },
      { question: "Is the interface mobile-optimized?", answer: "Absolutely. Fitness members are almost always on their phones, so we prioritize mobile UX in every design." }
    ],
    metaTitle: "Fitness & Wellness Digital Solutions | WebMash Labs",
    metaDescription: "WebMash Labs creates custom member portals, scheduling engines, and wellness web platforms for fitness brands."
  },
  // Startups
  "startups": {
    id: "20",
    slug: "startups",
    title: "Launchpad for Startups & Scaleups",
    shortTitle: "Startups",
    eyebrow: "20 — STARTUPS",
    heroDescription: "In the startup world, speed is survival. We build high-velocity MVPs, scalable architectures, and pitch-ready digital products that help you validate your ideas, secure funding, and capture your market before the competition does.",
    heroAccent: "Velocity. Validation. Scalability.",
    heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop",
    heroImageAlt: "Startup office environment and high-growth digital product dashboard",
    imageCaption: "MVP Development — WebMash Labs",
    featureImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    featureImageAlt: "Startup team collaborating on digital growth strategy",
    industryIntro: "You have a vision and a tight timeline. We act as your technical co-founder, transforming complex product roadmaps into functional, market-ready realities with a focus on 'build, measure, learn' iterations.",
    challengeTitle: "The startup bottleneck.",
    challengeDescription: "Lack of technical execution and slow development cycles often cause startups to miss their window of opportunity.",
    challenges: [
      { number: "01", title: "Slow Time-to-Market", description: "Spending too much time on over-engineering an initial product instead of testing the market." },
      { number: "02", title: "Scalability Limits", description: "Building on fragile foundations that break as soon as your user base grows." },
      { number: "03", title: "Funding Readiness", description: "Lacking a polished, functional demo to show investors your product's potential." },
      { number: "04", title: "Feature Creep", description: "Losing focus on core value propositions by trying to build everything at once." }
    ],
    solutions: [
      { number: "01", title: "MVP Development", description: "Building lean, high-impact products to test core assumptions quickly.", icon: Rocket },
      { number: "02", title: "Scalable Architecture", description: "Robust backend foundations designed to support 10x user growth.", icon: Layers },
      { number: "03", title: "Investor-Ready Demos", description: "Polished, high-fidelity prototypes built to impress potential funders.", icon: Presentation },
      { number: "04", title: "Rapid Iteration Cycles", description: "Agile workflows that allow you to pivot based on user feedback.", icon: RefreshCw },
      { number: "05", title: "Automated Tooling", description: "Setting up CI/CD and analytics so you focus on growth, not ops.", icon: Settings },
      { number: "06", title: "Technical Strategy", description: "Advisory on stack selection and product roadmap planning.", icon: Lightbulb }
    ],
    capabilities: ["Rapid Prototyping", "Scalable Cloud Architecture", "Agile/SCRUM Methodology", "Full-Stack Deployment", "Investor Pitch Support"],
    services: [
      { title: "MVP & Product Design", description: "Taking you from concept to launch in record time.", href: "/services/web-applications" },
      { title: "UI/UX & Product Design", description: "Intuitive designs that drive user adoption and retention.", href: "/services/ui-ux-design" },
      { title: "Growth Automation", description: "Building systems to automate marketing and user acquisition.", href: "/services/ai-automation" }
    ],
    workflow: [
      { number: "01", title: "Define", description: "Distill your vision into the most critical 'must-have' features." },
      { number: "02", title: "Prototype", description: "Design low-friction user journeys to validate the concept." },
      { number: "03", title: "Develop", description: "Build the MVP using a modern, scalable technology stack." },
      { number: "04", title: "Launch", description: "Go to market fast and collect real-world user data." },
      { number: "05", title: "Scale", description: "Iterate, add features, and grow the infrastructure alongside demand." }
    ],
    technology: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Vercel", "Stripe"],
    outcomes: [
      { number: "01", metric: "3X FASTER", title: "Rapid Launch", description: "Get your product in front of users weeks ahead of the competition." },
      { number: "02", metric: "SCALABLE", title: "Ready for Growth", description: "Your tech foundation grows seamlessly with your user count." },
      { number: "03", metric: "INVESTOR READY", title: "Funding Success", description: "Polished products that prove your model works." },
      { number: "04", metric: "AGILE", title: "Easy Pivoting", description: "An architecture designed for change, not rigidity." }
    ],
    projectTypes: ["MVPs & Prototypes", "SaaS Platforms", "Investor Demos", "Growth-Ready Web Apps"],
    relatedIndustries: [
      { slug: "saas-technology", title: "SaaS & Technology", shortTitle: "SaaS", description: "Scaling software businesses." },
      { slug: "ecommerce-retail", title: "E-Commerce & Retail", shortTitle: "Retail", description: "Market-ready digital storefronts." }
    ],
    faqs: [
      { question: "How quickly can we launch our MVP?", answer: "We focus on 'MVP velocity.' Depending on scope, we can move from concept to a live, production-ready environment in weeks." },
      { question: "Do you help with technical strategy?", answer: "Yes. We act as an extension of your team, advising on tech stack and roadmap to ensure you build for scale from day one." }
    ],
    metaTitle: "Startup MVP & Product Development | WebMash Labs",
    metaDescription: "WebMash Labs builds high-velocity MVPs, scalable web platforms, and investor-ready products for startups."
  }
};

// ==========================================
// STATIC PARAMS & METADATA
// ==========================================
export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = industries[slug];

  if (!industry) {
    return {
      title: "Industry Not Found | WebMash Labs",
      description: "The requested industry page could not be found."
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webmashlabs.com";
  const url = `${siteUrl}/industries/${industry.slug}`;

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url,
      siteName: "WebMash Labs",
      type: "website",
      images: [
        {
          url: industry.heroImage,
          alt: industry.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
      images: [industry.heroImage],
    },
  };
}

// ==========================================
// MAIN DYNAMIC INDUSTRY DETAIL PAGE COMPONENT
// ==========================================
export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = industries[slug];

  if (!industry) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webmashlabs.com";

  // Structured Data JSON-LD
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": industry.title,
    "description": industry.heroDescription,
    "provider": {
      "@type": "Organization",
      "name": "WebMash Labs",
      "url": siteUrl
    },
    "areaServed": "Global",
    "url": `${siteUrl}/industries/${industry.slug}`
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Industries",
        "item": `${siteUrl}/industries`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": industry.shortTitle,
        "item": `${siteUrl}/industries/${industry.slug}`
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-[#020617] text-[#F8FAFC] selection:bg-[#2563EB] selection:text-white">
        
        {/* ==================== 23. BREADCRUMBS & NAVIGATION ==================== */}
        <nav aria-label="Breadcrumb" className="border-b border-white/[0.08] bg-[#020617]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
            <ol className="flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-mono text-[#64748B]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              </li>
              <li>/</li>
              <li className="text-[#60A5FA]" aria-current="page">
                {industry.shortTitle}
              </li>
            </ol>
          </div>
        </nav>

        {/* ==================== SECTION 01 — DARK HERO ==================== */}
        <header className="relative bg-[#020617] pt-12 pb-24 lg:pt-20 lg:pb-36 overflow-hidden border-b border-white/[0.08]">
          {/* Subtle background radial blue glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 flex flex-col items-start space-y-8">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#60A5FA] px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                  {industry.eyebrow}
                </span>

                <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold tracking-tight text-white leading-[1.08]">
                  Digital experiences <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#60A5FA] to-[#2563EB]">
                    built for {industry.shortTitle.toLowerCase()}.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-[#94A3B8] font-normal leading-relaxed max-w-2xl">
                  {industry.heroDescription}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-[#2563EB]/25"
                  >
                    Start a Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link
                    href="/services/web-design-development"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-white font-medium text-sm tracking-wide border border-white/10 transition-all duration-300"
                  >
                    Explore Our Services
                  </Link>
                </div>

                {/* Metadata Row */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.08] w-full max-w-xl">
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B]">Industry</span>
                    <span className="block text-sm font-semibold text-white mt-1">{industry.shortTitle}</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B]">Focus</span>
                    <span className="block text-sm font-semibold text-white mt-1">Digital Platforms</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B]">Approach</span>
                    <span className="block text-sm font-semibold text-white mt-1">Strategy + Engineering</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Premium Visual Hero Image */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-70" />
                  <Image
                    src={industry.heroImage}
                    alt={industry.heroImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#60A5FA]">Verified Practice</span>
                    <span className="text-sm font-medium text-white/90">{industry.imageCaption}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </header>

        {/* ==================== SECTION 02 — INDUSTRY INTRO ==================== */}
        <section className="bg-[#F8FAFC] text-[#0F172A] py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute top-12 right-12 font-black text-[12rem] text-[#0F172A] opacity-[0.03] select-none pointer-events-none hidden lg:block">
            {industry.id}
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2563EB]">
                  The Industry
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                  Digital transformation in {industry.shortTitle.toLowerCase()}.
                </h2>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 space-y-6 text-[#475569] text-lg sm:text-xl font-normal leading-relaxed">
                <p className="font-medium text-[#0F172A]">
                  {industry.industryIntro}
                </p>
                <p>
                  At WebMash Labs, we reject generic templates and cookie-cutter designs. We immerse ourselves in the operational realities of your sector to engineer custom digital systems that solve real business friction, build unbreakable trust, and scale effortlessly.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== SECTION 03 — INDUSTRY CHALLENGES ==================== */}
        <section className="bg-[#020617] text-white py-24 sm:py-32 relative border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#60A5FA]">
                Challenges & Bottlenecks
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {industry.challengeTitle}
              </h2>
              <p className="text-[#94A3B8] text-lg">
                {industry.challengeDescription}
              </p>
            </div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.challenges.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#2563EB]/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm text-[#60A5FA] tracking-widest">{item.number}</span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center group-hover:bg-[#2563EB] transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#60A5FA] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#94A3B8] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================== SECTION 04 — WHAT WE BUILD FOR THIS INDUSTRY ==================== */}
        <section className="bg-[#F8FAFC] text-[#0F172A] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2563EB]">
                Engineered Solutions
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
                Digital systems designed around the realities of {industry.shortTitle.toLowerCase()}.
              </h2>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industry.solutions.map((sol, index) => {
                const IconComponent = sol.icon || CheckCircle2;
                return (
                  <div
                    key={index}
                    className="group bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#2563EB]/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs text-[#64748B]">{sol.number}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors">
                        {sol.title}
                      </h3>
                      <p className="text-[#475569] text-base leading-relaxed">
                        {sol.description}
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#2563EB]">
                      <span>WebMash Spec</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ==================== SECTION 05 — INDUSTRY VISUAL FEATURE ==================== */}
        <section className="bg-white text-[#0F172A] py-24 sm:py-32 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left: Feature Image */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-[#E2E8F0] shadow-xl group">
                  <Image
                    src={industry.featureImage}
                    alt={industry.featureImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Right: Insight Content */}
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2563EB]">
                  Architectural Focus
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                  Designed around the moments that matter.
                </h2>
                <p className="text-lg text-[#475569] leading-relaxed">
                  Every industry possesses unique inflection points where digital interaction either builds absolute loyalty or causes immediate abandonment. We engineer around those precise moments.
                </p>

                <div className="space-y-4 pt-4">
                  {industry.capabilities.slice(0, 3).map((cap, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-base font-semibold text-[#0F172A]">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== SECTION 06 — SERVICES FOR THIS INDUSTRY ==================== */}
        <section className="bg-[#020617] text-white py-24 sm:py-32 border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#60A5FA]">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Capabilities that move the industry forward.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industry.services.map((srv, index) => (
                <Link
                  key={index}
                  href={srv.href}
                  className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#2563EB] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-[#60A5FA] tracking-widest block mb-4">SERVICE / 0{index + 1}</span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#60A5FA] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-[#94A3B8] text-base leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#60A5FA]">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ==================== SECTION 07 — INDUSTRY-SPECIFIC WORKFLOW ==================== */}
        <section className="bg-[#F8FAFC] text-[#0F172A] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2563EB]">
                Methodology
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
                A process shaped around your industry.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {industry.workflow.map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-[#E2E8F0] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#2563EB] font-bold tracking-widest block mb-6">STEP {step.number}</span>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================== SECTION 08 — TECHNOLOGY / ENGINEERING ==================== */}
        <section className="bg-[#020617] text-white py-24 sm:py-32 border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#60A5FA]">
                  Technical Foundation
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Built on a modern technical foundation.
                </h2>
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  Every technical stack we deploy is selected based on performance, uncompromising security, scalability, maintainability, and seamless API integrations.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {industry.technology.map((tech, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex items-center justify-center">
                    <span className="font-mono text-sm font-bold text-white tracking-wide">{tech}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ==================== SECTION 09 — INDUSTRY OUTCOMES ==================== */}
        <section className="bg-white text-[#0F172A] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2563EB]">
                Business Impact
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
                Designed for outcomes, not just deliverables.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industry.outcomes.map((out, index) => (
                <div key={index} className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#2563EB] block mb-4">{out.metric}</span>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3">{out.title}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed">{out.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================== SECTION 10 — PROJECT TYPES ==================== */}
        <section className="bg-[#F8FAFC] text-[#0F172A] py-24 sm:py-32 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2563EB]">
                Project Scope
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
                What we build for {industry.shortTitle.toLowerCase()}.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.projectTypes.map((proj, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white border border-[#E2E8F0] flex items-center space-x-4 shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-[#2563EB] flex-shrink-0" />
                  <span className="text-base font-bold text-[#0F172A]">{proj}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================== SECTION 11 — CASE STUDY / WORK CONNECTION ==================== */}
        <section className="bg-[#020617] text-white py-24 sm:py-32 border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10">
              
              <div className="space-y-4 max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#60A5FA]">Engagement</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Looking for a similar challenge in {industry.shortTitle.toLowerCase()}?
                </h3>
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  WebMash Labs designs and engineers robust digital products tailored to your exact operational requirements. Let's discuss your roadmap.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#1d4ed8]"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-sm tracking-wide border border-white/10 transition-all duration-300"
                >
                  Explore Our Work
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== SECTION 12 — RELATED INDUSTRIES ==================== */}
        <section className="bg-white text-[#0F172A] py-24 sm:py-32 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2563EB]">
                Cross-Sector Expertise
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
                Related industries we serve.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.relatedIndustries.map((rel, index) => (
                <Link
                  key={index}
                  href={`/industries/${rel.slug}`}
                  className="group p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-[#2563EB] tracking-widest block mb-4">INDUSTRY / 0{index + 1}</span>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-[#475569] text-base leading-relaxed">
                      {rel.description}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#2563EB]">
                    <span>Explore Industry</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ==================== SECTION 13 — FAQ ==================== */}
        <section className="bg-[#F8FAFC] text-[#0F172A] py-24 sm:py-32 border-t border-[#E2E8F0]">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#2563EB]">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
                Common questions about our {industry.shortTitle.toLowerCase()} solutions.
              </h2>
            </div>

            <div className="space-y-6">
              {industry.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm open:border-[#2563EB]/50 transition-all duration-300"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none text-xl font-bold text-[#0F172A] group-open:text-[#2563EB] transition-colors">
                    <span>{faq.question}</span>
                    <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center flex-shrink-0 ml-4 group-open:bg-[#2563EB] group-open:text-white transition-colors">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                  </summary>
                  <p className="mt-4 text-[#475569] text-lg leading-relaxed pt-4 border-t border-[#E2E8F0]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* ==================== SECTION 14 — FINAL CTA ==================== */}
        <section className="bg-[#020617] text-white py-24 sm:py-36 relative overflow-hidden border-t border-white/[0.08]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2563EB]/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 space-y-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#60A5FA]">
              Start Your Project
            </span>

            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tight text-white leading-tight">
              Build a better digital experience for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#60A5FA] to-[#2563EB]">
                {industry.shortTitle.toLowerCase()}.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-[#94A3B8] font-normal leading-relaxed max-w-2xl mx-auto">
              Tell us what you're building, where your current platform is falling short, or what you want to improve. We'll help define the right technical and digital direction.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#2563EB] text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-[#2563EB]/25"
              >
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-white font-medium text-sm tracking-wide border border-white/10 transition-all duration-300"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}