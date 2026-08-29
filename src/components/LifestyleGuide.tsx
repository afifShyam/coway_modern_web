'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { 
  Users, 
  Home, 
  Sparkles, 
  Wind, 
  MessageCircle, 
  ChevronRight, 
  Check,
  Coffee
} from 'lucide-react';

const LIFESTYLE_ENTRY_POINTS = [
  {
    icon: Users,
    badge: 'Paling Popular',
    badgeColor: 'bg-sky-950 text-sky-400 border-sky-800',
    title: 'Keluarga 4 – 6 Orang',
    subtitle: 'Keperluan air panas, sejuk & suhu bilik berterusan',
    modelName: 'Villaem III (CHP-7320L)',
    modelImage: 'https://emall.coway.com.my/ProductImages/859ec6e7-6111-41bb-aad4-75a7145a8a50/1/240x240/villaem-3-white.png',
    monthlyPrice: 'RM74',
    dailyPrice: 'RM2.50',
    promoBadge: 'Bulan 1–7: RM20/bln',
    highlights: [
      'Tangki 11.3L besar untuk seisi keluarga',
      'Air panas segera untuk bancuh susu & kopi',
      'Kawalan suhu pintar 4 mod pilihan'
    ],
    whatsappMsg: `Hai ${siteConfig.agentName}, saya mencari penapis air untuk keluarga (Villaem III). Boleh bantu saya semak kelayakan promosi terkini?`
  },
  {
    icon: Home,
    badge: 'Mesra Bajet & Ruang',
    badgeColor: 'bg-emerald-950 text-emerald-400 border-emerald-800',
    title: 'Rumah Sewa / Dapur Kompak',
    subtitle: 'Penapis air 3 suhu dengan saiz slim & bayaran jimat',
    modelName: 'Neo Plus (CHP-264L)',
    modelImage: 'https://emall.coway.com.my/ProductImages/2491a6fc-6297-4eb9-a78b-d5a2d67aa1d2/1/240x240/neo-plus-white.png',
    monthlyPrice: 'RM65',
    dailyPrice: 'RM2.15',
    promoBadge: 'Bulan 1–7: RM20/bln',
    highlights: [
      'Rekaan ramping jimat ruang table top',
      '3 suhu asas (Panas, Sejuk, Suhu Bilik)',
      'Kadar bulanan paling ekonomik & jimat'
    ],
    whatsappMsg: `Hai ${siteConfig.agentName}, saya berminat dengan pakej mesra bajet Coway Neo Plus. Boleh saya tahu cara permohonan?`
  },
  {
    icon: Coffee,
    badge: 'Ais Kiub Segera',
    badgeColor: 'bg-blue-950 text-blue-400 border-blue-800',
    title: 'Peminat Kopi & Minuman Sejuk',
    subtitle: 'Penapis air lengkap pembuat ais kiub kristal',
    modelName: 'Coway AIS (CHP-5310L)',
    modelImage: 'https://emall.coway.com.my/ProductImages/cd349c96-7052-4f9a-a75d-7eb696eedaa3/1/240x240/ais-white.png',
    monthlyPrice: 'RM120',
    dailyPrice: 'RM4.00',
    promoBadge: 'Bulan 1–7: RM20/bln',
    highlights: [
      'Pembuat ais batu segera & bersih',
      'Sistem pensterilan UV berganda',
      'Tak perlu beli ais bungkus di luar lagi'
    ],
    whatsappMsg: `Hai ${siteConfig.agentName}, saya berminat dengan Coway AIS (Mesin Ais + Air). Boleh terangkan promosi terkini?`
  },
  {
    icon: Wind,
    badge: 'Penjagaan Udara & Resdung',
    badgeColor: 'bg-purple-950 text-purple-400 border-purple-800',
    title: 'Anak Alahan, Resdung & Kucing',
    subtitle: 'Penulen udara HEPA H13 sedut habuk & bulu haiwan',
    modelName: 'Storm II (AP-1516D)',
    modelImage: 'https://emall.coway.com.my/ProductImages/f18d8c4d-f7d0-4eb5-a5da-389fbc5a66ad/1/240x240/storm-2.jpg',
    monthlyPrice: 'RM60',
    dailyPrice: 'RM2.00',
    promoBadge: 'Bulan 1–7: RM20/bln',
    highlights: [
      'Kipas dwi-aliran edarkan udara pantas',
      'Sangat efektif sedut bulu kucing & hama',
      'Tidur malam lebih lena tanpa bersin'
    ],
    whatsappMsg: `Hai ${siteConfig.agentName}, saya ingin tahu mengenai penulen udara Coway Storm II untuk masalah resdung/habuk keluarga saya.`
  }
];

export const LifestyleGuide: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-slate-900/90 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-400 border border-sky-800 text-xs font-bold uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Panduan Pemilihan Mudah</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilih Mengikut Situasi Kediaman Anda
          </h2>
          <p className="mt-2 text-slate-300 text-xs sm:text-base leading-relaxed">
            Tak perlu pening membandingkan puluhan model. Kenal pasti keperluan keluarga anda di bawah:
          </p>
        </div>

        {/* 4 Lifestyle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {LIFESTYLE_ENTRY_POINTS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="pro-card p-5 bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-2xl flex flex-col justify-between shadow-lg group transition-all"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-750 flex items-center justify-center text-slate-300">
                      <IconComp className="w-4 h-4 text-sky-400" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-white group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 mb-3 leading-snug">
                    {item.subtitle}
                  </p>

                  {/* Model Visual Stage */}
                  <div className="h-32 bg-slate-950/80 rounded-xl p-2.5 flex items-center justify-center border border-slate-800 my-2 group-hover:scale-105 transition-transform">
                    <img 
                      src={item.modelImage} 
                      alt={item.modelName}
                      className="max-h-28 max-w-full object-contain drop-shadow" 
                    />
                  </div>

                  <div className="mt-2.5">
                    <div className="text-[11px] font-bold text-slate-400">Model Dicadangkan:</div>
                    <div className="text-sm font-extrabold text-white">{item.modelName}</div>
                  </div>

                  {/* Highlights List */}
                  <ul className="my-3 space-y-1.5 text-xs text-slate-300 border-t border-slate-800 pt-2.5">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Honest Pricing & WhatsApp CTA */}
                <div className="mt-3 pt-3 border-t border-slate-800 space-y-2.5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-lg font-black text-white">{item.monthlyPrice}</span>
                      <span className="text-xs text-slate-400">/bulan</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      ≈ <strong className="text-sky-300">{item.dailyPrice}</strong> sehari
                    </span>
                  </div>

                  <div className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/80 inline-block font-semibold">
                    {item.promoBadge}
                  </div>

                  <a 
                    href={getWhatsAppUrl(item.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>WhatsApp Johan Model Ini</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Option */}
        <div className="mt-8 text-center">
          <a 
            href="#produk" 
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300 hover:underline"
          >
            <span>Ingin lihat senarai penuh 27 model Coway? Klik untuk Terokai Katalog Lengkap</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
