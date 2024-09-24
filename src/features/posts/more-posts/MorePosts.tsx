import { PostLink } from '@/features';

interface MorePostsProps {
  posts: { title: string; slug: string; tags: string[]; date: string }[];
}

export function MorePosts({ posts }: MorePostsProps) {
  return (
    <div className="my-16 md:my-32">
      <h2 className="site-title mb-8 text-center text-4xl sm:ml-3 sm:text-left md:text-5xl">More Posts</h2>
      {posts.length > 0 ? posts.map((post) => <PostLink key={post.slug} post={post} />) : null}
    </div>
  );
}
