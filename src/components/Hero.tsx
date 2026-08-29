'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Grid, Sparkles, Wrench, ShieldCheck, BadgeCheck, MessageCircle, Droplets, Wind, Snowflake, Bed, Refrigerator, Armchair } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section className="relative pt-10 pb-16 lg:pt-20 lg:pb-28 border-b border-slate-850 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-850 border border-slate-700/60 text-sky-400 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>Coway • Ubah Hidup Anda</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.15]">
              Air & Udara Bersih, <br className="hidden sm:inline" />
              <span className="text-sky-400">Untuk Kediaman Sejahtera.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dapatkan maklumat rasmi produk Coway Malaysia merangkumi penapis air, penulen udara, kerusi urut BEREX, tilam hotel dan penyaman udara bersama <strong>{siteConfig.agentName} (Perancang Kesihatan Sah)</strong>.
            </p>

            {/* CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a 
                href="#produk" 
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <Grid className="w-4 h-4" />
                Lihat Katalog & Senarai Harga
              </a>
              
              <button 
                onClick={onOpenQuiz}
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                Bantuan Pemilihan Model (Kuiz)
              </button>
            </div>

            {/* Mobile Quick Category Shortcuts */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 block mb-2 uppercase tracking-wider">Kategori Produk Rasmi:</span>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 flex-wrap">
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-sky-400" /> Air (10)
                </a>
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Wind className="w-3 h-3 text-sky-400" /> Udara (5)
                </a>
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Armchair className="w-3 h-3 text-sky-400" /> Kerusi Urut (4)
                </a>
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Bed className="w-3 h-3 text-sky-400" /> Tilam (2)
                </a>
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Snowflake className="w-3 h-3 text-sky-400" /> Penyaman Udara (2)
                </a>
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Refrigerator className="w-3 h-3 text-sky-400" /> Peti Sejuk (2)
                </a>
              </div>
            </div>

            {/* Trust Badges Aligned with Official Coway Standard */}
            <div className="pt-5 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-850 flex items-center justify-center text-sky-400 shrink-0 border border-slate-800">
                  <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">Coway Heart Service</div>
                  <div className="text-[10px] text-slate-400">Servis berkala Cody</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-850 flex items-center justify-center text-sky-400 shrink-0 border border-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">Jaminan Penuh</div>
                  <div className="text-[10px] text-slate-400">Sepanjang sewaan</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-850 flex items-center justify-center text-emerald-400 shrink-0 border border-slate-800">
                  <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">Halal JAKIM</div>
                  <div className="text-[10px] text-slate-400">Diiktiraf rasmi</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-5">
            <div className="pro-card p-5 sm:p-7 bg-slate-900 border border-slate-800 relative">
              
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-950 text-sky-400 border border-sky-800 uppercase tracking-wide">
                  Model Pilihan Ramai
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Pelan Sewa Beli Rasmi
                </span>
              </div>

              {/* Product Showcase Image */}
              <div className="h-48 sm:h-60 flex items-center justify-center my-3 bg-slate-850/60 rounded-2xl p-3 border border-slate-800">
                <img 
                  src="https://emall.coway.com.my/ProductImages/859ec6e7-6111-41bb-aad4-75a7145a8a50/1/240x240/villaem-3-white.png" 
                  alt="Coway Villaem 3" 
                  className="max-h-44 sm:max-h-52 object-contain drop-shadow-md"
                />
              </div>

              {/* Price Breakdown Showcase */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">Coway Villaem III</h3>
                    <span className="text-xs text-slate-400 font-mono">CHP-7320L • 4 Suhu Air (11.3L)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-400 block uppercase font-bold">Kadar Promo (7 Bulan Awal)</span>
                    <span className="text-xl sm:text-2xl font-black text-sky-400">RM20<span className="text-xs font-medium text-slate-400">/bln</span></span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2 rounded-xl bg-slate-850 border border-slate-800">
                    <div className="text-[9px] text-slate-400">Sewa Seterusnya</div>
                    <div className="font-bold text-white text-xs sm:text-sm">RM74.00<span className="text-[9px] font-normal text-slate-400">/bln</span></div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-850 border border-slate-800">
                    <div className="text-[9px] text-slate-400">Belian Terus (Outright)</div>
                    <div className="font-bold text-sky-300 text-xs sm:text-sm">RM4,200</div>
                  </div>
                </div>

                <a 
                  href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin mengetahui maklumat lanjut mengenai pelan sewa beli Coway Villaem III.`)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Hubungi {siteConfig.agentName.split(' ')[0]} via WhatsApp
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
