import Head from 'next/head'

import { getPostsByCategory } from 'lib/graphcms'

import { Container, PostList } from 'components'
import { Header, Layout } from 'layout'

export default function Index({ posts }) {
    return (
        <>
            <Layout>
                <Head>
                    <title>AI Dreams</title>
                </Head>
                <Container>
                    <Header />
                    {posts.length > 0 && <PostList posts={posts} />}
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const posts = (await getPostsByCategory('imagination', preview)) || []
    return {
        props: { posts, preview },
    }
}
