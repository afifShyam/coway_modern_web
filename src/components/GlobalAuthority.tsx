import React from 'react';
import { Award, Microscope, Globe2, ShieldCheck, Sparkles } from 'lucide-react';

export const GlobalAuthority: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#070D1E] via-[#0B132B] to-[#070D1E] text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Brand Logo & Flag */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 inline-flex items-center gap-2">
              <img 
                src="/images/brand/flag-korea.png" 
                alt="Korea R&D Technology" 
                className="w-5 h-4 object-contain rounded-xs" 
              />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-200">
                Penyelidikan & Teknologi Korea
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Peneraju Teknologi Kesihatan Kediaman Sedunia
          </h2>
          <p className="text-xs sm:text-base text-slate-300 mt-2">
            Coway bukan sekadar jenama penapis air — ia adalah institusi penyelidikan kualiti air dan udara bertaraf dunia.
          </p>
        </div>

        {/* 4 Authority Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* Card 1: 6 Juta Pelanggan */}
          <div className="pro-card p-6 rounded-3xl bg-[#111726] border border-slate-800 shadow-xl space-y-3 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-950/80 border border-sky-800/80 flex items-center justify-center text-sky-400 mb-2">
              <Globe2 className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-white">6 Juta+</div>
            <div className="text-sm font-bold text-sky-400">Pelanggan Global</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dipercayai oleh lebih 6 juta keluarga dan premis di seluruh dunia merentasi pelbagai benua.
            </p>
          </div>

          {/* Card 2: 370 Penyelidik */}
          <div className="pro-card p-6 rounded-3xl bg-[#111726] border border-slate-800 shadow-xl space-y-3 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400 mb-2">
              <Microscope className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-white">370+</div>
            <div className="text-sm font-bold text-emerald-400">Pakar Penyelidik R&D</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Saintis dan pakar berdedikasi membangunkan teknologi penapisan dan penulenan air tercanggih.
            </p>
          </div>

          {/* Card 3: Pusat R&D Terbesar */}
          <div className="pro-card p-6 rounded-3xl bg-[#111726] border border-slate-800 shadow-xl space-y-3 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-800/80 flex items-center justify-center text-amber-400 mb-2">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-white">Terbesar</div>
            <div className="text-sm font-bold text-amber-400">Pusat R&D Di Dunia</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Diiktiraf oleh Water Quality Association (WQA) dengan 182 peralatan ujian makmal berteknologi tinggi.
            </p>
          </div>

          {/* Card 4: 1 Juta Ujian Kualiti */}
          <div className="pro-card p-6 rounded-3xl bg-[#111726] border border-slate-800 shadow-xl space-y-3 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-800/80 flex items-center justify-center text-purple-400 mb-2">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-3xl font-black text-white">1 Juta+</div>
            <div className="text-sm font-bold text-purple-400">Ujian Ketahanan & Kualiti</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Setiap komponen dan model diuji lebih 1 juta kali sebelum dipasang di rumah pelanggan.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
