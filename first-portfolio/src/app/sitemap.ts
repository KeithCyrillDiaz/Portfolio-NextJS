import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://keithdiaz.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Adjust based on how often your site updates
      priority: 1.0,
    },
    {
      url: 'https://keithdiaz.vercel.app/about', // Adjust the path based on your actual routes
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://keithdiaz.vercel.app/projects', // Change this to your projects page URL
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Add more URLs as needed
  ]
}