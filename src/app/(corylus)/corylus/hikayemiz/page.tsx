import Link from "next/link";

export default function Story() {
  return (
    <div className="flex flex-col w-full pb-16">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[380px] flex items-end pb-12 px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 bg-surface-variant overflow-hidden">
          <img
            alt="Chef preparing pastry"
            className="w-full h-full object-cover object-center opacity-85"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBErN30HwIeVHyvbftRJQAyfXhVXxDGQ13DrNLyglh9SJlx7x6EQKsr66zT5u2jeTwEafmeqrqCwudBexs-djh08e_6mt22Lp-IVw2J4cGYwrQ-5kk-ER37PpvXC9GexVV2RiioHXA9yHjhKc-c3UMIVavFeLmpNHq1hMyJpD6aRQU8KyzM4RxyZHRadNyQYl12UTP4JTsj6fPGV0h53Eyjik7TXDSIZQOOpyZPgD-5n7rvFlgZ4CbynTZPmeK-vuz-bt56Sy8nuNo"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-0">
          <h1 className="font-serif text-3xl md:text-5xl text-primary font-bold mb-4 leading-tight">
            Köklü Bir Tutku,<br />Modern Bir Füzyon.
          </h1>
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Giresun'un fındık bahçelerinden ilham alan yolculuğumuz, dünya lezzetleriyle buluşuyor.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col gap-16">
        
        {/* Bento Grid: Ustalık ve Tutku */}
        <section className="flex flex-col gap-8">
          <div className="mb-2">
            <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-2">Ustalık ve Tutku</h2>
            <div className="w-12 h-1 bg-secondary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">
            {/* Craft Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-primary">restaurant</span>
              </div>
              <h3 className="font-serif text-xl text-primary font-bold mb-4 relative z-10">Zanaatın İzinde</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed relative z-10">
                Her bir tabak, yılların verdiği tecrübe ve mutfağa olan derin saygımızın bir yansımasıdır. Malzemelerin en saf halini koruyarak, onlara modern bir dokunuş katıyoruz. Corylus Cafe'de yemek bir ihtiyaç değil, bir sanattır.
              </p>
            </div>

            {/* Heritage Card */}
            <div className="bg-primary-container rounded-2xl p-8 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[250px] group">
              <div className="absolute inset-0 opacity-15">
                <img
                  alt="Bakery tools"
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW9t1salmRG6WMJTcPOJCArXz8dGfHdWibIug3nCZhXxFjyWnARpIDhkXFZbdSwmkNKQ16G8yXmy0D80XWOAZLX_qzgpQuS1wPWrn5MFu4P-nkQ2sEj8ENK6oTvmIkeUcj4JsiD3CaTDbzJHG6QAVl2PEjTQE0CrQJD654YmvYXFI3mHAuiJ9CtbVg3nfeNKtZu48XBzbvZBjyPNoTE-04KF1-tyhaT1ap0eYN5zrdRgmUZdX-aAl_6cYylTYtvhZRTTcYiU2J4q0"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <span className="inline-block bg-secondary-container text-on-secondary-container font-sans text-xs font-bold px-3 py-1 rounded-full w-max uppercase tracking-wider">
                  Giresun'un Kalbi
                </span>
                <h3 className="font-serif text-xl text-on-primary-container font-bold">Yerel Miras</h3>
                <p className="font-sans text-sm text-on-primary-container/85 leading-relaxed">
                  Corylus (Fındık) adını aldığımız toprakların bereketini, evrensel mutfak teknikleriyle harmanlıyoruz. Yerel üreticilerimizle kurduğumuz güçlü bağ, kalitemizin temelidir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Highlight */}
        <section className="py-10 border-y border-outline-variant/30 flex flex-col items-center justify-center text-center px-4 max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-4xl text-secondary mb-4">format_quote</span>
          <p className="font-serif text-lg md:text-xl text-primary italic leading-relaxed">
            &ldquo;Topraklarımızdan aldığımız ilhamı, dünya mutfaklarının modern teknikleriyle buluşturarak her tabakta benzersiz bir hikaye yaratıyoruz.&rdquo;
          </p>
          <span className="font-sans text-xs uppercase tracking-widest text-on-surface-variant mt-4 font-bold">
            - Şef Ahmet Zeren
          </span>
        </section>

        {/* Fusion Philosophy */}
        <section className="flex flex-col gap-8">
          <div className="mb-2 text-center flex flex-col items-center">
            <span className="material-symbols-outlined text-3xl text-secondary mb-2">local_dining</span>
            <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-2">Füzyon Mutfak Felsefemiz</h2>
            <p className="font-sans text-sm text-on-surface-variant max-w-[600px]">
              Doğu'nun baharatlı sıcaklığı ile Batı'nın rafine teknikleri tek bir menüde buluşuyor.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-all duration-300">
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <img
                alt="Sushi and local dish fusion"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw4d7KvcWCkoD3zm3kRd7H-L740miyN6E9e5OqccKvJjOkIMU-QXIm5xhWN4gVGVPY3Nly_Hsvk5QfKqFIgJ6jQRKQvF7C6uE-rP6hv4wBKHPyepIYgceUrkue823evKoQCcwt5fCNTyGcam8qdxjqVmjdEjom3e1XcAUBpHImr2CYpLzP575RKTYAiEgiVZH4aq8X_rXiEe1YeZD80iWBeCrK96f5AUTBMlEYj-6ruqGgo4SC5QVJqS6-lfuM3v1K8C2rIA6kC1I"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center gap-6">
              <h3 className="font-serif text-xl md:text-2xl text-primary font-bold">Sınırları Aşan Lezzetler</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Japon mutfağının hassasiyetini, İtalyan hamur işlerinin sıcaklığını ve Türk mutfağının derinliğini bir araya getiriyoruz. Sushi menümüzden, odun ateşinde pişen özel pidelerimize kadar her tabak, sınırları aşan bir lezzet hikayesi anlatır.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container text-primary font-sans text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  Sushi Sanatı
                </span>
                <span className="bg-surface-container text-primary font-sans text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  Artisan Bakery
                </span>
                <span className="bg-surface-container text-primary font-sans text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  Modern Türk
                </span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
