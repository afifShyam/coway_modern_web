import { Product, CategoryTab, ProductCategory } from '@/types/product';
import { siteConfig } from '@/data/siteConfig';

export const CATEGORY_TABS: CategoryTab[] = [
  { id: 'all', label: 'Semua Produk' },
  { id: 'water', label: 'Penapis Air' },
  { id: 'air', label: 'Penapis Udara' },
  { id: 'relax', label: 'Kerusi Urut' },
  { id: 'berex', label: 'Tilam Hotel' },
  { id: 'aircond', label: 'Penyaman Udara' },
  { id: 'refrigerator', label: 'Peti Sejuk' },
  { id: 'bathroom', label: 'Bilik Mandi' },
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
    filterType: 'Osmosis Songsang (RO)',
    description: 'Model No.1 pilihan keluarga di Malaysia dengan 4 pilihan suhu air (Panas, Sejuk, Suam, Suhu Bilik) dan tangki berkapasiti besar 11.3 Liter.',
    tags: ['4 Suhu Air', 'Tangki 11.3L', 'Pensterilan UV', 'Kunci Keselamatan'],
    image: '/images/products/villaem3.webp',
    regularMonthly: 'RM74.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,200',
    badge: 'Pilihan Utama',
    featured: true,
    emallUrl: `https://emall.coway.com.my/productlist/category/water-purifier-table-top-villaem-3?agentcode=${siteConfig.hpCode}`,
    colorVariants: [
      { name: 'Putih Murni', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/859ec6e7-6111-41bb-aad4-75a7145a8a50/1/240x240/villaem-3-white.png' },
      { name: 'Kelabu Kerikil', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/cfa73eea-3f49-4543-8563-8f626a1e9ea5/1/240x240/villaem-3-gray.png' }
    ],
    tankCapacity: { hot: '1.2 L', cold: '2.3 L', ambient: '6.4 L', total: '11.3 L' },
    temperatureOptions: '4 Suhu (Panas, Sejuk, Suam, Suhu Bilik)',
    dimensions: '340 x 523 x 518 mm',
    weight: '20.5 kg',
    serviceInterval: 'Setiap 2 atau 4 Bulan oleh Cody Coway (Sanitasi Wap & Tukar Filter)',
    idealFor: 'Keluarga 4–8 Orang, Penggemar Kopi/Teh, Rumah Kediaman',
    certifications: ['Halal JAKIM', 'WQA Gold Seal (NSF/ANSI 42, 53, 58)', 'SIRIM QAS International'],
    powerConsumption: 'Pemanas 270W - 320W, Pemampat 0.7A',
    filtrationStages: 'Sistem Penapisan RO Coway 6 Peringkat (Plus-Sediment, Pre-Carbon, Membran RO, Plus Inno-Sense, Antibakteria)',
    keyFeatures: [
      '4 Pilihan Suhu Air Berasingan (Panas, Sejuk, Suam, Bilik)',
      'Pensterilan Nozel Menggunakan Sinar UV Automatik',
      'Penunjuk Paras Suhu LED dan Lampu Suasana Waktu Malam',
      'Kunci Keselamatan Kanak-kanak (Child-Lock) untuk Air Panas',
      'Tuas Pengeluaran Berterusan untuk Isi Jug Air Besar'
    ]
  },
  {
    id: 'ais',
    category: 'water',
    name: 'Coway AIS',
    code: 'CHPI-7520L',
    filterType: 'Osmosis Songsang (RO)',
    description: 'Penapis air berteknologi tinggi dengan pembuat ketulan ais kristal automatik serta 3 pilihan suhu air tulen.',
    tags: ['Ais Kristal Segera', 'Pensterilan Dwi-UV', '3 Suhu Air', 'Mod Jimat Tenaga'],
    image: '/images/products/ais.webp',
    regularMonthly: 'RM120.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM7,500',
    badge: 'Pembuat Ais',
    featured: true,
    emallUrl: `https://emall.coway.com.my/productlist/category/water-purifier-table-top-dazzie-white?agentcode=${siteConfig.hpCode}`,
    colorVariants: [
      { name: 'Putih Porselin', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/cd349c96-7052-4f9a-a75d-7eb696eedaa3/1/240x240/ais-white.png' },
      { name: 'Kelabu Kerikil', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/19f9ad9e-d9a0-4aeb-b633-f34bd0672416/1/240x240/ais-gray.png' }
    ],
    tankCapacity: { hot: '1.5 L', cold: '1.8 L', ambient: '1.8 L', ice: '0.7 kg', total: '5.8 L' },
    temperatureOptions: '3 Suhu (Panas, Sejuk, Bilik) + Ketulan Ais Kristal Automatik',
    dimensions: '270 x 546 x 515 mm',
    weight: '23.8 kg',
    serviceInterval: 'Setiap 2 atau 4 Bulan oleh Cody Coway (Pensterilan Tangki & Nozel)',
    idealFor: 'Peminat Minuman Sejuk & Ais, Majlis Keluarga, Kediaman Moden',
    certifications: ['Halal JAKIM', 'WQA Gold Seal', 'Sistem Pensterilan Dwi-UV'],
    powerConsumption: 'Pemanas 310W - 370W, Pembuat Ais 130W, Pemampat 0.8A',
    filtrationStages: 'Sistem Penapisan RO Tulen + Pensterilan Dwi-UV Tangki & Nozel',
    keyFeatures: [
      'Pembuatan Ais Kristal Bentuk Peluru dengan Pantas & Higienis',
      'Pensterilan Dwi-UV pada Tangki Simpanan Ais dan Nozel Air',
      'Panel Kawalan Sentuh Digital Praset Isipadu Cawan Pilihan',
      'Sistem Pembasmian Kuman Automatik Sepanjang Masa (Auto Sterilization)'
    ]
  },
  {
    id: 'neon',
    category: 'water',
    name: 'Coway Neon',
    code: 'CHP-6210N',
    filterType: 'Air Mineral Semula Jadi',
    description: 'Rekaan ultra-nipis 18cm yang menjimatkan ruang dapur dengan 3 pilihan suhu air mineral semula jadi yang menyegarkan.',
    tags: ['Ultra Nipis 18cm', 'Mineral Semula Jadi', '3 Suhu Air', '5 Pilihan Warna'],
    image: '/images/products/neon.webp',
    regularMonthly: 'RM59.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,600',
    badge: '5 Pilihan Warna',
    featured: true,
    emallUrl: `https://emall.coway.com.my/productlist/category/water-purifier-table-top-dazzie-pink?agentcode=${siteConfig.hpCode}`,
    colorVariants: [
      { name: 'Putih Murni', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/db8c15f4-b7a0-485a-ac62-6c2f7c1ec26e/1/240x240/neon-white.png' },
      { name: 'Kelabu Kerikil', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/c4c984ec-a10b-4882-9d03-b1b989c7480b/1/240x240/neon-gray.png' },
      { name: 'Merah Jambu Manis', colorHex: '#F472B6', image: 'https://emall.coway.com.my/ProductImages/b415f28c-7f4f-40f3-84e1-617a6a2eeaa4/1/240x240/neon-pink.png' },
      { name: 'Biru Langit', colorHex: '#38BDF8', image: 'https://emall.coway.com.my/ProductImages/10d2a982-c861-44be-a493-e6d642196d30/1/240x240/neon-blue.png' },
      { name: 'Hijau Daun', colorHex: '#86EFAC', image: 'https://emall.coway.com.my/ProductImages/2308356a-5b9c-4259-bd58-58ed2a516b36/1/240x240/neon-green.png' }
    ],
    tankCapacity: { hot: '1.0 L', cold: '1.35 L', ambient: '2.65 L', total: '5.0 L' },
    temperatureOptions: '3 Suhu (Panas, Sejuk, Suhu Bilik)',
    dimensions: '180 x 440 x 422 mm',
    weight: '14.0 kg',
    serviceInterval: 'Setiap 4 Bulan oleh Cody Coway (Penukaran Filter & Sanitasi)',
    idealFor: 'Ruang Dapur Kompak, Kondominium, Pasangan Muda, Dapur Estetik',
    certifications: ['Halal JAKIM', 'WQA Gold Seal', 'SIRIM'],
    powerConsumption: 'Pemanas 300W, Pemampat 0.5A',
    filtrationStages: 'Penapisan Nanotrap™ Coway & Plus Inno-Sense Kaya Mineral Semula Jadi',
    keyFeatures: [
      'Lebar Hanya 18cm — Sangat Jimat Ruang Atas Meja Dapur',
      '5 Pilihan Warna Pastel Elegan Mengikut Konsep Dapur',
      'Panel Kawalan Sentuh Digital Intuitif',
      'Air Mineral Bersih Kaya Khasiat Semula Jadi'
    ]
  },
  {
    id: 'dazzie',
    category: 'water',
    name: 'Coway Dazzie',
    code: 'CHO-1201N',
    filterType: 'Air Mineral Semula Jadi',
    description: 'Penapis air tanpa tangki moden dengan teknologi pemanasan segera dalam masa 3 saat dan penyejukan pantas.',
    tags: ['Aliran Terus', 'Pemanasan 3 Saat', '4 Tetapan Isipadu', '5 Pilihan Warna'],
    image: '/images/products/dazzie.webp',
    regularMonthly: 'RM74.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,590',
    badge: 'Aliran Terus',
    emallUrl: `https://emall.coway.com.my/productlist/category/water-purifier-table-top-dazzie-gray?agentcode=${siteConfig.hpCode}`,
    colorVariants: [
      { name: 'Putih Murni', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/2cdb7053-6a95-4e6d-8ebc-4263cb6a23e7/1/240x240/dazzie-white.png' },
      { name: 'Kelabu Kerikil', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/57977099-8ba5-4172-89ef-57c34ffe121c/1/240x240/dazzie-gray.png' },
      { name: 'Merah Jambu Manis', colorHex: '#F472B6', image: 'https://emall.coway.com.my/ProductImages/1618281c-5660-47bd-b4f3-c4370fd3048c/1/240x240/dazzie-pink.png' },
      { name: 'Biru Langit', colorHex: '#38BDF8', image: 'https://emall.coway.com.my/ProductImages/be7b101b-1f39-4bd1-8205-16a7dcb1196b/1/240x240/dazzie-blue.png' },
      { name: 'Hijau Daun', colorHex: '#86EFAC', image: 'https://emall.coway.com.my/ProductImages/d8b2ec17-f24a-479c-982d-cd5f166e2ad9/1/240x240/dazzie-green.png' }
    ],
    tankCapacity: { total: 'Teknologi Aliran Terus (Tanpa Tangki)' },
    temperatureOptions: '3 Suhu Segera (Panas 3 Saat, Sejuk, Suhu Bilik)',
    dimensions: '180 x 440 x 385 mm',
    weight: '12.5 kg',
    serviceInterval: 'Setiap 4 Bulan oleh Cody Coway (Pensterilan Nozel & Tukar Filter)',
    idealFor: 'Pengguna yang inginkan air segar tanpa simpanan tangki, Pemanasan Segera',
    certifications: ['Halal JAKIM', 'WQA Gold Seal', 'Pensterilan UV Nozel'],
    powerConsumption: 'Pemanasan Segera 2200W, Penyejukan 0.5A',
    filtrationStages: 'Sistem Penapisan Nanotrap™ + Pensterilan Nozel Sinar UV',
    keyFeatures: [
      'Pemanasan Segera 3 Saat Tanpa Perlu Menunggu Air Mendidih',
      '4 Pilihan Isipadu Air Praset (120ml, 250ml, 500ml, Aliran Berterusan)',
      'Teknologi Aliran Terus (Tankless) — Bebas Risiko Air Bertakung',
      'Nozel Air Disuci Sinar UV Setiap Kali Selesai Digunakan'
    ]
  },
  {
    id: 'neoplus',
    category: 'water',
    name: 'Neo Plus',
    code: 'CHP-264L',
    filterType: 'Osmosis Songsang (RO)',
    description: 'Penapis air 3 suhu paling mesra bajet dan praktikal untuk seisi keluarga dengan rekaan yang tahan lasak.',
    tags: ['3 Suhu Air', 'Penderia Jimat Tenaga', 'Air RO Tulen', 'Paling Jimat'],
    image: '/images/products/neoplus.webp',
    regularMonthly: 'RM59.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,640',
    badge: 'Paling Jimat',
    emallUrl: `https://emall.coway.com.my/productlist/category/waterpurifier-tabletop-neoplus?agentcode=${siteConfig.hpCode}`,
    tankCapacity: { hot: '1.0 L', cold: '2.3 L', ambient: '2.5 L', total: '5.8 L' },
    temperatureOptions: '3 Suhu (Panas, Sejuk, Suhu Bilik)',
    dimensions: '260 x 483 x 500 mm',
    weight: '18.0 kg',
    serviceInterval: 'Setiap 2 atau 4 Bulan oleh Cody Coway',
    idealFor: 'Keluarga Mesra Bajet, Rumah Sewa, Penggunaan Harian Asas Keluarga 3-5 Orang',
    certifications: ['Halal JAKIM', 'WQA Gold Seal (NSF 42/53/58)', 'SIRIM'],
    powerConsumption: 'Pemanas 300W, Pemampat 0.7A',
    filtrationStages: 'Sistem Penapisan Osmosis Songsang Coway 6 Peringkat Tulen',
    keyFeatures: [
      '3 Pilihan Suhu Lengkap (Panas, Sejuk, Suhu Bilik)',
      'Penderia Cahaya Eco untuk Penjimatan Elektrik Automatik Waktu Malam',
      'Kunci Keselamatan Kanak-kanak untuk Air Panas',
      'Tuas Pengeluaran Air Berterusan untuk Kegunaan Mudah'
    ]
  },
  {
    id: 'cinnamon',
    category: 'water',
    name: 'Coway Cinnamon',
    code: 'P-6320R',
    filterType: 'Osmosis Songsang (RO)',
    description: 'Penapis air suhu bilik paling jimat dan praktikal. Beroperasi 100% tanpa sebarang sambungan bekalan elektrik.',
    tags: ['Suhu Bilik', 'Bebas Elektrik', 'Air RO Tulen', 'RM32 Sebulan'],
    image: '/images/products/cinnamon.webp',
    regularMonthly: 'RM32.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM2,490',
    badge: 'Serendah RM32',
    emallUrl: `https://emall.coway.com.my/productlist/category/waterpurifier-table-top-cinnamon?agentcode=${siteConfig.hpCode}`,
    tankCapacity: { ambient: '5.0 L', total: '5.0 L' },
    temperatureOptions: '1 Suhu (Suhu Bilik Sahaja — 0 Watt Sifar Elektrik)',
    dimensions: '200 x 400 x 405 mm',
    weight: '4.5 kg',
    serviceInterval: 'Setiap 4 Bulan oleh Cody Coway (Penukaran Filter Berkala)',
    idealFor: 'Keluarga yang ingin jimat elektrik sepenuhnya, Ruang tiada soket palam',
    certifications: ['Halal JAKIM', 'WQA Gold Seal (NSF 42/53/58)'],
    powerConsumption: '0 Watt (100% Tanpa Elektrik)',
    filtrationStages: 'Penapisan Membran RO Berprestasi Tinggi Coway',
    keyFeatures: [
      'Sifar Penggunaan Elektrik — Beroperasi Sepenuhnya Menggunakan Tekanan Air',
      'Pam Penggalak Terbina Dalam (Booster Pump) untuk Tekanan Air Rendah',
      'Kompak dan Mudah Diletakkan di Mana-mana Ruang Meja Dapur',
      'Tangki Simpanan Air Berkapasiti 5.0 Liter'
    ]
  },
  {
    id: 'ombak',
    category: 'water',
    name: 'Coway Ombak',
    code: 'CHP-7310R',
    filterType: 'Osmosis Songsang (RO)',
    description: 'Direka khusus untuk citarasa rakyat Malaysia dengan 50 kombinasi tetapan suhu air dan tangki air panas ekstra besar 3.0L.',
    tags: ['50 Tetapan Suhu', 'Tangki Panas 3.0L', 'Air RO Tulen', 'Pensterilan UV'],
    image: '/images/products/ombak.webp',
    regularMonthly: 'RM90.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,510',
    badge: 'Pilihan Ibu',
    emallUrl: `https://emall.coway.com.my/productlist/category/waterpurifier-tabletop-ombak?agentcode=${siteConfig.hpCode}`,
    tankCapacity: { hot: '3.0 L', cold: '2.3 L', ambient: '7.8 L', total: '13.1 L' },
    temperatureOptions: '50 Kombinasi Tetapan Suhu Boleh Laras (40°C hingga 90°C)',
    dimensions: '340 x 523 x 518 mm',
    weight: '21.9 kg',
    serviceInterval: 'Setiap 2 atau 4 Bulan oleh Cody Coway (Sanitasi Wap & Nozel UV)',
    idealFor: 'Ibu Menyusu / Bancuh Susu Bayi, Penggemar Memasak, Keluarga Besar',
    certifications: ['Halal JAKIM', 'WQA Gold Seal', 'Pensterilan Nozel Sinar UV'],
    powerConsumption: 'Pemanas 672W, Pemampat 0.6A',
    filtrationStages: 'Sistem RO Coway + Pensterilan Nozel Sinar UV Masa Nyata',
    keyFeatures: [
      '50 Kombinasi Tetapan Suhu dan Isipadu Pengeluaran Air Mengikut Keperluan',
      'Tangki Air Panas Ekstra Besar 3.0 Liter — Tidak Perlu Menunggu Air Mendidih Semula',
      'Pensterilan Nozel Menggunakan Sinar UV Automatik Setiap Kali Digunakan',
      'Butang Khas Suhu Bancuh Susu Bayi (40°C - 50°C) yang Tepat'
    ]
  },
  {
    id: 'coreslim',
    category: 'water',
    name: 'Core Slim',
    code: 'CHP-5731N',
    filterType: 'Air Mineral Semula Jadi',
    description: 'Penapis air jenis berdiri bebas (floor standing) dengan rekaan langsing dan elegan untuk ruang tamu, dapur dan pejabat.',
    tags: ['Jenis Berdiri', 'Rekaan Langsing', 'Tangki 12.0L', '3 Suhu Air'],
    image: 'https://emall.coway.com.my/ProductImages/cc9302e6-fdfe-4881-bcc5-b37babee082e/1/240x240/core-slim-white.png',
    regularMonthly: 'RM89.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM5,000',
    badge: 'Jenis Berdiri',
    emallUrl: `https://emall.coway.com.my/productlist/category/water-purifier-floor-standing-core-slim?agentcode=${siteConfig.hpCode}`,
    colorVariants: [
      { name: 'Putih Porselin', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/cc9302e6-fdfe-4881-bcc5-b37babee082e/1/240x240/core-slim-white.png' },
      { name: 'Kelabu Kerikil', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/8561e6f3-94ce-457a-a473-77865dd80bee/1/240x240/core-slim-gray.png' }
    ],
    tankCapacity: { hot: '3.6 L', cold: '3.8 L', ambient: '4.6 L', total: '12.0 L' },
    temperatureOptions: '3 Suhu (Panas, Sejuk, Suhu Bilik)',
    dimensions: '260 x 483 x 1150 mm',
    weight: '26.0 kg',
    serviceInterval: 'Setiap 2 Bulan oleh Cody Coway (Servis Kekerapan Tinggi)',
    idealFor: 'Pejabat, Klinik, Ruang Makan, Kediaman Tanpa Meja Sokongan',
    certifications: ['Halal JAKIM', 'WQA Gold Seal', 'SIRIM'],
    powerConsumption: 'Pemanas 500W, Pemampat 0.7A',
    filtrationStages: 'Penapisan Nanotrap™ Coway & Mineral Semula Jadi',
    keyFeatures: [
      'Rekaan Berdiri Bebas (Floor-Standing) Tanpa Perlu Meja Sokongan',
      'Tangki Simpanan Air Berkapasiti Besar 12 Liter',
      'Ketinggian Ergonomik yang Selesa untuk Mengambil Air Tanpa Membongkok',
      'Kunci Keselamatan Air Panas untuk Keselamatan Kanak-kanak'
    ]
  },
  {
    id: 'coreplus',
    category: 'water',
    name: 'Core Plus',
    code: 'CHP-5721L',
    filterType: 'Osmosis Songsang (RO)',
    description: 'Kapasiti tangki gergasi 21.1 Liter. Pilihan utama untuk pejabat, restoran, surau dan keluarga yang mempunyai ramai ahli.',
    tags: ['Tangki Mega 21.1L', 'Air RO Tulen', 'Pejabat & Premis'],
    image: '/images/products/coreplus.webp',
    regularMonthly: 'RM93.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM6,500',
    badge: 'Kapasiti Mega',
    emallUrl: `https://emall.coway.com.my/productlist/category/water-purifier-floor-standing-core-plus?agentcode=${siteConfig.hpCode}`,
    tankCapacity: { hot: '3.6 L', cold: '6.0 L', ambient: '11.5 L', total: '21.1 L' },
    temperatureOptions: '3 Suhu (Panas, Sejuk, Suhu Bilik Tangki Gergasi)',
    dimensions: '370 x 490 x 1257 mm',
    weight: '32.8 kg',
    serviceInterval: 'Setiap 2 Bulan oleh Cody Coway',
    idealFor: 'Pejabat Korporat, Restoran, Kilang, Surau, Keluarga Ramai (10+ orang)',
    certifications: ['Halal JAKIM', 'WQA Gold Seal (NSF 42/53/58)', 'SIRIM'],
    powerConsumption: 'Pemanas 500W - 660W, Pemampat 0.8A',
    filtrationStages: 'Penapisan Membran RO Komersial Berkapasiti Tinggi',
    keyFeatures: [
      'Tangki Mega 21.1 Liter Menjamin Bekalan Air Tidak Pernah Terputus',
      'Sesuai untuk Penggunaan Kekerapan Tinggi Sepanjang Hari',
      'Air RO 100% Bersih dan Suci untuk Minuman & Masakan',
      'Tuas Pengeluaran Air Tahan Lasak Gred Komersial'
    ]
  },
  {
    id: 'outdoor',
    category: 'water',
    name: 'Penapis Luar Rumah (Outdoor)',
    code: 'POE-23A',
    filterType: 'Membran PVDF',
    description: 'Penapis air utama luar rumah untuk menapis karat, keladak dan kotoran sebelum air masuk ke dalam sistem paip rumah anda.',
    tags: ['Penapis Utama', 'Basuh Balik Automatik', 'Membran PVDF', 'Keluli Tahan Karat'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-outdoor-filter-POE-23A-e1768813038791.png',
    regularMonthly: 'RM60.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,500',
    badge: 'Penapis Utama',
    emallUrl: `https://emall.coway.com.my/productlist/category/outdoor-outdoor-filter-coway-outdoor-filter?agentcode=${siteConfig.hpCode}`,
    dimensions: '210 x 210 x 1020 mm',
    weight: '16.0 kg',
    serviceInterval: 'Pemeriksaan & Penyelenggaraan Membran Setiap 6-12 Bulan oleh Coway',
    idealFor: 'Seluruh Rumah Kediaman, Melindungi Tangki Utama, Mesin Basuh & Pemanas Mandi',
    certifications: ['NSF Certified PVDF Membrane', 'Keluli Tahan Karat SUS304 Gred Tinggi'],
    filtrationStages: 'Membran Ultrapenapisan Gentian Berongga PVDF (Ketulenan 0.01 Mikron)',
    keyFeatures: [
      'Menapis Air Paip Utama Sebelum Memasuki Tangki dan Paip Dalaman Rumah',
      'Sistem Pembersihan Balik Automatik Berkala (Auto Backwash System)',
      'Perumah Keluli Tahan Karat Gred Tinggi (SUS304) yang Tahan Segala Cuaca',
      'Memanjangkan Jangka Hayat Penapis Air Dalam Rumah & Perkakas Elektrik'
    ]
  },

  // ==========================================
  // --- AIR PURIFIERS (PENAPIS UDARA) ---
  // ==========================================
  {
    id: 'storm2',
    category: 'air',
    name: 'Storm II',
    code: 'AP-1523D',
    description: 'Penapis udara No.1 paling popular dengan kipas pengitar udara berkuasa tinggi sejauh 10 meter untuk udara bersih menyeluruh.',
    tags: ['Penapis HEPA H13', 'Pengitar 10 Meter', 'Liputan 50m²', 'Antibakteria'],
    image: 'https://emall.coway.com.my/ProductImages/f18d8c4d-f7d0-4eb5-a5da-389fbc5a66ad/1/240x240/storm-2.jpg',
    regularMonthly: 'RM60.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,190',
    badge: 'No.1 Penapis Udara',
    featured: true,
    emallUrl: `https://emall.coway.com.my/productlist/category/air-purifier-air-purifier-storm-2?agentcode=${siteConfig.hpCode}`,
    coverageArea: '50 m² (538 kaki persegi)',
    dimensions: '410 x 515 x 752 mm',
    weight: '12.0 kg',
    serviceInterval: 'Setiap 2 atau 4 Bulan oleh Cody Coway (Tukar Filter & Cuci Kipas)',
    idealFor: 'Ruang Tamu, Bilik Tidur, Pemilik Kucing / Haiwan Peliharaan, Pesakit Resdung & Asma',
    certifications: ['KAA Allergy Certified', 'True HEPA H13 99.999% Filtration', 'SIRIM'],
    powerConsumption: '42 Watt',
    filtrationStages: 'Pra-Penapis, Penapis Habuk Halus, Penapis Penyahbauan, Penapis Coway HEPA H13',
    keyFeatures: [
      'Kipas Pengitar Udara Jarak Jauh Sehingga 10 Meter Menembusi Setiap Sudut',
      'Kawasan Liputan Luas 50m² (540 kaki persegi)',
      'Penderia Kualiti Udara Berlampu LED 4 Warna (Biru, Hijau, Kuning, Merah)',
      'Mod Jerebu Khas (Haze Mode) untuk Pembersihan Segera Waktu Jerebu'
    ]
  },
  {
    id: 'lombok3',
    category: 'air',
    name: 'Lombok 3',
    code: 'AP-1520C',
    description: 'Sistem penapisan 6 peringkat dengan teknologi Plasma RBD dan Pengion untuk membasmi virus, bakteria dan alergen haiwan.',
    tags: ['Plasma RBD', 'Pengion Negatif', 'Bebas Alahan', 'Liputan 50m²'],
    image: '/images/products/lombok3.webp',
    regularMonthly: 'RM63.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,490',
    badge: 'Pakar Alahan',
    emallUrl: `https://emall.coway.com.my/productlist/category/airpurifier-airpurifier-lombok3?agentcode=${siteConfig.hpCode}`,
    coverageArea: '50 m² (538 kaki persegi)',
    dimensions: '414 x 264 x 651 mm',
    weight: '12.0 kg',
    serviceInterval: 'Setiap 2 atau 4 Bulan oleh Cody Coway',
    idealFor: 'Keluarga Mengalami Masalah Alahan Kronik, Bau Masakan & Hapak, Rumah Haiwan Peliharaan',
    certifications: ['KAA Allergy Certified', 'RBD Plasma Medical-Grade Sterilization'],
    powerConsumption: '50 Watt',
    filtrationStages: 'Penapisan 6 Peringkat + Plasma RBD & Penjana Ion Negatif',
    keyFeatures: [
      'Teknologi Plasma RBD Pemusnah Virus dan Bakteria Secara Aktif',
      'Penjana Ion Negatif Menghasilkan Udara Segar Nyaman Seperti di Hutan',
      'Pilihan Filter Khas Mengikut Keperluan Rumah (Pet, Haze, Dust, Smoke)',
      'Penderia Habuk Halus PM2.5 & Penderia Bau Sensitif Terbina Dalam'
    ]
  },
  {
    id: 'studio',
    category: 'air',
    name: 'Coway Studio',
    code: 'AP-1924A',
    description: 'Rekaan silinder moden dengan pengambilan udara 360 darjah yang senyap untuk bilik tidur dan ruang kerja.',
    tags: ['Sedutan 360 Darjah', 'Operasi Senyap', 'Jimat Ruang', 'Pilihan Warna'],
    image: 'https://emall.coway.com.my/ProductImages/9b502336-eff4-4e13-99c6-ac4689181c2b/1/240x240/studio-white.png',
    regularMonthly: 'RM49.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM2,500',
    badge: 'Serendah RM49',
    emallUrl: `https://emall.coway.com.my/productlist/category/air-purifier-air-purifier-studio?agentcode=${siteConfig.hpCode}`,
    colorVariants: [
      { name: 'Putih Moden', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/9b502336-eff4-4e13-99c6-ac4689181c2b/1/240x240/studio-white.png' },
      { name: 'Kuning Langsat (Beige)', colorHex: '#E7DEC8', image: 'https://emall.coway.com.my/ProductImages/58e15860-eac2-48d6-b551-19d8012c2f98/1/240x240/studio-beige.png' }
    ],
    coverageArea: '76 m² (818 kaki persegi)',
    dimensions: '260 x 260 x 480 mm',
    weight: '7.8 kg',
    serviceInterval: 'Setiap 4 Bulan (Heart Service) / Penukaran Filter Mudah (Self-Service)',
    idealFor: 'Bilik Tidur Utama, Bilik Anak, Ruang Kerja Pejabat di Rumah',
    certifications: ['360° All-Round HEPA H13', 'Energy Star Inverter'],
    powerConsumption: '30 Watt',
    filtrationStages: 'Penapis Gabungan HEPA 360 Darjah Bersepadu',
    keyFeatures: [
      'Sedutan Udara 360 Darjah Menyeluruh Tanpa Titik Buta',
      'Operasi Senyap (Whisper Quiet) Khusus untuk Waktu Tidur',
      'Lampu Penunjuk Kualiti Udara Estetik dengan Mod Tidur Automatik',
      'Pilihan Servis Fleksibel (Heart Service atau Self-Service)'
    ]
  },
  {
    id: 'suite',
    category: 'air',
    name: 'Coway Suite',
    code: 'AP-2524B',
    description: 'Penapis udara berkapasiti sederhana-besar dengan motor senyap dan sentuhan rekaan Scandinavian.',
    tags: ['Liputan 66m²', 'Motor Senyap', 'Pilihan Warna', 'Penapis HEPA H13'],
    image: 'https://emall.coway.com.my/ProductImages/6f51c08c-77e3-49cf-85cd-0ba40602cfea/1/240x240/suite-white.png',
    regularMonthly: 'RM65.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,200',
    badge: 'Scandinavian',
    emallUrl: `https://emall.coway.com.my/productlist/category/air-purifier-air-purifier-suite?agentcode=${siteConfig.hpCode}`,
    colorVariants: [
      { name: 'Putih Moden', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/6f51c08c-77e3-49cf-85cd-0ba40602cfea/1/240x240/suite-white.png' },
      { name: 'Kuning Langsat (Beige)', colorHex: '#E7DEC8', image: 'https://emall.coway.com.my/ProductImages/37594b88-f027-44f9-b721-dcc47def94ec/1/240x240/suite-beige.png' }
    ],
    coverageArea: '66 m² (710 kaki persegi)',
    dimensions: '360 x 360 x 600 mm',
    weight: '9.5 kg',
    serviceInterval: 'Setiap 4 Bulan oleh Cody Coway',
    idealFor: 'Ruang Tamu Scandinavian, Bilik Sederhana Besar, Dapur Terbuka',
    certifications: ['True HEPA H13', 'Smart Odor Sensor'],
    filtrationStages: 'Penapis HEPA H13 Asli + Penapis Penyahbauan Gas',
    keyFeatures: [
      'Kawasan Liputan Luas 66m² Sesuai untuk Ruang Tamu Keluarga',
      'Penderia Gas dan Bau Pintar Berkepekaan Tinggi',
      'Motor Inverter yang Senyap dan Menjimatkan Tenaga Elektrik'
    ]
  },
  {
    id: 'atrium',
    category: 'air',
    name: 'Coway Atrium',
    code: 'AP-3525I',
    description: 'Penapis udara gred komersial dan ruang tamu besar dengan rekaan mewah bertaraf seni antarabangsa.',
    tags: ['Liputan 99m²', '3 Pilihan Warna', 'Dwi-Penapis', 'Gred Elit'],
    image: 'https://emall.coway.com.my/ProductImages/ac34611e-d910-44c0-b9b9-28e5c639f9b0/1/240x240/atrium-white.png',
    regularMonthly: 'RM89.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,800',
    badge: 'Ruang Tamu Besar',
    emallUrl: `https://emall.coway.com.my/productlist/category/air-purifier-air-purifier-atrium?agentcode=${siteConfig.hpCode}`,
    colorVariants: [
      { name: 'Putih Moden', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/ac34611e-d910-44c0-b9b9-28e5c639f9b0/1/240x240/atrium-white.png' },
      { name: 'Kuning Langsat (Beige)', colorHex: '#E7DEC8', image: 'https://emall.coway.com.my/ProductImages/82f5db57-d480-4bc2-b822-802dc5dfc269/1/240x240/atrium-beige.png' },
      { name: 'Kelabu Arang', colorHex: '#64748B', image: 'https://emall.coway.com.my/ProductImages/99a8a5aa-d3df-4e61-a7f5-ba5955d27b33/1/240x240/atrium-gray.png' }
    ],
    coverageArea: '99 m² (1,065 kaki persegi)',
    dimensions: '400 x 400 x 780 mm',
    weight: '15.2 kg',
    serviceInterval: 'Setiap 4 Bulan oleh Cody Coway',
    idealFor: 'Dewan, Pejabat Terbuka, Ruang Tamu Banglo Mewah, Klinik',
    certifications: ['Dual Mega HEPA Dual Flow', 'KAA Certified'],
    filtrationStages: 'Sistem Dwi-Penapis Mega HEPA Dua Arah',
    keyFeatures: [
      'Kawasan Liputan Sangat Luas 99m² (1,065 kaki persegi)',
      'Sistem Aliran Udara Dwi-Kipas Berkuasa Tinggi',
      '3 Pilihan Warna Eksklusif Sesuai untuk Kediaman Mewah'
    ]
  },

  // ==========================================
  // --- MASSAGE & RELAX (KERUSI & KATIL URUT BEREX) ---
  // ==========================================
  {
    id: 'pebble',
    category: 'relax',
    name: 'Kerusi Urut BEREX Pebble',
    code: 'MC-C01',
    description: 'Kerusi urut estetik kompak berteknologi urutan 3D, pemanas haba badan, pembesar suara Bluetooth dan mod Graviti Sifar.',
    tags: ['Urutan 3D', 'Graviti Sifar', 'Pemanas Haba', '4 Pilihan Warna'],
    image: '/images/products/pebble.webp',
    regularMonthly: 'RM145.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM8,000',
    badge: '4 Pilihan Warna',
    featured: true,
    emallUrl: `https://emall.coway.com.my/productlist/category/massage-pebble?agentcode=${siteConfig.hpCode}`,
    colorVariants: [
      { name: 'Kelabu Mistik', colorHex: '#64748B', image: 'https://emall.coway.com.my/ProductImages/8b8abf5f-2bc3-4ed3-9a95-5bbb5f7b41dc/1/240x240/pebble-mystic-grey.png' },
      { name: 'Pasir Kuning Langsat', colorHex: '#D6C5B3', image: 'https://emall.coway.com.my/ProductImages/0c88e5fd-a79c-47be-8e77-eaa4916fbf25/1/240x240/pebble-sand-beige.png' },
      { name: 'Merah Bata (Terracotta)', colorHex: '#E09F8F', image: 'https://emall.coway.com.my/ProductImages/b4bd6469-edf6-436c-a2b2-fd7afe113ff3/1/240x240/pebble-terracotta-pink.png' },
      { name: 'Biru Kabus (Hazy Blue)', colorHex: '#7A9FB8', image: 'https://emall.coway.com.my/ProductImages/ebfc1727-f750-48dd-95d3-160fa3b33b57/1/240x240/pebble-hazy-blue.png' }
    ],
    dimensions: '700 x 1150 x 1030 mm',
    weight: '58.0 kg',
    serviceInterval: 'Servis Penjagaan 7 Peringkat & Penukaran Sarung Kulit Setiap 12 Bulan',
    idealFor: 'Relaksasi Harian di Rumah, Menghilangkan Lenguh Badan & Sakit Pinggang',
    certifications: ['3D SL-Track Roller', 'Zero Gravity Mode', 'Bluetooth Surround Audio'],
    powerConsumption: '120 Watt',
    keyFeatures: [
      'Penggelek Urutan 3D Mengikut Lengkung Tulang Belakang Laluan-SL (SL-Track)',
      'Kedudukan Baring Graviti Sifar (Zero Gravity) untuk Relaksasi Maksimum',
      'Pemanas Haba Thermal pada Bahagian Pinggang dan Belakang Badan',
      'Pembesar Suara Bluetooth Terbina Dalam untuk Terapi Muzik',
      'Pakej Servis Penjagaan 7 Peringkat & Penukaran Sarung Kulit Percuma'
    ]
  },
  {
    id: 'mine',
    category: 'relax',
    name: 'Kerusi Urut BEREX Mine',
    code: 'MC-B02',
    description: 'Kerusi urut kompak ergonomik dengan modul penyandar kaki boleh putar 180° dan beg udara mampatan pinggul.',
    tags: ['Kaki Putar 180°', 'Beg Udara Pinggul', '3 Pilihan Warna', 'Kompak'],
    image: '/images/products/mine.webp',
    regularMonthly: 'RM120.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM6,000',
    badge: '3 Pilihan Warna',
    emallUrl: `https://emall.coway.com.my/productlist/category/massage-massage-chair-mine?agentcode=${siteConfig.hpCode}`,
    colorVariants: [
      { name: 'Kuning Champagne', colorHex: '#E5D9C5', image: 'https://emall.coway.com.my/ProductImages/3ecf4894-ce52-4c21-8fd4-c02fa4e58bde/1/240x240/mine-champagne-beige.png' },
      { name: 'Hitam Dakwat', colorHex: '#1F242A', image: 'https://emall.coway.com.my/ProductImages/ed1db9d7-6a0b-4c66-9f27-7d0d9c1c036f/1/240x240/mine-ink-black.png' },
      { name: 'Coklat Ros', colorHex: '#8D6559', image: 'https://emall.coway.com.my/ProductImages/b0e24212-4a7b-4993-94ef-75bf2de52116/1/240x240/mine-rose-brown.png' }
    ],
    dimensions: '650 x 1080 x 1010 mm',
    weight: '45.0 kg',
    serviceInterval: 'Servis Penjagaan Berkala oleh Juruteknik Coway',
    idealFor: 'Ruang Tamu Kompak, Kerusi Rehat Boleh Putar 180°, Urutan Pinggul & Peha',
    powerConsumption: '100 Watt',
    keyFeatures: [
      'Penyandar Kaki Boleh Diputar 180° Menjadi Kerusi Sofa Biasa Bila Tidak Digunakan',
      'Urutan Mampatan Beg Udara di Bahagian Pinggul dan Peha',
      'Mod Urutan Senyap Sesuai Digunakan di Bilik Tidur',
      'Saiz Kompak Menjimatkan Ruang Rumah'
    ]
  },
  {
    id: 'senno',
    category: 'relax',
    name: 'Kerusi Urut BEREX Senno',
    code: 'MC-DLX01',
    description: 'Kerusi urut pintar dengan pengimbas badan digital, urutan mendalam laluan-SL dan kedudukan Graviti Sifar berganda.',
    tags: ['Pengimbas Badan', 'Urutan Pintar', 'Graviti Sifar', 'Gred Eksekutif'],
    image: '/images/products/senno.webp',
    regularMonthly: 'RM165.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM9,000',
    badge: 'Gred Eksekutif',
    emallUrl: `https://emall.coway.com.my/productlist/category/massage-massage-coway-berex-senno?agentcode=${siteConfig.hpCode}`,
    dimensions: '780 x 1450 x 1150 mm',
    weight: '88.0 kg',
    serviceInterval: 'Pakej Servis Penjagaan 5 Tahun Coway',
    idealFor: 'Urutan Eksekutif Seluruh Badan, Melegakan Keletihan Kerja Berat',
    powerConsumption: '160 Watt',
    keyFeatures: [
      'Sistem Pengimbasan Badan Automatik Mengikut Ketinggian Pengguna',
      'Urutan Lengkung Tulang Belakang SL-Track dari Leher ke Peha',
      'Pemanas Haba Thermal & Beg Udara Seluruh Badan',
      'Termasuk Pakej Servis Penjagaan 5 Tahun Coway'
    ]
  },
  {
    id: 'senno-plus',
    category: 'relax',
    name: 'Kerusi Urut BEREX Senno Plus',
    code: 'MC-LUX01',
    description: 'Kerusi urut eksekutif gred perdana dengan Pengimbas Badan AI, urutan tapak kaki refleksologi 4D dan kompresi udara penuh.',
    tags: ['Pengimbas Badan AI', 'Gred Perdana', 'Refleksologi Kaki', 'Urutan 4D'],
    image: '/images/products/senno-plus.webp',
    regularMonthly: 'RM185.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM10,000',
    badge: 'Gred Perdana',
    emallUrl: `https://emall.coway.com.my/productlist/category/massage-massage-coway-berex-senno-plus?agentcode=${siteConfig.hpCode}`,
    dimensions: '820 x 1500 x 1200 mm',
    weight: '98.0 kg',
    serviceInterval: 'Pakej Servis Penjagaan 5 Tahun Coway',
    idealFor: 'Terapi Refleksologi Kaki 4D, Pengimbas AI Pintar, Keselesaan Maksimum',
    powerConsumption: '200 Watt',
    keyFeatures: [
      'Pengimbasan Postur Badan Pintar Menggunakan Penderia AI',
      'Penggelek Urutan 4D Mendalam dari Leher Hingga Peha Bawah',
      'Refleksologi Tapak Kaki Berputar & Beg Udara Betis Penuh',
      'Skrin Kawalan Sentuh Digital Terbina Dalam',
      'Termasuk Pakej Servis Penjagaan 5 Tahun Coway'
    ]
  },
  {
    id: 'massage-bed',
    category: 'relax',
    name: 'Katil Urut Haba BEREX',
    code: 'MB-C01 / MB-B01',
    description: 'Katil urut pintar terapi haba batu jed asli untuk regangan dan penjajaran tulang belakang dari leher ke pinggul.',
    tags: ['Terapi Batu Jed', 'Inframerah Jauh', 'Boleh Dilipat', 'Penjajaran Tulang'],
    image: '/images/products/massage-bed.webp',
    regularMonthly: 'RM250.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM14,500',
    badge: 'Terapi Batu Jed',
    emallUrl: `https://emall.coway.com.my/productlist/category/massage-massage-bed-standard?agentcode=${siteConfig.hpCode}`,
    colorVariants: [
      { name: 'Kuning Champagne (Premium)', colorHex: '#E5D9C5', image: 'https://emall.coway.com.my/ProductImages/cfa028ff-a59e-438d-a3db-eb9c05ae895e/1/240x240/massage-bed-premium-champagne-beige.png' },
      { name: 'Hitam Dakwat (Premium)', colorHex: '#1F242A', image: 'https://emall.coway.com.my/ProductImages/b38c539e-a00c-4a22-a0de-873f940b5e52/1/240x240/massage-bed-premium-ink-black.png' },
      { name: 'Hitam Dakwat (Standard)', colorHex: '#334155', image: 'https://emall.coway.com.my/ProductImages/209b5910-5e06-4502-ade6-4e765d55553c/1/240x240/massage-bed-standard-ink-black.png' }
    ],
    dimensions: '700 x 2000 x 450 mm (Boleh Dilipat Menjadi Sofa Santai)',
    weight: '65.0 kg',
    serviceInterval: 'Servis Penjagaan 7 Peringkat & Sanitasi Setiap 12 Bulan',
    idealFor: 'Penjajaran Tulang Belakang, Fisioterapi Haba Jed di Rumah',
    powerConsumption: '250 Watt',
    keyFeatures: [
      'Batu Jed Asli Memancarkan Sinar Inframerah Jauh Menembusi Otot',
      'Pemanasan Haba Boleh Dilaras Sehingga 65°C',
      'Rekaan Katil Boleh Dilipat Masuk untuk Menjimatkan Ruang',
      'Mod Rawatan Tulang Belakang Berdasarkan Penjajaran Fisioterapi',
      'Pakej Servis Penjagaan 7 Peringkat & Sanitasi Setiap 12 Bulan'
    ]
  },

  // ==========================================
  // --- MATTRESS (TILAM HOTEL & KESIHATAN) ---
  // ==========================================
  {
    id: 'primelite',
    category: 'berex',
    name: 'Tilam Prime Lite Series',
    code: 'Prime Lite (Queen)',
    description: 'Tilam gred hotel mewah dengan sistem pegas poket 5-zon, servis sanitasi berkala dan pelan fleksibel WOW 5 / WOW 7.',
    tags: ['Pegas 5-Zon', 'Servis Sanitasi Percuma', 'Pilihan WOW 7'],
    image: '/images/products/primelite.webp',
    regularMonthly: 'RM79.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'RM4,500',
    badge: 'Tilam Hotel',
    emallUrl: `https://emall.coway.com.my/productlist/category/mattress-mattress-only-prime-lite-mattress-queen?agentcode=${siteConfig.hpCode}`,
    serviceInterval: 'Servis Sanitasi Pembasmian Hama Berkala oleh Cody',
    idealFor: 'Tidur Berkualiti Gred Hotel, Bebas Hama & Debu Habuk',
    keyFeatures: [
      'Sistem Pegas Poket 5-Zon untuk Sokongan Badan Optimum',
      'Servis Sanitasi Pembasmian Hama Berkala oleh Cody',
      'Pilihan Pelan WOW 5 (RM99) atau WOW 7 (RM79)'
    ]
  },
  {
    id: 'prime2',
    category: 'berex',
    name: 'Tilam Prime II Series',
    code: 'Prime II (Queen)',
    description: 'Tilam kesihatan premium dengan 1 tahun 3 kali servis percuma, percuma 1 kali tukar Topper selepas 36 bulan, dan fabrik antistatik.',
    tags: ['Tukar Topper Percuma', '1 Tahun 3x Servis', 'Fabrik Antistatik'],
    image: '/images/products/prime2.webp',
    regularMonthly: 'RM100.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'RM5,780',
    badge: 'Antistatik',
    emallUrl: `https://emall.coway.com.my/productlist/category/mattress-mattress-only-prime-mattress-queen-only-soft?agentcode=${siteConfig.hpCode}`,
    serviceInterval: '1 Tahun 3 Kali Servis Sanitasi Percuma oleh Cody',
    idealFor: 'Pelepasan Cas Statik Badan, Tidur Lebih Nyenyak & Bangun Lebih Segar',
    keyFeatures: [
      '1 Tahun 3 Kali Servis Sanitasi Percuma oleh Cody',
      'Percuma 1 Kali Penukaran Topper Selepas 36 Bulan',
      'Fabrik Antistatik untuk Pelepasan Cas Elektrik Statik Badan',
      'Pilihan Pelan WOW 5 (RM120) atau WOW 7 (RM100)'
    ]
  },

  // ==========================================
  // --- AIR CONDITIONERS (PENYAMAN UDARA) ---
  // ==========================================
  {
    id: 'aircond-f10',
    category: 'aircond',
    name: 'Penyaman Udara F-Series 1.0HP',
    code: 'CAC09-ST01F',
    description: 'Penyejukan pantas dengan penjimatan elektrik Inverter 5-Bintang, servis setiap 6 bulan dan jaminan waranti 5 tahun.',
    tags: ['1.0 Kuasa Kuda', 'Inverter 5-Bintang', 'Waranti 5 Tahun', 'Servis 6 Bulan'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-malaysia-air-conditioner-e1768810258674.png',
    regularMonthly: 'RM100.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'Pelan Sewaan',
    badge: 'Inverter Pintar',
    emallUrl: `https://emall.coway.com.my/productlist/category/aircond-10-hp?agentcode=${siteConfig.hpCode}`,
    serviceInterval: 'Servis Pembersihan Mendalam Setiap 6 Bulan & Waranti 5 Tahun',
    idealFor: 'Bilik Tidur, Ruang Kerja, Penjimatan Elektrik Inverter 5-Bintang',
    keyFeatures: [
      'Penjimatan Tenaga Inverter Penarafan 5-Bintang',
      'Waranti Penuh 5 Tahun & Servis Berjadual Setiap 6 Bulan',
      'Pilihan Pelan WOW 5 (RM100) atau Trade-In (RM90)'
    ]
  },
  {
    id: 'aircond-p15',
    category: 'aircond',
    name: 'Penyaman Udara P-Series 1.5HP',
    code: 'CAC12-ST02',
    description: 'Penyaman udara inverter berkuasa 1.5HP dengan hembusan angin lembut, servis setiap 6 bulan dan jaminan waranti 5 tahun.',
    tags: ['1.5 Kuasa Kuda', 'Inverter 5-Bintang', 'Waranti 5 Tahun', 'Servis 6 Bulan'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-malaysia-p-series-air-conditioner-e1768810284195.png',
    regularMonthly: 'RM110.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'Pelan Sewaan',
    badge: 'Servis Berkala',
    emallUrl: `https://emall.coway.com.my/productlist/category/cooling-cooling-set-p-series-aircond-15hp?agentcode=${siteConfig.hpCode}`,
    serviceInterval: 'Servis Pembersihan Mendalam Setiap 6 Bulan & Waranti 5 Tahun',
    idealFor: 'Ruang Tamu, Bilik Utama Besar, Penyejukan Pantas & Senyap',
    keyFeatures: [
      'Kuasa Penyejukan Pantas 1.5HP dengan Inverter 5-Bintang',
      'Waranti Penuh 5 Tahun & Servis Berjadual Setiap 6 Bulan',
      'Pilihan Pelan WOW 5 (RM110) atau Trade-In (RM99)'
    ]
  },

  // ==========================================
  // --- REFRIGERATORS (PETI SEJUK) ---
  // ==========================================
  {
    id: 'fridge-715',
    category: 'refrigerator',
    name: 'Peti Sejuk 2-Pintu (715L)',
    code: 'CR715-SBS01',
    description: 'Peti sejuk 2-pintu bersebelahan mega 715L rekaan mewah Keluli Tahan Karat Hitam dengan dwi-inverter dan servis penjagaan berkala.',
    tags: ['2-Pintu 715L', 'Dwi-Inverter', 'Keluli Hitam', 'Aliran Multi-Udara'],
    image: 'https://coway.cc/wp-content/uploads/2026/05/715L_thumbnail.png',
    regularMonthly: 'RM84.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM5,899',
    badge: 'Kapasiti 715L',
    emallUrl: `https://emall.coway.com.my/productlist/category/new-new-2?agentcode=${siteConfig.hpCode}`,
    serviceInterval: 'Servis Penjagaan & Sanitasi Berkala oleh Cody',
    idealFor: 'Keluarga Besar, Simpanan Makanan Segar Ekstra Luas, Dapur Moden',
    keyFeatures: [
      'Kapasiti Simpanan Mega 715 Liter untuk Keluarga',
      'Teknologi Dwi-Inverter Menjimatkan Penggunaan Elektrik',
      'Perkhidmatan Penjagaan dan Sanitasi Berkala oleh Cody'
    ]
  },
  {
    id: 'fridge-551',
    category: 'refrigerator',
    name: 'Peti Sejuk 4-Pintu (551L)',
    code: 'CR551-MDR01',
    description: 'Peti sejuk 4-pintu fleksibel dengan kawalan kelembapan optimum dan penapis pembasmian bau bakteria.',
    tags: ['4 Pintu 551L', 'Zon Fleksibel', 'Kebersihan Dwi-Aksi', 'Penyahbau'],
    image: 'https://coway.cc/wp-content/uploads/2026/05/551L_thumbnail.png',
    regularMonthly: 'RM99.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM6,799',
    badge: '4 Pintu Pintar',
    emallUrl: `https://emall.coway.com.my/productlist/category/new-new-1?agentcode=${siteConfig.hpCode}`,
    serviceInterval: 'Servis Penjagaan & Sanitasi Berkala oleh Cody',
    idealFor: 'Susunan Makanan Rapi dengan Zon Fleksibel, Dapur Estetik',
    keyFeatures: [
      'Rekaan 4 Pintu dengan Zon Pelbagai Suhu Mengikut Jenis Makanan',
      'Sistem Kawalan Kelembapan untuk Mengekalkan Kesegaran Sayur & Buah',
      'Penapis Antibakteria dan Penyahbau Bersepadu'
    ]
  },

  // ==========================================
  // --- BATHROOM (BILIK MANDI) ---
  // ==========================================
  {
    id: 'flowlet-plus',
    category: 'bathroom',
    name: 'Bidet Elektronik Flowlet Plus',
    code: 'CWD10-ST01',
    description: 'Bidet elektronik automatik dengan pemanas tempat duduk, kawalan suhu air suam dan pensterilan nozel sinar UV.',
    tags: ['Pemanas Tempat Duduk', 'Air Suam', 'Nozel Bersih UV'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-flowlet-plus-electronic-bidet-CWD10-ST01.png',
    regularMonthly: 'RM40.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'Pelan Sewaan',
    badge: 'Bidet Elektronik',
    emallUrl: `https://emall.coway.com.my/productlist/category/bathroom-bidet-flowlet-plus-panel-round?agentcode=${siteConfig.hpCode}`,
    serviceInterval: 'Servis Penjagaan & Penukaran Nozel Percuma Sepanjang Kontrak',
    idealFor: 'Kebersihan Tandas Moden, Orang Tua & Ibu Mengandung, Keselesaan Maksimum',
    keyFeatures: [
      'Tempat Duduk Dipanaskan dengan Suhu Selesa',
      'Suhu Pancuran Air Suam yang Boleh Dilaras',
      'Pembersihan Nozel Automatik Menggunakan Sinar UV'
    ]
  },
  {
    id: 'flowlet',
    category: 'bathroom',
    name: 'Bidet Bateri Flowlet',
    code: 'BA48-A',
    description: 'Bidet pintar berkuasa bateri tanpa sebarang wayar sambungan elektrik. Selamat, bersih dan mudah dipasang.',
    tags: ['Kuasa Bateri', 'Tanpa Wayar', 'Kalis Air IPX4'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-flowlet-bateri-bidet-BA48-A.png',
    regularMonthly: 'RM30.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'Pelan Sewaan',
    badge: 'Serendah RM30',
    emallUrl: `https://emall.coway.com.my/productlist/category/bathroom-bidet-manualbidet?agentcode=${siteConfig.hpCode}`,
    serviceInterval: 'Servis Penjagaan Berkala oleh Coway',
    idealFor: 'Tandas Tanpa Palam Elektrik, Pemasangan Mudah Tanpa Pendawaian',
    keyFeatures: [
      'Beroperasi Menggunakan Bateri Tanpa Pendawaian Elektrik',
      'Penarafan Kalis Air IPX4 yang Selamat di Bilik Mandi',
      'Dwi-Nozel Pembersihan Khusus untuk Lelaki dan Wanita'
    ]
  }
];

/**
 * Model counts derived from the catalog itself, so every badge and CTA that
 * promises "N model" can never drift from what the filter actually shows.
 */
export const CATEGORY_COUNTS: Record<ProductCategory, number> = PRODUCTS.reduce(
  (acc, product) => {
    acc[product.category] += 1;
    return acc;
  },
  Object.fromEntries(CATEGORY_TABS.map((tab) => [tab.id, 0])) as Record<ProductCategory, number>
);
CATEGORY_COUNTS.all = PRODUCTS.length;
