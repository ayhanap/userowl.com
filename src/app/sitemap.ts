import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://userowl.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://userowl.com/features/bug-tracking',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://userowl.com/features/feature-request-management',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://userowl.com/features/feedback-management',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://userowl.com/features/feedback-widget',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://userowl.com/features/integrations',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    // {
    //   url: 'https://userowl.com/use-cases/agencies',
    //   lastModified: new Date(),
    //   changeFrequency: 'daily',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://userowl.com/use-cases/e-commerce',
    //   lastModified: new Date(),
    //   changeFrequency: 'daily',
    //   priority: 0.8,
    // },
    {
      url: 'https://userowl.com/use-cases/product-management',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://userowl.com/use-cases/qa-uat',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://userowl.com/use-cases/software-development',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://userowl.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    // {
    //   url: 'https://userowl.com/blog',
    //   lastModified: new Date(),
    //   changeFrequency: 'hourly',
    //   priority: 0.7,
    // },
  ];
}
