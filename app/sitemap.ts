import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://scienceparkdhamtari.com' // Replace with actual domain when available

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/#about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#exhibits`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#gallery`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#testimonials`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/#how-to-reach`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/#contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ]
}
