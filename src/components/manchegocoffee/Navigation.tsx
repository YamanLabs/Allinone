"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Ana Sayfa", path: "/manchegocoffee" },
    { name: "Menü", path: "/manchegocoffee/menu" },
    { name: "Konum", path: "/manchegocoffee/konum" },
    { name: "Sipariş", path: "/manchegocoffee/siparis" },
  ];

  return (
    <>
      {/* Top sticky navbar */}
      <header
        className={`w-full top-0 sticky border-b border-outline-variant/30 z-50 transition-all duration-300 backdrop-blur-md ${
          scrolled ? "shadow-md bg-background/95" : "bg-background/80"
        } text-primary`}
        id="topNav"
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto py-4">
          <Link
            className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2 group"
            href="/manchegocoffee"
          >
            <span className="material-symbols-outlined text-terracotta group-hover:scale-110 transition-transform">
              coffee
            </span>
            <span className="font-headline-md font-bold">Manchego Coffee</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  className={`font-label-md text-label-md transition-colors duration-200 pb-1 ${
                    isActive
                      ? "text-primary font-bold border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                  href={item.path}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          <Link href="/manchegocoffee/siparis" className="hidden md:flex items-center justify-center bg-terracotta text-white font-label-md text-label-md px-6 py-3 rounded-lg shadow-level-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 active:scale-95">
            Hemen Sipariş Ver
          </Link>
          
          {/* Mobile indicator */}
          <div className="md:hidden flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface/90 border border-outline-variant/30 rounded-full text-[10px] font-semibold text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-forest-green animate-pulse"></span>
              Açık
            </span>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Shell (Bottom Nav) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-cream border-t border-surface-variant/50 z-50 shadow-[0_-4px_6px_-1px_rgba(75,56,50,0.05)] pb-safe">
        <div className="flex justify-around items-center py-3 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            let icon = "home";
            if (item.path === "/manchegocoffee/menu") icon = "restaurant_menu";
            else if (item.path === "/manchegocoffee/siparis") icon = "shopping_bag";
            else if (item.path === "/manchegocoffee/konum") icon = "location_on";

            return (
              <Link
                key={item.path}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  isActive
                    ? "text-espresso font-bold"
                    : "text-espresso/60 hover:text-espresso"
                }`}
                href={item.path}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {icon}
                </span>
                <span className="font-label-sm text-[10px]">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
