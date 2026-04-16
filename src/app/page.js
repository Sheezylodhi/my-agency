import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <FAQ />
      <Testimonials />

    </main>
  );
}