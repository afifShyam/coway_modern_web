'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Check, HelpCircle, MessageCircle } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="perbandingan" className="py-16 sm:py-20 bg-slate-900 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-1.5 block">
            Panduan Pembelian Bijak
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sewa Beli Coway atau Beli Terus — Mana Sesuai Untuk Anda?
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Bandingkan dua kaedah pemilikan rasmi Coway bagi memilih pelan yang paling berbaloi untuk bajet dan gaya hidup anda.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 shadow-xl max-w-4xl mx-auto">
          <table className="w-full text-left border-collapse min-w-[580px]">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80">
                <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-400 w-1/3">Ciri & Kelebihan</th>
                <th className="p-4 sm:p-5 text-xs sm:text-sm font-black text-sky-400 bg-slate-900 border-x border-slate-800 w-1/3 text-center">
                  Pelan Sewa Beli (Rental)
                </th>
                <th className="p-4 sm:p-5 text-xs sm:text-sm font-black text-emerald-400 w-1/3 text-center">
                  Beli Terus (Outright / 0% EPP)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white">Bentuk Bayaran</td>
                <td className="p-4 sm:p-5 bg-slate-900/60 border-x border-slate-800 text-center text-slate-200">
                  Komitmen bulanan rendah (dari RM20/bln)
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-200">
                  Bayaran penuh atau ansuran kad kredit 0% sehingga 36 bulan
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white">Servis Cody & Penapis</td>
                <td className="p-4 sm:p-5 bg-slate-900/60 border-x border-slate-800 text-center font-semibold text-emerald-400">
                  Percuma sepanjang tempoh kontrak
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-300">
                  Percuma 1 hingga 2 tahun pertama (boleh langgan pakej Heart Service seterusnya)
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white">Jaminan & Alat Ganti</td>
                <td className="p-4 sm:p-5 bg-slate-900/60 border-x border-slate-800 text-center font-semibold text-emerald-400">
                  Jaminan kerosakan penuh sepanjang kontrak
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-300">
                  Jaminan 1 tahun rasmi Coway
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white">Status Hak Milik</td>
                <td className="p-4 sm:p-5 bg-slate-900/60 border-x border-slate-800 text-center text-slate-200">
                  Menjadi hak milik penuh selepas tamat kontrak
                </td>
                <td className="p-4 sm:p-5 text-center font-semibold text-emerald-400">
                  Terus menjadi hak milik serta-merta
                </td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 font-bold text-white">Paling Sesuai Untuk</td>
                <td className="p-4 sm:p-5 bg-slate-900/60 border-x border-slate-800 text-center text-sky-300 font-medium">
                  Keluarga yang mahukan komitmen bulanan ringan tanpa fikir kos servis & alat ganti
                </td>
                <td className="p-4 sm:p-5 text-center text-slate-300 font-medium">
                  Individu atau syarikat dengan bajet tunai / fasiliti kad kredit 0% EPP
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Link below table */}
        <div className="mt-8 text-center">
          <a
            href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya perlukan panduan sama ada pelan Sewa Beli atau Beli Terus lebih sesuai untuk bajet saya.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Tak Pasti Pelan Mana Sesuai? Tanya Johan</span>
          </a>
        </div>

      </div>
    </section>
  );
};
