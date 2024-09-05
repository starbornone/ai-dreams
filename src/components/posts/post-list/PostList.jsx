import { PostPreview } from '@/components';

export function PostList({ posts }) {
  return (
    <section className="grid grid-cols-1 my-12 gap-y-12 md:mb-32 md:gap-x-12 lg:gap-x-24 lg:gap-y-32">
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
