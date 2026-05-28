"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  id: string;
  num: string;
  name: string;
  subtitle: string;
  description: string;
  route: string;
  typography: string;
  colors: string;
  status: string;
}

export default function ShowcasePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projects: Project[] = [
    {
      id: "azikburger",
      num: "01",
      name: "Azik Burger",
      subtitle: "Giresun'un En Lezzetli Burgeri",
      description: "Ateşli ve enerjik tasarımıyla, odun ateşinde pişen gerçek el yapımı burger lezzetini ekranlara taşıyan modern sipariş ve dijital menü platformu.",
      route: "/azikburger",
      typography: "Bebas Neue, Inter",
      colors: "Fiery Orange & Mustard Yellow M3",
      status: "V.1 - AKTİF DEMO",
    },
    {
      id: "corylus",
      num: "02",
      name: "Corylus Cafe & Patisserie",
      subtitle: "Dünya Lezzetleri ve Yöresel Esintiler",
      description: "Fındık bahçelerinden ilham alan, Playfair Display ve Hanken Grotesk tipografileriyle bezenmiş lüks ve yüksek çözünürlüklü dijital menü tasarımı.",
      route: "/corylus",
      typography: "Playfair Display, Hanken Grotesk",
      colors: "Dark Hazelnut & Cozy Warm Sand",
      status: "V.2 - AKTİF DEMO",
    },
    {
      id: "manchegocoffee",
      num: "03",
      name: "Manchego Coffee",
      subtitle: "Nitelikli Kahve Deneyimi",
      description: "Montserrat tipografisi ve sıcak terracotta tonlarıyla taze kahve çekirdeklerinin ruhunu yaşatan estetik ve butik kahve dükkanı platformu.",
      route: "/manchegocoffee",
      typography: "Playfair Display, Montserrat",
      colors: "Terracotta, Espresso & Cream",
      status: "V.3 - AKTİF DEMO",
    },
    {
      id: "nebioglupide",
      num: "04",
      name: "Nebioğlu Pide & Kebap",
      subtitle: "Ali Haydar Usta Lezzetleri",
      description: "Gerçek odun ateşinde pişen çıtır lahmacunlar ve dumanı tüten kebaplar için tasarlanmış, eskitilmiş kağıt dokulu ve rustik detaylı dijital menü.",
      route: "/nebioglupide",
      typography: "Newsreader, Be Vietnam Pro",
      colors: "Rustic Crimson & Charcoal",
      status: "V.4 - AKTİF DEMO",
    },
    {
      id: "parkpidesalonu",
      num: "05",
      name: "Park Pide Salonu",
      subtitle: "Geleneksel Karadeniz Pidesi",
      description: "Giresun'un meşhur yöresel pide kültürünü, taş fırının samimiyeti ve sade, iştah açıcı renk tonlarıyla buluşturan minimalist menü arayüzü.",
      route: "/parkpidesalonu",
      typography: "Source Serif 4, Work Sans",
      colors: "Stone Oven Red & Cream",
      status: "V.5 - AKTİF DEMO",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-background antialiased font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-editorial">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 md:py-6 flex justify-between items-center">
          <a
            href="/"
            className="font-sans text-xl md:text-2xl font-black tracking-tighter text-primary uppercase select-none cursor-pointer"
          >
            Yaman LABS
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <a
                className="font-label-mono text-label-mono text-secondary opacity-70 hover:text-primary hover:opacity-100 transition-all duration-200 cursor-pointer"
                href="https://yamanlabs.agency/#proje-baslat"
                target="_blank"
                rel="noopener noreferrer"
              >
                FİYATLANDIRMA
              </a>
            </li>
            <li>
              <a
                className="font-label-mono text-label-mono text-secondary opacity-70 hover:text-primary hover:opacity-100 transition-all duration-200 cursor-pointer"
                href="https://yamanlabs.agency/#sss"
                target="_blank"
                rel="noopener noreferrer"
              >
                S.S.S.
              </a>
            </li>
            <li>
              <a
                className="font-label-mono text-label-mono text-secondary opacity-70 hover:text-primary hover:opacity-100 transition-all duration-200 cursor-pointer"
                href="https://yamanlabs.agency/#iletisim"
                target="_blank"
                rel="noopener noreferrer"
              >
                İLETİŞİM
              </a>
            </li>
            <li>
              <a
                className="font-label-mono text-label-mono text-secondary opacity-70 hover:text-primary hover:opacity-100 transition-all duration-200 cursor-pointer"
                href="https://yamanlabs.agency/hizmet-politikasi"
                target="_blank"
                rel="noopener noreferrer"
              >
                HİZMET POLİTİKASI
              </a>
            </li>
            <li>
              <a 
                className="btn-primary" 
                href="https://yamanlabs.agency/#iletisim"
                target="_blank"
                rel="noopener noreferrer"
              >
                PROJE BAŞLAT
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#111111] transition-transform duration-300 ${
                isMobileMenuOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#111111] transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[#111111] transition-transform duration-300 ${
                isMobileMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Mobile Navigation Drawer */}
          {isMobileMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-background z-40 flex flex-col justify-center items-center space-y-8 animate-fade-in">
              <ul className="flex flex-col items-center space-y-8">
                <li>
                  <a
                    className="font-label-mono text-lg text-secondary hover:text-primary transition-colors duration-200"
                    href="https://yamanlabs.agency/#proje-baslat"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FİYATLANDIRMA
                  </a>
                </li>
                <li>
                  <a
                    className="font-label-mono text-lg text-secondary hover:text-primary transition-colors duration-200"
                    href="https://yamanlabs.agency/#sss"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    S.S.S.
                  </a>
                </li>
                <li>
                  <a
                    className="font-label-mono text-lg text-secondary hover:text-primary transition-colors duration-200"
                    href="https://yamanlabs.agency/#iletisim"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    İLETİŞİM
                  </a>
                </li>
                <li>
                  <a
                    className="font-label-mono text-lg text-secondary hover:text-primary transition-colors duration-200"
                    href="https://yamanlabs.agency/hizmet-politikasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    HİZMET POLİTİKASI
                  </a>
                </li>
                <li>
                  <a
                    className="btn-primary mt-4"
                    href="https://yamanlabs.agency/#iletisim"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    PROJE BAŞLAT
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop pt-32 md:pt-40 pb-16 md:pb-20 flex-1">
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-editorial overflow-hidden">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-label-mono text-primary font-bold uppercase text-xs sm:text-sm border-l-2 border-primary pl-4 py-1 mb-8"
            >
              [ WORKSPACE VITRIN SHOWCASE ]
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-headline-lg-mobile md:font-headline-xl text-[#111111] mb-8 leading-tight"
            >
              Gelecek Nesil Dijital Menü &amp; Restoran Vitrini.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-body-lg text-secondary mb-12 max-w-2xl"
            >
              Giresun&apos;un önde gelen lezzet durakları için özel olarak tasarlanıp tek bir Next.js 16 / Tailwind v4 platformunda birleştirilen yüksek performanslı restoran, cafe ve pide salonu demoları.
            </motion.p>
          </div>
        </section>

        {/* Project List Section */}
        <section className="py-16 md:py-32 border-b border-editorial overflow-hidden">
          <div className="max-w-3xl mb-16">
            <h2 className="font-headline-lg text-[#111111] mb-6">
              Aktif Demolar
            </h2>
            <p className="font-body-lg text-secondary leading-relaxed">
              Her demo, işletmenin kimliğine göre özgün yazı tipleri, renk paletleri ve sayfa tasarımları barındırır. CSS değişken izolasyonuyla stiller asla birbirine karışmaz.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface-container-low p-6 sm:p-8 md:p-12 hover:bg-surface-container transition-colors duration-300 rounded-2xl border border-editorial/40 flex flex-col lg:flex-row justify-between lg:items-center gap-8"
              >
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-label-mono text-label-mono text-primary font-bold">
                      [ {project.num} ]
                    </span>
                    <span className="font-label-mono-sm text-label-mono-sm border border-editorial px-3 py-1 bg-background rounded-full font-medium">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-[#111111] font-semibold mb-2">
                    {project.name}
                  </h3>
                  <p className="font-label-mono-sm text-[12px] text-primary/80 uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>
                  <p className="font-body-md text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-secondary/80 border-t border-editorial/30 pt-4">
                    <div>
                      <span className="font-semibold text-primary">TİPOGRAFİ:</span> {project.typography}
                    </div>
                    <div className="hidden sm:block text-secondary/30">•</div>
                    <div>
                      <span className="font-semibold text-primary">RENK ŞEMASI:</span> {project.colors}
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
                  <Link href={project.route} className="btn-primary w-full text-center">
                    DEMOYU AÇ
                  </Link>
                  <Link href={`${project.route}/menu`} className="btn-secondary w-full text-center">
                    MENÜYÜ GÖR
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Value Props Section */}
        <section className="py-16 md:py-32 border-b border-editorial overflow-hidden">
          <div className="max-w-3xl mb-16">
            <h2 className="font-headline-lg text-[#111111] mb-6">
              Mühendislik Detayları
            </h2>
            <p className="font-body-lg text-secondary leading-relaxed">
              Yaman Labs tarafından geliştirilen tüm web sistemlerinde olduğu gibi, bu çoklu demo projesinde de yüksek kod kalitesi ve performans standartları uygulanmıştır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-editorial/60 pt-12">
            {/* Prop 1 */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-editorial flex flex-col items-start hover:bg-surface-container-low transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl mb-6 text-primary select-none">
                layers
              </span>
              <h3 className="font-headline-md text-[#111111] mb-4">
                CSS Değişken İzolasyonu
              </h3>
              <p className="font-body-md text-secondary leading-relaxed">
                Her sitenin M3 tasarım ve renk değişkenleri kendi sınıf kapsamında izole edilmiştir. Çakışma veya stil bozulması yaşanmaz.
              </p>
            </div>

            {/* Prop 2 */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-editorial flex flex-col items-start hover:bg-surface-container-low transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl mb-6 text-primary select-none">
                route
              </span>
              <h3 className="font-headline-md text-[#111111] mb-4">
                Modüler Rota Grupları
              </h3>
              <p className="font-body-md text-secondary leading-relaxed">
                Next.js Route Groups sayesinde her alt sitenin bağımsız font yükleyicisi, HTML yapısı ve SEO metadataları korunur.
              </p>
            </div>

            {/* Prop 3 */}
            <div className="p-8 flex flex-col items-start hover:bg-surface-container-low transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl mb-6 text-primary select-none">
                bolt
              </span>
              <h3 className="font-headline-md text-[#111111] mb-4">
                Milisanlik Yükleme Hızı
              </h3>
              <p className="font-body-md text-secondary leading-relaxed">
                Next.js static site generation (SSG) ve optimize edilmiş Tailwind v4 CSS derlemesiyle milisaniyeler süren sayfa geçişleri.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-gutter border-t border-editorial bg-background">
        <div className="font-label-mono text-label-mono text-primary select-none font-semibold">
          ©{currentYear} YAMAN LABS
        </div>
        <ul className="flex space-x-6 flex-wrap items-center">
          <li>
            <span className="font-label-mono-sm text-label-mono-sm text-secondary select-all">
              yaman@yamanlabs.agency
            </span>
          </li>
          <li className="text-secondary opacity-30 select-none">•</li>
          <li>
            <a
              className="font-label-mono-sm text-label-mono-sm text-secondary hover:text-primary underline decoration-1 underline-offset-4 transition-all duration-300"
              href="https://yamanlabs.agency/hizmet-politikasi"
              target="_blank"
              rel="noopener noreferrer"
            >
              HİZMET POLİTİKASI
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
