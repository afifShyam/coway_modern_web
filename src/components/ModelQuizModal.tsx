'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Sparkles, MessageCircle, X } from 'lucide-react';

interface ModelQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModelQuizModal: React.FC<ModelQuizModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [familySize, setFamilySize] = useState('');
  const [need, setNeed] = useState('');
  const [recommendation, setRecommendation] = useState({
    model: 'Coway Villaem III',
    reason: 'Paling sesuai untuk seisi rumah dengan 4 suhu air & tangki 11.3L.'
  });

  if (!isOpen) return null;

  const handleSelectFamily = (size: string) => {
    setFamilySize(size);
    setStep(2);
  };

  const handleSelectNeed = (selectedNeed: string) => {
    setNeed(selectedNeed);
    
    let model = 'Coway Villaem III';
    let reason = 'Paling seimbang & popular untuk seisi rumah dengan 4 suhu air & tangki 11.3L.';

    if (selectedNeed.includes('Ais')) {
      model = 'Coway AIS Ice Maker';
      reason = 'Dilengkapi sistem pembuat ketulan ais kristal automatik & air sejuk pantas.';
    } else if (selectedNeed.includes('Udara')) {
      model = 'Coway Storm II (Air Purifier)';
      reason = 'Penapis HEPA berkuasa dengan kipas sirkulator jarak jauh untuk udara segar.';
    } else if (selectedNeed.includes('Jimat') || familySize.includes('1-3')) {
      model = 'Coway Neo Plus';
      reason = 'Pakej paling menjimatkan dengan 3 suhu air asas berkualiti tinggi.';
    }

    setRecommendation({ model, reason });
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setFamilySize('');
    setNeed('');
    onClose();
  };

  const quoteMsg = `Hai ${siteConfig.agentName}, saya dah buat kuiz di web. Keperluan saya: ${familySize} & ${need}. Cadangan model: ${recommendation.model}. Boleh bantu quotation?`;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="pro-card p-6 sm:p-8 bg-slate-900 border border-slate-800 max-w-lg w-full relative shadow-2xl">
        <button 
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-850 text-sky-400 mx-auto flex items-center justify-center mb-3 border border-slate-800">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-white">Pencari Model Pintar</h3>
          <p className="text-xs text-slate-400 mt-1">Jawab 2 soalan mudah untuk cadangan model Coway paling tepat.</p>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-300">1. Berapa bilangan ahli keluarga di rumah?</label>
            <div className="grid grid-cols-2 gap-2.5">
              <button 
                onClick={() => handleSelectFamily('1-3 Orang (Keluarga Kecil)')}
                className="p-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-sky-500 text-xs font-bold text-left transition-all"
              >
                🏠 1 - 3 Orang
              </button>
              <button 
                onClick={() => handleSelectFamily('4-6 Orang (Keluarga Sederhana)')}
                className="p-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-sky-500 text-xs font-bold text-left transition-all"
              >
                👨‍👩‍👧‍👦 4 - 6 Orang
              </button>
              <button 
                onClick={() => handleSelectFamily('7+ Orang (Keluarga Besar)')}
                className="p-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-sky-500 text-xs font-bold text-left transition-all"
              >
                🏡 7+ Orang (Besar)
              </button>
              <button 
                onClick={() => handleSelectFamily('Pejabat / Premis')}
                className="p-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-sky-500 text-xs font-bold text-left transition-all"
              >
                🏢 Pejabat / Premis
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-300">2. Apakah keperluan utama anda?</label>
            <div className="grid grid-cols-2 gap-2.5">
              <button 
                onClick={() => handleSelectNeed('Air Panas & Sejuk')}
                className="p-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-sky-500 text-xs font-bold text-left transition-all"
              >
                ☕ Air Panas & Sejuk
              </button>
              <button 
                onClick={() => handleSelectNeed('Ais Batu Kristal')}
                className="p-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-sky-500 text-xs font-bold text-left transition-all"
              >
                🧊 Ais Batu Segera
              </button>
              <button 
                onClick={() => handleSelectNeed('Udara Bersih Bebas Alahan')}
                className="p-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-sky-500 text-xs font-bold text-left transition-all"
              >
                🐱 Bebas Alahan & Bulu
              </button>
              <button 
                onClick={() => handleSelectNeed('Pakej Paling Jimat')}
                className="p-3 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-800 hover:border-sky-500 text-xs font-bold text-left transition-all"
              >
                💰 Pakej Paling Jimat
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Result */}
        {step === 3 && (
          <div className="text-center space-y-4 pt-3">
            <div className="p-4 rounded-xl bg-slate-850 border border-slate-800">
              <div className="text-[10px] text-sky-400 font-extrabold uppercase">Cadangan Terbaik Untuk Anda</div>
              <div className="text-lg font-black text-white mt-0.5">{recommendation.model}</div>
              <p className="text-xs text-slate-400 mt-1">{recommendation.reason}</p>
            </div>
            
            <a 
              href={getWhatsAppUrl(quoteMsg)}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" /> Dapatkan Sebut Harga Model Ini
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
