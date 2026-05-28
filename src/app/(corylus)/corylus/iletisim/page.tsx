"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Genel Soru",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Reset form after a brief simulation
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "Genel Soru",
          message: "",
        });
        setSubmitted(false);
        alert("Mesajınız başarıyla gönderildi! En kısa sürede geri dönüş yapacağız.");
      }, 800);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 gap-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-4">
        <h1 className="font-serif text-3xl md:text-4xl text-primary font-bold">İletişim</h1>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-md">
          Soru, görüş, önerileriniz veya masa rezervasyonları için bizimle iletişime geçebilirsiniz.
        </p>
      </div>

      {/* Bento Grid Layout for Contact Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Address, Map & Quick info (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Map & Address Card */}
          <div className="bg-surface rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 flex flex-col hover:shadow-md transition-shadow">
            <div className="w-full h-52 bg-surface-variant relative overflow-hidden">
              <img
                alt="Map showing location"
                className="object-cover w-full h-full opacity-90 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjj6A3a6SbRUagb242bZw7i85BFGkS4n8B_gS1SV0KdDLIb5s16eBH9fNHsJHoFqLDtZfFk_szE7tl0lDGEC6BkT14EAv7ndc0fv21DkuaU4QkSTfHft0CgLRiS0PA6EzLYGrwWRDSPbk_RmzuUMR7g1RAVTuexCrdT8pzQDx9N0uO5KTxqwjuGOqAmQZanb5tyMONlw5x6ipwYPJMKO_W-ZXIHIx3HhZzel7GVTqQ7xsJpOFM4Ei-NBABEutDTdHwGaA6G0KGGjo"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
              {/* Pulsing indicator pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="absolute inline-flex h-8 w-8 rounded-full bg-secondary opacity-40 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white"></span>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary-container/10 p-3 rounded-full text-primary mt-1">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-serif text-lg text-primary font-bold">Adresimiz</h3>
                  <p className="font-sans text-sm text-on-surface-variant mt-1 leading-relaxed">
                    Çıtlakkale Mah. İnönü Cad. <br />
                    No:129, Giresun
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Phone */}
            <div className="bg-surface rounded-2xl p-5 shadow-sm border border-outline-variant/30 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-secondary text-3xl">call</span>
              <div>
                <h4 className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                  Telefon
                </h4>
                <p className="font-sans text-sm text-primary font-bold">0454 500 28 00</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-surface rounded-2xl p-5 shadow-sm border border-outline-variant/30 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-secondary text-3xl">schedule</span>
              <div>
                <h4 className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                  Çalışma Saatleri
                </h4>
                <p className="font-sans text-sm text-primary font-bold">08:00 - 22:00</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct CTA */}
          <a
            href="https://wa.me/904545002800"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] text-white py-4 px-6 rounded-2xl font-serif text-lg font-bold flex items-center justify-center gap-3 hover:bg-[#20ba59] transition-all hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-[#25D366]/20"
          >
            <span className="material-symbols-outlined">chat</span>
            WhatsApp'tan Sipariş Ver
          </a>
        </div>

        {/* Right Column: Contact Form (lg:col-span-7) */}
        <div className="lg:col-span-7 bg-surface rounded-2xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
          <h2 className="font-serif text-xl md:text-2xl text-primary font-bold mb-6">
            Bize Ulaşın
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-sans text-xs font-bold text-on-surface-variant uppercase">
                  Adınız Soyadınız *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm font-sans"
                  placeholder="Ahmet Yılmaz"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-sans text-xs font-bold text-on-surface-variant uppercase">
                  E-Posta Adresiniz *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm font-sans"
                  placeholder="ahmet@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="font-sans text-xs font-bold text-on-surface-variant uppercase">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm font-sans"
                  placeholder="0555 123 45 67"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="font-sans text-xs font-bold text-on-surface-variant uppercase">
                  Konu
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm font-sans"
                >
                  <option value="Genel Soru">Genel Soru / Görüş</option>
                  <option value="Rezervasyon">Rezervasyon Talebi</option>
                  <option value="Sikayet">Öneri / Şikayet</option>
                  <option value="Etkinlik">Özel Organizasyonlar</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-sans text-xs font-bold text-on-surface-variant uppercase">
                Mesajınız *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm font-sans resize-none"
                placeholder="Mesajınızı buraya yazınız..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="mt-2 w-full bg-primary text-on-primary py-3 rounded-lg font-sans font-bold hover:bg-primary-container transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitted ? "Gönderiliyor..." : "Mesajı Gönder"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
