"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Search, 
  Sparkles,
  Layout,
  Code2,
  Palette,
  TrendingUp,
  Server,
  Mail,
  Wrench,
  Cpu,
  UtensilsCrossed,
  HeartPulse,
  Home,
  Scale,
  HardHat,
  GraduationCap,
  ShoppingBag,
  LineChart,
  Plane,
  Rocket
} from "lucide-react";

const servicesData = [
  { label: "Website Design", href: "/services/web-design-development", description: "Custom UI/UX engineered for maximum conversion.", icon: Layout },
  { label: "Website Development", href: "/services/web-applications", description: "Lightning-fast, scalable modern web architectures.", icon: Code2 },
  { label: "UI/UX Design", href: "/services/ui-ux-design", description: "User-centric digital product design systems.", icon: Palette },
  { label: "SEO & Growth", href: "/services/seo", description: "Data-driven organic growth and technical optimization.", icon: TrendingUp },
  { label: "Branding", href: "/services/branding", description: "Cohesive visual identity and enterprise branding.", icon: Sparkles },
  { label: "Hosting Setup", href: "/services/hosting-setup", description: "Secure, high-availability cloud infrastructure.", icon: Server },
  { label: "Business Email Setup", href: "/services/business-email-setup", description: "Professional domain-authenticated communication suites.", icon: Mail },
  { label: "Website Maintenance", href: "/services/website-maintenance", description: "Proactive security audits, updates, and optimization.", icon: Wrench },
  { label: "AI Automation", href: "/services/ai-automation", description: "Intelligent workflows tailored for enterprise scaling.", icon: Cpu },
];

const industriesData = [
  { label: "Restaurants", href: "/industries/restaurants-food", description: "Increase reservations & order flow", icon: UtensilsCrossed },
  { label: "Healthcare", href: "/industries/healthcare", description: "Secure patient-focused platforms", icon: HeartPulse },
  { label: "Real Estate", href: "/industries/real-estate", description: "Immersive property showcases", icon: Home },
  { label: "Legal Services", href: "/industries/legal-services", description: "Build elite authority & trust", icon: Scale },
  { label: "Construction", href: "/industries/construction-architecture", description: "Generate qualified enterprise leads", icon: HardHat },
  { label: "Education", href: "/industries/education-elearning", description: "Engaging digital learning portals", icon: GraduationCap },
  { label: "E-commerce", href: "/industries/ecommerce-retail", description: "High-converting storefronts", icon: ShoppingBag },
  { label: "Finance", href: "/industries/finance-fintech", description: "Secure, compliant web apps", icon: LineChart },
  { label: "Travel & Hospitality", href: "/industries/hospitality-travel", description: "Breathtaking booking experiences", icon: Plane },
  { label: "Startups", href: "/industries/startups", description: "Scale fast with MVP velocity", icon: Rocket },
];

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Process", href: "/#process" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open || searchOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, searchOpen]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  const handleMouseMove = (e) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <style jsx global>{`
        /* Custom Blue Scrollbar for Dropdown */
        .custom-blue-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-blue-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
        }
        .custom-blue-scroll::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.4);
          border-radius: 8px;
        }
        .custom-blue-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>

      <nav
        ref={navRef}
        onMouseMove={handleMouseMove}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#0B0F19]/85 backdrop-blur-[24px] border-b border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Ambient Mouse Light Follower */}
        <div 
          className="absolute pointer-events-none w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-[60px] transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            opacity: scrolled ? 0.6 : 0.3,
          }}
        />

        {/* Desktop Container */}
        <div className="max-w-[1400px] mx-auto px-[40px] hidden lg:flex justify-between items-center h-[72px] relative z-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center focus:outline-none group">
            <Image
              src="/WMLogo.png"
              alt="WebMash Labs Logo"
              width={200}
              height={100}
              className="h-[100px] w-auto object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Navigation Center */}
          <div className="flex items-center gap-1 font-['Manrope',sans-serif] relative">
            
            {/* Services Mega Panel Dropdown */}
            <div
              className="relative px-3 py-2"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`group relative flex items-center gap-1.5 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 py-1 ${
                  activeDropdown === "services" || pathname.startsWith("/services") ? "text-white" : "text-[rgba(248,250,252,0.75)] hover:text-white"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180 text-blue-400" : "text-white/40 group-hover:text-white"}`} />
                
                {(pathname.startsWith("/services") || activeDropdown === "services") && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/[0.06] rounded-full -z-10 border border-white/[0.08]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 8, scale: 0.98, filter: "blur(4px)" }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-4 bg-[#0B0F19]/95 backdrop-blur-[32px] border border-white/[0.12] rounded-[28px] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.8)] z-[999] w-[920px] grid grid-cols-12 gap-8"
                  >
                    {/* LEFT COLUMN */}
                    <div className="col-span-5 flex flex-col justify-between pr-6 border-r border-white/[0.08]">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4">
                          <Sparkles className="w-3 h-3" /> Enterprise Solutions
                        </div>
                        <h3 className="text-[26px] font-semibold text-white tracking-[-0.03em] leading-[1.15] mb-3">
                          Architected for market dominance.
                        </h3>
                        <p className="text-[14px] text-white/60 leading-relaxed font-normal">
                          Every solution is engineered around your business goals, extreme scalability, and uncompromising visual distinction.
                        </p>
                      </div>

                      <div className="pt-6">
                        <Link
                          href="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="group/btn inline-flex items-center gap-3 text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] px-5 py-3 rounded-full transition-all duration-300"
                        >
                          <span>View All Services</span>
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 text-blue-400" />
                        </Link>
                      </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-span-7 grid grid-cols-2 gap-2.5 max-h-[420px] overflow-y-auto pr-2 custom-blue-scroll">
                      {servicesData.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group/card relative p-3.5 rounded-[16px] bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all duration-200 flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover/card:scale-110 transition-transform duration-200">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover/card:text-blue-400 group-hover/card:translate-x-0.5 transition-all duration-200" />
                              </div>
                              <div className="text-[14px] font-semibold text-white group-hover/card:text-blue-400 transition-colors duration-200 mb-0.5">
                                {item.label}
                              </div>
                              <p className="text-[12px] text-white/50 leading-snug line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown Grid */}
            <div
              className="relative px-3 py-2"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`group relative flex items-center gap-1.5 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 py-1 ${
                  activeDropdown === "industries" || pathname.startsWith("/industries") ? "text-white" : "text-[rgba(248,250,252,0.75)] hover:text-white"
                }`}
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "industries" ? "rotate-180 text-blue-400" : "text-white/40 group-hover:text-white"}`} />
                
                {(pathname.startsWith("/industries") || activeDropdown === "industries") && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/[0.06] rounded-full -z-10 border border-white/[0.08]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.98, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 8, scale: 0.98, filter: "blur(4px)" }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-4 bg-[#0B0F19]/95 backdrop-blur-[32px] border border-white/[0.12] rounded-[28px] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.8)] z-[999] w-[640px]"
                  >
                    <div className="grid grid-cols-2 gap-2.5 max-h-[400px] overflow-y-auto pr-1 custom-blue-scroll">
                      {industriesData.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group/ind p-3 rounded-[14px] bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all duration-200 flex items-center gap-3.5"
                          >
                            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover/ind:scale-110 transition-transform duration-200 shrink-0">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="overflow-hidden">
                              <div className="text-[14px] font-semibold text-white group-hover/ind:text-blue-400 transition-colors duration-200 truncate">
                                {item.label}
                              </div>
                              <div className="text-[11px] text-white/50 truncate">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between px-2">
                      <span className="text-xs text-white/40">Custom solutions built for all sectors.</span>
                      <Link
                        href="/industries"
                        onClick={() => setActiveDropdown(null)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span>Explore All</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Standard Nav Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[rgba(248,250,252,0.75)] hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/[0.06] rounded-full border border-white/[0.08]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-4 font-['Manrope',sans-serif]">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="w-10 h-10 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
            >
              <Search className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-medium text-white/70 tracking-tight">Available for new projects</span>
              </div>

              <Link
                href="/qoute"
                className="group relative inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-full h-[44px] px-[24px] text-[14px] font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.35)] overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Header */}
        <div className="max-w-[1400px] mx-auto px-[34px] py-[10px] lg:hidden flex justify-between items-center h-[68px] relative z-20">
          <Link href="/" className="flex items-center focus:outline-none">
            <Image
              src="/WMLogo_Mobile.png"
              alt="WebMash Labs Logo"
              width={180}
              height={90}
              className="h-[90px] w-auto object-contain object-left"
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Spotlight Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-[640px] bg-[#0B0F19] border border-white/[0.12] rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden z-10 font-['Manrope',sans-serif]"
            >
              <div className="flex items-center px-6 py-4 border-b border-white/[0.08]">
                <Search className="w-5 h-5 text-blue-400 mr-3 shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, industries, or insights..."
                  className="w-full bg-transparent text-white placeholder:text-white/40 text-[16px] focus:outline-none"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/[0.06] text-white/60 hover:text-white ml-2"
                >
                  ESC
                </button>
              </div>

              <div className="p-4 max-h-[360px] overflow-y-auto custom-blue-scroll">
                <div className="text-[11px] font-semibold text-white/40 tracking-wider uppercase px-3 py-2">
                  Quick Navigation
                </div>
                {[...servicesData.slice(0, 4), ...industriesData.slice(0, 3)].filter(item => 
                  item.label.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-[12px] hover:bg-white/[0.05] transition-colors group"
                  >
                    <span className="text-[14px] text-white/80 group-hover:text-blue-400 font-medium transition-colors">
                      {item.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-blue-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[150] lg:hidden bg-black/80 backdrop-blur-2xl flex flex-col justify-end"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full bg-[#0B0F19] border-t border-white/[0.1] rounded-t-[32px] max-h-[85vh] overflow-y-auto px-6 pt-6 pb-10 flex flex-col font-['Manrope',sans-serif] custom-blue-scroll relative"
            >
              {/* Drag Handle & Close Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto absolute left-1/2 -translate-x-1/2" />
                <span className="text-sm font-semibold text-white/50 tracking-wider uppercase">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white hover:bg-white/[0.12] transition-colors ml-auto z-10"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <div className="border-b border-white/[0.06] pb-3">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-[20px] font-semibold text-white py-2"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-blue-400" : "text-white/40"}`} />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 gap-2 pl-2 pt-3 overflow-hidden"
                      >
                        {servicesData.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] flex items-center justify-between text-white/80"
                          >
                            <span className="text-[15px] font-medium">{item.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-b border-white/[0.06] pb-3">
                  <button
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    className="flex items-center justify-between w-full text-[20px] font-semibold text-white py-2"
                  >
                    <span>Industries</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileIndustriesOpen ? "rotate-180 text-blue-400" : "text-white/40"}`} />
                  </button>
                  <AnimatePresence>
                    {mobileIndustriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 gap-2 pl-2 pt-3 overflow-hidden"
                      >
                        {industriesData.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] flex items-center justify-between text-white/80"
                          >
                            <span className="text-[15px] font-medium">{item.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-white/[0.06] py-3">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-[20px] font-semibold block text-white/90 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}

                <div className="mt-6 pt-4">
                  <Link
                    href="/qoute"
                    onClick={() => setOpen(false)}
                    className="group relative w-full bg-blue-600 text-white h-[56px] rounded-2xl font-semibold flex items-center justify-between px-6 shadow-xl overflow-hidden"
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-[15px]">Book Strategy Call</span>
                      <span className="text-[11px] text-white/70 font-normal">Average response &lt;24h</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}