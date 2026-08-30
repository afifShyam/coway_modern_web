'use client';

import React, { useState } from 'react';
import { ProductCategory } from '@/types/product';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CategoryBanners } from '@/components/CategoryBanners';
import { ProductCatalog } from '@/components/ProductCatalog';
import { MobileBottomDock } from '@/components/MobileBottomDock';
import { MobileQuickNavDrawer } from '@/components/MobileQuickNavDrawer';
import { ModelQuizModal } from '@/components/ModelQuizModal';
import { ScrollToTop } from '@/components/ScrollToTop';

interface SiteShellProps {
  /** Static sections rendered on the server, slotted between the catalog and the footer. */
  midSections: React.ReactNode;
  belowCatalog: React.ReactNode;
}

/**
 * Owns the only interactive state shared across sections: the quiz modal, the quick-jump
 * drawer, and the catalog category. Everything slotted through props stays a Server Component.
 */
export const SiteShell: React.FC<SiteShellProps> = ({ midSections, belowCatalog }) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [category, setCategory] = useState<ProductCategory>('all');

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

      {midSections}

      <ProductCatalog category={category} onCategoryChange={setCategory} />

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
