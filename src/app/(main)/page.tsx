import React from "react";
import Link from "next/link";

interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  route: string;
  color: string;
  textColor: string;
  borderColor: string;
  tags: string[];
}

export default function ShowcasePage() {
  const projects: Project[] = [
    {
      id: "azikburger",
      name: "Azik Burger",
      subtitle: "Giresun'un En Lezzetli Burgeri",
      description: "Ateşli ve enerjik tasarımıyla, odun ateşinde pişen gerçek el yapımı burger deneyimini sunan dijital sipariş ve menü platformu.",
      icon: "lunch_dining",
      route: "/azikburger",
      color: "from-orange-600/20 to-amber-600/5 hover:border-orange-500/50 hover:shadow-orange-500/10",
      textColor: "text-orange-400",
      borderColor: "border-orange-500/20",
      tags: ["Bebas Neue", "Ateş Izgarası", "Hızlı Sipariş"],
    },
    {
      id: "corylus",
      name: "Corylus Cafe & Patisserie",
      subtitle: "Dünya Lezzetleri ve Yöresel Esintiler",
      description: "Playfair Display ve Hanken Grotesk tipografileriyle bezenmiş, fındık bahçelerinden ilham alan modern ve lüks bir cafe menü tasarımı.",
      icon: "local_cafe",
      route: "/corylus",
      color: "from-amber-800/20 to-yellow-800/5 hover:border-amber-600/50 hover:shadow-amber-600/10",
      textColor: "text-amber-300",
      borderColor: "border-amber-700/20",
      tags: ["Lüks Tasarım", "Glassmorphism", "Görsel Menü"],
    },
    {
      id: "manchegocoffee",
      name: "Manchego Coffee",
      subtitle: "Nitelikli Kahve Deneyimi",
      description: "Montserrat tipografisi ve sıcak terracotta tonlarıyla kahve kokusunu ekranlara taşıyan, modern ve estetik kahve dükkanı konsepti.",
      icon: "coffee",
      route: "/manchegocoffee",
      color: "from-[#B85C38]/20 to-[#4B3832]/5 hover:border-[#B85C38]/50 hover:shadow-[#B85C38]/10",
      textColor: "text-[#EADBC8]",
      borderColor: "border-[#B85C38]/20",
      tags: ["Montserrat", "Sıcak Tonlar", "Nitelikli Kahve"],
    },
    {
      id: "nebioglupide",
      name: "Nebioğlu Pide & Kebap",
      subtitle: "Ali Haydar Usta Lezzetleri",
      description: "Gerçek odun ateşinde pişen çıtır lahmacunlar ve dumanı üstünde kebaplar için tasarlanmış, eskitilmiş kağıt dokulu geleneksel menü.",
      icon: "restaurant",
      route: "/nebioglupide",
      color: "from-red-800/20 to-rose-900/5 hover:border-red-600/50 hover:shadow-red-600/10",
      textColor: "text-red-400",
      borderColor: "border-red-900/20",
      tags: ["Newsreader", "Eskitilmiş Doku", "Kebap & Pide"],
    },
    {
      id: "parkpidesalonu",
      name: "Park Pide Salonu",
      subtitle: "Geleneksel Karadeniz Pidesi",
      description: "Giresun'un meşhur yöresel pide kültürünü, taş fırının samimiyeti ve sade, iştah açıcı renk tonlarıyla buluşturan modern arayüz.",
      icon: "local_pizza",
      route: "/parkpidesalonu",
      color: "from-red-700/20 to-orange-800/5 hover:border-red-500/50 hover:shadow-red-500/10",
      textColor: "text-red-400",
      borderColor: "border-red-800/20",
      tags: ["Source Serif 4", "Sade & Şık", "Yöresel Lezzet"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#070302] overflow-x-hidden font-sans relative">
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#B85C38]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12 border-b border-white/5 backdrop-blur-md sticky top-0 z-40 bg-[#070302]/85">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#B85C38] to-[#EADBC8] p-[1.5px]">
              <div className="w-full h-full bg-[#070302] rounded-[11px] flex items-center justify-center">
                <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-tr from-[#B85C38] to-[#EADBC8] text-[22px]">
                  rocket_launch
                </span>
              </div>
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider text-white">YAMAN</span>
              <span className="font-light text-lg tracking-wider text-gray-400">LABS</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Tüm Demolar Hazır
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto px-6 pt-16 pb-12 text-center flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 bg-[#B85C38]/10 text-[#EADBC8] font-semibold text-xs px-3.5 py-1.5 rounded-full border border-[#B85C38]/20 tracking-wider uppercase mb-2">
          <span className="material-symbols-outlined text-[14px]">dashboard</span>
          Yaman Labs Dijital Vitrin
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none max-w-4xl">
          Gelecek Nesil <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B85C38] via-[#EADBC8] to-[#B85C38] bg-size-200 animate-gradient">
            Dijital Restoran Deneyimleri
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-light">
          Giresun&apos;un önde gelen lezzet durakları için tasarlanmış, her biri özgün renk paletleri ve tipografilerle bezenmiş 5 adet Next.js web projesinin tek çatı altındaki ortak vitrini.
        </p>
      </section>

      {/* Bento Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const isLarge = idx === 0 || idx === 1;
            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl border ${project.borderColor} bg-gradient-to-b ${project.color} p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-lg backdrop-blur-sm ${
                  isLarge ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Background Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top,rgba(184,92,56,0.1),transparent_50%)] pointer-events-none"></div>

                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3.5 rounded-xl bg-[#070302]/70 border ${project.borderColor} ${project.textColor} flex items-center justify-center shadow-md`}>
                      <span className="material-symbols-outlined text-[28px]">{project.icon}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-w-[70%] justify-end">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/5 border border-white/10 text-[10px] text-gray-300 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Info */}
                  <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                    {project.name}
                  </h2>
                  <p className={`text-xs font-bold ${project.textColor} uppercase tracking-widest mt-1 mb-3`}>
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Card Button */}
                <Link
                  href={project.route}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white hover:text-black font-semibold text-sm transition-all shadow-md group/btn"
                >
                  Demoyu Keşfet
                  <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </main>

      {/* Tech Stack Info Section */}
      <section className="w-full py-16 bg-[#070302] border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Showcase Altyapısı</h2>
            <p className="text-gray-400 text-sm font-light max-w-xl">
              Tüm projeler tek bir Next.js uygulamasında toplanarak sunucu yükü minimize edilmiş ve modern optimizasyon teknikleri entegre edilmiştir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            <div className="p-6 bg-white/2 rounded-2xl border border-white/5 flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-orange-400 text-[36px]">layers</span>
              <h3 className="font-bold text-white text-base">Yüksek Stil İzolasyonu</h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Her projeye ait Tailwind v4 stil değişkenleri, özel CSS sınıfları ile kapsüllenerek çakışmalar tamamen engellenmiştir.
              </p>
            </div>
            <div className="p-6 bg-white/2 rounded-2xl border border-white/5 flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-amber-400 text-[36px]">route</span>
              <h3 className="font-bold text-white text-base">Route Group Mimarisi</h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Layout dosyaları route grupları ile yönetilerek her projenin kendi font, script ve metadata ayarları korunmuştur.
              </p>
            </div>
            <div className="p-6 bg-white/2 rounded-2xl border border-white/5 flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-red-400 text-[36px]">bolt</span>
              <h3 className="font-bold text-white text-base">Next.js App Router</h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                React Server Components ve dinamik routing avantajlarıyla yüksek hızlı sayfa geçişleri ve optimize edilmiş SEO değerleri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/5 text-center text-xs text-gray-500 bg-[#070302]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Yaman Labs. Bütün hakları saklıdır.</p>
          <p className="font-light">Giresun Dijital Dönüşüm Projesi</p>
        </div>
      </footer>
    </div>
  );
}
