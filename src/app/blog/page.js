// app/blog/page.js

import BlogListingClient from "./BlogListingClient";
import { BLOG_POSTS, CATEGORIES, DISCIPLINES } from "@/data/blog";

export const metadata = {
  title: "Web Development, SaaS, AI & Technology Insights | WebMash Labs",
  description:
    "Explore expert insights on custom web development, SaaS architecture, AI automation, eCommerce engineering, technical SEO, and digital growth from the engineering team at WebMash Labs.",
  alternates: {
    canonical: "https://www.webmashlabs.com/blog",
  },
  openGraph: {
    title: "Web Development, SaaS, AI & Technology Insights | WebMash Labs",
    description:
      "Practical perspectives on engineering, design, AI, commerce and digital systems from WebMash Labs.",
    url: "https://www.webmashlabs.com/blog",
    siteName: "WebMash Labs",
    images: [
      {
        url: "https://www.webmashlabs.com/og-blog.jpg",
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
    description:
      "Practical perspectives on engineering, design, AI, commerce and digital systems from WebMash Labs.",
    images: ["https://www.webmashlabs.com/og-blog.jpg"],
  },
};

export default function BlogPage() {
  /**
   * IMPORTANT PERFORMANCE OPTIMIZATION
   *
   * The full BLOG_POSTS objects contain:
   * - content
   * - FAQs
   * - keywords
   * - related articles
   * - SEO data
   * - etc.
   *
   * The blog listing page does NOT need that data.
   *
   * Only send the fields actually rendered by BlogListingClient.
   */
  const listingPosts = BLOG_POSTS.map(
    ({
      id,
      slug,
      title,
      excerpt,
      category,
      date,
      readTime,
      author,
      authorRole,
      coverImage,
      coverImageAlt,
      featured,
      editorPick,
    }) => ({
      id,
      slug,
      title,
      excerpt,
      category,
      date,
      readTime,
      author,
      authorRole,
      coverImage,
      coverImageAlt,
      featured,
      editorPick,
    })
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.webmashlabs.com/#organization",
        name: "WebMash Labs",
        url: "https://www.webmashlabs.com",
        logo: "https://www.webmashlabs.com/logo.png",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.webmashlabs.com/#website",
        url: "https://www.webmashlabs.com",
        name: "WebMash Labs",
        publisher: {
          "@id": "https://www.webmashlabs.com/#organization",
        },
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.webmashlabs.com/blog#webpage",
        url: "https://www.webmashlabs.com/blog",
        name: "Web Development, SaaS, AI & Technology Insights",
        description:
          "Expert insights on custom web development, SaaS architecture, AI automation, eCommerce engineering, and technical SEO.",
        isPartOf: {
          "@id": "https://www.webmashlabs.com/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.webmashlabs.com/blog#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.webmashlabs.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.webmashlabs.com/blog",
          },
        ],
      },
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

      <BlogListingClient
        posts={listingPosts}
        categories={CATEGORIES}
        disciplines={DISCIPLINES}
      />
    </>
  );
}