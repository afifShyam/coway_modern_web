'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustBento } from '@/components/TrustBento';
import { ProductCatalog } from '@/components/ProductCatalog';
import { PromoMatrix } from '@/components/PromoMatrix';
import { RoadmapSteps } from '@/components/RoadmapSteps';
import { ComparisonTable } from '@/components/ComparisonTable';
import { LeadForm } from '@/components/LeadForm';
import { Footer } from '@/components/Footer';
import { MobileBottomDock } from '@/components/MobileBottomDock';
import { ModelQuizModal } from '@/components/ModelQuizModal';

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white pb-20 lg:pb-0">
      {/* Navbar with Announcement bar */}
      <Navbar onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* Why Choose Coway Bento */}
      <TrustBento />

      {/* Full Product Catalog with dynamic filters and search */}
      <ProductCatalog />

      {/* RM20 Contract Promotion Matrix */}
      <PromoMatrix />

      {/* 5-Step Digital Booking Roadmap */}
      <RoadmapSteps />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Health Planner Bio & Lead Capture */}
      <LeadForm />

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Dock */}
      <MobileBottomDock onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* Smart Model Finder Quiz Modal */}
      <ModelQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </main>
  );
}
