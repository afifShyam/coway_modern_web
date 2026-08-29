import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
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
  authors: [{ name: siteConfig.agentName }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    locale: 'ms_MY',
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://coway.cc/wp-content/uploads/2026/01/coway-villaem3-CHP-7320L.png',
        width: 1200,
        height: 630,
        alt: 'Coway Malaysia Official - Johan Adam HP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
