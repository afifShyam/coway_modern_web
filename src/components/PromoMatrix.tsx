import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { PROMO_TIERS } from '@/data/promos';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Flame, CheckCircle2 } from 'lucide-react';

export const PromoMatrix: React.FC = () => {
  return (
    <section id="promosi" className="py-8 sm:py-16 bg-[#090D16] border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Tawaran Khas 2026</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Pelan Promosi RM20 / Bulan
          </h2>
          <p className="mt-1.5 text-slate-300 text-xs sm:text-base leading-relaxed">
            Pakej sewaan fleksibel untuk penapis air, penapis udara, tilam hotel & kerusi urut:
          </p>
        </div>

        {/* 3 Promo Category Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {PROMO_TIERS.map((tier, idx) => (
            <div 
              key={idx} 
              className="pro-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 hover:border-slate-700 flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-2xl sm:text-3xl p-2 rounded-2xl bg-[#0A0F1D] border border-slate-800 shrink-0">
                    {tier.icon}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white leading-snug">
                    {tier.category}
                  </h3>
                </div>

                {/* Plans List */}
                <div className="space-y-2">
                  {tier.plans.map((plan, pIdx) => (
                    <div 
                      key={pIdx} 
                      className={`p-3 rounded-2xl border transition-all ${
                        plan.highlight 
                          ? 'bg-sky-950/60 border-sky-400/70 shadow-md ring-1 ring-sky-400/50' 
                          : 'bg-[#0A0F1D] border-slate-800/80'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className="text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          {plan.contract}
                        </span>
                        {plan.highlight && (
                          <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.2 rounded-full bg-sky-500 text-white shadow-xs">
                            Paling Jimat
                          </span>
                        )}
                      </div>

                      <div className="flex items-baseline justify-between text-xs text-slate-300">
                        <span>{plan.promoDuration}:</span>
                        <div className="text-sm sm:text-base font-black text-amber-300">
                          {plan.promoPrice}<span className="text-[10px] font-normal text-slate-400">/bln</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-2 border-t border-slate-800">
                <a
                  href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya berminat dengan pakej ${tier.category} (Promosi RM20). Boleh semak kelayakan?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all active:scale-95 text-center"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                  <span>{tier.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
