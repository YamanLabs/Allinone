"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Ana Sayfa", href: "/nebioglupide" },
    { name: "Menü", href: "/nebioglupide/menu" },
    { name: "Paket Servis", href: "/nebioglupide/iletisim" },
    { name: "İletişim", href: "/nebioglupide/iletisim" },
  ];

  const isActive = (href: string, name: string) => {
    if (href === "/nebioglupide") {
      return pathname === "/nebioglupide";
    }
    // "Paket Servis" and "İletişim" both route to "/nebioglupide/iletisim"
    return pathname === href;
  };

  return (
    <>
      <header className="bg-surface/95 backdrop-blur-md sticky top-0 z-50 w-full border-b border-outline-variant/30 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          
          {/* Mobile Menu Toggle (Visible on Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary p-2 hover:bg-surface-container-low transition-all duration-300 rounded-full scale-95 active:scale-90"
            aria-label="Menüyü Aç"
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Brand Logo */}
          <Link 
            href="/nebioglupide" 
            className="font-headline-lg text-headline-lg text-primary italic font-black text-center md:text-left flex-1 md:flex-none hover:opacity-80 transition-opacity"
          >
            NEBİOĞLU
          </Link>

          {/* Navigation Links (Hidden on Mobile, flex on Desktop) */}
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center font-bold">
            {navLinks.map((link, index) => {
              const active = isActive(link.href, link.name);
              return (
                <Link
                  key={`${link.name}-${index}`}
                  href={link.href}
                  className={`font-label-md text-label-md px-3 py-2 rounded transition-all duration-300 scale-95 active:scale-90 ${
                    active
                      ? "text-secondary border-b-2 border-secondary pb-1 font-bold"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Trailing Action */}
          <a 
            className="hidden md:inline-flex bg-mustard-yellow hover:bg-tertiary-fixed-dim text-charcoal font-label-md text-label-md px-6 py-2.5 rounded font-bold transition-all items-center gap-2 shadow-sm scale-95 active:scale-90"
            href="tel:04540000000"
          >
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              call
            </span>
            Hemen Ara
          </a>

          {/* Mobile Placeholder for balance */}
          <div className="w-10 md:hidden"></div>
        </div>
      </header>

      {/* Mobile Sidebar/Drawer Menu (Rendered outside header to avoid backdrop-filter stacking issues) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Drawer content */}
          <div className="relative flex flex-col w-64 max-w-xs bg-surface border-r border-outline-variant/30 h-full p-6 shadow-xl z-[110] animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="font-headline-lg text-headline-lg text-primary italic font-black">
                NEBİOĞLU
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-primary p-1 rounded-full hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => {
                const active = isActive(link.href, link.name);
                return (
                  <Link
                    key={`mobile-${link.name}-${index}`}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-label-md text-label-md px-4 py-3 rounded-lg transition-colors ${
                      active
                        ? "bg-primary/10 text-primary font-bold"
                        : "text-on-surface-variant hover:bg-surface-container-low"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-6 border-t border-outline-variant/20">
              <a 
                className="w-full bg-mustard-yellow hover:bg-tertiary-fixed-dim text-charcoal font-bold py-3 px-4 rounded flex items-center justify-center gap-2 shadow-sm"
                href="tel:04540000000"
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  call
                </span>
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
