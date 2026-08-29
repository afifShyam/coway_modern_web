'use client';

import React, { useState, useRef } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { 
  Lock, 
  Clock, 
  Star, 
  MessageCircle, 
  ShoppingBag, 
  Facebook, 
  Phone, 
  BadgeCheck, 
  ShieldCheck,
  Play,
  Volume2,
  VolumeX,
  Sparkles,
  Users,
  Award,
  Heart
} from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [interestProduct, setInterestProduct] = useState('Coway Villaem III (Penapis Air 4 Suhu)');
  const [budgetRange, setBudgetRange] = useState('RM60 - RM90/bulan');
  
  // Video player controls
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hai ${siteConfig.agentName}, saya berminat dengan ${interestProduct} (Bajet anggaran: ${budgetRange}). Boleh tolong berikan cadangan pakej promosi terbaik untuk rumah saya?`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="johan" className="py-16 sm:py-22 bg-slate-900 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="pro-card p-6 sm:p-10 lg:p-12 bg-slate-850 border border-slate-800 rounded-3xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Johan Adam High-Definition Portrait Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-sky-500/40 shadow-2xl max-w-sm w-full group">
                <img 
                  src={siteConfig.agentImage} 
                  alt={`${siteConfig.agentName} - ${siteConfig.designation}`} 
                  className="w-full h-84 sm:h-98 object-cover object-top filter contrast-105 group-hover:scale-103 transition-transform duration-500"
                />
                
                {/* Gradient Overlay with HP Details */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/90 text-sky-400 border border-sky-800 text-[10px] font-extrabold uppercase mb-1.5 shadow-sm">
                    <BadgeCheck className="w-3.5 h-3.5 text-sky-400" />
                    {siteConfig.designation} Sah
                  </div>
                  <h4 className="text-xl font-extrabold text-white">{siteConfig.agentName}</h4>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">Kod Ejen: <strong className="text-sky-400">{siteConfig.hpCode}</strong></p>
                  
                  <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-center gap-3 text-[11px] text-slate-300">
                    <span className="text-emerald-400 font-semibold">✓ 5+ Tahun Pengalaman</span>
                    <span>•</span>
                    <span>1,200+ Pemasangan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column: Johan's Story & Personal Video Showcase */}
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-bold border border-slate-700">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                <span>Komitmen Servis Mesra Pelanggan</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Kenali <span className="text-sky-400">{siteConfig.agentName}</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                &ldquo;Bagi saya, tugas saya bukan sekadar menguruskan pendaftaran. Tanggungjawab saya adalah memastikan setiap keluarga menikmati bekalan air bersih dan udara segar tanpa sebarang kesulitan — dari pemilihan model, urusan kelulusan, pemasangan pantas sehinggalah khidmat Cody berjadual.&rdquo;
              </p>

              {/* Video Player Box with Poster Frame */}
              <div className="pt-1">
                <div 
                  onClick={togglePlay}
                  className="relative rounded-2xl overflow-hidden bg-black border border-slate-750 aspect-video w-full flex items-center justify-center cursor-pointer group shadow-inner"
                >
                  <video
                    ref={videoRef}
                    src="/videos/coway-promo.mp4"
                    poster="/images/cody-service-lifestyle.jpg"
                    playsInline
                    loop
                    muted={isMuted}
                    className="w-full h-full object-cover"
                  />
                  {!isPlaying && (
                    <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center group-hover:bg-black/35 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                      <span className="text-[11px] font-bold text-white mt-2 bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                        Tonton Video Pengenalan (45s)
                      </span>
                    </div>
                  )}
                  {isPlaying && (
                    <div className="absolute top-2 right-2 flex items-center gap-1">
                      <button
                        onClick={toggleMute}
                        className="p-1 rounded-full bg-slate-900/80 text-white border border-slate-700"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-sky-400" />}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{siteConfig.displayPhone}</span>
                </a>

                <a 
                  href={siteConfig.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 font-semibold transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>{siteConfig.facebookName}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Zero-Friction Consultation Box */}
            <div className="lg:col-span-4">
              <div className="pro-card p-5 sm:p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-lg space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 uppercase tracking-wide mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Konsultasi Percuma</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white">Bantu Saya Pilih Model</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Pilih produk & bajet anda untuk cadangan pakej paling berbaloi terus di WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleConsultation} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Produk Yang Diminati:</label>
                    <select 
                      value={interestProduct}
                      onChange={(e) => setInterestProduct(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-850 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-500 transition-all"
                    >
                      <option value="Coway Villaem III (Penapis Air 4 Suhu)">Coway Villaem III (Penapis Air 4 Suhu)</option>
                      <option value="Coway AIS (Penapis Air & Pembuat Ais)">Coway AIS (Penapis Air & Pembuat Ais)</option>
                      <option value="Coway Neon (Penapis Air Ultra-Nipis)">Coway Neon (Penapis Air Ultra-Nipis)</option>
                      <option value="Coway Neo Plus (Penapis Air Mesra Bajet)">Coway Neo Plus (Penapis Air Mesra Bajet)</option>
                      <option value="Coway Storm II (Penulen Udara HEPA)">Coway Storm II (Penulen Udara HEPA)</option>
                      <option value="Coway Lombok 3 (Penulen Udara Premium)">Coway Lombok 3 (Penulen Udara Premium)</option>
                      <option value="Kerusi Urut BEREX Pebble">Kerusi Urut BEREX Pebble</option>
                      <option value="Tilam Hotel Coway Prime">Tilam Hotel Coway Prime Series</option>
                      <option value="Penyaman Udara Coway Inverter">Penyaman Udara Coway Inverter</option>
                      <option value="Lain-lain / Cadangan Model">Lain-lain / Cadangan Model</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Anggaran Bajet Bulanan:</label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['Bawah RM65', 'RM65 - RM90', 'RM90+'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudgetRange(b)}
                          className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all ${
                            budgetRange === b
                              ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                              : 'bg-slate-850 hover:bg-slate-800 text-slate-400 border-slate-700'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 1-Tap Direct WhatsApp Action */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/50"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>WhatsApp Johan Sekarang</span>
                  </button>

                  <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-2 pt-0.5">
                    <Lock className="w-3 h-3 text-sky-400" />
                    <span>Privasi dijamin • Balasan pantas • Tanpa komitmen</span>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
