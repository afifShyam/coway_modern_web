'use client';

import React, { useState, useRef } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl, getProductWhatsAppUrl, getProductEmallUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { PRODUCTS } from '@/data/products';
import { getDailyEstimate, parsePrice, formatRinggit } from '@/lib/pricing';
import { 
  Flame,
  ShieldCheck, 
  BadgeCheck, 
  ChevronRight, 
  Sparkles, 
  Users, 
  Heart,
  ShoppingBag,
  Play,
  Volume2,
  VolumeX,
  Maximize2,
  Video,
  Image as ImageIcon
} from 'lucide-react';

const HERO_MODEL_IDS = ['villaem3', 'neoplus', 'ais', 'storm2'] as const;

// Editorial copy with no equivalent field on Product — kept local, sourced by id.
const HERO_CAPTIONS: Record<(typeof HERO_MODEL_IDS)[number], { category: string; tag: string }> = {
  villaem3: { category: 'Penapis Air 4 Suhu', tag: 'Paling Popular' },
  neoplus: { category: 'Penapis Air 3 Suhu', tag: 'Paling Jimat' },
  ais: { category: 'Penapis Air + Pembuat Ais', tag: 'Pembuat Ais Segera' },
  storm2: { category: 'Penapis Udara HEPA', tag: 'HEPA H13' },
};

const HERO_PRODUCTS = HERO_MODEL_IDS
  .map((id) => PRODUCTS.find((product) => product.id === id))
  .filter((product): product is NonNullable<typeof product> => Boolean(product))
  .map((product) => ({
    product,
    ...HERO_CAPTIONS[product.id as (typeof HERO_MODEL_IDS)[number]],
    link: '#produk',
  }));

interface HeroProps {
  onOpenQuiz?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  // Top Media State: 'video' | 'photo'
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'photo'>('video');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    if (!nextMuted) {
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch(() => {});
    }
    setIsMuted(nextMuted);
  };

  const handleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="relative pt-4 pb-8 sm:pt-8 sm:pb-14 border-b border-slate-850 bg-gradient-to-b from-[#060911] via-[#090D16] to-[#0D1322] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* TOP HERO ROW: HUMAN WARMTH & TOP VIDEO / PHOTO SHOWCASE */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-8 sm:mb-12">
          
          {/* Left Column: Focused Copywriting & Personal Touch */}
          <div className="lg:col-span-7 space-y-3.5 text-center lg:text-left">
            
            {/* Official Promo Urgency Pill */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-bold shadow-inner">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Promosi Rasmi 2026 — Dari <strong className="text-amber-200">RM20/Bulan</strong></span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Air Bersih, Udara Segar & <br className="hidden sm:inline" />
              <span className="text-sky-400">Kediaman Lebih Selesa.</span>
            </h1>

            {/* Value Proposition Copy */}
            <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Hai, saya <strong>{siteConfig.agentName}</strong> (Coway Health Planner sah). Saya bantu anda pilih pakej Coway terbaik mengikut bajet bulanan — <strong>tanpa caj pendaftaran & pemasangan percuma</strong> di seluruh Malaysia.
            </p>

            {/* Primary Action Button (WhatsApp Johan) */}
            <div className="pt-1 flex flex-col items-center lg:items-start gap-2">
              <a 
                href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin konsultasi pemilihan produk Coway yang sesuai untuk rumah saya.`)}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-lg font-black bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-950/60 transition-all text-center flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>WhatsApp Johan — Semak Promosi</span>
              </a>

              {/* Micro-copy */}
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium flex items-center justify-center lg:justify-start gap-2">
                <span>⚡ Balas &lt; 5 Minit</span>
                <span>•</span>
                <span>Tiada Komitmen</span>
                <span>•</span>
                <span>100% Percuma</span>
              </div>
            </div>

            {/* Human Trust Metrics Strip */}
            <div className="pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-left">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">1,200+ Famili</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">Telah dibantu</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">5+ Tahun</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">Ejen Sah Coway</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">Halal JAKIM</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">100% Diiktiraf</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Top Interactive Video & Lifestyle Gallery Showcase */}
          <div className="lg:col-span-5 space-y-2.5">
            
            {/* Media Selector Tabs (Video Promosi / Galeri Rumah) */}
            <div className="flex items-center justify-between p-1 bg-[#111726] border border-slate-800 rounded-xl">
              <button
                type="button"
                onClick={() => setActiveMediaTab('video')}
                className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeMediaTab === 'video' 
                    ? 'bg-sky-600 text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Video Coway</span>
              </button>
              
              <button
                type="button"
                onClick={() => setActiveMediaTab('photo')}
                className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  activeMediaTab === 'photo' 
                    ? 'bg-sky-600 text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Galeri Dapur</span>
              </button>
            </div>

            {/* Media Container Box */}
            <div className="pro-card p-2 bg-[#111726] border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl space-y-1.5 relative group overflow-hidden">
              
              {/* Active Tab 1: Video Player */}
              {activeMediaTab === 'video' ? (
                <div 
                  onClick={togglePlay}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-black flex items-center justify-center cursor-pointer select-none"
                >
                  <video
                    ref={videoRef}
                    src="/videos/coway-promo.mp4"
                    preload="none"
                    muted
                    playsInline
                    loop
                    poster="/images/cody-service-lifestyle.jpg"
                    className="w-full h-full object-contain"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* Play/Pause Overlay Indicator */}
                  {!isPlaying && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-xl transform scale-100 group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                    </div>
                  )}

                  {/* Video Control Buttons Top Right */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className={`p-2 rounded-xl border backdrop-blur-md transition-all shadow-md flex items-center gap-1 text-[11px] font-bold ${
                        isMuted 
                          ? 'bg-amber-500/90 text-slate-950 border-amber-300 animate-pulse' 
                          : 'bg-emerald-600/90 text-white border-emerald-400'
                      }`}
                      title={isMuted ? "Buka Audio Suara" : "Bisukan Audio"}
                      aria-label="Kawalan Audio"
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-4 h-4" />
                          <span className="text-[10px] hidden xs:inline">Buka Suara</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 text-white" />
                          <span className="text-[10px] hidden xs:inline">Audio Aktif</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleFullScreen}
                      className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 backdrop-blur-md transition-colors shadow-md"
                      title="Skrin Penuh"
                      aria-label="Skrin Penuh"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Video Caption Bar Bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-2.5 text-left pointer-events-none">
                    <div className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full bg-sky-950/90 text-sky-300 border border-sky-800 text-[9px] font-bold mb-0.5">
                      <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                      Video Promosi Coway
                    </div>
                    <div className="text-[10px] font-bold text-white flex items-center gap-1.5">
                      <span>
                        {!isPlaying
                          ? '▶️ Tekan untuk mainkan video'
                          : isMuted
                            ? '🔇 Video dibisukan — tekan ikon audio untuk bunyi'
                            : '🔊 Audio Sedang Dimainkan'}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Active Tab 2: Malaysian Home Lifestyle Photo */
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950">
                  <img 
                    src="/images/malaysian-kitchen-lifestyle.jpg" 
                    alt="Dapur Keluarga Malaysia dengan Penapis Air Coway" 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-3 text-left">
                    <div className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full bg-sky-950/90 text-sky-300 border border-sky-800 text-[9px] font-bold mb-0.5">
                      <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                      Selesa • Bersih • Mudah
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-white">Air Minuman Bersih Setiap Saat</h4>
                  </div>
                </div>
              )}
              
              <div className="px-2 py-0.5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300">Pemasangan Percuma</span>
                <span className="text-emerald-400 font-bold">Servis Cody Berkala</span>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* POPULAR PRODUCTS - 4 MODELS IN 2x2 MOBILE GRID */}
        {/* ============================================================== */}
        <div className="mb-6 sm:mb-10">
          
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-base sm:text-2xl font-black text-white">
                Pilihan Popular Pelanggan
              </h2>
            </div>
            <a href="#produk" className="text-[11px] sm:text-sm font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-0.5">
              <span>Semua Model</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {HERO_PRODUCTS.map(({ product, category, tag, link }) => (
              <div
                key={product.id}
                className="pro-card p-2.5 sm:p-4 bg-[#111726] border border-slate-800 hover:border-slate-700 text-white rounded-2xl sm:rounded-3xl transition-all duration-200 flex flex-col justify-between group shadow-lg relative"
              >
                <div>
                  {/* Top Tag & Code */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-1.5 py-0.2 rounded-md text-[8px] sm:text-[10px] font-bold bg-sky-950 text-sky-300 border border-sky-800 truncate">
                      {tag}
                    </span>
                    <span className="text-[9px] sm:text-[11px] font-mono font-bold text-slate-400 hidden xs:inline">{product.code}</span>
                  </div>

                  {/* Product Image Stage */}
                  <a href={link} className="h-24 sm:h-32 flex items-center justify-center my-1 bg-[#0A0F1D] rounded-xl p-1.5 border border-slate-800/80 overflow-hidden relative group-hover:scale-105 transition-transform duration-300 block">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-full max-h-20 sm:max-h-28 w-auto max-w-full object-contain"
                      loading="eager"
                    />
                  </a>

                  {/* Name */}
                  <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-sky-400 transition-colors truncate">
                    {product.name}
                  </h3>
                  <span className="text-[9px] sm:text-[11px] text-slate-400 font-medium truncate block">{category}</span>
                </div>

                {/* Pricing Block */}
                <div className="mt-2 pt-1.5 border-t border-slate-800 space-y-1.5">
                  <div className="p-1.5 rounded-xl bg-[#0A0F1D] border border-slate-800">
                    <div className="flex items-baseline justify-between">
                      <div className="text-xs sm:text-base font-black text-white">
                        {formatRinggit(parsePrice(product.regularMonthly))}<span className="text-[9px] sm:text-[10px] font-normal text-slate-400">/bln</span>
                      </div>
                      <span className="text-[9px] text-slate-400 font-medium hidden xs:inline">
                        ≈ <strong className="text-sky-400">{getDailyEstimate(product.regularMonthly)}</strong>/hari
                      </span>
                    </div>
                    
                    <div className="mt-0.5 pt-0.5 border-t border-slate-800 flex items-center justify-between text-[9px]">
                      <span className="text-amber-400 font-bold">Promo:</span>
                      <span className="font-extrabold text-amber-300">RM{product.promoMonthly}/bln</span>
                    </div>
                  </div>

                  {/* Side-by-Side Action Buttons */}
                  <div className="grid grid-cols-2 gap-1 pt-0.5">
                    <a
                      href={getProductEmallUrl(product.emallUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-1 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 text-[10px] font-bold flex items-center justify-center gap-1 shadow-xs transition-all active:scale-95 whitespace-nowrap"
                      title={`Beli ${product.name} di Coway E-Mall Rasmi`}
                    >
                      <ShoppingBag className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Online</span>
                    </a>

                    <a
                      href={getProductWhatsAppUrl(product.name, product.code)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-1 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-[10px] flex items-center justify-center gap-1 transition-all shadow-sm active:scale-95 whitespace-nowrap"
                      title="Hubungi Johan di WhatsApp"
                    >
                      <WhatsAppIcon className="w-3 h-3 fill-white shrink-0" />
                      <span>Wasap</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* JOHAN RECOMMENDATION HELPER BOX */}
        {/* ============================================================== */}
        <div className="pro-card p-4 sm:p-6 bg-[#111726] border border-slate-800 text-white rounded-2xl sm:rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left flex-col md:flex-row">
            <img 
              src={siteConfig.agentAvatar} 
              alt={siteConfig.agentName} 
              className="w-14 h-14 rounded-2xl object-cover border-2 border-sky-400 shadow-md shrink-0" 
            />
            <div className="space-y-0.5">
              <div className="inline-flex items-center gap-1 text-[10px] font-bold text-sky-400 uppercase tracking-wide">
                <Heart className="w-3 h-3 text-rose-400" />
                <span>Konsultasi Peribadi Mesra</span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-white">Tak Pasti Model Mana Sesuai?</h3>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                &ldquo;Beritahu saya jumlah ahli keluarga & bajet anda. Saya bantu carikan pakej paling berbaloi tanpa komitmen.&rdquo;
              </p>
            </div>
          </div>

          <a 
            href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, boleh bantu cadangkan model Coway yang paling sesuai dan jimat untuk keluarga saya?`)}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-emerald-950/60 transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Tanya Johan di WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
