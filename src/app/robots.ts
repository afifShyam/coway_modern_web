import type { MetadataRoute } from 'next';

// Required by `output: 'export'`: metadata routes must be statically emitted.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://coway-online.web.app/sitemap.xml',
  };
}
