"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-surface/95 dark:bg-inverse-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant/30"
            : "bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-md border-b border-outline-variant/10"
        }`}
      >
        <div className="flex justify-between items-center h-20 px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          {/* Brand */}
          <Link
            className="font-display text-headline-lg text-primary dark:text-inverse-primary tracking-tight font-bold"
            href="/parkpidesalonu"
          >
            Park Pide Salonu
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center font-body text-title-md font-semibold">
            <Link
              className={`transition-colors duration-300 pb-1 ${
                pathname === "/parkpidesalonu"
                  ? "text-primary dark:text-inverse-primary border-b-2 border-primary"
                  : "text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary"
              }`}
              href="/parkpidesalonu"
            >
              Ana Sayfa
            </Link>
            <Link
              className="text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary transition-colors duration-300"
              href="#menu"
            >
              Menü
            </Link>
            <Link
              className="text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary transition-colors duration-300"
              href="#about"
            >
              Hakkımızda
            </Link>
            <Link
              className={`transition-colors duration-300 pb-1 ${
                pathname === "/parkpidesalonu/iletisim"
                  ? "text-primary dark:text-inverse-primary border-b-2 border-primary"
                  : "text-on-surface-variant dark:text-on-tertiary-container hover:text-secondary"
              }`}
              href="/parkpidesalonu/iletisim"
            >
              İletişim
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-body text-label-sm font-semibold uppercase tracking-wider hover:bg-surface-tint transition-all active:scale-95 shadow-[0_4px_20px_rgba(163,59,32,0.15)] cursor-pointer">
              Sipariş Ver
            </button>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary p-2 focus:outline-none cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menüyü Aç/Kapat"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface dark:bg-inverse-surface border-b border-outline-variant/30 py-4 px-margin-mobile flex flex-col gap-4 animate-scale-up">
            <Link
              className={`font-body text-title-md font-semibold ${
                pathname === "/parkpidesalonu" ? "text-primary" : "text-on-surface-variant"
              }`}
              href="/parkpidesalonu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              className="font-body text-title-md font-semibold text-on-surface-variant"
              href="#menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menü
            </Link>
            <Link
              className="font-body text-title-md font-semibold text-on-surface-variant"
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              className={`font-body text-title-md font-semibold ${
                pathname === "/parkpidesalonu/iletisim" ? "text-primary" : "text-on-surface-variant"
              }`}
              href="/parkpidesalonu/iletisim"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişim
            </Link>
            <button className="bg-primary text-on-primary py-3 rounded-xl font-body text-title-md font-semibold uppercase tracking-wider hover:bg-surface-tint transition-all active:scale-95 text-center mt-2 cursor-pointer">
              Sipariş Ver
            </button>
          </div>
        )}
      </header>
    </>
  );
}
