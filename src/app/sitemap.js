import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { BLOG_POSTS } from "@/data/blogs";

const BASE_URL = "https://webmashlabs.com";

export default function sitemap() {
  const now = new Date();

  // Core indexable pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Service detail slug pages
  const servicePages = Object.values(SERVICES)
    .filter((service) => service?.slug)
    .map((service) => ({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // Industry detail slug pages
  const industryPages = Object.values(INDUSTRIES)
    .filter((industry) => industry?.slug)
    .map((industry) => ({
      url: `${BASE_URL}/industries/${industry.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // Blog detail slug pages
  const blogPages = Object.values(BLOG_POSTS)
    .filter((post) => post?.slug)
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.dateModified
        ? new Date(post.dateModified)
        : post.datePublished
          ? new Date(post.datePublished)
          : now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...blogPages,
  ];
}