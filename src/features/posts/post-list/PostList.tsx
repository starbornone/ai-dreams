import { PostPreview } from '@/features';
import { PostData } from '@/types';

interface PostListProps {
  posts: PostData[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <section className="my-12 grid grid-cols-1 gap-y-12 md:mb-32 lg:gap-y-16">
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </section>
  );
}
