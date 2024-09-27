import { getPostAndMorePosts } from '@/lib';
import { PostData } from '@/types';

interface PostAndMorePostsProps {
  post: PostData;
  morePosts: PostData[];
}

export async function handleGetPostAndMorePost({ slug }: { slug: string }) {
  const data: PostAndMorePostsProps = await getPostAndMorePosts(slug);
  return {
    post: data?.post || null,
    morePosts: data?.morePosts || [],
  };
}
