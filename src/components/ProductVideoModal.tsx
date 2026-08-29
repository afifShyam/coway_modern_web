'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { siteConfig } from '@/data/siteConfig';
import { getProductWhatsAppUrl } from '@/lib/whatsapp';
import { X, Play, Volume2, VolumeX, Maximize2, MessageCircle, Video } from 'lucide-react';

interface ProductVideoModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductVideoModal: React.FC<ProductVideoModalProps> = ({ product, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (product && !product.youtubeId && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product || (!product.videoUrl && !product.youtubeId)) return null;

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

  const videoTitle = product.videoTitle || `Video Demonstrasi & Ciri ${product.name}`;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-3xl w-full bg-slate-900 rounded-3xl p-3 sm:p-5 border border-slate-800 shadow-2xl overflow-hidden space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-2 pt-1">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-sky-950 text-sky-400 border border-sky-800">
              <Video className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                {videoTitle}
              </h3>
              <span className="text-[11px] text-slate-400 font-mono">
                {product.code} • Promo RM{product.promoMonthly}/bln
              </span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-750 transition-colors"
            title="Tutup (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container (Supports both YouTube & MP4) */}
        {product.youtubeId ? (
          <div className="relative rounded-2xl overflow-hidden bg-black border border-slate-800 aspect-video w-full shadow-2xl">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${product.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        ) : (
          <div 
            onClick={togglePlay}
            className="relative rounded-2xl overflow-hidden bg-black border border-slate-800 aspect-video w-full flex items-center justify-center cursor-pointer group shadow-2xl"
          >
            <video
              ref={videoRef}
              src={product.videoUrl}
              autoPlay
              playsInline
              loop
              muted={isMuted}
              className="w-full h-full object-contain"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Play/Pause Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 ml-1 fill-white" />
                </div>
              </div>
            )}

            {/* Video Controls Overlay */}
            <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
              <button
                onClick={toggleMute}
                className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md transition-colors"
                title={isMuted ? "Buka Audio" : "Bisukan Audio"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>

              <button
                onClick={handleFullScreen}
                className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md transition-colors"
                title="Skrin Penuh"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Status */}
            <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md text-[11px] font-semibold text-slate-300 border border-slate-750 flex items-center justify-between pointer-events-none">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                Video Demonstrasi Rasmi Coway
              </span>
              <span className="text-slate-400 font-mono">{isPlaying ? 'Sedang Dimainkan' : 'Klik Main'}</span>
            </div>
          </div>
        )}

        {/* Modal Bottom Actions */}
        <div className="p-2.5 bg-slate-850 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-[10px] uppercase font-bold text-sky-400 block">Berminat dengan {product.name}?</span>
            <div className="text-xs text-slate-300 font-medium">
              Hubungi {siteConfig.agentName} untuk penerangan lanjut atau tempahan promosi RM{product.promoMonthly}/bln.
            </div>
          </div>

          <a 
            href={getProductWhatsAppUrl(product.name, product.code)}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tempah {product.name} (WhatsApp)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
