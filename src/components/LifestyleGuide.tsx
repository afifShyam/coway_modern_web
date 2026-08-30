import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const SITUATIONS = [
  {
    title: 'Keluarga 4–6 Orang',
    tag: 'Seisi Keluarga',
    desc: 'Perlukan air panas untuk susu bayi, air sejuk untuk anak-anak, dan tangki berkapasiti besar.',
    recommendation: 'Villaem III (CHP-7320L)',
    price: 'RM74/bulan',
    image: '/images/products/villaem3.webp',
    link: '#produk'
  },
  {
    title: 'Pasangan / Rumah Sewa',
    tag: 'Bajet Mampu Milik',
    desc: 'Pelan paling jimat dengan fungsi asas air sejuk, panas dan suhu bilik yang sangat praktikal.',
    recommendation: 'Neo Plus (CHP-264L)',
    price: 'RM59/bulan',
    image: '/images/products/neoplus.webp',
    link: '#produk'
  },
  {
    title: 'Peminat Minuman Sejuk & Kopi',
    tag: 'Ais Segera',
    desc: 'Sistem ais batu kristal automatik tanpa perlu dulang ais manual atau ruang beku peti sejuk.',
    recommendation: 'Coway AIS (CHPI-7520L)',
    price: 'RM120/bulan',
    image: '/images/products/ais.webp',
    link: '#produk'
  },
  {
    title: 'Alahan, Resdung & Anak Kecil',
    tag: 'Udara Bersih',
    desc: 'Penapisan HEPA H13 menyingkirkan hama habuk, bulu haiwan, bakteria dan bau hapak.',
    recommendation: 'Storm II (AP-1523D)',
    price: 'RM60/bulan',
    image: '/images/products/lombok3.webp',
    link: '#produk'
  }
];

export const LifestyleGuide: React.FC = () => {
  return (
    <section className="py-8 sm:py-14 bg-[#0D1322] border-b border-slate-850">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 border border-sky-800">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Panduan Situasi Kediaman</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Cari Model Mengikut Gaya Hidup Anda
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Pilih situasi yang paling dekat dengan kediaman anda:
          </p>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {SITUATIONS.map((item, idx) => (
            <div
              key={idx}
              className="pro-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 hover:border-slate-700 flex flex-col justify-between space-y-3 shadow-lg"
            >
              <div>
                <span className="px-2 py-0.2 rounded-md bg-sky-950 text-sky-300 border border-sky-800 text-[9px] sm:text-[10px] font-bold">
                  {item.tag}
                </span>

                <h3 className="text-sm sm:text-base font-black text-white mt-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Recommendation Callout */}
              <div className="pt-2.5 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0A0F1D] border border-slate-800">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center p-1 bg-[#111726] rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.recommendation} 
                      className="max-h-8 max-w-8 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-extrabold text-white truncate">{item.recommendation}</div>
                    <div className="text-[10px] text-amber-300 font-black">{item.price}</div>
                  </div>
                </div>

                <a
                  href={item.link}
                  className="w-full py-2 px-3 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 text-[11px] font-bold flex items-center justify-center gap-1 transition-all"
                >
                  <span>Lihat Model Ini</span>
                  <ArrowRight className="w-3 h-3 text-sky-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
