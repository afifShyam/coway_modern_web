'use client';

import React, { useState } from 'react';
import { ProductCategory } from '@/types/product';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CategoryBanners } from '@/components/CategoryBanners';
import { LifestyleGuide } from '@/components/LifestyleGuide';
import { ProductCatalog } from '@/components/ProductCatalog';
import { MobileBottomDock } from '@/components/MobileBottomDock';
import { MobileQuickNavDrawer } from '@/components/MobileQuickNavDrawer';
import { ModelQuizModal } from '@/components/ModelQuizModal';
import { ScrollToTop } from '@/components/ScrollToTop';

interface SiteShellProps {
  belowCatalog: React.ReactNode;
}

/**
 * Owns the only interactive state shared across sections: the quiz modal, the quick-jump
 * drawer, and the catalog category. Everything slotted through props stays a Server Component.
 */
export const SiteShell: React.FC<SiteShellProps> = ({ belowCatalog }) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [category, setCategory] = useState<ProductCategory>('all');
  const [focusProductId, setFocusProductId] = useState<string | null>(null);

  return (
    <>
      <Navbar
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenMenu={() => setIsDrawerOpen(true)}
      />

      <Hero onOpenQuiz={() => setIsQuizOpen(true)} />

      <div id="kategori">
        <CategoryBanners onSelectCategory={setCategory} />
      </div>

      <LifestyleGuide onFocusProduct={setFocusProductId} />

      <ProductCatalog
        category={category}
        onCategoryChange={setCategory}
        focusProductId={focusProductId}
        onFocusHandled={() => setFocusProductId(null)}
      />

      {belowCatalog}

      <ScrollToTop />

      <MobileBottomDock onOpenMenu={() => setIsDrawerOpen(true)} />

      <MobileQuickNavDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectCategory={setCategory}
      />

      <ModelQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  );
};
