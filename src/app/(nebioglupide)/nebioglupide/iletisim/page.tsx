"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Sipariş Durumu",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        subject: "Sipariş Durumu",
        message: "",
      });
    }, 4000);
  };

  return (
    <main className="flex-grow py-12 relative z-10">
      {/* Background texture */}
      <div className="fixed inset-0 texture-overlay z-0"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-10">
        
        {/* Page Header */}
        <header className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-4 text-3xl md:text-5xl font-bold">
            Bize Ulaşın
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant text-sm md:text-lg leading-relaxed">
            Siparişleriniz, rezervasyonlarınız ve her türlü sorunuz için bizimle iletişime geçebilirsiniz. Usta ellerden çıkan lezzetler bir telefon uzağınızda.
          </p>
        </header>

        {/* Quick Actions (Mobile Focus, shown responsively) */}
        <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto lg:hidden mb-8">
          <a 
            className="flex flex-col items-center justify-center gap-2 bg-surface-container-lowest border border-outline text-primary py-4 px-2 rounded-xl shadow-sm active:bg-surface-variant transition-colors group" 
            href="https://maps.google.com/?q=Giresun,Merkez,Seldegirmeni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">
              directions
            </span>
            <span className="font-label-md text-xs md:text-sm text-center">Yol Tarifi Al</span>
          </a>
          <a 
            className="flex flex-col items-center justify-center gap-2 bg-mustard-yellow hover:bg-tertiary-fixed-dim text-charcoal py-4 px-2 rounded-xl shadow-sm active:bg-tertiary transition-colors group" 
            href="tel:04540000000"
          >
            <span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">
              phone_in_talk
            </span>
            <span className="font-label-md text-xs md:text-sm text-center">Hemen Ara</span>
          </a>
        </div>

        {/* Main Grid: Map & Details/Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter w-full">
          
          {/* Left Side: Map with Pin */}
          <div className="bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm h-[300px] sm:h-[400px] lg:h-auto relative">
            <Image 
              className="absolute inset-0 w-full h-full object-cover opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2G5PZWEzxIfnZKEL_2YazB6mkDVkMt554fKp8_OZkIi4FBn84_HQeBjGusaoEScZTlTJpJevL18fEsMnOyKXtmsQ4uYoAKuXXCYzdAZNYV53R02B7yr3IdMlJVWN68t1ljbQftqgksFUdvsjIz5GMUJQOmohSQbSjP05ubw0XBKMfaBB0zLXh8wplI-ZvTG2vrCROxUa88AgLK5xhFPcknXCqEcB6hSbVHbAs14ePSQCcrydrXXT1S2kcvnbVfrLTw0hpFnz81g"
              alt="Giresun Merkez Haritası"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Animated Pin */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-primary text-on-primary rounded-full p-2.5 shadow-lg -translate-y-4 animate-bounce">
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
              </div>
            </div>

            {/* Address Badge Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/80 to-transparent flex items-end p-6">
              <div className="bg-surface/90 backdrop-blur-sm p-4 rounded-lg shadow border border-outline-variant/50 max-w-sm">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    location_on
                  </span>
                  <div>
                    <h3 className="font-label-md text-sm text-on-surface font-bold mb-1">NEBİOĞLU Kebap &amp; Lahmacun</h3>
                    <p className="font-body-md text-xs md:text-sm text-on-surface-variant">Merkez/Seldeğirmeni, Giresun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Info & Form */}
          <div className="flex flex-col gap-8">
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute inset-0 texture-paper opacity-40 pointer-events-none"></div>
                <span className="material-symbols-outlined text-secondary text-3xl mb-1">
                  schedule
                </span>
                <h3 className="font-headline-md text-on-surface text-base md:text-lg font-bold">
                  Çalışma Saatleri
                </h3>
                <p className="font-body-md text-primary font-bold text-base md:text-lg">
                  08:00 - 22:00
                </p>
                <p className="font-body-md text-on-surface-variant text-xs mt-1">
                  Haftanın her günü sıcak hizmetinizdeyiz.
                </p>
              </div>

              <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute inset-0 texture-paper opacity-40 pointer-events-none"></div>
                <span className="material-symbols-outlined text-secondary text-3xl mb-1">
                  call
                </span>
                <h3 className="font-headline-md text-on-surface text-base md:text-lg font-bold">
                  Sipariş &amp; İletişim
                </h3>
                <p className="font-body-md text-primary font-bold text-lg md:text-xl tracking-wider">
                  0(454) 000 00 00
                </p>
                <p className="font-body-md text-on-surface-variant text-xs mt-1">
                  Paket servis ve rezervasyon için arayabilirsiniz.
                </p>
              </div>
            </div>

            {/* Delivery Area Info */}
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3 text-primary">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  two_wheeler
                </span>
                <h3 className="font-headline-md text-base md:text-lg font-bold">Paket Servis Bilgisi</h3>
              </div>
              <p className="font-body-md text-on-surface-variant text-sm mb-4 leading-relaxed">
                Giresun Merkez ve yakın çevre mahallelerine özel termal yalıtımlı çantalarımızla sıcak ve hızlı teslimat sağlıyoruz.
              </p>
              <div className="flex justify-between items-center bg-surface p-3 rounded-lg border border-outline-variant/20">
                <span className="font-label-md text-xs md:text-sm text-on-surface-variant">Minimum Sipariş Tutarı</span>
                <span className="font-label-md text-sm md:text-base text-primary font-bold">150 ₺</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-surface p-6 md:p-8 rounded-xl border border-outline-variant/30 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary"></div>
              
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-bounce">
                    <span className="material-symbols-outlined text-4xl">check</span>
                  </div>
                  <h3 className="font-headline-md text-green-700 text-xl font-bold">Mesajınız İletildi!</h3>
                  <p className="font-body-md text-on-surface-variant text-sm">
                    Mesajınız alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-headline-md text-primary mb-6 text-xl font-bold">Bize Mesaj Gönderin</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-xs text-on-surface-variant font-bold" htmlFor="name">Ad Soyad</label>
                        <input 
                          className="bg-surface-container-lowest border border-outline-variant rounded px-4 py-2 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors" 
                          id="name" 
                          placeholder="Ahmet Yılmaz" 
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-md text-xs text-on-surface-variant font-bold" htmlFor="phone">Telefon Numarası</label>
                        <input 
                          className="bg-surface-container-lowest border border-outline-variant rounded px-4 py-2 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors" 
                          id="phone" 
                          placeholder="05XX XXX XX XX" 
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-xs text-on-surface-variant font-bold" htmlFor="subject">Konu</label>
                      <select 
                        className="bg-surface-container-lowest border border-outline-variant rounded px-4 py-2 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors" 
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      >
                        <option>Sipariş Durumu</option>
                        <option>Geri Bildirim / Şikayet</option>
                        <option>Toplu Sipariş Talebi</option>
                        <option>Diğer</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-xs text-on-surface-variant font-bold" htmlFor="message">Mesajınız</label>
                      <textarea 
                        className="bg-surface-container-lowest border border-outline-variant rounded px-4 py-2 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors resize-none" 
                        id="message" 
                        placeholder="Mesajınızı buraya yazın..." 
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button 
                      className="mt-4 bg-[#F1C40F] hover:bg-[#d4ac0d] text-[#2D2D2D] font-bold py-3 px-6 rounded font-label-md text-sm shadow-sm w-full sm:w-auto self-end flex items-center justify-center gap-2 cursor-pointer scale-95 active:scale-90 transition-transform" 
                      type="submit"
                    >
                      <span>Gönder</span>
                      <span className="material-symbols-outlined text-sm">send</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
