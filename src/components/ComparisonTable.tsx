'use client';

import React from 'react';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="perbandingan" className="py-20 bg-slate-950 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-2 block">Perbandingan Pintar</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pelan Sewa Beli Coway Rasmi vs Skim Ansuran Kredit Kedai Luar
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Ketahui perbezaan ketara dari segi penjimatan, jaminan servis berkala dan kemudahan pendaftaran.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-850">
                <th className="p-5 text-sm font-bold text-slate-300 w-1/3">Ciri & Kelebihan</th>
                <th className="p-5 text-sm font-extrabold text-sky-400 bg-slate-900 border-x border-slate-800 w-1/3 text-center">
                  🌟 Pelan Sewa Beli Coway Rasmi
                </th>
                <th className="p-5 text-sm font-bold text-slate-400 w-1/3 text-center">Skim Ansuran Pihak Ketiga</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-sm">
              <tr>
                <td className="p-5 font-semibold text-white">Hubungan Transaksi</td>
                <td className="p-5 bg-slate-900 border-x border-slate-800 text-center font-bold text-sky-300">
                  Terus dengan Syarikat Coway Malaysia
                </td>
                <td className="p-5 text-center text-slate-400">Melalui syarikat pinjaman kredit pihak ketiga</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold text-white">Kadar Faedah (Bunga)</td>
                <td className="p-5 bg-slate-900 border-x border-slate-800 text-center font-bold text-emerald-400">
                  <span className="inline-flex items-center gap-1">✓ 0% Tiada Sebarang Caj Tersembunyi</span>
                </td>
                <td className="p-5 text-center text-rose-400 font-semibold">✕ Ada kadar faedah tinggi & caj lewat bayar</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold text-white">Servis Berkala & Penukaran Penapis</td>
                <td className="p-5 bg-slate-900 border-x border-slate-800 text-center font-bold text-emerald-400">
                  <span className="inline-flex items-center gap-1">✓ Percuma Sepanjang Tempoh Kontrak</span>
                </td>
                <td className="p-5 text-center text-rose-400 font-semibold">✕ Perlu menanggung kos servis & penapis sendiri</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold text-white">Jaminan Penuh & Alat Ganti Asli</td>
                <td className="p-5 bg-slate-900 border-x border-slate-800 text-center font-bold text-emerald-400">
                  <span className="inline-flex items-center gap-1">✓ Jaminan Penuh 5 hingga 7 Tahun</span>
                </td>
                <td className="p-5 text-center text-rose-400 font-semibold">✕ Biasanya terhad kepada 1 tahun sahaja</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold text-white">Syarat Kelayakan Suri Rumah</td>
                <td className="p-5 bg-slate-900 border-x border-slate-800 text-center font-bold text-emerald-400">
                  <span className="inline-flex items-center gap-1">✓ Layak Memohon Tanpa Penjamin</span>
                </td>
                <td className="p-5 text-center text-rose-400 font-semibold">✕ Wajib mempunyai penjamin dan slip gaji</td>
              </tr>
              <tr>
                <td className="p-5 font-semibold text-white">Dokumen Diperlukan</td>
                <td className="p-5 bg-slate-900 border-x border-slate-800 text-center font-bold text-white">
                  Hanya Salinan MyKad Sahaja
                </td>
                <td className="p-5 text-center text-slate-400">Penyata bank 3 bulan, slip gaji dan bil utiliti</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
