import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-primary-container text-on-surface dark:text-on-primary-container full-width pb-24 md:pb-8 border-t border-outline-variant/20 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto">
        <div className="col-span-1 mb-8 md:mb-0">
          <div className="font-headline-md text-headline-md text-primary dark:text-primary-fixed font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-terracotta">coffee</span>
            <span>Manchego</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant/70 mb-4 pr-4 leading-relaxed">
            Giresun'un kalbinde, modern bir kahve deneyimi. Nitelikli kahve çekirdekleri ve el yapımı lezzetler.
          </p>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-md text-label-md text-primary dark:text-primary-fixed mb-4 font-bold">Hızlı Bağlantılar</h4>
          <ul className="space-y-3 font-label-sm text-label-sm">
            <li>
              <Link href="/manchegocoffee" className="text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary transition-colors">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/manchegocoffee/menu" className="text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary transition-colors">
                Menü
              </Link>
            </li>
            <li>
              <Link href="/manchegocoffee/siparis" className="text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary transition-colors">
                Sipariş
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-md text-label-md text-primary dark:text-primary-fixed mb-4 font-bold">İletişim</h4>
          <ul className="space-y-3 font-label-sm text-label-sm">
            <li>
              <Link href="/manchegocoffee/konum" className="text-on-surface-variant dark:text-on-surface-variant/70 hover:text-primary transition-colors">
                Konum
              </Link>
            </li>
            <li>
              <Link href="/manchegocoffee/konum" className="text-terracotta hover:text-primary transition-colors font-semibold">
                Yol Tarifi Al
              </Link>
            </li>
            <li>
              <span className="text-on-surface-variant dark:text-on-surface-variant/70">
                Tel: +90 454 123 45 67
              </span>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-md text-label-md text-primary dark:text-primary-fixed mb-4 font-bold">Sosyal Medya</h4>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-surface-variant/50 flex items-center justify-center text-primary hover:bg-terracotta hover:text-white transition-colors"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined text-[20px]">camera_alt</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-surface-variant/50 flex items-center justify-center text-primary hover:bg-terracotta hover:text-white transition-colors"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <span className="material-symbols-outlined text-[20px]">thumb_up</span>
            </a>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-outline-variant/30 text-center">
          <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant/70">
            © {new Date().getFullYear()} Manchego Coffee Giresun. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
