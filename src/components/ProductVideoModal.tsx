'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { siteConfig } from '@/data/siteConfig';
import { getProductWhatsAppUrl, getProductEmallUrl } from '@/lib/whatsapp';
import { useDialog } from '@/hooks/useDialog';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, MessageCircle, Video, ShoppingCart, Sparkles } from 'lucide-react';

interface ProductVideoModalProps {
  product: Product | null;
  isOpen?: boolean;
  onClose: () => void;
}

export const ProductVideoModal: React.FC<ProductVideoModalProps> = ({ product, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (product && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay with audio might be blocked by browser policy, try muted
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            }
          });
      }
    }
  }, [product]);

  // Handle Space bar to toggle play/pause
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  const dialogRef = useDialog(Boolean(product && product.videoUrl), onClose);

  if (!product || !product.videoUrl) return null;

  const emallLink = getProductEmallUrl(product.emallUrl);

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

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setCurrentTime(current);
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || duration <= 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = clickPosition * duration;
  };

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const videoTitle = product.videoTitle || `Video Demonstrasi Rasmi ${product.name}`;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div 
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        className="relative max-w-3xl w-full bg-slate-900 rounded-3xl p-3.5 sm:p-5 border border-slate-800 shadow-2xl overflow-hidden space-y-4"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-2 pt-1">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-sky-950 text-sky-400 border border-sky-800">
              <Video className="w-4 h-4" />
            </span>
            <div>
              <h3 id="video-modal-title" className="text-sm sm:text-base font-bold text-white leading-tight">
                {videoTitle}
              </h3>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <span>{product.code}</span>
                <span>•</span>
                <span className="text-sky-400 font-bold">Kadar Promo RM{product.promoMonthly}/bln</span>
              </div>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-750 transition-colors"
            title="Tutup (ESC)"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container (100% Reliable HTML5 Video) */}
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
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-contain"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Play/Pause Overlay when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-sky-600/90 text-white flex items-center justify-center shadow-2xl transform scale-100 group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 ml-1 fill-white" />
              </div>
            </div>
          )}

          {/* Top Quick Control Overlays */}
          <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
            <button
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md transition-colors"
              title={isMuted ? "Buka Audio" : "Bisukan Audio"}
              aria-label={isMuted ? "Buka Audio" : "Bisukan Audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
            </button>

            <button
              onClick={handleFullScreen}
              className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md transition-colors"
              title="Skrin Penuh"
              aria-label="Skrin Penuh"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

          </div>

          {/* Bottom Custom Scrub Bar & Controls */}
          <div 
            className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-6 flex flex-col gap-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Progress Bar */}
            <div 
              onClick={handleSeek}
              className="w-full h-1.5 bg-slate-700/80 hover:h-2 rounded-full cursor-pointer overflow-hidden transition-all relative"
            >
              <div 
                className="h-full bg-sky-400 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Play/Pause & Time Display */}
            <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-3">
                <button 
                  onClick={togglePlay}
                  className="hover:text-white transition-colors"
                  aria-label={isPlaying ? "Jeda Video" : "Main Video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <span>
                  {formatTime(currentTime)} / {formatTime(duration || 0)}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Video Resolusi Tinggi Coway</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-3 bg-slate-850 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-[10px] uppercase font-bold text-sky-400 block">Berminat dengan {product.name}?</span>
            <div className="text-xs text-slate-300 font-medium">
              Beli terus di E-Mall atau WhatsApp {siteConfig.agentName} ({siteConfig.hpCode}) untuk tawaran RM{product.promoMonthly}/bln.
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Online Purchase */}
            <a 
              href={emallLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md whitespace-nowrap"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Beli di E-Mall</span>
            </a>

            {/* WhatsApp CTA */}
            <a 
              href={getProductWhatsAppUrl(product.name, product.code)}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
