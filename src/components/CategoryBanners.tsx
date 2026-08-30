'use client';

import React from 'react';
import { ProductCategory } from '@/types/product';
import { CATEGORY_COUNTS } from '@/data/products';
import { Sparkles, ArrowRight, Armchair, Bed } from 'lucide-react';

interface CategoryBannersProps {
  onSelectCategory?: (category: ProductCategory) => void;
}

export const CategoryBanners: React.FC<CategoryBannersProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-8 sm:py-14 bg-[#090D16] border-b border-slate-850">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 border border-sky-800">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Koleksi Utama Coway</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Penyelesaian Kesihatan Lengkap Untuk Rumah Anda
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Pilih kategori mengikut keperluan kediaman anda hari ini:
          </p>
        </div>

        {/* 3 Featured Trio Showcase Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* 1. Penapis Air (Water Purifiers) */}
          <div className="pro-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 hover:border-sky-500/50 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-400">
                  Kategori Utama
                </span>
                <span className="px-2 py-0.2 rounded-full text-[9px] sm:text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-800">
                  {CATEGORY_COUNTS.water} Model
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-sky-400 transition-colors">
                Penapis Air Sejuk, Panas & Ais
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Nikmati air minuman bersih tanpa had dengan suhu segera. Bebas karat, klorin dan bakteria dengan penapis RO & Mineral diiktiraf Halal JAKIM.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <div className="h-32 sm:h-36 flex items-center justify-center bg-[#0A0F1D] rounded-xl sm:rounded-2xl p-2 border border-slate-800/80 mb-3 overflow-hidden">
                <img 
                  src="/images/products/villaem3.webp" 
                  alt="Coway Villaem III" 
                  className="h-full max-h-28 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <a
                href="#produk"
                onClick={() => onSelectCategory && onSelectCategory('water')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-200 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Lihat {CATEGORY_COUNTS.water} Model Penapis Air</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              </a>
            </div>
          </div>

          {/* 2. Penapis Udara (Air Purifiers) */}
          <div className="pro-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 hover:border-emerald-500/50 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  Udara Bersih & Segar
                </span>
                <span className="px-2 py-0.2 rounded-full text-[9px] sm:text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
                  {CATEGORY_COUNTS.air} Model
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                Penapis Udara HEPA & Antivirus
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Menyingkirkan 99.999% habuk halus PM0.01, bulu haiwan, bau hapak, bakteria dan virus. Sesuai untuk keluarga yang ada anak kecil, resdung atau alahan.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <div className="h-32 sm:h-36 flex items-center justify-center bg-[#0A0F1D] rounded-xl sm:rounded-2xl p-2 border border-slate-800/80 mb-3 overflow-hidden">
                <img 
                  src="/images/products/lombok3.webp" 
                  alt="Coway Lombok III" 
                  className="h-full max-h-28 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <a
                href="#produk"
                onClick={() => onSelectCategory && onSelectCategory('air')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-200 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Lihat {CATEGORY_COUNTS.air} Model Penapis Udara</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* 3. Kerusi Urut & Tilam Hotel (BEREX) — two categories, so two
              explicit destinations: a single CTA silently landed on the two
              mattresses and made the pictured massage chair look missing. */}
          <div className="pro-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 hover:border-amber-500/50 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  Relaksasi & Tidur Lena
                </span>
                <span className="px-2 py-0.2 rounded-full text-[9px] sm:text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">
                  BEREX Series
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                Kerusi Urut & Tilam Hotel
              </h3>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Kerusi urut pintar kompak dengan graviti sifar serta tilam gred hotel premium dengan servis pembersihan sanitasi berkala oleh Cody.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <div className="h-32 sm:h-36 flex items-center justify-center bg-[#0A0F1D] rounded-xl sm:rounded-2xl p-2 border border-slate-800/80 mb-3 overflow-hidden">
                <img 
                  src="/images/products/senno.webp" 
                  alt="Kerusi Urut Senno" 
                  className="h-full max-h-28 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#produk"
                  onClick={() => onSelectCategory && onSelectCategory('relax')}
                  className="py-2.5 px-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-200 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Armchair className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{CATEGORY_COUNTS.relax} Kerusi Urut</span>
                </a>

                <a
                  href="#produk"
                  onClick={() => onSelectCategory && onSelectCategory('berex')}
                  className="py-2.5 px-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-200 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Bed className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{CATEGORY_COUNTS.berex} Tilam Hotel</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
