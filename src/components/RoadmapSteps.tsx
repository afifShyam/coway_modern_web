'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';

const STEPS = [
  {
    step: '01',
    title: 'Hubungi Johan',
    desc: 'WhatsApp Johan untuk konsultasi pemilihan model, semakan stok dan promosi bulanan terkini.'
  },
  {
    step: '02',
    title: 'Sediakan Dokumen',
    desc: 'Dokumen yang diperlukan akan dimaklumkan selepas semakan ringkas. Maklumat dihantar melalui sistem pendaftaran rasmi Coway secara selamat.'
  },
  {
    step: '03',
    title: 'Semakan Kelulusan',
    desc: 'Sistem rasmi Coway Malaysia akan memproses semakan kelayakan permohonan secara pantas.'
  },
  {
    step: '04',
    title: 'Pilih Tarikh Pasang',
    desc: 'Pihak Coway akan menghubungi anda bagi menetapkan waktu pemasangan yang sesuai dengan kelapangan anda.'
  },
  {
    step: '05',
    title: 'Pemasangan Percuma',
    desc: 'Juruteknik bertauliah Coway hadir memasang dan mendidik cara penggunaan terus ke lokasi anda.',
    highlight: true
  }
];

export const RoadmapSteps: React.FC = () => {
  return (
    <section id="langkah" className="py-16 sm:py-20 bg-slate-900 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-1.5 block">
            Pantas, Telus & Mudah
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cara Tempahan Mudah Dalam 5 Langkah
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Tiada borang fizikal yang rumit. Proses permohonan diuruskan secara digital dari keselesaan rumah anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
          {STEPS.map((item, idx) => (
            <div key={idx} className="pro-card p-5 bg-slate-850 border border-slate-800 rounded-2xl flex flex-col justify-between shadow-sm">
              <div className={`w-9 h-9 rounded-xl text-white font-extrabold text-xs flex items-center justify-center mb-3.5 ${
                item.highlight ? 'bg-emerald-600' : 'bg-sky-600'
              }`}>
                {item.step}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
