import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-surface-container-lowest border-t border-outline-variant/20 mt-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/nebioglupide" className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim italic font-black">
            NEBİOĞLU
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
            Ali Haydar Usta KEBAB - LAHMACUN. Geleneksel lezzetlerin buluşma noktası.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant/80 mt-auto text-sm hidden md:block">
            © 2024 NEBİOĞLU Ali Haydar Usta KEBAB - LAHMACUN. Tüm hakları saklıdır.
          </p>
        </div>

        {/* Info Column */}
        <div className="flex flex-col gap-3 font-body-md text-body-md">
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-2">İletişim & Konum</h4>
          <div className="text-on-surface-variant/80 hover:text-secondary hover:translate-x-1 transition-transform duration-200 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">schedule</span>
            Çalışma Saatleri: 08:00 - 22:00
          </div>
          <Link 
            href="/nebioglupide/iletisim" 
            className="text-on-surface-variant/80 hover:text-secondary hover:translate-x-1 transition-transform duration-200 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">location_on</span>
            Giresun, Merkez/Seldeğirmeni
          </Link>
          <a 
            href="tel:04540000000" 
            className="text-primary font-bold hover:translate-x-1 transition-transform duration-200 flex items-center gap-2 mt-2"
          >
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            0(454) 000 00 00
          </a>
        </div>

        {/* Social Column */}
        <div className="flex flex-col gap-3 font-body-md text-body-md md:items-end">
          <h4 className="font-label-md text-label-md text-on-surface font-bold mb-2">Bizi Takip Edin</h4>
          <a 
            className="text-on-surface-variant/80 hover:text-secondary hover:translate-x-1 transition-transform duration-200 opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2 md:justify-end" 
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] md:hidden" style={{ fontVariationSettings: "'FILL' 0" }}>photo_camera</span>
            Instagram
          </a>
          <a 
            className="text-on-surface-variant/80 hover:text-secondary hover:translate-x-1 transition-transform duration-200 opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2 md:justify-end" 
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] md:hidden" style={{ fontVariationSettings: "'FILL' 0" }}>thumb_up</span>
            Facebook
          </a>
        </div>

        {/* Copyright (Visible on mobile only below) */}
        <div className="col-span-1 md:hidden mt-6 pt-6 border-t border-outline-variant/10 text-center">
          <p className="font-body-md text-body-md text-on-surface-variant/60 text-sm">
            © 2024 NEBİOĞLU Ali Haydar Usta KEBAB - LAHMACUN. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
