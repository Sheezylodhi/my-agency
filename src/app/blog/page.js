// app/blog/page.js

import BlogListingClient from "./BlogListingClient";
import { BLOG_POSTS, CATEGORIES, DISCIPLINES } from "@/data/blog";

export const metadata = {
  title: "Web Development, SaaS, AI & Technology Insights | WebMash Labs",
  description: "Explore expert insights on custom web development, SaaS architecture, AI automation, eCommerce engineering, technical SEO, and digital growth from the engineering team at WebMash Labs.",
  alternates: {
    canonical: "https://webmashlabs.com/blog",
  },
  openGraph: {
    title: "Web Development, SaaS, AI & Technology Insights | WebMash Labs",
    description: "Practical perspectives on engineering, design, AI, commerce and digital systems from WebMash Labs.",
    url: "https://webmashlabs.com/blog",
    siteName: "WebMash Labs",
    images: [
      {
        url: "https://webmashlabs.com/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "WebMash Labs Insights & Articles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development, SaaS, AI & Technology Insights | WebMash Labs",
    description: "Practical perspectives on engineering, design, AI, commerce and digital systems from WebMash Labs.",
    images: ["https://webmashlabs.com/og-blog.jpg"],
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://webmashlabs.com/#organization",
        "name": "WebMash Labs",
        "url": "https://webmashlabs.com",
        "logo": "https://webmashlabs.com/logo.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://webmashlabs.com/#website",
        "url": "https://webmashlabs.com",
        "name": "WebMash Labs",
        "publisher": {
          "@id": "https://webmashlabs.com/#organization"
        }
      },
      {
        "@type": "CollectionPage",
        "@id": "https://webmashlabs.com/blog#webpage",
        "url": "https://webmashlabs.com/blog",
        "name": "Web Development, SaaS, AI & Technology Insights",
        "description": "Expert insights on custom web development, SaaS architecture, AI automation, eCommerce engineering, and technical SEO.",
        "isPartOf": {
          "@id": "https://webmashlabs.com/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://webmashlabs.com/blog#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://webmashlabs.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://webmashlabs.com/blog"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogListingClient 
        posts={BLOG_POSTS} 
        categories={CATEGORIES} 
        disciplines={DISCIPLINES} 
      />
    </>
  );
}