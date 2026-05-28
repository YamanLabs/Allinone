'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/azikburger' },
    { name: 'Menü', path: '/azikburger/menu' },
    { name: 'Sipariş Ver ve İletişim', path: '/azikburger/siparis' }
  ];

  return (
    <>
      <header 
        className={`bg-surface sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'shadow-md py-3' : 'shadow-sm py-4'
        }`}
      >
        <div className="flex justify-between items-center w-full px-6 max-w-container-max mx-auto">
          {/* Logo */}
          <Link 
            href="/azikburger" 
            className="font-headline-md text-headline-md font-bold text-primary tracking-tight scale-95 transition-transform duration-150 hover:scale-100"
          >
            AZIK BURGER
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-label-bold text-label-bold transition-all px-2 py-1 rounded ${
                    isActive 
                      ? 'text-primary border-b-2 border-primary font-bold pb-1' 
                      : 'text-on-surface hover:text-primary hover:bg-surface-container-low'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Trailing Action */}
          <div className="flex items-center gap-4">
            <Link 
              href="/azikburger/siparis" 
              className="hidden md:flex bg-primary-container text-on-primary font-label-bold text-label-bold px-6 py-3 rounded-lg hover:brightness-110 transition-all shadow-[0px_8px_16px_rgba(255,107,0,0.2)] items-center gap-2 scale-95 hover:scale-100 duration-150"
            >
              <span className="material-symbols-outlined fill text-[20px]">shopping_bag</span>
              Hemen Sipariş Ver
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden text-on-surface p-2 rounded-full hover:bg-surface-container-low transition-colors"
              aria-label="Menüyü Aç"
            >
              <span className="material-symbols-outlined text-[32px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div 
        className={`fixed inset-0 bg-inverse-surface/50 z-[60] transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 block' : 'opacity-0 hidden'
        }`}
        onClick={() => setIsDrawerOpen(false)}
      >
        {/* Drawer Content */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-surface shadow-xl flex flex-col transition-transform duration-300 ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex justify-between items-center border-b border-surface-container">
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">MENÜ</span>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="text-on-surface p-2"
              aria-label="Menüyü Kapat"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-6 font-label-bold text-label-bold">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`text-[18px] transition-colors ${
                    isActive ? 'text-primary font-bold' : 'text-on-surface hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/azikburger/siparis"
              onClick={() => setIsDrawerOpen(false)}
              className="bg-primary-container text-on-primary font-label-bold text-label-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined fill">shopping_bag</span>
              Hemen Sipariş Ver
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
