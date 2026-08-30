'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { useDialog } from '@/hooks/useDialog';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { Sparkles, X } from 'lucide-react';

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
    reason: 'Paling sesuai untuk seisi keluarga dengan 4 pilihan suhu air dan tangki besar 11.3 Liter.'
  });
  const dialogRef = useDialog(isOpen, onClose);

  if (!isOpen) return null;

  const handleSelectFamily = (size: string) => {
    setFamilySize(size);
    setStep(2);
  };

  const handleSelectNeed = (selectedNeed: string) => {
    setNeed(selectedNeed);
    
    let model = 'Coway Villaem III';
    let reason = 'Paling seimbang dan popular untuk seisi keluarga dengan 4 pilihan suhu air dan tangki 11.3 Liter.';

    if (selectedNeed.includes('Ais')) {
      model = 'Coway AIS (Pembuat Ais)';
      reason = 'Dilengkapi sistem pembuat ketulan ais kristal automatik dan pengeluaran air sejuk pantas.';
    } else if (selectedNeed.includes('Udara')) {
      model = 'Coway Storm II (Penapis Udara)';
      reason = 'Penapis udara berpenapis HEPA H13 dengan kipas pengitar jarak jauh 10 meter untuk udara segar.';
    } else if (selectedNeed.includes('Urut') || selectedNeed.includes('Relaks')) {
      model = 'Kerusi Urut BEREX Senno';
      reason = 'Kerusi urut kompak premium dengan pemanas haba badan dan kedudukan Graviti Sifar.';
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

  const quoteMsg = `Hai ${siteConfig.agentName}, saya telah melengkapkan kuiz di laman web. Keperluan saya: ${familySize} & ${need}. Cadangan model: ${recommendation.model}. Boleh bantu berikan sebut harga rasmi?`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quiz-modal-title"
        className="pro-card p-6 sm:p-8 bg-[#0D1322] border border-slate-800 max-w-lg w-full rounded-3xl relative shadow-2xl animate-in zoom-in-95 duration-200 text-white"
      >
        <button 
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-950 text-sky-400 mx-auto flex items-center justify-center mb-3 border border-sky-800 shadow-xs">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 id="quiz-modal-title" className="text-xl font-black text-white">Kuiz Model Pintar</h3>
          <p className="text-xs text-slate-400 mt-1">Jawab 2 soalan mudah untuk mendapatkan cadangan model Coway yang paling tepat.</p>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-300">1. Berapakah bilangan ahli keluarga di rumah anda?</label>
            <div className="grid grid-cols-2 gap-2.5">
              <button 
                type="button"
                onClick={() => handleSelectFamily('1-3 Orang (Keluarga Kecil)')}
                className="p-3.5 rounded-2xl bg-[#111726] hover:bg-[#162035] border border-slate-800 hover:border-sky-500 text-xs font-bold text-white text-left transition-all shadow-xs active:scale-95"
              >
                🏠 1 - 3 Orang
              </button>
              <button 
                type="button"
                onClick={() => handleSelectFamily('4-6 Orang (Keluarga Sederhana)')}
                className="p-3.5 rounded-2xl bg-[#111726] hover:bg-[#162035] border border-slate-800 hover:border-sky-500 text-xs font-bold text-white text-left transition-all shadow-xs active:scale-95"
              >
                👨‍👩‍👧‍👦 4 - 6 Orang
              </button>
              <button 
                type="button"
                onClick={() => handleSelectFamily('7+ Orang (Keluarga Besar)')}
                className="p-3.5 rounded-2xl bg-[#111726] hover:bg-[#162035] border border-slate-800 hover:border-sky-500 text-xs font-bold text-white text-left transition-all shadow-xs active:scale-95"
              >
                👨‍👩‍👧‍👦 7+ Orang
              </button>
              <button 
                type="button"
                onClick={() => handleSelectFamily('Pejabat / Premis Perniagaan')}
                className="p-3.5 rounded-2xl bg-[#111726] hover:bg-[#162035] border border-slate-800 hover:border-sky-500 text-xs font-bold text-white text-left transition-all shadow-xs active:scale-95"
              >
                🏢 Pejabat / Kedai
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-300">2. Apakah ciri paling utama yang anda perlukan?</label>
            <div className="grid grid-cols-2 gap-2.5">
              <button 
                type="button"
                onClick={() => handleSelectNeed('4 Suhu Lengkap untuk Seisi Keluarga')}
                className="p-3.5 rounded-2xl bg-[#111726] hover:bg-[#162035] border border-slate-800 hover:border-sky-500 text-xs font-bold text-white text-left transition-all shadow-xs active:scale-95"
              >
                💧 4 Suhu Air Lengkap
              </button>
              <button 
                type="button"
                onClick={() => handleSelectNeed('Ketulan Ais Kristal Segera')}
                className="p-3.5 rounded-2xl bg-[#111726] hover:bg-[#162035] border border-slate-800 hover:border-sky-500 text-xs font-bold text-white text-left transition-all shadow-xs active:scale-95"
              >
                🧊 Pembuat Ais Kristal
              </button>
              <button 
                type="button"
                onClick={() => handleSelectNeed('Pilihan Paling Jimat Bulanan')}
                className="p-3.5 rounded-2xl bg-[#111726] hover:bg-[#162035] border border-slate-800 hover:border-sky-500 text-xs font-bold text-white text-left transition-all shadow-xs active:scale-95"
              >
                💰 Paling Jimat Bajet
              </button>
              <button 
                type="button"
                onClick={() => handleSelectNeed('Penapis Udara Basmi Alahan & Resdung')}
                className="p-3.5 rounded-2xl bg-[#111726] hover:bg-[#162035] border border-slate-800 hover:border-sky-500 text-xs font-bold text-white text-left transition-all shadow-xs active:scale-95"
              >
                🍃 Penapis Udara HEPA
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-sky-950/60 border border-sky-800">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-sky-400 block mb-1">
                Cadangan Model Sesuai Untuk Anda:
              </span>
              <h4 className="text-xl font-black text-white">{recommendation.model}</h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{recommendation.reason}</p>
            </div>

            <div className="space-y-2">
              <a
                href={getWhatsAppUrl(quoteMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Minta Sebut Harga di WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-white font-bold transition-colors"
              >
                Ulang Semula Kuiz
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
