# Coway Modern Web Application (Next.js + TypeScript + Tailwind CSS)

High-performance, modern web application designed for Coway Health Planner **Johan Adam (HP Code: 745394)**. Built with modern architecture, type safety, modular components, and optimized for high-conversion e-commerce.

## 🚀 Tech Stack & Architecture

- **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS (Pro Slate Dark Theme)
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans (Next.js Font Optimization)

---

## 📁 Directory Structure

```
coway_modern_web/
├── src/
│   ├── app/                    # Next.js App Router (Layout, Page, CSS)
│   │   ├── globals.css         # Global Tailwind & theme tokens
│   │   ├── layout.tsx          # Root layout & SEO Metadata (OpenGraph)
│   │   └── page.tsx            # Main Landing Page Composition
│   ├── components/             # Modular, reusable UI components
│   │   ├── Navbar.tsx          # Sticky frosted header & top announcement
│   │   ├── Hero.tsx            # Hero section with 3D product showcase
│   │   ├── TrustBento.tsx      # Bento grid for brand authority & Halal certs
│   │   ├── ProductCatalog.tsx  # Dynamic category tabs & real-time search
│   │   ├── ProductCard.tsx     # Transparent pricing card with direct WhatsApp quote
│   │   ├── PromoMatrix.tsx     # RM20 monthly promo tiers & Mix & Match combo
│   │   ├── RoadmapSteps.tsx    # 5-step digital application roadmap
│   │   ├── ComparisonTable.tsx # Coway official rental vs credit loan table
│   │   ├── LeadForm.tsx        # Instant inquiry form with WhatsApp integration
│   │   ├── Footer.tsx          # Footer with certification badges & links
│   │   ├── MobileBottomDock.tsx# Bottom quick-action bar for mobile
│   │   ├── ModelQuizModal.tsx  # Interactive Model Finder Quiz modal
│   │   └── SocialProofToast.tsx# Live dynamic purchase notifications
│   ├── data/                   # Centralized datasets
│   │   ├── products.ts         # 25+ product models with pricing & images
│   │   ├── promos.ts           # Promotion tiers and duration matrices
│   │   └── siteConfig.ts       # Agent details, phone, and metadata
│   ├── types/                  # TypeScript interface definitions
│   │   └── product.ts          # Product, Category, and Tag types
│   └── lib/                    # Helper utilities
│       ├── utils.ts            # Formatting and class merging helpers
│       └── whatsapp.ts         # Pre-filled WhatsApp link generator
├── next.config.mjs             # Next.js configuration (remote image patterns)
├── tailwind.config.ts          # Custom color palette & breakpoints
├── tsconfig.json               # TypeScript path aliases & strict rules
└── package.json                # Project dependencies & build scripts
```

---

## 🛠️ Development & Deployment

### Run Development Server
```bash
npm run dev
# Server runs at http://localhost:3000
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```
