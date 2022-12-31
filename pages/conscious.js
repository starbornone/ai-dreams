import Head from 'next/head'

import { getPostsByCategory } from 'lib/graphcms'

import { Container, MoreStories } from 'components'
import { Header, Layout } from 'layout'

export default function Index({ posts }) {
    console.log('posts', posts)

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
    const posts = (await getPostsByCategory('conscious', preview)) || []
    return {
        props: { posts, preview },
    }
}
