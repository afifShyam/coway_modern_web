'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { 
  MessageCircle, 
  Flame,
  Wrench,
  ShieldCheck,
  BadgeCheck,
  ChevronRight,
  Sparkles,
  Users,
  Clock,
  MapPin,
  Heart
} from 'lucide-react';

const TOP_FEATURED = [
  {
    name: 'Villaem III',
    code: 'CHP-7320L',
    category: 'Penapis Air 4 Suhu',
    tag: 'Paling Popular',
    regularMonthly: 'RM74',
    dailyEstimate: 'RM2.50',
    promoMonths: '7',
    promoPrice: 'RM20',
    image: 'https://emall.coway.com.my/ProductImages/859ec6e7-6111-41bb-aad4-75a7145a8a50/1/240x240/villaem-3-white.png',
    link: '#produk',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya berminat dengan Villaem III (CHP-7320L). Boleh saya tahu promosi terkini dan cara permohonan?`
  },
  {
    name: 'Coway AIS',
    code: 'CHP-5310L',
    category: 'Pembuat Ais + Air',
    tag: 'Ais Segera',
    regularMonthly: 'RM120',
    dailyEstimate: 'RM4.00',
    promoMonths: '7',
    promoPrice: 'RM20',
    image: 'https://emall.coway.com.my/ProductImages/cd349c96-7052-4f9a-a75d-7eb696eedaa3/1/240x240/ais-white.png',
    link: '#produk',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya berminat dengan Coway AIS (CHP-5310L). Boleh saya tahu promosi terkini?`
  },
  {
    name: 'Storm II',
    code: 'AP-1516D',
    category: 'Penulen Udara HEPA',
    tag: 'HEPA H13',
    regularMonthly: 'RM60',
    dailyEstimate: 'RM2.00',
    promoMonths: '7',
    promoPrice: 'RM20',
    image: 'https://emall.coway.com.my/ProductImages/f18d8c4d-f7d0-4eb5-a5da-389fbc5a66ad/1/240x240/storm-2.jpg',
    link: '#produk',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya berminat dengan Storm II (AP-1516D). Boleh bantu saya semak kelayakan promosi?`
  },
  {
    name: 'BEREX Pebble',
    code: 'MC-C01',
    category: 'Kerusi Urut 3D',
    tag: 'Urutan Moden',
    regularMonthly: 'RM120',
    dailyEstimate: 'RM4.00',
    promoMonths: '3',
    promoPrice: 'RM20',
    image: 'https://emall.coway.com.my/ProductImages/8b8abf5f-2bc3-4ed3-9a95-5bbb5f7b41dc/1/240x240/pebble-mystic-grey.png',
    link: '#produk',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya berminat dengan Kerusi Urut BEREX Pebble (MC-C01). Boleh saya tahu promosi terkini?`
  }
];

const CATEGORY_CHIPS = [
  { label: 'Penapis Air', id: '#produk' },
  { label: 'Penulen Udara', id: '#produk' },
  { label: 'Kerusi Urut', id: '#produk' },
  { label: 'Tilam Hotel', id: '#produk' },
  { label: 'Aircond', id: '#produk' },
  { label: 'Peti Sejuk', id: '#produk' },
  { label: 'Bilik Mandi', id: '#produk' },
];

interface HeroProps {
  onOpenQuiz?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-850 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* TOP HERO ROW: HUMAN WARMTH & HIGH-CONVERTING VALUE PROP */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-16">
          
          {/* Left Column: Focused Copywriting & Personal Touch */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            
            {/* 1. Humanized Agent Credential Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs shadow-sm">
              <img 
                src={siteConfig.agentAvatar} 
                alt={siteConfig.agentName} 
                className="w-6 h-6 rounded-full object-cover border border-sky-500/60" 
              />
              <span className="text-white font-bold">{siteConfig.agentName}</span>
              <span className="text-sky-400 font-bold">✓</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-medium">Kod HP: {siteConfig.hpCode}</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-emerald-400 font-semibold hidden sm:inline">Servis Seluruh Malaysia</span>
            </div>

            {/* 2. Official Promo Urgency Pill */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-800/80 text-amber-300 text-xs font-bold shadow-inner">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Promosi Rasmi 2026 — Kadar Pengenalan Dari <strong>RM20/Bulan</strong></span>
              </div>
            </div>

            {/* 3. Customer & Result-Focused Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Air Bersih, Udara Segar & <br className="hidden sm:inline" />
              <span className="text-sky-400">Kediaman Lebih Selesa.</span>
            </h1>

            {/* 4. Natural Value Proposition */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Hai, saya <strong>{siteConfig.agentName}</strong>. Saya bantu anda pilih produk Coway yang sesuai dengan keperluan keluarga dan bajet bulanan — <strong>tanpa sebarang caj konsultasi</strong> & dengan urusan pemasangan percuma di seluruh Malaysia.
            </p>

            {/* 5. Undisputed Primary CTA (WhatsApp Johan) */}
            <div className="pt-2 flex flex-col items-center lg:items-start gap-2.5">
              <a 
                href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin konsultasi pemilihan produk Coway yang sesuai untuk rumah saya.`)}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base sm:text-lg font-extrabold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 hover:shadow-emerald-900/80 transition-all text-center flex items-center justify-center gap-2.5 border border-emerald-400/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>WhatsApp Johan — Semak Promosi</span>
              </a>

              {/* Micro-copy */}
              <div className="text-xs text-slate-400 font-medium flex items-center justify-center lg:justify-start gap-2">
                <span>⚡ Balasan Pantas (&lt; 5 Minit)</span>
                <span>•</span>
                <span>Tiada Komitmen</span>
                <span>•</span>
                <span>Konsultasi Percuma</span>
              </div>

              {/* Secondary Action Link */}
              <div className="pt-1">
                <a 
                  href="#produk" 
                  className="text-xs sm:text-sm font-semibold text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Atau Lihat Katalog Produk & Senarai Harga Penuh</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* 6. Human Trust Metrics Strip */}
            <div className="pt-4 border-t border-slate-850/80 grid grid-cols-3 gap-2 text-left">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">1,200+ Keluarga</div>
                  <div className="text-[10px] text-slate-400">Telah dibantu</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">5+ Tahun</div>
                  <div className="text-[10px] text-slate-400">Health Planner Sah</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Halal JAKIM</div>
                  <div className="text-[10px] text-slate-400">100% Diyakini</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Warm Malaysian Home Lifestyle Visual */}
          <div className="lg:col-span-5">
            <div className="pro-card p-2.5 sm:p-3 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl space-y-2 relative group overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950">
                <img 
                  src="/images/malaysian-kitchen-lifestyle.jpg" 
                  alt="Dapur Keluarga Malaysia dengan Penapis Air Coway" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-left">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-950/90 text-sky-300 border border-sky-800 text-[10px] font-bold mb-1">
                    <Sparkles className="w-3 h-3 text-sky-400" />
                    Selesa • Bersih • Mudah
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white">Air Minuman Bersih Setiap Saat</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Tak perlu jerang air atau simpan botol di peti sejuk lagi.</p>
                </div>
              </div>
              
              <div className="px-2 py-1 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Pemasangan Kemas & Percuma</span>
                <span className="text-emerald-400 font-bold">Servis Cody Berkala</span>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* POPULAR PRODUCTS - 4 MODELS WITH HONEST PRICING HIERARCHY */}
        {/* ============================================================== */}
        <div className="mb-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-1">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Pilihan Popular Pelanggan
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Model paling digemari dengan kadar sewaan berpatutan dan kos harian yang sangat jimat.
              </p>
            </div>
            <a href="#produk" className="text-xs sm:text-sm font-bold text-sky-400 hover:underline inline-flex items-center gap-1 shrink-0 mt-1 sm:mt-0">
              <span>Lihat Semua 27 Model</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOP_FEATURED.map((item, idx) => (
              <div
                key={idx}
                className="pro-card p-4 sm:p-5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl transition-all duration-200 flex flex-col justify-between group shadow-lg relative"
              >
                <div>
                  {/* Top Tag & Code */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-950 text-sky-400 border border-sky-800">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-400">{item.code}</span>
                  </div>

                  {/* Product Image */}
                  <a href={item.link} className="h-28 sm:h-36 flex items-center justify-center my-2 bg-slate-950 rounded-xl p-2 border border-slate-850 group-hover:scale-105 transition-transform duration-300 block">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="max-h-24 sm:max-h-32 max-w-full object-contain drop-shadow"
                      loading="eager"
                    />
                  </a>

                  {/* Name */}
                  <h3 className="text-base font-extrabold text-white group-hover:text-sky-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">{item.category}</span>
                </div>

                {/* Pricing Block: Real Monthly Rate as Anchor */}
                <div className="mt-3 pt-3 border-t border-slate-800 space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-baseline justify-between">
                      <div className="text-lg font-black text-white">
                        {item.regularMonthly}<span className="text-xs font-normal text-slate-400">/bulan</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        ≈ <strong className="text-sky-300">{item.dailyEstimate}</strong> sehari
                      </span>
                    </div>
                    
                    <div className="mt-1 pt-1 border-t border-slate-850 flex items-center justify-between text-[11px]">
                      <span className="text-amber-400 font-bold">Promo Bln 1–{item.promoMonths}:</span>
                      <span className="font-extrabold text-amber-300">{item.promoPrice}/bulan</span>
                    </div>
                  </div>

                  {/* WhatsApp Action */}
                  <a
                    href={getWhatsAppUrl(item.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                    <span>Tanya Johan</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* JOHAN RECOMMENDATION HELPER BOX */}
        {/* ============================================================== */}
        <div className="pro-card p-5 sm:p-7 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-sky-900/50 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <img 
              src={siteConfig.agentAvatar} 
              alt={siteConfig.agentName} 
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border-2 border-sky-500/60 shadow-md shrink-0" 
            />
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 uppercase tracking-wide">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>Konsultasi Peribadi Mesra</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Tak Pasti Model Mana Sesuai?</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                &ldquo;Beritahu saya jumlah ahli keluarga, ruang kediaman dan bajet anda. Saya bantu carikan pakej yang paling berbaloi tanpa sebarang bayaran.&rdquo;
              </p>
            </div>
          </div>

          <a 
            href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, boleh bantu cadangkan model Coway yang paling sesuai dan jimat untuk keluarga saya?`)}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Minta Johan Cadangkan Model</span>
          </a>
        </div>

      </div>
    </section>
  );
};
