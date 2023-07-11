import Head from 'next/head'

import { getLimitedPosts } from 'lib/graphcms'

import { Container, MorePosts, PostList } from 'components'
import { Header, Layout } from 'layout'

export default function Index({ morePosts, posts }) {
    return (
        <>
            <Layout>
                <Head>
                    <title>AI Dreams</title>
                </Head>
                <Container>
                    <Header />
                    {posts && posts.length > 0 ? (
                        <PostList posts={posts} />
                    ) : null}
                    {morePosts && morePosts.length > 0 ? (
                        <MorePosts posts={morePosts} />
                    ) : null}
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const data = await getLimitedPosts(preview)
    return {
        props: {
            preview,
            posts: data.posts,
            morePosts: data.morePosts || [],
        },
    }
}
