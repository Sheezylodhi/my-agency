"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    slug: "modern-website-trends-2026",
    title: "Modern Website Trends 2026",
    desc: "Explore the latest UI/UX patterns, motion design trends and conversion-focused layouts.",
    tag: "Design",
    image: "/blog/blog1.jpg",
    author: "Olivia Rhye",
    date: "20 Jan 2026",
    avatar: "/avatars/user1.jpg",
  },
  {
    slug: "seo-guide",
    title: "SEO Guide for Beginners",
    desc: "Step-by-step guide to ranking your website and building long-term organic traffic.",
    tag: "Marketing",
    image: "/blog/blog2.jpg",
    author: "Phoenix Baker",
    date: "18 Jan 2026",
    avatar: "/avatars/user2.jpg",
  },
  {
    slug: "performance-optimization",
    title: "Website Performance Optimization",
    desc: "How modern agencies build ultra-fast websites using Next.js and smart rendering.",
    tag: "Development",
    image: "/blog/blog3.jpg",
    author: "Lana Steiner",
    date: "15 Jan 2026",
    avatar: "/avatars/user3.jpg",
  },
];

export default function Blog() {
  return (
    <section className="bg-white text-[#0F172A]">

      {/* HERO */}
      <div className="relative py-28 px-6 text-center bg-gradient-to-b from-white via-blue-50/40 to-white">

        <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-200/30 blur-[130px] rounded-full" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          Insights & Articles
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg"
        >
          Explore design, development, SEO and digital strategy insights from our team.
        </motion.p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${b.slug}`}>

                <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">

                  {/* IMAGE */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />

                    {/* category badge */}
                    <span className="absolute top-3 left-3 text-xs bg-white/90 backdrop-blur px-3 py-1 rounded-full font-medium text-blue-600">
                      {b.tag}
                    </span>
                  </div>

                  

                  {/* CONTENT */}
                  <div className="p-5">

                    <h2 className="text-lg font-semibold group-hover:text-blue-600 transition">
                      {b.title}
                    </h2>
                    
                     <div className="absolute top-5 right-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition text-xl">
                    ↗
                  </div>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {b.desc}
                    </p>

                    {/* AUTHOR */}
                    <div className="flex items-center gap-3 mt-5">

                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={b.avatar}
                          alt={b.author}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="text-xs text-gray-500">
                        <p className="font-medium text-gray-700">{b.author}</p>
                        <p>{b.date}</p>
                      </div>

                    </div>

                  </div>

                </div>

              </Link>
            </motion.div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="py-24 text-center bg-gradient-to-b from-white to-blue-50">

        <h2 className="text-3xl font-bold mb-4">
          Want More Insights?
        </h2>

        <p className="text-gray-600 mb-8">
          We publish design, dev and SEO insights weekly.
        </p>

        <Link
          href="/contact"
          className="px-8 py-4 bg-[#1D4ED8] text-white rounded-xl hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>

      </div>

    </section>
  );
}