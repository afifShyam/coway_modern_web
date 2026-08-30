import React from 'react';
import { SiteShell } from '@/components/SiteShell';
import { GlobalAuthority } from '@/components/GlobalAuthority';
import { Testimonials } from '@/components/Testimonials';
import { PromoMatrix } from '@/components/PromoMatrix';
import { TrustBento } from '@/components/TrustBento';
import { ComparisonTable } from '@/components/ComparisonTable';
import { RoadmapSteps } from '@/components/RoadmapSteps';
import { LeadForm } from '@/components/LeadForm';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

/**
 * Server Component. Only SiteShell and the genuinely interactive sections ship JavaScript;
 * every section passed as a slot below renders to static HTML.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#090D16] text-slate-100 selection:bg-sky-500/30 selection:text-white pb-24 sm:pb-12">
      <SiteShell
        belowCatalog={
          <>
            <GlobalAuthority />
            <Testimonials />
            <PromoMatrix />
            <TrustBento />
            <ComparisonTable />
            <RoadmapSteps />
            <LeadForm />
            <FAQ />
            <Footer />
          </>
        }
      />
    </main>
  );
}
