function normalizeSiteUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return '';

  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return '';
  }

  // `origin` strips any pathname/query/hash; we want canonical base.
  return url.origin.replace(/\/$/, '');
}

export function getSiteUrl(): string {
  const fromEnv = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? '');
  if (fromEnv) return fromEnv;

  if (process.env.NODE_ENV === 'production') {
    throw new Error('NEXT_PUBLIC_SITE_URL must be set to an absolute URL in production (e.g. https://example.com).');
  }

  return 'http://localhost:3000';
}

