'use client';

import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { 
  MessageCircle, 
  Play,
  Volume2,
  VolumeX,
  Maximize2,
  Flame,
  Wrench,
  ShieldCheck,
  BadgeCheck,
  ChevronRight,
  Sparkles
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
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playsInline = true;
    video.volume = 1.0;

    // Direct attempt to autoplay unmuted with audio
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        })
        .catch(() => {
          // If browser policy requires mute for initial autoplay, fallback to muted
          video.muted = true;
          setIsMuted(true);
          video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        });
    }

    // Immediate unmute on ANY user interaction (tap, click, touch, scroll)
    const triggerAudio = () => {
      if (video) {
        video.muted = false;
        video.volume = 1.0;
        setIsMuted(false);
        video.play().catch(() => {});
      }
    };

    window.addEventListener('click', triggerAudio, { once: true });
    window.addEventListener('touchstart', triggerAudio, { once: true });
    window.addEventListener('scroll', triggerAudio, { once: true });

    return () => {
      window.removeEventListener('click', triggerAudio);
      window.removeEventListener('touchstart', triggerAudio);
      window.removeEventListener('scroll', triggerAudio);
    };
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
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-850 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* TOP HERO ROW: CRO OPTIMIZED CONVERSION HIERARCHY */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-14">
          
          {/* Left Column: Customer & Agent Value Proposition */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            
            {/* 1. Humanized Agent Credential Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/95 border border-slate-800 text-xs shadow-sm">
              <img 
                src="/images/johan-avatar.png" 
                alt="Johan Adam" 
                className="w-5 h-5 rounded-full object-cover border border-sky-500/50" 
              />
              <span className="text-white font-bold">Johan Adam</span>
              <span className="text-sky-400 font-bold">✓</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-medium">HP: {siteConfig.hpCode}</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-emerald-400 font-semibold hidden sm:inline">Servis Seluruh Malaysia</span>
            </div>

            {/* 2. Official Promo Urgency Pill */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/80 text-amber-300 text-[11px] sm:text-xs font-bold shadow-inner">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>🔥 Promosi Coway 2026 — Serendah <strong>RM20/Bulan</strong></span>
              </div>
            </div>

            {/* 3. Customer & Result-Focused Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Nak Cari Coway Yang Sesuai <br className="hidden sm:inline" />
              <span className="text-sky-400">Untuk Rumah Anda?</span>
            </h1>

            {/* 4. Value Proposition (Why Contact Johan?) */}
            <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Saya bantu anda <strong>pilih produk tepat, semak kelayakan promosi terkini & urus pemasangan percuma</strong> di seluruh Malaysia — konsultasi 100% percuma.
            </p>

            {/* 5. Undisputed Primary CTA (WhatsApp Johan) */}
            <div className="pt-2 flex flex-col items-center lg:items-start gap-2.5">
              <a 
                href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin konsultasi pemilihan produk Coway yang sesuai untuk rumah saya.`)}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-sm sm:text-base font-extrabold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 transition-all text-center flex items-center justify-center gap-2.5 border border-emerald-400/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>WhatsApp Johan — Semak Promosi</span>
              </a>

              {/* Sub-text micro copy */}
              <div className="text-[11px] text-slate-400 font-medium flex items-center justify-center lg:justify-start gap-2">
                <span>⚡ Balasan Pantas</span>
                <span>•</span>
                <span>Tiada Komitmen</span>
                <span>•</span>
                <span>Konsultasi Percuma</span>
              </div>

              {/* 6. Secondary Action Link */}
              <div className="pt-1">
                <a 
                  href="#produk" 
                  className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors inline-flex items-center gap-1 group"
                >
                  <span>Atau Lihat Katalog Produk & Harga</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* 7. 3-Point Trust Strip */}
            <div className="pt-3 border-t border-slate-850/80 grid grid-cols-3 gap-2 text-left">
              <div className="flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-semibold">Servis Percuma</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-semibold">Jaminan Penuh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-semibold">Halal JAKIM</span>
              </div>
            </div>

          </div>

          {/* Right Column: Video Player Showcase */}
          <div className="lg:col-span-6">
            <div className="pro-card p-3 sm:p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl space-y-2.5">
              
              {/* Video Player Box */}
              <div 
                onClick={togglePlay}
                className="relative rounded-xl overflow-hidden bg-black border border-slate-800 aspect-video w-full flex items-center justify-center cursor-pointer group shadow-inner"
              >
                <video
                  ref={videoRef}
                  src="/videos/coway-promo.mp4"
                  autoPlay
                  playsInline
                  loop
                  preload="auto"
                  className="w-full h-full object-contain"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Play Overlay if paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-white" />
                    </div>
                  </div>
                )}

                {/* Quick Unmute Floating Indicator if audio is muted */}
                {isMuted && isPlaying && (
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-8 left-2.5 px-3 py-1.5 rounded-full bg-sky-600/95 hover:bg-sky-500 text-white border border-sky-400/50 text-[11px] font-bold flex items-center gap-1.5 shadow-2xl backdrop-blur-md transition-all animate-bounce z-10"
                  >
                    <VolumeX className="w-3.5 h-3.5" />
                    <span>Buka Bunyi Video 🔊</span>
                  </button>
                )}

                {/* Top Controls */}
                <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-sm transition-colors"
                    title={isMuted ? "Buka Audio" : "Bisukan Audio"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-sky-400" />}
                  </button>

                  <button
                    onClick={handleFullScreen}
                    className="p-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-sm transition-colors"
                    title="Skrin Penuh"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-1.5 left-2 right-2 px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-sm text-[10px] font-semibold text-slate-300 border border-slate-800 flex items-center justify-between pointer-events-none">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                    Video Pengenalan Coway
                  </span>
                  <span className="text-slate-400">{isMuted ? 'Ketik Untuk Dengar Bunyi' : 'Audio Aktif 🔊'}</span>
                </div>
              </div>

              {/* Video Footer Strip */}
              <div className="flex items-center justify-between px-1 text-xs text-slate-400">
                <span className="font-bold text-white text-[11px] sm:text-xs">Video Pengenalan Coway</span>
                <span className="text-[11px] text-slate-500">Perancang: {siteConfig.agentName}</span>
              </div>

            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* COMPACT CATEGORY JUMP CHIPS & FEATURED PRODUCTS */}
        {/* ============================================================== */}
        <div className="space-y-4">
          
          {/* Category Chips Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-850">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Pilih Kategori Produk:</span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {CATEGORY_CHIPS.map((chip, idx) => (
                <a
                  key={idx}
                  href={chip.id}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-medium transition-all flex items-center gap-1 shadow-sm"
                >
                  <span className="text-xs">{chip.icon}</span>
                  <span>{chip.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Featured Header */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Model Terhangat Coway 2026
            </span>
            <a href="#produk" className="text-xs font-bold text-sky-400 hover:underline flex items-center gap-1">
              <span>Lihat Semua 27 Model</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4 Flagship Product Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {TOP_FEATURED.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="pro-card p-3 sm:p-4 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl transition-all duration-200 flex flex-col justify-between group relative overflow-hidden shadow-sm"
              >
                <div>
                  {/* Header Tag */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-850 text-sky-400 border border-slate-800 truncate max-w-[85px]">
                      {item.tag}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400">{item.category}</span>
                  </div>

                  {/* Product Image */}
                  <div className="h-24 sm:h-32 flex items-center justify-center my-1.5 bg-slate-950 rounded-xl p-2 border border-slate-850 group-hover:scale-105 transition-transform duration-300">
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
        </div>

      </div>
    </section>
  );
};
