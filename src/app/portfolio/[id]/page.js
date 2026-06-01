"use client";

import { useParams } from "next/navigation";
// Fix: Added ArrowRight to the imports below
import { ArrowLeft, CheckCircle2, ExternalLink, Cpu, Target, Rocket, Shield, PenTool, Layout, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Exhaustive Content Database for all projects
const projectsData = {
  // WEB PROJECTS
 "myshop-ecommerce": {
  title: "MYSHOP - Premium E-commerce Platform",
  category: "Web Development",
  longDesc: "A high-conversion, fully responsive digital storefront tailored for modern apparel brands. Built with a focus on seamless user experience, it features dynamic category filtering (Men, Women, Boys, Girls), instant checkout workflows, and pixel-perfect responsiveness across desktop and mobile devices.",
  problem: "Traditional fashion e-commerce sites often suffer from complex multi-step checkouts and poor mobile layouts, leading to high cart abandonment rates and a disconnected user experience.",
  solution: "Developed a modern full-stack headless commerce platform featuring a sliding side-cart panel, a single-page structured shipping form, and direct Stripe payment gateway integration to minimize friction and maximize successful checkouts.",
  tools: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", "Stripe API"],
  features: [
    "Dynamic Category Routing & Filtering (Men, Women, Boys, Girls)",
    "Real-time Cart Management with Instant Side-Panel Drawers",
    "Single-Page Checkout Form with Automatic Price & Shipping Calculation",
    "Secure Stripe Gateway Integration (Sandbox Tested with Card/Link Payments)",
    "Real-Time Order Summary with Instant Coupon/Discount Logic",
    "Customer Account Profiles & Seamless Order Tracking Capabilities",
    "Newsletter & Email Subscription Integration ('Stay In The Loop')",
    "Fully Responsive Mobile UI with Interactive Hamburger Navigation Menu"
  ],
  liveLink: "https://webmash-online-store.vercel.app", // Aapka actual project link jo screenshot me thha
  image: "/webmashonlinestore.png" // Jo image maine aapko banakar di hai, uska path yahan lagayein
},
"zs-digitizing": {
  title: "ZS Digitizing – End-to-End Enterprise Management System",
  category: "Web Development",
  longDesc: "A robust, production-grade enterprise web application built for custom embroidery digitizing and vector art businesses. The platform serves as a complete business operational hub, bridging the gap between global B2B/B2C clients and production teams through complex back-office systems, dynamic pricing structures, and real-time order tracking workflows.",
  problem: "Embroidery digitizing businesses typically rely on messy email threads, manual price quotes, and fragmented communication channels, which severely limits scalability, delays order delivery, and compromises client retention.",
  solution: "Engineered a centralized, highly sophisticated SaaS-like platform with bi-directional client and admin dashboards, automated tiered pricing logic, secure custom order workflows, and a high-performance interactive portfolio to convert cold traffic into recurring accounts.",
  tools: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB", "Express"],
  features: [
    "High-Conversion Landing Page with Premium Vector Graphics & Smooth Framer Motion Animations",
    "Dynamic Client Portal: Secure onboarding, single-view custom order placement, artwork file uploads, and self-service request management",
    "Comprehensive Admin Dashboard: Full operational control, live conversion metrics, visitor tracking, and instant order status updates",
    "Advanced Live Portfolio: High-fidelity image gallery with instant category filtering (Left Chest, Jacket Back, Cap, Vector Art)",
    "Transparent Tiered Pricing Engine: Automated quotes for digitization and vector conversion packages to reduce billing friction",
    "Real-Time Order Monitoring Lifecycle: End-to-end transparency from 'Order Received' to 'In Production' and 'Dispatched'",
    "Optimized Global State Management for processing heavy high-resolution vector and embroidery design files seamlessly",
    "100% Mobile-Responsive Architecture ensuring seamless management on the go for both shop administrators and global clients"
  ],
  liveLink: "https://www.zsdigitizing.com",
  image: "/web1.png" // Aapka portfolio thumbnail image path
},
"real-time-teamsync": {
  title: "TeamSync – Real-Time Enterprise Collaboration Platform",
  category: "Web Development",
  longDesc: "A high-performance, low-latency collaboration hub engineered to streamline remote team workflows. Built on the MERN stack with event-driven architecture, the platform synchronizes project management pipelines and team communications instantly across thousands of concurrent clients without manual page refreshes.",
  problem: "Distributed engineering teams frequently experience communication gaps and desynchronized task tracking due to stale data in traditional SaaS tools, resulting in overlapping development efforts and bottlenecked release cycles.",
  solution: "Designed and implemented a unified workspace utilizing bi-directional WebSocket pipelines. This system integrates drag-and-drop Kanban state persistence with multi-channel messaging arrays and automated live notification streams to keep cross-functional squads in perfect sync.",
  tools: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Tailwind CSS", "Framer Motion"],
  features: [
    "Interactive Kanban Board System: Seamless drag-and-drop mechanics with instant state sync across all active project members",
    "Live Workspace Messenger: Multi-channel group chats and direct messaging tracks operating on sub-millisecond WebSocket updates",
    "Real-Time User Presence Engine: Dynamic system indicators tracking team availability statuses (Online, Away, Do Not Disturb, Offline)",
    "Data-Driven Analytics Dashboard: High-fidelity charting for sprint velocities, team task completion rates, and individual productivity metrics",
    "Granular Role-Based Access Control (RBAC): Enterprise-level secure permission layers for Workspace Owners, Project Managers, and Developers",
    "Instant Broadcast System: Real-time dynamic push notifications for urgent project announcements, task assignments, and direct @mentions",
    "Complex Database Aggregations: Optimized MongoDB reporting pipelines for generating instantaneous historical performance logs",
    "Fluid Motion Interface: Native-feeling UI wrapper with optimized layouts for seamless transitions between workspaces on desktop and mobile"
  ],
  liveLink: "https://teamsync-collaboration.vercel.app", // Yahan aap apna actual live link daal sakte hain
  image: "/webmashteamsync.png" // Aapki portfolio gallery image ka path
},
"crafthome-ecommerce": {
  title: "CraftHome – Premium Headless E-commerce Solution",
  category: "Web Development",
  longDesc: "A next-generation, decoupled e-commerce architecture engineered for hyper-fast performance and global scalability. By separating the presentation layer from the backend commerce engine, this storefront delivers sub-second page loads, exceptional Core Web Vitals scores, and an uncompromised custom shopping user experience.",
  problem: "Traditional monolithic e-commerce platforms suffer from bloated frontend bundles, slow server response times, and rigid templating systems that hurt Google PageSpeed scores and lower mobile checkout conversion rates.",
  solution: "Architected a headless commerce stack leveraging Next.js for high-performance static rendering alongside Shopify Storefront API integrations. This decouples data fetching from client-side rendering, ensuring instantaneous transitions, dynamic edge caching, and a highly optimized buyer tunnel.",
  tools: ["Next.js", "React", "Shopify Storefront API", "Tailwind CSS", "GraphQL", "Framer Motion", "Vercel Edge"],
  features: [
    "Headless Architecture Framework: Static Site Generation (SSG) and Incremental Static Regeneration (ISR) for near-zero latency page loads",
    "Shopify GraphQL Integration: Highly optimized, ultra-fast queries to fetch live inventory, product variants, and collection metadata seamlessly",
    "Dynamic Client-Side Routing: Instantaneous transitions between complex apparel/craft collections and product detail pages (PDPs)",
    "Core Web Vitals Optimization: Achieved a 95+ score on Google PageSpeed Insights through advanced image optimization and script deferral",
    "Animated Sliding Shopping Cart: Client-side state persistence with smooth sliding panel interactions for a modern checkout entryway",
    "Secure Native Checkout Pipelines: Seamless tokenized redirection to secure payment endpoints ensuring 100% PCI-compliance",
    "Advanced Filter & Search Matrix: Client-side product filtering by price, taxonomy, and availability without requiring hard page reloads",
    "Fluid Micro-Interactions: Premium, subtle Framer Motion effects on product hover cards, image galleries, and add-to-cart actions"
  ],
  liveLink: "https://crafthome-store.vercel.app", // Aap apna actual preview link yahan daal sakte hain
  image: "/webmashcrafthome.png" // Aapki portfolio gallery image ka path
},
"cryptopulse-tracker": {
  title: "CryptoPulse – Real-Time Cryptocurrency Analytics & Tracking Platform",
  category: "Web Development",
  longDesc: "A high-performance financial data dashboard engineered for real-time cryptocurrency tracking and market analysis. Powered by advanced REST APIs and live data streaming, this platform processes rapid market fluctuations instantly to provide high-fidelity interactive charting, live price feeds, and personalized portfolio health tracking.",
  problem: "Most free cryptocurrency trackers suffer from delayed price updates, high API overhead lagging the UI, and poorly optimized charts that stutter when handling historical data points on mobile screens.",
  solution: "Architected a reactive data-throttling pipeline within React.js to poll global financial APIs efficiently. Integrated optimized charting wrappers and client-side memory caching to deliver fluid web-vitals, instantaneous live updates, and zero UI performance bottlenecks during heavy market activity.",
  tools: ["React.js", "Tailwind CSS", "CoinGecko API / CoinMarketCap API", "Chart.js / Recharts", "Framer Motion", "Context API"],
  features: [
    "Live Financial API Integration: Multi-endpoint synchronization to stream live updates for global token values, market caps, and 24h volumes",
    "High-Fidelity Interactive Charts: Custom implementation of real-time price history graphs with dynamic toggles for multiple timeframes (1D, 1W, 1M, 1Y)",
    "Real-Time Search & Predictive Filter: Client-side index matrix allowing users to look up and isolate hundreds of crypto assets with zero latency",
    "Personalized Portfolio Watchlist: State-persisted dashboard module for users to pin, track, and monitor their custom asset distribution layouts",
    "Dynamic Market Metrics Badges: Automatic color-shifting indicators (Green/Red) tracking percentage changes based on dynamic real-time value changes",
    "Global State Management Hub: Centralized data pipeline preventing duplicate API requests and ensuring consistent metrics across multiple UI sub-views",
    "Asynchronous Performance Tuning: Deployed aggressive request debouncing and UI state batching to protect client-side memory on low-end devices",
    "Fluid Micro-Animations: Micro-interactions and smooth numerical counters driven by Framer Motion to visualize live data ticks elegantly"
  ],
  liveLink: "https://cryptopulse-tracker.vercel.app", // Aap apna actual preview link yahan daal sakte hain
  image: "/webmashcryptopulse.png" // Aapki portfolio gallery image ka path
},
"aiwrite-saas": {
  title: "AI-Write – Advanced SaaS Content Generation & SEO Platform",
  category: "Web Development",
  longDesc: "A production-grade SaaS application engineered for automated content generation and marketing copy creation. Powered by Next.js 14 server architecture and advanced OpenAI API models, this platform stream-lines high-fidelity content workflows by delivering SEO-optimized blog frameworks, social media arrays, and high-converting marketing copy with real-time output customization.",
  problem: "Traditional AI generation wrappers frequently suffer from slow, blocking HTTP requests that ruin user experience, rigid single-prompt setups that yield generic results, and an absolute lack of custom organizational controls for saved content.",
  solution: "Architected an asynchronous pipeline using Next.js Server Components and OpenAI Edge Streaming to deliver instantaneous word-by-word content rendering. Implemented dynamic form matrices that adjust tone, target audience, and output structural formats before invoking highly optimized prompt templates.",
  tools: ["Next.js", "React", "OpenAI API", "Tailwind CSS", "Framer Motion", "Prisma / MongoDB", "NextAuth.js"],
  features: [
    "Edge-Driven Server Response Streaming: Leveraged OpenAI stream chunking pipelines to render generated copy word-by-word on the frontend with zero blocking latency",
    "Dynamic Prompt Engineering Arrays: Custom-built UI input panels to dynamically tweak structural components like target keywords, content lengths, and tone of voice",
    "Multi-Category Generation Templates: Modular interface dashboards specifically tailored for SEO Blog Posts, Marketing Copy, Cold Emails, and Social Media Captions",
    "Rich Text Clipboard Integrations: Native output displays complete with single-click clipboard replication and markdown parsing mechanisms",
    "Secure Tenant Authentication Framework: Robust workspace gatekeeping via NextAuth.js supporting secure multi-provider credential onboarding",
    "State-Persisted Content Archive: Secure database logging with Prisma and MongoDB to track historical generation logs, allowing users to save, delete, or organize output results",
    "Asynchronous Output Parameter Throttling: Frontend safety boundaries ensuring user text constraints do not trigger massive context window overflows or token leakage",
    "Premium Layout Motion Micro-Effects: Smooth layout shifting animations powered by Framer Motion as AI text grids scale and populate dynamically"
  ],
  liveLink: "https://aiwrite-saas.vercel.app", // Aap apna actual preview link yahan daal sakte hain
  image: "/webmashaiwrites.png" // Aapki portfolio gallery image ka path
},
"devblog-platform": {
  title: "DevBlog – High-Performance Jamstack Dynamic Content Platform",
  category: "Web Development",
  longDesc: "A production-ready, SEO-optimized content hub engineered for developers and tech writers. Leveraging a decoupled headless CMS architecture combined with Next.js Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR), this platform delivers lightning-fast content delivery, automated metadata generation, and a fluid, accessible reading layout.",
  problem: "Traditional monolithic blogging platforms (like standard WordPress setups) often suffer from heavy database overhead, slow initial page load speeds that hurt Core Web Vitals, and rigid template systems that restrict custom frontend designs and developer workflows.",
  solution: "Architected a headless Jamstack layout decoupling the frontend display layer from content administration. By integrating dynamic Next.js data fetching parameters with automated CMS webhooks, the platform generates static assets at runtime, eliminating database lag while preserving fully dynamic, instantaneous content updates.",
  tools: ["Next.js", "React", "Headless CMS (Strapi / Sanity)", "Tailwind CSS", "GraphQL / REST API", "Framer Motion", "Markdown Parser"],
  features: [
    "Hybrid SSR & ISR Architecture: Utilized Server-Side Rendering for dynamic user feeds and Incremental Static Regeneration to compile blog posts into static HTML for zero-latency loading",
    "Headless CMS Content Middleware: Fully structured content schemas separating textual assets from the visual presentation layer for seamless multi-platform publishing",
    "Automated Webhook Sync Pipeline: Real-time rebuild triggers that automatically re-cache and update frontend pages the exact second content is published or modified inside the CMS",
    "Dynamic Slug Routing Matrix: Optimized dynamic route segments handling heavily nested article categories, tags, and custom writer profiles without hard refreshes",
    "Programmatic SEO & OpenGraph Matrix: Dynamic generation of meta titles, descriptive JSON-LD structured data logs, and semantic OpenGraph cards to maximize indexing efficiency",
    "Asynchronous Reading Progress Metric: Lightweight client-side custom hooks mapping read-depth percentages to a smooth layout loader tracking user progress",
    "Markdown to Semantic HTML Parsing: Seamless ingestion of rich markdown structures from the backend, instantly mapping blocks into accessible, styled Tailwind typography frameworks",
    "Responsive Content Layout: Fluid typography fluidities engineered with Tailwind ensuring pixel-perfect readability across massive ultra-wide monitors down to compact mobile displays"
  ],
  liveLink: "https://devblog-platform.vercel.app", // Aap apna actual preview link yahan daal sakte hain
  image: "/webmashdevblog.png" // Aapki portfolio gallery image ka path
},
 

  // WORDPRESS PROJECTS
  "miller-associates": {
    title: "Miller & Associates – Professional Law Firm Website",
    category: "WordPress Development",
    longDesc: "A high-authority corporate digital presence custom-built for a premium legal practice. This platform focuses heavily on trust building, seamless legal consultation scheduling, and structured presentation of complex practice areas to maximize legal lead generation.",
    problem: "Legal websites often suffer from confusing text layouts and unoptimized contact channels, causing potential clients to leave before initiating a consultation.",
    solution: "Developed a modern, clean corporate structure using WordPress and Elementor Pro with an advanced custom post type grid for practice areas and multi-channel intake form pipelines.",
    tools: ["WordPress", "Elementor Pro", "Astra Theme", "Advanced Custom Fields (ACF)", "Fluent Forms API", "WP Rocket"],
    features: [
      "Custom Practice Area Engine: Structured post-types detailing corporate, criminal, and family law matrices seamlessly",
      "Dynamic Consultation Intake Forms: Smart conditional logic forms routing incoming client data directly to legal departments",
      "Lead Generation Architecture: Strategically placed Call-To-Action segments designed to drive consultation ratios",
      "Deep SEO Typography Optimization: Schema.org markup integrations to rank local practice keywords efficiently on Google Search",
      "Client Trust Testimonial Carousels: Premium validation layouts featuring verified client reviews with smooth fade transitions",
      "Advanced Database Performance Tuning: Server-side database configurations coupled with image lazy loading for sub-2s loads"
    ],
    liveLink: "https://miller-associates-demo.com",
    image: "/webmashWmiller.png"
  },

  "artisan-collective": {
    title: "The Artisan Collective – Full WooCommerce Store",
    category: "WordPress Development",
    longDesc: "A robust, scalable e-commerce infrastructure built to handle thousands of artisanal SKUs. Features deep design customizations, dynamic variations tracking, and transactional workflow optimization to minimize checkout dropouts.",
    problem: "The client needed a digital storefront that looks handcrafted but operates with the speed and automated scaling of an enterprise retail store.",
    solution: "Engineered a custom WordPress framework backed by WooCommerce, incorporating optimized product queries, custom relational tables for variations, and automated stock notification nodes.",
    tools: ["WordPress", "WooCommerce", "Dynamic Product Loop Filters", "Stripe Gateway Core", "Redis Cache", "Tailwind CSS"],
    features: [
      "Dynamic Product Attribute Sorting: AJAX-powered filters allowing customers to sort items by size, material, and color instantly",
      "Automated Stock Ingestion Framework: Real-time multi-channel background routines updating product inventories instantly upon sales",
      "Secure Stripe Gateway API: Encrypted end-to-end checkout paths processing credit cards, Apple Pay, and native transactions",
      "Custom Variable Product Grids: Modular display grids supporting bulk variation selections right from the archive catalog page",
      "Automated Customer Notification Hooks: Webhook integrations firing transactional receipts and shipping updates on order modifications",
      "Cart Optimization Pipelines: One-click cart updates and a high-retention sliding panel workflow tailored for quick mobile shopping"
    ],
    liveLink: "https://artisan-collective-store.com",
    image: "/webmashWartisan.png"
  },

  "wanderlust-diary": {
    title: "Wanderlust Diary – SEO-Optimized Lifestyle Blog",
    category: "WordPress Development",
    longDesc: "A hyper-fast, content-focused editorial publication built for travel vloggers and tech journalists. Deployed with semantic layout geometries designed to enhance reading length metrics and maximize ad monetization space without hurting UX.",
    problem: "Content blogs frequently crash during traffic surges and lose readers due to sluggish article rendering layouts and intrusive advertisement slots.",
    solution: "Deployed a lightweight hybrid WordPress framework utilizing advanced server caching layers, automated script minification nodes, and asynchronous ad delivery script placements.",
    tools: ["WordPress", "Gutenberg Block Editor", "GeneratePress Core", "Google AdSense API", "RankMath SEO Pro", "Cloudflare CDN"],
    features: [
      "Asynchronous Ad Injection Matrix: Smart placeholders serving advertisement banners dynamically to preserve initial loading speed",
      "Automated Social Sync Hooks: Instant background API publication workflows updating social media timelines the moment a post goes live",
      "Advanced On-Page SEO Schema: Programmatic structured data injections supporting rich results snippets and semantic metadata grids",
      "Infinite Scroll Article Feeds: High-fidelity AJAX pagination loading next posts automatically as the reader completes a story",
      "Optimized Typography Tracking Layouts: Custom reading width containers designed carefully to maximize structural eye focus and reading speed",
      "Global CDN Aggressive Edge Caching: Cloudflare routing matrices delivering static editorial components from the nearest edge servers"
    ],
    liveLink: "https://wanderlust-diary-blog.com",
    image: "/webmashWwanderlust.png"
  },

  "capture-moments": {
    title: "Capture Moments – Minimalist Photography Portfolio",
    category: "WordPress Development",
    longDesc: "A fluid, visual-centric digital showroom developed to showcase ultra-high-resolution photographic portfolios. Built with non-destructive image delivery loops to balance raw visual depth with sharp loading velocities.",
    problem: "Visual art portfolios often face massive performance bottlenecks due to uncompressed heavy image file delivery breaking Core Web Vitals parameters.",
    solution: "Configured an advanced modern image routing system with automated WebP compression tasks and hardware-accelerated gallery layouts.",
    tools: ["WordPress", "Custom CSS Grid Architecture", "WebP Image Pipelines", "Lightbox Core", "Framer-inspired Sliders"],
    features: [
      "Next-Gen Format Automation: Server-side scripts transcoding heavy RAW files into optimized mobile-responsive WebP formats",
      "Hardware-Accelerated Fluid Galleries: CSS Grid layouts that utilize the client's GPU for silky smooth scroll animations",
      "Zero-Distraction Minimalist UX: Hidden canvas slide menus keeping the focus purely on full-screen photographic art pieces",
      "Dynamic Touch-Responsive Lightbox: Mobile-first swipeable image zoom systems supporting fluid navigation motions",
      "Creative Right-Click Copy Protection: Integrated script safety layers minimizing unauthorized assets downloads from the interface",
      "Lazy-Loaded Asset Prioritization: Smart asset staging downloading images only when they approach the active device view"
    ],
    liveLink: "https://capture-moments-portfolio.com",
    image: "/webmashWcapture.png"
  },

  "digital-growth": {
    title: "Digital Growth – High-Conversion Landing Page",
    category: "WordPress Development",
    longDesc: "A single-page marketing funnels architecture engineered strictly for digital software conversion assets. The design prioritizes conversion psychology and strict delivery speeds to eliminate checkout hesitation.",
    problem: "The target client suffered a dismal 2% download rate due to complex layouts and hidden download buttons on a sluggish host system.",
    solution: "Designed a single-page layout focusing entirely on clear CTA funnels, single-click product distributions, and embedded transactional checkouts.",
    tools: ["WordPress", "Elementor Canvas Engine", "EDD (Easy Digital Downloads)", "Tailwind Layout Patterns", "Google Analytics E-commerce"],
    features: [
      "Psychological Friction Triggers: Scarcity tickers and automated social proof popups structured to drive click actions",
      "Single-Click Asset Delivery: Seamless integration downloading software bundles immediately after successful authentication",
      "A/B Tested CTA Frameworks: Varied action buttons placed perfectly throughout the user reading path to trap leads",
      "Embedded One-Page Checkout Hub: No redirects; checkout forms are baked right into the layout to minimize sales dropouts",
      "Enhanced Conversion Analytics Tracking: Core scripts capturing interactive event data points detailing exact customer drops",
      "Hyper-Compressed Structural Assets: Minimal script architecture running zero external framework weight for instant initialization"
    ],
    liveLink: "https://digital-growth-funnel.com",
    image: "/webmashWdigital.png"
  },

  // ==========================================
  // FIGMA (UI/UX) PROJECTS
  // ==========================================

  "sneaker-hub": {
    title: "Sneaker Hub – E-commerce Mobile UI Concept",
    category: "UI/UX Design",
    longDesc: "A complete mobile user interface prototype for a luxury footwear storefront. Focused heavily on thumb-zone interactive models, complex filter state wireframes, and high-fidelity atomic design structures.",
    problem: "Mobile retail shoppers often abandon checkouts because filters are clunky and navigation requires two-handed operations.",
    solution: "Designed a mobile-first interface implementing bottom-sheet modal layouts, gesture-based interactions, and a simplified single-screen shopping matrix.",
    tools: ["Figma", "Atomic Design Systems", "Advanced Prototyping Constraints", "Component Variants Library"],
    features: [
      "Atomic Component Tokenization: Standardized global design variables for colors, spacing grids, and custom typography variables",
      "Interactive Gesture Prototyping: Realistic user micro-flows supporting swipe-to-delete cart mechanics and snap carousel components",
      "Thumb-Zone Ergonomics Architecture: Crucial navigation paths mapped entirely to the lower portion of mobile screens for comfortable use",
      "Dynamic Bottom-Sheet Modal Inlets: Filter menus and configuration adjustments loading into slide panels without breaking app focus",
      "Comprehensive Multi-State Wireframes: Deep layout mockups detailing Default, Active, Error, and Loading UI view variants",
      "Fluid Checkout Wireframe Journey: A simplified linear payment wireframe that visualizes quick cart conversions instantly"
    ],
    liveLink: "https://figma.com/file/sneaker-hub-prototype",
    image: "/webmashFsneakerhub.png"
  },

  "datascale-analytics": {
    title: "DataScale – SaaS Analytics Dashboard Design",
    category: "UI/UX Design",
    longDesc: "A complex B2B data visualization layout designed for cloud-scale analytics systems. Built using structured grid systems and customized charts designed to clarify tracking dense business metrics.",
    problem: "SaaS administrators frequently find telemetry dashboards overwhelming due to cluttered metric tables and poor visual hierarchy choices.",
    solution: "Architected a minimalist dark-mode design system organizing analytical feeds into clean dashboard blocks with clear typography focus layers.",
    tools: ["Figma", "SaaS UI Component Kit", "Data Visualization Layouts", "Dark Mode Color Theory"],
    features: [
      "Mathematical Layout Grids: Balanced design configurations enforcing sharp visual structural layouts across wide analytics views",
      "Dark Mode Color Balancing: High-contrast interface color spaces avoiding eye strain while preserving clean metric readouts",
      "High-Fidelity Telemetry Components: Custom-designed line plots, bar charts, and radar metrics for clear complex monitoring data",
      "Configurable Widget Architecture: Flexible UI layout blocks allowing rapid wireframing for modular drag-and-drop metrics updates",
      "Contextual Tooltip Micro-States: Hover asset overlays detailing deep historical dataset parameters elegantly",
      "Scalable Navigation Rail Interfaces: Retractable primary controls menus maximizing data workspace real-estate safely"
    ],
    liveLink: "https://figma.com/file/datascale-analytics-dashboard",
    image: "/webmashFdatascale.png"
  },

  "foodie-express": {
    title: "Foodie Express – Order Tracking & User Profile UX",
    category: "UI/UX Design",
    longDesc: "An intuitive mobile application interface detailing complete food logistics management workflows. Features rich interactive maps interfaces, delivery lifecycle bars, and user settings panel matrices.",
    problem: "Food delivery apps often fail to communicate order progress clearly, driving high user anxiety levels during dispatch operations.",
    solution: "Designed a highly visual delivery tracker layout featuring clear timeline checkpoints, driver location overlays, and clean support routing lines.",
    tools: ["Figma", "User Journey Flowcharting", "Interactive Variant States", "Mobile Interface Kit"],
    features: [
      "Linear Tracking Micro-States: Clean visual indicator sequences tracking orders from kitchen prep to doorstep handoff",
      "Vector Map Tracking Assets: Beautiful map interface blocks mapping delivery paths with stylized driver markers",
      "One-Tap Support Interlinks: Inline quick-action elements connecting customers directly to courier chat frames during issues",
      "Personalized Profile Settings Layout: Minimal layout templates simplifying modifications for delivery addresses and card wallets",
      "Interactive Order History Rows: Expandable card rows displaying previous item receipts for simple one-tap reordering operations",
      "Dynamic Light Interaction Badges: High-visibility status tokens instantly communicating delivery delay adjustments"
    ],
    liveLink: "https://figma.com/file/foodie-express-ui",
    image: "/webmashFfoodie.png"
  },

  "quantum-studio": {
    title: "Quantum Studio – Responsive Agency Web UI Concept",
    category: "UI/UX Design",
    longDesc: "A high-end, responsive agency homepage interface concept utilizing asymmetric masonry designs and premium geometric presentation frames.",
    problem: "Creative agency websites often lose their design structure on tablets and mobile screens, breaking their unique brand aesthetic.",
    solution: "Created an adaptive design model mapping asymmetric web components into structured vertical blocks for smooth screen resizing.",
    tools: ["Figma Auto-Layout 5.0", "Responsive Breakpoints System", "Typography Framework Design"],
    features: [
      "Advanced Auto-Layout Mechanics: Component matrices resizing fluidly according to parent frame constraints",
      "Pixel-Perfect Breakpoint Screens: Complete layouts detailing exact UI adjustments for 1440p Desktops, iPads, and smartphones",
      "Asymmetric Masonry Showcase: Creative project grid designs breaking away from basic square blocks while matching column systems",
      "Fluid Typography Hierarchy Schemes: Scaled type tokens maintaining elite readability proportions across all display view sizes",
      "Interactive Mega-Menu Configurations: Full-screen menu systems organizing contact details, social links, and agency branches",
      "Component Inheritance Tokens: Global master modules that automatically distribute structural changes across all viewport layouts"
    ],
    liveLink: "https://figma.com/file/quantum-studio-web",
    image: "/Figma2.png"
  },

  "payswift-fintech": {
    title: "PaySwift – FinTech Digital Wallet Interface Design",
    category: "UI/UX Design",
    longDesc: "A clean digital interface prototype for a modern banking and transaction ledger app. Focuses completely on security compliance graphics, clean asset ledgers, and seamless transfer flows.",
    problem: "Financial applications often overwhelm non-technical users with dense banking terms and confusing account transfers procedures.",
    solution: "Developed a modern, minimalist interface utilizing familiar card designs, clean color coding, and quick-action transfer portals.",
    tools: ["Figma", "Design Token Schemas", "High-Fidelity Financial Components", "Accessibility Contrast Testing"],
    features: [
      "Accessible Color Contrasts: Interface colors rigorously tested to exceed WCAG 2.1 AA parameters for universal readability",
      "Biometric Activation Layouts: Quick UI interactions mapping face-ID authentication states during secure transfers",
      "Minimalist Activity Ledger Tables: Transaction charts grouping expenses into recognizable visual categories effortlessly",
      "Quick-Action Peer Transfer Rails: Card carousels displaying favorite payees for single-tap payment entries",
      "Virtual Credit Card Generator Forms: Micro-flows creating masked temporary payment cards for secure online purchases",
      "Dynamic Account Value Toggles: Privacy eye features masking numerical bank balances instantly from the main viewport"
    ],
    liveLink: "https://figma.com/file/payswift-fintech-wallet",
    image: "/Figma1.png"
  },

  // ==========================================
  // GRAPHIC DESIGN PROJECTS
  // ==========================================

  "aroma-blend": {
    title: "Aroma Blend - Minimalist Brand Identity Kit",
    category: "Graphic Design",
    longDesc: "A premium, holistic corporate branding system developed for an upscale boutique coffee house. Centers around geometric balance, typography branding rules, and high-end print design setups.",
    problem: "The client needed a coffee brand look that felt premium and timeless, avoiding clunky coffee bean clichés.",
    solution: "Created a minimalist, typography-driven logo mark matched with a rich monochrome palette and comprehensive branding guidelines.",
    tools: ["Adobe Illustrator", "Vector Mathematics Geometry", "Print Media Pre-flight Configurations", "Brand Style Guides"],
    features: [
      "Geometric Monogram Vector Formulations: Hand-crafted primary vector lockups built on perfect mathematical alignment circles",
      "Premium Stationery Design Matrices: Clean business card dimensions, letterhead ratios, and invoice typography sheets",
      "Corporate Color Palette Mapping: Exact CMYK, Pantone, and Hex designations ensuring identical asset print runs everywhere",
      "Packaging Graphic Systems: Elegant visual template guidelines for coffee bags and carry sleeves",
      "Typography Usage Guidelines: Selected serif and sans-serif pairings with clear hierarchy tracking parameters",
      "Vector Scalability Verification: Brand marks optimized to scale from massive storefront signage down to small mobile app icons"
    ],
    liveLink: "https://behance.net/portfolio/aroma-blend-branding",
    image: "/Graphic5.png"
  },

  "earth-soul": {
    title: "Earth & Soul – Organic Skincare Packaging Design",
    category: "Graphic Design",
    longDesc: "Eco-conscious commercial packaging and product label design for an organic cosmetics line. Employs clean layouts, natural tones, and premium vector product renders.",
    problem: "Natural skincare products often look cheap on retail shelves if their labels are cluttered or use harsh colors.",
    solution: "Designed a minimalist packaging system leveraging clean layouts, earthy colors, and clear botanical illustration details.",
    tools: ["Adobe Illustrator", "3D Package Mockup Engine", "Color Separation Channels", "Vector Illustration Paths"],
    features: [
      "Custom Botanical Vector Details: Intricate hand-drawn vector elements accenting cosmetic boxes beautifully",
      "Die-Cut Packaging Layouts: Exact production-ready dielines for custom boxes with perfect glue tab calculations",
      "Tactile Material Simulation Mockups: High-resolution visual presentations modeling matte finishes and gold foil stamps",
      "FDA-Compliant Text Grids: Structured layout structures cleanly organizing ingredients data on container backs",
      "Consistent Product Variant System: Cohesive color coding to differentiate toners, serums, and oils smoothly across the line",
      "High-Contrast Typography Selections: Legible text layouts maintaining sharp clarity even on miniature dropper bottles"
    ],
    liveLink: "https://behance.net/portfolio/earth-soul-packaging",
    image: "/Graphic1.png"
  },

  "futuretech-vector": {
    title: "FutureTech – Conceptual Vector Illustration",
    category: "Graphic Design",
    longDesc: "An intricate, high-concept vector illustration exploring artificial intelligence and network data streams. Built for digital tech media and hero banner graphics.",
    problem: "Technology graphics are frequently generic, relying on standard blue circuit tracks and low-quality brain shapes.",
    solution: "Engineered a custom vector artwork piece blending abstract isometric shapes with glowing gradient data streams.",
    tools: ["Adobe Illustrator", "Gradient Mesh Complex Engines", "Isometric Grid Layouts", "Vector Path Pen Optimization"],
    features: [
      "Multi-Layer Isometric Matrices: Complex geometric perspectives drawn meticulously on 30-degree layout frameworks",
      "Advanced Gradient Mesh Paths: High-fidelity color transitions giving flat vector graphics depth and a soft glow",
      "Clean Infinite Scalability Layers: Sharp vector points allowing asset enlargement to billboard dimensions without quality loss",
      "Deconstructed Modular Elements: Grouped graphic layers that can be split apart for use as separate social media headers",
      "Balanced Digital Color Harmonies: Vibrant magentas and deep neon greens contrasted beautifully against dark canvases",
      "Precise Point Vector Paths: Super clean anchor points ensuring fast image rendering inside modern web browsers"
    ],
    liveLink: "https://behance.net/portfolio/futuretech-vector-art",
    image: "/Graphic2.png"
  },

  "azure-realty": {
    title: "Azure Realty – Luxury Real Estate Brochure Core Layout",
    category: "Graphic Design",
    longDesc: "An elegant print marketing asset designed for elite real estate listings. Centers around editorial typography grid systems and high-end image placement configurations.",
    problem: "Property brochures frequently look messy, crowding real estate images into cluttered grids that lower perceived value.",
    solution: "Created an editorial layout using extensive white space, premium typography lines, and huge architectural photo spaces.",
    tools: ["Adobe InDesign", "Editorial Grid Systems", "Pre-flight Printing Diagnostics", "Color Space Configurations (CMYK)"],
    features: [
      "Rigid Multi-Column Editorial Grids: Balanced structural guidelines aligning text boxes with photography frames perfectly",
      "High-Resolution Pre-flight Adjustments: Full print preparation converting rgb data into high-end CMYK 300-DPI outputs",
      "Premium Typographic Hierarchy Profiles: Selected classic font scales projecting a premium look for luxury buyers",
      "Master Page Layout Frameworks: Consistent header and page numbering scripts automate structural layout processing",
      "Custom Vector Asset Icon Matrices: Minimalist custom icons designed explicitly for property feature labels (Beds, Baths, Sqft)",
      "Balanced Ink Coverage Boundaries: Monitored color saturations ensuring clean ink drying without smudging during print cycles"
    ],
    liveLink: "https://behance.net/portfolio/azure-realty-brochure",
    image: "/Graphic3.png"
  },

  "fitpulse-campaign": {
    title: "FitPulse – Dynamic Social Media Marketing Campaign",
    category: "Graphic Design",
    longDesc: "A high-energy, multi-platform digital asset kit designed to maximize application user acquisition metrics on social networks. Uses bold typography layouts and action colors.",
    problem: "Fitness ads are easily ignored if they use generic stock imagery and low-contrast text layouts.",
    solution: "Developed a high-energy asset kit utilizing bold typography cuts, vibrant duotone filters, and striking action graphics frames.",
    tools: ["Adobe Photoshop", "Duotone Color Filters Engine", "Social Aspect Dimensions Profiles", "Typography Clipping Masks"],
    features: [
      "Multi-Platform Aspect Presets: Assets tailored perfectly for Instagram Stories (9:16), Square Feeds (1:1), and Landscape banners",
      "High-Contrast Typography Layouts: Thick sans-serif fonts overlapping graphics to demand instant screen scrolling focus",
      "Custom Digital Duotone Processing: Distinctive two-tone filter styles creating a unified brand look across diverse athlete imagery",
      "Clear Visual CTA Overlays: High-visibility button vectors encouraging instant swipe-up and download actions",
      "Layered Composite Asset Architectures: Structured files allowing quick text and photo updates for future split testing",
      "Optimized Export Compression Profiles: Automated script exports keeping files crisp and lightweight for instant mobile loads"
    ],
    liveLink: "https://behance.net/portfolio/fitpulse-social-campaign",
    image: "/Graphic4.png"
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-black text-slate-900">Project Not Found</h1>
        <Link href="/#portfolio" className="text-blue-600 font-bold flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#FCFDFF] min-h-screen">
      {/* 1. Header Navigation */}
      <nav className="p-6 fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/#portfolio" className="flex items-center gap-2 font-black text-slate-900 hover:text-blue-600 transition-colors">
            <ArrowLeft size={20} /> BACK TO CASE STUDIES
          </Link>
          <div className="hidden md:block text-xs font-black uppercase tracking-[0.3em] text-slate-400">
            Case Study: {project.title}
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">
                {project.category}
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                {project.title.split(' ')[0]} <br/>
                <span className="text-blue-600">{project.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                {project.longDesc}
              </p>
              
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-2xl active:scale-95"
                >
                  Explore Live Project <ExternalLink size={20} />
                </a>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[400px] md:h-[600px] bg-slate-50 rounded-[40px] border border-slate-100 overflow-hidden"
            >
              <Image src={project.image} alt={project.title} fill className="object-contain p-12" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Breakdown Grid */}
      <section className="py-20 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="p-10 bg-slate-50 rounded-[40px] space-y-4">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900">The Challenge</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-10 bg-blue-50 rounded-[40px] space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
              <Rocket size={24} />
            </div>
            <h3 className="text-2xl font-black text-slate-900">The Solution</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{project.solution}</p>
          </div>

          <div className="p-10 bg-slate-900 rounded-[40px] space-y-6 text-white">
            <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center">
              <Cpu size={24} />
            </div>
            <h3 className="text-2xl font-black">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold border border-white/10">
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Features List */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 tracking-tighter">
            Key Features & <span className="text-blue-600">Capabilities.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 border border-slate-100 rounded-3xl hover:border-blue-200 transition-colors">
                <div className="mt-1 text-green-500">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">{feature}</h4>
                  <p className="text-slate-500 text-sm font-medium">Delivering high performance and industry-standard security.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[50px] p-12 md:p-24 text-center text-white shadow-2xl shadow-blue-200">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to build something <br/> similar for your brand?</h2>
          <Link href="/quote" className="inline-flex items-center gap-4 px-14 py-6 bg-white text-blue-600 rounded-[24px] font-black text-xl hover:bg-slate-900 hover:text-white transition-all shadow-xl">
            Start Your Project <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </main>
  );
}