'use client';

import React from 'react';
import { PROMO_TIERS } from '@/data/promos';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { 
  AlertCircle, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  BadgeCheck, 
  CreditCard,
  RefreshCw,
  Layers,
  Building2,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

const OTHER_PROMOS = [
  {
    title: 'Skim Trade-In Rasmi',
    badge: 'Rebat Hingga RM1,000',
    desc: 'Tukar penapis air atau udara lama mana-mana jenama (atau rosak) untuk rebat sewa tunai/bulanan.',
    icon: RefreshCw,
    iconColor: 'text-amber-400 bg-amber-950/60 border-amber-800/80',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya berminat untuk semak rebat Skim Trade-In Coway bagi mesin lama saya.`
  },
  {
    title: 'Kombo Suai Padan',
    badge: 'Diskaun Bulanan 2+ Unit',
    desc: 'Gabungkan 2 produk atau lebih (air + udara / tilam) untuk rebat bulanan tambahan sepanjang kontrak.',
    icon: Layers,
    iconColor: 'text-sky-400 bg-sky-950/60 border-sky-800/80',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya ingin mengetahui tawaran Pakej Kombo Suai Padan Coway.`
  },
  {
    title: 'Belian Terus (0% EPP)',
    badge: 'Percuma 1-2 Thn Servis',
    desc: 'Ansuran kad kredit 0% sehingga 36 bulan beserta pakej servis dan pertukaran penapis percuma bernilai RM1,000+.',
    icon: CreditCard,
    iconColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/80',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya ingin tahu mengenai tawaran Belian Terus (Outright) & ansuran 0% EPP.`
  },
  {
    title: 'Pakej Pejabat & Surau',
    badge: 'Kapasiti Besar Komersial',
    desc: 'Pakej sewaan khas berkapasiti tinggi untuk syarikat, sekolah, klinik, surau & masjid.',
    icon: Building2,
    iconColor: 'text-purple-400 bg-purple-950/60 border-purple-800/80',
    whatsappMsg: `Hai ${siteConfig.agentName}, saya ingin meminta sebut harga (quotation) Pakej Pejabat/Surau Coway.`
  }
];

export const PromoMatrix: React.FC = () => {
  return (
    <section id="promosi" className="py-16 sm:py-20 bg-slate-950 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950 text-sky-400 border border-sky-800 text-xs font-bold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Pakej Promosi Rasmi Coway</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Bagaimana Promosi <span className="text-sky-400">RM20 Sebulan</span> Berfungsi?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Nikmati kadar promosi RM20/bulan untuk <strong>3, 5 atau 7 bulan pertama</strong> bergantung kepada kategori produk dan tempoh pelan kontrak yang dipilih.
          </p>
        </div>

        {/* 3-Step Clear Explainer Cards for Consumers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          
          {/* Step 1 */}
          <div className="pro-card p-5 sm:p-6 bg-slate-900 border border-sky-800/80 rounded-2xl relative shadow-lg">
            <div className="w-9 h-9 rounded-xl bg-sky-600/20 text-sky-400 border border-sky-500/40 flex items-center justify-center font-black text-sm mb-3">
              1
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-sky-400 mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Bulan-Bulan Pertama</span>
            </div>
            <h3 className="text-lg font-extrabold text-white mb-2">Kadar Promosi RM20/Bulan</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Anda hanya membayar <strong>RM20 sebulan</strong> untuk 3, 5 atau 7 bulan pertama mengikut pakej kontrak pilihan anda.
            </p>
          </div>

          {/* Step 2 */}
          <div className="pro-card p-5 sm:p-6 bg-slate-900 border border-slate-800 rounded-2xl relative shadow-lg">
            <div className="w-9 h-9 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center font-black text-sm mb-3">
              2
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400 mb-1">
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span>Bulan Seterusnya</span>
            </div>
            <h3 className="text-lg font-extrabold text-white mb-2">Kadar Sewaan Asal Tetap</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Selepas tamat tempoh promosi RM20, bayaran bulanan kembali ke kadar sewaan biasa (cth: RM74/bln bagi Villaem III atau RM60/bln bagi Storm II) sehingga tamat kontrak.
            </p>
          </div>

          {/* Step 3 */}
          <div className="pro-card p-5 sm:p-6 bg-slate-900 border border-emerald-800/80 rounded-2xl relative shadow-lg">
            <div className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-black text-sm mb-3">
              3
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-400 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Sepanjang Kontrak</span>
            </div>
            <h3 className="text-lg font-extrabold text-white mb-2">Servis & Jaminan Penuh</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Termasuk servis berkala Cody, pertukaran penapis percuma, jaminan kerosakan rasmi Coway, dan RM0 kos pendaftaran & pemasangan.
            </p>
          </div>

        </div>

        {/* 3-Tier Promo Breakdown Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PROMO_TIERS.map((tier, idx) => (
            <div key={idx} className="pro-card p-6 sm:p-7 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <h3 className="text-base sm:text-lg font-bold text-white">{tier.category}</h3>
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
                        <div className={`text-xs sm:text-sm ${plan.highlight ? 'font-extrabold text-white' : 'font-bold text-white'}`}>
                          {plan.promoDuration}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-[10px] ${plan.highlight ? 'text-sky-400' : 'text-slate-500'}`}>Kadar Promo</div>
                        <div className="text-base sm:text-lg font-extrabold text-sky-400">
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
                className="mt-6 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{tier.ctaText}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Benefits Strip */}
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">RM0 Yuran Pendaftaran</div>
              <div className="text-[11px] text-slate-400">Tiada yuran proses pendahuluan</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Servis Cody Berkala</div>
              <div className="text-[11px] text-slate-400">Sanitasi & tukar filter percuma</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Jaminan Rasmi Coway</div>
              <div className="text-[11px] text-slate-400">Perlindungan alat ganti penuh</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
              <BadgeCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Pensijilan Halal JAKIM</div>
              <div className="text-[11px] text-slate-400">Piawaian rasmi diyakini</div>
            </div>
          </div>
        </div>

        {/* Alternative Promotions Grid */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block">Pilihan Penjimatan Tambahan</span>
              <h3 className="text-lg sm:text-2xl font-extrabold text-white">Promosi Lain Yang Mungkin Sesuai Untuk Anda</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {OTHER_PROMOS.map((promo, pIdx) => {
              const IconComponent = promo.icon;
              return (
                <a
                  key={pIdx}
                  href={getWhatsAppUrl(promo.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pro-card p-4 sm:p-5 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-2xl transition-all duration-200 flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${promo.iconColor}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                        {promo.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                        {promo.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                        {promo.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-sky-400 group-hover:text-sky-300">
                    <span>Semak Kelayakan</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Legal Transparency Note */}
        <div className="mt-8 flex items-center justify-center gap-1.5 text-xs text-slate-500 text-center">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Kadar promosi RM20 adalah kadar pengenalan untuk tempoh yang ditetapkan. Tertakluk kepada terma pelan kontrak & kelulusan Coway (M) Sdn Bhd.</span>
        </div>

      </div>
    </section>
  );
};
