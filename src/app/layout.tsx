import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';
import { FAQS } from '@/data/faqs';

// Self-hosted at build time: replaces the render-blocking Google Fonts @import
// that previously pulled 17 static weights from a third-party origin.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

const OG_IMAGE_URL = 'https://coway-online.web.app/images/og-thumbnail.jpg';
const SITE_TITLE = 'Coway Malaysia – Promosi RM20/Bulan | Johan Adam (HP 748757)';
const SITE_DESC = 'Promosi rasmi Coway Malaysia serendah RM20/bulan. Servis Cody percuma, tukar penapis & waranti penuh bersama Johan Adam, Coway Health Planner sah (Kod HP: 748757).';

export const metadata: Metadata = {
  metadataBase: new URL('https://coway-online.web.app'),
  title: SITE_TITLE,
  description: SITE_DESC,
  keywords: [
    'Coway Malaysia', 
    'Coway Johan Adam', 
    'Coway Villaem 3', 
    'Coway AIS Ice Maker', 
    'Coway Storm 2', 
    'Penapis Air Coway', 
    'Penapis Udara Coway', 
    'Promosi Coway RM20'
  ],
  authors: [{ name: `${siteConfig.agentName} (Coway HP: ${siteConfig.hpCode})` }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: 'https://coway-online.web.app',
    siteName: 'Coway Malaysia - Johan Adam HP',
    type: 'website',
    locale: 'ms_MY',
    images: [
      {
        url: OG_IMAGE_URL,
        secureUrl: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Coway Malaysia - Johan Adam HP 748757',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://coway-online.web.app',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      areaServed: 'MY',
      telephone: `+${siteConfig.phone}`,
      url: 'https://coway-online.web.app',
      image: OG_IMAGE_URL,
      sameAs: [siteConfig.facebookUrl],
      description: `Perkhidmatan rasmi Coway Malaysia oleh ${siteConfig.agentName}, Coway Health Planner sah (Kod HP: ${siteConfig.hpCode}).`,
    },
    {
      '@type': 'Person',
      name: siteConfig.agentName,
      jobTitle: 'Coway Health Planner',
      identifier: siteConfig.hpCode,
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#090D16] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
