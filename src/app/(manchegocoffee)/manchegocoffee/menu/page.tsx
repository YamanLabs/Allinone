"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface MenuItem {
  id: string;
  category: "sicak" | "soguk" | "tatli";
  name: string;
  price: string;
  desc: string;
  image: string;
  badge?: string | null;
  tags?: string[];
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<"all" | "sicak" | "soguk" | "tatli">("all");

  const categories = [
    { id: "all", name: "Tümü", icon: "restaurant_menu" },
    { id: "sicak", name: "Sıcak Kahveler", icon: "local_cafe" },
    { id: "soguk", name: "Soğuk Kahveler", icon: "ac_unit" },
    { id: "tatli", name: "Tatlılar & Fırından", icon: "bakery_dining" },
  ];

  const menuItems: MenuItem[] = [
    {
      id: "m1",
      category: "sicak",
      name: "Espresso",
      price: "₺65",
      desc: "Nitelikli kahve çekirdeklerinden tek veya çift shot zengin klasik İtalyan espressosu.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0EMq0FOO12LcB9tbcMcHeWdbmMISvrKZtDKgGfPM_2FwMaRz_EjnyCM2OfBTNaATaw9VsP3ETiIJmui1MDwrOMgq0VqC7MQraBoG0IUbFO7gpLKuc1N43guIN9yPDNVQvea5YRXwerh57KV_aH1qizTOw4fSJcYyca4Xb9aFQ5pKxS78RMVM_kED4s6AGbjNv0bHxoOV6D0f9jOMpUUTLqU1VJV7U4IvpTVPeOp1iSveOsKyvIsEXDLTtKMJ3S4vxk1rAWVNABSE",
    },
    {
      id: "m2",
      category: "sicak",
      name: "Cappuccino",
      price: "₺85",
      desc: "Zengin espresso, sıcak süt ve kadifemsi süt köpüğünün efsanevi İtalyan dengesi.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxfDGpQesLK1a9ulM88lR9bR9-4TvJhbEBUTe_LWQ_fkfZtxI8cWwXKztmfNF5R1UsJ9e5B6D-J97bokS-qb1afKwilNKrNZVGODLie04EkWSZU5HXl9gmQVBOk0FuMxip0MEnMN1T7FHYQ8MWRJXdMuZlQ6WgFBdlQmx24C1G2DFLq0-_Uz73fnmShqsT4640CTkfdftes93BUuZ7xGhYkM7FeCwWE5q3fjphkLfbGJGUOzvkhPHDQrWLEm-zDBsdvG100f2rz_Y",
      tags: ["Vegan Opsiyonlu"],
    },
    {
      id: "m3",
      category: "sicak",
      name: "Giresun Fındıklı Latte",
      price: "₺95",
      desc: "Yerel Giresun fındığı şurubu ile tatlandırılmış sütlü espresso. Üzerinde çıtır fındık parçacıklarıyla.",
      badge: "İmza Lezzet",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOZjRPdbO4e052-KYD1Ga-cIT2o4HgjZ3f7Y_fJWOQnzJhnrtomG7yxjDND6xNoFAQH-HucvZXF1jazGJXjtMq7CyyC3bJ4QpmFd66FXosMwGyQ61AD2-D3gmFf5Xm1aXr472Mxi5P__QNDpo4mB7qOckFP_cu5UxqyBL7-GO2jTd_7uBvJc3Vg79ckzTiJx2e_VAyE23BaKEp1TtqlZcMlQd3TG7a1dgj-LgOv_TMWSaJ2fVWb1cbLpZAljj4K5iFnq-pKWfHlvo",
    },
    {
      id: "m4",
      category: "soguk",
      name: "Iced Latte",
      price: "₺95",
      desc: "Double shot espresso, soğuk süt ve buz küplerinin ferahlatıcı hafifliği.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1hi7onjS-Q-ixhJ4FLkMA-KAwwxde7uWqY5dPbYddcA116sTLmoZHf95GMhxvdCz70q4ebzLq3SNIf2sUCk19gMcmyAvLkrQHSKVyw8k5a1BSHt9CLjRewOgyRePeKOoecd9p5Rp6stvkBliEn6DEiaLSMIXcgjQzZ3EoWqP9zIGqH943XWZSiY5tkZvZrQxO9GADq7JT6Y-F4EfHQvBiofyuadMWDtdyuvQbmuoPXQ8tF1lINa-viFl_KhBhkIbJVL6VNahxzf8",
    },
    {
      id: "m5",
      category: "soguk",
      name: "Buzlu Karamel Latte",
      price: "₺120",
      desc: "Ev yapımı karamel şurubu, soğuk süt ve taze espresso ile serinletici lezzet.",
      badge: "Çok Satan",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSTPSj-tV6MqVN8FcDluPhw8NZ1NyCVAE1KVIwowU8VeiuH-aX3DHbcVnyd98Vjb79ery2CgyKedpYEmu8n2JXgj-2UBAvkehT0sl-oHQorFxXWW07yNx7eeJGyrO9OSYkWby8Xx1higCLgyMaHmoXFjdQjVZK0xjaR3BjAjVI1LL48YBSIqRF7_Z-Lo6jNfxD8HXGWSzyczY7_syJZKCavPElhqgio4PpBhdFpqbEyr0nL68VtKjzAl11GQky8EyDiHG75zlEfX8",
    },
    {
      id: "m6",
      category: "soguk",
      name: "Matcha Latte",
      price: "₺135",
      desc: "Organik Japon yeşil çay tozu (matcha), soğuk süt ve buzun canlandırıcı antioksidan uyumu.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB83iO3S60BCRfN2lGKeQ4bKcsOgLuA4RAD0S7TfefJGEEog9fybC_NAWp0lJ2BsXXUifcGHaf42KGZOSvzXPVmUjbcUZ9MONYWmS8KUs9xieD0r9PSFzAmVgw8dQRbxe7cuQijjilduzsrSDwxKJBLpDdLqEpJVSPP6Cg7SsD9Xyfr7vLUOybOW6ImQo2dg-cjegSFobA-1rsgA6Mn5wRTCDVbAgjXED6brYWDSeNZS-WisPYblbQ2AOnh3cj84nTBPYTjubVvaJ4",
    },
    {
      id: "m7",
      category: "tatli",
      name: "San Sebastian Cheesecake",
      price: "₺140",
      desc: "İçi akışkan ve kremsi, üzeri karamelize edilmiş nefis Bask cheesecake dilimi.",
      badge: "Favori",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWUbgoi9yIHkaiNesbQK_zgpCCtl6H9V64GhuYq--m-LpwwWchG33qXMCQqXrGtBAOrInuwha_NqnLBPGqOI_u2hs0vpcliDtyNezKHeQwEfVgE7mh3ZA9P21BFCKgaMrm2bdtH4-frK2Sswn1KjA83wGBR3gL4KHebOWNiuwDRzNut3fWchoip71v8BeLQjHXsvwvzkoUKs72zkpApi6p6z3DPpSTLIckL2pFyg2XNFNSLWOk6KX2lemG3xViW3teXolg6X46XXY",
    },
    {
      id: "m8",
      category: "tatli",
      name: "Tereyağlı Kruvasan",
      price: "₺75",
      desc: "Fransız tereyağı ile hazırlanan, içi kat kat yumuşak, dışı çıtır çıtır kruvasan.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHtEcitwtiMvBnEspNDM4eBtYQ5508VI8cLXB_JIt_TaklnAxRCD504obeXSuC5-YXMZ4xZeUhjVBQ3G7wlIb7MsVjj-hTWWsAR1YTA-achNLImxxdVx9AmjBFqGGu4cWxhKPdkLVNhchsOn1MsCSVqAE781o_dmcHp3zv96TivptD4wU_BfHMz9UsJp4UdxtJueYS5riW2Hzyaa5X7TmwWoygOVuNH8K66d-9wEfV4_1Qrvf0VTE2aHu2JKmVJZEMBo5T7542PE0",
    },
    {
      id: "m9",
      category: "tatli",
      name: "Cevizli Havuçlu Kek",
      price: "₺85",
      desc: "Ev yapımı tadında, bol ceviz, taze havuç ve kokulu tarçınla pişen üzeri labne kremalı dilim kek.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_4xyBFei_6euIR0JkfYnR1XeAR8MkearyYdxnL69AvNTNjRWpYgGXm5CKg_fX4RFRm_mal1c4nkY7vW77KTHuNMS_bihvQPvEnjAA4dOA5CTOQ03uCX7j0MXH2Y66ln5zPcGB0wGc0pHdlV6AAjYpX9Lugn2Ir1O6wsxAURU3o4Is52z8lW0sq9WDCWS8v3CSdxAaCTIIdLToWLxswVQBcLrI75rtyz-n4x7dLiZjZLvBixW-_oPQ1G-pn-otcegKtBpGtDH45Zc",
    },
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen py-8 md:py-12 bg-background">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-4">Dijital Menü</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Özenle seçip kendi barımızda kavurduğumuz çekirdekler ve fırından taze çıkan spesiyallerimiz.
          </p>
        </header>

        {/* Category Navigation (Horizontal scrollable on mobile) */}
        <div className="flex justify-start md:justify-center overflow-x-auto hide-scrollbar gap-3 mb-12 pb-2 scroll-smooth -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm border ${
                  isActive
                    ? "bg-primary text-white border-primary"
                    : "bg-surface-container text-primary border-outline-variant/30 hover:bg-surface-container-high"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {cat.icon}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-surface rounded-2xl overflow-hidden shadow-level-1 hover:shadow-level-2 border border-surface-variant transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative">
                {item.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full font-label-sm text-xs shadow-sm font-bold flex items-center gap-1 backdrop-blur-md bg-opacity-90">
                    <span className="material-symbols-outlined text-[14px]">star</span>
                    <span>{item.badge}</span>
                  </div>
                )}
                <div className="aspect-[4/3] relative bg-surface-container-low overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="font-headline-md text-xl text-primary font-bold">
                      {item.name}
                    </h3>
                    <span className="font-label-md text-terracotta bg-secondary-container/40 px-3 py-1 rounded-full font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-[#2C5F2D]/10 text-[#2C5F2D] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link
                    href="/manchegocoffee/siparis"
                    className="w-full bg-espresso text-white font-label-md py-3 rounded-xl hover:bg-terracotta transition-colors flex items-center justify-center gap-2 shadow-sm font-semibold active:scale-[0.98]"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      shopping_bag
                    </span>
                    <span>Sipariş Ver</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sticky bottom checkout shortcut on mobile */}
        <div className="md:hidden fixed bottom-16 left-0 w-full p-4 bg-background/95 backdrop-blur-md border-t border-surface-variant z-40 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] text-on-surface-variant uppercase font-bold">
              Manchego Kahve Keyfi
            </span>
            <span className="text-sm font-bold text-primary">Sıcak, Taze &amp; Hızlı</span>
          </div>
          <Link
            href="/manchegocoffee/siparis"
            className="bg-terracotta text-white font-label-md px-5 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 text-xs font-semibold"
          >
            <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
            <span>Hemen Sipariş Ver</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
