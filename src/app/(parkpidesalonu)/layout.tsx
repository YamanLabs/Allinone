import type { Metadata } from "next";
import { Source_Serif_4, Work_Sans } from "next/font/google";
import "@/app/globals.css";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Park Pide Salonu - Giresun'un Geleneksel Lezzeti",
  description: "Usta ellerden, taş fırının sıcaklığıyla pişen, Karadeniz'in yöresel malzemeleriyle hazırlanan eşsiz pide deneyimi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${sourceSerif4.variable} ${workSans.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="parkpidesalonu-theme min-h-full flex flex-col bg-background text-on-background font-body">
        {children}
      </body>
    </html>
  );
}

