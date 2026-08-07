"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { 
  ArrowUpRight, 
  Compass, 
  Layers, 
  Code2, 
  Rocket, 
  Clock, 
  Sparkles 
} from "lucide-react";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1];

const roadmapSteps = [
  { step: "01", title: "Discovery Call", icon: Compass },
  { step: "02", title: "Strategy Workshop", icon: Sparkles },
  { step: "03", title: "UI / UX Design", icon: Layers },
  { step: "04", title: "Custom Development", icon: Code2 },
  { step: "05", title: "Launch & Growth", icon: Rocket },
];

export function CallToAction() {
  const cardRef = useRef(null);

  // Mouse tilt mechanics for the glass card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-white py-16 sm:py-24 overflow-hidden font-['Manrope',sans-serif]"
      aria-labelledby="cta-finale-heading"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        
        {/* LUXURY CONTAINED CINEMATIC BANNER */}
        <div className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] flex items-center">
          
          {/* BACKGROUND IMAGE WITH INFINITE SLOW ZOOM */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.08 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=2000&q=85"
                alt="Minimal luxury executive boardroom workspace"
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          {/* CINEMATIC DARK GRADIENT OVERLAY & NOISE / VIGNETTE */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#030614]/98 via-[#030614]/90 to-[#030614]/75 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] z-10 pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] z-10 pointer-events-none" />

          {/* CONTENT GRID */}
          <div className="relative z-20 w-full grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-14 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
            
            {/* LEFT SIDE: EDITORIAL CONTENT */}
            <div className="flex flex-col justify-center">
              
              <motion.div
                initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-mono text-[11px] tracking-[0.3em] text-blue-300 uppercase w-fit backdrop-blur-md"
              >
                <Sparkles className="h-3.5 w-3.5 text-blue-300 animate-pulse" strokeWidth={1.5} />
                The Final Step
              </motion.div>

              <motion.h2
                id="cta-finale-heading"
                initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease, delay: 0.15 }}
                className="mt-5 text-[2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold leading-[1.1] tracking-[-0.04em] text-white"
              >
                Build something your competitors <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-white">can&apos;t copy.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease, delay: 0.3 }}
                className="mt-4 max-w-[48ch] text-sm sm:text-base lg:text-lg leading-relaxed text-slate-300 font-normal tracking-[-0.01em]"
              >
                Elevate your enterprise with bespoke digital craftsmanship designed to command absolute trust and attract elite clients.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease, delay: 0.45 }}
                className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
              >
                {/* PRIMARY BUTTON */}
                <motion.a
                  href="#book-call"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease }}
                  className="group relative flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold tracking-[-0.01em] text-white shadow-[0_20px_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_25px_50px_rgba(37,99,235,0.6)] cursor-pointer"
                >
                  <span>Schedule a Discovery Call</span>
                  <div className="h-6 w-6 rounded-full bg-white/25 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-3.5 w-3.5 text-white" strokeWidth={2} />
                  </div>
                </motion.a>

                {/* SECONDARY LINK */}
                <motion.a
                  href="#work"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2, ease }}
                  className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white transition-colors hover:text-blue-300 py-3 px-2 cursor-pointer"
                >
                  <span>Explore Our Work</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </motion.a>
              </motion.div>

            </div>

            {/* RIGHT SIDE: FLOATING 3D ROADMAP GLASS PANEL */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease, delay: 0.3 }}
              className="relative rounded-[24px] sm:rounded-[28px] border border-white/15 bg-white/[0.06] p-5 sm:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-2xl overflow-hidden w-full"
            >
              {/* Subtle top accent light */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-4 sm:mb-5">
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.28em] text-blue-300 uppercase">
                  Project Roadmap
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  Phase-Gate Process
                </span>
              </div>

              {/* ROADMAP STEPS */}
              <div className="relative z-10 space-y-2.5">
                {roadmapSteps.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index} 
                      className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 sm:px-4 py-2.5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 transition-transform duration-300 group-hover:scale-110 shrink-0">
                          <IconComponent className="h-3.5 w-3.5" strokeWidth={1.75} />
                        </div>
                        <span className="font-mono text-xs text-slate-400 tracking-wider">
                          {item.step}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-[-0.01em]">
                          {item.title}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-blue-400/80 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline">
                        VERIFIED →
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM AVERAGE RESPONSE TIME */}
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 relative z-10">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-blue-300 shrink-0" strokeWidth={1.75} />
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-wider text-slate-300 uppercase">
                    Average response time
                  </span>
                </div>
                <span className="font-mono text-[11px] sm:text-xs font-bold text-white tracking-widest bg-blue-500/30 border border-blue-400/40 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)] shrink-0">
                  &lt; 24 Hours
                </span>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}