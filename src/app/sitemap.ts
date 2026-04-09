import type { MetadataRoute } from 'next';

import { getAllPagesWithSlug, getAllPostsWithSlug } from '@/lib';
import { getSiteUrl } from '@/lib/site/getSiteUrl';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const [pages, posts] = await Promise.all([getAllPagesWithSlug(), getAllPostsWithSlug()]);

  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now },
    { url: `${siteUrl}/rss.xml`, lastModified: now },
    { url: `${siteUrl}/data`, lastModified: now },
    ...pages.map((p: { slug: string }) => ({
      url: `${siteUrl}/pages/${p.slug}`,
      lastModified: now,
    })),
    ...posts.map((p: { slug: string }) => ({
      url: `${siteUrl}/posts/${p.slug}`,
      lastModified: now,
    })),
  ];

  return entries;
}

