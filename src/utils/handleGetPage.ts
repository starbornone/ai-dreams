import { getPage } from '@/lib';

export async function handleGetPage({ slug }: { slug: string }) {
  const data = await getPage(slug);
  return data || null;
}
