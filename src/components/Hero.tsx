'use client';

import React, { useState, useRef } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { 
  Grid, 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  BadgeCheck, 
  MessageCircle, 
  Droplets, 
  Wind, 
  Snowflake, 
  Bed, 
  Refrigerator, 
  Armchair,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Video,
  Star
} from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'product'>('video');
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

  const handleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-850 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-850 border border-slate-750 text-sky-400 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>Coway Malaysia • {siteConfig.tagline}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.15]">
              Air & Udara Bersih, <br className="hidden sm:inline" />
              <span className="text-sky-400">Untuk Kediaman Sejahtera.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dapatkan maklumat rasmi produk Coway Malaysia merangkumi penapis air, penulen udara, kerusi urut BEREX, tilam hotel dan penyaman udara bersama <strong>{siteConfig.agentName} (Perancang Kesihatan Sah: {siteConfig.hpCode})</strong>.
            </p>

            {/* CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a 
                href="#produk" 
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <Grid className="w-4 h-4" />
                Lihat Katalog & Senarai Harga
              </a>
              
              <button 
                onClick={() => {
                  setActiveTab('video');
                  if (!isPlaying && videoRef.current) {
                    videoRef.current.play();
                    setIsPlaying(true);
                  }
                }}
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-750 transition-all flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4 text-sky-400" />
                Tonton Video Promosi
              </button>

              <button 
                onClick={onOpenQuiz}
                className="w-full sm:w-auto px-5 py-3 rounded-full text-xs sm:text-sm font-bold bg-slate-850/80 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                Kuiz Model
              </button>
            </div>

            {/* Mobile Quick Category Shortcuts */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 block mb-2 uppercase tracking-wider">Kategori Produk Rasmi:</span>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 flex-wrap">
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-sky-400" /> Air (10)
                </a>
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Wind className="w-3 h-3 text-sky-400" /> Udara (5)
                </a>
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Armchair className="w-3 h-3 text-sky-400" /> Kerusi Urut (4)
                </a>
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Bed className="w-3 h-3 text-sky-400" /> Tilam (2)
                </a>
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Snowflake className="w-3 h-3 text-sky-400" /> Penyaman Udara (2)
                </a>
                <a href="#produk" className="px-3 py-1 rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-750 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Refrigerator className="w-3 h-3 text-sky-400" /> Peti Sejuk (2)
                </a>
              </div>
            </div>

            {/* Trust Badges Aligned with Official Coway Standard */}
            <div className="pt-5 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-850 flex items-center justify-center text-sky-400 shrink-0 border border-slate-800">
                  <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">Heart Service</div>
                  <div className="text-[10px] text-slate-400">Servis berkala Cody</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-850 flex items-center justify-center text-sky-400 shrink-0 border border-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">Jaminan Penuh</div>
                  <div className="text-[10px] text-slate-400">Sepanjang sewaan</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-850 flex items-center justify-center text-emerald-400 shrink-0 border border-slate-800">
                  <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-white">Halal JAKIM</div>
                  <div className="text-[10px] text-slate-400">Diiktiraf rasmi</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Showcase: Interactive Media Card (Video + Product Switcher) */}
          <div className="lg:col-span-5">
            <div className="pro-card p-4 sm:p-6 bg-slate-900 border border-slate-800 relative shadow-2xl rounded-2xl">
              
              {/* Media Mode Tabs */}
              <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-850 border border-slate-750">
                  <button
                    onClick={() => setActiveTab('video')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeTab === 'video'
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Video Promosi</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('product')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeTab === 'product'
                        ? 'bg-sky-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Star className="w-3.5 h-3.5" />
                    <span>Model Pilihan</span>
                  </button>
                </div>

                <span className="text-[11px] text-emerald-400 font-bold hidden xs:flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Promosi RM20
                </span>
              </div>

              {/* Tab 1: Video Player */}
              {activeTab === 'video' && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div 
                    onClick={togglePlay}
                    className="relative rounded-xl overflow-hidden bg-black border border-slate-800 aspect-video sm:h-64 flex items-center justify-center cursor-pointer group shadow-inner"
                  >
                    <video
                      ref={videoRef}
                      src="/videos/coway-promo.mp4"
                      playsInline
                      loop
                      muted={isMuted}
                      className="w-full h-full object-contain"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />

                    {/* Play/Pause Center Overlay */}
                    {!isPlaying && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 ml-1 fill-white" />
                        </div>
                      </div>
                    )}

                    {/* Video Top Controls Overlay */}
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-sm transition-colors"
                        title={isMuted ? "Buka Audio" : "Bisukan Audio"}
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={handleFullScreen}
                        className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-sm transition-colors"
                        title="Skrin Penuh"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom Status Bar on Video */}
                    <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md text-[10px] font-semibold text-slate-300 border border-slate-700 flex items-center justify-between pointer-events-none">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        Video Rasmi Perkakas Coway
                      </span>
                      <span>{isPlaying ? 'Sedang Dimainkan' : 'Klik Untuk Mainkan'}</span>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white">Video Pengenalan Coway</div>
                      <div className="text-[11px] text-slate-400">Hubungi {siteConfig.agentName} untuk tempahan</div>
                    </div>

                    <a 
                      href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya telah menonton video promosi Coway dan ingin mengetahui pakej terkini.`)}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Johan</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Tab 2: Product Showcase (Villaem 3) */}
              {activeTab === 'product' && (
                <div className="space-y-2.5 animate-in fade-in duration-200">
                  <div className="h-44 sm:h-56 flex items-center justify-center my-2 bg-slate-850/60 rounded-xl p-3 border border-slate-800">
                    <img 
                      src="https://emall.coway.com.my/ProductImages/859ec6e7-6111-41bb-aad4-75a7145a8a50/1/240x240/villaem-3-white.png" 
                      alt="Coway Villaem 3" 
                      className="max-h-36 sm:max-h-48 object-contain drop-shadow-md"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">Coway Villaem III</h3>
                      <span className="text-xs text-slate-400 font-mono">CHP-7320L • 4 Suhu Air (11.3L)</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 block uppercase font-bold">Kadar Promo (7 Bulan Awal)</span>
                      <span className="text-xl sm:text-2xl font-black text-sky-400">RM20<span className="text-xs font-medium text-slate-400">/bln</span></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2 rounded-xl bg-slate-850 border border-slate-800">
                      <div className="text-[9px] text-slate-400">Sewa Seterusnya</div>
                      <div className="font-bold text-white text-xs sm:text-sm">RM74.00<span className="text-[9px] font-normal text-slate-400">/bln</span></div>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-850 border border-slate-800">
                      <div className="text-[9px] text-slate-400">Belian Terus (Outright)</div>
                      <div className="font-bold text-sky-300 text-xs sm:text-sm">RM4,200</div>
                    </div>
                  </div>

                  <a 
                    href={getWhatsAppUrl(`Hai ${siteConfig.agentName}, saya ingin mengetahui maklumat lanjut mengenai pelan sewa beli Coway Villaem III.`)}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Hubungi {siteConfig.agentName.split(' ')[0]} via WhatsApp
                  </a>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
