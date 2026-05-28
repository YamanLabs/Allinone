import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-primary-fixed-dim w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-8 py-12 max-w-container-max mx-auto gap-lg">
        {/* Brand Info */}
        <div className="flex flex-col gap-4">
          <span className="font-headline-md text-headline-md text-primary-fixed tracking-tight">AZIK BURGER</span>
          <p className="font-body-md text-body-md text-surface-variant max-w-sm">
            Giresun&apos;un en taze, en lezzetli burger deneyimi. Odun ateşinde pişen efsane lezzetler.
          </p>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-3">
          <h4 className="font-label-bold text-label-bold text-on-tertiary-fixed-variant uppercase mb-2">İletişim</h4>
          <span className="font-body-md text-body-md text-surface-variant flex items-center gap-2 hover:text-primary-fixed-dim transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            Çıtlakkale, İnönü Cd. No:12, Merkez / Giresun
          </span>
          <span className="font-body-md text-body-md text-surface-variant flex items-center gap-2 hover:text-primary-fixed-dim transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            Çalışma Saatleri: 10:00 - 00:00
          </span>
          <a 
            href="tel:+904540000000" 
            className="font-body-md text-body-md text-surface-variant flex items-center gap-2 hover:text-primary-fixed-dim transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            0454 XXX XX XX
          </a>
          <a 
            href="https://wa.me/905555555555" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-label-bold text-label-bold text-secondary-container flex items-center gap-2 hover:brightness-110 transition-colors mt-2"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            WhatsApp Sipariş Hattı
          </a>
        </div>

        {/* Copy / Copyright */}
        <div className="flex flex-col gap-4 w-full md:w-auto mt-8 md:mt-0 pt-8 md:pt-0 border-t border-outline/20 md:border-none">
          <p className="font-body-md text-body-md text-surface-variant text-sm opacity-80 hover:opacity-100 transition-opacity">
            © {new Date().getFullYear()} Azık Burger Giresun. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
