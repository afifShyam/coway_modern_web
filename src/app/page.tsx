'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductCatalog } from '@/components/ProductCatalog';
import { PromoMatrix } from '@/components/PromoMatrix';
import { TrustBento } from '@/components/TrustBento';
import { ComparisonTable } from '@/components/ComparisonTable';
import { RoadmapSteps } from '@/components/RoadmapSteps';
import { LeadForm } from '@/components/LeadForm';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { StickyWhatsAppCTA } from '@/components/StickyWhatsAppCTA';
import { ModelQuizModal } from '@/components/ModelQuizModal';

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* 1. Navbar with Announcement bar */}
      <Navbar onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* 2. Hero Section (Agent Identity, Value Headline, WhatsApp CTA, 4 Popular Models & Johan Helper) */}
      <Hero onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* 3. Full Product Catalog with top RM20 explainer, transparent pricing and search/filters */}
      <ProductCatalog />

      {/* 4. RM20 Contract Promotion Matrix & Alternative Promo Offers */}
      <PromoMatrix />

      {/* 5. 8 Sebab Pilih Coway (Quality & Compliance Assurances) */}
      <TrustBento />

      {/* 6. Comparison Table (Sewa Beli Coway vs Beli Terus) */}
      <ComparisonTable />

      {/* 7. 5-Step Digital Booking Roadmap */}
      <RoadmapSteps />

      {/* 8. Health Planner Bio, Video Showcase & Zero-Friction Consultation */}
      <LeadForm />

      {/* 9. FAQ (Soalan Lazim) */}
      <FAQ />

      {/* 10. Footer with Full Disclaimer */}
      <Footer />

      {/* 11. Sticky Mobile WhatsApp CTA Pill */}
      <StickyWhatsAppCTA />

      {/* 12. Smart Model Finder Quiz Modal */}
      <ModelQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </main>
  );
}
