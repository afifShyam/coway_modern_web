'use client';

import React, { useState } from 'react';
import { 
  BadgeCheck, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Award, 
  Sparkles, 
  HeartHandshake, 
  Flame,
  Maximize2,
  X,
  CheckCircle2
} from 'lucide-react';

const REASONS = [
  {
    icon: BadgeCheck,
    iconColor: 'text-emerald-400',
    title: 'Sijil Halal JAKIM',
    desc: 'Diiktiraf 100% Halal rasmi oleh JAKIM untuk semua penapis air dan komponen Coway di Malaysia.'
  },
  {
    icon: Clock,
    iconColor: 'text-sky-400',
    title: 'Servis Cody Berkala',
    desc: 'Sanitasi wap panas dan penukaran penapis berjadual setiap 2–4 bulan secara percuma.'
  },
  {
    icon: Award,
    iconColor: 'text-amber-400',
    title: 'Piawaian WQA & SIRIM',
    desc: 'Pengiktirafan tertinggi WQA Gold Seal dan SIRIM untuk air paling bersih bertaraf dunia.'
  },
  {
    icon: Wrench,
    iconColor: 'text-indigo-400',
    title: 'Pasang & Waranti Percuma',
    desc: 'Pendaftaran RM0, penghantaran percuma serta jaminan penuh alat ganti sepanjang kontrak.'
  },
  {
    icon: ShieldCheck,
    iconColor: 'text-cyan-400',
    title: 'Pusat R&D Terbesar',
    desc: 'Pusat penyelidikan kualiti air terbesar di dunia dengan lebih 370 pakar saintis.'
  },
  {
    icon: Sparkles,
    iconColor: 'text-rose-400',
    title: 'Pensterilan Dwi-UV',
    desc: 'Teknologi sinar UV automatik memastikan nozel dan tangki bebas kuman setiap masa.'
  },
  {
    icon: Flame,
    iconColor: 'text-orange-400',
    title: 'Promo Dari RM20/Bulan',
    desc: 'Pelan ansuran sewa beli mesra bajet dengan kadar pengenalan serendah RM20.'
  },
  {
    icon: HeartHandshake,
    iconColor: 'text-pink-400',
    title: 'Khidmat Johan (HP 748757)',
    desc: 'Konsultasi telus dan urusan pendaftaran pantas terus bersama Health Planner sah anda.'
  }
];

export const TrustBento: React.FC = () => {
  const [isInfographicZoomed, setIsInfographicZoomed] = useState<boolean>(false);

  return (
    <section id="kenapa" className="py-8 sm:py-16 bg-[#0D1322] border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Kualiti & Kepercayaan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            8 Sebab Memilih Coway Malaysia
          </h2>
          <p className="mt-1 text-slate-300 text-xs sm:text-sm leading-relaxed">
            Jenama penapis air & udara No.1 paling dipercayai dengan servis berjadual terbaik.
          </p>
        </div>

        {/* Highlight Banner: 8 Sebab Infographic + Overview Feature */}
        <div className="mb-6 pro-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: Official 8 Sebab Image Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                onClick={() => setIsInfographicZoomed(true)}
                className="relative rounded-xl overflow-hidden bg-slate-950 p-1.5 border border-slate-800 shadow-lg cursor-pointer group max-w-xs w-full"
              >
                <img 
                  src="/images/8-sebab-pilih-coway.webp" 
                  alt="8 Sebab Utama Memilih Coway Malaysia" 
                  className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                  <div className="px-3 py-1.5 rounded-lg bg-sky-600 text-white text-[11px] font-bold flex items-center gap-1 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Tekan Untuk Zoom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Explanatory Context & Key Guarantees */}
            <div className="lg:col-span-7 space-y-2.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-950 text-sky-300 text-[10px] font-bold border border-sky-800">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Piawaian Mutlak Kesihatan Rumah</span>
              </div>

              <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                Jaminan Kualiti Air & Udara Tanpa Kompromi
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Diuji lebih 1 juta kali di Pusat R&D terbesar di dunia sebelum dipasang di rumah anda. Dilengkapi pensijilan Halal JAKIM rasmi, standard WQA antarabangsa, serta khidmat Cody sanitasi berjadual.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Halal JAKIM</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pusat R&D Terbesar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Servis Cody Berkala</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Waranti Penuh Percuma</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 8-Card Bento Grid (2 cols on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {REASONS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="pro-card p-3 sm:p-5 rounded-2xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-1.5 shadow-md"
              >
                <div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0A0F1D] border border-slate-800 flex items-center justify-center mb-2">
                    <IconComponent className={`w-4 h-4 ${item.iconColor}`} />
                  </div>

                  <h3 className="text-xs sm:text-sm font-black text-white leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-[10px] sm:text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-1.5 border-t border-slate-800/80 text-[8px] sm:text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                  Sebab {idx + 1}/8
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 8 Sebab Fullscreen Zoom Modal */}
      {isInfographicZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsInfographicZoomed(false)}
        >
          <div className="relative max-w-lg w-full flex flex-col items-center">
            <button
              type="button"
              onClick={() => setIsInfographicZoomed(false)}
              className="absolute -top-10 right-0 p-1.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src="/images/8-sebab-pilih-coway.webp" 
              alt="8 Sebab Utama Memilih Coway Malaysia - Paparan Penuh" 
              className="max-h-[80vh] w-auto object-contain rounded-2xl border border-slate-800 shadow-2xl"
            />
          </div>
        </div>
      )}

    </section>
  );
};
