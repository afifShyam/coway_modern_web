import { Product, CategoryTab } from '@/types/product';

export const CATEGORY_TABS: CategoryTab[] = [
  { id: 'all', label: 'Semua Produk', icon: 'Sparkles', count: 27 },
  { id: 'water', label: 'Penapis Air', icon: 'Droplets', count: 10 },
  { id: 'air', label: 'Penapis Udara', icon: 'Wind', count: 5 },
  { id: 'relax', label: 'Kerusi Urut (Massage)', icon: 'Armchair', count: 4 },
  { id: 'berex', label: 'Tilam Hotel', icon: 'Bed', count: 2 },
  { id: 'aircond', label: 'Aircond', icon: 'Snowflake', count: 2 },
  { id: 'refrigerator', label: 'Peti Sejuk', icon: 'Refrigerator', count: 2 },
  { id: 'bathroom', label: 'Bilik Mandi', icon: 'Bath', count: 2 },
];

export const PRODUCTS: Product[] = [
  // ==========================================
  // --- WATER PURIFIERS (PENAPIS AIR) ---
  // ==========================================
  {
    id: 'villaem3',
    category: 'water',
    name: 'Villaem III',
    code: 'CHP-7320L',
    filterType: 'Reverse Osmosis (RO)',
    description: 'Model No.1 pilihan keluarga dengan 4 tetapan suhu air (Panas, Sejuk, Suam, Bilik) dan tangki besar 11.3L.',
    tags: ['4 Suhu Air', 'Tangki 11.3L', 'UV Sterilisation', 'Child Lock'],
    image: 'https://emall.coway.com.my/ProductImages/859ec6e7-6111-41bb-aad4-75a7145a8a50/1/240x240/villaem-3-white.png',
    regularMonthly: 'RM74.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,200',
    badge: 'Paling Popular',
    featured: true,
    colorVariants: [
      { name: 'Pure White', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/859ec6e7-6111-41bb-aad4-75a7145a8a50/1/240x240/villaem-3-white.png' },
      { name: 'Pebble Gray', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/cfa73eea-3f49-4543-8563-8f626a1e9ea5/1/240x240/villaem-3-gray.png' }
    ],
    tankCapacity: { hot: '1.2 L', cold: '2.3 L', ambient: '6.4 L', total: '11.3 L' },
    dimensions: '340 x 523 x 518 mm',
    powerConsumption: 'Heater 270W - 320W, Compressor 0.7A',
    filtrationStages: '6-Step Coway RO Filtration (Plus-Sediment, Pre-Carbon, RO Membrane, Plus Inno-Sense, Antibacterial)',
    keyFeatures: ['4 Suhu Air Berasingan', 'Pensterilan Faucet UV Automatik', 'Penunjuk Suhu LED & Mood Lamp', 'Child Lock Keselamatan Air Panas']
  },
  {
    id: 'ais',
    category: 'water',
    name: 'Coway AIS',
    code: 'CHPI-7520L',
    filterType: 'Reverse Osmosis (RO)',
    description: 'Penapis air serba canggih dengan pembuat ketulan ais kristal automatik & 3 pilihan suhu air.',
    tags: ['Pembuat Ais Kristal', 'Dual UV Care', '3 Suhu Air', 'Eco Mode'],
    image: 'https://emall.coway.com.my/ProductImages/cd349c96-7052-4f9a-a75d-7eb696eedaa3/1/240x240/ais-white.png',
    regularMonthly: 'RM120.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM7,500',
    badge: 'Pembuat Ais',
    featured: true,
    colorVariants: [
      { name: 'Porcelain White', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/cd349c96-7052-4f9a-a75d-7eb696eedaa3/1/240x240/ais-white.png' },
      { name: 'Pebble Gray', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/19f9ad9e-d9a0-4aeb-b633-f34bd0672416/1/240x240/ais-gray.png' }
    ],
    tankCapacity: { hot: '1.5 L', cold: '1.8 L', ambient: '1.8 L', ice: '0.7 kg', total: '5.8 L' },
    dimensions: '270 x 546 x 515 mm',
    powerConsumption: 'Heater 310W - 370W, Ice Maker 130W, Compressor 0.8A',
    filtrationStages: 'RO Pure Filtration + Dual UV Sterilisation System',
    keyFeatures: ['Ais Kristal Bullet Cepat', 'Dual UV Care pada Tangki & Faucet', 'Sentuhan Pintar My Cup Preset', 'Sistem Pembasmian Kuman Automatik']
  },
  {
    id: 'neon',
    category: 'water',
    name: 'Coway Neon',
    code: 'CHP-6210N',
    filterType: 'Natural Water',
    description: 'Rekaan ultra-slim minimalis moden 18cm yang menjimatkan ruang dapur dengan 3 suhu air mineral semula jadi.',
    tags: ['Ultra Slim 18cm', 'Natural Filter', '3 Suhu', '5 Pilihan Warna'],
    image: 'https://emall.coway.com.my/ProductImages/db8c15f4-b7a0-485a-ac62-6c2f7c1ec26e/1/240x240/neon-white.png',
    regularMonthly: 'RM59.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,600',
    badge: '5 Pilihan Warna',
    featured: true,
    colorVariants: [
      { name: 'Pure White', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/db8c15f4-b7a0-485a-ac62-6c2f7c1ec26e/1/240x240/neon-white.png' },
      { name: 'Pebble Gray', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/c4c984ec-a10b-4882-9d03-b1b989c7480b/1/240x240/neon-gray.png' },
      { name: 'Blush Pink', colorHex: '#F472B6', image: 'https://emall.coway.com.my/ProductImages/b415f28c-7f4f-40f3-84e1-617a6a2eeaa4/1/240x240/neon-pink.png' },
      { name: 'Sky Blue', colorHex: '#38BDF8', image: 'https://emall.coway.com.my/ProductImages/10d2a982-c861-44be-a493-e6d642196d30/1/240x240/neon-blue.png' },
      { name: 'Sage Green', colorHex: '#86EFAC', image: 'https://emall.coway.com.my/ProductImages/2308356a-5b9c-4259-bd58-58ed2a516b36/1/240x240/neon-green.png' }
    ],
    tankCapacity: { hot: '1.0 L', cold: '1.35 L', ambient: '2.65 L', total: '5.0 L' },
    dimensions: '180 x 440 x 422 mm',
    powerConsumption: 'Heater 300W, Compressor 0.5A',
    filtrationStages: 'Coway Nanotrap™ & Plus Inno-Sense Mineral Filtration',
    keyFeatures: ['Lebar Hanya 18cm Jimat Ruang', '5 Pilihan Warna Estetik Dapur', 'Panel Sentuh Pintar Intuitif', 'Kaya Mineral Semula Jadi']
  },
  {
    id: 'dazzie',
    category: 'water',
    name: 'Coway Dazzie',
    code: 'CHO-1201N',
    filterType: 'Natural Water',
    description: 'Penapis air moden tanpa tangki (tankless) dengan pemanasan & penyejukan segera dalam 3 saat.',
    tags: ['Tankless Direct', 'Pantas Panas 3s', '4 Tetapan Isipadu', '5 Pilihan Warna'],
    image: 'https://emall.coway.com.my/ProductImages/2cdb7053-6a95-4e6d-8ebc-4263cb6a23e7/1/240x240/dazzie-white.png',
    regularMonthly: 'RM74.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,590',
    badge: 'Tankless Segera',
    colorVariants: [
      { name: 'Pure White', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/2cdb7053-6a95-4e6d-8ebc-4263cb6a23e7/1/240x240/dazzie-white.png' },
      { name: 'Pebble Gray', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/57977099-8ba5-4172-89ef-57c34ffe121c/1/240x240/dazzie-gray.png' },
      { name: 'Blush Pink', colorHex: '#F472B6', image: 'https://emall.coway.com.my/ProductImages/1618281c-5660-47bd-b4f3-c4370fd3048c/1/240x240/dazzie-pink.png' },
      { name: 'Sky Blue', colorHex: '#38BDF8', image: 'https://emall.coway.com.my/ProductImages/be7b101b-1f39-4bd1-8205-16a7dcb1196b/1/240x240/dazzie-blue.png' },
      { name: 'Sage Green', colorHex: '#86EFAC', image: 'https://emall.coway.com.my/ProductImages/d8b2ec17-f24a-479c-982d-cd5f166e2ad9/1/240x240/dazzie-green.png' }
    ],
    tankCapacity: { total: 'Tankless (Aliran Terus Segera)' },
    dimensions: '180 x 440 x 385 mm',
    powerConsumption: 'Instant Heating 2200W, Fast Cooling 0.5A',
    filtrationStages: 'Nanotrap Filtration System + UV Faucet Cleanse',
    keyFeatures: ['Pemanasan Segera 3 Saat Tanpa Tunggu', '4 Pilihan Kuantiti Air (120ml, 250ml, 500ml, Berterusan)', 'Teknologi Tankless Paling Bersih & Segar']
  },
  {
    id: 'neoplus',
    category: 'water',
    name: 'Neo Plus',
    code: 'CHP-264L',
    filterType: 'Reverse Osmosis (RO)',
    description: 'Penapis air 3 suhu paling mesra bajet & praktikal untuk seisi keluarga dengan rekaan mesra pengguna.',
    tags: ['3 Suhu', 'Eco Sensor', 'RO Water', 'Paling Jimat'],
    image: 'https://emall.coway.com.my/ProductImages/4fc588de-8d1f-423d-9551-b88a032b2c6f/1/240x240/neo-plus.png',
    regularMonthly: 'RM59.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,640',
    badge: 'Mesra Bajet',
    tankCapacity: { hot: '1.0 L', cold: '2.3 L', ambient: '2.5 L', total: '5.8 L' },
    dimensions: '260 x 483 x 500 mm',
    powerConsumption: 'Heater 300W, Compressor 0.7A',
    filtrationStages: 'Coway 6-Step Reverse Osmosis Filtration',
    keyFeatures: ['3 Suhu Asas (Panas, Sejuk, Bilik)', 'Sensor Cahaya Eco Penjimatan Elektrik', 'Kunci Keselamatan Air Panas Kanak-kanak']
  },
  {
    id: 'cinnamon',
    category: 'water',
    name: 'Coway Cinnamon',
    code: 'P-6320R',
    filterType: 'Reverse Osmosis (RO)',
    description: 'Penapis air suhu bilik paling jimat & praktikal. Beroperasi 100% tanpa sebarang bekalan elektrik.',
    tags: ['Suhu Bilik', 'Tanpa Elektrik', 'RO Water', 'RM32/bln'],
    image: 'https://emall.coway.com.my/ProductImages/b79c1af2-60c6-46e3-a902-babade97ea48/1/240x240/cinnamon.png',
    regularMonthly: 'RM32.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM2,490',
    badge: 'Serendah RM32',
    tankCapacity: { ambient: '5.0 L', total: '5.0 L' },
    dimensions: '200 x 400 x 405 mm',
    powerConsumption: '0 Watt (Tanpa Elektrik)',
    filtrationStages: 'High Performance RO Membrane Filtration',
    keyFeatures: ['Bebas Kos Bil Elektrik', 'Kompak & Mudah Dialihkan', 'Kapasiti Tangki 5.0L']
  },
  {
    id: 'ombak',
    category: 'water',
    name: 'Coway Ombak',
    code: 'CHP-7310R',
    filterType: 'Reverse Osmosis (RO)',
    description: 'Direka khas untuk citarasa Malaysia dengan 50 tetapan suhu air dan tangki air panas ekstra besar 3.0L.',
    tags: ['50 Tetapan Suhu', 'Tangki Panas Mega 3.0L', 'RO Pure', 'UV Dispenser'],
    image: 'https://emall.coway.com.my/ProductImages/e460e15d-9be7-4e1d-b37d-48a283c529f8/1/240x240/ombak.png',
    regularMonthly: 'RM90.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,510',
    badge: 'Pilihan Ibu',
    tankCapacity: { hot: '3.0 L', cold: '2.3 L', ambient: '7.8 L', total: '13.1 L' },
    dimensions: '340 x 523 x 518 mm',
    powerConsumption: 'Heater 672W, Compressor 0.6A',
    filtrationStages: 'Coway RO System + UV Sterilisation Dispenser',
    keyFeatures: ['50 Kombinasi Tetapan Suhu & Isipadu Air', 'Tangki Air Panas Gergasi 3.0 Liter', 'UV Sterilisation Faucet Semasa Pengeluaran']
  },
  {
    id: 'coreslim',
    category: 'water',
    name: 'Core Slim',
    code: 'CHP-5731N',
    filterType: 'Natural Water',
    description: 'Penapis air berdiri (floor standing) ultra slim dengan rekaan anggun untuk ruang tamu, dapur & pejabat.',
    tags: ['Floor Standing', 'Slim Profile', 'Tangki 12.0L', '3 Suhu'],
    image: 'https://emall.coway.com.my/ProductImages/cc9302e6-fdfe-4881-bcc5-b37babee082e/1/240x240/core-slim-white.png',
    regularMonthly: 'RM89.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM5,000',
    badge: 'Floor Standing',
    colorVariants: [
      { name: 'Porcelain White', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/cc9302e6-fdfe-4881-bcc5-b37babee082e/1/240x240/core-slim-white.png' },
      { name: 'Pebble Gray', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/8561e6f3-94ce-457a-a473-77865dd80bee/1/240x240/core-slim-gray.png' }
    ],
    tankCapacity: { hot: '3.6 L', cold: '3.8 L', ambient: '4.6 L', total: '12.0 L' },
    dimensions: '260 x 483 x 1150 mm',
    powerConsumption: 'Heater 500W, Compressor 0.7A',
    filtrationStages: 'Coway Nanotrap™ Filtration & Mineral Boost',
    keyFeatures: ['Rekaan Floor Standing Anggun Tanpa Meja', 'Tangki Besar 12 Liter', 'Ketinggian Ergonomik']
  },
  {
    id: 'coreplus',
    category: 'water',
    name: 'Core Plus',
    code: 'CHP-5721L',
    filterType: 'Reverse Osmosis (RO)',
    description: 'Kapasiti tangki gergasi 21.1 Liter. Pilihan utama pejabat, restoran, surau dan keluarga besar.',
    tags: ['Tangki 21.1L Mega', 'RO Water', 'Pejabat & Restoran'],
    image: 'https://emall.coway.com.my/ProductImages/ec48948e-5e2f-4edd-8531-58dd0edad5e3/1/240x240/core-plus.png',
    regularMonthly: 'RM93.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM6,500',
    badge: 'Kapasiti Mega',
    tankCapacity: { hot: '3.6 L', cold: '6.0 L', ambient: '11.5 L', total: '21.1 L' },
    dimensions: '370 x 490 x 1257 mm',
    powerConsumption: 'Heater 500W - 660W, Compressor 0.8A',
    filtrationStages: 'Coway Commercial Grade Reverse Osmosis Filter',
    keyFeatures: ['Tangki Mega 21.1 Liter Tidak Pernah Putus Air', 'Sesuai Penggunaan Tinggi Berterusan', 'Kualiti Air RO 100% Tulen']
  },
  {
    id: 'outdoor',
    category: 'water',
    name: 'Outdoor Filter',
    code: 'POE-23A',
    filterType: 'PVDF Membrane',
    description: 'Penapis air utama luar rumah menapis keladak, karat, dan kotoran sebelum masuk ke paip seluruh rumah.',
    tags: ['Outdoor POE', 'Backwash Automatik', 'PVDF Membrane', 'Tahan Karat'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-outdoor-filter-POE-23A-e1768813038791.png',
    regularMonthly: 'RM60.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,500',
    badge: 'Luar Rumah',
    dimensions: '210 x 210 x 1020 mm',
    filtrationStages: 'PVDF Hollow Fibre Ultrafiltration Membrane (0.01 Micron)',
    keyFeatures: ['Menapis Air Sebelum Masuk ke Rumah', 'Sistem Pembersihan Balik Automatik (Auto Backwash)', 'Badan Keluli Tahan Karat Gred Tinggi']
  },

  // ==========================================
  // --- AIR PURIFIERS (PENAPIS UDARA) ---
  // ==========================================
  {
    id: 'storm2',
    category: 'air',
    name: 'Storm II',
    code: 'AP-1523D',
    description: 'Penapis udara No.1 paling popular dengan sirkulator udara berkuasa tinggi sejauh 10 meter.',
    tags: ['HEPA H13', 'Sirkulator 10m', 'Liputan 50m²', 'Anti-Bakteria'],
    image: 'https://emall.coway.com.my/ProductImages/f18d8c4d-f7d0-4eb5-a5da-389fbc5a66ad/1/240x240/storm-2.jpg',
    regularMonthly: 'RM60.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,190',
    badge: 'No.1 Air Purifier',
    featured: true,
    dimensions: '410 x 515 x 752 mm',
    powerConsumption: '42 Watt',
    filtrationStages: 'Pre-Filter, Fine Dust Filter, Deodorisation Filter, Coway HEPA H13 Filter',
    keyFeatures: ['Kipas Sirkulator Udara Jarak Jauh 10 Meter', 'Liputan Luas 50m² (540 sq ft)', 'Sensor Habuk & Kualiti Udara 4 Warna', 'Mod Haze Khas']
  },
  {
    id: 'lombok3',
    category: 'air',
    name: 'Lombok 3',
    code: 'AP-1520C',
    description: 'Sistem penapisan 6-Peringkat dengan RBD Plasma & Ioniser untuk membasmi virus, kuman dan alergen haiwan.',
    tags: ['RBD Plasma', 'Ioniser', 'Bebas Alahan', 'Liputan 50m²'],
    image: 'https://emall.coway.com.my/ProductImages/67a5be7b-e151-44c3-9079-994677a451b6/1/240x240/lombok-3.jpg',
    regularMonthly: 'RM60.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,490',
    badge: 'Pakar Alahan',
    dimensions: '414 x 264 x 651 mm',
    powerConsumption: '50 Watt',
    filtrationStages: '6-Step Filtration + RBD Plasma & Negative Ion Generator',
    keyFeatures: ['Pemusnah Virus & Bakteria RBD Plasma', 'Penjana Ion Negatif Udara Segar Hutan', 'Terbukti Menyingkirkan Bulu Kucing & Hama']
  },
  {
    id: 'studio',
    category: 'air',
    name: 'Coway Studio',
    code: 'AP-1924A',
    description: 'Rekaan estetik silinder moden dengan pengambilan udara 360 darjah untuk bilik tidur & ruang kerja.',
    tags: ['360° Air Intake', 'Mod Senyap', 'Jimat Ruang', 'Pilihan Warna'],
    image: 'https://emall.coway.com.my/ProductImages/9b502336-eff4-4e13-99c6-ac4689181c2b/1/240x240/studio-white.png',
    regularMonthly: 'RM49.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'NA',
    badge: 'Serendah RM49',
    colorVariants: [
      { name: 'Modern White', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/9b502336-eff4-4e13-99c6-ac4689181c2b/1/240x240/studio-white.png' },
      { name: 'Warm Beige', colorHex: '#E7DEC8', image: 'https://emall.coway.com.my/ProductImages/58e15860-eac2-48d6-b551-19d8012c2f98/1/240x240/studio-beige.png' }
    ],
    dimensions: '260 x 260 x 480 mm',
    powerConsumption: '30 Watt',
    filtrationStages: 'All-in-One 360° True HEPA Filtration',
    keyFeatures: ['Sedutan Udara Silinder 360 Darjah', 'Operasi Senyap Mod Tidur', 'Lampu Indikator Kualiti Udara Estetik']
  },
  {
    id: 'suite',
    category: 'air',
    name: 'Coway Suite',
    code: 'AP-2524B',
    description: 'Penapis udara berkapasiti sederhana-besar dengan motor senyap dan rekaan anggun Scandinavian.',
    tags: ['Liputan 66m²', 'Motor Senyap', 'Pilihan Warna', 'HEPA H13'],
    image: 'https://emall.coway.com.my/ProductImages/6f51c08c-77e3-49cf-85cd-0ba40602cfea/1/240x240/suite-white.png',
    regularMonthly: 'RM65.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'NA',
    badge: 'Scandinavian',
    colorVariants: [
      { name: 'Modern White', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/6f51c08c-77e3-49cf-85cd-0ba40602cfea/1/240x240/suite-white.png' },
      { name: 'Warm Beige', colorHex: '#E7DEC8', image: 'https://emall.coway.com.my/ProductImages/37594b88-f027-44f9-b721-dcc47def94ec/1/240x240/suite-beige.png' }
    ],
    dimensions: '360 x 360 x 600 mm',
    filtrationStages: 'True HEPA H13 + Deodorisation Filter',
    keyFeatures: ['Liputan Luas 66m²', 'Pengesan Gas & Bau Pintar', 'Motor Inverter Senyap Bertenaga']
  },
  {
    id: 'atrium',
    category: 'air',
    name: 'Coway Atrium',
    code: 'AP-3525I',
    description: 'Penapis udara gred komersial/ruang tamu besar dengan rekaan mewah bertaraf seni antarabangsa.',
    tags: ['Liputan 99m²', '3 Pilihan Warna', 'Dual Filter', 'Ultra Luxury'],
    image: 'https://emall.coway.com.my/ProductImages/ac34611e-d910-44c0-b9b9-28e5c639f9b0/1/240x240/atrium-white.png',
    regularMonthly: 'RM89.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,800',
    badge: 'Ruang Tamu Besar',
    colorVariants: [
      { name: 'Modern White', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/ac34611e-d910-44c0-b9b9-28e5c639f9b0/1/240x240/atrium-white.png' },
      { name: 'Warm Beige', colorHex: '#E7DEC8', image: 'https://emall.coway.com.my/ProductImages/82f5db57-d480-4bc2-b822-802dc5dfc269/1/240x240/atrium-beige.png' },
      { name: 'Slate Gray', colorHex: '#64748B', image: 'https://emall.coway.com.my/ProductImages/99a8a5aa-d3df-4e61-a7f5-ba5955d27b33/1/240x240/atrium-gray.png' }
    ],
    dimensions: '400 x 400 x 780 mm',
    filtrationStages: 'Dual Side Mega HEPA Filter System',
    keyFeatures: ['Liputan 99m² (1,065 sq ft)', 'Dual Fan Airflow System', '3 Pilihan Warna Premium']
  },

  // ==========================================
  // --- MASSAGE & RELAX (KERUSI & KATIL URUT BEREX) ---
  // ==========================================
  {
    id: 'pebble',
    category: 'relax',
    name: 'BEREX Pebble Massage Chair',
    code: 'MC-C01',
    description: 'Kerusi urutan estetik kompak berteknologi urutan 3D, pemanas haba badan, Bluetooth speaker, dan mod Zero Gravity.',
    tags: ['Urutan 3D', 'Zero Gravity', 'Pemanas Haba', '4 Pilihan Warna'],
    image: 'https://emall.coway.com.my/ProductImages/8b8abf5f-2bc3-4ed3-9a95-5bbb5f7b41dc/1/240x240/pebble-mystic-grey.png',
    regularMonthly: 'RM120.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM8,000',
    badge: '4 Pilihan Warna',
    featured: true,
    colorVariants: [
      { name: 'Mystic Grey', colorHex: '#64748B', image: 'https://emall.coway.com.my/ProductImages/8b8abf5f-2bc3-4ed3-9a95-5bbb5f7b41dc/1/240x240/pebble-mystic-grey.png' },
      { name: 'Sand Beige', colorHex: '#D6C5B3', image: 'https://emall.coway.com.my/ProductImages/0c88e5fd-a79c-47be-8e77-eaa4916fbf25/1/240x240/pebble-sand-beige.png' },
      { name: 'Terracotta Pink', colorHex: '#E09F8F', image: 'https://emall.coway.com.my/ProductImages/b4bd6469-edf6-436c-a2b2-fd7afe113ff3/1/240x240/pebble-terracotta-pink.png' },
      { name: 'Hazy Blue', colorHex: '#7A9FB8', image: 'https://emall.coway.com.my/ProductImages/ebfc1727-f750-48dd-95d3-160fa3b33b57/1/240x240/pebble-hazy-blue.png' }
    ],
    dimensions: '700 x 1150 x 1030 mm',
    powerConsumption: '120 Watt',
    keyFeatures: [
      'Roller Urutan 3D Mengikut Lengkung Tulang Belakang SL-Track',
      'Mod Kedudukan Rehat Zero Gravity',
      'Pemanasan Haba Thermal di Bahagian Pinggang & Belakang',
      'Pembesar Suara Bluetooth Premium Terbina Dalam'
    ]
  },
  {
    id: 'mine',
    category: 'relax',
    name: 'BEREX Mine Massage Chair',
    code: 'MC-B02',
    description: 'Kerusi urutan kompak ergonomik dengan modul urutan betis & kaki boleh pusing 180° dan beg udara pinggul.',
    tags: ['180° Swivel Footrest', 'Airbag Pinggul', '3 Pilihan Warna', 'Kompak'],
    image: 'https://emall.coway.com.my/ProductImages/3ecf4894-ce52-4c21-8fd4-c02fa4e58bde/1/240x240/mine-champagne-beige.png',
    regularMonthly: 'RM110.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM7,500',
    badge: '3 Pilihan Warna',
    colorVariants: [
      { name: 'Champagne Beige', colorHex: '#E5D9C5', image: 'https://emall.coway.com.my/ProductImages/3ecf4894-ce52-4c21-8fd4-c02fa4e58bde/1/240x240/mine-champagne-beige.png' },
      { name: 'Ink Black', colorHex: '#1F242A', image: 'https://emall.coway.com.my/ProductImages/ed1db9d7-6a0b-4c66-9f27-7d0d9c1c036f/1/240x240/mine-ink-black.png' },
      { name: 'Rose Brown', colorHex: '#8D6559', image: 'https://emall.coway.com.my/ProductImages/b0e24212-4a7b-4993-94ef-75bf2de52116/1/240x240/mine-rose-brown.png' }
    ],
    dimensions: '650 x 1080 x 1010 mm',
    powerConsumption: '100 Watt',
    keyFeatures: [
      'Penyandar Kaki Boleh Pusing 180° Jadi Kerusi Sofa Biasa',
      'Urutan Mampatan Beg Udara di Pinggul & Peha',
      'Mod Urutan Senyap Sesuai di Bilik Tidur',
      'Saiz Kompak Menjimatkan Ruang Rumah'
    ]
  },
  {
    id: 'senno-plus',
    category: 'relax',
    name: 'BEREX Senno Plus Massage Chair',
    code: 'MC-LUX01',
    description: 'Kerusi urutan eksekutif gred flagship dengan AI Body Scan, urutan tapak kaki refleksologi dan kompresi udara penuh.',
    tags: ['AI Body Scan', 'Gred Flagship', 'Urutan Kaki Penuh', '4D Massage'],
    image: 'https://emall.coway.com.my/ProductImages/036165bd-c4eb-4ce1-8d69-d4dc4042f09d/1/240x240/coway-berex-senno-plus.png',
    regularMonthly: 'RM160.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM13,500',
    badge: 'Gred Flagship Elit',
    dimensions: '820 x 1500 x 1200 mm',
    powerConsumption: '200 Watt',
    keyFeatures: [
      'Pengimbasan Postur Badan AI Sensor Pintar',
      'Roller Urutan 4D Mendalam dari Leher Hingga Paha Bawah',
      'Refleksologi Tapak Kaki Berputar & Airbag Betis Penuh',
      'Skrin Kawalan Sentuh Digital Terbina Dalam'
    ]
  },
  {
    id: 'massage-bed',
    category: 'relax',
    name: 'BEREX Thermal Massage Bed',
    code: 'MB-B01 / MB-C01',
    description: 'Katil urutan pintar terapi haba batu jed asli untuk regangan dan penjajaran tulang belakang dari leher ke pinggul.',
    tags: ['Terapi Batu Jed', 'Inframerah Jauh', 'Boleh Lipat', 'Penjajaran Tulang'],
    image: 'https://emall.coway.com.my/ProductImages/cfa028ff-a59e-438d-a3db-eb9c05ae895e/1/240x240/massage-bed-premium-champagne-beige.png',
    regularMonthly: 'RM235.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM14,500',
    badge: 'Terapi Batu Jed',
    colorVariants: [
      { name: 'Champagne Beige (Premium)', colorHex: '#E5D9C5', image: 'https://emall.coway.com.my/ProductImages/cfa028ff-a59e-438d-a3db-eb9c05ae895e/1/240x240/massage-bed-premium-champagne-beige.png' },
      { name: 'Ink Black (Premium)', colorHex: '#1F242A', image: 'https://emall.coway.com.my/ProductImages/b38c539e-a00c-4a22-a0de-873f940b5e52/1/240x240/massage-bed-premium-ink-black.png' },
      { name: 'Ink Black (Standard)', colorHex: '#334155', image: 'https://emall.coway.com.my/ProductImages/209b5910-5e06-4502-ade6-4e765d55553c/1/240x240/massage-bed-standard-ink-black.png' }
    ],
    dimensions: '700 x 2000 x 450 mm (Boleh Dilipat Jadi Sofa Estetik)',
    powerConsumption: '250 Watt',
    keyFeatures: [
      'Batu Jed Asli Memancarkan Sinar Inframerah Jauh Menembusi Otot',
      'Pemanasan Haba Boleh Laras Sehingga 65°C',
      'Rekaan Katil Boleh Dilipat Masuk Jimat Ruang',
      'Mod Rawatan Tulang Belakang Khusus Ahli Fisioterapi'
    ]
  },

  // ==========================================
  // --- MATTRESS (TILAM HOTEL & KESIHATAN) ---
  // ==========================================
  {
    id: 'primelite',
    category: 'berex',
    name: 'Prime Lite Mattress',
    code: 'BEREX Prime Lite',
    description: 'Tilam hotel mewah dengan sokongan tulang belakang 5 zon dan servis pembersihan berkala 7 langkah.',
    tags: ['5-Zone Spring', 'Tukar Topper Percuma', 'Servis Tilam'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-prime-lite-mattress-e1768818162967.png',
    regularMonthly: 'RM49.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'RM4,500',
    badge: 'Tilam Hotel',
    keyFeatures: ['Pocket Spring 5-Zon', 'Penukaran Topper Percuma', 'Servis Sanitasi Hama Berkala 7-Langkah']
  },
  {
    id: 'prime2',
    category: 'berex',
    name: 'Prime II Mattress',
    code: 'BEREX Prime 2',
    description: 'Tilam kesihatan dengan fabrik anti-statik yang meneutralkan cas elektrik badan untuk tidur lena.',
    tags: ['7-Zone Spring', 'Anti-Statik', 'Memory Foam'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-prime2-series-mattress-e1768818304349.png',
    regularMonthly: 'RM70.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'RM5,780',
    badge: 'Anti-Statik',
    keyFeatures: ['Fabrik Anti-Statik Pelepasan Cas Badan', 'Sokongan Ergonomik 7-Zon', 'Lapisan Natural Latex & Memory Foam']
  },

  // ==========================================
  // --- AIR CONDITIONERS (AIRCOND) ---
  // ==========================================
  {
    id: 'aircond-f10',
    category: 'aircond',
    name: 'Aircond F-Series 1.0HP',
    code: 'CAC09-ST01F',
    description: 'Penyejukan pantas jimat elektrik dengan 5-Star Inverter dan fungsi pembersihan diri automatik.',
    tags: ['1.0 HP', 'Fast Cooling', '5-Star Inverter', 'Self-Cleaning'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-malaysia-air-conditioner-e1768810258674.png',
    regularMonthly: 'RM80.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'NA',
    badge: 'Inverter Pintar',
    keyFeatures: ['5-Star Energy Inverter Saver', 'Pembersihan Diri Automatik', 'Servis Berjadual Juruteknik Coway']
  },
  {
    id: 'aircond-p15',
    category: 'aircond',
    name: 'Aircond P-Series 1.5HP',
    code: 'CAC12-ST02',
    description: 'Penghawa dingin inverter premium dengan aliran udara lembut 4-Hala dan servis pembersihan berkala 7-Langkah.',
    tags: ['1.5 HP', '4-Way Airflow', 'Servis 7-Step', 'Gentle Wind'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-malaysia-p-series-air-conditioner-e1768810284195.png',
    regularMonthly: 'RM90.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'NA',
    badge: 'Servis Berkala',
    keyFeatures: ['Aliran Udara Lembut 4-Hala', 'Penapis Mikro Anti-Bakteria', 'Servis Pembersihan Mendalam Setiap 6 Bulan']
  },

  // ==========================================
  // --- REFRIGERATORS (PETI SEJUK) ---
  // ==========================================
  {
    id: 'fridge-715',
    category: 'refrigerator',
    name: 'Side-By-Side Refrigerator 715L',
    code: 'CR715-SBS01',
    description: 'Peti sejuk mega 715L rekaan mewah Black Inox dengan zon multi-suhu dan servis sanitasi berkala.',
    tags: ['Kapasiti 715L', 'Double Inverter', 'Black Inox', 'Multi-Airflow'],
    image: 'https://coway.cc/wp-content/uploads/2026/05/715L_thumbnail.png',
    regularMonthly: 'RM79.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM5,899',
    badge: 'Kapasiti 715L',
    keyFeatures: ['Kapasiti Mega 715 Liter', 'Double Inverter Jimat Elektrik', 'Servis Penjagaan & Sanitasi Cody']
  },
  {
    id: 'fridge-551',
    category: 'refrigerator',
    name: 'Multi-Door Refrigerator 551L',
    code: 'CR551-MDR01',
    description: 'Peti sejuk 4-pintu canggih dengan kawalan kelembapan optimum dan pembasmian bau bakteria.',
    tags: ['4 Pintu 551L', 'Zon Fleksibel', 'Dual Hygiene', 'Anti-Bau'],
    image: 'https://coway.cc/wp-content/uploads/2026/05/551L_thumbnail.png',
    regularMonthly: 'RM94.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM6,799',
    badge: 'Multi-Door',
    keyFeatures: ['4 Pintu Multi-Zon Suhu', 'Sistem Kawalan Kelembapan Makanan Segar', 'Penapis Anti-Bau Dual Hygiene']
  },

  // ==========================================
  // --- BATHROOM (BILIK MANDI) ---
  // ==========================================
  {
    id: 'flowlet-plus',
    category: 'bathroom',
    name: 'Flowlet Plus Electronic Bidet',
    code: 'CWD10-ST01',
    description: 'Bidet elektronik automatik dengan pemanas tempat duduk, air suam boleh laras, dan pembersihan nosel UV.',
    tags: ['Pemanas Seat', 'Air Suam', 'Nosel Higienis'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-flowlet-plus-electronic-bidet-CWD10-ST01.png',
    regularMonthly: 'RM40.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'NA',
    badge: 'Bidet Elektronik',
    keyFeatures: ['Tempat Duduk Dipanaskan Selesa', 'Suhu Air Suam Boleh Laras', 'Pembersihan Automatik Nosel UV']
  },
  {
    id: 'flowlet',
    category: 'bathroom',
    name: 'Flowlet Bateri Bidet',
    code: 'BA48-A',
    description: 'Bidet pintar berkuasa bateri tanpa sebarang wayar sambungan elektrik. Selamat, bersih dan mudah dipasang.',
    tags: ['Bateri Sahaja', 'Tanpa Wayar', 'Kalis Air IPX4'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-flowlet-bateri-bidet-BA48-A.png',
    regularMonthly: 'RM30.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'NA',
    badge: 'Serendah RM30',
    keyFeatures: ['Tanpa Perlu Pendawaian Elektrik', 'Kalis Air IPX4', 'Dual Nozzle Pembersihan Lelaki & Wanita']
  }
];
