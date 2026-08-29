'use client';

import React, { useState, useMemo } from 'react';
import { ProductCategory, Product } from '@/types/product';
import { PRODUCTS, CATEGORY_TABS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { ImageLightboxModal } from '@/components/ImageLightboxModal';
import { ProductVideoModal } from '@/components/ProductVideoModal';
import { Search, SearchX, LayoutGrid, List, SlidersHorizontal } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Specs Detail Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProductColor, setSelectedProductColor] = useState<string | undefined>(undefined);
  
  // Image Lightbox Viewer State
  const [lightboxProduct, setLightboxProduct] = useState<Product | null>(null);
  const [lightboxColor, setLightboxColor] = useState<string | undefined>(undefined);

  // Video Demo Modal State
  const [videoProduct, setVideoProduct] = useState<Product | null>(null);

  const [priceFilter, setPriceFilter] = useState<'all' | 'under60' | 'under90' | 'luxury'>('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product: Product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const numPrice = parseInt(product.regularMonthly.replace(/[^0-9]/g, '')) || 0;
      let matchesPrice = true;
      if (priceFilter === 'under60') matchesPrice = numPrice <= 60;
      else if (priceFilter === 'under90') matchesPrice = numPrice > 60 && numPrice <= 90;
      else if (priceFilter === 'luxury') matchesPrice = numPrice > 90;

      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategory, searchQuery, priceFilter]);

  const handleOpenDetail = (product: Product, color?: string) => {
    setSelectedProduct(product);
    setSelectedProductColor(color);
  };

  const handleOpenLightbox = (product: Product, color?: string) => {
    setLightboxProduct(product);
    setLightboxColor(color);
  };

  const handleOpenVideo = (product: Product) => {
    setVideoProduct(product);
  };

  return (
    <section id="produk" className="py-12 sm:py-20 bg-slate-900 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <span className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-1.5 block">
              Katalog Lengkap & Video Demo Setiap Model
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Katalog Produk & Senarai Harga Rasmi
            </h2>
            <p className="mt-1 text-slate-400 text-xs sm:text-base">
              Klik gambar untuk melihat paparan resolusi tinggi atau tonton video demo fungsi setiap model.
            </p>
          </div>

          {/* Search Bar & View Mode Switcher */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-72">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari model: Villaem, Pebble, Ais..." 
                className="w-full pl-9 pr-4 py-2 rounded-full bg-slate-850 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            {/* View Switcher Toggle (Grid vs List) */}
            <div className="flex items-center p-1 rounded-full bg-slate-850 border border-slate-700 shrink-0">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'}`}
                title="Grid View (2-Lajur)"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-full transition-colors ${viewMode === 'list' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'}`}
                title="List View (Padat)"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Sticky-Friendly Horizontal Category Tabs */}
        <div className="sticky top-16 sm:top-20 z-30 bg-slate-900/95 backdrop-blur-md py-2.5 -mx-3 px-3 sm:mx-0 sm:px-0 border-y border-slate-800/80 mb-6 overflow-x-auto scrollbar-none flex items-center justify-between gap-2">
          
          <div className="flex items-center gap-1.5 shrink-0">
            {CATEGORY_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              const count = tab.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === tab.id).length;

              return (
                <button 
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border flex items-center gap-1.5 ${
                    isActive 
                      ? 'bg-sky-600 text-white border-sky-600 shadow-sm' 
                      : 'bg-slate-850 hover:bg-slate-800 text-slate-300 border-slate-800'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-sky-800 text-sky-100' : 'bg-slate-800 text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Price Filter Dropdown on Desktop */}
          <div className="hidden lg:flex items-center gap-1 shrink-0 text-xs text-slate-400">
            <SlidersHorizontal className="w-3.5 h-3.5 text-sky-400" />
            <select 
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value as any)}
              className="bg-slate-850 border border-slate-700 text-white text-xs rounded-lg px-2 py-1 focus:outline-none focus:border-sky-500"
            >
              <option value="all">Semua Bajet</option>
              <option value="under60">Bajet &le; RM60/bln</option>
              <option value="under90">Sederhana (RM61 - RM90/bln)</option>
              <option value="luxury">Premium (&gt; RM90/bln)</option>
            </select>
          </div>
        </div>

        {/* Products Grid / List */}
        {filteredProducts.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6" 
              : "flex flex-col gap-2.5"
          }>
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                viewMode={viewMode}
                onSelectDetail={(p, color) => handleOpenDetail(p, color)}
                onOpenLightbox={(p, color) => handleOpenLightbox(p, color)}
                onOpenVideo={(p) => handleOpenVideo(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <SearchX className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white">Tiada Produk Ditemui</h4>
            <p className="text-xs text-slate-400">Sila cuba kata kunci carian atau tetapan penapis yang lain.</p>
          </div>
        )}

      </div>

      {/* Full Specs Modal */}
      <ProductDetailModal 
        product={selectedProduct} 
        initialColor={selectedProductColor}
        onClose={() => setSelectedProduct(null)} 
        onOpenLightbox={(p, color) => {
          setSelectedProduct(null);
          handleOpenLightbox(p, color);
        }}
        onOpenVideo={(p) => {
          setSelectedProduct(null);
          handleOpenVideo(p);
        }}
      />

      {/* Crystal Clear Image Lightbox Viewer */}
      <ImageLightboxModal 
        product={lightboxProduct}
        initialColor={lightboxColor}
        onClose={() => setLightboxProduct(null)}
      />

      {/* Product Video Demo Modal */}
      <ProductVideoModal 
        product={videoProduct}
        onClose={() => setVideoProduct(null)}
      />
    </section>
  );
};
