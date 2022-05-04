import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/graphcms";
import Head from "next/head";

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
