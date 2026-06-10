import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import NewsletterPopup from "@/components/NewsletterPopup"; 
// 1. Import it

export default function Home() {
  return (
    <main className="bg-black text-white">
      <NewsletterPopup /> {/* 2. Add it here */}
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <Testimonials />
    </main>
  );
}