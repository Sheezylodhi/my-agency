"use client";

import Link from "next/link";

const blogs = [
  {
    slug: "modern-website-trends-2026",
    title: "Modern Website Trends 2026",
    desc: "Latest UI/UX & design trends",
  },
  {
    slug: "seo-guide",
    title: "SEO Guide for Beginners",
    desc: "Grow traffic organically",
  },
];

export default function Blog() {
  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-10">
        Our <span className="text-[#1D4ED8]">Blog</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((b, i) => (
          <div
            key={i}
            className="p-6 border rounded-2xl hover:shadow-xl transition"
          >
            <h2 className="font-semibold text-lg">{b.title}</h2>
            <p className="text-[#64748B] text-sm mb-3">{b.desc}</p>

            <Link
              href={`/blog/${b.slug}`}
              className="text-[#1D4ED8] font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
}