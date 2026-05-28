'use client';

import React, { useState } from 'react';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'burger' | 'sides' | 'drinks';
  badge?: string;
  badgeType?: 'hot' | 'best';
  image?: string;
  icon?: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Azık Klasik',
    price: 180,
    description: '150g dana köfte, cheddar peyniri, karamelize soğan, taze marul, domates ve özel Azık sos.',
    category: 'burger',
    badge: 'Çok Satan',
    badgeType: 'best',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfKrpSdXEnQExmXoo9YanVC1zmwwjVPVGiswTf31WL8ugAm2DtssHpBe0bXADOkdzHAGg4OpWtsA2-yGeGNEnTkQjJCF4EuCt4IKTVMALElFWQGOACkTphglUA8V7PaNpe0My7_njK-R5J6H3E3mLOb5HHw0HIZNgvJoDVdH_kkWWu4Pu8vek8WbB6aLZOZ1Ax3WdLtim21FTDpprzowIccLXNyaLVLVMy-F8QDBS_0XQyMUYmpf39zh4dhq6_yuZjjGk35hoJr3aK'
  },
  {
    id: '2',
    name: 'Double Cheese',
    price: 240,
    description: 'Çift kat 150g dana köfte, ekstra cheddar peyniri, turşu, ketçap ve hardal ile klasik lezzet.',
    category: 'burger',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfKrpSdXEnQExmXoo9YanVC1zmwwjVPVGiswTf31WL8ugAm2DtssHpBe0bXADOkdzHAGg4OpWtsA2-yGeGNEnTkQjJCF4EuCt4IKTVMALElFWQGOACkTphglUA8V7PaNpe0My7_njK-R5J6H3E3mLOb5HHw0HIZNgvJoDVdH_kkWWu4Pu8vek8WbB6aLZOZ1Ax3WdLtim21FTDpprzowIccLXNyaLVLVMy-F8QDBS_0XQyMUYmpf39zh4dhq6_yuZjjGk35hoJr3aK'
  },
  {
    id: '3',
    name: 'Acılı Burger',
    price: 200,
    description: '150g dana köfte, jalapeno biber, pepper jack peyniri, çıtır soğan ve acı mayo sos.',
    category: 'burger',
    badge: 'Acı',
    badgeType: 'hot',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfKrpSdXEnQExmXoo9YanVC1zmwwjVPVGiswTf31WL8ugAm2DtssHpBe0bXADOkdzHAGg4OpWtsA2-yGeGNEnTkQjJCF4EuCt4IKTVMALElFWQGOACkTphglUA8V7PaNpe0My7_njK-R5J6H3E3mLOb5HHw0HIZNgvJoDVdH_kkWWu4Pu8vek8WbB6aLZOZ1Ax3WdLtim21FTDpprzowIccLXNyaLVLVMy-F8QDBS_0XQyMUYmpf39zh4dhq6_yuZjjGk35hoJr3aK'
  },
  {
    id: '4',
    name: 'Baharatlı Patates',
    price: 60,
    description: 'Özel baharat karışımı ile panelenmiş çıtır patates kızartması.',
    category: 'sides',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2CtmxGqcvxef-5OQd1DWaesYbL_ttS19BhJAJ2I-YYSqkxmQO_uGkHKLNlLuJpSZ3wCC3Z2QyFImTOiUFCRPVpd5nTP9k4FYsVe2D-bQlxhGLVyyO8I8BVBBaTCgDjn030Q0qMPl4jOyOfK6tY4ndODoFXMz0oLOyxBn4Lb_cchebz27--7m759syAQ7LD26_bVT7KNTBrLdbAVHdoT1R8DymI8tuuex9paL-txHGpZNVJJGYSEZc7OoT-p_9QLwMGwnnjNL_nYIn'
  },
  {
    id: '5',
    name: 'Soğan Halkası',
    price: 55,
    description: 'Çıtır kaplamalı altın sarısı soğan halkaları (6 adet).',
    category: 'sides',
    icon: 'restaurant'
  },
  {
    id: '6',
    name: 'Ev Yapımı Limonata',
    price: 45,
    description: 'Taze sıkılmış limon ve nane yapraklarıyla serinletici lezzet.',
    category: 'drinks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD69Y64EDzyJzfhIsZqIAAXqhIxPJD2-CJA8WuVZJ1j2LMoYo783fbzYaPbpr533gbKRj8IJYHJCBNvEteOLnl68_LYGpi2NslU8Qs2nh-e71WszRDHESAMDnPeEpuH5--9E3ktGyhEd3sSoXx35xQ3aWOOZNnUzIA0LtaMOmsO-SOlfLm2obipRtRYj_JO81kpqCI834q3AmFSsRdGAs5-Bby0fgqlPgjrbeZe64x0l3b0bB0HO7qkPN5lPssqkfqtzEJwBdsEepp8'
  },
  {
    id: '7',
    name: 'Kola',
    price: 35,
    description: '330ml kutu kola.',
    category: 'drinks',
    icon: 'local_drink'
  }
];

export default function MenuPage() {
  const [filter, setFilter] = useState<'all' | 'burger' | 'sides' | 'drinks'>('all');

  const filteredItems = filter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  return (
    <div className="w-full max-w-container-max mx-auto px-6 py-12 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4">LEZZET MENÜSÜ</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          En taze malzemelerle hazırlanan, odun ateşinde pişen efsanevi lezzetlerimizi keşfedin.
        </p>
      </header>

      {/* Kategori Navigasyonu */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        <button 
          onClick={() => setFilter('all')}
          className={`py-2 px-6 rounded-full font-label-bold text-label-bold transition-all shadow-sm border ${
            filter === 'all' 
              ? 'bg-primary-container text-on-primary border-primary-container' 
              : 'bg-surface-container-high text-on-surface hover:bg-surface-variant border-outline-variant'
          }`}
        >
          Tümü
        </button>
        <button 
          onClick={() => setFilter('burger')}
          className={`py-2 px-6 rounded-full font-label-bold text-label-bold transition-all shadow-sm border ${
            filter === 'burger' 
              ? 'bg-primary-container text-on-primary border-primary-container' 
              : 'bg-surface-container-high text-on-surface hover:bg-surface-variant border-outline-variant'
          }`}
        >
          Burgerler
        </button>
        <button 
          onClick={() => setFilter('sides')}
          className={`py-2 px-6 rounded-full font-label-bold text-label-bold transition-all shadow-sm border ${
            filter === 'sides' 
              ? 'bg-primary-container text-on-primary border-primary-container' 
              : 'bg-surface-container-high text-on-surface hover:bg-surface-variant border-outline-variant'
          }`}
        >
          Yan Ürünler
        </button>
        <button 
          onClick={() => setFilter('drinks')}
          className={`py-2 px-6 rounded-full font-label-bold text-label-bold transition-all shadow-sm border ${
            filter === 'drinks' 
              ? 'bg-primary-container text-on-primary border-primary-container' 
              : 'bg-surface-container-high text-on-surface hover:bg-surface-variant border-outline-variant'
          }`}
        >
          İçecekler
        </button>
      </div>

      {/* Menu items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col border border-surface-container"
          >
            {/* Image / Fallback Icon Container */}
            <div className="relative w-full pt-[75%] bg-surface-variant flex items-center justify-center">
              {item.image ? (
                <img 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover" 
                  src={item.image} 
                />
              ) : (
                <span className="material-symbols-outlined text-5xl text-tertiary select-none">
                  {item.icon || 'restaurant'}
                </span>
              )}

              {/* Custom Badges */}
              {item.badge && (
                <div className={`absolute top-4 left-4 font-label-bold text-label-bold px-3 py-1 rounded-full shadow-sm text-xs ${
                  item.badgeType === 'hot' 
                    ? 'bg-error text-on-error flex items-center gap-1' 
                    : 'bg-secondary-container text-on-secondary-container'
                }`}>
                  {item.badgeType === 'hot' && (
                    <span className="material-symbols-outlined text-sm fill">local_fire_department</span>
                  )}
                  {item.badge}
                </div>
              )}
            </div>

            {/* Item Details */}
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">{item.name}</h3>
                <span className="font-price-tag text-price-tag text-primary-container font-bold">{item.price}₺</span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow text-sm">
                {item.description}
              </p>
              <button className="w-full bg-inverse-surface text-on-primary font-label-bold text-label-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                Sepete Ekle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
