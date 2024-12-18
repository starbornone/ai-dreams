import { getPost } from '@/lib';

export async function handleGetPost(slug: string) {
  const data = await getPost(slug);
  return data || null;
}
