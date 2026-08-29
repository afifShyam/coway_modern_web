'use client';

import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { 
  Grid, 
  MessageCircle, 
  Play,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Flame,
  ArrowRight,
  ShieldCheck,
  Video,
  X
} from 'lucide-react';

const TOP_FEATURED = [
  {
    name: 'Villaem III',
    category: 'Penapis Air',
    tag: 'Paling Popular',
    promo: 'RM20/bln',
    regular: 'RM74/bln',
    image: 'https://emall.coway.com.my/ProductImages/859ec6e7-6111-41bb-aad4-75a7145a8a50/1/240x240/villaem-3-white.png',
    link: '#produk'
  },
  {
    name: 'Coway AIS',
    category: 'Pembuat Ais',
    tag: 'Ais Segera',
    promo: 'RM20/bln',
    regular: 'RM120/bln',
    image: 'https://emall.coway.com.my/ProductImages/cd349c96-7052-4f9a-a75d-7eb696eedaa3/1/240x240/ais-white.png',
    link: '#produk'
  },
  {
    name: 'Storm II',
    category: 'Penulen Udara',
    tag: 'HEPA H13',
    promo: 'RM20/bln',
    regular: 'RM60/bln',
    image: 'https://emall.coway.com.my/ProductImages/f18d8c4d-f7d0-4eb5-a5da-389fbc5a66ad/1/240x240/storm-2.jpg',
    link: '#produk'
  },
  {
    name: 'BEREX Pebble',
    category: 'Kerusi Urut',
    tag: 'Urutan 3D',
    promo: 'RM20/bln',
    regular: 'RM120/bln',
    image: 'https://emall.coway.com.my/ProductImages/8b8abf5f-2bc3-4ed3-9a95-5bbb5f7b41dc/1/240x240/pebble-mystic-grey.png',
    link: '#produk'
  }
];

const CATEGORY_CHIPS = [
  { label: 'Penapis Air', icon: '💧', id: '#produk' },
  { label: 'Penulen Udara', icon: '💨', id: '#produk' },
  { label: 'Kerusi Urut', icon: '🪑', id: '#produk' },
  { label: 'Tilam Hotel', icon: '🛏️', id: '#produk' },
  { label: 'Aircond', icon: '❄️', id: '#produk' },
  { label: 'Peti Sejuk', icon: '🧊', id: '#produk' },
];

interface HeroProps {
  onOpenQuiz?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, []);

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

  const handleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="relative pt-4 pb-10 sm:pt-12 sm:pb-16 border-b border-slate-850 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-2 sm:space-y-3">
          
          {/* Top Promo Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800 text-sky-400 text-[11px] sm:text-xs font-bold shadow-inner animate-pulse">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Promosi Rasmi 2026 • Kadar Pengenalan <strong>RM20/Bulan</strong></span>
          </div>

          {/* Punchy Headline */}
          <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Pilihan No.1 Perkakas Rumah <br className="hidden sm:inline" />
            <span className="text-sky-400">Coway Malaysia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Daftar mudah, pasang percuma & servis Cody berjadual bersama <strong>{siteConfig.agentName} (Kod HP: {siteConfig.hpCode})</strong>.
          </p>

          {/* Action Row on Mobile/Desktop */}
          <div className="pt-1 flex items-center justify-center gap-2.5 flex-wrap">
            <a 
              href="#produk" 
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-md transition-all flex items-center gap-1.5"
            >
              <Grid className="w-4 h-4" />
              <span>Katalog & Harga</span>
            </a>

            <a 
              href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya berminat untuk mengetahui promosi rasmi Coway terkini.`)}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Johan</span>
            </a>

            {/* Mobile Video Trigger Button */}
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="lg:hidden px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-850 hover:bg-slate-800 text-slate-300 border border-slate-750 transition-all flex items-center gap-1.5"
            >
              <Video className="w-3.5 h-3.5 text-sky-400" />
              <span>Tonton Video</span>
            </button>
          </div>
        </div>

        {/* Quick Category Jump Chips (Mobile Friendly Carousel) */}
        <div className="mb-6 sm:mb-8 overflow-x-auto scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
          <div className="flex items-center justify-start sm:justify-center gap-2 shrink-0">
            {CATEGORY_CHIPS.map((chip, idx) => (
              <a
                key={idx}
                href={chip.id}
                className="px-3 py-1.5 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-slate-300 hover:text-white text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>{chip.icon}</span>
                <span>{chip.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* WHAT WE ARE SELLING: FEATURED PRODUCTS SHOWCASE IN TOP SECTION */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
          {TOP_FEATURED.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="pro-card p-3 sm:p-4 bg-slate-850/95 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/50 rounded-2xl transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-1">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-sky-950 text-sky-400 border border-sky-800 truncate">
                    {item.tag}
                  </span>
                  <span className="text-[9px] font-bold text-slate-400">{item.category}</span>
                </div>

                {/* Product Image */}
                <div className="h-24 sm:h-32 flex items-center justify-center my-1.5 bg-slate-900 rounded-xl p-2 border border-slate-800/80 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="max-h-20 sm:max-h-28 max-w-full object-contain drop-shadow"
                    loading="eager"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xs sm:text-sm font-extrabold text-white truncate group-hover:text-sky-400 transition-colors">
                  {item.name}
                </h3>
              </div>

              {/* Price Callout */}
              <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[8px] sm:text-[9px] uppercase font-bold text-sky-400 block">Kadar Promo</span>
                  <div className="text-xs sm:text-base font-black text-sky-400 leading-tight">
                    {item.promo}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[8px] sm:text-[9px] text-slate-500 block">Asal</span>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-400 line-through">
                    {item.regular}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Desktop Video Card (Hidden on Mobile to keep top fold uncluttered) */}
        <div className="hidden lg:block pt-2">
          <div className="pro-card p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-md">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-950 text-sky-400 text-[10px] font-bold border border-sky-800">
                <Sparkles className="w-3 h-3 text-sky-400" />
                Video Demonstrasi Rasmi
              </div>
              <h4 className="text-lg font-bold text-white leading-snug">
                Tonton Demonstrasi & Kelebihan Perkakas Coway
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ketahui bagaimana teknologi penapisan air & udara Coway memberikan perlindungan maksimum untuk kediaman anda.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a 
                  href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin mendapatkan penerangan lanjut mengenai video produk Coway.`)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Hubungi Johan Sekarang
                </a>
              </div>
            </div>

            {/* Video Box */}
            <div 
              onClick={togglePlay}
              className="relative w-96 rounded-xl overflow-hidden bg-black border border-slate-800 aspect-video shrink-0 flex items-center justify-center cursor-pointer group shadow-2xl"
            >
              <video
                ref={videoRef}
                src="/videos/coway-promo.mp4"
                autoPlay
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-contain"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-xl">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                </div>
              )}

              <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-sm transition-colors"
                  title={isMuted ? "Buka Audio" : "Bisukan Audio"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-sky-400" />}
                </button>

                <button
                  onClick={handleFullScreen}
                  className="p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-sm transition-colors"
                  title="Skrin Penuh"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Standalone Mobile Video Modal (Opens on Tap) */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative max-w-lg w-full bg-slate-900 rounded-2xl p-3 border border-slate-800 shadow-2xl overflow-hidden space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Video className="w-4 h-4 text-sky-400" /> Video Promosi Coway
              </span>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-black aspect-video w-full flex items-center justify-center">
              <video
                src="/videos/coway-promo.mp4"
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <div className="pt-1 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-400">Hubungi {siteConfig.agentName}</span>
              <a 
                href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya telah menonton video promosi Coway.`)}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs"
              >
                WhatsApp Tempah
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
