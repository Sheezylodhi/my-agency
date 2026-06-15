import "./globals.css";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white" suppressHydrationWarning={true}>
        <Layout>
          {children}
          <Chat />
        </Layout>
      </body>
    </html>
  );
}
