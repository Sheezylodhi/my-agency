import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Technology } from "@/components/Technology";
import { Services } from "@/components/Services";
import { FeaturedWork } from "@/components/FeaturedWork";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FromIdeaToImpact } from "@/components/FromIdeaToImpact";
import Pricing from "@/components/Pricing";
import { FAQ } from "@/components/Faq";
import { CallToAction } from "@/components/CallToAction";
import { Testimonials } from "@/components/Testimonials";

export const metadata = {
  title: "WebMash Labs | Premium Web Development & Digital Agency",
  description: "WebMash Labs is a premium digital agency offering custom web development, web applications, e-commerce, business systems, AI automation, and growth solutions.",
  metadataBase: new URL("https://webmashlabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WebMash Labs | Premium Web Development & Digital Agency",
    description: "WebMash Labs is a premium digital agency offering custom web development, web applications, e-commerce, business systems, AI automation, and growth solutions.",
    url: "https://webmashlabs.com",
    siteName: "WebMash Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebMash Labs | Premium Web Development & Digital Agency",
    description: "WebMash Labs is a premium digital agency offering custom web development, web applications, e-commerce, business systems, AI automation, and growth solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://webmashlabs.com/#organization",
        "name": "WebMash Labs",
        "url": "https://webmashlabs.com",
        "description": "Premium digital product engineering and web development agency."
      },
      {
        "@type": "WebSite",
        "@id": "https://webmashlabs.com/#website",
        "url": "https://webmashlabs.com",
        "name": "WebMash Labs",
        "publisher": {
          "@id": "https://webmashlabs.com/#organization"
        }
      }
    ]
  };

  return (
    <main className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Technology />
      <Services />
      <FeaturedWork />
      <WhyChooseUs />
      <FromIdeaToImpact />
      <FAQ />
      <Testimonials />
      <CallToAction />
    </main>
  );
}