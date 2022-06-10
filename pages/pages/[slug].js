import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

import { getAllPagesWithSlug, getPage } from "lib/graphcms";

import Container from "components/container";
import PostBody from "components/pages/post-body";
import PostHeader from "components/pages/post-header";
import PostTitle from "components/pages/post-title";
import { Header } from "components/layout";
import { Layout } from "components/layout";

export default function Page({ page, preview }) {
  const router = useRouter();

  if (!router.isFallback && !page?.slug) {
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
                <title>{page.title} | AI Dreams</title>
                <meta property="og:image" content={page.ogImage.url} />
              </Head>
              <PostHeader title={page.title} coverImage={page.coverImage} />
              <PostBody content={page.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPage(params.slug, preview);
  return {
    props: {
      preview,
      page: data.page,
    },
  };
}

export async function getStaticPaths() {
  const pages = await getAllPagesWithSlug();
  return {
    paths: pages.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
