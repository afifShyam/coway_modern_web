import { Product, CategoryTab } from '@/types/product';

export const CATEGORY_TABS: CategoryTab[] = [
  { id: 'all', label: 'Semua Produk', icon: 'Sparkles', count: 27 },
  { id: 'water', label: 'Penapis Air', icon: 'Droplets', count: 10 },
  { id: 'air', label: 'Penulen Udara', icon: 'Wind', count: 5 },
  { id: 'relax', label: 'Kerusi Urut', icon: 'Armchair', count: 4 },
  { id: 'berex', label: 'Tilam Hotel', icon: 'Bed', count: 2 },
  { id: 'aircond', label: 'Penyaman Udara', icon: 'Snowflake', count: 2 },
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
    filterType: 'Osmosis Songsang (RO)',
    description: 'Model No.1 pilihan keluarga di Malaysia dengan 4 pilihan suhu air (Panas, Sejuk, Suam, Suhu Bilik) dan tangki berkapasiti besar 11.3 Liter.',
    tags: ['4 Suhu Air', 'Tangki 11.3L', 'Pensterilan UV', 'Kunci Keselamatan'],
    image: 'https://emall.coway.com.my/ProductImages/859ec6e7-6111-41bb-aad4-75a7145a8a50/1/240x240/villaem-3-white.png',
    regularMonthly: 'RM74.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,200',
    badge: 'Pilihan Utama',
    featured: true,
    emallUrl: 'https://emall.coway.com.my/productlist/category/water-purifier-table-top-villaem-3?agentcode=748757',
    colorVariants: [
      { name: 'Putih Murni', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/859ec6e7-6111-41bb-aad4-75a7145a8a50/1/240x240/villaem-3-white.png' },
      { name: 'Kelabu Kerikil', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/cfa73eea-3f49-4543-8563-8f626a1e9ea5/1/240x240/villaem-3-gray.png' }
    ],
    tankCapacity: { hot: '1.2 L', cold: '2.3 L', ambient: '6.4 L', total: '11.3 L' },
    dimensions: '340 x 523 x 518 mm',
    powerConsumption: 'Pemanas 270W - 320W, Pemampat 0.7A',
    filtrationStages: 'Sistem Penapisan RO Coway 6 Peringkat (Plus-Sediment, Pre-Carbon, Membran RO, Plus Inno-Sense, Antibakteria)',
    keyFeatures: [
      '4 Pilihan Suhu Air Berasingan',
      'Pensterilan Nozel Menggunakan Sinar UV Automatik',
      'Penunjuk Paras Suhu LED dan Lampu Suasana',
      'Kunci Keselamatan Kanak-kanak untuk Air Panas'
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
    image: 'https://emall.coway.com.my/ProductImages/cd349c96-7052-4f9a-a75d-7eb696eedaa3/1/240x240/ais-white.png',
    regularMonthly: 'RM120.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM7,500',
    badge: 'Pembuat Ais',
    featured: true,
    emallUrl: 'https://emall.coway.com.my/productlist/category/water-purifier-table-top-dazzie-white?agentcode=748757',
    colorVariants: [
      { name: 'Putih Porselin', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/cd349c96-7052-4f9a-a75d-7eb696eedaa3/1/240x240/ais-white.png' },
      { name: 'Kelabu Kerikil', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/19f9ad9e-d9a0-4aeb-b633-f34bd0672416/1/240x240/ais-gray.png' }
    ],
    tankCapacity: { hot: '1.5 L', cold: '1.8 L', ambient: '1.8 L', ice: '0.7 kg', total: '5.8 L' },
    dimensions: '270 x 546 x 515 mm',
    powerConsumption: 'Pemanas 310W - 370W, Pembuat Ais 130W, Pemampat 0.8A',
    filtrationStages: 'Sistem Penapisan RO Tulen + Pensterilan Dwi-UV',
    keyFeatures: [
      'Pembuatan Ais Kristal Bentuk Peluru dengan Pantas',
      'Pensterilan Dwi-UV pada Tangki dan Nozel Pengeluaran',
      'Kawalan Sentuh Pintar Praset Cawan Pilihan',
      'Sistem Pembasmian Kuman Automatik Sepanjang Masa'
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
    image: 'https://emall.coway.com.my/ProductImages/db8c15f4-b7a0-485a-ac62-6c2f7c1ec26e/1/240x240/neon-white.png',
    regularMonthly: 'RM59.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,600',
    badge: '5 Pilihan Warna',
    featured: true,
    emallUrl: 'https://emall.coway.com.my/productlist/category/water-purifier-table-top-dazzie-pink?agentcode=748757',
    colorVariants: [
      { name: 'Putih Murni', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/db8c15f4-b7a0-485a-ac62-6c2f7c1ec26e/1/240x240/neon-white.png' },
      { name: 'Kelabu Kerikil', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/c4c984ec-a10b-4882-9d03-b1b989c7480b/1/240x240/neon-gray.png' },
      { name: 'Merah Jambu Manis', colorHex: '#F472B6', image: 'https://emall.coway.com.my/ProductImages/b415f28c-7f4f-40f3-84e1-617a6a2eeaa4/1/240x240/neon-pink.png' },
      { name: 'Biru Langit', colorHex: '#38BDF8', image: 'https://emall.coway.com.my/ProductImages/10d2a982-c861-44be-a493-e6d642196d30/1/240x240/neon-blue.png' },
      { name: 'Hijau Daun', colorHex: '#86EFAC', image: 'https://emall.coway.com.my/ProductImages/2308356a-5b9c-4259-bd58-58ed2a516b36/1/240x240/neon-green.png' }
    ],
    tankCapacity: { hot: '1.0 L', cold: '1.35 L', ambient: '2.65 L', total: '5.0 L' },
    dimensions: '180 x 440 x 422 mm',
    powerConsumption: 'Pemanas 300W, Pemampat 0.5A',
    filtrationStages: 'Penapisan Nanotrap™ Coway & Plus Inno-Sense Kaya Mineral',
    keyFeatures: [
      'Lebar Hanya 18cm Menjimatkan Ruang Dapur',
      '5 Pilihan Warna Mengikut Estetik Rumah Anda',
      'Panel Kawalan Sentuh Digital yang Mudah Digunakan',
      'Kaya dengan Khasiat Mineral Semula Jadi'
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
    image: 'https://emall.coway.com.my/ProductImages/2cdb7053-6a95-4e6d-8ebc-4263cb6a23e7/1/240x240/dazzie-white.png',
    regularMonthly: 'RM74.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,590',
    badge: 'Aliran Terus',
    emallUrl: 'https://emall.coway.com.my/productlist/category/water-purifier-table-top-dazzie-gray?agentcode=748757',
    colorVariants: [
      { name: 'Putih Murni', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/2cdb7053-6a95-4e6d-8ebc-4263cb6a23e7/1/240x240/dazzie-white.png' },
      { name: 'Kelabu Kerikil', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/57977099-8ba5-4172-89ef-57c34ffe121c/1/240x240/dazzie-gray.png' },
      { name: 'Merah Jambu Manis', colorHex: '#F472B6', image: 'https://emall.coway.com.my/ProductImages/1618281c-5660-47bd-b4f3-c4370fd3048c/1/240x240/dazzie-pink.png' },
      { name: 'Biru Langit', colorHex: '#38BDF8', image: 'https://emall.coway.com.my/ProductImages/be7b101b-1f39-4bd1-8205-16a7dcb1196b/1/240x240/dazzie-blue.png' },
      { name: 'Hijau Daun', colorHex: '#86EFAC', image: 'https://emall.coway.com.my/ProductImages/d8b2ec17-f24a-479c-982d-cd5f166e2ad9/1/240x240/dazzie-green.png' }
    ],
    tankCapacity: { total: 'Aliran Terus Tanpa Tangki' },
    dimensions: '180 x 440 x 385 mm',
    powerConsumption: 'Pemanasan Segera 2200W, Penyejukan 0.5A',
    filtrationStages: 'Sistem Penapisan Nanotrap™ + Pensterilan Nozel UV',
    keyFeatures: [
      'Pemanasan Segera 3 Saat Tanpa Perlu Menunggu',
      '4 Pilihan Isipadu Air (120ml, 250ml, 500ml, Berterusan)',
      'Teknologi Aliran Terus yang Segar dan Bersih'
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
    image: 'https://emall.coway.com.my/ProductImages/4fc588de-8d1f-423d-9551-b88a032b2c6f/1/240x240/neo-plus.png',
    regularMonthly: 'RM59.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,640',
    badge: 'Paling Jimat',
    emallUrl: 'https://emall.coway.com.my/productlist/category/waterpurifier-tabletop-neoplus?agentcode=748757',
    tankCapacity: { hot: '1.0 L', cold: '2.3 L', ambient: '2.5 L', total: '5.8 L' },
    dimensions: '260 x 483 x 500 mm',
    powerConsumption: 'Pemanas 300W, Pemampat 0.7A',
    filtrationStages: 'Sistem Penapisan Osmosis Songsang Coway 6 Peringkat',
    keyFeatures: [
      '3 Pilihan Suhu Asas (Panas, Sejuk, Suhu Bilik)',
      'Penderia Cahaya Eco untuk Penjimatan Elektrik Waktu Malam',
      'Kunci Keselamatan Kanak-kanak untuk Air Panas'
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
    image: 'https://emall.coway.com.my/ProductImages/b79c1af2-60c6-46e3-a902-babade97ea48/1/240x240/cinnamon.png',
    regularMonthly: 'RM32.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM2,490',
    badge: 'Serendah RM32',
    emallUrl: 'https://emall.coway.com.my/productlist/category/waterpurifier-table-top-cinnamon?agentcode=748757',
    tankCapacity: { ambient: '5.0 L', total: '5.0 L' },
    dimensions: '200 x 400 x 405 mm',
    powerConsumption: '0 Watt (Tanpa Elektrik)',
    filtrationStages: 'Penapisan Membran RO Berprestasi Tinggi',
    keyFeatures: [
      'Sifar Penggunaan Elektrik',
      'Kompak dan Mudah Diletakkan di Mana-mana Ruang',
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
    image: 'https://emall.coway.com.my/ProductImages/e460e15d-9be7-4e1d-b37d-48a283c529f8/1/240x240/ombak.png',
    regularMonthly: 'RM90.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,510',
    badge: 'Pilihan Ibu',
    emallUrl: 'https://emall.coway.com.my/productlist/category/waterpurifier-tabletop-ombak?agentcode=748757',
    tankCapacity: { hot: '3.0 L', cold: '2.3 L', ambient: '7.8 L', total: '13.1 L' },
    dimensions: '340 x 523 x 518 mm',
    powerConsumption: 'Pemanas 672W, Pemampat 0.6A',
    filtrationStages: 'Sistem RO Coway + Pensterilan Nozel Sinar UV',
    keyFeatures: [
      '50 Kombinasi Tetapan Suhu dan Isipadu Pengeluaran Air',
      'Tangki Air Panas Berkapasiti Besar 3.0 Liter',
      'Pensterilan Nozel Menggunakan Sinar UV Semasa Air Dikeluarkan'
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
    emallUrl: 'https://emall.coway.com.my/productlist/category/water-purifier-floor-standing-core-slim?agentcode=748757',
    colorVariants: [
      { name: 'Putih Porselin', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/cc9302e6-fdfe-4881-bcc5-b37babee082e/1/240x240/core-slim-white.png' },
      { name: 'Kelabu Kerikil', colorHex: '#94A3B8', image: 'https://emall.coway.com.my/ProductImages/8561e6f3-94ce-457a-a473-77865dd80bee/1/240x240/core-slim-gray.png' }
    ],
    tankCapacity: { hot: '3.6 L', cold: '3.8 L', ambient: '4.6 L', total: '12.0 L' },
    dimensions: '260 x 483 x 1150 mm',
    powerConsumption: 'Pemanas 500W, Pemampat 0.7A',
    filtrationStages: 'Penapisan Nanotrap™ Coway & Mineral Semula Jadi',
    keyFeatures: [
      'Rekaan Berdiri Bebas Tanpa Perlu Meja Sokongan',
      'Tangki Simpanan Air Berkapasiti Besar 12 Liter',
      'Ketinggian Ergonomik yang Selesa untuk Mengambil Air'
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
    image: 'https://emall.coway.com.my/ProductImages/ec48948e-5e2f-4edd-8531-58dd0edad5e3/1/240x240/core-plus.png',
    regularMonthly: 'RM93.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM6,500',
    badge: 'Kapasiti Mega',
    emallUrl: 'https://emall.coway.com.my/productlist/category/water-purifier-floor-standing-core-plus?agentcode=748757',
    tankCapacity: { hot: '3.6 L', cold: '6.0 L', ambient: '11.5 L', total: '21.1 L' },
    dimensions: '370 x 490 x 1257 mm',
    powerConsumption: 'Pemanas 500W - 660W, Pemampat 0.8A',
    filtrationStages: 'Penapisan Membran RO Komersial Berkapasiti Tinggi',
    keyFeatures: [
      'Tangki Mega 21.1 Liter Menjamin Bekalan Air Tidak Terputus',
      'Sesuai untuk Penggunaan Kekerapan Tinggi',
      'Air RO 100% Bersih dan Suci'
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
    emallUrl: 'https://emall.coway.com.my/productlist/category/outdoor-outdoor-filter-coway-outdoor-filter?agentcode=748757',
    dimensions: '210 x 210 x 1020 mm',
    filtrationStages: 'Membran Ultrapenapisan Gentian Berongga PVDF (0.01 Mikron)',
    keyFeatures: [
      'Menapis Air Sebelum Memasuki Tangki dan Paip Rumah',
      'Sistem Pembersihan Balik Automatik Berkala',
      'Perumah Keluli Tahan Karat Gred Tinggi yang Tahan Cuaca'
    ]
  },

  // ==========================================
  // --- AIR PURIFIERS (PENULEN UDARA) ---
  // ==========================================
  {
    id: 'storm2',
    category: 'air',
    name: 'Storm II',
    code: 'AP-1523D',
    description: 'Penulen udara No.1 paling popular dengan kipas pengitar udara berkuasa tinggi sejauh 10 meter untuk udara bersih menyeluruh.',
    tags: ['Penapis HEPA H13', 'Pengitar 10 Meter', 'Liputan 50m²', 'Antibakteria'],
    image: 'https://emall.coway.com.my/ProductImages/f18d8c4d-f7d0-4eb5-a5da-389fbc5a66ad/1/240x240/storm-2.jpg',
    regularMonthly: 'RM60.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,190',
    badge: 'No.1 Penulen Udara',
    featured: true,
    emallUrl: 'https://emall.coway.com.my/productlist/category/air-purifier-air-purifier-storm-2?agentcode=748757',
    dimensions: '410 x 515 x 752 mm',
    powerConsumption: '42 Watt',
    filtrationStages: 'Pra-Penapis, Penapis Habuk Halus, Penapis Penyahbauan, Penapis Coway HEPA H13',
    keyFeatures: [
      'Kipas Pengitar Udara Jarak Jauh Sehingga 10 Meter',
      'Kawasan Liputan Luas 50m² (540 kaki persegi)',
      'Penderia Kualiti Udara Berlampu LED 4 Warna',
      'Mod Jerebu Khas untuk Pembersihan Segera'
    ]
  },
  {
    id: 'lombok3',
    category: 'air',
    name: 'Lombok 3',
    code: 'AP-1520C',
    description: 'Sistem penapisan 6 peringkat dengan teknologi Plasma RBD dan Pengion untuk membasmi virus, bakteria dan alergen haiwan.',
    tags: ['Plasma RBD', 'Pengion Negatif', 'Bebas Alahan', 'Liputan 50m²'],
    image: 'https://emall.coway.com.my/ProductImages/67a5be7b-e151-44c3-9079-994677a451b6/1/240x240/lombok-3.jpg',
    regularMonthly: 'RM60.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM3,490',
    badge: 'Pakar Alahan',
    emallUrl: 'https://emall.coway.com.my/productlist/category/airpurifier-airpurifier-lombok3?agentcode=748757',
    dimensions: '414 x 264 x 651 mm',
    powerConsumption: '50 Watt',
    filtrationStages: 'Penapisan 6 Peringkat + Plasma RBD & Penjana Ion Negatif',
    keyFeatures: [
      'Teknologi Plasma RBD Pemusnah Virus dan Bakteria',
      'Penjana Ion Negatif Menghasilkan Udara Segar Nyaman',
      'Terbukti Berkesan Menghapuskan Bulu Haiwan dan Hama Habuk'
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
    outrightPrice: 'NA',
    badge: 'Serendah RM49',
    emallUrl: 'https://emall.coway.com.my/productlist/category/air-purifier-air-purifier-studio?agentcode=748757',
    colorVariants: [
      { name: 'Putih Moden', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/9b502336-eff4-4e13-99c6-ac4689181c2b/1/240x240/studio-white.png' },
      { name: 'Kuning Langsat (Beige)', colorHex: '#E7DEC8', image: 'https://emall.coway.com.my/ProductImages/58e15860-eac2-48d6-b551-19d8012c2f98/1/240x240/studio-beige.png' }
    ],
    dimensions: '260 x 260 x 480 mm',
    powerConsumption: '30 Watt',
    filtrationStages: 'Penapis Gabungan HEPA 360 Darjah Bersepadu',
    keyFeatures: [
      'Sedutan Udara 360 Darjah Menyeluruh',
      'Operasi Senyap Khusus untuk Waktu Tidur',
      'Lampu Penunjuk Kualiti Udara Estetik'
    ]
  },
  {
    id: 'suite',
    category: 'air',
    name: 'Coway Suite',
    code: 'AP-2524B',
    description: 'Penulen udara berkapasiti sederhana-besar dengan motor senyap dan sentuhan rekaan Scandinavian.',
    tags: ['Liputan 66m²', 'Motor Senyap', 'Pilihan Warna', 'Penapis HEPA H13'],
    image: 'https://emall.coway.com.my/ProductImages/6f51c08c-77e3-49cf-85cd-0ba40602cfea/1/240x240/suite-white.png',
    regularMonthly: 'RM65.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'NA',
    badge: 'Scandinavian',
    emallUrl: 'https://emall.coway.com.my/productlist/category/air-purifier-air-purifier-suite?agentcode=748757',
    colorVariants: [
      { name: 'Putih Moden', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/6f51c08c-77e3-49cf-85cd-0ba40602cfea/1/240x240/suite-white.png' },
      { name: 'Kuning Langsat (Beige)', colorHex: '#E7DEC8', image: 'https://emall.coway.com.my/ProductImages/37594b88-f027-44f9-b721-dcc47def94ec/1/240x240/suite-beige.png' }
    ],
    dimensions: '360 x 360 x 600 mm',
    filtrationStages: 'Penapis HEPA H13 Asli + Penapis Penyahbauan Gas',
    keyFeatures: [
      'Kawasan Liputan Luas 66m²',
      'Penderia Gas dan Bau Pintar Berkepekaan Tinggi',
      'Motor Inverter yang Senyap dan Menjimatkan Tenaga'
    ]
  },
  {
    id: 'atrium',
    category: 'air',
    name: 'Coway Atrium',
    code: 'AP-3525I',
    description: 'Penulen udara gred komersial dan ruang tamu besar dengan rekaan mewah bertaraf seni antarabangsa.',
    tags: ['Liputan 99m²', '3 Pilihan Warna', 'Dwi-Penapis', 'Gred Elit'],
    image: 'https://emall.coway.com.my/ProductImages/ac34611e-d910-44c0-b9b9-28e5c639f9b0/1/240x240/atrium-white.png',
    regularMonthly: 'RM89.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM4,800',
    badge: 'Ruang Tamu Besar',
    emallUrl: 'https://emall.coway.com.my/productlist/category/air-purifier-air-purifier-atrium?agentcode=748757',
    colorVariants: [
      { name: 'Putih Moden', colorHex: '#FFFFFF', image: 'https://emall.coway.com.my/ProductImages/ac34611e-d910-44c0-b9b9-28e5c639f9b0/1/240x240/atrium-white.png' },
      { name: 'Kuning Langsat (Beige)', colorHex: '#E7DEC8', image: 'https://emall.coway.com.my/ProductImages/82f5db57-d480-4bc2-b822-802dc5dfc269/1/240x240/atrium-beige.png' },
      { name: 'Kelabu Arang', colorHex: '#64748B', image: 'https://emall.coway.com.my/ProductImages/99a8a5aa-d3df-4e61-a7f5-ba5955d27b33/1/240x240/atrium-gray.png' }
    ],
    dimensions: '400 x 400 x 780 mm',
    filtrationStages: 'Sistem Dwi-Penapis Mega HEPA Dua Arah',
    keyFeatures: [
      'Kawasan Liputan Sangat Luas 99m² (1,065 kaki persegi)',
      'Sistem Aliran Udara Dwi-Kipas Berkuasa',
      '3 Pilihan Warna Eksklusif'
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
    image: 'https://emall.coway.com.my/ProductImages/8b8abf5f-2bc3-4ed3-9a95-5bbb5f7b41dc/1/240x240/pebble-mystic-grey.png',
    regularMonthly: 'RM120.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM8,000',
    badge: '4 Pilihan Warna',
    featured: true,
    emallUrl: 'https://emall.coway.com.my/productlist/category/massage-pebble?agentcode=748757',
    colorVariants: [
      { name: 'Kelabu Mistik', colorHex: '#64748B', image: 'https://emall.coway.com.my/ProductImages/8b8abf5f-2bc3-4ed3-9a95-5bbb5f7b41dc/1/240x240/pebble-mystic-grey.png' },
      { name: 'Pasir Kuning Langsat', colorHex: '#D6C5B3', image: 'https://emall.coway.com.my/ProductImages/0c88e5fd-a79c-47be-8e77-eaa4916fbf25/1/240x240/pebble-sand-beige.png' },
      { name: 'Merah Bata (Terracotta)', colorHex: '#E09F8F', image: 'https://emall.coway.com.my/ProductImages/b4bd6469-edf6-436c-a2b2-fd7afe113ff3/1/240x240/pebble-terracotta-pink.png' },
      { name: 'Biru Kabus (Hazy Blue)', colorHex: '#7A9FB8', image: 'https://emall.coway.com.my/ProductImages/ebfc1727-f750-48dd-95d3-160fa3b33b57/1/240x240/pebble-hazy-blue.png' }
    ],
    dimensions: '700 x 1150 x 1030 mm',
    powerConsumption: '120 Watt',
    keyFeatures: [
      'Penggelek Urutan 3D Mengikut Lengkung Tulang Belakang Laluan-SL',
      'Kedudukan Baring Graviti Sifar untuk Relaksasi Maksimum',
      'Pemanas Haba Thermal pada Bahagian Pinggang dan Belakang',
      'Pembesar Suara Bluetooth Terbina Dalam'
    ]
  },
  {
    id: 'mine',
    category: 'relax',
    name: 'Kerusi Urut BEREX Mine',
    code: 'MC-B02',
    description: 'Kerusi urut kompak ergonomik dengan modul penyandar kaki boleh putar 180° dan beg udara mampatan pinggul.',
    tags: ['Kaki Putar 180°', 'Beg Udara Pinggul', '3 Pilihan Warna', 'Kompak'],
    image: 'https://emall.coway.com.my/ProductImages/3ecf4894-ce52-4c21-8fd4-c02fa4e58bde/1/240x240/mine-champagne-beige.png',
    regularMonthly: 'RM110.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM7,500',
    badge: '3 Pilihan Warna',
    emallUrl: 'https://emall.coway.com.my/productlist/category/massage-massage-chair-mine?agentcode=748757',
    colorVariants: [
      { name: 'Kuning Champagne', colorHex: '#E5D9C5', image: 'https://emall.coway.com.my/ProductImages/3ecf4894-ce52-4c21-8fd4-c02fa4e58bde/1/240x240/mine-champagne-beige.png' },
      { name: 'Hitam Dakwat', colorHex: '#1F242A', image: 'https://emall.coway.com.my/ProductImages/ed1db9d7-6a0b-4c66-9f27-7d0d9c1c036f/1/240x240/mine-ink-black.png' },
      { name: 'Coklat Ros', colorHex: '#8D6559', image: 'https://emall.coway.com.my/ProductImages/b0e24212-4a7b-4993-94ef-75bf2de52116/1/240x240/mine-rose-brown.png' }
    ],
    dimensions: '650 x 1080 x 1010 mm',
    powerConsumption: '100 Watt',
    keyFeatures: [
      'Penyandar Kaki Boleh Diputar 180° Menjadi Kerusi Sofa Biasa',
      'Urutan Mampatan Beg Udara di Bahagian Pinggul dan Peha',
      'Mod Urutan Senyap Sesuai Digunakan di Bilik Tidur',
      'Saiz Kompak Menjimatkan Ruang Rumah'
    ]
  },
  {
    id: 'senno-plus',
    category: 'relax',
    name: 'Kerusi Urut BEREX Senno Plus',
    code: 'MC-LUX01',
    description: 'Kerusi urut eksekutif gred perdana dengan Pengimbas Badan AI, urutan tapak kaki refleksologi dan kompresi udara penuh.',
    tags: ['Pengimbas Badan AI', 'Gred Perdana', 'Refleksologi Kaki', 'Urutan 4D'],
    image: 'https://emall.coway.com.my/ProductImages/036165bd-c4eb-4ce1-8d69-d4dc4042f09d/1/240x240/coway-berex-senno-plus.png',
    regularMonthly: 'RM160.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM13,500',
    badge: 'Gred Perdana',
    emallUrl: 'https://emall.coway.com.my/productlist/category/massage-massage-coway-berex-senno-plus?agentcode=748757',
    dimensions: '820 x 1500 x 1200 mm',
    powerConsumption: '200 Watt',
    keyFeatures: [
      'Pengimbasan Postur Badan Pintar Menggunakan Penderia AI',
      'Penggelek Urutan 4D Mendalam dari Leher Hingga Peha Bawah',
      'Refleksologi Tapak Kaki Berputar & Beg Udara Betis Penuh',
      'Skrin Kawalan Sentuh Digital Terbina Dalam'
    ]
  },
  {
    id: 'massage-bed',
    category: 'relax',
    name: 'Katil Urut Haba BEREX',
    code: 'MB-B01 / MB-C01',
    description: 'Katil urut pintar terapi haba batu jed asli untuk regangan dan penjajaran tulang belakang dari leher ke pinggul.',
    tags: ['Terapi Batu Jed', 'Inframerah Jauh', 'Boleh Dilipat', 'Penjajaran Tulang'],
    image: 'https://emall.coway.com.my/ProductImages/cfa028ff-a59e-438d-a3db-eb9c05ae895e/1/240x240/massage-bed-premium-champagne-beige.png',
    regularMonthly: 'RM235.00',
    promoMonthly: '20',
    promoMonths: '3',
    outrightPrice: 'RM14,500',
    badge: 'Terapi Batu Jed',
    emallUrl: 'https://emall.coway.com.my/productlist/category/massage-massage-bed-standard?agentcode=748757',
    colorVariants: [
      { name: 'Kuning Champagne (Premium)', colorHex: '#E5D9C5', image: 'https://emall.coway.com.my/ProductImages/cfa028ff-a59e-438d-a3db-eb9c05ae895e/1/240x240/massage-bed-premium-champagne-beige.png' },
      { name: 'Hitam Dakwat (Premium)', colorHex: '#1F242A', image: 'https://emall.coway.com.my/ProductImages/b38c539e-a00c-4a22-a0de-873f940b5e52/1/240x240/massage-bed-premium-ink-black.png' },
      { name: 'Hitam Dakwat (Standard)', colorHex: '#334155', image: 'https://emall.coway.com.my/ProductImages/209b5910-5e06-4502-ade6-4e765d55553c/1/240x240/massage-bed-standard-ink-black.png' }
    ],
    dimensions: '700 x 2000 x 450 mm (Boleh Dilipat Menjadi Sofa Santai)',
    powerConsumption: '250 Watt',
    keyFeatures: [
      'Batu Jed Asli Memancarkan Sinar Inframerah Jauh Menembusi Otot',
      'Pemanasan Haba Boleh Dilaras Sehingga 65°C',
      'Rekaan Katil Boleh Dilipat Masuk untuk Menjimatkan Ruang',
      'Mod Rawatan Tulang Belakang Berdasarkan Penjajaran Fisioterapi'
    ]
  },

  // ==========================================
  // --- MATTRESS (TILAM HOTEL & KESIHATAN) ---
  // ==========================================
  {
    id: 'primelite',
    category: 'berex',
    name: 'Tilam BEREX Prime Lite',
    code: 'BEREX Prime Lite',
    description: 'Tilam gred hotel mewah dengan sokongan tulang belakang 5 zon dan servis pembersihan sanitasi berkala 7 langkah.',
    tags: ['Pegas 5-Zon', 'Tukar Lapisan Percuma', 'Servis Sanitasi'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-prime-lite-mattress-e1768818162967.png',
    regularMonthly: 'RM49.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'RM4,500',
    badge: 'Tilam Hotel',
    emallUrl: 'https://emall.coway.com.my/productlist/category/mattress-mattress-only-prime-lite-mattress-queen?agentcode=748757',
    keyFeatures: [
      'Sistem Pegas Poket 5-Zon untuk Sokongan Badan Optimum',
      'Penukaran Lapisan Atas (Topper) Percuma Sepanjang Kontrak',
      'Servis Sanitasi Pembasmian Hama Berkala 7 Langkah oleh Cody'
    ]
  },
  {
    id: 'prime2',
    category: 'berex',
    name: 'Tilam BEREX Prime II',
    code: 'BEREX Prime 2',
    description: 'Tilam kesihatan dengan fabrik antistatik yang meneutralkan cas elektrik badan untuk tidur yang lebih lena.',
    tags: ['Pegas 7-Zon', 'Fabrik Antistatik', 'Lateks Semula Jadi'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-prime2-series-mattress-e1768818304349.png',
    regularMonthly: 'RM70.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'RM5,780',
    badge: 'Antistatik',
    emallUrl: 'https://emall.coway.com.my/productlist/category/mattress-mattress-only-prime-mattress-queen-only-soft?agentcode=748757',
    keyFeatures: [
      'Fabrik Antistatik untuk Pelepasan Cas Elektrik Statik Badan',
      'Sokongan Tulang Belakang Ergonomik 7-Zon',
      'Lapisan Lateks Semula Jadi dan Busa Memori Berkualiti Tinggi'
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
    description: 'Penyejukan pantas dengan penjimatan elektrik Inverter 5-Bintang dan fungsi pembersihan kendiri automatik.',
    tags: ['1.0 Kuasa Kuda', 'Penyejukan Pantas', 'Inverter 5-Bintang', 'Pembersihan Kendiri'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-malaysia-air-conditioner-e1768810258674.png',
    regularMonthly: 'RM80.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'NA',
    badge: 'Inverter Pintar',
    emallUrl: 'https://emall.coway.com.my/productlist/category/aircond-10-hp?agentcode=748757',
    keyFeatures: [
      'Penjimatan Tenaga Inverter Penarafan 5-Bintang',
      'Fungsi Pembersihan Kendiri Automatik Mengelakkan Kulat',
      'Servis Berjadual oleh Juruteknik Bertauliah Coway'
    ]
  },
  {
    id: 'aircond-p15',
    category: 'aircond',
    name: 'Penyaman Udara P-Series 1.5HP',
    code: 'CAC12-ST02',
    description: 'Penyaman udara inverter premium dengan hembusan angin lembut 4-hala dan servis pembersihan mendalam 7-langkah.',
    tags: ['1.5 Kuasa Kuda', 'Aliran Udara 4-Hala', 'Servis 7 Langkah', 'Angin Lembut'],
    image: 'https://coway.cc/wp-content/uploads/2026/01/coway-malaysia-p-series-air-conditioner-e1768810284195.png',
    regularMonthly: 'RM90.00',
    promoMonthly: '20',
    promoMonths: '5',
    outrightPrice: 'NA',
    badge: 'Servis Berkala',
    emallUrl: 'https://emall.coway.com.my/productlist/category/cooling-cooling-set-p-series-aircond-15hp?agentcode=748757',
    keyFeatures: [
      'Hembusan Aliran Udara Lembut 4-Hala Menyeluruh',
      'Penapis Mikro Antibakteria Menyingkirkan Habuk Halus',
      'Servis Pembersihan Mendalam 7 Langkah Setiap 6 Bulan'
    ]
  },

  // ==========================================
  // --- REFRIGERATORS (PETI SEJUK) ---
  // ==========================================
  {
    id: 'fridge-715',
    category: 'refrigerator',
    name: 'Peti Sejuk Bersebelahan 715L',
    code: 'CR715-SBS01',
    description: 'Peti sejuk mega 715L rekaan mewah Keluli Tahan Karat Hitam dengan dwi-inverter dan servis penjagaan berkala.',
    tags: ['Kapasiti 715L', 'Dwi-Inverter', 'Keluli Hitam', 'Aliran Multi-Udara'],
    image: 'https://coway.cc/wp-content/uploads/2026/05/715L_thumbnail.png',
    regularMonthly: 'RM79.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM5,899',
    badge: 'Kapasiti 715L',
    emallUrl: 'https://emall.coway.com.my/productlist/category/new-new-2?agentcode=748757',
    keyFeatures: [
      'Kapasiti Simpanan Mega 715 Liter untuk Keluarga',
      'Teknologi Dwi-Inverter Menjimatkan Penggunaan Elektrik',
      'Perkhidmatan Penjagaan dan Sanitasi Berkala oleh Cody'
    ]
  },
  {
    id: 'fridge-551',
    category: 'refrigerator',
    name: 'Peti Sejuk 4-Pintu 551L',
    code: 'CR551-MDR01',
    description: 'Peti sejuk 4-pintu fleksibel dengan kawalan kelembapan optimum dan penapis pembasmian bau bakteria.',
    tags: ['4 Pintu 551L', 'Zon Fleksibel', 'Kebersihan Dwi-Aksi', 'Penyahbau'],
    image: 'https://coway.cc/wp-content/uploads/2026/05/551L_thumbnail.png',
    regularMonthly: 'RM94.00',
    promoMonthly: '20',
    promoMonths: '7',
    outrightPrice: 'RM6,799',
    badge: '4 Pintu Pintar',
    emallUrl: 'https://emall.coway.com.my/productlist/category/new-new-1?agentcode=748757',
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
    outrightPrice: 'NA',
    badge: 'Bidet Elektronik',
    emallUrl: 'https://emall.coway.com.my/productlist/category/bathroom-bidet-flowlet-plus-panel-round?agentcode=748757',
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
    outrightPrice: 'NA',
    badge: 'Serendah RM30',
    emallUrl: 'https://emall.coway.com.my/productlist/category/bathroom-bidet-manualbidet?agentcode=748757',
    keyFeatures: [
      'Beroperasi Menggunakan Bateri Tanpa Pendawaian Elektrik',
      'Penarafan Kalis Air IPX4 yang Selamat di Bilik Mandi',
      'Dwi-Nozel Pembersihan Khusus untuk Lelaki dan Wanita'
    ]
  }
];
