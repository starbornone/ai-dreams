import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import {
    getAllCategoriesWithSlug,
    getCategory,
    getPostsByCategory,
} from 'lib/graphcms'

import { Container, MorePosts, PostList } from 'components'
import { Header, Layout } from 'layout'

export default function Categories({ category, morePosts, params, posts }) {
    const router = useRouter()

    if (!router.isFallback && !category?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <>
            <Layout>
                <Head>
                    <title>{category?.name ? `${category.name} | ` : ''}AI Dreams</title>
                </Head>
                <Container>
                    <Header />
                    {router.isFallback ? (
                        <div>Loading…</div>
                    ) : (
                        <>
                            {posts && posts.length > 0 ? (
                                <PostList posts={posts} />
                            ) : null}
                            {morePosts && morePosts.length > 0 ? (
                                <MorePosts posts={morePosts} />
                            ) : null}
                        </>
                    )}
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params, preview = false }) {
    const category = await getCategory(params.slug)
    const data = await getPostsByCategory(params.slug, preview)
    return {
        props: {
            preview,
            category,
            posts: data.posts || {},
            morePosts: data.morePosts || [],
        },
    }
}

export async function getStaticPaths() {
    const categories = await getAllCategoriesWithSlug()
    return {
        paths: categories.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: true,
    }
}
