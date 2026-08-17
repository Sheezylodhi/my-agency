import ServicesPageClient from "./services-client";

export const metadata = {
  title: "Web Development Services | WebMash Labs",
  description: "Explore WebMash Labs' custom web development, web applications, UI/UX design, mobile apps, AI automation, ERP/CRM, eCommerce, SEO and digital services.",
  alternates: {
    canonical: "https://webmashlabs.com/services"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "Web Development Services | WebMash Labs",
    description: "Explore WebMash Labs' custom web development, web applications, UI/UX design, mobile apps, AI automation, ERP/CRM, eCommerce, SEO and digital services.",
    url: "https://webmashlabs.com/services",
    siteName: "WebMash Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://webmashlabs.com/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "WebMash Labs Services Hub - Digital Solutions and Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | WebMash Labs",
    description: "Explore WebMash Labs' custom web development, web applications, UI/UX design, mobile apps, AI automation, ERP/CRM, eCommerce, SEO and digital services.",
    images: ["https://webmashlabs.com/og-services.jpg"],
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://webmashlabs.com/services#webpage",
        "url": "https://webmashlabs.com/services",
        "name": "Web Development Services | WebMash Labs",
        "description": "Explore WebMash Labs' custom web development, web applications, UI/UX design, mobile apps, AI automation, ERP/CRM, eCommerce, SEO and digital services.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://webmashlabs.com/#website",
          "url": "https://webmashlabs.com/",
          "name": "WebMash Labs"
        },
        "publisher": {
          "@id": "https://webmashlabs.com/#organization"
        },
        "breadcrumb": {
          "@id": "https://webmashlabs.com/services#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://webmashlabs.com/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://webmashlabs.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://webmashlabs.com/services"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/web-design-development#service",
        "name": "Web Design & Development",
        "serviceType": "Web Development Services",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "High-performance websites designed around your brand, audience and business objectives.",
        "url": "https://webmashlabs.com/services/web-design-development"
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/web-applications#service",
        "name": "Web Applications",
        "serviceType": "Custom Web Applications",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "Scalable web applications built to simplify workflows, connect teams and power digital products.",
        "url": "https://webmashlabs.com/services/web-applications"
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/ui-ux-design#service",
        "name": "UI/UX Design",
        "serviceType": "UI/UX Design Services",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "Research-driven interfaces and design systems that make complex digital products feel simple.",
        "url": "https://webmashlabs.com/services/ui-ux-design"
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/mobile-app-development#service",
        "name": "Mobile App Development",
        "serviceType": "Mobile App Development",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "Modern mobile experiences built for customers, teams and businesses across iOS and Android.",
        "url": "https://webmashlabs.com/services/mobile-app-development"
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/ai-automation#service",
        "name": "AI Solutions & Automation",
        "serviceType": "AI Automation Services",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "Intelligent automation and AI-powered systems that reduce repetitive work and unlock new operational efficiency.",
        "url": "https://webmashlabs.com/services/ai-automation"
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/erp-crm#service",
        "name": "ERP & CRM Solutions",
        "serviceType": "ERP and CRM Development",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "Custom business management platforms that connect sales, customers, inventory, purchasing, finance and operations.",
        "url": "https://webmashlabs.com/services/erp-crm"
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/ecommerce-development#service",
        "name": "eCommerce Development",
        "serviceType": "eCommerce Development",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "Conversion-focused commerce experiences built for modern product catalogs, payments and scalable online sales.",
        "url": "https://webmashlabs.com/services/ecommerce-development"
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/cloud-devops#service",
        "name": "Cloud & DevOps",
        "serviceType": "Cloud and DevOps Services",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "Reliable cloud infrastructure, deployment pipelines and environments engineered for performance and scale.",
        "url": "https://webmashlabs.com/services/cloud-devops"
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/seo#service",
        "name": "SEO & Digital Growth",
        "serviceType": "Technical SEO Services",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "Technical optimization and growth strategies designed to improve visibility, performance and organic acquisition.",
        "url": "https://webmashlabs.com/services/seo"
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/branding#service",
        "name": "Branding & Digital Identity",
        "serviceType": "Branding and Digital Identity",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "Distinctive visual identities that create consistency, credibility and recognition across every digital touchpoint.",
        "url": "https://webmashlabs.com/services/branding"
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/business-email-setup#service",
        "name": "Business Email & Domain Setup",
        "serviceType": "Business Email and Domain Setup",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "Professional domain and email infrastructure configured for credibility, security and reliable business communication.",
        "url": "https://webmashlabs.com/services/business-email-setup"
      },
      {
        "@type": "Service",
        "@id": "https://webmashlabs.com/services/website-maintenance#service",
        "name": "Website Maintenance & Support",
        "serviceType": "Website Maintenance and Support",
        "provider": { "@id": "https://webmashlabs.com/#organization" },
        "description": "Ongoing technical support, security updates, performance improvements and maintenance after launch.",
        "url": "https://webmashlabs.com/services/website-maintenance"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesPageClient />
    </>
  );
}