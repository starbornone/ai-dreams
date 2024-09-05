import { PostLink } from '@/components';

interface MorePostsProps {
  posts: {
    slug: string;
    title: string;
  }[];
}

export function MorePosts({ posts }: MorePostsProps) {
  return (
    <div className="my-16 md:my-32">
      <h2 className="mb-8 text-4xl text-center site-title sm:ml-3 sm:text-left md:text-5xl">More Posts</h2>
      {posts.length > 0 ? posts.map((post) => <PostLink key={post.slug} post={post} />) : null}
    </div>
  );
}
