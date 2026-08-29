'use client';

import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  Package, 
  Wrench, 
  Truck, 
  Gift, 
  ZoomIn, 
  X,
  Droplets,
  CalendarCheck,
  Trophy,
  FileCheck
} from 'lucide-react';

const EIGHT_REASONS = [
  {
    num: '01',
    title: 'Halal JAKIM',
    desc: 'Semua produk Coway diiktiraf HALAL oleh JAKIM. Bersih, suci dan selamat digunakan oleh seluruh keluarga.',
    icon: Award,
    color: 'emerald'
  },
  {
    num: '02',
    title: 'Diiktiraf WQA',
    desc: 'Diiktiraf oleh Water Quality Association (USA) dengan Gold Seal Certification untuk piawaian kualiti air terbaik.',
    icon: Droplets,
    color: 'sky'
  },
  {
    num: '03',
    title: 'Jenama Dipercayai (Trusted Brand)',
    desc: 'Memenangi Anugerah Platinum Reader\'s Digest Trusted Brand berturut-turut berdasarkan pilihan pengguna.',
    icon: Trophy,
    color: 'amber'
  },
  {
    num: '04',
    title: 'Pensijilan SIRIM',
    desc: 'Mendapat pensijilan keselamatan dan kualiti daripada SIRIM Malaysia bagi memastikan penggunaan yang selamat.',
    icon: FileCheck,
    color: 'indigo'
  },
  {
    num: '05',
    title: 'Kontrak Fleksibel & Jadi Hak Milik',
    desc: 'Pilihan tempoh sewa beli berpatutan. Selepas kontrak tamat, produk terus menjadi hak milik sepenuhnya tanpa sewa selamanya.',
    icon: CalendarCheck,
    color: 'sky'
  },
  {
    num: '06',
    title: 'Tangki Simpanan Besar',
    desc: 'Kapasiti tangki besar menjamin bekalan air sentiasa mencukupi dan menjangkaui penapis biasa di luar sana.',
    icon: ShieldCheck,
    color: 'amber'
  },
  {
    num: '07',
    title: 'Servis Berkala Cody Berjadual',
    desc: 'Servis setiap 2 hingga 4 bulan sekali oleh Coway Professional (Cody) bagi memastikan produk sentiasa bersih dan optimum.',
    icon: HeartHandshake,
    color: 'emerald'
  },
  {
    num: '08',
    title: 'Anugerah Kualiti Antarabangsa',
    desc: 'Memenangi pelbagai anugerah termasuk Korea Brand Power, Good Design Award dan Most Loved Product untuk kualiti dan reka bentuk cemerlang.',
    icon: Award,
    color: 'indigo'
  }
];

export const TrustBento: React.FC = () => {
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  return (
    <section id="kenapa" className="py-16 sm:py-24 bg-slate-950 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-2 block">
            Jaminan Kualiti & Kepercayaan
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            8 Sebab Kenapa Anda Perlu Pilih <span className="text-sky-400">Coway</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Ketahui kelebihan sistem penapisan air, penulen udara dan servis berjadual rasmi Coway Malaysia yang dipercayai jutaan keluarga.
          </p>
        </div>

        {/* Infographic Banner & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Infographic Poster Card (Clickable to zoom) */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              onClick={() => setIsPosterOpen(true)}
              className="pro-card p-3 sm:p-4 bg-slate-900 border border-slate-800 rounded-2xl cursor-pointer group relative overflow-hidden max-w-md w-full shadow-2xl hover:border-sky-500/60 transition-all"
              title="Klik untuk lihat poster infografik resolusi tinggi"
            >
              <div className="relative rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                <img 
                  src="/images/8-sebab-pilih-coway.png" 
                  alt="8 Sebab Kenapa Anda Perlu Pilih Coway" 
                  className="w-full object-contain group-hover:scale-105 transition-transform duration-300 rounded-xl"
                />
                
                {/* Zoom Overlay Banner */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity text-center p-4">
                  <div className="p-3 rounded-full bg-sky-600 text-white mb-2 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700">
                    Klik Untuk Paparan Penuh (Zoom)
                  </span>
                </div>
              </div>

              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Infografik Rasmi Coway
                </span>
                <span className="text-sky-400 font-bold hover:underline flex items-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5" /> Besarkan
                </span>
              </div>
            </div>
          </div>

          {/* 8-Points Modern Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {EIGHT_REASONS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="pro-card p-4 sm:p-5 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-start gap-3.5 hover:border-slate-700 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-950/70 border border-sky-800 text-sky-400 font-black text-xs flex items-center justify-center shrink-0">
                    {item.num}
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className="text-sm font-bold text-white leading-snug">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* 4 Official Bottom Value Badges (Matching Infographic Bottom Bar) */}
        <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          <div className="pro-card p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-850 flex items-center justify-center text-sky-400 border border-slate-800 shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-white">100% Asli & Tulen</div>
              <div className="text-[11px] text-slate-400">Jaminan rasmi Coway</div>
            </div>
          </div>

          <div className="pro-card p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-850 flex items-center justify-center text-emerald-400 border border-slate-800 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-white">Servis Terbaik Cody</div>
              <div className="text-[11px] text-slate-400">Juruteknik terlatih</div>
            </div>
          </div>

          <div className="pro-card p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-850 flex items-center justify-center text-amber-400 border border-slate-800 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-white">Pasang Percuma</div>
              <div className="text-[11px] text-slate-400">Seluruh Malaysia</div>
            </div>
          </div>

          <div className="pro-card p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-850 flex items-center justify-center text-pink-400 border border-slate-800 shrink-0">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-white">Promosi Menarik</div>
              <div className="text-[11px] text-slate-400">Pakej & rebat bulanan</div>
            </div>
          </div>

        </div>

      </div>

      {/* High-Resolution Infographic Lightbox Modal */}
      {isPosterOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsPosterOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-slate-900 rounded-2xl p-2 border border-slate-800 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsPosterOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 transition-colors shadow-lg"
              title="Tutup (ESC)"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[85vh] overflow-y-auto flex items-center justify-center rounded-xl bg-slate-950 p-2">
              <img 
                src="/images/8-sebab-pilih-coway.png" 
                alt="8 Sebab Kenapa Anda Perlu Pilih Coway Penuh" 
                className="max-h-[80vh] w-auto object-contain drop-shadow-2xl rounded-lg"
              />
            </div>

            <div className="p-3 text-center text-xs text-slate-400 flex items-center justify-between px-4">
              <span className="font-bold text-white">8 Sebab Kenapa Anda Perlu Pilih Coway</span>
              <button 
                onClick={() => setIsPosterOpen(false)}
                className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-bold"
              >
                Tutup Paparan
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
