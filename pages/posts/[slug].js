import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/graphcms'

import {
    Container,
    PostList,
    PostBody,
    PostHeader,
    PostTitle,
    SectionSeparator,
} from 'components'
import { Header, Layout } from 'layout'

export default function Post({ post, morePosts, preview }) {
    const router = useRouter()

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout preview={preview}>
            <Container>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>{post.title} | AI Dreams</title>
                                {post.ogImage && (
                                    <meta
                                        content={post.ogImage.url}
                                        key="image"
                                        property="og:image"
                                    />
                                )}
                                {post.title && (
                                    <meta
                                        content={post.excerpt}
                                        key="title"
                                        name="title"
                                        property="og:title"
                                    />
                                )}
                                {post.excerpt && (
                                    <meta
                                        content={post.excerpt}
                                        key="description"
                                        name="description"
                                        property="og:description"
                                    />
                                )}
                                {post.tags && (
                                    <meta
                                        content={post.tags}
                                        key="keywords"
                                        name="keywords"
                                        property="og:keywords"
                                    />
                                )}
                            </Head>
                            <PostHeader
                                coverImage={post.coverImage}
                                date={post.date}
                                tags={post.tags}
                                title={post.title}
                            />
                            <PostBody content={post.content} />
                        </article>
                        <SectionSeparator />
                        {morePosts.length > 0 && <PostList posts={morePosts} />}
                    </>
                )}
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getPostAndMorePosts(params.slug, preview)
    return {
        props: {
            preview,
            post: data.post,
            morePosts: data.morePosts || [],
        },
    }
}

export async function getStaticPaths() {
    const posts = await getAllPostsWithSlug()
    return {
        paths: posts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: true,
    }
}
