export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://webmashlabs.com/sitemap.xml",
    host: "https://webmashlabs.com",
  };
}