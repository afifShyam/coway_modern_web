'use client';

import React, { useState, useMemo } from 'react';
import { ProductCategory, Product } from '@/types/product';
import { PRODUCTS, CATEGORY_TABS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Search, SearchX } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product: Product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="produk" className="py-20 bg-slate-900 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-2 block">
              Katalog Lengkap & Harga Telus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Katalog Produk & Senarai Harga Rasmi
            </h2>
            <p className="mt-2 text-slate-400 text-base">
              Setiap model dipaparkan dengan jelas: <strong>Harga Promo RM20</strong>, <strong>Sewa Normal</strong>, dan <strong>Harga Tunai</strong>.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari model: Villaem, Storm, Ais..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-850 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-all shadow-inner"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button 
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                  isActive 
                    ? 'bg-sky-600 text-white border-sky-600 shadow-sm' 
                    : 'bg-slate-850 hover:bg-slate-800 text-slate-300 border-slate-800'
                }`}
              >
                {tab.label} {tab.id !== 'all' && `(${PRODUCTS.filter(p => p.category === tab.id).length})`}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <SearchX className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white">Tiada Produk Ditemui</h4>
            <p className="text-xs text-slate-400">Sila cuba kata kunci carian yang lain.</p>
          </div>
        )}

      </div>
    </section>
  );
};
