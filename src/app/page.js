import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import {Technology}  from "@/components/Technology"; // Braces zaroori hain!
import {Services} from "@/components/Services";
import {FeaturedWork} from "@/components/FeaturedWork";
import {WhyChooseUs} from "@/components/WhyChooseUs";
import {FromIdeaToImpact} from "@/components/FromIdeaToImpact";


import Pricing from "@/components/Pricing";
import {FAQ} from "@/components/Faq";
import {CallToAction} from "@/components/CallToAction";

import {Testimonials} from "@/components/Testimonials";
import NewsletterPopup from "@/components/NewsletterPopup"; 
// 1. Import it

export default function Home() {
  return (
    <main className="bg-black text-white">
      <NewsletterPopup /> {/* 2. Add it here */}
      <Hero />
      <Technology/>
      <Services />
      <FeaturedWork/>
      <WhyChooseUs />
      <FromIdeaToImpact/>
      <FAQ />
      <Testimonials />
      <CallToAction/>
    </main>
  );
}