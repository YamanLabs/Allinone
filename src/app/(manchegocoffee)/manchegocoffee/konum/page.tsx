"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Konum() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Check open status on the client side
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      
      // Open daily from 09:00 to 00:00 (midnight)
      const openTime = 9;
      const closeTime = 24;
      
      const open = currentHour >= openTime && currentHour < closeTime;
      setIsOpen(open);

      // Format time for UI display
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const hours = now.getHours().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  const handleDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Manchego+Coffee+Atat%C3%BCrk+Bulvar%C4%B1+Giresun",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen py-8 md:py-12 bg-background">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="font-headline-xl text-headline-xl text-primary mb-4">
              Bizi Ziyaret Edin
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Giresun'un kalbinde, taze kavrulmuş kahve kokusu eşliğinde modern ve sıcak bir mola verin.
            </p>
          </div>

          {/* Dynamic Status Indicator */}
          <div className="inline-flex self-center md:self-end items-center gap-3 px-5 py-3 bg-surface-container-low border border-outline-variant/40 rounded-2xl shadow-level-1">
            <span className={`w-3 h-3 rounded-full ${isOpen ? "bg-forest-green animate-pulse" : "bg-red-600"}`}></span>
            <div className="flex flex-col text-left">
              <span className="font-label-md text-sm font-bold text-primary">
                {isOpen ? "Şu An Açığız" : "Şu An Kapalıyız"}
              </span>
              <span className="text-[11px] text-on-surface-variant">
                {isOpen ? "Kapanış: 00:00" : "Açılış: 09:00"} {currentTime && `• Saat: ${currentTime}`}
              </span>
            </div>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Map Card */}
          <div className="lg:col-span-8 bg-surface-container-low rounded-2xl overflow-hidden shadow-level-1 border border-outline-variant/20 relative group h-[400px] lg:h-[530px]">
            {/* Map background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Manchego Coffee Giresun Location Map"
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
            </div>

            {/* Float details panel inside Map */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-background/95 backdrop-blur-md p-6 rounded-xl shadow-level-2 border border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 z-10 animate-fade-in-up">
              <div>
                <h3 className="font-headline-md text-xl text-primary font-bold mb-1">
                  Manchego Coffee Giresun
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-terracotta text-xl">
                    location_on
                  </span>
                  Atatürk Bulvarı, Giresun
                </p>
              </div>
              <button
                onClick={handleDirections}
                className="w-full sm:w-auto bg-terracotta text-white hover:bg-espresso px-6 py-3.5 rounded-xl font-label-md text-sm font-semibold transition-all duration-300 shadow-level-2 flex items-center justify-center gap-2 cursor-pointer btn-hover active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">
                  directions
                </span>
                <span>Yol Tarifi Al</span>
              </button>
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="lg:col-span-4 flex flex-col gap-8 justify-between">
            {/* Hours Card */}
            <div className="bg-surface-container-low p-8 rounded-2xl shadow-level-1 border border-outline-variant/20 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-terracotta text-2xl">
                    schedule
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary font-bold">
                    Çalışma Saatleri
                  </h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-outline-variant/30 pb-3">
                    <span className="font-label-md text-sm font-medium text-on-surface">Pazartesi - Cuma</span>
                    <span className="font-body-md text-sm text-espresso font-semibold">09:00 - 00:00</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-outline-variant/30 pb-3">
                    <span className="font-label-md text-sm font-medium text-on-surface">Cumartesi</span>
                    <span className="font-body-md text-sm text-espresso font-semibold">09:00 - 00:00</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="font-label-md text-sm font-medium text-on-surface">Pazar</span>
                    <span className="font-body-md text-sm text-espresso font-semibold">09:00 - 00:00</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-4 bg-terracotta/5 rounded-xl border border-terracotta/10 flex items-start gap-3">
                <span className="material-symbols-outlined text-terracotta text-lg mt-0.5">
                  info
                </span>
                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                  Resmi tatillerde çalışma saatlerimiz değişiklik gösterebilir. Lütfen güncel duyurular için sosyal medya hesaplarımızı takip edin.
                </p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-primary text-white p-8 rounded-2xl shadow-level-2 flex flex-col justify-between">
              <div>
                <h2 className="font-headline-md text-headline-md text-white font-bold mb-6">
                  İletişim
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:+905555555555"
                    className="flex items-center gap-3 text-cream hover:text-white transition-colors duration-200 group"
                  >
                    <span className="material-symbols-outlined text-terracotta group-hover:scale-110 transition-transform">
                      call
                    </span>
                    <span className="font-body-md text-sm font-medium">
                      +90 (555) 555 55 55
                    </span>
                  </a>
                  <a
                    href="mailto:merhaba@manchegocoffee.com"
                    className="flex items-center gap-3 text-cream hover:text-white transition-colors duration-200 group"
                  >
                    <span className="material-symbols-outlined text-terracotta group-hover:scale-110 transition-transform">
                      mail
                    </span>
                    <span className="font-body-md text-sm font-medium break-all">
                      merhaba@manchegocoffee.com
                    </span>
                  </a>
                </div>
              </div>

              <button
                onClick={handleDirections}
                className="mt-8 w-full py-3.5 border-2 border-cream text-cream hover:bg-cream hover:text-primary transition-all duration-300 rounded-xl font-label-md text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  map
                </span>
                <span>Yol Tarifi Al</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
