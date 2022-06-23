import Head from "next/head";

import { getAllPostsForHome } from "lib/graphcms";

import Container from "components/container";
import HeroPost from "components/home/hero-post";
import Intro from "components/home/intro";
import MoreStories from "components/more-stories";
import { Layout } from "components/layout";

export default function Index({ posts }) {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>AI Dreams</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              date={heroPost.date}
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              tags={heroPost.tags}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { posts, preview },
  };
}
