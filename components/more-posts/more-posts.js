import { PostLink } from 'components'

export function MorePosts({ posts }) {
    return (
        <div className="my-16 md:my-32">
            <h2 className="text-center sm:text-left sm:ml-3 site-title mb-8 text-4xl leading-tight tracking-tighter md:text-5xl">
                More Posts
            </h2>

            {posts.length > 0
                ? posts.map((post) => <PostLink key={post.slug} post={post} />)
                : null}
        </div>
    )
}
