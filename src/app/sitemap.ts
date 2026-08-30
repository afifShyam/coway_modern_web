import type { MetadataRoute } from 'next';

// Required by `output: 'export'`: metadata routes must be statically emitted.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://coway-online.web.app',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
