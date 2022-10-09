import ErrorPage from "next/error";
import Head from "next/head";
import { format } from "date-fns";
import { useRouter } from "next/router";

import { getAllPostsWithSlug, getPostAndMorePosts } from "lib/graphcms";

import Container from "components/container";
import MoreStories from "components/more-stories";
import PostBody from "components/pages/post-body";
import PostHeader from "components/pages/post-header";
import PostTitle from "components/pages/post-title";
import SectionSeparator from "components/section-separator";
import { Header } from "components/layout";
import { Layout } from "components/layout";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
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
                  <meta property="og:image" content={post.ogImage.url} />
                )}
                {post.excerpt && (
                  <meta name="description" content={post.excerpt} />
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
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
