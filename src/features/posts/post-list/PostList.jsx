import { PostPreview } from '@/features';

export function PostList({ posts }) {
  return (
    <section className="my-12 grid grid-cols-1 gap-y-12 md:mb-32 md:gap-x-12 lg:gap-x-24 lg:gap-y-32">
      {posts.map((post) =>
        post.coverImage ? (
          <PostPreview
            key={post.slug}
            date={post.date}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ) : null
      )}
    </section>
  );
}