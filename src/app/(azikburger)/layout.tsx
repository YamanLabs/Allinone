/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/azikburger/Header";
import Footer from "@/components/azikburger/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AZIK BURGER - Giresun'un En Lezzetli Burgeri",
  description: "Odun ateşinde pişen leziz burgerler, taze malzemeler ve özel soslar. Giresun'un gerçek burger durağı.",
  keywords: "Azık Burger, Giresun burger, odun ateşinde burger, burger siparişi Giresun, çıtlakkale burger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="azikburger-theme min-h-full flex flex-col bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-on-primary">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
