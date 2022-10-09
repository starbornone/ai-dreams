import PostPreview from "components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:gap-x-12 lg:gap-x-24 gap-y-12 md:gap-y-32 my-12 md:my-32">
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
      </div>
    </section>
  );
}
