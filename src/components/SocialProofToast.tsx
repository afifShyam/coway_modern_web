'use client';

import React, { useState, useEffect } from 'react';

const TOAST_DATA = [
  { name: 'Aiman', loc: 'Shah Alam', item: 'Villaem III', time: '2 minit yang lalu' },
  { name: 'Nurul', loc: 'Johor Bahru', item: 'AIS (Pembuat Ais)', time: '5 minit yang lalu' },
  { name: 'Farid', loc: 'Petaling Jaya', item: 'Storm II (Penulen Udara)', time: '8 minit yang lalu' },
  { name: 'Siti Sarah', loc: 'Bangi', item: 'Tilam Hotel BEREX', time: '12 minit yang lalu' },
  { name: 'Kevin Tan', loc: 'Pulau Pinang', item: 'Penyaman Udara Inverter', time: '15 minit yang lalu' },
  { name: 'Zulkifli', loc: 'Kuantan', item: 'Kerusi Urut BEREX Pebble', time: '18 minit yang lalu' }
];

export const SocialProofToast: React.FC = () => {
  const [currentToast, setCurrentToast] = useState<{ name: string; loc: string; item: string; time: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const trigger = () => {
      const randomItem = TOAST_DATA[Math.floor(Math.random() * TOAST_DATA.length)];
      setCurrentToast(randomItem);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4500);
    };

    const initialTimeout = setTimeout(trigger, 3000);
    const interval = setInterval(trigger, 12000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentToast) return null;

  return (
    <div 
      className={`fixed bottom-20 lg:bottom-6 left-4 z-40 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-slate-900 px-4 py-3 rounded-xl border border-slate-800 shadow-xl flex items-center gap-3 max-w-xs">
        <div className="w-8 h-8 rounded-lg bg-slate-850 flex items-center justify-center text-sky-400 shrink-0 text-sm border border-slate-800">
          💧
        </div>
        <div>
          <div className="text-xs font-bold text-white">{currentToast.name} dari {currentToast.loc}</div>
          <div className="text-[11px] text-slate-400">Baru melanggan {currentToast.item} • {currentToast.time}</div>
        </div>
      </div>
    </div>
  );
};
