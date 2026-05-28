"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Ana Sayfa", href: "/corylus" },
    { name: "Menü", href: "/corylus/menu" },
    { name: "Hikayemiz", href: "/corylus/hikayemiz" },
    { name: "İletişim", href: "/corylus/iletisim" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface-dim/90 bg-surface-container-lowest/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-16">
          {/* Mobile Menu Toggle (Left) */}
          <button
            aria-label="Menüyü aç"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary p-2 -ml-2 hover:text-secondary active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>

          {/* Brand Logo */}
          <Link
            href="/corylus"
            className="font-serif text-2xl md:text-3xl text-primary tracking-tight absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 font-bold"
          >
            Corylus
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-sans text-sm font-semibold uppercase tracking-wider">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-300 pb-1 border-b-2 hover:text-secondary-fixed ${
                    isActive
                      ? "text-secondary font-bold border-secondary-container"
                      : "text-on-surface-variant border-transparent hover:border-outline-variant"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Actions (Right) */}
          <div className="flex items-center space-x-4">
            <Link
              href="/corylus/menu"
              className="hidden md:inline-flex bg-primary text-on-primary px-6 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-primary-container transition-colors items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              Hemen Sipariş Ver
            </Link>
            <Link
              href="/corylus/menu"
              aria-label="Sipariş Ver"
              className="md:hidden text-primary p-2 -mr-2 hover:text-secondary active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 bg-surface z-50 shadow-2xl p-6 flex flex-col gap-6 md:hidden transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
          <span className="font-serif text-xl font-bold text-primary">Corylus Cafe</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-on-surface-variant hover:text-primary"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-base transition-colors ${
                  isActive
                    ? "bg-secondary-container text-on-secondary-container font-semibold"
                    : "text-on-surface hover:bg-surface-container"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="mt-auto pt-6 border-t border-outline-variant/30">
          <Link
            href="/corylus/menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3 bg-primary text-on-primary rounded-lg flex items-center justify-center gap-2 font-bold hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined">restaurant_menu</span>
            Hemen Sipariş Ver
          </Link>
        </div>
      </div>
    </>
  );
}
