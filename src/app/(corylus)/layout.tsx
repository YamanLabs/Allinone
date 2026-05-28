import type { Metadata, Viewport } from "next";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/corylus/Navbar";
import MobileBottomNav from "@/components/corylus/MobileBottomNav";
import Footer from "@/components/corylus/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800", "900"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Corylus Cafe & Patisserie - Dijital Menü Tasarımı",
  description: "Köklü Bir Tutku, Modern Bir Füzyon. Giresun'un fındık bahçelerinden ilham alan yolculuğumuz, dünya lezzetleriyle buluşuyor.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${hanken.variable} h-full antialiased light`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className="corylus-theme min-h-full flex flex-col pt-16 pb-20 md:pb-0 bg-background text-on-background">
        <Navbar />
        <main className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
