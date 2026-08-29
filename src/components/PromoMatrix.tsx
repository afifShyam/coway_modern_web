'use client';

import React from 'react';
import { PROMO_TIERS } from '@/data/promos';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const PromoMatrix: React.FC = () => {
  return (
    <section id="promosi" className="py-20 bg-slate-950 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/70 text-amber-300 border border-amber-800/60 text-xs font-bold uppercase mb-3">
            🔥 Pelan Penjimatan Hebat
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Bayar Bulanan <span className="text-sky-400">Hanya RM20!</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Pilih tempoh kontrak di bawah untuk menikmati kadar promosi RM20 bulanan bagi bulan-bulan terawal.
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
                        <div className={`text-[10px] ${plan.highlight ? 'text-sky-400' : 'text-slate-500'}`}>Hanya</div>
                        <div className="text-lg font-extrabold text-sky-400">
                          {plan.promoPrice}<span className="text-xs font-normal text-slate-400">/bln</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya nak claim ${decodeURIComponent(tier.ctaParam)}`)}
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
              ⚡ Pakej Mix & Match Combo
            </div>
            <h3 className="text-xl font-bold text-white">Gabungkan 2 Produk & Nikmati Diskaun Kekal!</h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Gabungkan penulen air + penulen udara / tilam / aircond untuk menerima potongan <strong>tambahan RM20/bulan sepanjang tempoh kontrak</strong>.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-center md:text-right">
              <div className="text-3xl font-black text-white">RM20 <span className="text-base text-sky-400 font-bold">OFF</span></div>
              <div className="text-[11px] text-slate-400 font-bold uppercase">Diskaun Kekal Bulanan</div>
            </div>
            <a 
              href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya nak tahu pakej Combo Mix and Match Coway`)}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs transition-all shadow-sm"
            >
              Kira Pakej Combo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
