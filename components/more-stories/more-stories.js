import { PostPreview } from 'components'

export function MoreStories({ posts }) {
    return (
        <section>
            <div className="my-12 grid grid-cols-1 gap-y-12 md:my-32 md:gap-x-12 md:gap-y-32 lg:gap-x-24">
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
    )
}
