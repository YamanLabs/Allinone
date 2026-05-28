import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-tertiary text-on-tertiary border-t border-primary-container py-12 px-margin-mobile md:px-margin-desktop mt-auto">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Brand Area */}
        <div className="flex flex-col gap-4">
          <h3 className="font-serif text-2xl font-bold text-secondary-fixed">Corylus Cafe</h3>
          <p className="text-on-tertiary/75 text-sm leading-relaxed max-w-xs">
            Özenle seçilmiş malzemeler, ustalıkla hazırlanan lezzetler. Gününüzü güzelleştirmek için buradayız.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-on-tertiary/10 flex items-center justify-center text-on-tertiary hover:bg-secondary-container hover:text-on-secondary-container transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a
              href="mailto:info@coryluscafe.com"
              className="w-10 h-10 rounded-full bg-on-tertiary/10 flex items-center justify-center text-on-tertiary hover:bg-secondary-container hover:text-on-secondary-container transition-all hover:scale-110"
              aria-label="Email"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

        {/* Links Area */}
        <div className="flex flex-col gap-3">
          <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-secondary-fixed">
            Hızlı Bağlantılar
          </h4>
          <Link href="/corylus" className="text-on-tertiary/75 hover:text-on-tertiary text-sm transition-transform duration-200 hover:translate-x-1">
            Ana Sayfa
          </Link>
          <Link href="/corylus/menu" className="text-on-tertiary/75 hover:text-on-tertiary text-sm transition-transform duration-200 hover:translate-x-1">
            Menü
          </Link>
          <Link href="/corylus/hikayemiz" className="text-on-tertiary/75 hover:text-on-tertiary text-sm transition-transform duration-200 hover:translate-x-1">
            Hikayemiz
          </Link>
          <Link href="/corylus/iletisim" className="text-on-tertiary/75 hover:text-on-tertiary text-sm transition-transform duration-200 hover:translate-x-1">
            İletişim
          </Link>
        </div>

        {/* Contact Area */}
        <div className="flex flex-col gap-3">
          <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-secondary-fixed">
            İletişim & Konum
          </h4>
          <p className="text-on-tertiary/75 text-sm leading-relaxed">
            <strong>Adres:</strong> Çıtlakkale Mah. İnönü Cad. No:129, Giresun
          </p>
          <p className="text-on-tertiary/75 text-sm">
            <strong>Telefon:</strong> 0454 500 28 00
          </p>
          <p className="text-on-tertiary/75 text-sm">
            <strong>Çalışma Saatleri:</strong> 08:00 - 22:00
          </p>
          <a
            href="https://wa.me/904545002800"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary-container hover:text-secondary-fixed text-sm font-semibold transition-transform duration-200 hover:translate-x-1"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            WhatsApp Sipariş Hattı
          </a>
        </div>
      </div>

      <div className="max-w-container-max mx-auto border-t border-on-tertiary/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-tertiary/50">
        <p>© 2024 Corylus Cafe & Patisserie. Tüm hakları saklıdır.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-on-tertiary">Gizlilik Politikası</a>
          <a href="#" className="hover:text-on-tertiary">Kullanım Koşulları</a>
        </div>
      </div>
    </footer>
  );
}
