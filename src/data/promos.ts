export interface PromoTier {
  category: string;
  icon: string;
  plans: {
    contract: string;
    promoDuration: string;
    promoPrice: string;
    highlight?: boolean;
  }[];
  ctaText: string;
  ctaParam: string;
}

export const PROMO_TIERS: PromoTier[] = [
  {
    category: 'Penapis Air & Penulen Udara',
    icon: '💧',
    plans: [
      { contract: 'Kontrak 3+2 Tahun', promoDuration: '3 Bulan Pertama', promoPrice: 'RM20' },
      { contract: 'Kontrak 5+0 Tahun', promoDuration: '5 Bulan Pertama', promoPrice: 'RM20' },
      { contract: 'Kontrak 7+0 Tahun', promoDuration: '7 Bulan Pertama', promoPrice: 'RM20', highlight: true },
    ],
    ctaText: 'Tuntut Promosi Penapis Air / Udara',
    ctaParam: 'promosi%20penapis%20air%20RM20'
  },
  {
    category: 'Kerusi Urut & Tilam Hotel',
    icon: '🛏️',
    plans: [
      { contract: 'Kontrak 5+0 Tahun', promoDuration: '3 Bulan Pertama', promoPrice: 'RM20' },
      { contract: 'Kontrak 7+0 Tahun', promoDuration: '5 Bulan Pertama', promoPrice: 'RM20' },
      { contract: 'Kontrak 9+0 Tahun', promoDuration: '7 Bulan Pertama', promoPrice: 'RM20', highlight: true },
    ],
    ctaText: 'Tuntut Promosi Kerusi Urut & Tilam',
    ctaParam: 'promosi%20kerusi%20urut%20Coway%20RM20'
  },
  {
    category: 'Penyaman Udara (Inverter)',
    icon: '❄️',
    plans: [
      { contract: 'Kontrak 5+0 Tahun', promoDuration: '3 Bulan Pertama', promoPrice: 'RM20' },
      { contract: 'Kontrak 7+0 Tahun', promoDuration: '5 Bulan Pertama', promoPrice: 'RM20', highlight: true },
    ],
    ctaText: 'Tuntut Promosi Penyaman Udara',
    ctaParam: 'promosi%20penyaman%20udara%20Coway%20RM20'
  }
];
