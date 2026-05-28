import type { Metadata } from "next";
import "@/app/globals.css";
import Navigation from "@/components/manchegocoffee/Navigation";
import Footer from "@/components/manchegocoffee/Footer";

export const metadata: Metadata = {
  title: "Manchego Coffee | Giresun",
  description: "Giresun'un kalbinde, modern bir kahve deneyimi. Nitelikli kahve çekirdekleri, lezzetli tatlılar ve Karadeniz'in huzur veren atmosferi.",
  keywords: ["Manchego Coffee", "Giresun Kahve", "Giresun Cafe", "Giresun Manchego", "Nitelikli Kahve"],
  authors: [{ name: "Manchego Coffee" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="manchegocoffee-theme min-h-full flex flex-col bg-background text-on-surface antialiased selection:bg-terracotta selection:text-white">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
