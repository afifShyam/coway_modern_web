'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { PRODUCTS, CATEGORY_TABS, CATEGORY_COUNTS } from '@/data/products';
import { ProductCategory, Product } from '@/types/product';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetailModal } from '@/components/ProductDetailModal';
import { ImageLightboxModal } from '@/components/ImageLightboxModal';
import { ProductVideoModal } from '@/components/ProductVideoModal';
import { parsePrice } from '@/lib/pricing';
import {
  Search,
  Sparkles,
  LayoutGrid,
  List,
  ChevronDown,
  Layers,
  Droplets,
  Wind,
  Armchair,
  Bed,
  Snowflake,
  Refrigerator,
  Bath,
  type LucideIcon
} from 'lucide-react';

const CATEGORY_ICONS: Record<ProductCategory, LucideIcon> = {
  all: Sparkles,
  water: Droplets,
  air: Wind,
  relax: Armchair,
  berex: Bed,
  aircond: Snowflake,
  refrigerator: Refrigerator,
  bathroom: Bath
};


interface ProductCatalogProps {
  category: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
  /** Catalog id requested from elsewhere on the page; opens its detail view. */
  focusProductId?: string | null;
  onFocusHandled?: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  category: selectedCategory,
  onCategoryChange,
  focusProductId,
  onFocusHandled
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<'all' | 'under60' | '60to90' | 'above90'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Mobile Pagination / View Limiter to avoid scrolling fatigue
  const [visibleCount, setVisibleCount] = useState<number>(8);

  // The tab strip scrolls horizontally, so a category chosen elsewhere (banners,
  // quick-nav drawer) can land off-screen and leave the catalog looking unfiltered.
  const tabStripRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const strip = tabStripRef.current;
    const active = strip?.querySelector<HTMLElement>('[data-active="true"]');
    if (!strip || !active) return;
    strip.scrollTo({
      left: Math.max(0, active.offsetLeft - (strip.clientWidth - active.clientWidth) / 2),
      behavior: 'smooth'
    });
  }, [selectedCategory]);

  // Modal States
  const [activeDetailProduct, setActiveDetailProduct] = useState<Product | null>(null);
  const [activeLightboxProduct, setActiveLightboxProduct] = useState<Product | null>(null);
  const [initialColorForModal, setInitialColorForModal] = useState<string | undefined>(undefined);
  const [activeVideoProduct, setActiveVideoProduct] = useState<Product | null>(null);

  // A recommendation elsewhere on the page (lifestyle guide) asked for a model:
  // narrow the catalog to its category and open its detail view.
  useEffect(() => {
    if (!focusProductId) return;
    const product = PRODUCTS.find((p) => p.id === focusProductId);
    if (product) {
      setSearchQuery('');
      setPriceFilter('all');
      onCategoryChange(product.category);
      setActiveDetailProduct(product);
    }
    onFocusHandled?.();
  }, [focusProductId]);

  // Filtered & Sorted Product List
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // 2. Search query (search in name, code, tags, description)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // 3. Price bracket filter
    if (priceFilter !== 'all') {
      result = result.filter(p => {
        const val = parsePrice(p.regularMonthly);
        if (priceFilter === 'under60') return val < 60;
        if (priceFilter === '60to90') return val >= 60 && val <= 90;
        if (priceFilter === 'above90') return val > 90;
        return true;
      });
    }

    // 4. Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => parsePrice(a.regularMonthly) - parsePrice(b.regularMonthly));
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => parsePrice(b.regularMonthly) - parsePrice(a.regularMonthly));
    }

    return result;
  }, [selectedCategory, searchQuery, priceFilter, sortBy]);

  // "Semua Produk" is paginated to 8 to limit mobile scroll fatigue; a narrowed
  // category is short enough to show in full.
  const handleCategorySelect = (catId: ProductCategory) => {
    onCategoryChange(catId);
    setVisibleCount(catId === 'all' ? 8 : 20);
  };

  const displayedProducts = selectedCategory === 'all' && !searchQuery && priceFilter === 'all'
    ? filteredProducts.slice(0, visibleCount)
    : filteredProducts;

  return (
    <section id="produk" className="py-8 sm:py-16 bg-[#090D16] border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-8 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950 text-sky-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 border border-sky-800">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Katalog Rasmi 2026</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Pilihan Model & Senarai Harga Penuh
            </h2>
            <p className="mt-1 text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Semua harga bulanan dipaparkan secara telus. Tekan mana-mana model untuk spesifikasi penuh.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 bg-[#111726] border border-slate-800 rounded-2xl shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`py-1.5 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'grid' 
                  ? 'bg-sky-600 text-white shadow-xs' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`py-1.5 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'list' 
                  ? 'bg-sky-600 text-white shadow-xs' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Senarai</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (Horizontal Scrollable on Mobile) */}
        <div ref={tabStripRef} className="mb-4 sm:mb-6 overflow-x-auto scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 pb-1">
            {CATEGORY_TABS.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              const Icon = CATEGORY_ICONS[tab.id];
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleCategorySelect(tab.id)}
                  aria-pressed={isSelected}
                  data-active={isSelected}
                  className={`py-2 px-3 sm:px-4 rounded-xl sm:rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 shadow-xs active:scale-95 ${
                    isSelected
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'bg-[#111726] text-slate-300 hover:text-white hover:bg-[#162035] border border-slate-800'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-sky-400'}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {CATEGORY_COUNTS[tab.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="p-3 sm:p-4 rounded-2xl bg-[#111726] border border-slate-800 mb-4 sm:mb-6 space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari model (cth: Villaem, AIS, Storm)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#0A0F1D] border border-slate-800 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
              />
            </div>

            {/* Price Filter Dropdown */}
            <div>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#0A0F1D] border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500"
              >
                <option value="all">Semua Julat Bajet</option>
                <option value="under60">Bawah RM60 / bulan (Paling Jimat)</option>
                <option value="60to90">RM60 - RM90 / bulan (Popular)</option>
                <option value="above90">Lebih RM90 / bulan (Premium & Besar)</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#0A0F1D] border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-sky-500"
              >
                <option value="default">Susunan: Pilihan Utama</option>
                <option value="price-asc">Harga: Rendah ke Tinggi</option>
                <option value="price-desc">Harga: Tinggi ke Rendah</option>
              </select>
            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <div>
              Menjumpai <strong className="text-white">{filteredProducts.length}</strong> model Coway
              {selectedCategory !== 'all' && <span> dalam kategori terpilih</span>}
            </div>
            {(searchQuery || priceFilter !== 'all' || sortBy !== 'default') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setPriceFilter('all');
                  setSortBy('default');
                }}
                className="text-sky-400 hover:text-sky-300 font-bold hover:underline"
              >
                Set Semula
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Container (Grid / List) */}
        {displayedProducts.length > 0 ? (
          <>
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4" 
                : "space-y-3"
            }>
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                  onOpenDetail={(prod) => setActiveDetailProduct(prod)}
                  onOpenLightbox={(prod, color) => {
                    setActiveLightboxProduct(prod);
                    setInitialColorForModal(color);
                  }}
                  onOpenVideo={(prod) => setActiveVideoProduct(prod)}
                />
              ))}
            </div>

            {/* "Tunjukkan Lagi Model" Button (Reduces mobile scrolling fatigue) */}
            {selectedCategory === 'all' && !searchQuery && priceFilter === 'all' && visibleCount < filteredProducts.length && (
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount(prev => prev + 12)}
                  className="px-6 py-3 rounded-2xl bg-[#111726] hover:bg-[#162035] border border-slate-800 hover:border-sky-500 text-white font-black text-xs sm:text-sm shadow-xl transition-all active:scale-95 inline-flex items-center gap-2"
                >
                  <Layers className="w-4 h-4 text-sky-400" />
                  <span>Lihat {filteredProducts.length - visibleCount} Lagi Model Coway</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="p-8 text-center rounded-3xl bg-[#111726] border border-slate-800 space-y-3">
            <div className="text-3xl">🔍</div>
            <h3 className="text-base font-bold text-white">Tiada Produk Ditemui</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Sila cuba ubah kata kunci carian atau tetapkan semula julat bajet anda.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setPriceFilter('all');
                onCategoryChange('all');
              }}
              className="px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold"
            >
              Tunjukkan Semua Produk
            </button>
          </div>
        )}

      </div>

      {/* Modals */}
      {activeDetailProduct && (
        <ProductDetailModal
          product={activeDetailProduct}
          isOpen={Boolean(activeDetailProduct)}
          onClose={() => setActiveDetailProduct(null)}
          onOpenLightbox={(prod, color) => {
            setActiveLightboxProduct(prod);
            setInitialColorForModal(color);
          }}
        />
      )}

      {activeLightboxProduct && (
        <ImageLightboxModal
          product={activeLightboxProduct}
          initialColor={initialColorForModal}
          isOpen={Boolean(activeLightboxProduct)}
          onClose={() => setActiveLightboxProduct(null)}
        />
      )}

      {activeVideoProduct && (
        <ProductVideoModal
          product={activeVideoProduct}
          isOpen={Boolean(activeVideoProduct)}
          onClose={() => setActiveVideoProduct(null)}
        />
      )}

    </section>
  );
};
