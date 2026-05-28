"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image?: string;
  altText: string;
}

interface CartItem {
  item: MenuItem;
  quantity: number;
}

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("tümü");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const categories = [
    { id: "tümü", name: "Tüm Menü" },
    { id: "kebaplar", name: "Kebaplar" },
    { id: "lahmacun-pide", name: "Lahmacun & Pide" },
    { id: "mezeler", name: "Mezeler" },
    { id: "tatlilar", name: "Tatlılar" },
    { id: "icecekler", name: "İçecekler" },
  ];

  const menuItems: MenuItem[] = [
    {
      id: "adana-kebap",
      name: "Zırh Kıyma Adana Kebap",
      category: "kebaplar",
      price: 280,
      description: "Acılı zırh kıyması, közlenmiş domates, biber ve sumaklı soğan ile geleneksel lezzet.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2kK9LnpsbYsRwVatolQPAbgH1IcaQMxfsl1Ob3_1-BExm7JGno5PUO5rlmC-485E_ddNkSyfJVbLB5fikJVLtkLDiULLUWJlL0I13VBOijq1r97zPYoKGt7R7Qs9204SZcPZY4OMHrOuz6ZQd8pCo6w9jCxtKzCZy2Cvf9PLoRRLvc6STKKkksgd0RzwM6IKgOI0bN4CZJeoyLbLsLNienMiPk-vtoqVlqCzSoSnFzMU6s2ztShQ_2T1sboYtpIt0Mb7HzzyZow",
      altText: "Adana Kebap"
    },
    {
      id: "urfa-kebap",
      name: "Klasik Urfa Kebap",
      category: "kebaplar",
      price: 280,
      description: "Acısız özel harman kıyma, közlenmiş domates, biber ve ezme salata eşliğinde.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5Qcv2xPQmvoVnfgTRB87YP_aMkwLmgmer5SnsVZCdhTgUUsLajY6CRBbxJWcWIM6r-PnsWDlbgDyFsbI7xu7G_fm4FMamV133Wiw_1OuIus2KPhNcWKny_CES17AE-_QrHWCozmv4nONtfAAghJmJLdREdmFUSW_NvK0oaBNAwz9YixRdn8CarLaPhFf8HP2LRpizAG1hpX9iSHvqzSH-tX2B0XyhOQeMJps4X4n--K7LsU38pIIkY7j5ZMztOCYUYo_tmoDgXQ",
      altText: "Urfa Kebap"
    },
    {
      id: "kuzu-sis",
      name: "Terbiyeli Kuzu Şiş",
      category: "kebaplar",
      price: 320,
      description: "Özel sosla terbiye edilmiş yumuşacık kuzu eti, köz sebzeler ve bulgur pilavı ile.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPY9FfLj0kd9e7QvNUHgdSRx2g28xaAKr0RW_tWOFx7x0vQVzyP13xUt3eDFJyimHBAHjTZNHvtOp625X31dSYyWAyZlb6xORzA_ZfRrTP2JWhABEJYHfA6km4UMSlCacmDaG6dUASt9vp_0dN_DwCKppCARsF45EY5CooBEj74aANEeo9OYABhEW30A-sLV0JBS6lhJVVeJNOX5OZL8BAOpCmwoIYjWBlwNEP_WIqqgk3S1Tpu8LzCJr7LhNi88P-Z2bRtrhzzw",
      altText: "Kuzu Şiş"
    },
    {
      id: "ali-nazik",
      name: "Usta İşi Ali Nazik",
      category: "kebaplar",
      price: 300,
      description: "Közlenmiş patlıcanlı süzme yoğurt yatağında, özel tereyağlı zırh kıyması.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9-ur5DxkQvsLxgNNSbmmb5oNU8DXhVpNrFqgppyYK9ke2_aiXvSfyARMzVJtl0s0RF3xiU-_poN1jSJ41ov7Fezqez7iKl0sYoo4j8NAJV1aql4XurvwXWK53cKV_U__bJNFDEZo7DLucC5JaW-aEWHFkANaqZ9kk8SMz0Jw0-lQ9RvZmHwN8f8G879zWJ2biJe0MBVeezbIzjm_P7hAksg4nMO4Q6R5dqgbeLQ5H8YX49FbxX_N2iinnt0q_CFxN5r2vxQkUpA",
      altText: "Ali Nazik"
    },
    {
      id: "citir-lahmacun",
      name: "Çıtır Lahmacun",
      category: "lahmacun-pide",
      price: 80,
      description: "Odun ateşinde pişmiş incecik hamur, bol kıymalı ve sebzeli geleneksel harç.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvq-cosO4exugSMnLrA1W9mMKnUC0G2InlNWcUf0tcsMMxaGYqdUgqxnKHeM1Aex_5SAJpYxL8k0q9RMAVWVjVPaWGd6q0ngHadojYZqLw2ZWeQvzw6peJmaGymTM5MrLKjkO3u1hpAETf7jF9yqMZXV75m0EiVM-YWoVrhNhMjCFdjxS8Oit5xShLJnVvpktnQXoz2EJKBmA4YszEGSX7GN7F2uOhFo0DueMTkE1KnGdujgsqfQ7tR9iYrkp7TR5ltJ9Gpj50gg",
      altText: "Çıtır Lahmacun"
    },
    {
      id: "antep-lahmacun",
      name: "Antep Lahmacun",
      category: "lahmacun-pide",
      price: 90,
      description: "Bol sarımsaklı ve acılı Antep usulü ince lahmacun, yeşillik ve limon ile.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-xPx3oYoDjcujD3St9pPGstPaTtOgKB1TwWY3rZangA_hjlZRSnwblnR95x_RUmHgKWzJsux_2L22B6rdKfs6hH_W58VivIM_6pN5XMzLHf5iRNV9TsrFAyPSISZrRnBYpiA_fQlxeUHtMQHRy7GfoiFMfsEAMEY-KIwE5hy9_9WDkjsBlwM43LxONJcSDNZysAL1JXYORVmjKN8zrtoQdiu8LqCcw4UX99hWRY7wLh-5Jk2DmiOU0tbFinKK5jk241gc92xJ9A",
      altText: "Antep Lahmacun"
    },
    {
      id: "kasarli-pide",
      name: "Karadeniz Kaşarlı Pide",
      category: "lahmacun-pide",
      price: 160,
      description: "Taş fırında çıtır çıtır pişen, bol erimiş kaşar peyniri ve tereyağı dolgulu pide.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8PYar0_LkTr2uhpTExn6aLBG1FWFaSutrMW76xBIXgoDh53xjW2XbRuZiP7pC49vf6h2lfyHIfIrDJleclTsnQdFx0Li1vCyR4PEA3Q7LbEePIjMm196PzDLsk_v8TZY7cTTD-iIqXGFEfI5vLgFEsZWWWB3K_e_weEvoksNHnBPocecpLQ0b2KgGyeEs5Po0rQjLKvWTHxpfTTuR9XtybSo2Y-NSMgdbqP1znulkxeIlwm77iqZKzl_wUJsK5kW2j05R3iWPPQ",
      altText: "Kaşarlı Pide"
    },
    {
      id: "gavurdagi-salatasi",
      name: "Gavurdağı Salatası",
      category: "mezeler",
      price: 100,
      description: "İnce kıyılmış domates, salatalık, taze soğan, maydanoz, bol ceviz içi ve nar ekşisi sosu ile.",
      altText: "Gavurdağı Salatası"
    },
    {
      id: "humus",
      name: "Zeytinyağlı Humus",
      category: "mezeler",
      price: 90,
      description: "Nohut, tahin, limon, sarımsak ve sızma zeytinyağı ile hazırlanan geleneksel meze.",
      altText: "Humus"
    },
    {
      id: "haydari",
      name: "Süzme Yoğurtlu Haydari",
      category: "mezeler",
      price: 80,
      description: "Süzme yoğurt, dereotu, taze nane, sarımsak ve kızdırılmış tereyağı esansı ile.",
      altText: "Haydari"
    },
    {
      id: "kunefe",
      name: "Fıstıklı Hatay Künefesi",
      category: "tatlilar",
      price: 160,
      description: "Közde pişen tel kadayıf, eriyen özel tuzsuz peynir, ılık şerbet ve bol Antep fıstığı ile.",
      altText: "Künefe"
    },
    {
      id: "sutlac",
      name: "Fırın Sütlaç",
      category: "tatlilar",
      price: 90,
      description: "Taş fırında üstü nar gibi kızarmış, buz gibi soğuk servis edilen hafif sütlü tatlı.",
      altText: "Fırın Sütlaç"
    },
    {
      id: "yayik-ayrani",
      name: "Ev Yapımı Yayık Ayranı",
      category: "icecekler",
      price: 40,
      description: "Bol köpüklü, soğuk ve taze ev yapımı ayran.",
      altText: "Yayık Ayranı"
    },
    {
      id: "salgam-suyu",
      name: "Adana Şalgam Suyu",
      category: "icecekler",
      price: 40,
      description: "Özel fermente edilmiş, acılı veya acısız geleneksel şalgam suyu seçeneği.",
      altText: "Şalgam Suyu"
    }
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "tümü" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) => i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, amount: number) => {
    setCart((prev) => 
      prev.map((i) => {
        if (i.item.id === itemId) {
          const newQty = i.quantity + amount;
          return newQty > 0 ? { ...i, quantity: newQty } : i;
        }
        return i;
      })
    );
  };

  const totalCartItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalCartPrice = cart.reduce((acc, curr) => acc + (curr.item.price * curr.quantity), 0);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setCart([]);
    setTimeout(() => {
      setCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 4000);
  };

  return (
    <main className="flex-grow py-12 relative z-10">
      {/* Background overlay */}
      <div className="fixed inset-0 texture-overlay z-0"></div>

      {/* Header Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 md:mb-12 text-center relative z-10">
        <h1 className="font-headline-xl text-headline-xl text-primary mb-4 text-3xl md:text-5xl font-bold">
          Menümüz
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-lg">
          Ustalıkla hazırlanan geleneksel lezzetlerimiz, taptaze malzemeler ve özenle seçilmiş etlerle buluşuyor. Odun ateşinin sıcağını masanıza taşıyoruz.
        </p>
        
        <div className="rustic-divider mb-8">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            local_dining
          </span>
        </div>

        {/* Quick Action Button */}
        <div className="flex justify-center">
          <Link 
            href="/nebioglupide/iletisim" 
            className="border border-primary text-primary hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 px-6 py-3 rounded-full font-label-md text-label-md flex items-center gap-3 bg-surface shadow-sm text-sm"
          >
            <span className="material-symbols-outlined">delivery_dining</span>
            Paket Servis İçin Sipariş Ver
          </Link>
        </div>
      </section>

      {/* Sticky Categories Bar & Search */}
      <div className="sticky top-[73px] bg-background/95 backdrop-blur-md z-40 border-b border-outline-variant/30 py-3 mb-10 shadow-sm relative z-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Horizontal scroll Categories */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar w-full md:w-auto py-1 scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-label-md text-xs md:text-sm transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-primary text-on-primary shadow-sm font-bold"
                    : "bg-surface-container text-on-surface-variant border border-outline-variant/50 hover:bg-surface-container-high"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Yemek ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-full pl-10 pr-4 py-2 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 relative z-10">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-5xl text-outline mb-4">
              search_off
            </span>
            <p className="font-body-lg text-on-surface-variant">Aradığınız kriterlere uygun yemek bulunamadı.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {item.image ? (
                    <div className="h-48 md:h-56 overflow-hidden relative bg-surface-container-high">
                      <Image
                        src={item.image}
                        alt={item.altText}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="h-4 pointer-events-none"></div>
                  )}

                  <div className="p-5 md:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-md text-headline-md text-on-surface text-lg md:text-xl font-bold leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-label-md text-label-md text-secondary font-bold shrink-0 ml-2">
                        {item.price} ₺
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant text-xs md:text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 border border-outline text-on-surface hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 rounded font-label-md text-xs md:text-sm flex items-center justify-center gap-2 cursor-pointer scale-95 active:scale-90"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span> 
                    Sepete Ekle
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Floating Cart Button (Visible when cart has items) */}
      {totalCartItems > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 md:right-10 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-105 active:scale-95 transition-transform cursor-pointer border border-outline-variant/30"
          aria-label="Sepeti Aç"
        >
          <span className="material-symbols-outlined text-[28px]">
            shopping_basket
          </span>
          <span className="absolute -top-1 -right-1 bg-mustard-yellow text-charcoal font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-md animate-bounce">
            {totalCartItems}
          </span>
        </button>
      )}

      {/* Slide-over Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex overflow-hidden">
          {/* Backdrop overlay */}
          <div 
            className="absolute inset-0 bg-black/60 transition-opacity duration-300"
            onClick={() => setIsCartOpen(false)}
          ></div>

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-surface border-l border-outline-variant/30 shadow-2xl flex flex-col">
              
              {/* Drawer Header */}
              <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    shopping_basket
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-bold text-xl">
                    Siparişiniz
                  </h2>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-on-surface-variant hover:text-primary p-1 rounded-full hover:bg-surface-container-high transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Drawer Body (Items List) */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {checkoutSuccess ? (
                  <div className="text-center py-12 flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-pulse">
                      <span className="material-symbols-outlined text-4xl">check_circle</span>
                    </div>
                    <h3 className="font-headline-md text-green-700 text-xl font-bold">Siparişiniz Alındı!</h3>
                    <p className="font-body-md text-on-surface-variant text-sm max-w-xs">
                      Siparişiniz ulaştı. Sıcak sıcak hazırlanıp 30-45 dk içerisinde kapınızda olacaktır. Afiyet olsun!
                    </p>
                  </div>
                ) : cart.length === 0 ? (
                  <div className="text-center py-16 text-on-surface-variant">
                    <span className="material-symbols-outlined text-5xl text-outline mb-4 opacity-50">
                      shopping_cart_off
                    </span>
                    <p className="font-body-lg">Sepetiniz şu an boş.</p>
                    <p className="font-body-md text-xs mt-2 text-on-surface-variant/80">
                      Menümüzden dilediğiniz lezzetleri sepete ekleyebilirsiniz.
                    </p>
                  </div>
                ) : (
                  cart.map((cartItem) => (
                    <div 
                      key={cartItem.item.id} 
                      className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/30 shadow-sm flex gap-3 justify-between items-center animate-in fade-in duration-200"
                    >
                      <div className="flex-1">
                        <h4 className="font-label-md text-on-surface font-bold text-sm md:text-base leading-tight">
                          {cartItem.item.name}
                        </h4>
                        <span className="font-body-md text-xs text-on-surface-variant">
                          Birim Fiyat: {cartItem.item.price} ₺
                        </span>
                        <div className="flex items-center gap-2 mt-2">
                          <button 
                            onClick={() => updateQuantity(cartItem.item.id, -1)}
                            className="w-7 h-7 bg-surface-container-high hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors text-sm font-bold"
                          >
                            -
                          </button>
                          <span className="font-label-md text-sm font-bold w-6 text-center">
                            {cartItem.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(cartItem.item.id, 1)}
                            className="w-7 h-7 bg-surface-container-high hover:bg-primary hover:text-white rounded flex items-center justify-center transition-colors text-sm font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2 justify-between h-full">
                        <span className="font-label-md text-primary font-bold text-sm md:text-base">
                          {cartItem.item.price * cartItem.quantity} ₺
                        </span>
                        <button
                          onClick={() => removeFromCart(cartItem.item.id)}
                          className="text-red-500 hover:text-red-700 text-sm p-1 rounded hover:bg-red-50 transition-colors"
                          aria-label="Ürünü Sil"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            delete
                          </span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && !checkoutSuccess && (
                <div className="p-6 border-t border-outline-variant/20 bg-surface-container-low space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-body-lg text-on-surface-variant font-bold">Toplam Tutar:</span>
                    <span className="font-headline-md text-primary text-xl md:text-2xl font-bold">
                      {totalCartPrice} ₺
                    </span>
                  </div>

                  <div className="bg-[#F1C40F]/10 border border-[#F1C40F]/30 p-3 rounded text-xs text-on-surface-variant flex gap-2">
                    <span className="material-symbols-outlined text-[#2D2D2D] text-[18px]">
                      info
                    </span>
                    <span>
                      Minimum paket servis tutarı 150 ₺&apos;dir. Sıcak teslimat yapılır.
                    </span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={totalCartPrice < 150}
                    className={`w-full py-3.5 rounded font-bold font-label-md text-sm text-center shadow transition-all flex items-center justify-center gap-2 ${
                      totalCartPrice >= 150
                        ? "bg-primary text-white hover:bg-primary-container cursor-pointer scale-[0.98] hover:scale-100"
                        : "bg-surface-container-high text-on-surface-variant/50 cursor-not-allowed"
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      shopping_cart_checkout
                    </span>
                    {totalCartPrice >= 150 ? "Siparişi Tamamla" : `En az ${150 - totalCartPrice} ₺ eklemelisiniz`}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
