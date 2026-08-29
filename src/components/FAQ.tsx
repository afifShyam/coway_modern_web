'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Berapa lama tempoh promosi RM20/bulan?',
    a: 'Tempoh promosi RM20 adalah kadar pengenalan untuk 3, 5 atau 7 bulan pertama mengikut kategori produk dan pakej kontrak yang dipilih. Anda dapat menikmati penjimatan maksimum pada peringkat awal langganan.'
  },
  {
    q: 'Selepas tempoh promo tamat, berapa bayaran bulanan?',
    a: 'Selepas tamat tempoh promosi RM20, bayaran bulanan akan kembali kepada kadar sewaan biasa produk tersebut (contohnya RM74/bulan bagi Villaem III atau RM60/bulan bagi Storm II) sehingga tamat tempoh kontrak sewa beli anda.'
  },
  {
    q: 'Adakah pendaftaran dan pemasangan benar-benar percuma?',
    a: 'Ya, pendaftaran adalah RM0 (tiada sebarang yuran pemprosesan pendahuluan) dan penghantaran serta pemasangan standard diuruskan secara percuma di seluruh Malaysia oleh juruteknik bertauliah Coway.'
  },
  {
    q: 'Berapa lama proses pemasangan mengambil masa?',
    a: 'Semakan kelulusan permohonan biasanya selesai dalam tempoh 24 hingga 48 jam waktu bekerja. Selepas lulus, pihak Coway akan menghubungi anda untuk menetapkan tarikh pemasangan mengikut keselesaan anda (biasanya 3–5 hari bekerja).'
  },
  {
    q: 'Bolehkah suri rumah atau pekerja bebas (freelancer) memohon?',
    a: 'Ya, boleh! Skim sewa beli Coway sangat mesra pelanggan. Suri rumah, peniaga kecil dan pekerja bebas layak memohon tanpa memerlukan slip gaji atau penjamin.'
  },
  {
    q: 'Apakah dokumen yang diperlukan untuk pendaftaran?',
    a: 'Anda hanya memerlukan salinan MyKad dan maklumat kad bank/akaun untuk potongan auto-debit bulanan. Maklumat diproses secara selamat melalui sistem pendaftaran rasmi Coway Malaysia.'
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-950 border-t border-slate-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-400 border border-sky-800 text-xs font-bold uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Soalan Lazim (FAQ)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perkara Yang Kerap Ditanya Pelanggan
          </h2>
          <p className="mt-2.5 text-slate-400 text-xs sm:text-base">
            Jawapan ringkas dan telus mengenai promosi, bayaran bulanan dan proses permohonan Coway.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen 
                    ? 'bg-slate-900 border-sky-500/50 shadow-lg' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-sky-400 text-xs font-mono font-bold">0{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-sky-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Ada Soalan Lain Yang Belum Terjawab?</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              WhatsApp Johan untuk semakan pantas soalan anda secara peribadi.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ada soalan mengenai pelan Coway.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shrink-0 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Tanya Johan di WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
