
"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, Bookmark, Send, PlusCircle, CheckCircle2, Loader2, Link2, Copy } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

// Full data object structure, exactly as provided
const posts = {
  "business-website-2026": {
    title: "Why Your Business Needs a Website in 2026",
    date: "22 Apr 2026",
    readTime: "8 min read",
    author: "WebMash Labs",
    authorImage: "/author.png",
    category: "Business",
    image: "/blog1.png",
    content: `In 2026, the digital marketplace is no longer a luxury; it is the fundamental infrastructure for any legitimate business. If you are not discoverable online, you are effectively invisible to the modern consumer.\n\n### Establishing Digital Authority\nA website is your business's 24/7 representative. It is the only platform where you control the narrative, the branding, and the customer journey, unlike social media where algorithms dictate your visibility.\n\n### SEO and Organic Reach\nA website allows you to rank for high-intent keywords. By providing value-driven content, you capture users actively searching for your solutions, creating a sustainable lead-generation engine that works while you sleep.\n\n### Building Immutable Trust\nModern buyers perform due diligence before purchasing. A professional, fast-loading, and secure website serves as a seal of approval, distinguishing your brand from competitors who rely solely on transient social media pages.`
  },
  "website-design-trends-2026": {
    title: "Top Website Design Trends in 2026 That Boost Conversions",
    date: "22 Apr 2026",
    readTime: "7 min read",
    author: "WebMash Labs",
    authorImage: "/author.png",
    category: "Design",
    image: "/blog2.png",
    content: `Design in 2026 is moving away from static visuals toward highly interactive, data-driven experiences that prioritize user psychology.\n\n### Micro-Interactions for Engagement\nSmall, purposeful animations—like button feedback or scroll-triggered effects—keep the user connected. This feedback loop builds confidence, which is vital for increasing conversion rates on landing pages.\n\n### AI-Powered Personalization\nStatic landing pages are dead. Modern sites now dynamically adjust layouts, hero text, and call-to-actions based on the user's referral source, location, and past behavior, creating a tailored experience for every visitor.\n\n### High-Performance Minimalism\nUsers value speed. The trend is shifting toward 'Brutalist-Performance'—clean, typography-heavy designs that load near-instantly, ensuring the message reaches the user before they decide to bounce.`
  },
  "nextjs-vs-wordpress-2026": {
    title: "Next.js vs WordPress: Which Is Better for Your Business?",
    date: "22 Apr 2026",
    readTime: "10 min read",
    author: "WebMash Labs",
    authorImage: "/author.png",
    category: "Development",
    image: "/blog3.png",
    content: `The debate between Next.js and WordPress is really a debate between 'Scalable Application' and 'Content Management'.\n\n### The Case for Next.js\nIf your goal is performance and growth, Next.js is the clear winner. By leveraging Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR), it provides a near-instant user experience and perfect SEO scores. It is the go-to stack for custom SaaS, marketplaces, and complex web apps.\n\n### The WordPress Utility\nWordPress remains a titan for content-heavy news sites, portfolios, and blogs. Its plugin ecosystem is unmatched for rapid deployment. However, it often suffers from 'plugin bloat' that slows down performance, which can penalize your rankings in 2026.\n\n### Strategic Decision\nChoose Next.js if you are building an asset that needs to scale, handle heavy logic, and provide a world-class UI. Stick to WordPress only if you require frequent, non-technical team updates to static content.`
  },
  "seo-strategies-2026": {
    title: "Mastering SEO: Strategies to Rank Higher in 2026",
    date: "25 Apr 2026",
    readTime: "9 min read",
    author: "WebMash Labs",
    authorImage: "/author.png",
    category: "SEO",
    image: "/blog4.png",
    content: `SEO in 2026 is no longer about keyword stuffing; it is about 'Topic Authority' and 'User Satisfaction'.\n\n### Semantic Relevance\nGoogle now uses advanced LLMs to understand the context of your content. Focus on 'Topical Maps'—cover every aspect of your niche thoroughly to prove to search engines that you are an authoritative source.\n\n### Optimizing for Core Web Vitals\nSpeed is the biggest ranking factor. Ensure your LCP (Largest Contentful Paint) is under 1.2s. Use modern image formats (AVIF/WebP) and optimize your critical CSS to stay ahead of competitors.\n\n### Intent-Based Content\nMove beyond vanity keywords. Target the 'Why' behind the search. Are users looking to learn, or looking to buy? Map your content to these stages of the funnel to maximize your ROI from organic traffic.`
  },
  "ai-in-web-development": {
    title: "How AI is Revolutionizing Web Development Workflow",
    date: "28 Apr 2026",
    readTime: "6 min read",
    author: "WebMash Labs",
    authorImage: "/author.png",
    category: "Technology",
    image: "/blog5.png",
    content: `AI is the force multiplier that every modern web developer needs. It is shifting the role of the developer from 'coder' to 'architect'.\n\n### Accelerated Prototyping\nWith AI, we can translate wireframes into functional, production-ready code in hours rather than days. This allows for rapid iteration and faster time-to-market for our clients.\n\n### Proactive Error Detection\nModern AI agents now audit code for security vulnerabilities and performance bottlenecks before you even deploy. This ensures high-availability and security in an era where cyber threats are becoming more sophisticated.\n\n### Intelligent UX Automation\nAI tools now analyze user heatmaps and session recordings to suggest layout changes that would improve conversion rates, turning data into actionable design decisions automatically.`
  },
  "speed-optimization-tips": {
    title: "Ultimate Guide to Speed Optimization for Modern Websites",
    date: "30 Apr 2026",
    readTime: "12 min read",
    author: "WebMash Labs",
    authorImage: "/author.png",
    category: "Development",
    image: "/blog5.png",
    content: `Speed is not just a metric; it is a conversion catalyst. A 100ms improvement in load time can result in a significant boost in revenue.\n\n### Critical CSS and Deferral\nStop rendering-blocking resources. Use 'Critical CSS' to style the above-the-fold content immediately and defer all non-essential scripts. This gives users an instant 'perceived' speed.\n\n### Edge Caching and CDNs\nDon't rely on a single server. Use edge computing to serve your static assets from a server closest to the user's physical location, reducing latency to near-zero.\n\n### Database and Query Efficiency\nMost slow sites are slow because of poorly optimized database calls. In 2026, we utilize edge databases and memoization techniques to ensure that even with thousands of concurrent users, the site remains snappy and responsive.`
  },
};

export default function BlogPostPremium({ params }) {
  // 1. Existing Framer Motion hooks
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // 2. Existing Slug handling
  const [slug, setSlug] = useState(null);

  React.useEffect(() => {
    if (params instanceof Promise) {
      params.then((p) => setSlug(p.slug));
    } else if (params && params.slug) {
      setSlug(params.slug);
    }
  }, [params]);

  const post = slug ? posts[slug] : null;

  // ==========================================
  // 3. New Interaction Handling States
  // ==========================================
  
  // --- Follow Handling ---
  const [isFollowing, setIsFollowing] = useState(false); // Local state for follow button

  // --- Bookmark Handling ---
  const [isBookmarked, setIsBookmarked] = useState(false); // Local state for bookmark button

  // --- Newsletter Handling ---
  const [newsletterEmail, setNewsletterEmail] = useState(""); // Input field state
  const [newsletterStatus, setNewsletterStatus] = useState("idle"); // idle, loading, success, error

  // --- Share Handling ---
  const [shareStatus, setShareStatus] = useState("idle"); // idle, copied, error, native

  // ==========================================
  // 4. Interaction Backend Mock Functions
  // ==========================================
  
  // Production Note: These functions would call `fetch('/api/...')`

  const handleFollowToggle = () => {
    if (!post) return;
    // Pretend to call API...
    console.log(`${isFollowing ? 'Unfollowing' : 'Following'} author: ${post.author}`);
    setIsFollowing(prev => !prev); // Toggle UI state
  };

  const handleBookmarkToggle = () => {
    if (!post) return;
    // Pretend to call API...
    console.log(`${isBookmarked ? 'Removing bookmark for' : 'Bookmarking'} post: ${post.title}`);
    setIsBookmarked(prev => !prev); // Toggle UI state
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterStatus("loading");

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (response.ok) {
        setNewsletterStatus("success");
        setNewsletterEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (err) {
      console.error(err);
      setNewsletterStatus("idle");
      alert("Something went wrong, please try again.");
    }
  };

  const handleShareInsight = async () => {
    if (!post) return;
    
    // Get the current URL
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    // Step 1: Check for native Web Share API (mobile/modern browsers)
    if (navigator.share) {
        try {
            await navigator.share({
                title: post.title,
                text: `Check out this digital insight from WebMash Labs: ${post.title}`,
                url: currentUrl,
            });
            console.log('Post shared successfully via native API');
            setShareStatus('native');
            setTimeout(() => setShareStatus('idle'), 3000);
            return; // Successfully shared natively, stop here
        } catch (error) {
            // Aborted or errored during native share
            if (error.name !== 'AbortError') {
              console.log('Error sharing via native API:', error);
              setShareStatus('error');
              setTimeout(() => setShareStatus('idle'), 3000);
              return;
            }
            // If the user aborted, we still proceed to the fallback below
            console.log('Native share aborted by user, proceeding to clipboard fallback.');
        }
    } 

    // Step 2: Fallback to Clipboard API
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setShareStatus("copied");
            console.log('Native share unavailable, URL copied to clipboard instead.');
            // Reset status after a few seconds
            setTimeout(() => setShareStatus("idle"), 3000);
        } catch (error) {
            setShareStatus("error");
            console.error('Native share unavailable, and failed to copy URL:', error);
            setTimeout(() => setShareStatus('idle'), 3000);
        }
    } else {
        // Step 3: Ultimate fallback if even clipboard is missing
        alert("Sharing/clipboard not supported in this browser. Please manually copy the URL.");
    }
  };

  if (!slug || !post) return <div className="h-screen flex items-center justify-center text-slate-500 font-medium">Loading premium insights...</div>;

  return (
    <section className="bg-[#FAF9F6] text-[#0F172A] pb-32 font-sans">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left" style={{ scaleX }} />

      {/* Header Section */}
      <div className="pt-24 pb-12 px-6 md:px-12 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/blog" className="group inline-flex items-center gap-2.5 text-slate-500 font-semibold text-sm mb-10 hover:text-blue-600 transition-colors">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO INSIGHTS
          </Link>

          {/* Title and Metadata */}
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-extrabold uppercase tracking-widest">{post.category}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mt-6 mb-10 leading-[1.1] font-serif text-slate-950">
            {post.title}
          </h1>

          {/* Author and Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-t border-slate-100 mt-12">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-100">
                <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <p className="text-base font-bold text-slate-950">{post.author}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mt-1">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                </div>
              </div>
              
              {/* 5. Handle Follow Click */}
              <button 
                onClick={handleFollowToggle}
                className={`ml-4 flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold shadow transition-all ${
                    isFollowing 
                        ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' // Following state
                        : 'bg-slate-900 text-white hover:bg-slate-800' // Idle state
                }`}>
                {isFollowing ? <CheckCircle2 size={16} /> : <PlusCircle size={16} />}
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
            
            <div className="flex items-center gap-3 relative">
                {/* 6. Handle Header Share Click */}
                <button 
                    onClick={handleShareInsight}
                    title={shareStatus === 'copied' ? 'Link Copied!' : 'Share insight'}
                    className="p-3.5 rounded-full bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-all text-slate-500 hover:text-blue-600 relative overflow-hidden group">
                    <Share2 size={20} className={`transition-transform ${shareStatus === 'copied' ? 'translate-y-10' : ''}`} />
                    <Copy size={20} className={`absolute text-emerald-600 transition-transform ${shareStatus === 'copied' ? 'translate-y-0' : '-translate-y-10'}`} />
                </button>
                
                {/* 7. Handle Header Bookmark Click */}
                <button 
                    onClick={handleBookmarkToggle}
                    className={`p-3.5 rounded-full border transition-all ${
                        isBookmarked 
                            ? 'bg-blue-50 border-blue-100 text-blue-600' // Bookmarked state
                            : 'bg-slate-50 border-slate-100 hover:bg-slate-100 text-slate-500 hover:text-blue-600' // Idle state
                    }`}>
                    <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 relative grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-16">
        
        {/* Prose Article */}
        <div className="max-w-4xl">
          <article className="prose prose-slate prose-lg lg:prose-xl max-w-none prose-headings:font-black prose-headings:font-serif prose-headings:tracking-tighter prose-headings:text-slate-950 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:font-normal prose-p:text-[1.15rem]">
            {post.content.split('\n').map((line, i) => (
              line.startsWith('###') ? <h3 key={i} className="mt-12 mb-6 text-2xl md:text-3xl tracking-tight">{line.replace('###', '')}</h3> : <p key={i}>{line}</p>
            ))}
          </article>
        </div>

        {/* Floating Sidebar (Premium Feel) */}
        <aside className="lg:w-72 relative lg:border-l lg:border-slate-100 lg:pl-10 h-max lg:sticky lg:top-10">
          <div className="space-y-12">
            
            {/* Main Featured Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>

            {/* In-Article Controls */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-4 relative">
              <p className="text-sm text-slate-500 font-semibold tracking-wide">ARTICLE TOOLS</p>
              
              {/* 8. Handle Sidebar Bookmark Click */}
              <button 
                onClick={handleBookmarkToggle}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all border ${
                    isBookmarked
                        ? 'bg-blue-50 border-blue-100' // Bookmarked state
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-100' // Idle state
                }`}>
                <span className={`font-bold ${isBookmarked ? 'text-blue-800' : 'text-slate-900'}`}>
                    {isBookmarked ? 'Bookmarked' : 'Bookmark this'}
                </span>
                <Bookmark size={18} className={isBookmarked ? 'text-blue-600' : 'text-slate-400'} fill={isBookmarked ? "currentColor" : "none"}/>
              </button>
              
              {/* 9. Handle Sidebar Share Click - UPDATED FOR LINK COPY FALLBACK */}
              <button 
                onClick={handleShareInsight}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all border group ${
                    shareStatus === 'copied' || shareStatus === 'native'
                        ? 'bg-emerald-50 border-emerald-100' // Copied/Native state
                        : shareStatus === 'error'
                            ? 'bg-rose-50 border-rose-100' // Error state
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-100' // Idle state
                }`}>
                <span className={`font-bold ${
                    shareStatus === 'copied' || shareStatus === 'native' ? 'text-emerald-800' : 
                    shareStatus === 'error' ? 'text-rose-800' : 'text-slate-900'
                }`}>
                    {shareStatus === 'copied' ? 'Link Copied!' : 
                     shareStatus === 'native' ? 'Post Shared!' :
                     shareStatus === 'error' ? 'Failed to share' : 'Share insight'}
                </span>
                <div className="relative h-5 w-5 overflow-hidden">
                    <Share2 size={18} className={`absolute text-blue-600 transition-transform ${
                      shareStatus === 'idle' ? 'translate-y-0' : 'translate-y-10'
                    }`}/>
                    <Link2 size={18} className={`absolute text-emerald-600 transition-transform ${
                      shareStatus === 'copied' || shareStatus === 'native' ? 'translate-y-0' : '-translate-y-10'
                    }`}/>
                </div>
              </button>
            </div>
            
          </div>
        </aside>

      </div>

      {/* Newsletter Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-32">
        <div className="p-10 md:p-14 rounded-[40px] bg-white border border-slate-100 shadow-xl grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 font-serif text-slate-950 tracking-tight">Level up your <br/>digital game</h3>
              <p className="text-slate-600 mb-8 font-medium text-lg leading-relaxed">Join 500+ businesses receiving exclusive development, SEO, and design insights every week.</p>
            </div>
          
          {/* 10. Handle Newsletter Form Submit */}
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4">
            {newsletterStatus === "success" ? (
                // Success message state
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 text-center flex flex-col items-center gap-4">
                    <CheckCircle2 size={40} className="text-blue-600" />
                    <p className="font-bold text-blue-900">You're Subscribed!</p>
                    <p className="text-sm text-blue-700">Check your inbox soon for pure value.</p>
                </div>
            ) : (
                // Idle or loading state form
                <>
                <input 
                    type="email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)} // Update state on input
                    placeholder="you@company.com" 
                    disabled={newsletterStatus === "loading"}
                    className="px-6 py-4 rounded-full text-slate-900 w-full border border-slate-200 outline-none focus:border-blue-300 transition-all bg-slate-50 disabled:opacity-70" 
                    required
                />
                <button 
                    type="submit"
                    disabled={newsletterStatus === "loading"} // Disable while processing
                    className="flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-900 rounded-full font-bold hover:bg-slate-800 transition-all shrink-0 text-white shadow disabled:bg-slate-600">
                  {newsletterStatus === "loading" ? (
                    <>Processing <Loader2 size={18} className="animate-spin" /></>
                  ) : (
                    <>Subscribe <Send size={18} /></>
                  )}
                </button>
                <p className="text-xs text-slate-400 text-center mt-2">Zero spam. Only pure value.</p>
                </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

