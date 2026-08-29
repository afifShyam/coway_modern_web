'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';

const STEPS = [
  {
    step: '01',
    title: 'Hubungi Ejen Sah',
    desc: `WhatsApp ${siteConfig.agentName.split(' ')[0]} untuk penerangan model, semakan stok dan promosi terkini.`
  },
  {
    step: '02',
    title: 'Sediakan Dokumen',
    desc: 'Hanya salinan hadapan MyKad & maklumat kad bank untuk bayaran bulanan.'
  },
  {
    step: '03',
    title: 'Semakan Kelulusan',
    desc: 'Sistem Coway akan memproses semakan secara pantas dan telus.'
  },
  {
    step: '04',
    title: 'Pilih Tarikh Pasang',
    desc: 'Pihak Coway akan menghubungi anda bagi menetapkan waktu pemasangan.'
  },
  {
    step: '05',
    title: 'Pemasangan Percuma',
    desc: 'Juruteknik bertauliah Coway datang memasang terus ke lokasi anda.',
    highlight: true
  }
];

export const RoadmapSteps: React.FC = () => {
  return (
    <section id="langkah" className="py-20 bg-slate-900 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-2 block">Pantas & Telus</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cara Tempahan Mudah Dalam 5 Langkah
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Tiada borang fizikal yang rumit. Semuanya selesai secara digital dari rumah anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {STEPS.map((item, idx) => (
            <div key={idx} className="pro-card p-6 bg-slate-850 flex flex-col justify-between">
              <div className={`w-9 h-9 rounded-xl text-white font-bold text-sm flex items-center justify-center mb-4 ${
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
