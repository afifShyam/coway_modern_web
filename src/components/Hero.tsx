'use client';

import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { 
  Grid, 
  Wrench, 
  ShieldCheck, 
  BadgeCheck, 
  MessageCircle, 
  Play,
  Volume2,
  VolumeX,
  Maximize2
} from 'lucide-react';

interface HeroProps {
  onOpenQuiz?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Programmatically ensure autoplay triggers on mount
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay with sound or interaction restriction handled
            setIsPlaying(false);
          });
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
    <section className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-850 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Clear, Spacious Copywriting */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-850 border border-slate-750 text-sky-400 text-xs font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              <span>Coway Malaysia • {siteConfig.tagline}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Air & Udara Bersih, <br className="hidden sm:inline" />
              <span className="text-sky-400">Untuk Kediaman Sejahtera.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Dapatkan maklumat rasmi penapis air, penulen udara, kerusi urut BEREX, tilam hotel dan penyaman udara bersama <strong>{siteConfig.agentName} (Kod HP: {siteConfig.hpCode})</strong>.
            </p>

            {/* Clean CTAs: 2 Essential Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a 
                href="#produk" 
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <Grid className="w-4 h-4" />
                Lihat Katalog & Senarai Harga
              </a>

              <a 
                href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya berminat untuk mengetahui promosi rasmi Coway terkini.`)}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp {siteConfig.agentName.split(' ')[0]}
              </a>
            </div>

            {/* Trust Strip */}
            <div className="pt-4 border-t border-slate-850 grid grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-slate-850 flex items-center justify-center text-sky-400 shrink-0 border border-slate-800">
                  <Wrench className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-bold text-white">Servis Cody</div>
                  <div className="text-[10px] text-slate-400">Berkala percuma</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-slate-850 flex items-center justify-center text-sky-400 shrink-0 border border-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-bold text-white">Jaminan Penuh</div>
                  <div className="text-[10px] text-slate-400">Sepanjang sewaan</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-slate-850 flex items-center justify-center text-emerald-400 shrink-0 border border-slate-800">
                  <BadgeCheck className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-bold text-white">Halal JAKIM</div>
                  <div className="text-[10px] text-slate-400">Diiktiraf rasmi</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean & Spacious Video Card with Autoplay */}
          <div className="lg:col-span-6">
            <div className="pro-card p-3 sm:p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl space-y-3">
              
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
                  muted={isMuted}
                  className="w-full h-full object-contain"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Play Overlay if paused */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 fill-white" />
                    </div>
                  </div>
                )}

                {/* Quick Unmute Floating Button if Muted */}
                {isMuted && isPlaying && (
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-10 left-3 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all animate-bounce"
                  >
                    <VolumeX className="w-3.5 h-3.5 text-sky-400" />
                    <span>Ketik untuk Buka Bunyi</span>
                  </button>
                )}

                {/* Video Top Right Controls */}
                <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-sm transition-colors"
                    title={isMuted ? "Buka Audio" : "Bisukan Audio"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-sky-400" />}
                  </button>

                  <button
                    onClick={handleFullScreen}
                    className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-sm transition-colors"
                    title="Skrin Penuh"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-sm text-[10px] font-semibold text-slate-300 border border-slate-800 flex items-center justify-between pointer-events-none">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                    Video Pengenalan Coway
                  </span>
                  <span className="text-slate-400">{isPlaying ? 'Sedang Dimainkan (Auto)' : 'Klik Untuk Main'}</span>
                </div>
              </div>

              {/* Video Bottom Note */}
              <div className="flex items-center justify-between pt-1 text-xs">
                <div>
                  <div className="font-bold text-white">Tonton Video Promosi</div>
                  <div className="text-[11px] text-slate-400">Hubungi {siteConfig.agentName} untuk tempahan</div>
                </div>

                <a 
                  href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya telah menonton video promosi Coway dan ingin membuat pertanyaan lanjut.`)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-slate-850 hover:bg-slate-800 border border-slate-750 text-sky-400 hover:text-sky-300 font-bold text-xs flex items-center gap-1 transition-colors"
                >
                  <span>Tanya Sekarang</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
