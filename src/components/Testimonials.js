"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import Image from "next/image";

const ratingsPool = [4, 4.5, 5];
const getRandomRating = () =>
  ratingsPool[Math.floor(Math.random() * ratingsPool.length)];

const testimonials = [
  {
    name: "Robert J. Smith",
    role: "Ocean Shore Store Owner",
    feedback:
      "The quality is top-notch! My logos look crisp on every product. Highly recommended.",
    img: "/client1.webp",
    flagImg: "/usaflag.webp",
  },
  {
    name: "David Smith",
    role: "Apparel Brand Owner",
    feedback:
      "Working with the team was seamless. The results exceeded expectations.",
    img: "/client2.webp",
    flagImg: "/finlandflag1.svg",
  },
  {
    name: "Emma",
    role: "Textile CEO Texas",
    feedback:
      "Their innovative approach and support make them a trusted partner for any project.",
    img: "/client3.webp",
    flagImg: "/usaflag.webp",
  },
  {
    name: "Alex Miller",
    role: "Startup Owner",
    feedback:
      "Impressive quality and delivery speed. Highly professional experience.",
    img: "/client.webp",
    flagImg: "/ukflag.webp",
  },
  {
    name: "Jason Reed",
    role: "MotorSport Team Owner",
    feedback:
      "Best quality I’ve seen so far. My brand looks extremely professional now.",
    img: "/client5.webp",
    flagImg: "/canadaflag.webp",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    setRatings(testimonials.map(() => getRandomRating()));
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const rating = ratings[index] || 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section
      className="py-28 bg-white relative overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-16">
          What Our <span className="text-[#1D4ED8]">Clients Say</span>
        </h2>

        <div className="relative max-w-4xl mx-auto flex items-center">

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="hidden md:block p-3 text-[#0F172A] hover:text-[#1D4ED8] hover:scale-110 transition"
          >
            <ChevronLeft size={42} strokeWidth={2.5} />
          </button>

          {/* Slider */}
          <div className="relative w-full overflow-hidden">

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-[#E2E8F0]"
              >

                {/* Header */}
                <div className="flex justify-between items-start mb-8">

                  {/* Client */}
                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1D4ED8]">
                      <Image
                        src={testimonials[index].img}
                        alt={testimonials[index].name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>

                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-[#0F172A] text-xl">
                          {testimonials[index].name}
                        </h4>

                        <Image
                          src={testimonials[index].flagImg}
                          alt="flag"
                          width={22}
                          height={14}
                        />
                      </div>

                      <p className="text-[#64748B] text-sm uppercase tracking-wider">
                        {testimonials[index].role}
                      </p>
                    </div>

                  </div>

                  {/* Rating */}
                  <div className="flex flex-col items-end">

                    <div className="flex gap-1 text-[#1D4ED8]">
                      {[...Array(fullStars)].map((_, i) => (
                        <Star key={`f-${i}`} size={18} fill="currentColor" />
                      ))}

                      {hasHalfStar && (
                        <StarHalf size={18} fill="currentColor" />
                      )}

                      {[...Array(emptyStars)].map((_, i) => (
                        <Star key={`e-${i}`} size={18} />
                      ))}
                    </div>

                    <span className="text-xs text-[#64748B] mt-1">
                      {rating} / 5
                    </span>

                  </div>

                </div>

                {/* Feedback */}
                <p className="text-[#475569] text-lg md:text-xl italic leading-relaxed">
                  "{testimonials[index].feedback}"
                </p>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="hidden md:block p-3 text-[#0F172A] hover:text-[#1D4ED8] hover:scale-110 transition"
          >
            <ChevronRight size={42} strokeWidth={2.5} />
          </button>

        </div>
      </div>
    </section>
  );
}