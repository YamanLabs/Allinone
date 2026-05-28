import React from 'react';

export default function OrderPage() {
  return (
    <div className="w-full max-w-container-max mx-auto px-6 py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4">Sipariş ve İletişim</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Telefonla veya WhatsApp üzerinden hızlıca sipariş verin. En taze malzemelerle hazırlanan burgerlerimiz sıcacık kapınıza gelsin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-start">
        {/* Contact Actions & Info */}
        <div className="flex flex-col gap-lg">
          {/* Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <a 
              href="https://wa.me/905555555555" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary-container text-on-primary p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all hover:-translate-y-1 text-center"
            >
              <span className="material-symbols-outlined text-4xl fill">chat</span>
              <span className="font-headline-md text-headline-md font-bold text-xl">WhatsApp Sipariş</span>
              <span className="font-body-md text-body-md opacity-90 text-sm">Hızlı ve kolay sipariş</span>
            </a>
            
            <a 
              href="tel:+904540000000"
              className="bg-inverse-surface text-on-primary p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-all hover:-translate-y-1 text-center"
            >
              <span className="material-symbols-outlined text-4xl fill">call</span>
              <span className="font-headline-md text-headline-md font-bold text-xl">Bizi Arayın</span>
              <span className="font-body-md text-body-md opacity-90 text-sm">0454 XXX XX XX</span>
            </a>
          </div>

          {/* Info Card */}
          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-8 shadow-sm">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 border-b border-surface-variant pb-4">Restoran Bilgileri</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container mt-1">location_on</span>
                <div>
                  <h3 className="font-label-bold text-label-bold text-on-surface mb-1">Adres</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Çıtlakkale, İnönü Cd. No:12<br />Giresun Merkez
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container mt-1">schedule</span>
                <div>
                  <h3 className="font-label-bold text-label-bold text-on-surface mb-1">Çalışma Saatleri</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Her Gün: 10:00 - 00:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="bg-surface-container-highest rounded-xl overflow-hidden shadow-sm relative min-h-[400px] md:h-[480px]">
          <img 
            alt="Map Placeholder" 
            className="w-full h-full object-cover absolute inset-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAoHoUZGMEiwg7CuuiCPzfgxTFcZdTVr1WQOSiyrSBO4QLlxUVYotyNqMKCUGxONQRAaAIX6Vgqa-k53Fb_3gzAwR3OZ8Rz3eEA8csCBdjbS2ASPObwOTAw8IYDlG8k8OT6hh3Avj39VEsV9qznPEt3N8PcUyoM3VHAZsSLwepaER5-D29Bnq52-RNK8h0nEjEzUVsmBeO2By82f-pK7Cq1buMR2B3xL0MQqTgY7xFKdUTJQPWLCZpHCMsP97fL9Ixr2ZFsMMEgwa7"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <div className="bg-surface-container-lowest p-4 rounded-lg shadow-lg flex items-center gap-4 w-full">
              <span className="material-symbols-outlined text-primary-container text-3xl">store</span>
              <div>
                <p className="font-label-bold text-label-bold text-on-surface">AZIK BURGER Merkez</p>
                <p className="font-body-sm text-on-surface-variant text-sm">İnönü Cd. No:12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
