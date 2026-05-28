import type { Metadata } from "next";
import { Newsreader, Be_Vietnam_Pro } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/nebioglupide/Navbar";
import Footer from "@/components/nebioglupide/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEBİOĞLU Ali Haydar Usta KEBAB - LAHMACUN",
  description: "Gerçek odun ateşinde, ustalıkla hazırlanan dumanı tüten kebaplar ve odun fırınından çıtır lahmacunlar. Giresun Merkez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${newsreader.variable} ${beVietnam.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="nebioglupide-theme min-h-full flex flex-col bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
