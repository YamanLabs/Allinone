import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[819px] flex items-center justify-center overflow-hidden bg-surface-container-highest">
        {/* Hero Images (Responsive loading) */}
        <div className="absolute inset-0 z-0">
          {/* Desktop image */}
          <div className="hidden md:block w-full h-full relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxfpDKtimMi_2unOL6Ns7MQWc61v8PLPLHRxY5xe3w4Fpex8RJBmqvwUs9GSLiCPDHuxwHBIIkcB5g-LSpi5v9qAvedJbUbzL0w4XNE-7unnO9P5wz_B5rXf79U7xo_0Lbd2Kjd6DXaqvkxVnxPBCK5pIKICgjzEn9nduLf2CAA8qDSXaQgnuIXDF7KEZBr5rZ9CRndw3wjEsaQhnSNB5jYqFJzn0E_LfGHwFMSkIT6mNy84HKEp44uAjWQuvUD7RqEOgDy6X-4A"
              alt="Geleneksel kebap"
              fill
              priority
              className="object-cover object-center opacity-85"
            />
          </div>
          {/* Mobile image */}
          <div className="block md:hidden w-full h-full relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUG4u7_DJs2eYI3bsCQyLefn3jEWwceWGRnZYMT7nutjK7_dyNQW2SimQc1-28qtuvo3omSonUKgyZSFCV45QnjOFyH5ac84Zp9kBL6q5NQA0U4kDPzs1y1bD0vTy2HHtVWYsMgYsvX5uJyTGWrGEY3F-TW_qsAbFfs1tMhoTUiwCysS_a8bAzbEw8nNjUpqCEuhNdQbJ4OmuCUAhE5LpvppyU7StOgp7MPzpfUkpmcmH2pCSa-LFhSeNivpVkWnR3_F380SXTSA"
              alt="Yakından çekilmiş, dumanı tüten geleneksel kebap"
              fill
              priority
              className="object-cover object-center opacity-75"
            />
          </div>
          {/* Gradients overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent hidden md:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent block md:hidden"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center">
          {/* Main Title */}
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-mustard-yellow md:text-primary mb-4 md:mb-6 drop-shadow-lg md:drop-shadow-sm max-w-3xl leading-tight">
            Geleneksel Lezzetin Ustasından Sofranıza
          </h1>
          
          {/* Subtitle */}
          <p className="font-body-lg text-body-lg text-white md:text-on-surface-variant mb-8 md:mb-10 max-w-2xl bg-black/40 md:bg-surface/60 backdrop-blur-sm p-4 rounded-lg inline-block">
            Gerçek odun ateşinde, ustalıkla hazırlanan dumanı tüten kebaplar ve odun fırınından çıtır lahmacunlar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link 
              href="/nebioglupide/iletisim" 
              className="bg-mustard-yellow hover:bg-[#d4ac0d] text-charcoal font-label-md text-label-md px-8 py-4 rounded font-bold transition-all flex items-center justify-center gap-2 ambient-shadow scale-95 active:scale-90"
            >
              <span className="material-symbols-outlined">moped</span>
              Hemen Sipariş Ver
            </Link>
            <Link 
              href="/nebioglupide/menu" 
              className="bg-surface/90 hover:bg-surface border border-primary text-primary font-label-md text-label-md px-8 py-4 rounded font-bold transition-all flex items-center justify-center gap-2 scale-95 active:scale-90"
            >
              <span className="material-symbols-outlined">restaurant_menu</span>
              Menüyü İncele
            </Link>
          </div>

          {/* Google Rating Highlight */}
          <div className="mt-8 md:mt-12 flex items-center gap-2 bg-surface/90 backdrop-blur-md px-6 py-3 rounded-full ambient-shadow border border-outline-variant/30 text-on-surface">
            <span className="font-label-md text-label-md text-on-surface-variant text-sm md:text-base">Google Puanı</span>
            <div className="flex text-mustard-yellow">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-outline-variant">star</span>
            </div>
            <span className="font-headline-md text-headline-md text-primary ml-1 text-lg md:text-xl">4.0</span>
          </div>
        </div>
      </section>

      {/* Categories Bar (Mobile Quick Access) */}
      <section className="py-8 md:py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-20 -mt-8 md:-mt-12">
        <div className="grid grid-cols-3 gap-3 md:gap-6 bg-surface p-4 rounded-2xl shadow-md border border-outline-variant/20">
          <Link href="/menu#kebaplar" className="flex flex-col items-center justify-center gap-2 md:gap-3 p-2 md:p-4 rounded-xl hover:bg-surface-container-low transition-all group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            </div>
            <span className="font-label-md text-xs md:text-sm text-on-surface text-center font-bold">Kebaplar</span>
          </Link>
          <Link href="/menu#lahmacun" className="flex flex-col items-center justify-center gap-2 md:gap-3 p-2 md:p-4 rounded-xl hover:bg-surface-container-low transition-all group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-container/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_pizza</span>
            </div>
            <span className="font-label-md text-xs md:text-sm text-on-surface text-center font-bold">Lahmacunlar</span>
          </Link>
          <Link href="/menu#mezeler" className="flex flex-col items-center justify-center gap-2 md:gap-3 p-2 md:p-4 rounded-xl hover:bg-surface-container-low transition-all group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-tertiary-container/10 text-tertiary flex items-center justify-center group-hover:bg-tertiary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>skillet</span>
            </div>
            <span className="font-label-md text-xs md:text-sm text-on-surface text-center font-bold">Meze & Yanlar</span>
          </Link>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 space-y-24 md:space-y-32">
        
        {/* Popular Menu Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2 text-2xl md:text-3xl">En Çok Tercih Edilenler</h2>
            <div className="divider-rustic w-64 mx-auto"><div className="diamond"></div></div>
            <p className="font-body-md text-body-md text-on-surface-variant">Müşterilerimizin vazgeçemediği imza lezzetlerimiz.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter pt-8">
            {/* Card 1: Adana */}
            <div className="group bg-surface rounded-xl overflow-hidden ambient-shadow border border-outline-variant/20 hover:border-primary/50 transition-all flex flex-col hover:shadow-lg">
              <div className="h-64 overflow-hidden relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd2MUYVE7RyTSXikE2IEQDOICsP-Io1JH6iG_XhhSpp9sUSRZkJULTyK8aGOEhdihDoarx278754Y9bksql4pxTJnIVQFQZWTRH_gc28TInai6pgu4kgV2a6fq4JfAw6lRu6aTOnEjiAW90lUaKoAzmW6EJaLTyxZLxubdBPLFIx3A-vUtv5ElhFP-XQfbTIe-LCU7z8qermAw5Bzt-Oycn_EDlgff8AsCOShk6lDdNnjpDPUyikdyJ8Ni0JCmGWrvbhYIXtATUQ"
                  alt="Adana Kebap"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between texture-parchment border-t border-outline-variant/10">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-on-surface text-xl">Adana Kebap</h3>
                    <span className="font-label-md text-label-md text-primary font-bold">280 ₺</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 text-sm">
                    Zırh kıyması, özenle seçilmiş baharatlar ve ustamızın sırrıyla hazırlanan acılı lezzet.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Lahmacun (With translation offset on desktop) */}
            <div className="group bg-surface rounded-xl overflow-hidden ambient-shadow border border-outline-variant/20 hover:border-primary/50 transition-all flex flex-col hover:shadow-lg md:-translate-y-8">
              <div className="h-64 overflow-hidden relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvq-cosO4exugSMnLrA1W9mMKnUC0G2InlNWcUf0tcsMMxaGYqdUgqxnKHeM1Aex_5SAJpYxL8k0q9RMAVWVjVPaWGd6q0ngHadojYZqLw2ZWeQvzw6peJmaGymTM5MrLKjkO3u1hpAETf7jF9yqMZXV75m0EiVM-YWoVrhNhMjCFdjxS8Oit5xShLJnVvpktnQXoz2EJKBmA4YszEGSX7GN7F2uOhFo0DueMTkE1KnGdujgsqfQ7tR9iYrkp7TR5ltJ9Gpj50gg"
                  alt="Çıtır Lahmacun"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between texture-parchment relative border-t border-outline-variant/10">
                {/* Copper Accent Badge */}
                <div className="absolute -top-4 right-6 bg-secondary text-on-secondary px-3 py-1 rounded text-xs font-bold shadow-md">
                  Çok Satan
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-on-surface text-xl">Çıtır Lahmacun</h3>
                    <span className="font-label-md text-label-md text-primary font-bold">80 ₺</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 text-sm">
                    Odun ateşinde pişmiş incecik hamur, bol malzemeli geleneksel tarif.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Karışık */}
            <div className="group bg-surface rounded-xl overflow-hidden ambient-shadow border border-outline-variant/20 hover:border-primary/50 transition-all flex flex-col hover:shadow-lg">
              <div className="h-64 overflow-hidden relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3rwlsEJLKMiOUTt6oNXYzX1QvLbbCWCaTIENFg_boAGnGjCy15_CSpN6W1Qd67OdWZxXsK6kSZFNWv1sMxZAoV5LIF_u2IL-2udZLHGT2E8yJ4SA4PpwbkPL2yTdZ7NU8DR1DIKL5_aO25x4q-mI_wGdHY0SJZtW7agqLF27UoJ3zdRaJ68d_n1KwSV6p3ks5nb2wkzKbYK4_GNPCW6Qo1lMZrRFX6sD3ZKU8qEDwrV-VAKS5yvHK476O7EHqLoU0IrQ3peLs3A"
                  alt="Karışık Izgara"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between texture-parchment border-t border-outline-variant/10">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-headline-md text-on-surface text-xl">Karışık Izgara</h3>
                    <span className="font-label-md text-label-md text-primary font-bold">650 ₺</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 text-sm">
                    Karar veremeyenler için tüm lezzetler tek bir tepside. İki kişilik.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/nebioglupide/menu" 
              className="inline-flex items-center gap-2 text-primary hover:text-secondary font-label-md text-label-md transition-colors border-b border-transparent hover:border-secondary pb-1 font-bold"
            >
              Tüm Menüyü Gör
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* Hot Delivery Section (Asymmetric Layout) */}
        <section className="bg-surface-container-low rounded-2xl overflow-hidden ambient-shadow border border-outline-variant/30 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center texture-parchment">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>two_wheeler</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4 text-2xl md:text-3xl">Sıcak ve Hızlı Teslimat</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm md:text-base leading-relaxed">
              Giresun Merkez ve çevresine, lezzetinden ve sıcaklığından ödün vermeden siparişlerinizi ulaştırıyoruz. Özel yalıtımlı çantalarımızla lahmacununuz çıtır, kebabınız dumanı tüterek kapınıza gelir.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-label-md text-sm">Ortalama 30-45 dk Teslimat Süresi</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-label-md text-sm">Özel Yalıtımlı Paketleme</span>
              </div>
            </div>
            <div>
              <a 
                href="tel:04540000000" 
                className="bg-mustard-yellow hover:bg-[#d4ac0d] text-charcoal font-label-md text-label-md px-6 py-3 rounded font-bold transition-all inline-flex items-center gap-2 shadow-sm scale-95 active:scale-90"
              >
                Sipariş Hattı: 0(454) 000 00 00
              </a>
            </div>
          </div>
          <div className="md:w-1/2 min-h-[300px] relative">
            {/* Using map image */}
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlpLeX--WxjDQ2asr2YqunKgN2lJrvRMLX4jRi1DG4B3DhoyPO55EhiJOzJqEY6SzQi-_sZk49cXLOWKZ08QDUclHBVCRDw8F8gJHL4siNRXeKr1oCIn9ShyONe9MD7I2I4dQwDauAFlo5A1TPj1pqqr2I6WgM6-mKfq3X2mBo13EDGEDzgHMOQ-YD1aFLzBz57BFu5FORre-KlRD0cLIpcrRk7DZHx6pWDpD4rvBtly-CF8ucaFgmyXjIs7phYs-ggapIpziOcA"
              alt="Giresun Merkez Paket Servis Haritası"
              fill
              className="object-cover"
            />
            {/* Overlay Gradient to blend with left side */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface-container-low to-transparent hidden md:block"></div>
          </div>
        </section>

        {/* Master Culinary Story Section */}
        <section className="relative py-12 md:py-16">
          {/* Background image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB--SL2iwURtTymNPoBLIxXI-OHoYZfnUwXAEDFAlv7p2HQH4KC3488ioiKvRzDc_Ji_h3Esevvy8my4TH_Al7ZBBFEvJZ5qKvOvtRaMlwN05UAAA2MB9QZbkr52Bm6hSOQINvZfMImGTKXOMrlkAtK0kKJtBt7Obh_HK5IXWD6a2ysyuPFvQBQUZ9bBwT_QHx-Fx3C8y1TYxTGgVlQDHMd8KhayreEhuh0bOyOHZBmrruF0tDQ5K4Xz9WXCT_W1lL97V7IXzrySw"
              alt="Ocakbaşı ateşi ve kömürler"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-xs"></div>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center px-6 md:px-12">
            {/* Image of Master */}
            <div className="relative w-full max-w-sm mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-primary/20 rounded-lg translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"></div>
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden border-4 border-surface shadow-xl">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzn4aFPY_VvDHVCsyAAW-LmiCv4oftMIAZZaTVCqJgmnHCq9SwkZIDHhxyTzVNLCN7zIIxVyTIJJvR7hvhNsyPsG8NcpFypRr1471FUraZPHmTmw3EpkEU6AdmaVGAHw3A7AKzjLxU76m8WY2qaBe2Fo78NBVIu2iH0iF3SwGmnIdj52_WhQt54BC_fZ7QjV5fQZvJJHiwcaG_oNUeEtJcw7Hzn11cxkH7BdESg2CGuPI2GTLSb5k_2IiQqHNFUhRW8MC_V5AC-Q"
                  alt="Ali Haydar Usta"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-on-surface">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2 text-2xl md:text-3xl">Ustalığın Sırrı: Gelenek</h2>
              <div className="h-1 w-16 bg-mustard-yellow mb-6"></div>
              <p className="font-body-md text-body-md mb-4 text-sm md:text-base opacity-90 leading-relaxed">
                Yılların verdiği tecrübe, ateşe olan saygı ve en iyi malzemeyi seçme ustalığı... Ali Haydar Usta'nın tezgahından çıkan her bir porsiyon, Anadolu'nun zengin mutfak kültürünün bir yansımasıdır.
              </p>
              <p className="font-body-md text-body-md mb-8 text-sm md:text-base opacity-90 leading-relaxed">
                &quot;Gerçek lezzet, sabırla yoğrulan ete ve odun ateşinin isine gizlidir.&quot; felsefesiyle, fabrikasyon üretimden uzak, tamamen el emeği ile hazırlanan menümüz, sizi Giresun&apos;da gerçek bir Ocakbaşı deneyimine davet ediyor.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                </div>
                <span className="font-headline-md text-headline-md text-on-surface-variant italic text-xl md:text-2xl">Ali Haydar Usta</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Mobile Call FAB */}
      <a 
        aria-label="Hemen Ara" 
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-mustard-yellow rounded-full flex items-center justify-center text-charcoal shadow-lg z-50 hover:scale-105 active:scale-95 transition-transform" 
        href="tel:04540000000"
      >
        <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>phone</span>
      </a>
    </main>
  );
}
