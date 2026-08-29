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
  UserCheck
} from 'lucide-react';

const TOP_FEATURED = [
  {
    name: 'Villaem III',
    code: 'CHP-7320L',
    category: 'Penapis Air',
    tag: 'Paling Popular',
    promoMonthly: '20',
    promoMonths: '7',
    regularMonthly: '74.00',
    image: 'https://emall.coway.com.my/ProductImages/859ec6e7-6111-41bb-aad4-75a7145a8a50/1/240x240/villaem-3-white.png',
    link: '#produk',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya berminat dengan Villaem III (CHP-7320L). Boleh saya tahu promosi dan bayaran bulanan selepas tempoh promo?`
  },
  {
    name: 'Coway AIS',
    code: 'CHP-5310L',
    category: 'Pembuat Ais',
    tag: 'Ais Segera',
    promoMonthly: '20',
    promoMonths: '7',
    regularMonthly: '120.00',
    image: 'https://emall.coway.com.my/ProductImages/cd349c96-7052-4f9a-a75d-7eb696eedaa3/1/240x240/ais-white.png',
    link: '#produk',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya berminat dengan Coway AIS (CHP-5310L). Boleh saya tahu promosi dan bayaran bulanan selepas tempoh promo?`
  },
  {
    name: 'Storm II',
    code: 'AP-1516D',
    category: 'Penulen Udara',
    tag: 'HEPA H13',
    promoMonthly: '20',
    promoMonths: '7',
    regularMonthly: '60.00',
    image: 'https://emall.coway.com.my/ProductImages/f18d8c4d-f7d0-4eb5-a5da-389fbc5a66ad/1/240x240/storm-2.jpg',
    link: '#produk',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya berminat dengan Storm II (AP-1516D). Boleh saya tahu promosi dan bayaran bulanan selepas tempoh promo?`
  },
  {
    name: 'BEREX Pebble',
    code: 'MC-C01',
    category: 'Kerusi Urut',
    tag: 'Urutan 3D',
    promoMonthly: '20',
    promoMonths: '3',
    regularMonthly: '120.00',
    image: 'https://emall.coway.com.my/ProductImages/8b8abf5f-2bc3-4ed3-9a95-5bbb5f7b41dc/1/240x240/pebble-mystic-grey.png',
    link: '#produk',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya berminat dengan Kerusi Urut BEREX Pebble (MC-C01). Boleh saya tahu promosi terkini?`
  }
];

const CATEGORY_CHIPS = [
  { label: 'Penapis Air', icon: '💧', id: '#produk' },
  { label: 'Penulen Udara', icon: '💨', id: '#produk' },
  { label: 'Kerusi Urut', icon: '🪑', id: '#produk' },
  { label: 'Tilam Hotel', icon: '🛏️', id: '#produk' },
  { label: 'Aircond', icon: '❄️', id: '#produk' },
  { label: 'Peti Sejuk', icon: '🧊', id: '#produk' },
  { label: 'Bilik Mandi', icon: '🚿', id: '#produk' },
];

interface HeroProps {
  onOpenQuiz?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-850 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* TOP HERO ROW: CRO OPTIMIZED CONVERSION HIERARCHY */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          
          {/* 1. Humanized Agent Credential Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs shadow-sm">
            <img 
              src={siteConfig.agentAvatar} 
              alt={siteConfig.agentName} 
              className="w-5 h-5 rounded-full object-cover border border-sky-500/50" 
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
              <span>Promosi Rasmi Coway 2026 — Dari <strong>RM20/Bulan</strong></span>
            </div>
          </div>

          {/* 3. Customer & Result-Focused Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Nak Cari Coway Yang Sesuai <br className="hidden sm:inline" />
            <span className="text-sky-400">Untuk Rumah Anda?</span>
          </h1>

          {/* 4. Natural Value Proposition */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Saya bantu anda <strong>pilih produk yang sesuai, semak promosi terkini & urus pemasangan</strong> di seluruh Malaysia — <strong>konsultasi percuma</strong>.
          </p>

          {/* 5. Undisputed Primary CTA (WhatsApp Johan) */}
          <div className="pt-3 flex flex-col items-center gap-2.5">
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
            <div className="text-xs text-slate-400 font-medium flex items-center justify-center gap-2">
              <span>⚡ Balasan Pantas</span>
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
                <span>Atau Lihat Katalog Produk & Senarai Harga</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* 6. 3-Point Trust Strip */}
          <div className="pt-4 max-w-xl mx-auto border-t border-slate-850/80 grid grid-cols-3 gap-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5">
              <Wrench className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="text-[11px] sm:text-xs text-slate-300 font-semibold">Servis Berjadual Cody</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="text-[11px] sm:text-xs text-slate-300 font-semibold">Jaminan Rasmi Coway</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-1.5">
              <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-[11px] sm:text-xs text-slate-300 font-semibold">Pensijilan Halal JAKIM</span>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* POPULAR PRODUCTS - 4 MODELS (FAST BROWSING) */}
        {/* ============================================================== */}
        <div className="mb-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-1">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Pilihan Popular Pelanggan
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Tak pasti nak pilih yang mana? Mulakan dengan model paling digemari ini.
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

                {/* Price Breakdown - 100% Transparent */}
                <div className="mt-3 pt-3 border-t border-slate-800 space-y-3">
                  <div className="p-2.5 rounded-xl bg-sky-950/40 border border-sky-900/60">
                    <div className="text-[10px] uppercase font-bold text-sky-400">
                      Promosi Bulan 1 – {item.promoMonths}
                    </div>
                    <div className="text-xl font-black text-sky-300">
                      RM{item.promoMonthly}<span className="text-xs font-normal text-slate-300">/bulan</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">
                      Selepas promo: <strong className="text-white">RM{parseInt(item.regularMonthly)}/bulan</strong>
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
        <div className="pro-card p-5 sm:p-7 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-sky-900/50 rounded-2xl mb-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <img 
              src={siteConfig.agentAvatar} 
              alt={siteConfig.agentName} 
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border-2 border-sky-500/60 shadow-md shrink-0" 
            />
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 uppercase tracking-wide">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Bantuan Pemilihan Pantas</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Tak Pasti Model Mana Sesuai?</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                &ldquo;Beritahu saya saiz keluarga, ruang kediaman dan bajet anda. Saya bantu buat perbandingan tepat tanpa sebarang caj perundingan.&rdquo;
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

        {/* ============================================================== */}
        {/* CATEGORY JUMP SELECTOR STRIP */}
        {/* ============================================================== */}
        <div className="pt-2 border-t border-slate-850">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Terokai Mengikut Kategori:</span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {CATEGORY_CHIPS.map((chip, idx) => (
                <a
                  key={idx}
                  href={chip.id}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-medium transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span className="text-xs">{chip.icon}</span>
                  <span>{chip.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
