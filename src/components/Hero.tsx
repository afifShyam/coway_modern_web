'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Grid, Sparkles, Wrench, ShieldCheck, BadgeCheck, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-850 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-850 border border-slate-700/60 text-sky-400 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>Jenama Kesejahteraan No.1 di Malaysia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Air & Udara Bersih, <br className="hidden sm:inline" />
              <span className="text-sky-400">Kesejahteraan Keluarga Anda.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Katalog lengkap dan harga telus penapis air, penulen udara, tilam & aircond Coway. Nikmati <strong>promosi bulanan RM20</strong>, servis berkala percuma, dan jaminan waranti 100%.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#produk" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <Grid className="w-4 h-4" />
                Lihat Katalog & Harga
              </a>
              
              <button 
                onClick={onOpenQuiz}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-bold bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                Cadangkan Model Sesuai (Quiz)
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-850 flex items-center justify-center text-sky-400 shrink-0 border border-slate-800">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Servis Cody</div>
                  <div className="text-[11px] text-slate-400">Percuma berkala</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-850 flex items-center justify-center text-sky-400 shrink-0 border border-slate-800">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Waranti Penuh</div>
                  <div className="text-[11px] text-slate-400">Alat ganti percuma</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-850 flex items-center justify-center text-emerald-400 shrink-0 border border-slate-800">
                  <BadgeCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Halal JAKIM</div>
                  <div className="text-[11px] text-slate-400">Diyakini Muslim</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-5">
            <div className="pro-card p-6 sm:p-8 bg-slate-900 border border-slate-800 relative">
              
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-950/70 text-amber-300 border border-amber-800/60 uppercase tracking-wide">
                  ⭐ Model Paling Popular
                </span>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Promosi RM20
                </span>
              </div>

              {/* Product Showcase Image */}
              <div className="h-64 flex items-center justify-center my-4 bg-slate-850/60 rounded-2xl p-4 border border-slate-800">
                <img 
                  src="https://coway.cc/wp-content/uploads/2026/01/coway-villaem3-CHP-7320L.png" 
                  alt="Coway Villaem 3" 
                  className="max-h-56 object-contain drop-shadow-md"
                />
              </div>

              {/* Price Breakdown Showcase */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">Coway Villaem III</h3>
                    <span className="text-xs text-slate-400 font-mono">CHP-7320L • 4 Suhu Air (11.3L)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">Promo 7 Bulan Awal</span>
                    <span className="text-2xl font-black text-sky-400">RM20<span className="text-xs font-medium text-slate-400">/bln</span></span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-850 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Sewa Seterusnya</div>
                    <div className="font-bold text-white text-sm">RM74.00<span className="text-[10px] font-normal text-slate-400">/bln</span></div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-850 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Belian Tunai</div>
                    <div className="font-bold text-sky-300 text-sm">RM4,200</div>
                  </div>
                </div>

                <a 
                  href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya nak tanya promosi Coway Villaem 3 RM20`)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp {siteConfig.agentName.split(' ')[0]} Untuk Tempahan
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
