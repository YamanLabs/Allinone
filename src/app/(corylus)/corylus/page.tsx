import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const chefRecommendations = [
    {
      name: "Truffle Burger",
      description: "Özel soslu brioche ekmeği, 200gr dana köfte, karamelize soğan ve trüf mayonez.",
      price: "340 ₺",
      tag: "Yeni",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMwGlfSBdvJTB6T0jz-KEXNWO7fsxv9ndFVXCmr9WVthOndeq4n9qYiLpIoFPxIYSdqAUhDNVKJ_I-fWb8eLa0K55MeDeExnMX84kZVyhP5aPOArbdhQoyu-vY4svHY5T0NUsB2CihMmZB72NDDosB4CSx3Xp8MhuuopRwbzAV8TvlAeAvG4fGRUN08xbdX0jd_80XCyQHYhXhZKF2-PQEXbuy2FOwckeF28d1pyC1Vz9vHT4RMofshcWsgj_PGLd8YDoj-2dpgGw",
    },
    {
      name: "San Sebastian Cheesecake",
      description: "Akışkan kıvamlı, özel Belçika çikolatası sosu ile servis edilen imza tatlımız.",
      price: "190 ₺",
      tag: "İmza",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsVFMqa9qiLcRfgRKxohj6nC-MArFBU3EJjqEz3nYZYRkyruQTHIxxKTQ5EP000QDw0r5OpzCll7WbDwqQ_yCgKzzalxDK7cJxHsuDsd4zPjiql6HKLODe6CPpnZZveKaHmT_JHvWAEo0LQ4AtiIjCB3BC_24KhQu9GBfyy4hLh4LI5_Ik60K6XW5VNQuALvm6j0b0XGHoxgjfR8tIZAlNBytbpJMKwx9_dbWeiOvzJgiJ-TfRPIxHWFtEqlMjxzEQoNzj65B08Ig",
    },
  ];

  const categories = [
    {
      name: "Kahvaltı",
      desc: "Güne mükemmel başlangıç",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoC8IRRfgnyOO4LiWr6oyRULUvFATu3nUUaDTuSakLj128tHm9mnMsmIm81Z1-P3l9tuKPEdhBSwzqNOFefPynVGnJddDeUdM4iMDkQUIaSVna-HCTFasyZxdykEP5b6wrzMwaOisxx8_l8ENFtFFY21ZEE1CSEFl1waAIb25ubsh8-mDDorqEAqPfNmeTZUJundy2FoSER3x_G365GAyM4_5Gd1AIR7LXogPhUi9B3myGlCf97SAEOLDy8A3sNlclRn7bf2-gZ3U",
      colSpan: "col-span-2",
      href: "/corylus/menu?category=Kahvaltı",
    },
    {
      name: "Sushi",
      desc: "Zarif Uzak Doğu esintisi",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzU5e3Z-3CAqBywvYlKdy_gh-IEOvIf96UZaALTALb9sZBfsnY9d0qbZZnfv6I49kvxEkBsWIuElHHK1BnhKv8KZLiE-Qm1siByi92vnm2rAIEKVn_fQyiRyR54P5myMjACl2zPJhdWzEXA3-XIUvltym9Jl1h6ff-NlIWyV1BbnxP0V2D9hc_hAeHxXgKAqyh8imiAEtziYZSaLdGjKtGqg_l0dIfyDzWOFZixF0mn1upbgAYT27Bjczk3JO27Swz2ZRSYRwUYOE",
      colSpan: "col-span-1",
      href: "/corylus/menu?category=Dünya Mutfağı",
    },
    {
      name: "Tatlılar",
      desc: "Tatlı bir son",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyckITFh01iKUeeeLN_2nyUK28E7kw2cg9KlN-XXm7MhZ9u9j0sqBvzfKx_7TveP5czPdNZbeyP-6TCxV3im5wtCK-zRAwtMkEdweRE5fvX1ImtNEefDCjMf8npCGktfENSxRpq2BEIXrDU-ewsRl8KiyEwd3axRrK0jMQ2ekoGgLDP1RMd6PwOFKycjL9J1zc-RSe5ExXkvFS3dBWB4Nt3zC5Fyqsu9C99v2M6eUP06K5HGQzjmsDao7zzlG-GtOdmCZehGvefsI",
      colSpan: "col-span-1",
      href: "/corylus/menu?category=Tatlı Köşesi",
    },
  ];

  const instagramPosts = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAyTLUY3PDgooh9BuqTF8l7I0rv-kSP8vYEYAHaIY4aCLrdmu3Zg1hDegIb9MCkp5mc8tZRuBW4eYKq1zlXn7k_mNeD83J5joTQhpp9PLONwWrWfi33YS2nNwXJY3sqOPApICWT7XZjDPtEY8reuwAN2s8dfmY-rqSiMUbM0NR2h6HEBgKdcsnPi1ClZfzm6Yc7tWtCeU_BqrjCUAxo0xsxlUFYuTJFHhgVhJzvxyW7Tr0k6KCRdBJ3lUp1tr0uAnUziPxX_h6r_Jo",
    "https://lh3.googleusercontent.com/aida/ADBb0uiVgNNET0oCTE4pp6C9YUylPsyDI-UjRWwFQ-9GQWtK4890RmbbtMhpJR8ZXaIx-XdS8iWetjsOKgcePEJX-IEjjCAQWLHvAXUQjbktO4jwjQQ5aRUa-Ej3oQIAngDgQN9BkPceApNeCxsocoHY8jWUGBrNr9UIzyA1WzTeazsR9th-NJTPA7wyIai0b5hvFdh8I6YYos0_2jwPqOMx-wj_-zKfOAAwF4mmeS_9L2VjJ8PX9O02IbwoDIQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAE4OCbdfdWa9cuaMaxnjh8Yt0DtvQ0QwTt1cd94Alc11Sea33JMali1klLCMn7p8Ty65ddIUSMxi4S3sTyrTOSrHUPvHEC0Mk_qPaV2av3wNXl_EgL58Inc_3pPA-mVe6IbTARu4nMGYWz4hGhw2jtjOCPGGr77KW8f4qQTM7qD1GXnVxGXwR59XMMIt_64dZrxY3W5lri1PNxEhSgKF2joQMbFjx7xPF-CE2dvl9dvnUXr4jRmGFzAZ6gK3NJYKPxz-3hhPxAV4Y"
  ];

  return (
    <div className="flex flex-col w-full pb-10">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[420px] flex items-end pb-12 px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-transparent z-10"></div>
          {/* Using raw img to support external Google Usercontent without complex domains configurations */}
          <img
            alt="Corylus Cafe Hero Image"
            src="https://lh3.googleusercontent.com/aida/ADBb0uiVgNNET0oCTE4pp6C9YUylPsyDI-UjRWwFQ-9GQWtK4890RmbbtMhpJR8ZXaIx-XdS8iWetjsOKgcePEJX-IEjjCAQWLHvAXUQjbktO4jwjQQ5aRUa-Ej3oQIAngDgQN9BkPceApNeCxsocoHY8jWUGBrNr9UIzyA1WzTeazsR9th-NJTPA7wyIai0b5hvFdh8I6YYos0_2jwPqOMx-wj_-zKfOAAwF4mmeS_9L2VjJ8PX9O02IbwoDIQ"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-20 w-full max-w-container-max mx-auto text-on-primary">
          <span className="font-sans text-xs font-bold text-secondary-container tracking-[0.2em] mb-2 block uppercase">
            Corylus Cafe & Patisserie
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-4 text-white drop-shadow-md leading-tight">
            Lezzetin<br />Sanata Dönüşümü.
          </h1>
          <p className="font-sans text-base text-white/90 max-w-md mb-6 drop-shadow-sm leading-relaxed">
            Günün her saati, özenle hazırlanmış tatlarla dolu bir mola.
          </p>
          <Link
            href="/corylus/menu"
            className="inline-flex bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-sans text-sm font-bold uppercase tracking-wider hover:bg-secondary-fixed hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Menüyü İncele
          </Link>
        </div>
      </section>

      {/* Quick Categories (Bento Style) */}
      <section className="py-16 px-margin-mobile w-full max-w-container-max mx-auto md:px-margin-desktop">
        <h2 className="font-serif text-2xl md:text-3xl text-primary mb-8 flex items-center">
          <span className="w-8 h-px bg-secondary mr-4"></span>
          Kategoriler
        </h2>
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className={`${cat.colSpan} relative h-48 md:h-64 rounded-2xl overflow-hidden group shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
            >
              <img
                alt={cat.name}
                src={cat.img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full flex justify-between items-end">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-white font-semibold">{cat.name}</h3>
                  <p className="font-sans text-xs md:text-sm text-white/80 mt-1">{cat.desc}</p>
                </div>
                <span className="bg-white/20 backdrop-blur-md text-white p-2.5 rounded-full flex items-center justify-center group-hover:bg-secondary-container group-hover:text-on-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Zeren'in Tercihi Section */}
      <section className="py-16 bg-surface-container-low w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-8">
            <span className="font-sans text-xs font-bold text-secondary tracking-widest uppercase mb-1 block">
              Şefin Önerisi
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold">
              Zeren'in Tercihi
            </h2>
          </div>

          {/* Cards container */}
          <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 space-x-4 md:space-x-6 md:grid md:grid-cols-2 md:space-x-0 md:gap-6">
            {chefRecommendations.map((item, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[85vw] max-w-[340px] md:w-full md:max-w-none glass-panel rounded-2xl overflow-hidden ambient-shadow flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    alt={item.name}
                    src={item.img}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full font-sans text-[10px] font-bold tracking-wider uppercase">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-primary font-bold mb-2">{item.name}</h3>
                    <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4 mt-auto">
                    <span className="font-sans text-lg font-bold text-primary">{item.price}</span>
                    <Link
                      href="/corylus/menu"
                      className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300"
                    >
                      <span className="material-symbols-outlined">add</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Utilities Section */}
      <section className="py-16 px-margin-mobile max-w-container-max mx-auto w-full md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <a
            href="https://maps.google.com/?q=Giresun+Citlakkale"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 hover:bg-surface-container-low hover:border-outline-variant/40 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <div className="bg-primary-container/10 p-4 rounded-full text-primary">
              <span className="material-symbols-outlined text-3xl">directions</span>
            </div>
            <div>
              <h3 className="font-serif text-lg text-primary font-bold">Yol Tarifi Al</h3>
              <p className="font-sans text-xs text-on-surface-variant mt-0.5">
                Çıtlakkale Mah. İnönü Cad. Giresun'daki şubemize kolayca ulaşın.
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/904545002800"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-[#25D366]/10 rounded-2xl shadow-sm border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <div className="bg-[#25D366]/20 p-4 rounded-full text-[#25D366]">
              <span className="material-symbols-outlined text-3xl">chat</span>
            </div>
            <div>
              <h3 className="font-serif text-lg text-primary font-bold">WhatsApp Sipariş</h3>
              <p className="font-sans text-xs text-on-surface-variant mt-0.5">
                Paket servis ve rezervasyon taleplerinizi doğrudan bize iletin.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-16 px-margin-mobile max-w-container-max mx-auto w-full md:px-margin-desktop border-t border-outline-variant/20">
        <div className="flex flex-col items-center justify-center mb-8">
          <h3 className="font-serif text-2xl text-primary flex items-center gap-2 font-bold">
            <span className="material-symbols-outlined text-secondary">photo_camera</span>
            @coryluscafe
          </h3>
          <p className="font-sans text-sm text-on-surface-variant mt-1">Sosyal medyada bizi takip edin, lezzetli anları paylaşın.</p>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          {instagramPosts.map((post, idx) => (
            <div key={idx} className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden shadow-sm group relative">
              <img
                alt={`Instagram Post ${idx + 1}`}
                src={post}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl">favorite</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
