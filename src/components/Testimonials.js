"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarCheck,
  Gauge,
  MapPin,
  Quote,
  Star,
  TrendingUp,
} from "lucide-react";

import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";

const ease = [0.16, 1, 0.3, 1];

const reveal = {
  initial: {
    opacity: 0,
    y: 35,
    filter: "blur(14px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  viewport: {
    once: true,
    margin: "-80px",
  },
};

const scaleReveal = {
  initial: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(10px)",
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  viewport: {
    once: true,
    margin: "-60px",
  },
};

const featured = {
  quote:
    "We had been losing enquiries for years without knowing why. WebMash Labs studied how our patients actually search and book, then rebuilt everything around that. The site loads instantly, the booking flow is effortless, and our front desk now spends its time on care instead of chasing forms.",
  name: "Dr. Amelia Hartley",
  role: "Founder & Clinical Director",
  company: "Northbridge Health Group",
  industry: "Healthcare",
  location: "Manchester, UK",
  result:
    "Patient enquiries grew from 60 to 141 per month within two quarters.",
  tags: [
    "Custom Website",
    "SEO",
    "Brand Identity",
    "Business Email",
    "Hosting",
  ],
};

const metrics = [
  {
    value: "+47%",
    label: "Qualified Leads",
    Icon: TrendingUp,
  },
  {
    value: "+63%",
    label: "Organic Traffic",
    Icon: TrendingUp,
  },
  {
    value: "99",
    label: "Performance Score",
    Icon: Gauge,
  },
  {
    value: "+3.2x",
    label: "Conversion Rate",
    Icon: TrendingUp,
  },
];

const stories = [
  {
    quote:
      "They understood construction before they understood websites. Every page speaks the language our clients use when they are choosing who to trust with a multi-million pound project.",
    name: "Daniel Whitmore",
    role: "Managing Director",
    company: "Whitmore Structures",
    industry: "Construction",
    location: "Birmingham, UK",
    photo: client2,
    meta: [
      "Verified Client",
      "Completed in 5 Weeks",
      "Ongoing Partnership",
    ],
    stat: {
      value: "2.4x",
      label: "Tender invitations",
    },
  },
  {
    quote:
      "Communication was the difference. Weekly clarity, no chasing, no surprises. Two years on they still treat our platform as if it were their own product.",
    name: "Julian Reyes",
    role: "Co-Founder",
    company: "Northwind Systems",
    industry: "Technology",
    location: "London, UK",
    photo: client3,
    meta: [
      "Verified Client",
      "Website Launch",
      "Scalable Architecture",
    ],
    stat: {
      value: "0.9s",
      label: "Median load time",
    },
  },
  {
    quote:
      "Our old store looked cheap next to the products we sell. The rebrand and rebuild changed how customers treat us, and the automated email flows now recover sales we used to lose quietly.",
    name: "Sofia Marchetti",
    role: "Head of Brand",
    company: "Aurelle Retail",
    industry: "Retail",
    location: "Milan, Italy",
    photo: client4,
    meta: [
      "Verified Client",
      "Completed Project",
      "AI Automation",
    ],
    stat: {
      value: "+38%",
      label: "Repeat purchases",
    },
  },
];

const industries = [
  "Healthcare",
  "Construction",
  "Technology",
  "Retail",
  "Legal",
  "Education",
  "Hospitality",
  "Real Estate",
];

function Stars() {
  return (
    <span
      className="flex items-center gap-1"
      aria-hidden="true"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-[#2563EB] text-[#2563EB]"
          strokeWidth={0}
        />
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-[#F8FAFC] py-24 sm:py-32 lg:py-44"
      aria-labelledby="testimonials-heading"
    >
      {/* Dynamic Ambient Background Glow */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 0.05,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.8,
          ease,
        }}
        className="pointer-events-none absolute left-1/2 top-[-5%] h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background: "#2563EB",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-16">
        {/* HEADING SECTION */}
        <motion.header
          {...reveal}
          transition={{
            duration: 1.1,
            ease,
          }}
          className="max-w-[900px]"
        >
          <motion.p
            initial={{
              opacity: 0,
              x: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease,
              delay: 0.1,
            }}
            className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#64748B]"
          >
            Client partnerships
          </motion.p>

          <h2
            id="testimonials-heading"
            className="text-balance-tight mt-7 text-[clamp(2.4rem,4.6vw,4.2rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[#0F172A]"
          >
            Trusted by businesses that expect more.
          </h2>

          <p className="mt-7 max-w-[62ch] text-lg leading-relaxed text-[#475569]">
            We work with companies where a website is not decoration — it is
            how the business is found, judged and chosen. These are the
            results and the relationships that followed.
          </p>
        </motion.header>

        {/* FEATURED TESTIMONIAL */}
        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <motion.article
            {...scaleReveal}
            transition={{
              duration: 1.1,
              ease,
              delay: 0.15,
            }}
            className="relative overflow-hidden rounded-[32px] border border-[#E2E8F0] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-2xl sm:p-12 lg:p-16"
          >
            {/* Subtle Card Glow */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2563EB]/[0.03] via-transparent to-transparent"
              aria-hidden="true"
            />

            <Quote
              className="relative z-10 h-9 w-9 text-[#2563EB]/20"
              strokeWidth={1.25}
              aria-hidden="true"
            />

            <blockquote className="relative z-10 mt-8">
              <p className="text-balance-tight text-[clamp(1.35rem,2.3vw,2.05rem)] font-medium leading-[1.35] tracking-[-0.025em] text-[#0F172A]">
                “{featured.quote}”
              </p>
            </blockquote>

            <div className="relative z-10 mt-10 flex items-center gap-3">
              <Stars />

              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#64748B]">
                Verified client
              </span>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap items-center gap-x-6 gap-y-5 border-t border-[#E2E8F0] pt-8">
              <motion.img
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.3,
                }}
                src={client2.src || client2}
                alt="Dr. Amelia Hartley, Founder and Clinical Director at Northbridge Health Group"
                loading="lazy"
                width={800}
                height={1008}
                className="h-16 w-16 shrink-0 rounded-full object-cover shadow-sm"
              />

              <div className="min-w-0">
                <p className="text-base font-semibold tracking-[-0.01em] text-[#0F172A]">
                  {featured.name}
                </p>

                <p className="text-sm text-[#64748B]">
                  {featured.role} · {featured.company}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:ml-auto">
                <span className="inline-flex items-center gap-2 text-sm text-[#64748B]">
                  <BadgeCheck
                    className="h-4 w-4 text-[#2563EB]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  {featured.industry}
                </span>

                <span className="inline-flex items-center gap-2 text-sm text-[#64748B]">
                  <MapPin
                    className="h-4 w-4 text-[#2563EB]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  {featured.location}
                </span>
              </div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="relative z-10 mt-8 flex items-start gap-3 rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] px-5 py-4"
            >
              <TrendingUp
                className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]"
                strokeWidth={1.6}
                aria-hidden="true"
              />

              <p className="text-sm leading-relaxed text-[#0F172A]">
                {featured.result}
              </p>
            </motion.div>

            <ul className="relative z-10 mt-7 flex flex-wrap gap-2">
              {featured.tags.map((tag, idx) => (
                <motion.li
                  key={tag}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + idx * 0.04,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#475569] transition-all duration-300 hover:border-[#2563EB] hover:bg-white hover:text-[#2563EB]"
                >
                  {tag}
                </motion.li>
              ))}
            </ul>
          </motion.article>

          {/* METRICS STACK */}
          <div
            className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-1 lg:content-center"
            aria-label="Key metrics"
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{
                  opacity: 0,
                  x: 25,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.9,
                  ease,
                  delay: 0.2 + i * 0.1,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="group rounded-3xl border border-[#E2E8F0] bg-white px-6 py-7 shadow-lg transition-all duration-500 hover:border-[#2563EB]/30 hover:shadow-xl"
              >
                <metric.Icon
                  className="h-4 w-4 text-[#2563EB] transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <p className="mt-5 text-[clamp(2rem,3vw,2.8rem)] font-bold leading-none tracking-[-0.045em] text-[#0F172A]">
                  {metric.value}
                </p>

                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* STORIES LIST */}
        <div className="mt-24 space-y-20 lg:mt-36 lg:space-y-32">
          {stories.map((story, i) => {
            const flip = i % 2 === 1;

            return (
              <motion.article
                key={story.name}
                initial={{
                  opacity: 0,
                  y: 50,
                  filter: "blur(12px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 1.1,
                  ease,
                }}
                className={`grid items-center gap-10 border-t border-[#E2E8F0] pt-12 lg:gap-16 lg:pt-16 ${
                  flip
                    ? "lg:grid-cols-[1fr_0.55fr]"
                    : "lg:grid-cols-[0.5fr_1fr] lg:pl-0"
                }`}
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.6,
                      ease,
                    }}
                    className={`relative overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-lg ${
                      flip
                        ? "aspect-[4/5] max-w-[340px]"
                        : "aspect-square max-w-[300px]"
                    } ${flip ? "lg:ml-auto" : ""}`}
                  >
                    <img
                      src={story.photo.src || story.photo}
                      alt={`${story.name}, ${story.role} at ${story.company}`}
                      loading="lazy"
                      width={800}
                      height={1008}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                    }}
                    className="mt-6 flex items-center gap-4"
                  >
                    <span className="text-[clamp(1.8rem,2.4vw,2.4rem)] font-bold leading-none tracking-[-0.045em] text-[#2563EB]">
                      {story.stat.value}
                    </span>

                    <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-[#64748B]">
                      {story.stat.label}
                    </span>
                  </motion.div>
                </div>

                <div className={flip ? "lg:order-1" : ""}>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#64748B]">
                    0{i + 2} · {story.industry}
                  </span>

                  <blockquote className="mt-6">
                    <p className="text-balance-tight text-[clamp(1.3rem,2.1vw,1.9rem)] font-medium leading-[1.4] tracking-[-0.025em] text-[#0F172A]">
                      “{story.quote}”
                    </p>
                  </blockquote>

                  <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <Stars />

                    <div className="text-sm text-[#64748B]">
                      <span className="font-semibold text-[#0F172A]">
                        {story.name}
                      </span>{" "}
                      — {story.role}, {story.company}
                    </div>
                  </div>

                  <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                    {story.meta.map((meta) => (
                      <li
                        key={meta}
                        className="inline-flex items-center gap-2 text-xs text-[#64748B]"
                      >
                        <CalendarCheck
                          className="h-3.5 w-3.5 text-[#2563EB]"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />

                        {meta}
                      </li>
                    ))}

                    <li className="inline-flex items-center gap-2 text-xs text-[#64748B]">
                      <MapPin
                        className="h-3.5 w-3.5 text-[#2563EB]"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />

                      {story.location}
                    </li>
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* TRUST STRIP */}
        <motion.div
          {...reveal}
          transition={{
            duration: 1.05,
            ease,
          }}
          className="mt-24 border-t border-[#E2E8F0] pt-14 lg:mt-36"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#64748B]">
            Trusted across industries
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry, i) => (
              <motion.li
                key={industry}
                initial={{
                  opacity: 0,
                  y: 15,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  margin: "-40px",
                }}
                transition={{
                  duration: 0.7,
                  ease,
                  delay: i * 0.04,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                className="cursor-default rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm text-[#475569] transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-sm"
              >
                {industry}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}