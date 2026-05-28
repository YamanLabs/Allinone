import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yaman LABS Showcase | Dijital Menü & Restoran Demoları",
  description: "Yaman Labs tarafından geliştirilen yüksek performanslı, modern ve estetik dijital menü / restoran web sitesi demoları vitrini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="yamanlabs-portal-theme min-h-full flex flex-col selection:bg-[#111111] selection:text-white">
        {children}
      </body>
    </html>
  );
}
