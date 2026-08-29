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
    category: 'Penapis Air & Udara',
    icon: '💧',
    plans: [
      { contract: 'Kontrak 3+2 Tahun', promoDuration: '3 Bulan Pertama', promoPrice: 'RM20' },
      { contract: 'Kontrak 5+0 Tahun', promoDuration: '5 Bulan Pertama', promoPrice: 'RM20' },
      { contract: 'Kontrak 7+0 Tahun', promoDuration: '7 Bulan Pertama', promoPrice: 'RM20', highlight: true },
    ],
    ctaText: 'Claim Promosi Penapis Air / Udara',
    ctaParam: 'promo%20penapis%20air%20RM20'
  },
  {
    category: 'Tilam & Kerusi Urut',
    icon: '🛏️',
    plans: [
      { contract: 'Kontrak 5+0 Tahun', promoDuration: '3 Bulan Pertama', promoPrice: 'RM20' },
      { contract: 'Kontrak 7+0 Tahun', promoDuration: '5 Bulan Pertama', promoPrice: 'RM20' },
      { contract: 'Kontrak 9+0 Tahun', promoDuration: '7 Bulan Pertama', promoPrice: 'RM20', highlight: true },
    ],
    ctaText: 'Claim Promosi Tilam & Kerusi Urut',
    ctaParam: 'promo%20tilam%20Coway%20RM20'
  },
  {
    category: 'Penghawa Dingin (Aircond)',
    icon: '❄️',
    plans: [
      { contract: 'Kontrak 5+0 Tahun', promoDuration: '3 Bulan Pertama', promoPrice: 'RM20' },
      { contract: 'Kontrak 7+0 Tahun', promoDuration: '5 Bulan Pertama', promoPrice: 'RM20', highlight: true },
    ],
    ctaText: 'Claim Promosi Aircond',
    ctaParam: 'promo%20aircond%20Coway%20RM20'
  }
];
