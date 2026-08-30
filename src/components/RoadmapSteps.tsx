import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { 
  MessageSquare, 
  FileCheck, 
  PhoneCall, 
  Wrench, 
  Sparkles, 
  ShieldCheck, 
  Lock
} from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Konsultasi Percuma',
    desc: 'Hubungi Johan untuk memilih model penapis air atau udara yang sesuai dengan bajet anda.'
  },
  {
    step: '02',
    icon: FileCheck,
    title: 'Pendaftaran Mudah',
    desc: 'Hanya perlukan salinan IC dan kad debit/akaun bank tanpa slip gaji rumit.'
  },
  {
    step: '03',
    icon: PhoneCall,
    title: 'Pengesahan HQ',
    desc: 'Pusat khidmat pelanggan Coway HQ akan hubungi anda untuk mengesahkan pesanan.'
  },
  {
    step: '04',
    icon: Wrench,
    title: 'Pemasangan Percuma',
    desc: 'Juruteknik Coway hadir memasang mesin secara kemas dan teratur di kediaman anda.'
  },
  {
    step: '05',
    icon: Sparkles,
    title: 'Servis Cody Berkala',
    desc: 'Nikmati air bersih dengan servis sanitasi dan penukaran filter percuma setiap 2–4 bulan.'
  }
];

export const RoadmapSteps: React.FC = () => {
  return (
    <section id="langkah" className="py-8 sm:py-16 bg-[#0D1322] border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Proses Mudah & Telus</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            5 Langkah Mudah Memiliki Coway
          </h2>
          <p className="mt-1.5 text-slate-300 text-xs sm:text-base leading-relaxed">
            Semuanya diuruskan secara digital oleh Health Planner anda dari awal hingga pemasangan:
          </p>
        </div>

        {/* 5-Step Horizontal Grid (Compact on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-4">
          {STEPS.map((item, idx) => {
            const IconComp = item.icon;
            const isLast = idx === STEPS.length - 1;
            return (
              <div 
                key={idx}
                className={`pro-card p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 hover:border-slate-700 flex flex-col justify-between space-y-2 shadow-lg relative ${
                  isLast ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base sm:text-xl font-black text-sky-400/80 font-mono">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#0A0F1D] border border-slate-800 flex items-center justify-center text-sky-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-black text-white leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                  Langkah {idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Guarantee */}
        <div className="mt-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#111726] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-xs sm:text-sm">
                Pendaftaran Selamat & Terus ke Sistem Coway (M) Sdn Bhd
              </h4>
              <p className="text-[11px] text-slate-400">
                Maklumat anda dilindungi di bawah Akta Perlindungan Data Peribadi (PDPA).
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin mula mendaftar produk Coway hari ini.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-emerald-950/60 transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Mula Tempahan Sekarang</span>
          </a>
        </div>

      </div>
    </section>
  );
};
