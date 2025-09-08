// Post service - business logic for post operations
import { getPost, getPostAndMorePosts } from '@/lib';

export async function handleGetPost({ slug }: { slug: string }) {
  const data = await getPost(slug);
  return data || null;
}

export async function handleGetPostAndMorePost({ slug }: { slug: string }) {
  const data = await getPostAndMorePosts(slug);
  return data || null;
}
