"use client";

import React, { useState } from "react";
import Navbar from "@/components/parkpidesalonu/Navbar";
import Footer from "@/components/parkpidesalonu/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24 pb-section-gap relative">
        {/* Texture Overlay from Stitch designs */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface via-transparent to-transparent opacity-50"></div>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-20">
          {/* Hero / Title */}
          <div className="text-center mb-16 pt-8">
            <h1 className="font-display text-headline-lg-mobile md:text-display-lg text-on-background font-bold mb-4">
              Bize Ulaşın
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Giresun'un geleneksel lezzeti için her zaman buradayız. Rezervasyon, sipariş veya sorularınız için aşağıdaki bilgilerden bize ulaşabilirsiniz.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Contact Info Cards (Left Column) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Address Card */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 relative overflow-hidden group hover:border-outline transition-colors duration-300">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed/20 rounded-full blur-xl group-hover:bg-primary-fixed/30 transition-colors"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      location_on
                    </span>
                  </div>
                  <div>
                    <h3 className="font-body text-title-md font-bold text-on-background mb-2">Adres</h3>
                    <p className="font-body text-body-md text-on-surface-variant">
                      Çıtlakkale Mahallesi
                      <br />
                      Merkez / Giresun
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 relative overflow-hidden group hover:border-outline transition-colors duration-300">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary-container/20 rounded-full blur-xl group-hover:bg-secondary-container/30 transition-colors"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      phone_in_talk
                    </span>
                  </div>
                  <div>
                    <h3 className="font-body text-title-md font-bold text-on-background mb-2">Telefon</h3>
                    <p className="font-body text-body-md text-on-surface-variant">
                      <a className="hover:text-primary transition-colors" href="tel:+90454XXXXXXX">
                        +90 454 XXX XX XX
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 relative overflow-hidden group hover:border-outline transition-colors duration-300">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary-container/20 rounded-full blur-xl group-hover:bg-tertiary-container/30 transition-colors"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      schedule
                    </span>
                  </div>
                  <div>
                    <h3 className="font-body text-title-md font-bold text-on-background mb-2">Çalışma Saatleri</h3>
                    <p className="font-body text-body-md text-on-surface-variant">
                      Her Gün
                      <br />
                      10:00 - 21:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form & Map Area (Right Column) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Map Container */}
              <div className="w-full h-80 md:h-96 bg-surface-variant rounded-lg overflow-hidden border border-outline-variant relative">
                <img
                  alt="Giresun Haritası"
                  className="w-full h-full object-cover opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAelBXHHptjTdw2VaZk-YPW9dupkW9pDyBq326XPBaMaLz3Bp09O7YAp1IeCcEafeaFkE3kyE0yUkFdz_UUudpOzsKSIxwa7UrazjFMGBQ6__7a0g4vQ_KgnD8RXjMnUM27Vv3F07Rgq5zIVaJbNt6_EhyXaAmoTCsy5oPJVs4WwA2bYZdVj78fbM1NNJ1gZ_sNfD2z8Z5qMLQDO8LBIHY8FxdLbKYtQ5hB2RDy1MX5M_u9r8WJfLMY2StmKhEtcmwyA7zvi6BKCCPW"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-surface-variant/50 backdrop-blur-sm pointer-events-none">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-primary text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                      map
                    </span>
                    <p className="font-body text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">
                      Giresun Merkez
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-6 md:p-8">
                <h3 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-background font-bold mb-6">
                  Mesaj Gönderin
                </h3>
                {submitted ? (
                  <div className="bg-primary/10 text-primary border border-primary/20 p-4 rounded-md font-body text-body-md text-center">
                    Mesajınız başarıyla iletildi! En kısa sürede dönüş sağlayacağız.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-body text-label-sm text-on-surface-variant font-semibold" htmlFor="name">
                          İsim Soyisim
                        </label>
                        <input
                          required
                          className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body text-on-background placeholder:text-on-surface-variant/50 transition-colors focus:outline-none"
                          id="name"
                          placeholder="Adınız"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-body text-label-sm text-on-surface-variant font-semibold" htmlFor="email">
                          E-posta Adresi
                        </label>
                        <input
                          required
                          className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body text-on-background placeholder:text-on-surface-variant/50 transition-colors focus:outline-none"
                          id="email"
                          placeholder="ornek@email.com"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-label-sm text-on-surface-variant font-semibold" htmlFor="message">
                        Mesajınız
                      </label>
                      <textarea
                        required
                        className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 font-body text-on-background placeholder:text-on-surface-variant/50 resize-none transition-colors focus:outline-none"
                        id="message"
                        placeholder="Size nasıl yardımcı olabiliriz?"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                    <div className="flex justify-end pt-4">
                      <button
                        className="bg-primary text-on-primary font-body text-label-sm font-bold px-8 py-3 rounded active:scale-95 transition-transform duration-200 shadow-[0_4px_14px_rgba(163,59,32,0.08)] cursor-pointer"
                        type="submit"
                      >
                        Gönder
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Get Directions CTA */}
          <div className="mt-16 text-center">
            <a
              className="inline-flex items-center gap-2 bg-secondary text-on-secondary font-body text-label-sm font-bold px-8 py-4 rounded-full active:scale-95 transition-transform duration-200 shadow-[0_4px_14px_rgba(163,59,32,0.15)] hover:bg-secondary/90"
              href="https://maps.google.com/?q=Çıtlakkale,Giresun"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-on-secondary">directions</span>
              Hemen Yol Tarifi Al
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
