import Head from 'next/head'

import { getAllPostsForHome } from 'lib/graphcms'

import { Container, MoreStories } from 'components'
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
                    {posts.length > 0 && <MoreStories posts={posts} />}
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ preview = false }) {
    const posts = (await getAllPostsForHome(preview)) || []
    return {
        props: { posts, preview },
    }
}
