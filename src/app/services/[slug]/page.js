import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Globe2,
  Sparkles ,
  Smartphone ,
  Briefcase ,
  Store ,
  Truck ,
  Mail ,
  Code2,
  Layout,
  Monitor,
  ShoppingBag,
  PenTool,
  TrendingUp,
  Search,
  Zap,
  Workflow,
  ShieldCheck,
  Gauge,
  Server,
  Database,
  Lock,
  Layers,
  Target,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Cpu,
  Cloud,
  Terminal,
  Activity,
  Layers3,
  Layers2,
  Sliders,
  Check,
  ArrowRight,
} from "lucide-react";

const services = {
  "web-design-development": {
    id: "01",
    slug: "web-design-development",
    title: "Website Design & Development",
    shortTitle: "Web Design",
    eyebrow: "01 — Website Design & Development",
    heroDescription: "Websites that make your business easier to trust, understand, and choose.",
    challengeTitle: "Outdated websites create friction before a prospect ever contacts your business.",
    challenge: "Outdated digital presence and unoptimized user journeys.",
    challengePoints: [
      "Messaging that fails to clearly communicate your core commercial value",
      "Slow mobile performance and awkward layouts that drive users away",
      "Weak calls-to-action that leave interested visitors with nowhere to go"
    ],
    deliverablesHeading: "Everything required to launch a stronger web presence.",
    deliverables: [
      { number: "01", title: "Strategic Positioning", description: "Structuring your narrative and value proposition for maximum clarity.", icon: Target },
      { number: "02", title: "Information Architecture", description: "Mapping intuitive user journeys that guide visitors toward conversion.", icon: Layout },
      { number: "03", title: "Refined Interface Design", description: "Clean, restrained visual execution built around your brand identity.", icon: PenTool },
      { number: "04", title: "Frontend Engineering", description: "Fast, accessible code built with modern web standards.", icon: Code2 },
      { number: "05", title: "CMS Configuration", description: "Flexible content structures that your team can update with ease.", icon: Database }
    ],
    capabilitiesHeading: "Built for clarity, speed, and conversion.",
    capabilities: [
      { title: "Performance Architecture", desc: "Optimized asset loading and clean code structures focused on speed." },
      { title: "Conversion Pathways", desc: "Intent-driven layouts designed to turn casual visitors into qualified leads." },
      { title: "Responsive Layouts", desc: "Fluid interfaces that adapt seamlessly across all device viewports." },
      { title: "Sustainable Scale", desc: "Modular codebases built to expand gracefully as your business grows." }
    ],
    processHeading: "A structured path from concept to launch.",
    process: [
      { num: "01", title: "Strategy", desc: "Define commercial objectives, audience expectations, and key messaging." },
      { num: "02", title: "Structure", desc: "Map wireframes, information architecture, and core user journeys." },
      { num: "03", title: "Design", desc: "Craft the visual system, typography, and polished interface layouts." },
      { num: "04", title: "Development", desc: "Engineer the front-end and integrate reliable content infrastructure." },
      { num: "05", title: "QA", desc: "Rigorously test responsiveness, cross-browser compatibility, and speed." },
      { num: "06", title: "Launch", desc: "Execute a smooth go-live deployment with zero downtime." }
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Cloudflare", "Vercel"],
    outcomesHeading: "Designed for measurable impact.",
    outcomes: [
      { num: "01", title: "TRUST", desc: "A polished digital presence that immediately elevates perceived credibility." },
      { num: "02", title: "CONVERSION", desc: "Purposeful UX that turns passive readers into active business inquiries." },
      { num: "03", title: "PERFORMANCE", desc: "Fast-loading pages built around modern web standards." }
    ],
    visualType: "web",
    visualStory: [
      { step: "01", title: "Strategy", desc: "Aligning brand narrative with buyer intent." },
      { step: "02", title: "Structure", desc: "Wireframing user journeys and content priority." },
      { step: "03", title: "Interface", desc: "Refined typography and visual hierarchy." },
      { step: "04", title: "Performance", desc: "Optimized speed and responsive layouts." }
    ],
    relatedServices: ["ui-ux-design", "seo", "ecommerce"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Website Design & Development Services | WebMash Labs",
    metaDescription: "Websites that make your business easier to trust, understand, and choose. Focused on performance, clarity, and growth."
  },
  "web-applications": {
    id: "02",
    slug: "web-applications",
    title: "Custom Web Applications",
    shortTitle: "Web Apps",
    eyebrow: "02 — Custom Web Applications",
    heroDescription: "Complex business workflows, turned into software people can actually use.",
    challengeTitle: "Disconnected workflows and legacy systems slow down business operations.",
    challenge: "Rigid legacy software and scaling bottlenecks.",
    challengePoints: [
      "Clunky internal tools that require excessive training and manual workarounds",
      "Fragmented data scattered across tools that do not communicate",
      "Scalability ceilings that prevent software from handling growth"
    ],
    deliverablesHeading: "From architecture to production-ready software.",
    deliverables: [
      { number: "01", title: "System Architecture", description: "Designing secure, scalable backend and frontend data structures.", icon: Server },
      { number: "02", title: "Workflow UX Design", description: "Translating complex business rules into intuitive user interfaces.", icon: Layout },
      { number: "03", title: "Full-Stack Engineering", description: "Building robust applications with modern frameworks and APIs.", icon: Code2 },
      { number: "04", title: "Third-Party Integration", description: "Connecting payment gateways, CRMs, and external services.", icon: Workflow },
      { number: "05", title: "Access & Security", description: "Implementing reliable authentication and role-based permissions.", icon: Lock }
    ],
    capabilitiesHeading: "Engineered for reliability and speed.",
    capabilities: [
      { title: "Modular Architecture", desc: "Clean component structures designed for effortless feature expansion." },
      { title: "Robust Backends", desc: "Performant databases and API layers built to handle high concurrency." },
      { title: "Secure Access", desc: "Industry-standard authentication and encrypted data transmission." },
      { title: "Automated Testing", desc: "Rigorous verification suites ensuring stable software releases." }
    ],
    processHeading: "A disciplined engineering methodology.",
    process: [
      { num: "01", title: "Discovery", desc: "Analyze business logic, user roles, and data requirements." },
      { num: "02", title: "Architecture", desc: "Establish database schemas, API contracts, and UX blueprints." },
      { num: "03", title: "UX Design", desc: "Prototype functional user interfaces and administrative dashboards." },
      { num: "04", title: "Engineering", desc: "Develop secure APIs, authentication flows, and frontend views." },
      { num: "05", title: "Testing", desc: "Verify system integrity, edge cases, and load tolerance." },
      { num: "06", title: "Deployment", desc: "Launch to cloud infrastructure with continuous monitoring." }
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "SQL Server", "Docker"],
    outcomesHeading: "Reliable software for growing operations.",
    outcomes: [
      { num: "01", title: "RELIABILITY", desc: "Stable uptime and predictable performance across user sessions." },
      { num: "02", title: "EFFICIENCY", desc: "Streamlined digital workflows that eliminate operational friction." },
      { num: "03", title: "SCALABILITY", desc: "Software infrastructure capable of expanding alongside your business." }
    ],
    visualType: "app",
    visualStory: [
      { step: "01", title: "Frontend", desc: "Intuitive user views and dashboards." },
      { step: "02", title: "API Layer", desc: "Secure endpoints and data routing." },
      { step: "03", title: "Database", desc: "Structured data storage and retrieval." },
      { step: "04", title: "Auth", desc: "Encrypted role-based access control." }
    ],
    relatedServices: ["web-design-development", "ai-automation", "maintenance-hosting"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Custom Web Applications & SaaS Development | WebMash Labs",
    metaDescription: "Complex business workflows, turned into software people can actually use. Scalable web apps built for performance."
  },
  "ecommerce": {
    id: "03",
    slug: "ecommerce",
    title: "E-Commerce Experiences",
    shortTitle: "E-Commerce",
    eyebrow: "03 — E-Commerce Experiences",
    heroDescription: "Digital storefronts designed to turn product interest into revenue.",
    challengeTitle: "Friction between product discovery and checkout costs valuable revenue.",
    challenge: "Cart abandonment and low conversion velocity.",
    challengePoints: [
      "Clunky checkout flows that cause shoppers to abandon baskets",
      "Generic storefronts that fail to communicate product value or brand prestige",
      "Slow loading product catalogs that harm mobile conversion rates"
    ],
    deliverablesHeading: "Everything behind a faster, smoother storefront.",
    deliverables: [
      { number: "01", title: "Storefront Strategy", description: "Structuring product discovery, merchandising, and categorization.", icon: Target },
      { number: "02", title: "Conversion-Focused UX", description: "Designing intuitive browsing and streamlined checkout steps.", icon: ShoppingBag },
      { number: "03", title: "Headless Storefront", description: "High-performance frontend connected to flexible commerce backends.", icon: Code2 },
      { number: "04", title: "Payment Integration", description: "Secure checkout supporting global payment methods and wallets.", icon: ShieldCheck },
      { number: "05", title: "Inventory Sync", description: "Real-time synchronization with warehouse and fulfillment systems.", icon: Database }
    ],
    capabilitiesHeading: "Built for transaction velocity.",
    capabilities: [
      { title: "Instant Catalog", desc: "Fast product filtering and search powered by edge caching." },
      { title: "Frictionless Checkout", desc: "Streamlined payment steps designed to minimize drop-off rates." },
      { title: "Mobile Shopping", desc: "Touch-optimized layouts built for high mobile revenue." },
      { title: "Analytics Attribution", desc: "Precise e-commerce event tracking for marketing clarity." }
    ],
    processHeading: "A structured path to commercial launch.",
    process: [
      { num: "01", title: "Audit", desc: "Examine catalog structure, current checkout bottlenecks, and goals." },
      { num: "02", title: "Strategy", desc: "Define categorization, user journeys, and technical integrations." },
      { num: "03", title: "Experience", desc: "Design high-end product presentation and responsive UI layouts." },
      { num: "04", title: "Commerce Build", desc: "Develop the frontend storefront and connect commerce APIs." },
      { num: "05", title: "Checkout Testing", desc: "Rigorously test payment gateways, taxes, and shipping rules." },
      { num: "06", title: "Launch", desc: "Deploy secure store and monitor initial transaction flow." }
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Cloudflare", "Stripe"],
    outcomesHeading: "Storefronts built for growth.",
    outcomes: [
      { num: "01", title: "DISCOVERY", desc: "Effortless product navigation that encourages basket building." },
      { num: "02", title: "CHECKOUT", desc: "Simplified payment flows that reduce cart abandonment." },
      { num: "03", title: "REVENUE", desc: "High-performing storefronts engineered to increase conversion." }
    ],
    visualType: "ecommerce",
    visualStory: [
      { step: "01", title: "Discovery", desc: "Intuitive product categorization." },
      { step: "02", title: "Product", desc: "Immersive visual presentation." },
      { step: "03", title: "Cart", desc: "Frictionless basket management." },
      { step: "04", title: "Checkout", desc: "Secure payment gateway integration." }
    ],
    relatedServices: ["web-design-development", "ui-ux-design", "seo"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "E-Commerce Web Development & Design | WebMash Labs",
    metaDescription: "Digital storefronts designed to turn product interest into revenue. Fast, secure, and conversion-focused."
  },
  "ui-ux-design": {
    id: "04",
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    shortTitle: "UI/UX Design",
    eyebrow: "04 — UI/UX & Product Design",
    heroDescription: "Interfaces built around how people actually think, move, and decide.",
    challengeTitle: "Complex interfaces create confusion, errors, and user drop-off.",
    challenge: "Confusing user journeys and inconsistent interfaces.",
    challengePoints: [
      "Disjointed screen layouts that increase cognitive load for users",
      "Lack of consistent design patterns across expanding product features",
      "Low user retention caused by frustrating interaction models"
    ],
    deliverablesHeading: "From research to a production-ready design system.",
    deliverables: [
      { number: "01", title: "User Research", description: "Uncovering user motivations, pain points, and behavioral patterns.", icon: Compass },
      { number: "02", title: "Information Architecture", description: "Structuring content and feature hierarchies for intuitive flow.", icon: Layout },
      { number: "03", title: "Wireframes & Prototypes", description: "Testing interactive concepts before writing code.", icon: PenTool },
      { number: "04", title: "Design Systems", description: "Building scalable component libraries for brand consistency.", icon: Layers },
      { number: "05", title: "Developer Handoff", description: "Providing clear specs, tokens, and production-ready assets.", icon: Code2 }
    ],
    capabilitiesHeading: "Clarity through intentional design.",
    capabilities: [
      { title: "Intuitive Workflows", desc: "Complex digital tasks distilled into simple, logical steps." },
      { title: "Brand Cohesion", desc: "Unified visual language across web, mobile, and software." },
      { title: "Accessibility Standards", desc: "Inclusive interfaces designed with strong contrast and usability." },
      { title: "Scalable Systems", desc: "Reusable components that accelerate future product development." }
    ],
    processHeading: "A research-led design workflow.",
    process: [
      { num: "01", title: "Research", desc: "Conduct stakeholder interviews, audits, and user analysis." },
      { num: "02", title: "Architecture", desc: "Map user personas, journey flows, and core structural outlines." },
      { num: "03", title: "Wireframes", desc: "Develop low-fidelity layouts to test structural logic." },
      { num: "04", title: "UI Design", desc: "Craft polished visual interfaces and interaction states." },
      { num: "05", title: "Prototype", desc: "Build clickable prototypes to validate user flows." },
      { num: "06", title: "Handoff", desc: "Deliver structured assets and tokens to engineering teams." }
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "Tailwind CSS", "React"],
    outcomesHeading: "Designed for effortless adoption.",
    outcomes: [
      { num: "01", title: "CLARITY", desc: "Clear user journeys that reduce confusion and support tickets." },
      { num: "02", title: "EFFICIENCY", desc: "Design systems that cut future development time in half." },
      { num: "03", title: "RETENTION", desc: "Engaging, pleasant interfaces that keep users returning." }
    ],
    visualType: "uiux",
    visualStory: [
      { step: "01", title: "Research", desc: "Analyzing user behavior and intent." },
      { step: "02", title: "Wireframe", desc: "Structuring core layout logic." },
      { step: "03", title: "Interface", desc: "Refined visual design and typography." },
      { step: "04", title: "Design System", desc: "Scalable component libraries." }
    ],
    relatedServices: ["web-design-development", "web-applications", "ecommerce"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "UI/UX & Product Design Services | WebMash Labs",
    metaDescription: "Interfaces built around how people actually think, move, and decide. Rigorous research and scalable design systems."
  },
  "seo": {
    id: "05",
    slug: "seo",
    title: "SEO & Performance",
    shortTitle: "SEO & Performance",
    eyebrow: "05 — SEO & Performance",
    heroDescription: "Technical foundations that help search engines understand — and users find — your business.",
    challengeTitle: "A technically weak website can remain invisible even when your offerings are strong.",
    challenge: "Low search visibility and poor technical foundations.",
    challengePoints: [
      "Invisible search rankings for high-intent commercial keywords",
      "Technical errors and slow page speeds that penalize search visibility",
      "Unoptimized site architecture hindering search engine crawlers"
    ],
    deliverablesHeading: "Everything behind stronger search visibility.",
    deliverables: [
      { number: "01", title: "Technical Audit", description: "Identifying indexation blocks, crawl errors, and speed bottlenecks.", icon: Search },
      { number: "02", title: "Performance Tuning", description: "Optimizing loading speed, interactivity, and visual stability.", icon: Gauge },
      { number: "03", title: "On-Page Architecture", description: "Structuring semantic tags, metadata, and internal links.", icon: Layout },
      { number: "04", title: "Structured Data", description: "Implementing Schema markup for clear search engine context.", icon: Code2 },
      { number: "05", title: "Analytics Setup", description: "Configuring precise tracking for traffic and keyword growth.", icon: TrendingUp }
    ],
    capabilitiesHeading: "Optimized for crawlers and humans.",
    capabilities: [
      { title: "Speed Optimization", desc: "Fast resource delivery that pleases both users and search algorithms." },
      { title: "Crawl Efficiency", desc: "Clean sitemaps and indexation rules ensuring proper page discovery." },
      { title: "Intent Alignment", desc: "Content architecture mapped directly to target search terms." },
      { title: "Sustainable Growth", desc: "Organic visibility built on clean technical fundamentals." }
    ],
    processHeading: "A systematic approach to search growth.",
    process: [
      { num: "01", title: "Audit", desc: "Examine current rankings, indexation health, and technical bottlenecks." },
      { num: "02", title: "Research", desc: "Identify high-value keyword opportunities and intent gaps." },
      { num: "03", title: "Technical Fixes", desc: "Resolve crawl errors, redirects, and speed impediments." },
      { num: "04", title: "Architecture", desc: "Optimize page templates, headings, and internal linking." },
      { num: "05", title: "Measurement", desc: "Configure search console and traffic attribution tracking." },
      { num: "06", title: "Growth", desc: "Monitor ranking progression and refine ongoing optimization." }
    ],
    technologies: ["Next.js", "Google Search Console", "Analytics", "Schema.org", "Cloudflare"],
    outcomesHeading: "Search visibility that drives business.",
    outcomes: [
      { num: "01", title: "VISIBILITY", desc: "Better positioning for valuable commercial search queries." },
      { num: "02", title: "PERFORMANCE", desc: "Fast page delivery satisfying modern web standards." },
      { num: "03", title: "TRAFFIC", desc: "A steady stream of relevant, high-intent organic visitors." }
    ],
    visualType: "seo",
    visualStory: [
      { step: "01", title: "Crawl", desc: "Ensuring search bots access all pages." },
      { step: "02", title: "Structure", desc: "Semantic markup and Schema data." },
      { step: "03", title: "Performance", desc: "Fast resource delivery and speed." },
      { step: "04", title: "Visibility", desc: "Improved search engine rankings." }
    ],
    relatedServices: ["web-design-development", "ecommerce", "maintenance-hosting"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "SEO & Technical Performance Services | WebMash Labs",
    metaDescription: "Technical foundations that help search engines understand — and users find — your business. Sustainable organic growth."
  },
  "ai-automation": {
    id: "06",
    slug: "ai-automation",
    title: "Business Automation",
    shortTitle: "Business Automation",
    eyebrow: "06 — Business Automation",
    heroDescription: "Remove repetitive work. Connect your systems. Give your team time back.",
    challengeTitle: "Teams lose valuable time repeating tasks that software could handle automatically.",
    challenge: "Manual workflows and operational bottlenecks.",
    challengePoints: [
      "Hours wasted on manual data entry and routine administrative tasks",
      "Siloed tools that require staff to copy information between systems",
      "Slow response times caused by fragmented communication workflows"
    ],
    deliverablesHeading: "Everything required to automate operations.",
    deliverables: [
      { number: "01", title: "Workflow Mapping", description: "Identifying manual bottlenecks and automation opportunities.", icon: Workflow },
      { number: "02", title: "API Integrations", description: "Connecting CRMs, databases, and communication software.", icon: Database },
      { number: "03", title: "Custom AI Tooling", description: "Implementing tailored processing and automated categorization.", icon: Cpu },
      { number: "04", title: "Notification Logic", description: "Setting up automated alerts and webhook triggers.", icon: Zap },
      { number: "05", title: "Data Sync", description: "Ensuring records match across tools in real time.", icon: Server }
    ],
    capabilitiesHeading: "Operational efficiency through automation.",
    capabilities: [
      { title: "Reduced Overhead", desc: "Eliminate repetitive administrative work across teams." },
      { title: "System Sync", desc: "Unified data exchange between marketing, sales, and operations." },
      { title: "Smart Routing", desc: "Automated inquiry sorting and initial customer response handling." },
      { title: "Reliable Logic", desc: "Background scripts that execute reliably around the clock." }
    ],
    processHeading: "A step-by-step automation rollout.",
    process: [
      { num: "01", title: "Audit", desc: "Analyze daily operational workflows and identify friction points." },
      { num: "02", title: "Mapping", desc: "Design trigger-action sequences and data transformation rules." },
      { num: "03", title: "Integration", desc: "Connect software APIs and establish secure endpoints." },
      { num: "04", title: "Automation", desc: "Build custom scripts and AI processing logic." },
      { num: "05", title: "Testing", desc: "Validate edge cases and ensure error-free execution." },
      { num: "06", title: "Monitoring", desc: "Track workflow logs and scale automations as needed." }
    ],
    technologies: ["Node.js", "Next.js", "REST APIs", "MongoDB", "Cloudflare", "AI SDKs"],
    outcomesHeading: "Workflows that run themselves.",
    outcomes: [
      { num: "01", title: "TIME", desc: "Significant reduction in hours spent on manual data handling." },
      { num: "02", title: "ACCURACY", desc: "Fewer human errors in record keeping and customer follow-up." },
      { num: "03", title: "SCALE", desc: "Operations that grow smoothly without requiring constant headcount increases." }
    ],
    visualType: "automation",
    visualStory: [
      { step: "01", title: "Trigger", desc: "Inquiry or event received." },
      { step: "02", title: "Logic", desc: "Automated data processing." },
      { step: "03", title: "Integration", desc: "Syncing CRM and databases." },
      { step: "04", title: "Action", desc: "Instant notification or output." }
    ],
    relatedServices: ["web-applications", "web-design-development", "maintenance-hosting"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Business Automation & AI Integration | WebMash Labs",
    metaDescription: "Remove repetitive work. Connect your systems. Give your team time back with custom workflow automation."
  },
  "maintenance-hosting": {
    id: "07",
    slug: "maintenance-hosting",
    title: "Maintenance & Support",
    shortTitle: "Maintenance & Support",
    eyebrow: "07 — Maintenance & Support",
    heroDescription: "The technical layer that keeps your website secure, fast, and dependable.",
    challengeTitle: "Small technical problems become expensive when nobody is monitoring them.",
    challenge: "Unexpected downtime and security vulnerabilities.",
    challengePoints: [
      "Unpatched software packages creating security exposure over time",
      "Unexpected server interruptions disrupting business continuity",
      "Lack of developer assistance when urgent technical adjustments arise"
    ],
    deliverablesHeading: "Everything behind stable, secure digital infrastructure.",
    deliverables: [
      { number: "01", title: "Security Oversight", description: "Monitoring firewall rules, traffic anomalies, and threats.", icon: ShieldCheck },
      { number: "02", title: "Uptime Monitoring", description: "Tracking server response times and availability status.", icon: Activity },
      { number: "03", title: "Dependency Updates", description: "Keeping frameworks and libraries updated safely.", icon: Server },
      { number: "04", title: "Automated Backups", description: "Maintaining redundant snapshots for rapid restoration.", icon: Database },
      { number: "05", title: "Priority Support", description: "Dedicated developer access for bug fixes and adjustments.", icon: Terminal }
    ],
    capabilitiesHeading: "Proactive care for digital assets.",
    capabilities: [
      { title: "Edge Security", desc: "Web application firewall protection filtering malicious requests." },
      { title: "High Availability", desc: "Cloud infrastructure configured for reliable uptime." },
      { title: "Rapid Response", desc: "Prompt technical intervention when unexpected issues occur." },
      { title: "Preventative Care", desc: "Routine maintenance ensuring long-term system health." }
    ],
    processHeading: "A reliable support workflow.",
    process: [
      { num: "01", title: "Audit", desc: "Review current hosting setup, dependencies, and security posture." },
      { num: "02", title: "Infrastructure", desc: "Configure secure server routing and backup schedules." },
      { num: "03", title: "Security", desc: "Establish firewall policies and threat monitoring rules." },
      { num: "04", title: "Monitoring", desc: "Set up automated uptime and performance alert channels." },
      { num: "05", title: "Recovery", desc: "Define rapid restoration protocols for peace of mind." },
      { num: "06", title: "Support", desc: "Provide ongoing updates and developer assistance." }
    ],
    technologies: ["Cloudflare", "Docker", "Vercel", "Node.js", "Git", "SQL Server"],
    outcomesHeading: "Infrastructure you don't have to worry about.",
    outcomes: [
      { num: "01", title: "STABILITY", desc: "Consistent uptime and dependable system performance." },
      { num: "02", title: "SECURITY", desc: "Proactive defense against vulnerabilities and threats." },
      { num: "03", title: "CONTINUITY", desc: "A reliable digital foundation that runs smoothly day after day." }
    ],
    visualType: "maintenance",
    visualStory: [
      { step: "01", title: "Monitor", desc: "Continuous uptime tracking." },
      { step: "02", title: "Detect", desc: "Anomaly and threat identification." },
      { step: "03", title: "Protect", desc: "Firewall and security enforcement." },
      { step: "04", title: "Backup", desc: "Redundant snapshot archiving." }
    ],
    relatedServices: ["web-design-development", "web-applications", "seo"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Website Maintenance & Hosting Services | WebMash Labs",
    metaDescription: "The technical layer that keeps your website secure, fast, and dependable. Proactive monitoring and support."
  },
  "branding": {
    id: "05",
    slug: "branding",
    title: "Enterprise Branding & Identity Systems",
    shortTitle: "Branding",
    eyebrow: "05 — BRANDING",
    heroDescription: "Cohesive visual identity and enterprise branding designed to establish instant market authority and long-term brand equity.",
    challengeTitle: "Generic visual identities cause brands to blend into the background.",
    challenge: "Inconsistent visual messaging and weak market positioning.",
    challengePoints: [
      "Fragmented design elements across digital touchpoints eroding trust",
      "Lack of a distinct brand voice that resonates with high-value clients",
      "Outdated visual assets that fail to reflect modern enterprise standards"
    ],
    deliverablesHeading: "Everything behind a memorable, authoritative brand.",
    deliverables: [
      { number: "01", title: "Visual Identity Systems", description: "Comprehensive logo design, typography scales, and color palettes.", icon: Sparkles },
      { number: "02", title: "Brand Guidelines", description: "Detailed rulebooks ensuring consistent application across platforms.", icon: Layers },
      { number: "03", title: "Marketing Collateral", description: "High-end digital assets, pitch decks, and social templates.", icon: Layout },
      { number: "04", title: "UI Brand Integration", description: "Translating brand identity seamlessly into digital web interfaces.", icon: Code2 },
      { number: "05", title: "Voice & Messaging", description: "Structured tone-of-voice frameworks for clear enterprise communication.", icon: Terminal }
    ],
    capabilitiesHeading: "Strategic design for lasting impressions.",
    capabilities: [
      { title: "Market Differentiation", desc: "Positioning your brand uniquely against competitors." },
      { title: "Scalable Systems", desc: "Design systems built to expand as your product grows." },
      { title: "Cross-Platform Cohesion", desc: "Unified visual presentation from web to print." },
      { title: "High-End Aesthetics", desc: "Editorial-grade visual precision that commands respect." }
    ],
    processHeading: "A structured brand evolution workflow.",
    process: [
      { num: "01", title: "Discovery", desc: "Analyze core values, target audience, and market positioning." },
      { num: "02", title: "Strategy", desc: "Define brand pillars, visual direction, and tone of voice." },
      { num: "03", title: "Creation", desc: "Design logos, typography systems, and brand assets." },
      { num: "04", title: "Refinement", desc: "Polish details based on feedback and usability testing." },
      { num: "05", title: "Systematization", desc: "Compile comprehensive guidelines for future scaling." },
      { num: "06", title: "Deployment", desc: "Roll out the new identity across all digital channels." }
    ],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "Tailwind CSS", "Next.js"],
    outcomesHeading: "A brand presence that commands attention.",
    outcomes: [
      { num: "01", title: "AUTHORITY", desc: "Instant credibility and professional market standing." },
      { num: "02", title: "RECOGNITION", desc: "Distinct visual elements that stick in customer minds." },
      { num: "03", title: "COHESION", desc: "Flawless consistency across every customer touchpoint." }
    ],
    visualType: "branding",
    visualStory: [
      { step: "01", title: "Discover", desc: "Brand values & audience research." },
      { step: "02", title: "Design", desc: "Visual identity & asset creation." },
      { step: "03", title: "Systematize", desc: "Guidelines & rulebook formulation." },
      { step: "04", title: "Deploy", desc: "Omnichannel brand rollout." }
    ],
    relatedServices: ["web-design-development", "ui-ux-design", "seo"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Enterprise Branding & Visual Identity Services | WebMash Labs",
    metaDescription: "Cohesive visual identity and enterprise branding designed to establish instant market authority and long-term equity."
  },

  // 06 — Hosting Setup
  "hosting-setup": {
    id: "06",
    slug: "hosting-setup",
    title: "Secure Cloud Hosting & Infrastructure Setup",
    shortTitle: "Hosting Setup",
    eyebrow: "06 — HOSTING SETUP",
    heroDescription: "Secure, high-availability cloud infrastructure and lightning-fast server deployment engineered for maximum speed.",
    challengeTitle: "Poorly configured hosting leads to slow load times and server crashes.",
    challenge: "Subpar server performance and vulnerable cloud architectures.",
    challengePoints: [
      "Slow Time to First Byte (TTFB) damaging user retention and SEO rankings",
      "Inadequate server resource allocation causing traffic spike crashes",
      "Misconfigured DNS and SSL certificates causing security warnings"
    ],
    deliverablesHeading: "Everything behind lightning-fast, resilient server environments.",
    deliverables: [
      { number: "01", title: "Cloud Deployment", description: "Configuring high-performance environments on Vercel, AWS, or Cloudflare.", icon: Server },
      { number: "02", title: "DNS & SSL Setup", description: "Secure domain routing and automated SSL certificate integration.", icon: ShieldCheck },
      { number: "03", title: "CDN Configuration", description: "Global content delivery networks for sub-second asset loading.", icon: Activity },
      { number: "04", title: "Database Hosting", description: "Provisioning high-speed managed database instances securely.", icon: Database },
      { number: "05", title: "Environment Scaling", description: "Auto-scaling rules configured for high-traffic handling.", icon: Terminal }
    ],
    capabilitiesHeading: "Enterprise-grade cloud reliability.",
    capabilities: [
      { title: "Sub-Second Speed", desc: "Optimized server response times across global edge nodes." },
      { title: "Zero Downtime", desc: "Redundant cloud architecture ensuring continuous availability." },
      { title: "Advanced Security", desc: "DDoS protection and hardened server configuration." },
      { title: "Automated Scaling", desc: "Seamless resource expansion during traffic surges." }
    ],
    processHeading: "A precision cloud setup workflow.",
    process: [
      { num: "01", title: "Audit", desc: "Evaluate application requirements and traffic expectations." },
      { num: "02", title: "Architecture", desc: "Design optimal cloud topology and server location routing." },
      { num: "03", title: "Deployment", desc: "Provision servers, databases, and edge caching." },
      { num: "04", title: "Security", desc: "Configure SSL, firewalls, and access credentials." },
      { num: "05", title: "Optimization", desc: "Tune caching headers and CDN delivery performance." },
      { num: "06", title: "Handover", desc: "Verify live stability and monitoring alerts." }
    ],
    technologies: ["Cloudflare", "Vercel", "AWS", "Docker", "PostgreSQL", "Node.js"],
    outcomesHeading: "Infrastructure built for ultimate velocity.",
    outcomes: [
      { num: "01", title: "SPEED", desc: "Lightning-fast asset delivery and low latency." },
      { num: "02", title: "RELIABILITY", desc: "Uninterrupted server uptime and stability." },
      { num: "03", title: "SECURITY", desc: "Hardened cloud defenses against malicious attacks." }
    ],
    visualType: "hosting",
    visualStory: [
      { step: "01", title: "Provision", desc: "Cloud server allocation." },
      { step: "02", title: "Route", desc: "DNS and CDN configuration." },
      { step: "03", title: "Secure", desc: "SSL and firewall enforcement." },
      { step: "04", title: "Optimize", desc: "Edge caching and speed tuning." }
    ],
    relatedServices: ["web-applications", "website-maintenance", "seo"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Cloud Hosting Setup & Infrastructure Services | WebMash Labs",
    metaDescription: "Secure, high-availability cloud infrastructure and lightning-fast server deployment engineered for maximum speed."
  },

  // 07 — Business Email Setup
  "business-email-setup": {
    id: "07",
    slug: "business-email-setup",
    title: "Professional Business Email Setup & Authentication",
    shortTitle: "Business Email",
    eyebrow: "07 — BUSINESS EMAIL SETUP",
    heroDescription: "Professional domain-authenticated communication suites engineered for trusted enterprise outreach and zero inbox spam issues.",
    challengeTitle: "Unauthenticated emails land straight in the spam folder, destroying outreach ROI.",
    challenge: "Poor email deliverability and unprofessional communication channels.",
    challengePoints: [
      "Emails sent from generic domains lacking institutional credibility",
      "Missing SPF, DKIM, and DMARC records leading to high bounce and spam rates",
      "Disjointed team communication setups across unmanaged mail clients"
    ],
    deliverablesHeading: "Everything behind secure, trusted business communication.",
    deliverables: [
      { number: "01", title: "Workspace Configuration", description: "Setting up Google Workspace or Microsoft 365 enterprise mail suites.", icon: Mail },
      { number: "02", title: "DNS Authentication", description: "Configuring strict SPF, DKIM, and DMARC protocols for max deliverability.", icon: ShieldCheck },
      { number: "03", title: "Alias & Routing", description: "Setting up department aliases, forwarding, and custom routing.", icon: Terminal },
      { number: "04", title: "Security Protocols", description: "Enabling two-factor authentication and enterprise spam filters.", icon: Database },
      { number: "05", title: "Client Integration", description: "Connecting mailboxes seamlessly to desktop and mobile apps.", icon: Layout }
    ],
    capabilitiesHeading: "Maximum deliverability and brand trust.",
    capabilities: [
      { title: "Inbox Placement", desc: "Advanced authentication ensuring emails bypass spam filters." },
      { title: "Brand Legitimacy", desc: "Professional @yourdomain.com addresses for all team members." },
      { title: "Secure Access", desc: "Enterprise-grade encryption and access controls." },
      { title: "Seamless Sync", desc: "Real-time synchronization across all devices and clients." }
    ],
    processHeading: "A secure email configuration workflow.",
    process: [
      { num: "01", title: "Planning", desc: "Determine user counts, alias structures, and domain requirements." },
      { num: "02", title: "Provisioning", desc: "Establish Google Workspace or M365 tenant accounts." },
      { num: "03", title: "Authentication", desc: "Implement precise SPF, DKIM, and DMARC DNS records." },
      { num: "04", title: "Migration", desc: "Transfer existing mail data securely if applicable." },
      { num: "05", title: "Testing", desc: "Run deliverability audits and spam score evaluations." },
      { num: "06", title: "Handover", desc: "Provide staff onboarding and device login configurations." }
    ],
    technologies: ["Google Workspace", "Microsoft 365", "Cloudflare DNS", "SPF/DKIM/DMARC", "SMTP"],
    outcomesHeading: "Communication channels you can fully trust.",
    outcomes: [
      { num: "01", title: "DELIVERABILITY", desc: "Guaranteed inbox placement for client outreach." },
      { num: "02", title: "CREDIBILITY", desc: "Professional domain identity on every message." },
      { num: "03", title: "SECURITY", desc: "Encrypted and protected corporate correspondence." }
    ],
    visualType: "email",
    visualStory: [
      { step: "01", title: "Tenant Setup", desc: "Workspace account configuration." },
      { step: "02", title: "DNS Auth", desc: "SPF, DKIM & DMARC hardening." },
      { step: "03", title: "Routing", desc: "Alias and forwarding setup." },
      { step: "04", title: "Deliver", desc: "Inbox placement verification." }
    ],
    relatedServices: ["hosting-setup", "web-design-development", "website-maintenance"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Business Email Setup & Domain Authentication | WebMash Labs",
    metaDescription: "Professional domain-authenticated communication suites for trusted enterprise outreach and zero spam issues."
  },

  // 08 — Website Maintenance
  "website-maintenance": {
    id: "08",
    slug: "website-maintenance",
    title: "Proactive Website Maintenance & Technical Support",
    shortTitle: "Maintenance",
    eyebrow: "08 — WEBSITE MAINTENANCE",
    heroDescription: "Proactive security audits, continuous updates, and guaranteed server uptime keeping your digital assets flawless.",
    challengeTitle: "Small technical problems become expensive when nobody is monitoring them.",
    challenge: "Unexpected downtime and security vulnerabilities over time.",
    challengePoints: [
      "Unpatched software packages creating security exposure over time",
      "Unexpected server interruptions disrupting business continuity",
      "Lack of developer assistance when urgent technical adjustments arise"
    ],
    deliverablesHeading: "Everything behind stable, secure digital infrastructure.",
    deliverables: [
      { number: "01", title: "Security Oversight", description: "Monitoring firewall rules, traffic anomalies, and threats.", icon: ShieldCheck },
      { number: "02", title: "Uptime Monitoring", description: "Tracking server response times and availability status.", icon: Activity },
      { number: "03", title: "Dependency Updates", description: "Keeping frameworks and libraries updated safely.", icon: Server },
      { number: "04", title: "Automated Backups", description: "Maintaining redundant snapshots for rapid restoration.", icon: Database },
      { number: "05", title: "Priority Support", description: "Dedicated developer access for bug fixes and adjustments.", icon: Terminal }
    ],
    capabilitiesHeading: "Proactive care for digital assets.",
    capabilities: [
      { title: "Edge Security", desc: "Web application firewall protection filtering malicious requests." },
      { title: "High Availability", desc: "Cloud infrastructure configured for reliable uptime." },
      { title: "Rapid Response", desc: "Prompt technical intervention when unexpected issues occur." },
      { title: "Preventative Care", desc: "Routine maintenance ensuring long-term system health." }
    ],
    processHeading: "A reliable support workflow.",
    process: [
      { num: "01", title: "Audit", desc: "Review current hosting setup, dependencies, and security posture." },
      { num: "02", title: "Infrastructure", desc: "Configure secure server routing and backup schedules." },
      { num: "03", title: "Security", desc: "Establish firewall policies and threat monitoring rules." },
      { num: "04", title: "Monitoring", desc: "Set up automated uptime and performance alert channels." },
      { num: "05", title: "Recovery", desc: "Define rapid restoration protocols for peace of mind." },
      { num: "06", title: "Support", desc: "Provide ongoing updates and developer assistance." }
    ],
    technologies: ["Cloudflare", "Docker", "Vercel", "Node.js", "Git", "PostgreSQL"],
    outcomesHeading: "Infrastructure you don't have to worry about.",
    outcomes: [
      { num: "01", title: "STABILITY", desc: "Consistent uptime and dependable system performance." },
      { num: "02", title: "SECURITY", desc: "Proactive defense against vulnerabilities and threats." },
      { num: "03", title: "CONTINUITY", desc: "A reliable digital foundation that runs smoothly day after day." }
    ],
    visualType: "maintenance",
    visualStory: [
      { step: "01", title: "Monitor", desc: "Continuous uptime tracking." },
      { step: "02", title: "Detect", desc: "Anomaly and threat identification." },
      { step: "03", title: "Protect", desc: "Firewall and security enforcement." },
      { step: "04", title: "Backup", desc: "Redundant snapshot archiving." }
    ],
    relatedServices: ["hosting-setup", "web-applications", "seo"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Website Maintenance & Support Services | WebMash Labs",
    metaDescription: "Proactive security audits, continuous updates, and guaranteed server uptime keeping your digital assets flawless."
  },
  "mobile-app-development": {
    id: "04",
    slug: "mobile-app-development",
    title: "Modern Mobile App Development for iOS & Android",
    shortTitle: "Mobile Apps",
    eyebrow: "04 — MOBILE APP DEVELOPMENT",
    heroDescription: "High-performance cross-platform and native mobile applications engineered for exceptional user engagement and business scale.",
    challengeTitle: "Fragmented mobile experiences lead to poor user retention.",
    challenge: "Building apps that feel sluggish, inconsistent, or fail to engage mobile audiences.",
    challengePoints: [
      "Poor UI/UX leading to high uninstall rates within the first week",
      "Performance lags across different screen resolutions and OS versions",
      "Difficulty syncing real-time data between mobile clients and backend servers"
    ],
    deliverablesHeading: "Everything required for a top-tier mobile product.",
    deliverables: [
      { number: "01", title: "Cross-Platform Architecture", description: "Seamless performance across both iOS and Android platforms.", icon: Smartphone },
      { number: "02", title: "Native UI/UX Systems", description: "Fluid gestures, responsive design, and platform-specific guidelines.", icon: PenTool },
      { number: "03", title: "Push Notifications", description: "Engaging users with targeted alerts and real-time updates.", icon: Mail },
      { number: "04", title: "Offline Capabilities", description: "Local data caching for uninterrupted usage without internet access.", icon: Database },
      { number: "05", title: "App Store Deployment", description: "Full management of Apple App Store and Google Play Store launches.", icon: Cloud }
    ],
    capabilitiesHeading: "Engineering mobile products that stand out.",
    capabilities: [
      { title: "High Performance", desc: "Optimized runtime speed ensuring smooth animations and transitions." },
      { title: "Secure APIs", desc: "Encrypted data transmission between mobile app and backend." },
      { title: "Scalable Core", desc: "Architectures designed to handle growing user bases seamlessly." },
      { title: "Intuitive Gestures", desc: "Natural touch interactions tailored for mobile users." }
    ],
    processHeading: "A structured mobile development lifecycle.",
    process: [
      { num: "01", title: "Discovery", desc: "Define app features, user journeys, and target platform requirements." },
      { num: "02", title: "Wireframing", desc: "Design intuitive UI mockups and interactive mobile prototypes." },
      { num: "03", title: "Engineering", desc: "Develop frontend interfaces and connect secure backend services." },
      { num: "04", title: "Testing", desc: "Rigorous QA across multiple devices, screen sizes, and OS versions." },
      { num: "05", title: "Deployment", desc: "Publishing and configuring listings on Apple and Google stores." },
      { num: "06", title: "Evolution", desc: "Releasing regular updates, performance tweaks, and new features." }
    ],
    technologies: ["React Native", "Flutter", "Node.js", "TypeScript", "REST APIs", "Firebase"],
    outcomesHeading: "Mobile products users love to keep.",
    outcomes: [
      { num: "01", title: "ENGAGEMENT", desc: "Higher user retention through fluid design and push notifications." },
      { num: "02", title: "RELIABILITY", desc: "Crash-free stability backed by robust state management." },
      { num: "03", title: "GROWTH", desc: "Expanded brand reach across global mobile app stores." }
    ],
    visualType: "mobile",
    visualStory: [
      { step: "01", title: "Concept", desc: "User journey mapping." },
      { step: "02", title: "Interface", desc: "Interactive mobile wireframing." },
      { step: "03", title: "Code", desc: "Cross-platform engineering." },
      { step: "04", title: "Launch", desc: "App store submission & release." }
    ],
    relatedServices: ["web-applications", "ui-ux-design", "cloud-devops"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Mobile App Development Services (iOS & Android) | WebMash Labs",
    metaDescription: "High-performance cross-platform and native mobile applications engineered for exceptional user engagement and business scale."
  },

  "erp-crm": {
    id: "06",
    slug: "erp-crm",
    title: "Custom ERP & CRM Business Solutions",
    shortTitle: "ERP & CRM",
    eyebrow: "06 — ERP & CRM SOLUTIONS",
    heroDescription: "Unified business management systems that connect sales, customers, inventory, purchasing, finance, and daily operations.",
    challengeTitle: "Disconnected spreadsheets and tools slow down business growth.",
    challenge: "Manual data entry, fragmented communication, and lack of operational visibility.",
    challengePoints: [
      "Data silos between sales, warehouse, and finance departments",
      "Time wasted updating multiple disconnected software tools manually",
      "Inaccurate inventory tracking leading to fulfillment delays and lost revenue"
    ],
    deliverablesHeading: "Everything required to centralize your operations.",
    deliverables: [
      { number: "01", title: "CRM Pipelines", description: "Managing leads, customer communications, and sales funnels.", icon: Briefcase },
      { number: "02", title: "Inventory Engine", description: "Real-time stock tracking, warehousing, and automated alerts.", icon: Store },
      { number: "03", title: "Role-Based Access", description: "Secure permission controls tailored for staff, managers, and admins.", icon: ShieldCheck },
      { number: "04", title: "Financial Reporting", description: "Automated invoicing, purchase tracking, and performance analytics.", icon: TrendingUp },
      { number: "05", title: "Workflow Automation", description: "Automating repetitive tasks across departments to boost efficiency.", icon: Workflow }
    ],
    capabilitiesHeading: "Systems engineered for total business clarity.",
    capabilities: [
      { title: "Unified Data", desc: "Single source of truth for all business metrics and customer logs." },
      { title: "Custom Logic", desc: "Tailored workflows that match your exact company operations." },
      { title: "Real-Time Sync", desc: "Instant updates across all terminals and user dashboards." },
      { title: "Enterprise Security", desc: "Strict data privacy standards and encrypted data storage." }
    ],
    processHeading: "A strategic implementation framework.",
    process: [
      { num: "01", title: "Audit", desc: "Analyze current business workflows and identify bottlenecks." },
      { num: "02", title: "Architecture", desc: "Design custom database schemas and module hierarchies." },
      { num: "03", title: "Development", desc: "Build core modules for CRM, inventory, sales, and reporting." },
      { num: "04", title: "Integration", desc: "Connect payment gateways, email services, and external APIs." },
      { num: "05", title: "Training", desc: "Onboard staff and establish administrative security roles." },
      { num: "06", title: "Scaling", desc: "Continuous improvements and system expansion as business grows." }
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "MongoDB", "Redis", "REST APIs"],
    outcomesHeading: "Complete operational control at your fingertips.",
    outcomes: [
      { num: "01", title: "EFFICIENCY", desc: "Drastic reduction in manual data entry and human error." },
      { num: "02", title: "VISIBILITY", desc: "Real-time insights empowering smarter executive decisions." },
      { num: "03", title: "SCALABILITY", desc: "Robust infrastructure ready for higher sales and larger teams." }
    ],
    visualType: "erp",
    visualStory: [
      { step: "01", title: "Capture", desc: "Centralized data ingestion." },
      { step: "02", title: "Process", desc: "Automated workflow routing." },
      { step: "03", title: "Sync", desc: "Real-time multi-department updates." },
      { step: "04", title: "Report", desc: "Actionable business analytics." }
    ],
    relatedServices: ["web-applications", "ai-solutions", "cloud-devops"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Custom ERP & CRM Solutions Development | WebMash Labs",
    metaDescription: "Unified business management systems that connect sales, customers, inventory, purchasing, finance, and daily operations."
  },

  "ecommerce-development": {
    id: "07",
    slug: "ecommerce-development",
    title: "High-Performance eCommerce Development",
    shortTitle: "eCommerce",
    eyebrow: "07 — ECOMMERCE DEVELOPMENT",
    heroDescription: "Conversion-optimized online stores and marketplace architectures engineered for lightning-fast speeds and seamless checkout flows.",
    challengeTitle: "Slow stores and complicated checkouts kill online sales.",
    challenge: "High cart abandonment rates and poor product catalog management.",
    challengePoints: [
      "Sluggish page load times causing frustrated shoppers to leave",
      "Complex multi-step checkout processes discouraging final purchases",
      "Inflexible inventory sync leading to overselling issues"
    ],
    deliverablesHeading: "Everything behind high-converting online stores.",
    deliverables: [
      { number: "01", title: "Custom Catalogs", description: "Structured product grids, filters, and advanced search filters.", icon: Store },
      { number: "02", title: "Secure Checkout", description: "Frictionless payment gateway integration (Stripe, PayPal, etc.).", icon: ShoppingBag },
      { number: "03", title: "Inventory Sync", description: "Real-time stock updates across sales channels and warehouses.", icon: Database },
      { number: "04", title: "Order Management", description: "Streamlined dashboards for tracking shipments and customer receipts.", icon: Truck },
      { number: "05", title: "Performance Speed", description: "Lightning-fast page rendering optimized for maximum conversions.", icon: TrendingUp }
    ],
    capabilitiesHeading: "Commerce experiences built to sell more.",
    capabilities: [
      { title: "Mobile Optimized", desc: "Flawless shopping experience across smartphones and tablets." },
      { title: "Secure Transactions", desc: "PCI-compliant payment processing protecting customer data." },
      { title: "Scalable Traffic", desc: "Infrastructure capable of handling high-volume flash sales." },
      { title: "SEO Ready", desc: "Optimized product structures for high search engine visibility." }
    ],
    processHeading: "From store design to launch day.",
    process: [
      { num: "01", title: "Strategy", desc: "Define target audience, catalog hierarchy, and conversion goals." },
      { num: "02", title: "Design", desc: "Create high-converting UI layouts and mobile-first storefronts." },
      { num: "03", title: "Build", desc: "Develop frontend shopping experience and secure backend cart logic." },
      { num: "04", title: "Payments", desc: "Integrate secure payment processors and shipping calculators." },
      { num: "05", title: "Testing", desc: "Simulate test checkouts and verify inventory synchronization." },
      { num: "06", title: "Launch", desc: "Deploy live store with edge caching and SSL encryption." }
    ],
    technologies: ["Next.js", "React", "Node.js", "Stripe API", "MongoDB", "Cloudflare"],
    outcomesHeading: "Stores designed to maximize revenue.",
    outcomes: [
      { num: "01", title: "CONVERSION", desc: "Lower bounce rates and higher checkout completion rates." },
      { num: "02", title: "SPEED", desc: "Instant page transitions keeping customers engaged." },
      { num: "03", title: "RELIABILITY", desc: "Dependable order processing and inventory management." }
    ],
    visualType: "ecommerce",
    visualStory: [
      { step: "01", title: "Browse", desc: "Fast product discovery." },
      { step: "02", title: "Cart", desc: "Frictionless item management." },
      { step: "03", title: "Checkout", desc: "Secure encrypted payments." },
      { step: "04", title: "Fulfill", desc: "Automated order processing." }
    ],
    relatedServices: ["web-design-development", "seo", "branding"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Custom eCommerce Development & Store Design | WebMash Labs",
    metaDescription: "Conversion-optimized online stores and marketplace architectures engineered for lightning-fast speeds and seamless checkout flows."
  },

  "cloud-devops": {
    id: "08",
    slug: "cloud-devops",
    title: "Reliable Cloud Infrastructure & DevOps",
    shortTitle: "Cloud & DevOps",
    eyebrow: "08 — CLOUD & DEVOPS",
    heroDescription: "Robust cloud architecture, automated deployment pipelines, and edge security engineered for zero downtime and infinite scalability.",
    challengeTitle: "Server crashes and deployment bottlenecks slow down teams.",
    challenge: "Unreliable server environments and manual release processes prone to human error.",
    challengePoints: [
      "Frequent server downtime during unexpected traffic surges",
      "Manual deployment pipelines causing delays and production bugs",
      "Vulnerabilities in cloud configurations exposing sensitive data"
    ],
    deliverablesHeading: "Everything behind unstoppable cloud reliability.",
    deliverables: [
      { number: "01", title: "CI/CD Pipelines", description: "Automated testing and deployment workflows for fast releases.", icon: Workflow },
      { number: "02", title: "Docker Containerization", description: "Consistent environments across development, staging, and production.", icon: Server },
      { number: "03", title: "Edge Caching", description: "Global content delivery networks for lightning-fast asset loading.", icon: Cloud },
      { number: "04", title: "Security Hardening", description: "Firewalls, DDoS protection, and SSL certificate management.", icon: ShieldCheck },
      { number: "05", title: "Automated Monitoring", description: "Real-time alerts for server health, CPU usage, and traffic spikes.", icon: Activity }
    ],
    capabilitiesHeading: "Cloud infrastructure built for scale.",
    capabilities: [
      { title: "Zero Downtime", desc: "Seamless updates without interrupting active users." },
      { title: "Global CDN", desc: "Low latency asset delivery across international regions." },
      { title: "Auto-Scaling", desc: "Resources automatically adjust during high traffic volumes." },
      { title: "Robust Backup", desc: "Automated disaster recovery and server snapshot archiving." }
    ],
    processHeading: "A methodical infrastructure setup.",
    process: [
      { num: "01", title: "Assessment", desc: "Review current hosting setup, security rules, and traffic patterns." },
      { num: "02", title: "Architecture", desc: "Design secure cloud topologies and server clusters." },
      { num: "03", title: "Automation", desc: "Configure CI/CD pipelines and automated testing scripts." },
      { num: "04", title: "Security", desc: "Implement Cloudflare rules, firewalls, and SSL certificates." },
      { num: "05", title: "Monitoring", desc: "Set up uptime trackers and incident response alert channels." },
      { num: "06", title: "Maintenance", desc: "Ongoing server optimization and capacity planning." }
    ],
    technologies: ["Cloudflare", "Docker", "Vercel", "AWS", "Git", "Linux"],
    outcomesHeading: "Infrastructure you never have to stress about.",
    outcomes: [
      { num: "01", title: "UPTIME", desc: "Guaranteed high availability and consistent server performance." },
      { num: "02", title: "SPEED", desc: "Optimized response times and global content delivery." },
      { num: "03", title: "SECURITY", desc: "Comprehensive protection against malicious traffic and breaches." }
    ],
    visualType: "devops",
    visualStory: [
      { step: "01", title: "Commit", desc: "Automated git triggers." },
      { step: "02", title: "Build", desc: "Containerized compilation." },
      { step: "03", title: "Deploy", desc: "Zero-downtime release." },
      { step: "04", title: "Scale", desc: "Edge routing & monitoring." }
    ],
    relatedServices: ["website-maintenance", "web-applications", "business-email-setup"],
    relatedHeading: "Where this service connects with the rest of the system.",
    metaTitle: "Cloud Infrastructure & DevOps Services | WebMash Labs",
    metaDescription: "Robust cloud architecture, automated deployment pipelines, and edge security engineered for zero downtime and infinite scalability."
  }
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return {
      title: "Service Not Found | WebMash Labs",
      description: "The requested service page could not be found."
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webmashlabs.com";

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${siteUrl}/services/${service.slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteUrl}/services/${service.slug}`,
      siteName: "WebMash Labs",
      type: "website"
    }
  };
}

function ServiceVisual({ visualType }) {
  switch (visualType) {
    case "web":
      return (
        <div className="p-8 rounded-[24px] border border-white/[0.10] bg-white/[0.03] backdrop-blur-md shadow-2xl space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60A5FA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60A5FA]"></span>
              </span>
              <span className="text-[#60A5FA] font-bold tracking-wider">SERVICE MODULE ACTIVE</span>
            </div>
            <span className="text-[#94A3B8]">RESPONSIVE VIEW</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">PRIMARY OBJECTIVE</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">Website Design</p>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">STANDARD</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">Enterprise Grade</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025] flex items-center justify-between">
            <div>
              <span className="text-[#94A3B8] block text-[10px] mb-0.5">DELIVERY & STATUS</span>
              <span className="text-[#F8FAFC] font-sans text-xs font-semibold">End-to-End Execution</span>
            </div>
            <span className="text-[#60A5FA] font-bold text-[11px]">READY FOR DEPLOYMENT</span>
          </div>
        </div>
      );
    case "app":
      return (
        <div className="p-8 rounded-[24px] border border-white/[0.10] bg-white/[0.03] backdrop-blur-md shadow-2xl space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60A5FA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60A5FA]"></span>
              </span>
              <span className="text-[#60A5FA] font-bold tracking-wider">SERVICE MODULE ACTIVE</span>
            </div>
            <span className="text-[#94A3B8]">SECURE</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">PRIMARY OBJECTIVE</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">Custom Web App</p>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">STANDARD</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">Enterprise Grade</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025] flex items-center justify-between">
            <div>
              <span className="text-[#94A3B8] block text-[10px] mb-0.5">DELIVERY & STATUS</span>
              <span className="text-[#F8FAFC] font-sans text-xs font-semibold">End-to-End Execution</span>
            </div>
            <span className="text-[#60A5FA] font-bold text-[11px]">READY FOR DEPLOYMENT</span>
          </div>
        </div>
      );
    case "ecommerce":
      return (
        <div className="p-8 rounded-[24px] border border-white/[0.10] bg-white/[0.03] backdrop-blur-md shadow-2xl space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60A5FA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60A5FA]"></span>
              </span>
              <span className="text-[#60A5FA] font-bold tracking-wider">SERVICE MODULE ACTIVE</span>
            </div>
            <span className="text-[#94A3B8]">CHECKOUT READY</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">PRIMARY OBJECTIVE</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">E-Commerce Experience</p>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">STANDARD</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">Enterprise Grade</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025] flex items-center justify-between">
            <div>
              <span className="text-[#94A3B8] block text-[10px] mb-0.5">DELIVERY & STATUS</span>
              <span className="text-[#F8FAFC] font-sans text-xs font-semibold">End-to-End Execution</span>
            </div>
            <span className="text-[#60A5FA] font-bold text-[11px]">READY FOR DEPLOYMENT</span>
          </div>
        </div>
      );
    case "uiux":
      return (
        <div className="p-8 rounded-[24px] border border-white/[0.10] bg-white/[0.03] backdrop-blur-md shadow-2xl space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60A5FA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60A5FA]"></span>
              </span>
              <span className="text-[#60A5FA] font-bold tracking-wider">SERVICE MODULE ACTIVE</span>
            </div>
            <span className="text-[#94A3B8]">SYSTEMIZED</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">PRIMARY OBJECTIVE</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">UI/UX & Product Design</p>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">STANDARD</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">Enterprise Grade</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025] flex items-center justify-between">
            <div>
              <span className="text-[#94A3B8] block text-[10px] mb-0.5">DELIVERY & STATUS</span>
              <span className="text-[#F8FAFC] font-sans text-xs font-semibold">End-to-End Execution</span>
            </div>
            <span className="text-[#60A5FA] font-bold text-[11px]">READY FOR DEPLOYMENT</span>
          </div>
        </div>
      );
    case "seo":
      return (
        <div className="p-8 rounded-[24px] border border-white/[0.10] bg-white/[0.03] backdrop-blur-md shadow-2xl space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60A5FA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60A5FA]"></span>
              </span>
              <span className="text-[#60A5FA] font-bold tracking-wider">SERVICE MODULE ACTIVE</span>
            </div>
            <span className="text-[#94A3B8]">INDEXED</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">PRIMARY OBJECTIVE</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">SEO & Performance</p>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">STANDARD</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">Enterprise Grade</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025] flex items-center justify-between">
            <div>
              <span className="text-[#94A3B8] block text-[10px] mb-0.5">DELIVERY & STATUS</span>
              <span className="text-[#F8FAFC] font-sans text-xs font-semibold">End-to-End Execution</span>
            </div>
            <span className="text-[#60A5FA] font-bold text-[11px]">READY FOR DEPLOYMENT</span>
          </div>
        </div>
      );
    case "automation":
      return (
        <div className="p-8 rounded-[24px] border border-white/[0.10] bg-white/[0.03] backdrop-blur-md shadow-2xl space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60A5FA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60A5FA]"></span>
              </span>
              <span className="text-[#60A5FA] font-bold tracking-wider">SERVICE MODULE ACTIVE</span>
            </div>
            <span className="text-[#94A3B8]">ACTIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">PRIMARY OBJECTIVE</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">Business Automation</p>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">STANDARD</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">Enterprise Grade</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025] flex items-center justify-between">
            <div>
              <span className="text-[#94A3B8] block text-[10px] mb-0.5">DELIVERY & STATUS</span>
              <span className="text-[#F8FAFC] font-sans text-xs font-semibold">End-to-End Execution</span>
            </div>
            <span className="text-[#60A5FA] font-bold text-[11px]">READY FOR DEPLOYMENT</span>
          </div>
        </div>
      );
    case "maintenance":
      return (
        <div className="p-8 rounded-[24px] border border-white/[0.10] bg-white/[0.03] backdrop-blur-md shadow-2xl space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60A5FA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60A5FA]"></span>
              </span>
              <span className="text-[#60A5FA] font-bold tracking-wider">SERVICE MODULE ACTIVE</span>
            </div>
            <span className="text-[#94A3B8]">SECURE</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">PRIMARY OBJECTIVE</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">Maintenance & Support</p>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <span className="text-[#94A3B8] block mb-1 text-[10px]">STANDARD</span>
              <p className="text-[#F8FAFC] font-sans text-sm font-medium">Enterprise Grade</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.025] flex items-center justify-between">
            <div>
              <span className="text-[#94A3B8] block text-[10px] mb-0.5">DELIVERY & STATUS</span>
              <span className="text-[#F8FAFC] font-sans text-xs font-semibold">End-to-End Execution</span>
            </div>
            <span className="text-[#60A5FA] font-bold text-[11px]">READY FOR DEPLOYMENT</span>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webmashlabs.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.heroDescription,
    "provider": {
      "@type": "Organization",
      "name": "WebMash Labs",
      "url": siteUrl
    },
    "areaServed": "Global",
    "url": `${siteUrl}/services/${service.slug}`
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
        "name": "Services",
        "item": `${siteUrl}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `${siteUrl}/services/${service.slug}`
      }
    ]
  };

  return (
    <div className="w-full bg-[#020617] text-white selection:bg-[#2563EB] selection:text-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* SECTION 01 — HERO */}
      <section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-28 px-6 sm:px-12 lg:px-20 bg-[#020617] text-white border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(37,99,235,0.12),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.10] bg-white/[0.02] mb-6">
                <span className="font-mono text-[11px] tracking-[0.25em] text-[#94A3B8] uppercase">{service.eyebrow}</span>
              </div>

              <h1 className="text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.08] font-bold tracking-[-0.025em] text-white">
                {service.title} <span className="text-[#60A5FA]">engineered for impact.</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#CBD5E1] font-light max-w-[50ch]">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-7 py-3.5 font-medium text-white text-sm transition-colors hover:bg-[#1D4ED8]"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.02] px-7 py-3.5 font-medium text-white text-sm transition-colors hover:bg-white/[0.06]"
                >
                  <span>Explore Our Work</span>
                </Link>
              </div>
            </div>

            <div>
              <ServiceVisual visualType={service.visualType} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — THE PROBLEM / OPPORTUNITY */}
      <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#020617] text-white border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div className="border-l-2 border-[#60A5FA] pl-6">
              <span className="font-mono text-[11px] tracking-[0.25em] text-[#94A3B8] uppercase block mb-3">THE CHALLENGE</span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.15] font-bold tracking-tight text-white">
                {service.challengeTitle}
              </h2>
            </div>
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {service.challengePoints.map((point, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                    <span className="font-mono text-[11px] font-bold text-[#60A5FA] block mb-2">0{idx + 1} — ISSUE</span>
                    <p className="text-xs sm:text-sm text-[#CBD5E1] font-sans leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — WHAT WE BUILD / DELIVERABLES */}
      <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-white text-[#0F172A] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[700px] mb-14">
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#64748B] uppercase block mb-3">DELIVERABLES</span>
            <h2 className="text-[clamp(2rem,3.2vw,3rem)] font-bold tracking-tight text-[#0F172A] leading-tight">
              {service.deliverablesHeading}
            </h2>
          </div>

          <div className="divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
            {service.deliverables.map((item) => (
              <div
                key={item.number}
                className="group grid grid-cols-1 lg:grid-cols-[1fr_2fr_auto] items-center py-7 px-4 sm:px-6 gap-4 transition-colors hover:bg-[#F8FAFC]"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs font-bold text-[#2563EB]">{item.number}</span>
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-[#64748B] group-hover:text-[#2563EB] transition-colors" strokeWidth={1.5} />
                    <span className="text-lg font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                      {item.title}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#475569] font-light max-w-[50ch] lg:pl-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-end gap-2 text-xs font-mono text-[#64748B]">
                  <CheckCircle2 className="h-4 w-4 text-[#2563EB]" strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — SERVICE-SPECIFIC VISUAL STORY */}
      <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#F8FAFC] text-[#0F172A] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[700px] mb-14">
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#64748B] uppercase block mb-3">VISUAL STORY</span>
            <h2 className="text-[clamp(2rem,3.2vw,3rem)] font-bold tracking-tight text-[#0F172A] leading-tight">
              How the pieces connect.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.visualStory.map((story) => (
              <div key={story.step} className="p-6 rounded-2xl border border-[#E2E8F0] bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#2563EB] tracking-widest block mb-3">{story.step} — STAGE</span>
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2">{story.title}</h3>
                  <p className="text-sm text-[#475569] font-light leading-relaxed">{story.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — KEY CAPABILITIES */}
      <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-white text-[#0F172A] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[700px] mb-14">
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#64748B] uppercase block mb-3">CAPABILITIES</span>
            <h2 className="text-[clamp(2rem,3.2vw,3rem)] font-bold tracking-tight text-[#0F172A] leading-tight">
              {service.capabilitiesHeading}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.capabilities.map((cap, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#2563EB] tracking-widest block mb-3">0{idx + 1} — SPEC</span>
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2">{cap.title}</h3>
                  <p className="text-sm text-[#475569] font-light leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — HOW WE WORK / PROCESS */}
      <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#020617] text-white border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[700px] mb-16">
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#94A3B8] uppercase block mb-3">PROCESS</span>
            <h2 className="text-[clamp(2rem,3.2vw,3rem)] font-bold tracking-tight text-white leading-tight">
              {service.processHeading}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {service.process.map((step) => (
              <div key={step.num} className="p-5 rounded-2xl border border-white/10 bg-[#020617] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#60A5FA] block mb-3">{step.num}</span>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">{step.title}</h3>
                  <p className="text-xs text-[#CBD5E1] font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — TECHNOLOGY / TOOLS */}
      <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#020617] text-white border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="font-mono text-[11px] tracking-[0.25em] text-[#94A3B8] uppercase block mb-3">TECHNOLOGY</span>
              <h2 className="text-[clamp(2rem,3.2vw,3rem)] font-bold tracking-tight text-white leading-tight">
                Modern tools matched to the task.
              </h2>
              <p className="mt-4 text-base text-[#CBD5E1] font-light leading-relaxed">
                We utilize reliable, performant technologies chosen specifically for their ability to deliver speed, security, and long-term maintainability.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <span className="font-mono text-xs tracking-widest text-[#94A3B8] uppercase font-bold block mb-4">RELEVANT STACK</span>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span key={tech} className="font-mono text-xs px-3.5 py-2 rounded-lg bg-black/40 border border-white/10 text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — COMMERCIAL OUTCOMES */}
      <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-white text-[#0F172A] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[700px] mb-14">
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#64748B] uppercase block mb-3">OUTCOMES</span>
            <h2 className="text-[clamp(2rem,3.2vw,3rem)] font-bold tracking-tight text-[#0F172A] leading-tight">
              {service.outcomesHeading}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {service.outcomes.map((out) => (
              <div key={out.num} className="p-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-extrabold text-[#2563EB] mb-3 block">{out.num}</span>
                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2">{out.title}</h3>
                  <p className="text-sm text-[#475569] font-light leading-relaxed">{out.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09 — RELATED SERVICES */}
      <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-white text-[#0F172A] border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-[700px] mb-14">
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#64748B] uppercase block mb-3">RELATED SERVICES</span>
            <h2 className="text-[clamp(2rem,3.2vw,3rem)] font-bold tracking-tight text-[#0F172A] leading-tight">
              {service.relatedHeading}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {service.relatedServices.map((relSlug) => {
              const relService = services[relSlug];
              if (!relService) return null;
              return (
                <Link
                  key={relSlug}
                  href={`/services/${relService.slug}`}
                  className="group p-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] flex flex-col justify-between transition-colors hover:border-[#2563EB]"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#2563EB] tracking-widest block mb-3">{relService.id} — SERVICE</span>
                    <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors">
                      {relService.title}
                    </h3>
                    <p className="text-xs text-[#475569] font-light leading-relaxed line-clamp-2">{relService.heroDescription}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#64748B] group-hover:text-[#2563EB]">
                    <span>View Service</span>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="relative w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 bg-[#F8FAFC] text-[#0F172A] text-center">
        <div className="mx-auto max-w-[700px]">
          <span className="font-mono text-[11px] tracking-[0.25em] text-[#64748B] uppercase block mb-3">START A PROJECT</span>
          <h2 className="text-[clamp(2rem,3.2vw,2.8rem)] font-bold tracking-tight text-[#0F172A]">
            Ready to build something better?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] font-light max-w-[42ch] mx-auto">
            Tell us what you&apos;re building, where you&apos;re stuck, or where you want to go. We&apos;ll help define the right next step.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-7 py-3.5 font-medium text-white text-sm transition-colors hover:bg-[#2563EB]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-7 py-3.5 font-medium text-[#0F172A] text-sm shadow-sm transition-colors hover:bg-[#F1F5F9]"
            >
              <span>Explore Our Work</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}