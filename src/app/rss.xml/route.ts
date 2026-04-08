import { NextResponse } from 'next/server';

import { getLimitedPosts } from '@/lib';
import { buildRss } from '@/lib/rss/buildRss';
import { getSiteUrl } from '@/lib/site/getSiteUrl';

export const revalidate = 3600;

const CHANNEL_TITLE = 'AI Dreams';
const CHANNEL_DESCRIPTION =
  "A software engineer's exploration of philosophy, society, and personal growth. AI Dreams aims to bridge the gap between deep ideas and practical reflections, covering topics like perception, ethics, community, and systemic critiques.";

export async function GET() {
  const siteUrl = getSiteUrl();

  const posts = await getLimitedPosts({ skip: 0, limit: 50 });

  const rss = buildRss({
    title: CHANNEL_TITLE,
    link: `${siteUrl}/`,
    description: CHANNEL_DESCRIPTION,
    selfLink: `${siteUrl}/rss.xml`,
    language: 'en',
    lastBuildDate: new Date(),
    items: posts.map((post) => {
      const link = `${siteUrl}/posts/${post.slug}`;
      const categories = [
        post.category?.name ?? '',
        ...(post.tags ?? []),
      ].filter(Boolean);

      return {
        title: post.title,
        link,
        guid: link,
        pubDate: new Date(post.date),
        description: post.excerpt ?? '',
        contentEncoded: post.markdownContent ?? post.content?.html ?? '',
        categories,
      };
    }),
  });

  return new NextResponse(rss, {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
    },
  });
}

