'use client';

import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  Wrench, 
  Truck, 
  Gift, 
  ZoomIn, 
  X,
  Droplets,
  CalendarCheck,
  Trophy,
  FileCheck,
  Layers
} from 'lucide-react';

const EIGHT_REASONS = [
  {
    num: '01',
    title: 'Pensijilan Halal JAKIM',
    desc: 'Penapis air Coway menerima pensijilan Halal rasmi oleh JAKIM bagi menjamin kebersihan, kesucian dan keselamatan air minuman keluarga anda.',
    icon: Award,
  },
  {
    num: '02',
    title: 'Piawaian Kualiti WQA',
    desc: 'Memenuhi standard pensijilan kualiti penapisan air antarabangsa Water Quality Association (WQA) untuk prestasi penapisan terbaik.',
    icon: Droplets,
  },
  {
    num: '03',
    title: 'Jenama Dipercayai Pengguna',
    desc: 'Pemenang Anugerah Reader\'s Digest Trusted Brand Platinum di Malaysia secara berturut-turut berdasarkan undian pengguna.',
    icon: Trophy,
  },
  {
    num: '04',
    title: 'Pematuhan Piawaian SIRIM',
    desc: 'Lulus piawaian ujian keselamatan komponen dan elektrik oleh SIRIM QAS International untuk ketenangan fikiran pengguna.',
    icon: FileCheck,
  },
  {
    num: '05',
    title: 'Pelan Fleksibel Jadi Hak Milik',
    desc: 'Pilihan tempoh sewa beli berpatutan mengikut bajet anda. Produk terus menjadi hak milik sepenuhnya selepas tempoh kontrak tamat.',
    icon: CalendarCheck,
  },
  {
    num: '06',
    title: 'Pelbagai Pilihan Model',
    desc: 'Pilihan model kompak, bertangki, tanpa tangki (tankless) mahupun kapasiti besar untuk kediaman serta pejabat.',
    icon: Layers,
  },
  {
    num: '07',
    title: 'Servis Berjadual Cody',
    desc: 'Servis sanitasi dan penukaran penapis berkala oleh juruteknik terlatih (Cody) bagi menjamin air sentiasa segar dan bersih.',
    icon: HeartHandshake,
  },
  {
    num: '08',
    title: 'Reka Bentuk & Inovasi',
    desc: 'Pemenang anugerah reka bentuk antarabangsa seperti iF Design, Red Dot & Good Design Award untuk reka bentuk moden dan mesra pengguna.',
    icon: Award,
  }
];

export const TrustBento: React.FC = () => {
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  return (
    <section id="kenapa" className="py-16 sm:py-20 bg-slate-950 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-1.5 block">
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
            {EIGHT_REASONS.map((item, idx) => (
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
            ))}
          </div>

        </div>

      </div>

      {/* Poster Zoom Modal */}
      {isPosterOpen && (
        <div 
          onClick={() => setIsPosterOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 cursor-pointer"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsPosterOpen(false)}
              className="absolute -top-12 right-0 text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full border border-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src="/images/8-sebab-pilih-coway.png" 
              alt="8 Sebab Kenapa Anda Perlu Pilih Coway (Paparan Penuh)" 
              className="max-h-[85vh] max-w-full object-contain rounded-2xl border border-slate-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};
