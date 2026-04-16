"use client";

import Link from "next/link";

const posts = {
  "modern-website-trends-2026": {
    title: "Modern Website Trends in 2026",
    date: "April 2026",
    content: `
Web design is evolving rapidly...

- Minimal UI
- 3D interactions
- Smooth animations
- Fast performance
    `,
  },

  "seo-guide": {
    title: "SEO Guide for Beginners",
    date: "April 2026",
    content: `
SEO helps your website rank higher on Google...

- Keywords
- Speed
- Mobile friendly
    `,
  },
};

// ✅ IMPORTANT CHANGE HERE
export default async function BlogPost({ params }) {

  const { slug } = await params; // 🔥 FIX

  const post = posts[slug];

  if (!post) {
    return (
      <div className="py-40 text-center text-[#64748B]">
        Blog not found
      </div>
    );
  }

  return (
    <section className="py-28 px-6 bg-white text-[#0F172A]">

      <div className="max-w-3xl mx-auto">

        <Link href="/blog" className="text-[#1D4ED8] mb-6 inline-block">
          ← Back to Blog
        </Link>

        <h1 className="text-4xl font-bold mb-4">
          {post.title}
        </h1>

        <p className="text-[#64748B] mb-8 text-sm">
          {post.date}
        </p>

        <div className="space-y-6 text-[#475569] whitespace-pre-line">
          {post.content}
        </div>

      </div>

    </section>
  );
}