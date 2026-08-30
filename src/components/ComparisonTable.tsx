'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Check, ShieldCheck, Scale, ArrowRight } from 'lucide-react';

const COMPARISON_ROWS: { feature: string; rental: string; outright: string; advantage: 'rental' | 'outright' | 'tie' }[] = [
  {
    feature: 'Bayaran Pendahuluan / Deposit',
    rental: 'RM0 (Percuma)',
    outright: 'Bayaran Penuh (RM3,000 - RM8,000+)',
    advantage: 'rental'
  },
  {
    feature: 'Servis Sanitasi & Penukaran Penapis',
    rental: '100% Percuma Setiap 2–4 Bulan oleh Cody',
    outright: 'Perlu bayar yuran servis tahunan berasingan',
    advantage: 'rental'
  },
  {
    feature: 'Jaminan Alat Ganti & Motor',
    rental: 'Waranti Penuh Sepanjang Kontrak',
    outright: 'Waranti Terhad 1 Tahun Sahaja',
    advantage: 'rental'
  },
  {
    feature: 'Penghantaran & Pemasangan',
    rental: 'Percuma ke Seluruh Malaysia',
    outright: 'Percuma ke Seluruh Malaysia',
    advantage: 'tie'
  },
  {
    feature: 'Pemindahan Mesin Percuma (Relokasi)',
    rental: 'Percuma 1x Setiap Tahun',
    outright: 'Caj pemindahan dikenakan',
    advantage: 'rental'
  },
  {
    feature: 'Hak Milik Mesin Selepas Tamat Kontrak',
    rental: 'Mesin Menjadi Hak Milik Anda Sepenuhnya',
    outright: 'Hak Milik Anda Sejak Hari Pertama',
    advantage: 'outright'
  }
];

export const ComparisonTable: React.FC = () => {
  return (
    <section id="perbandingan" className="py-8 sm:py-16 bg-[#090D16] border-t border-slate-850">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
            <Scale className="w-3.5 h-3.5 text-sky-400" />
            <span>Perbandingan Pakej</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Sewa Beli vs Beli Terus (Outright)
          </h2>
          <p className="mt-1.5 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Fahami perbezaan antara pelan sewaan bulanan dan pembelian terus sebelum membuat pilihan terbaik:
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="pro-card rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-[#0A0F1D]">
                  <th className="p-3.5 sm:p-5 font-extrabold text-slate-300 w-1/3">Ciri & Manfaat</th>
                  <th className="p-3.5 sm:p-5 font-black text-white bg-sky-950/60 border-x border-sky-800/80 w-1/3 text-center">
                    <div className="inline-flex items-center gap-1 text-sky-400 text-[10px] sm:text-xs uppercase tracking-wider mb-0.5 font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" /> Pilihan Ramai (95%)
                    </div>
                    <div className="text-xs sm:text-base">Sewa Beli Coway</div>
                  </th>
                  <th className="p-3.5 sm:p-5 font-bold text-slate-300 w-1/3 text-center">
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 mb-0.5">Bayaran Penuh</div>
                    <div className="text-xs sm:text-base text-slate-200">Beli Terus</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {COMPARISON_ROWS.map((row, idx) => {
                  const highlightClass = 'p-3 sm:p-4 text-center bg-sky-950/30 border-x border-sky-800/60 font-semibold text-white text-[11px] sm:text-xs';
                  const plainClass = 'p-3 sm:p-4 text-center text-slate-300 font-medium text-[11px] sm:text-xs';
                  return (
                    <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                      <td className="p-3 sm:p-4 font-bold text-white text-[11px] sm:text-xs">
                        {row.feature}
                      </td>
                      <td className={row.advantage === 'rental' ? highlightClass : plainClass}>
                        <div className="flex items-center justify-center gap-1">
                          {row.advantage !== 'outright' && (
                            <Check className={`w-3.5 h-3.5 shrink-0 ${row.advantage === 'rental' ? 'text-emerald-400' : 'text-slate-500'}`} />
                          )}
                          <span>{row.rental}</span>
                        </div>
                        {row.advantage === 'rental' && (
                          <span className="mt-0.5 block text-[9px] font-bold text-emerald-400 uppercase tracking-wide">Kelebihan Sewa Beli</span>
                        )}
                        {row.advantage === 'tie' && (
                          <span className="mt-0.5 block text-[9px] font-bold text-slate-500 uppercase tracking-wide">Setara</span>
                        )}
                      </td>
                      <td className={row.advantage === 'outright' ? highlightClass : plainClass}>
                        <div className="flex items-center justify-center gap-1">
                          {row.advantage !== 'rental' && (
                            <Check className={`w-3.5 h-3.5 shrink-0 ${row.advantage === 'outright' ? 'text-emerald-400' : 'text-slate-500'}`} />
                          )}
                          <span>{row.outright}</span>
                        </div>
                        {row.advantage === 'outright' && (
                          <span className="mt-0.5 block text-[9px] font-bold text-emerald-400 uppercase tracking-wide">Kelebihan Beli Terus</span>
                        )}
                        {row.advantage === 'tie' && (
                          <span className="mt-0.5 block text-[9px] font-bold text-slate-500 uppercase tracking-wide">Setara</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Bottom Call to Action */}
          <div className="p-4 sm:p-6 bg-[#0A0F1D] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <h4 className="font-extrabold text-white text-xs sm:text-sm">
                Kesimpulan: Pelan Sewa Beli Lebih Menjimatkan & Bebas Risau
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Kos servis Cody, gantian penapis & waranti ditanggung 100% percuma sepanjang kontrak.
              </p>
            </div>

            <a
              href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin dapatkan nasihat mengenai pilihan Sewa Beli vs Beli Terus.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 shadow-sm transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Konsultasi di WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
