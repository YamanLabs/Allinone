import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full max-w-container-max mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden">
        {/* Text Content */}
        <div className="flex flex-col gap-6 z-10">
          <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-3 py-1 rounded-full w-max">
            <span className="material-symbols-outlined fill text-[16px]">local_fire_department</span>
            Yeni &amp; Ateşli
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface leading-none uppercase">
            Giresun&apos;un <br />
            <span className="text-primary-container">En Lezzetli</span> <br />
            Burgeri
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            %100 dana eti, günlük taze pişen ekmekler ve özel soslarımızla hazırlanan efsanevi lezzetleri keşfedin. Gerçek burger deneyimi kapınızda.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Link 
              href="/azikburger/siparis" 
              className="bg-primary-container text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-lg hover:brightness-110 transition-all shadow-[0px_8px_16px_rgba(255,107,0,0.2)] flex items-center gap-2 text-[16px] scale-95 hover:scale-100 duration-150"
            >
              Hemen Sipariş Ver
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link 
              href="/azikburger/menu" 
              className="bg-on-surface text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all flex items-center gap-2 text-[16px] scale-95 hover:scale-100 duration-150"
            >
              Menüyü İncele
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-surface flex items-center justify-center overflow-hidden">
                <img 
                  alt="Avatar" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbvuLBb59spCHEwm_IxG-yrVGKXHUBiw8vqvhssKUimWpsjBuQlP8aeiUJ_NVx8hRitW9BR7pgxVypVONYFVW4p_LV2JiUhH65gzew6he_mUQJOSadj1kNcGblTmE7gKtsFys_aQp0CHIXu070bKJuEjEfkMHxf5CclGzX_ewMsq-Nr6aAwRfYpTuP_ddn9Etdx9ucDh-WIu4yWEqzyAflbehbkk1J4PHC_1oNsMYk5_Ag1LWqMOzUgKL_rSPHJWsT8DbbP85yPajt"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-surface flex items-center justify-center overflow-hidden">
                <img 
                  alt="Avatar" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyhNMCuTDe4odIfwdao0sWaQaM-qgh7xuxk3D1nl2smDue9bo4txtJ-WGwpqneoNxsPnmMaqNmjiRfgLBI_Uk8tjzlpfLnZQSDpBfNJwbherlQw5nh2y8vvl-0ivoDIW2fL3b0PSyHgsUzdSmrW0pAWp6GCrbd1XLRb_nO7Apk0YNxzUTkc65AaCeo_gWAzXf9i49HoVmmXQqjxGVDbRZ9OOo4Nqz4IkmD4NwrHcgOzD5lQO4r-8yWX3ZQA3vV36PzxhHHz63_Qp1R"
                />
              </div>
              <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-surface flex items-center justify-center overflow-hidden">
                <img 
                  alt="Avatar" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm9dKcY3NcbRn_wotYAuYEfXGaFuG-wOXjhfp7TCpv2LiL_gykKiwLsRpRzdjAyKdSMdp4w_wbm-ePLRREDrHyYfTTm753faSXZ4oozRr1-4wTQfHZ5ehkHEfoGpj2-dtKnaQZVd5qkkSdjJKaxa9qOMtGENUw7rlSMbQDY98MJNJt2TNXhAMDQpQZlGe2Fmy5wcVCU012om_S6vcRFd5Bbj42WtEphAlU7BOoVuwopF0ctACL5UXFgedMhR5QJtos2NX8rZgefXO1"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-secondary-fixed-dim">
                <span className="material-symbols-outlined fill text-[18px]">star</span>
                <span className="material-symbols-outlined fill text-[18px]">star</span>
                <span className="material-symbols-outlined fill text-[18px]">star</span>
                <span className="material-symbols-outlined fill text-[18px]">star</span>
                <span className="material-symbols-outlined fill text-[18px]">star_half</span>
              </div>
              <span className="font-label-bold text-label-bold text-on-surface-variant text-[12px]">Google Maps 4.1 Yıldız (200+ Yorum)</span>
            </div>
          </div>
        </div>

        {/* Hero Image / Visual */}
        <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
          <img 
            alt="Giresun'un En Lezzetli Burgeri" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4rPdAV6UNl3l_KGZTWMGvQ5WqCqnbMilDUKltcm0BIUQgGe4tmcNgpF_43PpfGAl807q45sK6jHTavjGnV5QjNL-3XQBeMByL8tQwOX3Gc2TwTJ_NZyRDEsFnvO60mtGhDtTrCqRORJyGULkVS5FgVcYQ5AMeaBj-Hw7S3SZnWPQvRUFUK5jfJED04aIcXsTcpWAFo-pSs7bXcxxhhyL214qfUOyA7ZEeMtgIOHSYZbdsQe-YLDblUv2zF4ZZiOL4KswND8I_8am0"
          />
          {/* Floating Badge */}
          <div className="absolute bottom-6 right-6 z-20 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-surface-container-high flex items-center gap-3">
            <div className="bg-secondary-container text-on-secondary-container p-2 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined fill">delivery_dining</span>
            </div>
            <div>
              <p className="font-label-bold text-label-bold text-on-surface text-[14px] leading-tight">Hızlı Teslimat</p>
              <p className="font-body-md text-body-md text-on-surface-variant text-[12px]">Taze Lezzet</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-12 bg-background border-t border-surface-container">
        <div className="max-w-container-max mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline-md text-headline-md text-on-background font-bold uppercase">Popüler Kategoriler</h2>
            <Link 
              href="/azikburger/menu" 
              className="flex items-center text-primary font-label-bold text-label-bold hover:text-primary-container transition-colors"
            >
              Tümünü Gör 
              <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
            </Link>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-lg">
            <Link href="/azikburger/menu" className="min-w-[140px] md:min-w-0 bg-surface rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer border border-surface-container text-center group">
              <div className="w-20 h-20 mx-auto bg-surface-container-low rounded-full mb-3 flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-[40px] text-primary">lunch_dining</span>
              </div>
              <span className="font-label-bold text-label-bold text-on-surface block">Burgerler</span>
            </Link>
            <Link href="/azikburger/menu" className="min-w-[140px] md:min-w-0 bg-surface rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer border border-surface-container text-center group">
              <div className="w-20 h-20 mx-auto bg-surface-container-low rounded-full mb-3 flex items-center justify-center group-hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-[40px] text-secondary">tapas</span>
              </div>
              <span className="font-label-bold text-label-bold text-on-surface block">Yan Ürünler</span>
            </Link>
            <Link href="/azikburger/menu" className="min-w-[140px] md:min-w-0 bg-surface rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer border border-surface-container text-center group">
              <div className="w-20 h-20 mx-auto bg-surface-container-low rounded-full mb-3 flex items-center justify-center group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-[40px] text-primary">local_drink</span>
              </div>
              <span className="font-label-bold text-label-bold text-on-surface block">İçecekler</span>
            </Link>
            <Link href="/azikburger/menu" className="min-w-[140px] md:min-w-0 bg-surface rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer border border-surface-container text-center group">
              <div className="w-20 h-20 mx-auto bg-surface-container-low rounded-full mb-3 flex items-center justify-center group-hover:bg-secondary-fixed transition-colors">
                <span className="material-symbols-outlined text-[40px] text-secondary">icecream</span>
              </div>
              <span className="font-label-bold text-label-bold text-on-surface block">Tatlılar</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="bg-surface-container py-16 md:py-24">
        <div className="max-w-container-max mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_2px_4px_rgba(0,0,0,0.05)] border border-surface-container-highest flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary-fixed rounded-xl flex items-center justify-center text-on-primary-fixed">
                <span className="material-symbols-outlined text-[32px]">local_fire_department</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Odun Ateşinde Izgara</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Etlerimiz özel olarak tasarlanmış ızgaralarımızda, odun ateşinin eşsiz aromasıyla mühürlenir.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0px_2px_4px_rgba(0,0,0,0.05)] border border-surface-container-highest flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-secondary-fixed rounded-xl flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[32px]">bakery_dining</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Taze Günlük Ekmek</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Kendi fırınımızda, günlük olarak ve özenle hazırlanan yumuşacık brioche ekmeklerimizle servis edilir.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-primary-container rounded-2xl p-8 shadow-[0px_8px_16px_rgba(255,107,0,0.2)] text-on-primary flex flex-col justify-center items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <span className="material-symbols-outlined text-[48px] mb-2">moped</span>
              <h3 className="font-headline-md text-headline-md">Hızlı Teslimat, Sıcak Servis</h3>
              <p className="font-body-md text-body-md text-on-primary/90">Siparişiniz fırından çıktığı gibi sıcacık kapınızda.</p>
              <Link 
                href="/azikburger/siparis" 
                className="mt-4 bg-surface-container-lowest text-primary-container font-label-bold text-label-bold px-6 py-2 rounded-lg hover:bg-surface-bright transition-colors"
              >
                Sipariş Ver
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Showcase */}
      <section className="py-16 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-6">
          <h2 className="font-headline-md text-headline-md text-on-background font-bold uppercase mb-8">Öne Çıkan Lezzetler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Featured Card */}
            <div className="md:col-span-2 bg-surface rounded-xl shadow-sm border border-surface-container overflow-hidden group relative flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img 
                  alt="Klasik Azık" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC790IastuPsqJjxHYV6bjVcKyW1nNLoAu135MTsEXwt8oDmgHwsnLhhTF4lS5PQQoiUYl4pQjAbjz1sc5PMmiR-ZCaf0wyua6BJjxWcX-gub385vKBTx-7fGIHunUPBp_H5qyRrPbCd_8zTnx9c9A68idB4ql2ck8uB6uvpo8eQ6txCXK9ljkBn81fhaLhmE_QKL1XMIGN8LG_oU7HEchVGsjVFgU7ogcdB_msKZIKdS2QgVrgcOeIxA4BBf89xMUE-dk_p-y-7K1K"
                />
                <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-bold text-label-bold text-xs uppercase shadow-sm">
                  Çok Satan
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold uppercase">Klasik Azık</h3>
                    <span className="font-price-tag text-price-tag text-primary font-bold">180 ₺</span>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-sm mb-4 line-clamp-3">
                    140g dana köfte, cheddar peyniri, karamelize soğan, turşu, domates, marul ve özel Azık sos ile hazırlanan klasik lezzetimiz.
                  </p>
                </div>
                <Link 
                  href="/azikburger/menu" 
                  className="w-full bg-inverse-surface text-inverse-on-surface font-label-bold text-label-bold py-3 rounded-lg hover:bg-on-surface transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                  Menüde İncele / Sipariş
                </Link>
              </div>
            </div>

            {/* Smaller Featured Card */}
            <div className="bg-surface rounded-xl shadow-sm border border-surface-container overflow-hidden group flex flex-col h-full">
              <div className="w-full h-48 relative overflow-hidden bg-surface-container-low">
                <img 
                  alt="Baharatlı Patates" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5IBGm9d1NFj9KrJDRuWigR6OuvWDWYjRcl-8fsiK-jFpVrE3Kykkj7u12MT3TI72XEDkocHF0lzZ7YBlUTjQiYiw_qddtmRXeC0Xnws5YhkQB68cm2KsQXS0AQxxCj-W232slgebfZ-vrIcRikTp6xKWogluIul5qqdG7_U_hBNk-4DX6LkZb94IJ088tloWeeD9jhmoUchB3R2OJfmD73axj3lEQ2-PY_JOigC2d7S6jsrjIGRIyKjvEVWMhPGX5IIGJ0sf1kRs1"
                />
                <div className="absolute top-4 left-4 bg-error-container text-on-error-container px-3 py-1 rounded-full font-label-bold text-label-bold text-xs uppercase shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] fill">local_fire_department</span> Acılı
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold uppercase leading-tight">Baharatlı Patates</h3>
                    <span className="font-price-tag text-price-tag text-primary font-bold">65 ₺</span>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-sm mb-4">
                    Özel cajun baharatı ile harmanlanmış, çıtır çıtır ince kesim patates kızartması.
                  </p>
                </div>
                <Link 
                  href="/azikburger/menu" 
                  className="w-full border-2 border-surface-container text-on-surface font-label-bold text-label-bold py-2 rounded-lg hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
                >
                  Menüye Git
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & CTA Section */}
      <section className="max-w-container-max w-full mx-auto px-6 py-16 md:py-24">
        <div className="bg-inverse-surface text-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="p-8 md:p-16 flex flex-col justify-center gap-6 md:w-1/2">
            <h2 className="font-headline-lg text-headline-lg uppercase text-primary-fixed">Bizi Ziyaret Edin</h2>
            <p className="font-body-lg text-body-lg text-tertiary-fixed-dim">
              Gerçek burger deneyimini yerinde yaşamak için sizi restoranımıza bekliyoruz. 
            </p>
            <div className="flex items-start gap-4 mt-4">
              <span className="material-symbols-outlined text-secondary-container text-[28px] mt-1">location_on</span>
              <div>
                <p className="font-label-bold text-label-bold text-surface-container-lowest text-[18px]">Çıtlakkale, İnönü Cd. No:12</p>
                <p className="font-body-md text-body-md text-tertiary-fixed-dim">Merkez / Giresun</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-secondary-container text-[28px] mt-1">schedule</span>
              <div>
                <p className="font-label-bold text-label-bold text-surface-container-lowest text-[18px]">Çalışma Saatleri</p>
                <p className="font-body-md text-body-md text-tertiary-fixed-dim">Her Gün: 10:00 - 00:00</p>
              </div>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-outline-variant text-primary-fixed font-label-bold text-label-bold px-6 py-3 rounded-lg hover:bg-outline-variant/10 transition-colors mt-4 w-max"
            >
              <span className="material-symbols-outlined">map</span>
              Yol Tarifi Al
            </a>
          </div>
          {/* Abstract Map Graphic / Image Area */}
          <div className="md:w-1/2 bg-surface-container-highest relative min-h-[300px]">
            <img 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover absolute inset-0 mix-blend-overlay opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeNieZMgL7Dt6F5E0_-DnZ9jQbYe2C6coHQEDYqPkzb9w3RJZ5ACDoYrP_EKYCmHYD-Jkg0DVibUw_yLq-gQNY-ONxQWxxwQ8I6Y1_BSbjDCKj7H6x2LuUo_xttBAqhflIMlUlyPHcjd8un7wBRpZ-V6fvJMa0wf4Utwbcz7-ULatJ-qRdqm0FVBJT2-GsOgZI5u-Ottg099BWVX0RYXr-NaI6wvC8zC374d7MwzJwP39tfzf4JnQTrJu6e_WOWSerhdkGyY3jD2XX"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface to-transparent"></div>
            {/* Decorative Map Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center animate-pulse">
              <span className="material-symbols-outlined fill text-primary-container text-[64px] drop-shadow-lg">location_on</span>
              <div className="w-16 h-4 bg-black/30 rounded-[100%] mx-auto blur-sm -mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Fixed Action Buttons (Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-surface/90 backdrop-blur-md border-t border-surface-container shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] md:hidden z-40 flex gap-4 pb-8">
        <a 
          className="flex-1 bg-inverse-surface text-inverse-on-surface font-label-bold text-label-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform" 
          href="tel:+904540000000"
        >
          <span className="material-symbols-outlined">call</span>
          Tıkla Ara
        </a>
        <a 
          className="flex-1 bg-[#25D366] text-white font-label-bold text-label-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform" 
          href="https://wa.me/905555555555" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined">chat</span>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
