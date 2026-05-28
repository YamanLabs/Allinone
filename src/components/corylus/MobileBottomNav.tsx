"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const bottomItems = [
    { name: "Ana Sayfa", href: "/corylus", icon: "home" },
    { name: "Menü", href: "/corylus/menu", icon: "restaurant_menu" },
    { name: "Hikayemiz", href: "/corylus/hikayemiz", icon: "auto_stories" },
    { name: "İletişim", href: "/corylus/iletisim", icon: "contact_support" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface dark:bg-surface-container-low shadow-[0_-10px_30px_rgba(62,39,35,0.04)] border-t border-outline-variant/20 rounded-t-xl py-2 px-4 flex justify-around items-center">
      {bottomItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 active:scale-90 ${
              isActive
                ? "bg-secondary-container text-on-secondary-container px-4 py-1"
                : "text-on-surface-variant hover:bg-surface-variant/30"
            }`}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={{
                fontVariationSettings: isActive ? "'FILL' 1, 'wght' 400" : "'FILL' 0, 'wght' 400",
              }}
            >
              {item.icon}
            </span>
            <span
              className={`font-sans text-[10px] uppercase tracking-wider mt-0.5 ${
                isActive ? "font-bold" : ""
              }`}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
