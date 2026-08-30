'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '@/data/faqs';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 sm:py-16 bg-[#0D1322] border-t border-slate-850">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>Soalan Lazim Pelanggan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Semua Yang Anda Perlu Tahu
          </h2>
          <p className="mt-1.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
            Jawapan ringkas dan jelas bagi soalan yang kerap ditanya:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#141C30] border-sky-500/80 shadow-lg' 
                    : 'bg-[#111726] border border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-3.5 sm:py-4 px-4 sm:px-5 flex items-center justify-between gap-3 text-left transition-colors"
                >
                  <span className="font-extrabold text-xs sm:text-sm text-white">
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-sky-600 text-white rotate-180' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-8 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 text-center space-y-2.5 shadow-xl">
          <h3 className="text-base sm:text-lg font-black text-white">
            Ada Soalan Lain Yang Belum Terjawab?
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Johan sedia menjawab sebarang soalan teknikal atau semakan kelayakan secara terus.
          </p>
          <div className="pt-1">
            <a
              href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ada soalan mengenai produk dan promosi Coway.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm shadow-sm transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Tanya Johan di WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
