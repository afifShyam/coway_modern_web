'use client';

import React from 'react';
import { PROMO_TIERS } from '@/data/promos';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { AlertCircle } from 'lucide-react';

export const PromoMatrix: React.FC = () => {
  return (
    <section id="promosi" className="py-20 bg-slate-950 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950 text-sky-400 border border-sky-800 text-xs font-bold uppercase mb-3">
            Pelan Promosi Rasmi Coway
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Kadar Pengenalan Promosi <span className="text-sky-400">RM20 Sebulan</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Nikmati kadar promosi RM20 sebulan bagi tempoh bulan-bulan terawal yang ditetapkan mengikut pakej kontrak sewa beli rasmi Coway.
          </p>
        </div>

        {/* 3-Tier Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PROMO_TIERS.map((tier, idx) => (
            <div key={idx} className="pro-card p-7 bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <h3 className="text-lg font-bold text-white">{tier.category}</h3>
                  <span className="text-xl">{tier.icon}</span>
                </div>

                <div className="space-y-3">
                  {tier.plans.map((plan, pIdx) => (
                    <div 
                      key={pIdx} 
                      className={`p-3.5 rounded-xl border flex items-center justify-between ${
                        plan.highlight 
                          ? 'bg-sky-950/50 border-sky-800/70' 
                          : 'bg-slate-850 border-slate-800'
                      }`}
                    >
                      <div>
                        <div className={`text-[10px] uppercase font-bold ${plan.highlight ? 'text-sky-400' : 'text-slate-400'}`}>
                          {plan.contract}
                        </div>
                        <div className={`text-sm ${plan.highlight ? 'font-extrabold text-white' : 'font-bold text-white'}`}>
                          {plan.promoDuration}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-[10px] ${plan.highlight ? 'text-sky-400' : 'text-slate-500'}`}>Kadar Promo</div>
                        <div className="text-lg font-extrabold text-sky-400">
                          {plan.promoPrice}<span className="text-xs font-normal text-slate-400">/bln</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin mengetahui maklumat lanjut mengenai ${decodeURIComponent(tier.ctaParam)}.`)}
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs text-center transition-all shadow-sm"
              >
                {tier.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Mix & Match Banner */}
        <div className="pro-card p-6 sm:p-8 bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-950 text-sky-400 text-[11px] font-extrabold uppercase border border-sky-800">
              Pakej Kombo Suai Padan (Mix & Match)
            </div>
            <h3 className="text-xl font-bold text-white">Rebat Bulanan Tambahan untuk Langganan Kombo</h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Gabungkan 2 produk (seperti penapis air dan penulen udara/tilam) untuk menikmati potongan harga bulanan mengikut skim promosi semasa Coway Malaysia.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-center md:text-right">
              <div className="text-2xl font-black text-white">Rebat Kombo</div>
              <div className="text-[11px] text-slate-400 font-bold uppercase">Sepanjang Tempoh Kontrak</div>
            </div>
            <a 
              href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin mengetahui pakej Kombo Suai Padan Coway.`)}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs transition-all shadow-sm"
            >
              Semak Pakej Kombo
            </a>
          </div>
        </div>

        {/* Terms Note */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500 text-center">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Tertakluk kepada terma, syarat serta kelulusan permohonan oleh Coway (M) Sdn Bhd.</span>
        </div>

      </div>
    </section>
  );
};
