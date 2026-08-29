import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <head>
        {/* Direct OpenGraph and WhatsApp Link Preview Tags */}
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESC} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Coway Malaysia - Johan Adam HP 748757" />
        <meta property="og:url" content="https://coway-online.web.app" />
        <meta property="og:type" content="website" />
        
        {/* Fallback for legacy crawlers */}
        <link rel="image_src" href={OG_IMAGE_URL} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
