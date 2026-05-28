import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const categories = [
    {
      name: "Sıcak Kahveler",
      desc: "Espresso bazlı klasiklerden Manchego spesiyallerine uzanan sıcak lezzetler.",
      icon: "local_cafe",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSTPSj-tV6MqVN8FcDluPhw8NZ1NyCVAE1KVIwowU8VeiuH-aX3DHbcVnyd98Vjb79ery2CgyKedpYEmu8n2JXgj-2UBAvkehT0sl-oHQorFxXWW07yNx7eeJGyrO9OSYkWby8Xx1higCLgyMaHmoXFjdQjVZK0xjaR3BjAjVI1LL48YBSIqRF7_Z-Lo6jNfxD8HXGWSzyczY7_syJZKCavPElhqgio4PpBhdFpqbEyr0nL68VtKjzAl11GQky8EyDiHG75zlEfX8",
    },
    {
      name: "Soğuk Kahveler",
      desc: "Buzlu klasiklerden Cold Brew ve özel serinletici karışımlara.",
      icon: "ac_unit",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1hi7onjS-Q-ixhJ4FLkMA-KAwwxde7uWqY5dPbYddcA116sTLmoZHf95GMhxvdCz70q4ebzLq3SNIf2sUCk19gMcmyAvLkrQHSKVyw8k5a1BSHt9CLjRewOgyRePeKOoecd9p5Rp6stvkBliEn6DEiaLSMIXcgjQzZ3EoWqP9zIGqH943XWZSiY5tkZvZrQxO9GADq7JT6Y-F4EfHQvBiofyuadMWDtdyuvQbmuoPXQ8tF1lINa-viFl_KhBhkIbJVL6VNahxzf8",
    },
    {
      name: "Taze Unlu Mamuller",
      desc: "Her sabah fırınımızdan çıkan çıtır kruvasanlar ve el yapımı tatlılar.",
      icon: "bakery_dining",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3qm-47cZThxq54XbmYHzGjhbAuF7-iGe0sangS3Pre6hR0A8pEgOrXSdCstwbjPQaGObWmrRRloHQXlCL2wMHvJxwSvQQ-UpbgROByTtmLYlGrFQ26vugjUuqJ37GrWflvPvsJIS9zjf0vmWc9zkkQoLIr-Y4DiIY0fVEhc0uhEGVzwnEjc-E2pIimjdiOBBdXvgPrxPPYBxmOk2p7aEIIVUOrUcSyeUPbBBA4UuL58qPn0uSqzNPwR4GUaAtUbbPBPS4cvL0Ygw",
    },
  ];

  const featuredProducts = [
    {
      name: "Cortado",
      price: "₺85",
      desc: "Eşit oranda espresso ve sıcak sütün mükemmel dengesi.",
      badge: null,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSTPSj-tV6MqVN8FcDluPhw8NZ1NyCVAE1KVIwowU8VeiuH-aX3DHbcVnyd98Vjb79ery2CgyKedpYEmu8n2JXgj-2UBAvkehT0sl-oHQorFxXWW07yNx7eeJGyrO9OSYkWby8Xx1higCLgyMaHmoXFjdQjVZK0xjaR3BjAjVI1LL48YBSIqRF7_Z-Lo6jNfxD8HXGWSzyczY7_syJZKCavPElhqgio4PpBhdFpqbEyr0nL68VtKjzAl11GQky8EyDiHG75zlEfX8",
    },
    {
      name: "Iced Latte",
      price: "₺95",
      desc: "Sıcak yaz günlerinin vazgeçilmezi, buz gibi serinlik.",
      badge: null,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1hi7onjS-Q-ixhJ4FLkMA-KAwwxde7uWqY5dPbYddcA116sTLmoZHf95GMhxvdCz70q4ebzLq3SNIf2sUCk19gMcmyAvLkrQHSKVyw8k5a1BSHt9CLjRewOgyRePeKOoecd9p5Rp6stvkBliEn6DEiaLSMIXcgjQzZ3EoWqP9zIGqH943XWZSiY5tkZvZrQxO9GADq7JT6Y-F4EfHQvBiofyuadMWDtdyuvQbmuoPXQ8tF1lINa-viFl_KhBhkIbJVL6VNahxzf8",
    },
    {
      name: "Taze Kruvasan",
      price: "₺70",
      desc: "Her sabah taze pişen, tereyağlı çıtır kruvasan.",
      badge: "Şefin Tavsiyesi",
      tags: ["Vejetaryen"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3qm-47cZThxq54XbmYHzGjhbAuF7-iGe0sangS3Pre6hR0A8pEgOrXSdCstwbjPQaGObWmrRRloHQXlCL2wMHvJxwSvQQ-UpbgROByTtmLYlGrFQ26vugjUuqJ37GrWflvPvsJIS9zjf0vmWc9zkkQoLIr-Y4DiIY0fVEhc0uhEGVzwnEjc-E2pIimjdiOBBdXvgPrxPPYBxmOk2p7aEIIVUOrUcSyeUPbBBA4UuL58qPn0uSqzNPwR4GUaAtUbbPBPS4cvL0Ygw",
    },
    {
      name: "Tuzlu Karamel Brownie",
      price: "₺110",
      desc: "Yoğun Belçika çikolatası ve deniz tuzu dokunuşu.",
      badge: null,
      tags: ["Glutensiz Seçenek"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn1Cg7bcuTVVOmn-hcL3gB8RfFc5x2S6ZRNNV5R33myis_kh_dIN9J5Q7Wj5V8TCMsk3FF6U583BZbovMY23Ncit8Lqk2q9KiKbSgc0M-LO-8fkr83kJlUZfhTVexlMJSezqtrexkM1lrib_ayRxgDxwib3ggkSgNS1MBuOP1x6jO_340JsxN88ntWH7_cW_UV_ZocmT0wShHKrgjKZCsdBHBH4csNWIqv-pAkrIP4gzkUmjXSqGAdPwKP1UJZLH-ZVIyV6xBH_RI",
    },
  ];

  const testimonials = [
    {
      name: "Ayşe Yılmaz",
      meta: "Yerel Rehber • 2 hafta önce",
      initial: "A",
      bgColor: "bg-terracotta",
      text: "Giresun'da içtiğim açık ara en iyi kahve. Özellikle çalışanların ilgisi ve mekanın huzurlu atmosferi harika. Laptopumu alıp saatlerce çalışabileceğim favori mekanım oldu.",
    },
    {
      name: "Caner Kaya",
      meta: "1 ay önce",
      initial: "C",
      bgColor: "bg-espresso",
      text: "Paket servisleri çok hızlı ve kahve asla soğumadan geliyor. Kruvasanları Paris'tekileri aratmaz. Kalite tesadüf değildir, Manchego bunu kanıtlıyor.",
      highlight: true,
    },
    {
      name: "Zeynep D.",
      meta: "3 ay önce",
      initial: "Z",
      bgColor: "bg-secondary",
      text: "Hafta sonu kahvaltısı sonrası tatlı ve kahve ritüelimiz için tek adresimiz. Tuzlu karamelli brownie efsane. Mekanın iç tasarımı çok dinlendirici.",
    },
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe6mYyWQsKB_boiGyV82HBf5vFixy_eSmwyHESwaV0cSN4KoM-PzRQyiYVW0W10pkAYKXDe1yxUFHbgAxWx7yCJhVmVaTUIBlZqmYWOAvdXnToR2LNXRhdpnypgIirapxrDX8r-2uAp89tcHkN41KMP_un-PqgxAV8-PVOo8KlRQqrN-Ly0kpH9L-fEt28XXzZdEAJr_lAbcMOKbdSRaH8u6EottO2fzzTe5Zz9Z5WOIPb8_K9DNT05C2wrGJ2ao5fR67VuY1fZJY"
            alt="Artisan cafe environment"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-multiply"></div>
        </div>

        <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-12 mt-16 md:mt-0">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/90 backdrop-blur-sm border border-outline-variant/50 rounded-full mb-6 shadow-sm animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-primary">Şimdi Açık • 08:00 - 22:00</span>
            </div>
            
            <h1 className="font-headline-xl text-headline-xl text-primary mb-6 drop-shadow-sm max-w-2xl leading-tight">
              Giresun'daki Günlük <br />
              <span className="text-terracotta italic font-normal">Kahve Kaçamağınız</span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
              Özenle seçilmiş çekirdekler, usta ellerden çıkan lezzetler. Karadeniz'in huzur veren atmosferinde, modern bir kahve deneyimi.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/manchegocoffee/menu"
                className="w-full sm:w-auto bg-terracotta text-white font-label-md text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-level-2 hover:-translate-y-1 hover:shadow-lg hover:bg-terracotta/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Menüyü İncele</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/manchegocoffee/siparis"
                className="w-full sm:w-auto bg-background text-espresso font-label-md text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-espresso hover:bg-espresso hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">takeout_dining</span>
                <span>Paket Servis</span>
              </Link>
            </div>
          </div>

          {/* Desktop stylized emblem wrapper */}
          <div className="hidden md:flex flex-1 justify-end animate-float">
            <div className="w-80 h-80 rounded-full border-4 border-cream/50 bg-primary/95 flex flex-col items-center justify-center text-white shadow-2xl p-6 relative overflow-hidden group hover:border-terracotta transition-colors duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(#B85C38_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
              <span className="material-symbols-outlined text-terracotta text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                coffee
              </span>
              <h2 className="font-headline-lg text-2xl font-bold tracking-wide mb-2 text-center">
                MANCHEGO
              </h2>
              <p className="font-label-sm text-xs text-cream uppercase tracking-[0.2em] mb-4">
                COFFEE ROASTERS
              </p>
              <span className="w-8 h-0.5 bg-terracotta"></span>
              <p className="font-body-md text-xs text-center text-surface-variant/80 mt-4 max-w-[200px]">
                Nitelikli Çekirdekler &amp; Taze Kavrulmuş Lezzetler
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Categories/Features Section */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Nitelikli Kahve Deneyimi
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Kahvemizin yolculuğu dünyanın en iyi kahve tarlalarında başlar, Giresun'daki fincanınızda son bulur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl overflow-hidden shadow-level-1 hover:shadow-level-2 transition-all duration-300 group border border-outline-variant/30 flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
                    <span className="material-symbols-outlined text-terracotta">
                      {cat.icon}
                    </span>
                    <h3 className="font-headline-md text-xl font-bold">{cat.name}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                    {cat.desc}
                  </p>
                  <Link
                    href="/manchegocoffee/menu"
                    className="inline-flex items-center gap-2 text-terracotta hover:text-primary font-semibold text-sm group/btn"
                  >
                    <span>Keşfet</span>
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Favorite Products Section */}
      <section className="py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="font-label-sm text-terracotta uppercase tracking-wider block mb-2">
                En Çok Tercih Edilenler
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Favori Lezzetlerimiz
              </h2>
            </div>
            <Link
              href="/manchegocoffee/menu"
              className="font-label-md text-primary hover:text-terracotta flex items-center gap-1 transition-colors group"
            >
              <span>Tüm Menüyü Gör</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((prod, i) => (
              <div
                key={i}
                className="bg-surface rounded-2xl overflow-hidden shadow-level-1 border border-surface-variant group flex flex-col relative"
              >
                {prod.badge && (
                  <div className="absolute top-0 left-0 bg-terracotta text-white font-label-sm px-3 py-1 rounded-br-xl z-10 shadow-sm text-xs font-semibold">
                    {prod.badge}
                  </div>
                )}
                <div className="h-48 overflow-hidden relative bg-surface-container-low">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-sm text-espresso hover:text-terracotta cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-[20px] font-variation-settings-['FILL'_0]">
                      favorite
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-md text-lg text-primary font-bold">
                        {prod.name}
                      </h3>
                      <span className="font-label-md text-terracotta font-semibold">
                        {prod.price}
                      </span>
                    </div>
                    <p className="font-body-md text-xs text-on-surface-variant mb-4 leading-relaxed line-clamp-2">
                      {prod.desc}
                    </p>
                    {prod.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {prod.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-secondary-container/50 text-espresso font-label-sm px-2 py-0.5 rounded-full text-[10px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link
                    href="/manchegocoffee/siparis"
                    className="w-full py-2.5 border border-espresso text-espresso font-label-sm rounded-xl hover:bg-espresso hover:text-white transition-colors flex items-center justify-center gap-2 text-xs font-semibold btn-hover"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      add_shopping_cart
                    </span>
                    <span>Sipariş Ver</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-white mb-4">
              Misafirlerimiz Ne Diyor?
            </h2>
            <div className="flex items-center justify-center gap-2 text-tertiary-fixed font-label-md">
              <span className="material-symbols-outlined text-cream" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined text-cream" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined text-cream" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined text-cream" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="material-symbols-outlined text-cream" style={{ fontVariationSettings: "'FILL' 1" }}>
                star_half
              </span>
              <span className="ml-2 text-surface-variant text-sm font-semibold">4.8 Google Değerlendirmesi</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border backdrop-blur-md transition-all duration-300 ${
                  test.highlight
                    ? "bg-terracotta/20 border-terracotta/30 md:-translate-y-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
                    : "bg-surface/10 border-white/10 hover:bg-surface/20"
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full ${test.bgColor} flex items-center justify-center font-headline-md text-white font-bold`}>
                    {test.initial}
                  </div>
                  <div>
                    <h4 className="font-label-md text-white font-semibold">{test.name}</h4>
                    <span className="font-label-sm text-surface-variant text-[10px]">
                      {test.meta}
                    </span>
                  </div>
                </div>
                <p className={`font-body-md text-sm italic leading-relaxed ${test.highlight ? "text-white" : "text-surface-container-low"}`}>
                  "{test.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
