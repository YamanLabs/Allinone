import React from "react";
import Navbar from "@/components/parkpidesalonu/Navbar";
import Footer from "@/components/parkpidesalonu/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20 pb-[100px] md:pb-0">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center bg-surface-container-highest overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Giresun Park Pide Salonu - Geleneksel Taş Fırın Pidesi"
              className="w-full h-full object-cover object-center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0vZ7Wrq_OLajacH-8gr_ayOB0m3jtkUUvye3nZNZ4QQQ1qHCaY_JeE-dIxy4zxe9isac5Wcoa1-wAST_C3wXJ3WccJuhGeOK81IRWNPHnd61qYANtT4f40rUqXDEfPua05rvcGKYqLctzV8RrxqbWGFsKwaPhjC1YgWbKzKxqeka1nT0O6-8X8k7KzghptOVmpo52gKFJWrdUczl25HGCNVSYL5uxaGhpKZDaJrNQsPiG__aBUwyjAiaGClLAczCEIr7gEKBezap6"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full py-16 md:py-section-gap">
            <div className="max-w-2xl text-left">
              <span className="inline-block px-3 py-1 mb-4 bg-secondary-container text-on-secondary-container rounded-full font-body text-label-sm font-semibold uppercase tracking-wider">
                Odun Ateşinden Sofranıza
              </span>
              <h1 className="font-display text-[32px] md:text-display-lg text-primary mb-6 leading-tight drop-shadow-sm font-bold">
                Giresun'un Geleneksel Lezzeti: Park Pide
              </h1>
              <p className="font-body text-[16px] md:text-body-lg text-on-surface-variant mb-8 max-w-xl">
                Usta ellerden, taş fırının sıcaklığıyla pişen, Karadeniz'in yöresel malzemeleriyle hazırlanan eşsiz pide deneyimi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#menu"
                  className="bg-primary text-on-primary px-8 py-3 rounded font-body text-title-md font-semibold hover:bg-primary/90 active:scale-95 transition-all shadow-[0_4px_14px_0_rgba(163,59,32,0.39)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined">restaurant_menu</span>
                  Menüyü Gör
                </Link>
                <a
                  href="tel:+90454XXXXXXX"
                  className="bg-surface text-primary border border-outline px-8 py-3 rounded font-body text-title-md font-semibold hover:bg-surface-variant active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined">call</span>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>

          {/* Quick Info Bar */}
          <div className="absolute bottom-0 left-0 w-full bg-surface/95 backdrop-blur border-t border-outline-variant/50 hidden md:block">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-4 flex flex-row justify-between items-center gap-4 text-on-surface-variant font-body text-body-md">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Çıtlakkale, Giresun</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <span>10:00 - 21:00</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">phone_in_talk</span>
                <span className="font-body text-title-md font-semibold text-primary">+90 454 XXX XX XX</span>
              </div>
            </div>
          </div>
        </section>

        {/* Neden Biz Section */}
        <section id="why-us" className="py-12 md:py-section-gap bg-surface">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-display text-[28px] md:text-headline-lg text-primary font-bold mb-4">
                Neden Biz?
              </h2>
              <p className="font-body text-[16px] md:text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Gelenekten geleceğe uzanan lezzet sırrımız, ustalarımızın el emeği ve yöremizin en taze malzemelerinde saklı.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/30 text-center hover:bg-surface-container transition-colors duration-300 group">
                <div className="w-16 h-16 mx-auto bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl">local_fire_department</span>
                </div>
                <h3 className="font-body text-title-md font-bold text-on-surface mb-3">Taş Fırın Ateşi</h3>
                <p className="font-body text-body-md text-on-surface-variant">
                  Pidelerimiz odun ateşinde, geleneksel taş fırınlarda yavaş yavaş pişerek o eşsiz çıtırlığa ve aromaya kavuşur.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/30 text-center hover:bg-surface-container transition-colors duration-300 group">
                <div className="w-16 h-16 mx-auto bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl">eco</span>
                </div>
                <h3 className="font-body text-title-md font-bold text-on-surface mb-3">Taze Malzemeler</h3>
                <p className="font-body text-body-md text-on-surface-variant">
                  Etinden peynirine, tereyağından ununa kadar her malzemeyi özenle seçer, yöresel üreticilerden günlük tedarik ederiz.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-surface-container-low p-8 rounded-lg border border-outline-variant/30 text-center hover:bg-surface-container transition-colors duration-300 group">
                <div className="w-16 h-16 mx-auto bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl">diversity_3</span>
                </div>
                <h3 className="font-body text-title-md font-bold text-on-surface mb-3">Karadeniz Usulü</h3>
                <p className="font-body text-body-md text-on-surface-variant">
                  Nesilden nesile aktarılan gerçek Giresun pidesi tarifini aslına sadık kalarak, ustalıkla hazırlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Highlights Section */}
        <section className="py-12 md:py-16 bg-surface-container-low/50 border-t border-outline-variant/20">
          <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-[24px] md:text-headline-lg text-on-surface font-bold">
                Öne Çıkanlar
              </h2>
              <Link
                className="text-primary font-body text-label-sm font-semibold uppercase tracking-wider hover:underline flex items-center gap-1"
                href="#menu"
              >
                Tüm Menü <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              {/* Large Item */}
              <div className="md:col-span-8 group relative rounded-xl overflow-hidden bg-surface-container aspect-square md:aspect-auto md:h-[400px] border border-outline-variant/30 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(163,59,32,0.03)]">
                <img
                  alt="Kıymalı Pide"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmEj1UeK194GO4QSdH0vPine67bsjfjO9jTwwVKzis0CYXqvKHfPz-ggQ-WvPm1itP_TSj-zvV6aWX7cRKKJidAYdXQD3wBfAjsYZW4j2SbrOX5wsylBSPLs-wAswDttWsxcZuxJp9zY-FOL1rLxGGDpjMSzMJSxgW3rwNLj_fqMiW6F01oy4LgbMk4tamd8RQqyWApzq96lsFf34sRowqD-t034vhYvEa2EJvW8SXaU-ryl1dGvy_VFgXUAVjzjL6FHcgWdn8L7wQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div>
                    <span className="bg-secondary-container text-on-secondary-container text-xs px-2 py-1 rounded mb-2 inline-block font-body font-bold">
                      EN ÇOK TERCİH EDİLEN
                    </span>
                    <h3 className="font-display text-[24px] text-surface-bright leading-tight mb-1 font-bold">
                      Giresun Yağlısı (Kıymalı)
                    </h3>
                    <p className="font-body text-surface-variant text-sm">
                      Bol kıyma, özel baharatlar ve çıtır hamur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Small Items Stack */}
              <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
                <div className="flex-1 group relative rounded-xl overflow-hidden bg-surface-container border border-outline-variant/30 min-h-[180px] transition-all duration-300 hover:-translate-y-1">
                  <img
                    alt="Peynirli Pide"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7cHsYgWrCUwv9etpLPyxV5iDIvpNKy0m3hAypk26wazeALHFanSnWFzyZB8Cjs7JjxDzffEf_wV7jYvkJzTFUdP74-yYiIlADNOr7-8ixtKa2hyMoLqAD7-bpe28J9UYdNEO0AYLpBX6A8nTFLxH9Z3NBV9kwpOrbOQXRTFGn7H2FqTS86vTATkvUXBOSp_I4ZDvMURoPmaparOEnWmepB3aQspM9WrjqMff6oq7EBpF6kMpuR3mc1-KXvTvBVUlm7tbpklTJM5Np"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="font-display text-[20px] text-surface-bright leading-tight mb-1 font-bold">
                      Köy Peynirli Pide
                    </h3>
                    <p className="font-body text-surface-variant text-xs">
                      Yerel köy peyniri ve tereyağı.
                    </p>
                  </div>
                </div>

                <div className="flex-1 group relative rounded-xl overflow-hidden bg-surface-container border border-outline-variant/30 min-h-[180px] transition-all duration-300 hover:-translate-y-1">
                  <img
                    alt="Karışık Pide"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmL8PFIM9by0spIfxJhOwGj1Awnwkws87eWId-UghYM_SbtZKZ3-eRtKJPNw6eF_GW2olysKbjhr-1ZE6PQ6A3X5ADOtLELGxX43IWeQU7jgPqCJOeYbcoUk6x04SQf9eGrT5mxKBD-1L2a3OlZ3BmD0m55DMq7KNBS2S4JMJS0FBpKDHsAi8JgxG-xEmNTSa3ubdXQCeLMig_f6VRkUEIkMPZMXM7rgiGAJ-0L1I-ljloAe_pQZnPOOSJ1umLUvaPcvhsW6Evr11s"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="font-display text-[20px] text-surface-bright leading-tight mb-1 font-bold">
                      Karışık Pide
                    </h3>
                    <p className="font-body text-surface-variant text-xs">
                      Sucuk, kaşar ve kavurma bir arada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Lezzetler Section */}
        <section id="menu" className="py-12 md:py-section-gap bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-display text-[28px] md:text-headline-lg text-primary font-bold mb-2">
                  Öne Çıkan Lezzetler
                </h2>
                <p className="font-body text-[16px] md:text-body-lg text-on-surface-variant">
                  Müşterilerimizin en çok tercih ettiği imza pidelerimiz.
                </p>
              </div>
              <Link
                className="hidden md:flex items-center gap-1 font-body text-title-md font-semibold text-secondary hover:text-primary transition-colors"
                href="#menu"
              >
                Tüm Menü <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-surface rounded-xl overflow-hidden border border-outline-variant/50 hover:shadow-md transition-all duration-300">
                <div className="h-48 relative overflow-hidden bg-surface-container-highest">
                  <img
                    alt="Kıymalı Pide"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-ixR8She2yfEU-9lYUY_8wuHYXc0RBRPrj61a2d1fFOeqGuyU90ziAzwdFhCTnPOfGPFI5tWaJtzSi6aI4MSCwPFUNCYZmTdD9NDg2zb6IkqstirHDRYlMRGw98u3Brl3XWA0xFb17j_VKglviGqIn_98qJJRJioayBEqnFh7risrlcxDAXZ_xiMfl4b7rlyO-eEwno-IuauuR3WZ1IGyPgtrWzm37Q_vwqfraAHjLQ46_gCLtgjueTfPq7i7x_4Z91EAAQOrmDT"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-title-md font-bold text-on-surface">Kıymalı Pide</h3>
                    <span className="font-body text-title-md font-bold text-secondary">₺140</span>
                  </div>
                  <p className="font-body text-body-md text-on-surface-variant mb-4">
                    Özel baharatlarla harmanlanmış dana kıyma, incecik hamur ve kenarlarında çıtır lezzet.
                  </p>
                  <button className="w-full py-2 border border-primary text-primary rounded font-body text-title-md font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer">
                    Sepete Ekle
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface rounded-xl overflow-hidden border border-outline-variant/50 hover:shadow-md transition-all duration-300 relative">
                <div className="absolute top-4 right-4 z-10 bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  Şefin Önerisi
                </div>
                <div className="h-48 relative overflow-hidden bg-surface-container-highest">
                  <img
                    alt="Kuşbaşılı Pide"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa1wNLr4LSecXrlJuU2QnTSc2SkMYEWW6C0aG9uUpOa8OSgl_VVwn8v42EOEPm7WM3HL6F95WeMUa8jYEDv0z-3-zUnsqWLZETqT6NIGVqzJC6X4MVun-rqB0HeOaMHk_mfMDqpKoCCdJoHQp8r17vrgmjKDB6Dli_0iHIbkrTJ7ddnTLMfFsQO_5rchHzjT2MoZu3hsWjJcfGvUxSsovbaoR0YdevtNgrVY0L4fxhZu8St217xuqCSKVLJJGJThOY1hiF5Vj54icr"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-title-md font-bold text-on-surface">Kuşbaşılı Pide</h3>
                    <span className="font-body text-title-md font-bold text-secondary">₺160</span>
                  </div>
                  <p className="font-body text-body-md text-on-surface-variant mb-4">
                    Özenle doğranmış dana eti, domates ve biberin muhteşem uyumu, üzerine hakiki tereyağı.
                  </p>
                  <button className="w-full py-2 border border-primary text-primary rounded font-body text-title-md font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer">
                    Sepete Ekle
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-surface rounded-xl overflow-hidden border border-outline-variant/50 hover:shadow-md transition-all duration-300">
                <div className="h-48 relative overflow-hidden bg-surface-container-highest">
                  <img
                    alt="Karışık Pide"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAajlii9i1rtPccr80il92SMG-2t9l-De_xmfkkEsibe8uSCtfCn4tblMGTNQtEWbklbk46Eq9Hffr4xqWXtfsHj0zrl0zIgMd03iWGljiHqCps5KQ_V6uYYT0tamJBElxQ4f4PvpwZxTEb9BfxdsxHmybsV1UW4Fj4tfC3JAW2ohbAZccuHf6PHgJdPVpG5vHXFM-pCzDJrkiIIuINP3UMQmhgaWkS7b7dIKbg1Quki34GsEiyZbwqIVD9Ew3o-CGWBb62h0KzCSp7"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-title-md font-bold text-on-surface">Karışık Pide</h3>
                    <span className="font-body text-title-md font-bold text-secondary">₺170</span>
                  </div>
                  <p className="font-body text-body-md text-on-surface-variant mb-4">
                    Kıyma, kuşbaşı ve kaşarın tek bir hamurda buluştuğu, karar veremeyenler için ideal lezzet.
                  </p>
                  <button className="w-full py-2 border border-primary text-primary rounded font-body text-title-md font-semibold hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center md:hidden">
              <Link
                className="inline-flex items-center gap-2 font-body text-title-md font-semibold text-primary bg-primary-container/30 px-6 py-3 rounded-full"
                href="#menu"
              >
                Tüm Menüyü Gör <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Story / Atmosphere Section */}
        <section id="about" className="py-12 md:py-section-gap bg-surface-container-low border-y border-outline-variant/30">
          <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-display text-[28px] md:text-display-lg text-on-surface font-bold mb-6 leading-tight">
                  Ustalık ve Geleneğin<br className="hidden md:inline" /> Buluşma Noktası
                </h2>
                <p className="font-body text-[16px] md:text-body-lg text-on-surface-variant mb-6 text-balance">
                  Giresun'un eşsiz pide kültürünü yılların tecrübesiyle yaşatıyoruz. Hamurumuzun sırrı, ustalarımızın ellerinde ve fırınımızın ateşinde gizli. Her dilimde Karadeniz'in sıcaklığını hissedeceksiniz.
                </p>
                <ul className="space-y-4 mb-8 font-body text-on-surface-variant">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      local_fire_department
                    </span>
                    Geleneksel Taş Fırın
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      eco
                    </span>
                    %100 Doğal Yerel Malzemeler
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      handyman
                    </span>
                    Elde Açılan İnce Hamur
                  </li>
                </ul>
                <Link
                  href="#about"
                  className="text-primary font-body text-label-sm font-semibold uppercase tracking-wider border-b-2 border-primary pb-1 hover:text-secondary transition-colors"
                >
                  Hikayemizi Okuyun
                </Link>
              </div>
              <div className="order-1 md:order-2 rounded-2xl overflow-hidden aspect-square md:aspect-[4/5] shadow-[0_8px_30px_rgba(163,59,32,0.06)]">
                <img
                  alt="Taş Fırın"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdsdu8oBtAatWAAw6yattX7E5bjtPIbxHr6I-y0QiRik3GtIyim4MY9z2uZ2KdWRTbzAxFphcb0mpYZKS3qGe-CGeNzlquJT2lh_sxIsUX5s8UMZ9rTiezEiE3xaK8FqJbrwkBBuvP7NKqr0-u-73lg8DyDGS0-CqM9lJGDcUN0eLjIsj0lhb5gK8nAoRL_kllhhINTrYN04Z-JfDSos_YlgEN0MA46gaYb0tWOU1tSCpnbZE3tAMK1Eeu7RSLoA20gGOipKBVloZp"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Action Bar (Sticky at Bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface/95 backdrop-blur-lg border-t border-outline-variant/30 p-margin-mobile z-50 shadow-[0_-4px_20px_rgba(163,59,32,0.05)]">
        <div className="flex gap-3">
          <a
            href="tel:+90454XXXXXXX"
            className="flex-1 flex flex-col items-center justify-center gap-1 bg-surface border border-outline-variant text-primary py-3 rounded-xl hover:bg-surface-container-low transition-colors active:scale-95 text-center"
          >
            <span className="material-symbols-outlined">call</span>
            <span className="font-body text-[10px] uppercase font-bold tracking-wider">Hemen Ara</span>
          </a>
          <Link
            href="/parkpidesalonu/iletisim"
            className="flex-1 flex flex-col items-center justify-center gap-1 bg-primary text-on-primary py-3 rounded-xl hover:bg-surface-tint transition-colors shadow-[0_4px_12px_rgba(163,59,32,0.2)] active:scale-95 text-center"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              directions
            </span>
            <span className="font-body text-[10px] uppercase font-bold tracking-wider">Yol Tarifi Al</span>
          </Link>
        </div>
      </div>
    </>
  );
}
