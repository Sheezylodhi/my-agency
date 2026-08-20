import "./globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  metadataBase: new URL("https://webmashlabs.com"),

  title: {
    default: "WebMash Labs | Custom Software, Web & Digital Engineering",
    template: "%s | WebMash Labs",
  },

  description:
    "WebMash Labs engineers custom websites, web applications, SaaS platforms, AI automation, ERP/CRM systems, eCommerce solutions and cloud infrastructure for growing businesses.",

  applicationName: "WebMash Labs",

  authors: [
    {
      name: "WebMash Labs",
      url: "https://webmashlabs.com",
    },
  ],

  creator: "WebMash Labs",
  publisher: "WebMash Labs",

  alternates: {
    canonical: "https://webmashlabs.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webmashlabs.com/",
    siteName: "WebMash Labs",
    title: "WebMash Labs | Custom Software, Web & Digital Engineering",
    description:
      "Custom software, web development, SaaS, AI automation, ERP/CRM, eCommerce and cloud engineering for growing businesses.",
    images: [
      {
        url: "https://webmashlabs.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebMash Labs - Custom Software & Digital Engineering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WebMash Labs | Custom Software, Web & Digital Engineering",
    description:
      "Custom software, web development, SaaS, AI automation, ERP/CRM, eCommerce and cloud engineering.",
    images: ["https://webmashlabs.com/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Critical request latency remove karne ke liye preconnect aur dns-prefetch */}
        <link rel="preconnect" href="https://webmashlabs.vercel.app" />
        <link rel="dns-prefetch" href="https://webmashlabs.vercel.app" />

        {/* Render-blocking CSS fix */}
        <link 
          rel="preload" 
          href="/_next/static/css/chunks/11cxnwl4v8932.css" 
          as="style" 
          onLoad="this.onload=null;this.rel='stylesheet'" 
        />
        <noscript>
          <link rel="stylesheet" href="/_next/static/css/chunks/11cxnwl4v8932.css" />
        </noscript>
      </head>
      <body className="bg-white" suppressHydrationWarning={true}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}