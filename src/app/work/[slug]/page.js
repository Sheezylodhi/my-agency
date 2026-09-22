import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Code2, 
  Workflow, 
  ShieldCheck, 
  Server, 
  Database, 
  Layout, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Sparkles 
} from "lucide-react";

// ==========================================
// CENTRALIZED CASE STUDY & PROJECT DATA
// ==========================================
const CASE_STUDIES = {
"zs-digitizing": {

  id: 1,
  number: "01",
  slug: "zs-digitizing",

  title: "ZS Digitizing",

  category: "Embroidery Digitizing / Client Platform",

  industry: "Embroidery & Apparel",

  summary:
    "A custom embroidery digitizing platform built to showcase professional digitizing services, manage client orders, streamline artwork submissions, and connect customers with a centralized digital workflow.",

  statement:
    "Transforming a traditional embroidery digitizing business into a streamlined digital platform built around faster client communication, organized order management, and a more professional customer experience.",

  challenge:
    "The client needed more than a traditional business website. Managing embroidery digitizing requests, artwork files, revisions, customer communication, and order information through fragmented manual processes made it difficult to maintain an organized workflow as demand increased. Customers also needed a clearer way to explore services, submit their embroidery requirements, track requests, and communicate with the business. The challenge was to create a professional digital experience that could serve both customers and the internal team without sacrificing simplicity or performance.",

  approach: [

    {
      num: "01",
      title: "Strategy",
      desc:
        "Defined a digital workflow around embroidery digitizing services, customer inquiries, artwork submissions, order management, and long-term client relationships."
    },

    {
      num: "02",
      title: "UX / Architecture",
      desc:
        "Structured the website, client portal, and admin experience into clear journeys so customers can discover services, submit requirements, and manage their requests with minimal friction."
    },

    {
      num: "03",
      title: "Design",
      desc:
        "Created a refined, service-focused interface that combines professional visual presentation with the clarity required by embroidery businesses, apparel brands, and custom garment clients."
    },

    {
      num: "04",
      title: "Engineering",
      desc:
        "Built a full-stack Next.js platform with secure authentication, database-driven workflows, customer accounts, order handling, file management, and dedicated administrative functionality."
    },

    {
      num: "05",
      title: "Optimization",
      desc:
        "Optimized responsive layouts, image delivery, client-side interactions, and application performance to provide a fast and reliable experience across desktop, tablet, and mobile devices."
    }

  ],

  features: [

    "Professional embroidery digitizing service showcase",

    "Custom logo and artwork digitizing workflow",

    "Vector artwork and embroidery patch service presentation",

    "Customer registration and secure account management",

    "Dedicated client dashboard for managing requests and orders",

    "Order status and request tracking",

    "Artwork and design file submission",

    "Customer order history and account information",

    "Centralized admin dashboard for business management",

    "Admin-side customer and order management",

    "Secure role-based access for clients and administrators",

    "Cloud-based media and artwork file handling",

    "Responsive experience across desktop, tablet, and mobile",

    "SEO-focused service and content architecture"

  ],

  designDirection:
    "The visual direction was built around precision, trust, and professional craftsmanship. Instead of relying on the generic look of a typical embroidery service website, the interface uses structured layouts, confident typography, refined spacing, and carefully presented service information to communicate the quality expected from professional embroidery digitizing. The customer-facing experience remains approachable while the client and admin interfaces prioritize clarity, efficiency, and operational control.",

  engineering: {

    overview:
      "ZS Digitizing was engineered as a full-stack digital platform rather than a static marketing website, connecting the public website, client portal, and administrative system through a unified application architecture.",

    frontend:
      "Built with Next.js and a responsive component architecture to deliver fast page rendering, SEO-friendly service pages, smooth navigation, and optimized experiences across modern devices.",

    backend:
      "Node.js-powered application logic handles authentication, customer workflows, order operations, file-related processes, API communication, and administrative functionality through structured server-side routes.",

    database:
      "MongoDB provides a flexible data layer for customer accounts, orders, service information, request records, and platform data while supporting scalable document-based workflows.",

    clientPanel:
      "A dedicated client portal gives customers a centralized place to access their account, manage requests, review order information, submit artwork requirements, and stay connected with the digitizing workflow.",

    adminPanel:
      "The administrative dashboard provides internal control over customers, orders, requests, services, and operational data, reducing dependency on scattered manual processes and creating a more organized business workflow.",

    fileManagement:
      "Cloud-based media handling supports the management of embroidery artwork and related visual assets while keeping the platform prepared for file-heavy digitizing workflows.",

    apis:
      "Custom RESTful API routes connect the customer-facing application, client portal, and administrative system with structured validation, authentication, error handling, and database operations."

  },

  outcome:
    "The result is a complete digital ecosystem for an embroidery digitizing business — combining a professional service website with a dedicated client portal and powerful administrative dashboard. ZS Digitizing provides customers with a clearer way to discover embroidery digitizing services, submit their requirements, and manage their requests while giving the business a centralized system for handling customers, orders, artwork, and day-to-day operations.",

  technologies: [
    "Next.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Cloudinary"
  ],

  services: [
    "Strategy",
    "UI/UX Design",
    "Web Development",
    "Client Portal",
    "Admin Dashboard",
    "E-Commerce",
    "SEO"
  ],

  image: "/zs-digitizing.png",

  imageAlt:
    "ZS Digitizing embroidery digitizing services website, client portal and admin dashboard",

  liveUrl: "https://zsdigitizing.com",

  nextProject: {
    slug: "seedra-store",
    title: "Seedra",
    number: "02",
    category: "E-Commerce / Wellness Store"
  }

},
 "seedra-store": {
  id: 5,
  number: "05",
  slug: "seedra-store",
  title: "Seedra",
  category: "E-Commerce / Wellness Store",
  industry: "Health & Wellness",

  summary:
    "A premium wellness e-commerce platform designed to help customers discover seed-based products, build daily wellness routines, place orders seamlessly, and manage the entire store through a centralized administration system.",

  statement:
    "Turning a traditional seed business into a refined digital commerce experience with seamless shopping, structured product management, and centralized business operations.",

  challenge:
    "The business needed more than a simple online catalog. Customers required a clear and trustworthy way to discover wellness products, understand product benefits, choose suitable pack sizes, and complete purchases through convenient payment methods. At the same time, the business needed a centralized system for managing products, variants, pricing, inventory, orders, customers, reviews, coupons, and day-to-day store operations. The challenge was to bring the customer experience and internal business management into one scalable e-commerce platform while maintaining a premium wellness-focused visual identity.",

  approach: [

    {
      num: "01",
      title: "Strategy",
      desc:
        "Defined a commerce structure around product discovery, wellness education, product variants, customer trust, streamlined checkout, and scalable store management."
    },

    {
      num: "02",
      title: "UX / Architecture",
      desc:
        "Designed a clear shopping journey connecting product discovery, search and filtering, product details, variants, cart, checkout, order tracking, and customer account experiences."
    },

    {
      num: "03",
      title: "Design",
      desc:
        "Created a premium wellness aesthetic using refined typography, natural visual language, structured layouts, and subtle interactions to establish trust without making the store feel like a generic seed marketplace."
    },

    {
      num: "04",
      title: "Engineering",
      desc:
        "Built a full-stack Next.js commerce platform with database-driven products, product variants, customer accounts, orders, payments, reviews, coupons, inventory workflows, and a dedicated administrative system."
    },

    {
      num: "05",
      title: "Optimization",
      desc:
        "Optimized the storefront for responsive shopping, efficient product browsing, image delivery, cart interactions, checkout reliability, and a consistent experience across desktop and mobile devices."
    }

  ],

  features: [

    "Premium wellness-focused online storefront",

    "Structured product catalog with category and product-type organization",

    "Multiple product variants with pack sizes, pricing, comparison pricing, stock, and SKU management",

    "Product search, filtering, and sorting experience",

    "Detailed product pages with benefits, information, and purchasing options",

    "Persistent shopping cart and cart drawer experience",

    "Streamlined checkout workflow",

    "Multiple payment methods including Cash on Delivery and online payment options",

    "Bank transfer, JazzCash, and Easypaisa payment workflows",

    "Payment proof and transaction information handling",

    "Customer accounts and order history",

    "Order status and fulfillment management",

    "Delivery charge and free-delivery threshold logic",

    "Customer review and rating system",

    "Coupon and promotional discount management",

    "Percentage and fixed-value coupon support",

    "Inventory and stock-aware purchasing workflows",

    "Secure administrative authentication",

    "Centralized admin dashboard",

    "Product and variant management from the admin panel",

    "Order and customer management",

    "Review moderation and management",

    "Coupon management and usage tracking",

    "Store analytics and business performance views",

    "Responsive customer and administrative interfaces",

    "SEO-ready product and storefront architecture"

  ],

  designDirection:
    "The visual direction was intentionally positioned closer to a premium wellness brand than a conventional seed store. Natural tones, generous whitespace, refined typography, structured product presentation, and subtle motion create a calm and trustworthy shopping environment. The storefront focuses on helping customers understand the products before purchasing, while the administrative experience prioritizes clarity, efficiency, and operational control.",

  engineering: {

    overview:
      "Seedra was engineered as a complete full-stack commerce ecosystem, combining a customer-facing storefront with authenticated customer functionality and a centralized administrative management platform.",

    frontend:
      "Built with Next.js using a responsive component architecture for fast storefront rendering, dynamic product experiences, optimized navigation, and mobile-first shopping interactions.",

    backend:
      "Server-side application logic handles products, product variants, customers, carts, orders, payment information, reviews, coupons, authentication, inventory-related operations, and administrative workflows.",

    database:
      "MongoDB provides the primary data layer for products, variants, customers, orders, reviews, coupons, inventory information, and other commerce records with flexible schemas suitable for evolving product structures.",

    productManagement:
      "The platform supports structured product management including product types, variants, pack sizes, prices, comparison prices, stock quantities, SKUs, product imagery, descriptions, and related commerce information.",

    cartAndCheckout:
      "A persistent cart experience allows customers to manage products and variants before moving through a streamlined checkout process with delivery calculations, customer information, and multiple payment options.",

    payments:
      "The checkout architecture supports Cash on Delivery alongside online and manual payment workflows, including bank transfer, JazzCash, and Easypaisa payment handling with transaction and payment-proof information where required.",

    orderManagement:
      "Orders are stored and managed centrally, allowing the business to review customer information, purchased products, payment details, delivery information, and order status through the administrative interface.",

    customerExperience:
      "Authenticated customers can access their account information, review previous purchases, monitor order progress, and interact with the store through a more personalized shopping experience.",

    reviewSystem:
      "A customer review system provides a structured way to collect product feedback and ratings while giving administrators control over review management and moderation.",

    couponSystem:
      "The platform includes centralized coupon management supporting percentage-based and fixed-value discounts, active and inactive states, expiration handling, and usage tracking.",

    adminPanel:
      "A dedicated administrative dashboard gives the business centralized control over products, variants, inventory, orders, customers, reviews, coupons, payments, and store operations without requiring direct database access.",

    analytics:
      "The administration system provides business-level analytics around revenue, orders, average order value, customer activity, and other operational metrics to help the store monitor performance.",

    mediaManagement:
      "Product and store imagery can be managed through cloud-based media handling, providing optimized asset delivery for a visually rich commerce experience.",

    apis:
      "Custom API routes connect the storefront, customer workflows, checkout system, and administrative dashboard with structured validation, authentication, error handling, and database operations."

  },

  outcome:
    "The result is a complete digital commerce ecosystem that brings the Seedra brand, product discovery, customer shopping, payments, order management, and internal operations into one unified platform. Customers receive a polished and trustworthy wellness shopping experience, while the business gains a centralized admin system for managing products, variants, inventory, orders, customers, reviews, coupons, payments, and day-to-day e-commerce operations.",

  technologies: [
    "Next.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Framer Motion",
    "Cloudinary"
  ],

  services: [
    "E-Commerce Strategy",
    "UI/UX Design",
    "Web Development",
    "Customer Portal",
    "Admin Dashboard",
    "Payment Integration",
    "Order Management",
    "SEO"
  ],

  image: "/seedra-store.png",

  imageAlt:
    "Seedra premium wellness e-commerce store with customer shopping experience and admin management dashboard",

  liveUrl: null,

  nextProject: {
    slug: "atlas-operations",
    title: "Atlas Operations",
    number: "06",
    category: "ERP / Business System"
  }
},


"fashion-commerce": {
  id: 3,
  number: "03",
  slug: "fashion-commerce",
  title: "Fashion Commerce",

  category: "E-Commerce / Fashion Store",

  industry: "Fashion & Apparel",

  summary:
    "A modern fashion e-commerce platform combining a premium online shopping experience with secure payments, customer accounts, order management, inventory control, and a centralized admin dashboard.",

  statement:
    "Creating a complete digital retail experience where customers can discover, purchase, and manage their fashion orders while the business controls its entire store from one centralized platform.",

  challenge:
    "The business needed a complete online retail system rather than a simple product showcase. Customers needed an intuitive way to browse clothing, explore product details, select available options, manage their shopping cart, create accounts, and complete purchases securely. Behind the storefront, the business also required centralized control over products, inventory, customers, payments, and orders. The challenge was to connect these customer-facing and operational workflows into one reliable e-commerce platform while maintaining the polished visual standards expected from a modern fashion brand.",

  approach: [

    {
      num: "01",
      title: "Strategy",
      desc:
        "Mapped the complete customer journey from product discovery through checkout and post-purchase account management while defining the operational requirements for the store."
    },

    {
      num: "02",
      title: "UX / Architecture",
      desc:
        "Structured the storefront around intuitive product discovery, detailed product pages, cart interactions, secure checkout, customer accounts, and streamlined order management."
    },

    {
      num: "03",
      title: "Design",
      desc:
        "Created a modern fashion-focused interface with strong visual hierarchy, premium product presentation, refined typography, and responsive layouts designed to keep the shopping experience clear and conversion-focused."
    },

    {
      num: "04",
      title: "Engineering",
      desc:
        "Developed a full-stack Next.js commerce application connecting the storefront, customer account system, Stripe payments, database, and administrative dashboard through a unified architecture."
    },

    {
      num: "05",
      title: "Optimization",
      desc:
        "Optimized product imagery, page rendering, responsive interactions, checkout flows, and database operations to provide a fast and dependable shopping experience across devices."
    }

  ],

  features: [

    "Premium fashion e-commerce storefront",

    "Product catalog and category browsing",

    "Detailed product pages with purchasing information",

    "Product search and discovery experience",

    "Shopping cart and persistent cart management",

    "Streamlined checkout experience",

    "Secure Stripe payment integration",

    "Stripe payment processing and transaction handling",

    "Customer registration and authentication",

    "Dedicated customer account area",

    "Customer order history and order information",

    "Order status and fulfillment management",

    "Centralized product management",

    "Product pricing and inventory management",

    "Customer management through the admin panel",

    "Centralized order management dashboard",

    "Administrative store controls",

    "Secure role-based administrative access",

    "Responsive mobile-first shopping experience",

    "Optimized product image delivery",

    "Database-driven e-commerce workflows",

    "SEO-ready storefront architecture"

  ],

  designDirection:
    "The visual direction was built around modern fashion commerce: clean, editorial-inspired layouts, strong product imagery, refined typography, and generous spacing. The interface keeps attention on the products while removing unnecessary friction from browsing and purchasing. Behind the customer experience, the administrative interface follows a more functional visual language focused on information clarity, efficient management, and fast access to important store operations.",

  engineering: {

    overview:
      "The platform was engineered as a complete full-stack e-commerce system, connecting the customer storefront, authentication, payment infrastructure, order processing, database, and administrative management into one application.",

    frontend:
      "Built with Next.js using a reusable responsive component architecture for fast storefront rendering, dynamic product pages, smooth navigation, and optimized experiences across desktop, tablet, and mobile.",

    backend:
      "Node.js-powered server-side functionality handles authentication, product operations, customer workflows, order creation, payment-related processes, API communication, and administrative operations.",

    database:
      "MongoDB provides the core data layer for products, customers, orders, inventory information, account data, and other commerce records using flexible document-based structures.",

    authentication:
      "A secure customer authentication system allows shoppers to create accounts, sign in, access their account information, and review their previous orders through a personalized customer experience.",

    payments:
      "Stripe is integrated into the checkout workflow to provide secure online payment processing, transaction handling, and reliable communication between the store and payment infrastructure.",

    checkout:
      "The checkout experience connects customer information, cart contents, pricing, payment processing, and order creation into a streamlined purchasing workflow designed to minimize unnecessary steps.",

    orderManagement:
      "Orders are stored centrally and made available to the administrative system, allowing the business to review customer purchases, order details, payment information, and fulfillment status from one place.",

    inventoryManagement:
      "The commerce architecture supports centralized product and inventory management, giving administrators control over product availability, pricing, and stock-related information.",

    adminPanel:
      "A dedicated admin dashboard gives the business centralized control over products, customers, orders, inventory, and other core store operations without requiring direct database access.",

    customerPanel:
      "The customer account area provides shoppers with a personalized space to manage their account information and access their order history after completing purchases.",

    mediaManagement:
      "Product imagery is handled through optimized media workflows to support high-quality fashion photography while maintaining efficient page performance and responsive delivery.",

    apis:
      "Custom API routes connect storefront interactions, authentication, product data, customer accounts, orders, and administrative workflows with structured validation and error handling."

  },

  outcome:
    "The result is a complete fashion commerce ecosystem that brings product discovery, customer accounts, secure Stripe payments, checkout, orders, inventory, and business administration together in one unified platform. Customers receive a polished and frictionless online shopping experience, while the business gains a centralized system for managing the core operations behind its digital storefront.",

  technologies: [
    "Next.js",
    "Node.js",
    "MongoDB",
    "Stripe",
    "Tailwind CSS",
    "Cloudinary"
  ],

  services: [
    "E-Commerce Strategy",
    "UI/UX Design",
    "Web Development",
    "Customer Account System",
    "Stripe Integration",
    "Admin Dashboard",
    "Order Management",
    "Inventory Management",
    "SEO"
  ],

  image:
    "/eccomerce.png",

  imageAlt:
    "Modern fashion e-commerce storefront with clothing products and online shopping experience",

  liveUrl: null,

  nextProject: {
    slug: "food-ordering-platform",
    title: "Food Ordering Platform",
    number: "04",
    category: "E-Commerce / Food Ordering"
  }
},
"food-ordering-platform": {
  id: 4,
  number: "04",
  slug: "food-ordering-platform",
  title: "Food Ordering Platform",

  category: "E-Commerce / Food Ordering",

  industry: "Food & Restaurant",

  summary:
    "An advanced food ordering platform combining a modern digital menu and online ordering experience with customer accounts, order management, and a centralized restaurant administration system.",

  statement:
    "Transforming restaurant ordering into a streamlined digital experience while giving restaurant teams centralized control over menus, orders, customers, and daily operations.",

  challenge:
    "The restaurant needed a complete digital ordering solution rather than a static website or simple menu page. Customers needed an intuitive way to discover menu items, explore food details, customize their selections where applicable, manage their cart, and place orders through a smooth online experience. At the same time, the restaurant required an administrative system for managing menu items, pricing, availability, customer information, incoming orders, and operational workflows. The challenge was to connect the customer ordering journey with the restaurant's internal management process through one reliable and scalable platform.",

  approach: [

    {
      num: "01",
      title: "Strategy",
      desc:
        "Mapped the complete digital ordering journey from menu discovery and item selection through cart, checkout, order confirmation, and post-order management."
    },

    {
      num: "02",
      title: "UX / Architecture",
      desc:
        "Designed a structured food discovery experience with clear menu categories, detailed item presentations, streamlined cart interactions, and a frictionless ordering flow."
    },

    {
      num: "03",
      title: "Design",
      desc:
        "Created a visually engaging restaurant interface focused on appetizing food presentation, clear pricing, strong hierarchy, and intuitive interactions across desktop and mobile."
    },

    {
      num: "04",
      title: "Engineering",
      desc:
        "Built a full-stack ordering platform connecting the customer storefront, authentication, cart, checkout, order processing, database, and administrative dashboard."
    },

    {
      num: "05",
      title: "Optimization",
      desc:
        "Optimized image delivery, menu browsing, responsive layouts, cart interactions, API performance, and order workflows for a fast and dependable online ordering experience."
    }

  ],

  features: [

    "Modern digital restaurant storefront",

    "Structured online food menu",

    "Menu categories and food discovery",

    "Detailed food item pages",

    "Food item pricing and availability management",

    "Shopping cart and cart management",

    "Streamlined online ordering workflow",

    "Customer registration and authentication",

    "Dedicated customer account experience",

    "Customer order history",

    "Order confirmation and status tracking",

    "Centralized restaurant order management",

    "Menu item and category management",

    "Pricing and availability controls",

    "Customer management through admin panel",

    "Restaurant administration dashboard",

    "Secure role-based administrative access",

    "Centralized operational data management",

    "Responsive mobile ordering experience",

    "Optimized food imagery and media delivery",

    "Database-driven ordering workflows",

    "SEO-ready restaurant and menu architecture"

  ],

  designDirection:
    "The visual direction was designed around modern food commerce, combining strong food photography with a clean and approachable interface. The customer experience prioritizes appetite, clarity, and speed, allowing users to move naturally from discovering a dish to placing an order. The administrative interface follows a more functional design language focused on operational clarity, order visibility, menu management, and efficient restaurant workflows.",

  engineering: {

    overview:
      "The platform was engineered as a complete full-stack food ordering ecosystem, connecting the customer-facing restaurant experience with authenticated customer functionality and a centralized administration system.",

    frontend:
      "Built with Next.js using a reusable responsive component architecture for fast page rendering, dynamic menu experiences, smooth navigation, and optimized mobile ordering interactions.",

    backend:
      "Node.js-powered server-side functionality handles authentication, menu operations, customer workflows, cart processing, order creation, API communication, and administrative operations.",

    database:
      "MongoDB provides the core data layer for menu items, categories, customers, orders, pricing, availability, account information, and other restaurant records.",

    authentication:
      "A secure customer authentication system allows users to create accounts, sign in, manage their information, and access their previous orders through a personalized account experience.",

    menuManagement:
      "The admin system provides centralized management of food categories and menu items, including product information, pricing, imagery, and availability.",

    cartAndOrdering:
      "A persistent cart experience allows customers to review selected food items, update quantities, verify pricing, and proceed through a streamlined online ordering workflow.",

    orderManagement:
      "Orders are stored centrally and surfaced through the administration system, allowing restaurant staff to review incoming orders, customer information, selected items, order totals, and order status.",

    customerManagement:
      "The administrative dashboard provides visibility into registered customers and their order activity, helping the business maintain a centralized view of its customer base.",

    adminPanel:
      "A dedicated restaurant admin dashboard gives the business centralized control over menu items, categories, pricing, availability, customers, orders, and other operational workflows without requiring direct database access.",

    availability:
      "Menu availability can be managed from the administrative side so restaurant teams can keep the digital menu aligned with current offerings and operational conditions.",

    mediaManagement:
      "Food imagery and other visual assets are managed through optimized media workflows to maintain high-quality presentation while keeping page performance efficient.",

    apis:
      "Custom API routes connect the storefront, authentication system, menu data, customer accounts, cart, orders, and administrative dashboard with structured validation and error handling."

  },

  outcome:
    "The result is a complete digital ordering ecosystem that brings restaurant discovery, menu browsing, customer accounts, online ordering, order tracking, and internal restaurant management into one unified platform. Customers receive a convenient and visually engaging way to browse food and place orders, while the restaurant gains centralized control over menus, customers, orders, pricing, availability, and day-to-day digital operations.",

  technologies: [
    "Next.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Cloudinary"
  ],

  services: [
    "E-Commerce Strategy",
    "UI/UX Design",
    "Web Development",
    "Online Ordering System",
    "Customer Account System",
    "Admin Dashboard",
    "Order Management",
    "Restaurant Management",
    "SEO"
  ],

  image:
    "/food.png",

  imageAlt:
    "Advanced food ordering platform with digital restaurant menu, online ordering and admin management dashboard",

  liveUrl: null,

  nextProject: {
    slug: "gym-landing-page",
    title: "Gym Landing Page",
    number: "05",
    category: "Fitness / Landing Page"
  }
},
 "gym-landing-page": {
  id: 5,
  number: "05",
  slug: "gym-landing-page",
  title: "Gym Landing Page",

  category: "Fitness / Landing Page",

  industry: "Fitness & Wellness",

  summary:
    "A high-impact fitness landing page designed to showcase a modern gym, communicate its training experience, and turn website visitors into membership and inquiry leads.",

  statement:
    "Creating a bold digital first impression for a fitness brand through focused storytelling, strong visual hierarchy, and conversion-driven landing page design.",

  challenge:
    "The gym needed a stronger digital presence that could communicate its atmosphere, training environment, programs, and value clearly within a single focused experience. The existing approach needed a more engaging visual presentation and a clearer path for visitors to understand the gym, explore its offerings, and take the next step toward joining or making an inquiry. The challenge was to create a landing page that felt energetic and premium without overwhelming visitors with unnecessary information.",

  approach: [

    {
      num: "01",
      title: "Strategy",
      desc:
        "Defined a focused landing page structure around the gym's brand, training experience, key offerings, social proof, and clear membership-oriented calls to action."
    },

    {
      num: "02",
      title: "UX / Architecture",
      desc:
        "Created a streamlined visitor journey that moves naturally from the initial brand introduction through gym benefits, programs, facilities, and conversion-focused contact sections."
    },

    {
      num: "03",
      title: "Design",
      desc:
        "Developed a bold fitness-focused visual language using strong typography, impactful imagery, confident spacing, and high-contrast sections to communicate energy and strength."
    },

    {
      num: "04",
      title: "Engineering",
      desc:
        "Built a responsive, performance-focused landing page with reusable components, optimized media, smooth interactions, and layouts designed for consistent presentation across modern devices."
    }

  ],

  features: [

    "Premium gym landing page experience",

    "Strong fitness-focused hero section",

    "Clear membership and inquiry call-to-actions",

    "Gym programs and training service presentation",

    "Fitness facility and environment showcase",

    "Benefits and value proposition sections",

    "Trainer or coaching presentation areas",

    "Social proof and testimonial sections",

    "Responsive mobile and desktop layouts",

    "Optimized fitness imagery and media",

    "Smooth page interactions and transitions",

    "Clear contact and conversion sections",

    "SEO-friendly landing page structure",

    "Performance-focused frontend implementation"

  ],

  designDirection:
    "The design direction focuses on energy, strength, and confidence while maintaining a polished premium feel. Large visual moments, bold typography, structured sections, and carefully controlled spacing create a strong fitness identity without making the interface feel cluttered. The page is intentionally focused, allowing the gym's atmosphere and training experience to remain the primary visual narrative.",

  engineering: {

    overview:
      "The landing page was engineered for fast loading, responsive presentation, and a smooth browsing experience across desktop, tablet, and mobile devices.",

    frontend:
      "Built with a modern component-based frontend architecture, creating reusable sections and responsive layouts that adapt naturally across screen sizes.",

    responsiveDesign:
      "The interface was carefully structured for mobile, tablet, and desktop breakpoints so important messaging, imagery, and calls to action remain accessible on every device.",

    performance:
      "Optimized page assets, image delivery, component structure, and frontend rendering to maintain a lightweight and responsive experience.",

    interactions:
      "Subtle transitions and interactive elements were introduced to add movement and polish without distracting visitors from the primary conversion journey.",

    seo:
      "Structured the landing page around clear content hierarchy, descriptive sections, semantic markup, responsive performance, and search-friendly fitness-related content."

  },

  outcome:
    "The result is a focused digital experience that gives the gym a stronger online presence and communicates its brand, training environment, services, and value proposition through a polished single-page journey. The landing page combines strong visual storytelling with clear calls to action, giving prospective members a straightforward path from discovering the gym to taking the next step.",

  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion"
  ],

  services: [
    "Landing Page Strategy",
    "UI/UX Design",
    "Web Development",
    "Responsive Design",
    "Performance Optimization",
    "SEO"
  ],

  image:
    "/gym.png",

  imageAlt:
    "Modern gym and fitness landing page website design",

  liveUrl: null,

  nextProject: {
    slug: "health-blog",
    title: "Health Blog",
    number: "06",
    category: "Health & Wellness / AI Platform"
  }
},
"health-blog": {
  id: 6,
  number: "06",
  slug: "health-blog",
  title: "Health Blog",
  category: "Health & Wellness / AI Platform",
  industry: "Health & Wellness",
  summary:
    "A modern health and wellness publishing platform combining a content-rich blog experience with a centralized admin panel and AI-powered content capabilities.",
  statement:
    "Building a smarter health publishing experience where high-quality content, streamlined administration, and AI-powered workflows come together in one scalable platform.",
  challenge:
    "The project required more than a traditional health blog. The platform needed a polished public-facing experience for discovering and reading health and wellness content while giving administrators complete control over articles, categories, content, and publishing workflows. AI capabilities were also integrated to support content-related workflows and make the platform more efficient to manage. The challenge was to bring content discovery, administration, and AI-powered functionality together without compromising readability, performance, or the trust expected from a health-focused digital platform.",
  approach: [
    {
      num: "01",
      title: "Strategy",
      desc:
        "Defined a content-first structure around health education, article discovery, categories, publishing workflows, and scalable content management."
    },
    {
      num: "02",
      title: "UX / Architecture",
      desc:
        "Designed clear journeys for browsing articles, exploring health topics, reading long-form content, and managing the publishing workflow through a centralized administration system."
    },
    {
      num: "03",
      title: "Design",
      desc:
        "Created a clean and trustworthy editorial interface with strong typography, structured content sections, readable layouts, and responsive presentation across modern devices."
    },
    {
      num: "04",
      title: "Engineering",
      desc:
        "Built a full-stack publishing platform with a dynamic blog, database-driven content, authentication, admin management, and integrated AI-powered functionality."
    },
    {
      num: "05",
      title: "Optimization",
      desc:
        "Optimized article rendering, media delivery, responsive layouts, content structure, and application performance to provide a fast and accessible reading experience."
    }
  ],
  features: [
    "Modern health and wellness blog",
    "Dynamic article publishing system",
    "Health-focused categories and content organization",
    "Detailed long-form article pages",
    "Article discovery and browsing experience",
    "Featured and recent content presentation",
    "Database-driven blog content",
    "Centralized admin dashboard",
    "Admin authentication and protected management area",
    "Article creation and editing",
    "Article publishing and content management",
    "Category and content organization",
    "Media and featured image management",
    "AI-powered content functionality",
    "AI-assisted content workflow integration",
    "Responsive reading experience",
    "Mobile-friendly editorial layouts",
    "SEO-friendly article architecture",
    "Structured content hierarchy",
    "Performance-focused frontend implementation"
  ],
  designDirection:
    "The visual direction was built around trust, clarity, and modern health publishing. Clean layouts, generous whitespace, readable typography, and carefully structured article content create an experience that feels closer to a professional wellness publication than a generic blog. The administration interface uses a more functional design language focused on efficient content management, while the AI functionality remains integrated naturally into the overall publishing workflow.",
  engineering: {
    overview:
      "The platform was engineered as a complete full-stack health publishing ecosystem, connecting the public blog, database-driven content system, administrative dashboard, authentication, and AI-powered functionality.",
    frontend:
      "Built with a modern component-based frontend architecture for responsive article pages, dynamic content rendering, smooth navigation, and optimized experiences across desktop, tablet, and mobile.",
    backend:
      "Server-side application logic handles article data, categories, authentication, administrative workflows, API communication, and AI-related functionality through structured application routes.",
    database:
      "A database-driven content architecture stores articles, categories, metadata, publishing information, and other platform records in a structure designed to support ongoing content growth.",
    authentication:
      "Protected authentication allows authorized administrators to access the content management system while keeping administrative functionality separate from the public reading experience.",
    contentManagement:
      "The admin panel provides centralized control over articles and content organization, allowing administrators to create, update, manage, and publish health-related content from one interface.",
    adminPanel:
      "A dedicated administration dashboard gives the publishing team centralized control over blog content, categories, media, and other core platform operations without requiring direct database access.",
    aiIntegration:
      "AI functionality was integrated into the platform to support content-related workflows and improve publishing efficiency, creating a more intelligent editorial management experience.",
    mediaManagement:
      "Article imagery and other visual assets are handled through structured media workflows to maintain consistent presentation across the publishing platform.",
    seo:
      "The content architecture was structured with search-friendly URLs, descriptive metadata, semantic content hierarchy, and optimized article presentation to provide a strong technical foundation for health and wellness content discovery.",
    apis:
      "Custom API routes connect the public blog, administration system, content data, authentication, and AI-powered functionality with structured validation and error handling."
  },
  outcome:
    "The result is a complete health and wellness publishing platform that combines a polished public blog with centralized content administration and AI-powered functionality. Readers receive a clean and accessible experience for discovering health content, while administrators gain a dedicated system for managing articles, categories, media, and publishing workflows more efficiently.",
  technologies: [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "AI Integration"
  ],
  services: [
    "Content Strategy",
    "UI/UX Design",
    "Web Development",
    "Blog Development",
    "Admin Dashboard",
    "AI Integration",
    "Content Management",
    "SEO"
  ],
  image:
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&auto=format&fit=crop",
  imageAlt:
    "Modern health and wellness blog platform with articles and content management system",
  liveUrl: null,
  nextProject: {
    slug: "hostel-management-system",
    title: "Hostel Management System",
    number: "07",
    category: "Management System / Role-Based Application"
  }
},
"hostel-management-system": {
  id: 7,
  number: "07",
  slug: "hostel-management-system",
  title: "Hostel Management System",
  category: "Management System / Role-Based Application",
  industry: "Education & Student Housing",

  summary:
    "A frontend-focused hostel management application featuring seven distinct user roles, tailored dashboards, and structured role-based access across hostel management workflows.",

  statement:
    "Designing a structured management experience where every user sees the tools, information, and workflows relevant to their specific role.",

  challenge:
    "The project required a management interface capable of supporting multiple types of hostel users without giving every user access to the same information or functionality. Seven different roles needed separate access levels and tailored experiences, making information architecture and permission-based navigation an important part of the system design. As a university project, the focus was placed on demonstrating the frontend architecture, user experience, role-based interfaces, and management workflows without a connected backend.",

  approach: [
    {
      num: "01",
      title: "Requirements",
      desc:
        "Mapped the responsibilities and interface requirements for seven different user roles, identifying the information and actions relevant to each user type."
    },
    {
      num: "02",
      title: "UX / Architecture",
      desc:
        "Structured the application around role-specific dashboards, navigation, pages, and management workflows so each user receives a focused experience."
    },
    {
      num: "03",
      title: "Design",
      desc:
        "Created a professional management interface with clear information hierarchy, structured dashboards, responsive layouts, and consistent visual patterns."
    },
    {
      num: "04",
      title: "Frontend Engineering",
      desc:
        "Developed the complete frontend experience with role-based navigation and access logic, reusable components, dashboard interfaces, forms, tables, and management views."
    },
    {
      num: "05",
      title: "Responsive Experience",
      desc:
        "Adapted the management interfaces for different screen sizes while keeping important navigation, data, and actions accessible across devices."
    }
  ],

  features: [
    "Seven distinct user roles",
    "Role-based access control interface",
    "Role-specific dashboards",
    "Permission-aware navigation",
    "Separate functionality based on user role",
    "Hostel management dashboard",
    "Student and resident management interfaces",
    "Room and accommodation management views",
    "Structured data tables",
    "Management forms and input workflows",
    "Role-specific navigation menus",
    "Responsive dashboard layouts",
    "Reusable frontend components",
    "Consistent management UI patterns",
    "Responsive desktop and mobile experience"
  ],

  designDirection:
    "The interface was designed with a professional management-system aesthetic, prioritizing clarity, structure, and efficient access to information. Each role receives a focused dashboard and navigation experience rather than being presented with unnecessary functionality. Consistent cards, tables, forms, navigation patterns, and responsive layouts create a unified system while maintaining clear separation between different user responsibilities.",

  engineering: {
    overview:
      "The project was developed as a frontend-focused management application demonstrating complex role-based interfaces and workflows without a connected backend.",

    frontend:
      "Built with React and JavaScript using reusable components, structured layouts, dashboard interfaces, forms, tables, and role-aware navigation.",

    roleBasedAccess:
      "Implemented frontend role-based access logic for seven distinct user types, allowing the interface and available navigation options to change according to the selected user role.",

    dashboards:
      "Created dedicated dashboard experiences tailored to the information and actions relevant to each role.",

    components:
      "Reusable UI components were used across dashboards, navigation, cards, tables, forms, and management views to maintain consistency and reduce duplication.",

    responsiveDesign:
      "The application was structured for responsive use across desktop, tablet, and mobile screen sizes.",

    backend:
      "The project was intentionally developed as a frontend university project and does not include a connected production backend or persistent database layer."
  },

  outcome:
    "The result is a professional frontend management system demonstrating how a complex hostel operation can be organized around seven different user roles. The project showcases role-based interface architecture, dashboard design, structured management workflows, reusable frontend components, and responsive application design while clearly remaining a frontend-focused implementation.",

  technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion"
  ],

  services: [
    "System Architecture",
    "UI/UX Design",
    "Frontend Development",
    "Role-Based Access Control",
    "Dashboard Design",
    "Responsive Design"
  ],

  image:
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1600&auto=format&fit=crop",

  imageAlt:
    "Hostel management system frontend with role-based dashboards and management interfaces",

  liveUrl: null,

  nextProject: {
    slug: "spotgo-parking",
    title: "SpotGo",
    number: "08",
    category: "Smart Parking / Web Application"
  }
},
"spotgo-parking": {
  id: 8,
  number: "08",
  slug: "spotgo-parking",
  title: "SpotGo",
  category: "Smart Parking / Web Application",
  industry: "Smart Mobility & Transportation",

  summary:
    "A high-end digital parking platform designed to help drivers discover available parking, explore locations, select exact parking spots, and manage reservations through an intuitive real-time interface.",

  statement:
    "Reimagining urban parking through a location-driven digital experience that connects parking discovery, live availability, exact spot selection, and reservation workflows in one interface.",

  challenge:
    "The project was designed to solve a common urban parking problem: drivers often spend unnecessary time searching for available spaces without knowing availability, location, pricing, or the exact parking area before arriving. The goal was to create a polished digital experience that could bring parking locations, availability, maps, spot selection, pricing, and reservations into one clear workflow. As a university project, the primary focus was on building an advanced frontend experience and demonstrating how a smart parking product could work through an interactive web application.",

  approach: [
    {
      num: "01",
      title: "Strategy",
      desc:
        "Mapped the complete parking journey from discovering nearby locations and checking availability to selecting an exact parking bay and reviewing reservation details."
    },
    {
      num: "02",
      title: "UX / Architecture",
      desc:
        "Designed the application around location discovery, parking availability, interactive maps, parking layouts, spot selection, and reservation flows."
    },
    {
      num: "03",
      title: "Design",
      desc:
        "Created a sophisticated smart-mobility interface combining clean modern layouts, map-driven experiences, high-visibility status indicators, and structured parking information."
    },
    {
      num: "04",
      title: "Frontend Engineering",
      desc:
        "Developed an interactive frontend application with dynamic parking locations, availability states, parking floors, individual bays, reservation controls, and responsive user interfaces."
    },
    {
      num: "05",
      title: "Experience Optimization",
      desc:
        "Focused on making a complex parking workflow feel simple by organizing location discovery, spot selection, pricing, and reservation information into clear progressive steps."
    }
  ],

  features: [
    "Smart parking discovery experience",
    "Location-based parking exploration",
    "Interactive parking map experience",
    "Parking location search",
    "Multiple parking locations across Karachi",
    "Live-style parking availability interface",
    "Parking occupancy indicators",
    "Exact parking spot selection",
    "Multi-floor parking layouts",
    "Individual parking bay visualization",
    "Available, reserved, and booked spot states",
    "Selected parking spot state",
    "VIP parking spot indication",
    "Parking duration selection",
    "Parking rate and estimated total calculation",
    "Reservation workflow interface",
    "Parking location details",
    "Distance and availability information",
    "Parking operator management concept",
    "Responsive desktop and mobile experience",
    "Modern smart-city product interface"
  ],

  designDirection:
    "The visual direction was designed around smart mobility, precision, and confidence. The interface combines a clean modern foundation with strong status indicators, interactive parking layouts, map-based discovery, and carefully structured information. Complex parking data is presented in a way that feels intuitive for everyday drivers while maintaining the polished visual language expected from a modern smart-city technology product.",

  engineering: {
    overview:
      "SpotGo was developed as a frontend-focused smart parking application demonstrating how a complex location and reservation workflow can be transformed into an intuitive digital experience.",

    frontend:
      "Built with a modern React/Next.js-style component architecture for dynamic parking interfaces, responsive layouts, interactive location experiences, and reusable UI components.",

    parkingDiscovery:
      "The application provides a structured parking discovery experience where users can search locations, explore available parking areas, review distance and pricing information, and select a destination.",

    mapExperience:
      "An interactive map-driven experience connects parking locations with their geographic context, allowing users to explore destinations and understand where parking facilities are located.",

    parkingLayout:
      "Detailed parking layouts allow users to explore floors and individual parking bays while visually distinguishing available, reserved, booked, selected, and other parking states.",

    reservation:
      "The reservation interface allows users to select a parking location, choose an available spot, select a parking duration, and review the estimated parking cost before proceeding.",

    responsiveDesign:
      "The application was carefully structured for desktop, tablet, and mobile layouts so location discovery, parking information, and reservation controls remain accessible across screen sizes.",

    architecture:
      "Reusable components and structured frontend state were used to keep the parking discovery, location selection, spot selection, and reservation interfaces organized and scalable.",

    backend:
      "The university project was primarily focused on the frontend experience and interactive UI architecture rather than a connected production backend or live parking infrastructure."
  },

  outcome:
    "The result is a polished digital parking experience that demonstrates how urban parking can be transformed into a simple, location-driven digital journey. SpotGo brings parking discovery, map exploration, availability visualization, exact spot selection, pricing, and reservation workflows together into one sophisticated frontend application.",

  technologies: [
    "Next.js",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion"
  ],

  services: [
    "Product Strategy",
    "UI/UX Design",
    "Frontend Development",
    "Interactive Map Experience",
    "Dashboard & Application UI",
    "Responsive Design",
    "Interaction Design"
  ],

  image:
    "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1600&auto=format&fit=crop",

  imageAlt:
    "SpotGo smart parking web application with interactive parking discovery and reservation interface",

  liveUrl:
    "https://spotgoparking.vercel.app/",

  nextProject: {
    slug: "unitpay",
    title: "UnitPay",
    number: "09",
    category: "Smart Energy / Web Application"
  }
},
"unitpay": {
  id: 9,
  number: "09",
  slug: "unitpay",
  title: "UnitPay",
  category: "Smart Energy / Web Application",
  industry: "Energy & Utilities",

  summary:
    "A sophisticated smart energy management platform combining electricity unit purchasing, live smart-meter monitoring, customer account management, and a dedicated administrative interface.",

  statement:
    "Turning electricity management into a digital experience where customers can purchase units, monitor live energy data, and manage their account through one centralized platform.",

  challenge:
    "Traditional electricity management can make it difficult for users to understand their remaining balance, monitor consumption, and manage their energy usage from one place. UnitPay was designed to create a modern digital alternative where customers could access their electricity account, purchase additional units, monitor smart-meter information, and understand their current energy status through a clear and interactive dashboard. The platform also required a separate administrative experience for managing the broader system.",

  approach: [
    {
      num: "01",
      title: "Strategy",
      desc:
        "Mapped the customer journey around account access, electricity balance, unit purchasing, meter monitoring, consumption visibility, and energy management."
    },
    {
      num: "02",
      title: "UX / Architecture",
      desc:
        "Structured the platform around separate customer and administrative experiences, keeping important energy information and actions accessible through dedicated dashboards."
    },
    {
      num: "03",
      title: "Design",
      desc:
        "Created a sophisticated smart-energy interface using strong visual hierarchy, live status indicators, data visualization, modern dashboard patterns, and a high-tech visual language."
    },
    {
      num: "04",
      title: "Engineering",
      desc:
        "Developed the customer-facing application with account authentication, energy dashboards, unit purchasing flows, smart-meter interfaces, and dedicated administrative functionality."
    },
    {
      num: "05",
      title: "Optimization",
      desc:
        "Focused on making complex energy information easy to understand through clear metrics, visual status indicators, responsive layouts, and structured dashboard components."
    }
  ],

  features: [
    "Customer electricity account portal",
    "Separate customer and admin login experiences",
    "Electricity unit purchasing workflow",
    "Instant unit recharge interface",
    "Current electricity balance display",
    "Live smart-meter dashboard",
    "Energy consumption monitoring",
    "Daily usage tracking",
    "Voltage monitoring",
    "Current load monitoring",
    "Smart-meter signal status",
    "Live meter connection status",
    "Energy usage visualization",
    "Electricity balance progress indicator",
    "Secure customer access interface",
    "Customer account management",
    "Dedicated administration panel",
    "Administrative management interface",
    "Responsive dashboard experience",
    "Modern smart-energy data visualization"
  ],

  designDirection:
    "The visual direction was intentionally designed to feel like a modern energy technology platform rather than a traditional utility portal. Dark foundations, high-visibility status indicators, live data presentation, structured metrics, and dashboard-focused layouts create a sophisticated control-center experience. The customer interface keeps complex energy information understandable while the administrative side prioritizes operational clarity and system management.",

  engineering: {
    overview:
      "UnitPay was engineered as a multi-interface smart energy platform connecting the customer experience with a dedicated administrative management environment.",

    frontend:
      "Built with a modern React/Next.js frontend architecture using reusable dashboard components, responsive layouts, interactive data displays, account interfaces, and energy monitoring views.",

    authentication:
      "The platform provides separate access paths for customers and administrators, allowing the two experiences to remain clearly separated within the product architecture.",

    customerPortal:
      "The customer portal provides access to electricity account information, current unit balance, energy usage, smart-meter data, and unit purchasing functionality.",

    smartMeter:
      "The smart-meter interface presents live-style energy information including current balance, usage, voltage, load, signal strength, and connection status in a centralized dashboard.",

    unitPurchasing:
      "A dedicated recharge experience allows customers to purchase additional electricity units and manage their available energy balance through the platform.",

    dashboard:
      "The dashboard architecture uses structured cards, metrics, status indicators, and visual data presentation to make energy information easy to understand at a glance.",

    adminPanel:
      "A separate administrative interface was developed for system-level management, providing administrators with a dedicated environment distinct from the customer portal.",

    responsiveDesign:
      "The platform was designed responsively so important energy metrics, account actions, and dashboard information remain accessible across desktop, tablet, and mobile devices.",

    architecture:
      "Reusable components and structured application state were used to keep customer dashboards, energy monitoring interfaces, purchasing flows, authentication screens, and administrative views organized and scalable."
  },

  outcome:
    "The result is a polished smart energy management experience that brings electricity unit purchasing, live meter monitoring, energy consumption visibility, customer accounts, and administrative management into one digital platform. UnitPay demonstrates how traditionally complex utility workflows can be presented through a modern, intuitive, and data-driven web application.",

  technologies: [
    "Next.js",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion"
  ],

  services: [
    "Product Strategy",
    "UI/UX Design",
    "Web Development",
    "Customer Portal",
    "Admin Dashboard",
    "Smart Meter Interface",
    "Energy Management System",
    "Responsive Design"
  ],

  image:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop",

  imageAlt:
    "UnitPay smart energy platform with electricity balance, live meter monitoring and energy dashboard",

  liveUrl:
    "https://my-unitpay.vercel.app/login",

  nextProject: {
    slug: "zs-digitizing",
    title: "ZS Digitizing",
    number: "01",
    category: "Embroidery Digitizing / Client Platform"
  }
},
};

// ==========================================
// REUSABLE CASE STUDY COMPONENTS
// ==========================================

function CaseStudyHero({ project }) {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-[#05070B] text-white overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/work" className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Work
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
            CASE STUDY &bull; {project.number}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full">
                {project.industry}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 group"
                >
                  View Live Project <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 transition-all"
              >
                Back to Work
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 aspect-[16/10] relative">
              <Image
                src={project.image}
                alt={`${project.title} Showcase`}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyOverview({ project }) {
  return (
    <section className="py-24 bg-white border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">PROJECT OVERVIEW</span>
            <p className="text-2xl sm:text-4xl font-light text-[#0A0A0A] leading-relaxed tracking-tight">
              "{project.statement}"
            </p>
          </div>
          <div className="lg:col-span-4 bg-[#F8F8F6] p-6 rounded-2xl border border-[#E5E2DC] space-y-4">
            <div>
              <span className="text-xs font-mono text-[#737373] uppercase block mb-1">Industry</span>
              <span className="text-sm font-semibold text-[#0A0A0A]">{project.industry}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-[#737373] uppercase block mb-1">Project Type</span>
              <span className="text-sm font-semibold text-[#0A0A0A]">{project.category}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-[#737373] uppercase block mb-1">Services</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.services.map((s, idx) => (
                  <span key={idx} className="text-xs bg-white border border-[#E5E2DC] px-2 py-0.5 rounded text-[#525252]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyChallenge({ challenge }) {
  return (
    <section className="py-24 bg-[#F5F3EF] border-b border-[#E5E2DC]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">01 / PROBLEM STATEMENT</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-8">
          The Challenge
        </h2>
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E5E2DC] shadow-sm">
          <p className="text-lg sm:text-xl text-[#525252] font-light leading-relaxed">
            {challenge}
          </p>
        </div>
      </div>
    </section>
  );
}

function CaseStudyApproach({ approach }) {
  return (
    <section className="py-24 bg-white border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">02 / METHODOLOGY</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approach.map((step, idx) => (
            <div key={idx} className="bg-[#F8F8F6] p-8 rounded-2xl border border-[#E5E2DC] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-blue-600 font-bold block mb-4">{step.num}</span>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{step.title}</h3>
                <p className="text-sm text-[#525252] font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyShowcase({ image, title }) {
  return (
    <section className="py-24 bg-[#05070B] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3">VISUAL PRESENTATION</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Product Interface & Experience
          </h2>
          <p className="text-slate-400 text-sm font-light">
            Designed for clarity, performance, and seamless user engagement.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 aspect-[16/10] relative">
          <Image
            src={image}
            alt={`${title} Interface`}
            fill
            className="object-cover object-center"
          />
        </div>
        <p className="text-center text-xs font-mono text-slate-500 uppercase tracking-widest mt-4">
          {title} &mdash; Main Platform Interface
        </p>
      </div>
    </section>
  );
}

function CaseStudyFeatures({ features }) {
  return (
    <section className="py-24 bg-[#F5F3EF] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">03 / CORE CAPABILITIES</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
            The Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-[#E5E2DC] shadow-sm flex items-start space-x-4">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-base text-[#0A0A0A] font-medium leading-relaxed">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyDesign({ designDirection }) {
  return (
    <section className="py-24 bg-white border-b border-[#E5E2DC]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">04 / ART DIRECTION</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-8">
          Designing the Experience
        </h2>
        <div className="bg-[#F8F8F6] p-8 sm:p-12 rounded-3xl border border-[#E5E2DC]">
          <p className="text-lg sm:text-xl text-[#525252] font-light leading-relaxed">
            {designDirection}
          </p>
        </div>
      </div>
    </section>
  );
}

function CaseStudyEngineering({ engineering, technologies }) {
  return (
    <section className="py-24 bg-[#0A0D12] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3">05 / ARCHITECTURE</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Engineering the Product
          </h2>
          <p className="text-slate-400 text-lg font-light">
            {engineering.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <Layout className="w-6 h-6 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Frontend</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{engineering.frontend}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <Server className="w-6 h-6 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Backend</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{engineering.backend}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <Database className="w-6 h-6 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">Database</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{engineering.database}</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <Code2 className="w-6 h-6 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">APIs & Routing</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{engineering.apis}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyResponsive() {
  return (
    <section className="py-24 bg-[#F5F3EF] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">06 / CROSS-PLATFORM</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-6">
          Built for Every Screen
        </h2>
        <p className="text-[#525252] text-lg font-light max-w-2xl mx-auto mb-16">
          The product interface scales flawlessly across desktop workstations, tablets, and mobile viewports without sacrificing functionality or editorial typography hierarchy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#E5E2DC] flex flex-col items-center">
            <Monitor className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">Desktop Workstations</h3>
            <p className="text-sm text-[#525252] font-light">Spacious layouts optimized for high-density data and immersive visual storytelling.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#E5E2DC] flex flex-col items-center">
            <Tablet className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">Tablet Viewports</h3>
            <p className="text-sm text-[#525252] font-light">Adaptive multi-column restructuring preserving fluid touch navigation.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-[#E5E2DC] flex flex-col items-center">
            <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">Mobile Devices</h3>
            <p className="text-sm text-[#525252] font-light">Clean single-column stacking ensuring effortless readability on the go.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyOutcome({ outcome }) {
  return (
    <section className="py-24 bg-white border-b border-[#E5E2DC]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">07 / FINAL RESULTS</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-8">
          The Outcome
        </h2>
        <div className="bg-[#F8F8F6] p-8 sm:p-12 rounded-3xl border border-[#E5E2DC]">
          <p className="text-lg sm:text-xl text-[#0A0A0A] font-medium leading-relaxed">
            {outcome}
          </p>
        </div>
      </div>
    </section>
  );
}

function CaseStudyStack({ technologies }) {
  return (
    <section className="py-20 bg-[#F5F3EF] border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-2">TECHNOLOGY STACK</span>
            <h3 className="text-2xl font-bold text-[#0A0A0A]">Core Technologies Deployed</h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech, idx) => (
            <div key={idx} className="bg-white px-6 py-4 rounded-xl border border-[#E5E2DC] shadow-sm flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-mono font-semibold text-[#0A0A0A]">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextCaseStudy({ nextProject }) {
  return (
    <section className="py-24 bg-white border-b border-[#E5E2DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-2">NEXT PROJECT</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A]">
              Explore another case study
            </h2>
          </div>
        </div>

        <Link
          href={`/work/${nextProject.slug}`}
          className="group block bg-[#F8F8F6] border border-[#E5E2DC] p-8 sm:p-12 rounded-3xl hover:border-blue-600/50 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-blue-600 font-bold block mb-2">
                PROJECT {nextProject.number} &bull; {nextProject.category}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] group-hover:text-blue-600 transition-colors">
                {nextProject.title}
              </h3>
            </div>
            <div className="flex items-center text-sm font-mono font-bold text-[#0A0A0A] group-hover:text-blue-600 transition-colors">
              View Case Study <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function CaseStudyCTA() {
  return (
    <section className="py-32 bg-[#05070B] text-white relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <span className="text-xs uppercase tracking-widest text-blue-400 font-mono block mb-4">START A CONVERSATION</span>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Have something worth building?
        </h2>
        <p className="text-slate-400 text-lg sm:text-xl font-light max-w-xl mx-auto leading-relaxed mb-10">
          Tell us what you're working on. We'll help turn the idea, workflow or challenge into a digital product built for real-world use.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-xl shadow-blue-600/25 group"
          >
            Start a Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 transition-all"
          >
            Back to Work →
          </Link>
        </div>

        <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          Websites &bull; Applications &bull; Commerce &bull; Business Systems &bull; AI
        </div>
      </div>
    </section>
  );
}

// ==========================================
// DYNAMIC CASE STUDY PAGE COMPONENT
// ==========================================
export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#0A0A0A] font-sans selection:bg-blue-600 selection:text-white">
      <CaseStudyHero project={project} />
      <CaseStudyOverview project={project} />
      <CaseStudyChallenge challenge={project.challenge} />
      <CaseStudyApproach approach={project.approach} />
      <CaseStudyShowcase image={project.image} title={project.title} />
      <CaseStudyFeatures features={project.features} />
      <CaseStudyDesign designDirection={project.designDirection} />
      <CaseStudyEngineering engineering={project.engineering} technologies={project.technologies} />
      <CaseStudyResponsive />
      <CaseStudyOutcome outcome={project.outcome} />
      <CaseStudyStack technologies={project.technologies} />
      <NextCaseStudy nextProject={project.nextProject} />
      <CaseStudyCTA />
    </div>
  );
}