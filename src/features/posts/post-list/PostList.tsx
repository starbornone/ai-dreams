import { PostPreview } from '@/features';

interface PostListProps {
  posts: {
    date: string;
    title: string;
    coverImage: { url: string };
    slug: string;
    excerpt: string;
    tags: string[];
  }[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <section className="my-12 grid grid-cols-1 gap-y-12 md:mb-32 md:gap-x-12 lg:gap-x-24 lg:gap-y-32">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          date={post.date}
          title={post.title}
          coverImage={post.coverImage}
          slug={post.slug}
          excerpt={post.excerpt}
          tags={post.tags}
        />
      ))}
    </section>
  );
}
