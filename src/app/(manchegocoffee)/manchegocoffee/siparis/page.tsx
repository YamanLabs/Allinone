"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
}

interface CartItem extends OrderItem {
  quantity: number;
}

export default function Order() {
  // Available items for online order
  const orderItems: OrderItem[] = [
    {
      id: "o1",
      name: "Espresso",
      price: 65,
      desc: "Zengin aromalı klasik İtalyan espressosu.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0EMq0FOO12LcB9tbcMcHeWdbmMISvrKZtDKgGfPM_2FwMaRz_EjnyCM2OfBTNaATaw9VsP3ETiIJmui1MDwrOMgq0VqC7MQraBoG0IUbFO7gpLKuc1N43guIN9yPDNVQvea5YRXwerh57KV_aH1qizTOw4fSJcYyca4Xb9aFQ5pKxS78RMVM_kED4s6AGbjNv0bHxoOV6D0f9jOMpUUTLqU1VJV7U4IvpTVPeOp1iSveOsKyvIsEXDLTtKMJ3S4vxk1rAWVNABSE",
    },
    {
      id: "o2",
      name: "Giresun Fındıklı Latte",
      price: 95,
      desc: "Yerel fındık parçacıkları ve özel fındık şurubu ile.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOZjRPdbO4e052-KYD1Ga-cIT2o4HgjZ3f7Y_fJWOQnzJhnrtomG7yxjDND6xNoFAQH-HucvZXF1jazGJXjtMq7CyyC3bJ4QpmFd66FXosMwGyQ61AD2-D3gmFf5Xm1aXr472Mxi5P__QNDpo4mB7qOckFP_cu5UxqyBL7-GO2jTd_7uBvJc3Vg79ckzTiJx2e_VAyE23BaKEp1TtqlZcMlQd3TG7a1dgj-LgOv_TMWSaJ2fVWb1cbLpZAljj4K5iFnq-pKWfHlvo",
    },
    {
      id: "o3",
      name: "Iced Latte",
      price: 95,
      desc: "Double shot espresso, soğuk süt ve bol buz.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1hi7onjS-Q-ixhJ4FLkMA-KAwwxde7uWqY5dPbYddcA116sTLmoZHf95GMhxvdCz70q4ebzLq3SNIf2sUCk19gMcmyAvLkrQHSKVyw8k5a1BSHt9CLjRewOgyRePeKOoecd9p5Rp6stvkBliEn6DEiaLSMIXcgjQzZ3EoWqP9zIGqH943XWZSiY5tkZvZrQxO9GADq7JT6Y-F4EfHQvBiofyuadMWDtdyuvQbmuoPXQ8tF1lINa-viFl_KhBhkIbJVL6VNahxzf8",
    },
    {
      id: "o4",
      name: "San Sebastian Cheesecake",
      price: 140,
      desc: "İçi akışkan, üzeri karamelize Bask cheesecake.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWUbgoi9yIHkaiNesbQK_zgpCCtl6H9V64GhuYq--m-LpwwWchG33qXMCQqXrGtBAOrInuwha_NqnLBPGqOI_u2hs0vpcliDtyNezKHeQwEfVgE7mh3ZA9P21BFCKgaMrm2bdtH4-frK2Sswn1KjA83wGBR3gL4KHebOWNiuwDRzNut3fWchoip71v8BeLQjHXsvwvzkoUKs72zkpApi6p6z3DPpSTLIckL2pFyg2XNFNSLWOk6KX2lemG3xViW3teXolg6X46XXY",
    },
    {
      id: "o5",
      name: "Tereyağlı Kruvasan",
      price: 75,
      desc: "Fransız tereyağlı taze çıtır kruvasan.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHtEcitwtiMvBnEspNDM4eBtYQ5508VI8cLXB_JIt_TaklnAxRCD504obeXSuC5-YXMZ4xZeUhjVBQ3G7wlIb7MsVjj-hTWWsAR1YTA-achNLImxxdVx9AmjBFqGGu4cWxhKPdkLVNhchsOn1MsCSVqAE781o_dmcHp3zv96TivptD4wU_BfHMz9UsJp4UdxtJueYS5riW2Hzyaa5X7TmwWoygOVuNH8K66d-9wEfV4_1Qrvf0VTE2aHu2JKmVJZEMBo5T7542PE0",
    },
  ];

  // State Management
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  
  // Checkout Form State
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
    payment: "credit_card",
  });

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  // Cart Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 200 || subtotal === 0 ? 0 : 25;
  const total = subtotal + deliveryFee;

  // Show dynamic toast
  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3000);
  };

  // Add Item
  const addToCart = (item: OrderItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.id === item.id);
      if (existing) {
        return prevCart.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    triggerToast(`${item.name} sepete eklendi!`);
  };

  // Remove Item
  const removeFromCart = (id: string) => {
    const item = cart.find((ci) => ci.id === id);
    if (!item) return;

    setCart((prevCart) => {
      if (item.quantity === 1) {
        return prevCart.filter((ci) => ci.id !== id);
      }
      return prevCart.map((ci) =>
        ci.id === id ? { ...ci, quantity: ci.quantity - 1 } : ci
      );
    });
    triggerToast(`${item.name} sepetten çıkarıldı.`);
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
    triggerToast("Sepet temizlendi.");
  };

  // Handle Checkout Submit
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true);
    setCart([]);
    // Reset forms
    setCheckoutForm({
      name: "",
      phone: "",
      address: "",
      notes: "",
      payment: "credit_card",
    });
  };

  // Handle Contact Submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    setContactForm({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => setContactSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* 1. Hero Section */}
      <section className="relative bg-surface-container py-16 md:py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-15 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApZWvVpJUU-FjQc4JaOOO3ihyRyccYOPunENCh7eD0iVGd-lEXJLO0on1B5hMQF9WpCw821t5o4d8Y-I4i4ytutCQpWW4a_FjmMOPzy4clEgORzc0drxsQ_yqcna5qYHtoQ9LBsIMKJbrPiwBET47SSTsWLjTyfLpLDl5L-wLL5BeiX5hmA1DT26ntqsAGKky6X5Mp1_qZC9aprBwLgdR9mmph8xkuFWXQlitES0k1nV_rgcM9c6YIeYQ7M55Wg4yvuc_3nRzkH-I')" }}
        ></div>
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <span className="font-label-sm text-terracotta uppercase tracking-wider block mb-2">
            Hızlı &amp; Taze Kahve Deneyimi
          </span>
          <h1 className="font-headline-xl text-headline-xl text-primary mb-4">
            Sipariş &amp; İletişim
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Taptaze Manchego lezzetleri nerede olursanız olun sizinle. İster hemen siparişinizi oluşturun, ister bizimle iletişime geçin.
          </p>
        </div>
      </section>

      {/* 2. Main Order Section */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-20 md:bottom-8 right-8 bg-espresso text-white font-label-md text-sm px-6 py-3.5 rounded-xl shadow-level-2 z-50 animate-fade-in-up border border-outline-variant/20 flex items-center gap-2">
            <span className="material-symbols-outlined text-terracotta">check_circle</span>
            <span>{toastMessage}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Menu Item Selector (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-level-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-terracotta text-3xl">
                  shopping_bag
                </span>
                <h2 className="font-headline-md text-headline-md text-primary font-bold">
                  Hemen Sipariş Ver
                </h2>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant mb-8">
                İstediğiniz ürünleri sepetinize ekleyerek hızlıca adresinize sipariş verebilirsiniz. Giresun içi ortalama teslimat süresi 25-35 dakikadır.
              </p>

              {/* Order Items List */}
              <div className="space-y-4">
                {orderItems.map((item) => {
                  const cartItem = cart.find((ci) => ci.id === item.id);
                  const qty = cartItem ? cartItem.quantity : 0;
                  
                  return (
                    <div
                      key={item.id}
                      className="bg-background rounded-xl p-4 border border-outline-variant/35 flex flex-col sm:flex-row justify-between items-center gap-4 hover:border-terracotta/40 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-headline-md text-base text-primary font-bold mb-0.5">
                            {item.name}
                          </h3>
                          <p className="font-body-md text-xs text-on-surface-variant leading-relaxed line-clamp-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                        <span className="font-label-md text-terracotta font-bold text-base">
                          ₺{item.price}
                        </span>

                        {qty > 0 ? (
                          <div className="flex items-center gap-3 bg-surface-container rounded-lg p-1.5 border border-outline-variant/20">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="w-8 h-8 rounded bg-background flex items-center justify-center text-primary font-bold hover:bg-terracotta hover:text-white transition-colors cursor-pointer"
                            >
                              -
                            </button>
                            <span className="font-label-md text-sm font-semibold w-6 text-center text-primary">
                              {qty}
                            </span>
                            <button
                              onClick={() => addToCart(item)}
                              className="w-8 h-8 rounded bg-background flex items-center justify-center text-primary font-bold hover:bg-terracotta hover:text-white transition-colors cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item)}
                            className="w-full sm:w-auto bg-espresso text-white font-label-sm px-4 py-2.5 rounded-lg hover:bg-terracotta transition-colors flex items-center justify-center gap-1.5 text-xs font-semibold cursor-pointer active:scale-95 shadow-sm"
                          >
                            <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                            Ekle
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delivery Platforms Card (Stitch Component Integration) */}
            <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-level-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-terracotta text-3xl">
                  local_shipping
                </span>
                <h2 className="font-headline-md text-headline-md text-primary font-bold">
                  Yemek Platformları
                </h2>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant mb-6">
                Dilerseniz siparişlerinizi Yemeksepeti veya Getir üzerinden de hızlıca verebilir ya da WhatsApp sipariş hattımızla iletişime geçebilirsiniz.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.yemeksepeti.com"
                  target="_blank"
                  className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-terracotta bg-background hover:bg-surface transition-all cursor-pointer"
                >
                  <span className="font-label-md text-sm text-on-surface group-hover:text-terracotta font-semibold">
                    Yemeksepeti
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-terracotta transition-transform group-hover:translate-x-1 duration-200">
                    arrow_forward
                  </span>
                </a>
                
                <a
                  href="https://www.getir.com"
                  target="_blank"
                  className="group flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:border-terracotta bg-background hover:bg-surface transition-all cursor-pointer"
                >
                  <span className="font-label-md text-sm text-on-surface group-hover:text-terracotta font-semibold">
                    GetirYemek
                  </span>
                  <span className="material-symbols-outlined text-outline group-hover:text-terracotta transition-transform group-hover:translate-x-1 duration-200">
                    arrow_forward
                  </span>
                </a>
                
                <a
                  href="https://wa.me/905555555555"
                  target="_blank"
                  className="sm:col-span-2 flex items-center justify-center gap-2 p-4 rounded-xl bg-forest-green text-white hover:bg-forest-green/90 transition-colors shadow-sm font-semibold cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span className="font-label-md text-sm">WhatsApp Hızlı Sipariş Hattı</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Checkout & Cart Simulation (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Basket Simulation */}
            <div className="bg-espresso text-white p-6 md:p-8 rounded-2xl shadow-level-2 border border-primary-container flex flex-col justify-between sticky top-24">
              <div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-terracotta">
                      shopping_cart
                    </span>
                    <h2 className="font-headline-md text-xl font-bold text-white">
                      Sepetim
                    </h2>
                  </div>
                  {cart.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-xs text-cream hover:text-white transition-colors cursor-pointer underline decoration-dotted"
                    >
                      Temizle
                    </button>
                  )}
                </div>

                {cart.length === 0 ? (
                  <div className="py-12 text-center flex flex-col items-center justify-center gap-4 text-cream/60">
                    <span className="material-symbols-outlined text-5xl">
                      shopping_cart_checkout
                    </span>
                    <p className="font-body-md text-sm leading-relaxed max-w-[250px]">
                      Sepetiniz boş. Menüden kahve ve lezzetli tatlılar ekleyerek başlayın!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 hide-scrollbar">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center text-sm border-b border-white/5 pb-3"
                      >
                        <div className="flex flex-col gap-0.5">
                          <span className="font-semibold text-white">{item.name}</span>
                          <span className="text-xs text-cream/70">
                            {item.quantity} adet × ₺{item.price}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-cream">
                            ₺{item.price * item.quantity}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-white/40 hover:text-white transition-colors cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                  <div className="flex justify-between text-sm text-cream/80">
                    <span>Ara Toplam</span>
                    <span>₺{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm text-cream/80">
                    <span>Kurye Teslimat Ücreti</span>
                    <span>{deliveryFee === 0 ? "Ücretsiz" : `₺${deliveryFee}`}</span>
                  </div>
                  {deliveryFee > 0 && (
                    <p className="text-[10px] text-cream/50 italic">
                      * ₺200 üzeri siparişlerde teslimat ücretsizdir!
                    </p>
                  )}
                  <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/5">
                    <span>Genel Toplam</span>
                    <span className="text-terracotta text-lg">₺{total}</span>
                  </div>

                  <button
                    onClick={() => setCheckoutModalOpen(true)}
                    className="w-full mt-4 bg-terracotta text-white font-label-md py-3.5 rounded-xl hover:bg-terracotta/90 transition-all duration-300 font-bold shadow-lg flex items-center justify-center gap-2 cursor-pointer btn-hover active:scale-95"
                  >
                    <span>Siparişi Tamamla</span>
                    <span className="material-symbols-outlined text-[20px]">
                      chevron_right
                    </span>
                  </button>
                </div>
              )}
            </div>
            
            {/* Contact Feedback Form (Stitch Component Integration) */}
            <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 shadow-level-1 border border-outline-variant/30">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-terracotta text-3xl">
                  mail
                </span>
                <h2 className="font-headline-md text-headline-md text-primary font-bold">
                  Bize Ulaşın
                </h2>
              </div>

              {contactSuccess ? (
                <div className="bg-forest-green/10 border border-forest-green/20 text-forest-green p-6 rounded-xl flex flex-col items-center text-center gap-3 animate-fade-in-up">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                  <h3 className="font-label-md font-bold text-sm">Mesajınız Gönderildi</h3>
                  <p className="font-body-md text-xs leading-relaxed max-w-[280px]">
                    Görüşleriniz bizim için çok değerli. En kısa sürede e-posta adresiniz üzerinden geri dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block font-label-sm text-xs text-on-surface-variant mb-1" htmlFor="c-name">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="c-name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-background border border-outline-variant/50 rounded-lg px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors"
                      placeholder="Örn. Ahmet Yılmaz"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-xs text-on-surface-variant mb-1" htmlFor="c-email">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="c-email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-background border border-outline-variant/50 rounded-lg px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors"
                      placeholder="ahmetyilmaz@mail.com"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-xs text-on-surface-variant mb-1" htmlFor="c-message">
                      Mesajınız
                    </label>
                    <textarea
                      id="c-message"
                      required
                      rows={3}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-background border border-outline-variant/50 rounded-lg px-4 py-2.5 font-body-md text-sm text-on-surface focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors resize-none"
                      placeholder="Görüş, öneri veya şikayetlerinizi buraya yazabilirsiniz..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-espresso text-cream font-label-md py-3 rounded-lg hover:bg-terracotta hover:text-white transition-all shadow-sm font-semibold cursor-pointer active:scale-95"
                  >
                    Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 3. Direct Contact Bottom Grid */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex flex-col items-center justify-center text-center group hover:bg-surface-variant/40 transition-colors">
            <span className="material-symbols-outlined text-4xl text-terracotta mb-3 group-hover:scale-110 transition-transform duration-300">
              call
            </span>
            <h3 className="font-label-md text-sm text-primary font-bold mb-2">Hızlı İletişim</h3>
            <a
              href="tel:+905555555555"
              className="font-headline-md text-headline-md text-primary hover:text-terracotta transition-colors font-bold text-lg"
            >
              +90 (555) 555 55 55
            </a>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex flex-col items-center justify-center text-center group hover:bg-surface-variant/40 transition-colors">
            <span className="material-symbols-outlined text-4xl text-terracotta mb-3 group-hover:scale-110 transition-transform duration-300">
              location_on
            </span>
            <h3 className="font-label-md text-sm text-primary font-bold mb-2">Konumumuz</h3>
            <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
              Atatürk Bulvarı, Merkez Mahallesi <br /> Giresun, Türkiye
            </p>
          </div>

          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-4xl text-terracotta mb-3">
              share
            </span>
            <h3 className="font-label-md text-sm text-primary font-bold mb-4">Bizi Takip Edin</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-espresso hover:bg-terracotta hover:text-white transition-all shadow-sm font-semibold text-xs border border-outline-variant/30"
              >
                IG
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-espresso hover:bg-terracotta hover:text-white transition-all shadow-sm font-semibold text-xs border border-outline-variant/30"
              >
                FB
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-espresso hover:bg-terracotta hover:text-white transition-all shadow-sm font-semibold text-xs border border-outline-variant/30"
              >
                X
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Checkout Modal Dialog */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background max-w-md w-full rounded-2xl shadow-level-2 border border-outline-variant/30 overflow-hidden animate-fade-in-up">
            
            {/* Header */}
            <div className="bg-espresso text-white p-6 flex justify-between items-center border-b border-primary-container">
              <h3 className="font-headline-md text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-terracotta">receipt_long</span>
                Siparişi Tamamla
              </h3>
              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="text-white/60 hover:text-white text-2xl leading-none cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Content Body */}
            {orderSuccess ? (
              <div className="p-8 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center mb-2 animate-bounce">
                  <span className="material-symbols-outlined text-4xl">check</span>
                </div>
                <h4 className="font-headline-md text-xl font-bold text-primary">Siparişiniz Alındı!</h4>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Harika! Kahveniz hazırlanmaya başlandı. En kısa sürede sıcak ve taze olarak kapınızda olacak.
                </p>
                <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 w-full text-left mt-2">
                  <p className="text-xs text-on-surface-variant font-medium mb-1">Teslimat Bilgisi:</p>
                  <p className="text-sm font-bold text-primary">Tahmini Varış: 25 - 35 dakika</p>
                </div>
                <button
                  onClick={() => {
                    setCheckoutModalOpen(false);
                    setOrderSuccess(false);
                  }}
                  className="w-full mt-4 bg-terracotta text-white py-3 rounded-xl font-bold hover:bg-espresso transition-colors cursor-pointer"
                >
                  Kapat
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckout} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1" htmlFor="cust-name">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="cust-name"
                    required
                    value={checkoutForm.name}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors"
                    placeholder="Ad Soyad"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1" htmlFor="cust-phone">
                    Telefon Numarası
                  </label>
                  <input
                    type="tel"
                    id="cust-phone"
                    required
                    value={checkoutForm.phone}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors"
                    placeholder="0555 555 55 55"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1" htmlFor="cust-address">
                    Teslimat Adresi
                  </label>
                  <textarea
                    id="cust-address"
                    required
                    rows={2}
                    value={checkoutForm.address}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors resize-none"
                    placeholder="Sokak, mahalle, bina no ve daire..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1" htmlFor="cust-notes">
                    Sipariş Notu (İsteğe Bağlı)
                  </label>
                  <input
                    type="text"
                    id="cust-notes"
                    value={checkoutForm.notes}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, notes: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors"
                    placeholder="Zil çalmasın, temassız teslimat vb..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1">
                    Ödeme Yöntemi
                  </label>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs font-semibold ${checkoutForm.payment === "credit_card" ? "border-terracotta bg-terracotta/5 text-primary" : "border-outline-variant/40 bg-surface-container-low text-on-surface-variant"}`}>
                      <input
                        type="radio"
                        name="payment"
                        value="credit_card"
                        checked={checkoutForm.payment === "credit_card"}
                        onChange={() => setCheckoutForm({ ...checkoutForm, payment: "credit_card" })}
                        className="accent-terracotta hidden"
                      />
                      <span className="material-symbols-outlined text-[18px]">credit_card</span>
                      <span>Kart ile Ödeme</span>
                    </label>
                    <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs font-semibold ${checkoutForm.payment === "cash" ? "border-terracotta bg-terracotta/5 text-primary" : "border-outline-variant/40 bg-surface-container-low text-on-surface-variant"}`}>
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={checkoutForm.payment === "cash"}
                        onChange={() => setCheckoutForm({ ...checkoutForm, payment: "cash" })}
                        className="accent-terracotta hidden"
                      />
                      <span className="material-symbols-outlined text-[18px]">payments</span>
                      <span>Kapıda Nakit</span>
                    </label>
                  </div>
                </div>

                <div className="pt-2 border-t border-outline-variant/35 flex justify-between items-center text-sm font-bold text-primary">
                  <span>Ödenecek Tutar</span>
                  <span className="text-terracotta text-base">₺{total}</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-terracotta text-white py-3.5 rounded-xl font-bold hover:bg-espresso transition-colors mt-4 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                  <span>Siparişi Tamamla (₺{total})</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
