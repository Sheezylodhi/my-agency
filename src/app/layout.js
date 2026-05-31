import "./globals.css";
import Layout from "@/components/Layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}