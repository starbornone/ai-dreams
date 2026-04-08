type RssItem = {
  title: string;
  link: string;
  guid?: string;
  pubDate: Date;
  description?: string;
  categories?: string[];
};

type RssChannel = {
  title: string;
  link: string;
  description: string;
  selfLink?: string;
  language?: string;
  lastBuildDate?: Date;
  items: RssItem[];
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(date: Date): string {
  return date.toUTCString();
}

export function buildRss(channel: RssChannel): string {
  const parts: string[] = [];

  parts.push('<?xml version="1.0" encoding="UTF-8"?>');
  if (channel.selfLink) {
    parts.push('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">');
  } else {
    parts.push('<rss version="2.0">');
  }
  parts.push('<channel>');

  parts.push(`<title>${escapeXml(channel.title)}</title>`);
  parts.push(`<link>${escapeXml(channel.link)}</link>`);
  parts.push(`<description>${escapeXml(channel.description)}</description>`);
  if (channel.selfLink) {
    parts.push(
      `<atom:link href="${escapeXml(channel.selfLink)}" rel="self" type="application/rss+xml" />`
    );
  }
  if (channel.language) {
    parts.push(`<language>${escapeXml(channel.language)}</language>`);
  }
  parts.push(`<lastBuildDate>${escapeXml(toRfc822(channel.lastBuildDate ?? new Date()))}</lastBuildDate>`);

  for (const item of channel.items) {
    if (!(item.pubDate instanceof Date) || Number.isNaN(item.pubDate.getTime())) continue;

    parts.push('<item>');
    parts.push(`<title>${escapeXml(item.title)}</title>`);
    parts.push(`<link>${escapeXml(item.link)}</link>`);
    parts.push(
      `<guid isPermaLink="true">${escapeXml(item.guid ?? item.link)}</guid>`
    );
    parts.push(`<pubDate>${escapeXml(toRfc822(item.pubDate))}</pubDate>`);
    if (item.description) {
      parts.push(`<description>${escapeXml(item.description)}</description>`);
    } else {
      parts.push('<description></description>');
    }
    if (item.categories?.length) {
      for (const category of item.categories) {
        if (!category) continue;
        parts.push(`<category>${escapeXml(category)}</category>`);
      }
    }
    parts.push('</item>');
  }

  parts.push('</channel>');
  parts.push('</rss>');

  return parts.join('');
}

