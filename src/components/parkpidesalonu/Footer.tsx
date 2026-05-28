import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-section-gap bg-surface-container-high dark:bg-inverse-surface border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-gutter max-w-container-max mx-auto font-body text-body-md">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <span className="font-display text-headline-lg text-on-surface dark:text-inverse-on-surface font-bold">
            Park Pide
          </span>
          <p className="text-on-surface-variant dark:text-tertiary-fixed-dim">
            Giresun'un en köklü taş fırın pide salonlarından biri olarak, geleneksel lezzetleri modern bir sunumla sofralarınıza taşıyoruz.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-body text-title-md font-bold text-primary dark:text-inverse-primary mb-2">
            İletişim
          </h4>
          <Link
            className="text-on-surface-variant dark:text-tertiary-fixed-dim hover:text-primary transition-all underline flex items-center gap-2"
            href="/parkpidesalonu/iletisim"
          >
            <span className="material-symbols-outlined text-sm">location_on</span> Çıtlakkale, Giresun
          </Link>
          <a
            className="text-on-surface-variant dark:text-tertiary-fixed-dim hover:text-primary transition-all underline flex items-center gap-2"
            href="tel:+90454XXXXXXX"
          >
            <span className="material-symbols-outlined text-sm">phone</span> +90 454 XXX XX XX
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-body text-title-md font-bold text-primary dark:text-inverse-primary mb-2">
            Bağlantılar
          </h4>
          <Link className="text-secondary font-bold hover:text-primary transition-all underline" href="/parkpidesalonu">
            Ana Sayfa
          </Link>
          <Link className="text-on-surface-variant dark:text-tertiary-fixed-dim hover:text-primary transition-all underline" href="#about">
            Hakkımızda
          </Link>
          <Link className="text-on-surface-variant dark:text-tertiary-fixed-dim hover:text-primary transition-all underline" href="#menu">
            Menü
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-body text-title-md font-bold text-primary dark:text-inverse-primary mb-2">
            Yasal
          </h4>
          <Link className="text-on-surface-variant dark:text-tertiary-fixed-dim hover:text-primary transition-all underline" href="#terms">
            Kullanım Koşulları
          </Link>
          <Link className="text-on-surface-variant dark:text-tertiary-fixed-dim hover:text-primary transition-all underline" href="#privacy">
            Gizlilik Politikası
          </Link>
          <Link className="text-on-surface-variant dark:text-tertiary-fixed-dim hover:text-primary transition-all underline" href="#newsletter">
            E-Bülten
          </Link>
        </div>
        <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-outline-variant/30 text-center text-on-surface-variant dark:text-tertiary-fixed-dim text-sm">
          © {new Date().getFullYear()} Park Pide Salonu - Giresun'un Geleneksel Lezzeti. Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
}
