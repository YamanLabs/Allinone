"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// Sub-component to read search params safely inside Suspense
function MenuContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categories = [
    { id: "Kahvaltı", name: "Kahvaltı", banner: "Serpme Kahvaltı", bannerImg: "https://lh3.googleusercontent.com/aida/ADBb0ujouOA_HOYUSwjU-mTw2_-Q23_hui2zwyJlueXFnvgwPBGhfG68XucTh9y6hr08r35Xbn2xTN3w7M3zEYN5-iKzg14pvID4MDzu-wIRvRtzLdxl-I3vRDGcGm5j0fMSuKTiiOAez14u_Yj5AJeW-9on0BvnMaHE0WLXuBulyRdhFZK8wNy2jG3AqFHZHtn11KxMohEKj6WxQfAZjtYYZPnyz-RhSd2doDh9XwBjmzA05XZU93h4lSuwYyY" },
    { id: "Dünya Mutfağı", name: "Dünya Mutfağı", banner: "Dünya Lezzetleri", bannerImg: "https://lh3.googleusercontent.com/aida/ADBb0uitnIdjYoCgaVmjsikq_m6r-o7ZTv65U7lrfz705N8x5ALgXtpbOrUp7FFO0CLnMLJF57nearLg75wn-PMNkYU2ZB1oKGOMxnoJrbKg4nPnn8CrymAi5W-9LABpYAon-r0BkvMkGaahj3WquvMRwHShKshxVxZFYyusS4xDCgPPazwfWAZkqDgdTc_yJvc8bRGeQW4gJg_s09T37TUDPgqH0LSeTyD3lG_UYMyLoGmRHW7qLRiPrEmTWbI" },
    { id: "Yerel Lezzetler", name: "Yerel Lezzetler", banner: "Yöresel Tatlar", bannerImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoC8IRRfgnyOO4LiWr6oyRULUvFATu3nUUaDTuSakLj128tHm9mnMsmIm81Z1-P3l9tuKPEdhBSwzqNOFefPynVGnJddDeUdM4iMDkQUIaSVna-HCTFasyZxdykEP5b6wrzMwaOisxx8_l8ENFtFFY21ZEE1CSEFl1waAIb25ubsh8-mDDorqEAqPfNmeTZUJundy2FoSER3x_G365GAyM4_5Gd1AIR7LXogPhUi9B3myGlCf97SAEOLDy8A3sNlclRn7bf2-gZ3U" },
    { id: "Tatlı Köşesi", name: "Tatlı Köşesi", banner: "Sanat Eseri Tatlılar", bannerImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDab2gyQ2min3FPX2AfiS4_pSsiC-NpbQAX4pywNEJ1bfX12ntoUUv-69W90ef8gaJxCDTWTOqKOYBX_Svb9msaYHhhPjIreaexUvfwpzgssXToP8J9JW43cDJ031G77VJAWO3BTzDdOuN9kDUw0xBNvVh29fYLFBK34kJmV4yPe3f82wIjGTyhu5Zh5mhc-9HohgNWQOwXeo89MnMSgkqRdmoD4yOj_HBpCM3ySvLwXHrfQp0t9gJeVE1pVVBMsUslt2mOiV2k2d4" },
    { id: "İçecekler", name: "İçecekler", banner: "Barista Özel Seçimleri", bannerImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyTLUY3PDgooh9BuqTF8l7I0rv-kSP8vYEYAHaIY4aCLrdmu3Zg1hDegIb9MCkp5mc8tZRuBW4eYKq1zlXn7k_mNeD83J5joTQhpp9PLONwWrWfi33YS2nNwXJY3sqOPApICWT7XZjDPtEY8reuwAN2s8dfmY-rqSiMUbM0NR2h6HEBgKdcsnPi1ClZfzm6Yc7tWtCeU_BqrjCUAxo0xsxlUFYuTJFHhgVhJzvxyW7Tr0k6KCRdBJ3lUp1tr0uAnUziPxX_h6r_Jo" }
  ];

  const menuItems = [
    {
      id: "m1",
      category: "Kahvaltı",
      name: "Avokadolu Tost",
      price: "185 ₺",
      desc: "Ekşi mayalı ekmek üzerine taze avokado ezmesi, poşe yumurta ve mikro yeşillikler.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVM3-wSVhS2QPpwAyyYcybVGrIfUjDLxufDfFwXfKFB7qD3i5c_bnc_BXIKCigaJHjKy_a1c7_9fdyeJ-7BxNWRnPAqyNaS9sn7szjK7Ut_ZZl31YDHEoG2s7D6aezze8UisDJvxal9XNMVfWffaMRGV6cqAzd1RDEQvuGsRgyHilApq5yOVTFK54ip9PK3g6nB7lqe0Oz_uy5ZXTulRGES9gjWpmwy8xgQzJmzLLfKJWs0LHocnfWYb3mfGzDYil58ZMO1dZGzjw",
      badge: "Yeni"
    },
    {
      id: "m2",
      category: "Kahvaltı",
      name: "Klasik Menemen",
      price: "140 ₺",
      desc: "Köy domatesi, sivri biber ve organik yumurta ile hazırlanan geleneksel lezzet.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjhfEGaWGJs3ewHDEzW0-A5UKiBIRFYTossND7r7ABB0FmGUmAJYVtBGmvEShe6H5CJmXDXz4ju-3_qjmW2_ohKgias3zE2ACdyncWpPdw1jtS_fxrFbDxluH6FmRxs_VpbM0erARmcBxGOnB4XxmZcXlNsuo03TfJYzs3DTRDa9KNrXQAp1djn-6f1jhEi_1SC392KgsKElxLNBXW2p0_rrBFr_3oZPAihRXWFKha_hXYAvaRZo-E025KcmkhIEd5O-m1x1GEc_s",
      badge: ""
    },
    {
      id: "m3",
      category: "Kahvaltı",
      name: "Orman Meyveli Pankek",
      price: "165 ₺",
      desc: "Puf pankekler, taze orman meyveleri ve saf akçaağaç şurubu.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFWaq0GD4K37qeta3ZfOguxuP8olGHNAmtWqkz_rpHeZW-dWXqCJi7wGtPEYY65YKYVBss48AsoAiRIe-M2y0eMV08cXqUzraTKFEf3DRN68wiqqWfyJlEndiSMALkz3KZDhqHAIJJE1K_4KyIWSW2GPufO1RdfneGIQTR_jIYB97dJDeRSTnq0poatq56THfzYuDUAbGk_sVNqNGSlqV2prgmbJ4sLQq-bxJgFALamBy5mF7j5nh4UQ3whBsJf-pPVGS9VRGb9Cs",
      badge: "Glutensiz Seçenek"
    },
    {
      id: "m4",
      category: "Dünya Mutfağı",
      name: "Truffle Burger",
      price: "340 ₺",
      desc: "Özel soslu brioche ekmeği, 200gr dana köfte, karamelize soğan ve trüf mayonez.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMwGlfSBdvJTB6T0jz-KEXNWO7fsxv9ndFVXCmr9WVthOndeq4n9qYiLpIoFPxIYSdqAUhDNVKJ_I-fWb8eLa0K55MeDeExnMX84kZVyhP5aPOArbdhQoyu-vY4svHY5T0NUsB2CihMmZB72NDDosB4CSx3Xp8MhuuopRwbzAV8TvlAeAvG4fGRUN08xbdX0jd_80XCyQHYhXhZKF2-PQEXbuy2FOwckeF28d1pyC1Vz9vHT4RMofshcWsgj_PGLd8YDoj-2dpgGw",
      badge: "Şefin Önerisi"
    },
    {
      id: "m5",
      category: "Dünya Mutfağı",
      name: "Somon Nigiri (4 Adet)",
      price: "280 ₺",
      desc: "Taze dilimlenmiş somon balığı ve özel sushi pilavı ile hazırlanan nigiri tabağı.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzU5e3Z-3CAqBywvYlKdy_gh-IEOvIf96UZaALTALb9sZBfsnY9d0qbZZnfv6I49kvxEkBsWIuElHHK1BnhKv8KZLiE-Qm1siByi92vnm2rAIEKVn_fQyiRyR54P5myMjACl2zPJhdWzEXA3-XIUvltym9Jl1h6ff-NlIWyV1BbnxP0V2D9hc_hAeHxXgKAqyh8imiAEtziYZSaLdGjKtGqg_l0dIfyDzWOFZixF0mn1upbgAYT27Bjczk3JO27Swz2ZRSYRwUYOE",
      badge: ""
    },
    {
      id: "m6",
      category: "Tatlı Köşesi",
      name: "San Sebastian Cheesecake",
      price: "190 ₺",
      desc: "Akışkan kıvamlı, özel Belçika çikolatası sosu ile servis edilen imza tatlımız.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsVFMqa9qiLcRfgRKxohj6nC-MArFBU3EJjqEz3nYZYRkyruQTHIxxKTQ5EP000QDw0r5OpzCll7WbDwqQ_yCgKzzalxDK7cJxHsuDsd4zPjiql6HKLODe6CPpnZZveKaHmT_JHvWAEo0LQ4AtiIjCB3BC_24KhQu9GBfyy4hLh4LI5_Ik60K6XW5VNQuALvm6j0b0XGHoxgjfR8tIZAlNBytbpJMKwx9_dbWeiOvzJgiJ-TfRPIxHWFtEqlMjxzEQoNzj65B08Ig",
      badge: "İmza Lezzet"
    },
    {
      id: "m7",
      category: "Tatlı Köşesi",
      name: "Frambuazlı Rüzgar Gülü",
      price: "175 ₺",
      desc: "Taze frambuazlar, altın sarısı tereyağlı çıtır milföy hamuru ve hafif krema.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyckITFh01iKUeeeLN_2nyUK28E7kw2cg9KlN-XXm7MhZ9u9j0sqBvzfKx_7TveP5czPdNZbeyP-6TCxV3im5wtCK-zRAwtMkEdweRE5fvX1ImtNEefDCjMf8npCGktfENSxRpq2BEIXrDU-ewsRl8KiyEwd3axRrK0jMQ2ekoGgLDP1RMd6PwOFKycjL9J1zc-RSe5ExXkvFS3dBWB4Nt3zC5Fyqsu9C99v2M6eUP06K5HGQzjmsDao7zzlG-GtOdmCZehGvefsI",
      badge: "Çok Satan"
    },
    {
      id: "m8",
      category: "Yerel Lezzetler",
      name: "Giresun Fındıklı Helva",
      price: "120 ₺",
      desc: "Giresun fındıklarının kavrulmasıyla elde edilen eşsiz kokulu geleneksel helva.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW9t1salmRG6WMJTcPOJCArXz8dGfHdWibIug3nCZhXxFjyWnARpIDhkXFZbdSwmkNKQ16G8yXmy0D80XWOAZLX_qzgpQuS1wPWrn5MFu4P-nkQ2sEj8ENK6oTvmIkeUcj4JsiD3CaTDbzJHG6QAVl2PEjTQE0CrQJD654YmvYXFI3mHAuiJ9CtbVg3nfeNKtZu48XBzbvZBjyPNoTE-04KF1-tyhaT1ap0eYN5zrdRgmUZdX-aAl_6cYylTYtvhZRTTcYiU2J4q0",
      badge: "Coğrafi İşaretli"
    },
    {
      id: "m9",
      category: "Yerel Lezzetler",
      name: "Odun Ateşinde Karadeniz Pidesi",
      price: "260 ₺",
      desc: "Karadeniz usulü kıymalı iç harç ve çıtır çıtır ince fırınlanmış pide hamuru.",
      img: "https://lh3.googleusercontent.com/aida/ADBb0uitnIdjYoCgaVmjsikq_m6r-o7ZTv65U7lrfz705N8x5ALgXtpbOrUp7FFO0CLnMLJF57nearLg75wn-PMNkYU2ZB1oKGOMxnoJrbKg4nPnn8CrymAi5W-9LABpYAon-r0BkvMkGaahj3WquvMRwHShKshxVxZFYyusS4xDCgPPazwfWAZkqDgdTc_yJvc8bRGeQW4gJg_s09T37TUDPgqH0LSeTyD3lG_UYMyLoGmRHW7qLRiPrEmTWbI",
      badge: "Geleneksel"
    },
    {
      id: "m10",
      category: "İçecekler",
      name: "Latte Art Cappuccino",
      price: "85 ₺",
      desc: "Taze çekilmiş espresso, buharda krema haline getirilmiş süt ve kadifemsi köpük.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyTLUY3PDgooh9BuqTF8l7I0rv-kSP8vYEYAHaIY4aCLrdmu3Zg1hDegIb9MCkp5mc8tZRuBW4eYKq1zlXn7k_mNeD83J5joTQhpp9PLONwWrWfi33YS2nNwXJY3sqOPApICWT7XZjDPtEY8reuwAN2s8dfmY-rqSiMUbM0NR2h6HEBgKdcsnPi1ClZfzm6Yc7tWtCeU_BqrjCUAxo0xsxlUFYuTJFHhgVhJzvxyW7Tr0k6KCRdBJ3lUp1tr0uAnUziPxX_h6r_Jo",
      badge: ""
    },
    {
      id: "m11",
      category: "İçecekler",
      name: "Geleneksel Türk Çayı",
      price: "30 ₺",
      desc: "Karadeniz'in seçkin çay yapraklarından taze demlenen tavşan kanı çay.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoC8IRRfgnyOO4LiWr6oyRULUvFATu3nUUaDTuSakLj128tHm9mnMsmIm81Z1-P3l9tuKPEdhBSwzqNOFefPynVGnJddDeUdM4iMDkQUIaSVna-HCTFasyZxdykEP5b6wrzMwaOisxx8_l8ENFtFFY21ZEE1CSEFl1waAIb25ubsh8-mDDorqEAqPfNmeTZUJundy2FoSER3x_G365GAyM4_5Gd1AIR7LXogPhUi9B3myGlCf97SAEOLDy8A3sNlclRn7bf2-gZ3U",
      badge: "Sınırsız İkram"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("Kahvaltı");
  const [searchQuery, setSearchQuery] = useState("");

  // Sync category with URL search parameters
  useEffect(() => {
    const catParam = searchParams?.get("category");
    if (catParam && categories.some((c) => c.id === catParam)) {
      setActiveCategory(catParam);
    }
  }, [searchParams]);

  const selectCategory = (id: string) => {
    setActiveCategory(id);
    // Update route without reloading page
    router.replace(`/corylus/menu?category=${id}`, { scroll: false });
  };

  const currentCategoryData = categories.find((c) => c.id === activeCategory) || categories[0];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
      {/* Search Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl text-primary font-bold">Corylus Cafe Menüsü</h1>
          <p className="font-sans text-sm text-on-surface-variant mt-1">Her biri usta şeflerimizin elinden çıkma lezzet şöleni.</p>
        </div>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Menüde ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-outline-variant/60 bg-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm font-sans"
          />
          <span className="material-symbols-outlined absolute left-3.5 top-3 text-on-surface-variant text-lg">
            search
          </span>
        </div>
      </div>

      {/* Categories Horizontal Tabs */}
      <nav className="sticky top-16 z-30 bg-background/90 backdrop-blur-md border-b border-surface-variant/50 py-4 mb-8 overflow-hidden">
        <ul className="flex overflow-x-auto hide-scrollbar gap-3 snap-x">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <li key={cat.id} className="snap-start shrink-0">
                <button
                  onClick={() => selectCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full font-sans text-sm transition-all duration-300 ${
                    isSelected
                      ? "bg-primary text-on-primary shadow-md shadow-primary/20 font-bold"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-variant hover:text-primary"
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Category Section Banner */}
      <div className="relative w-full aspect-[2.1] md:aspect-[3.5] rounded-2xl overflow-hidden shadow-lg mb-8">
        <img
          alt={currentCategoryData.banner}
          src={currentCategoryData.bannerImg}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6 md:p-8">
          <h2 className="font-serif text-2xl md:text-4xl text-on-primary font-bold">{currentCategoryData.banner}</h2>
        </div>
      </div>

      {/* Menu Grid Items */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-surface rounded-xl p-4 flex gap-4 border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden shrink-0 bg-surface-container relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h3 className="font-serif text-base md:text-lg text-primary font-bold leading-tight">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="bg-primary-container text-on-primary-container font-sans text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap uppercase">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-xs text-on-surface-variant line-clamp-2 md:line-clamp-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex justify-end items-center mt-3">
                  <div className="flex items-center gap-2 w-full">
                    <div className="h-px flex-grow border-b border-dashed border-outline/50"></div>
                    <span className="font-sans text-base font-bold text-primary shrink-0 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">
            info
          </span>
          <p className="font-sans text-sm text-on-surface-variant">Aradığınız kriterde ürün bulunamadı.</p>
        </div>
      )}
    </div>
  );
}

export default function Menu() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
      </div>
    }>
      <MenuContent />
    </Suspense>
  );
}
