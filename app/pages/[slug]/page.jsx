import { getAllPagesWithSlug, getPage } from 'lib/graphcms';

import { PostBody, PostHeader } from 'components';

export async function generateStaticParams() {
  const pages = await getAllPagesWithSlug();
  return pages.map(({ slug }) => ({
    id: slug,
  }));
}

export async function handleGetPage({ slug }) {
  const data = await getPage(slug);
  return {
    page: data.page,
  };
}

export async function generateMetadata({ params }) {
  const page = await handleGetPage(params);

  return {
    title: `${page?.name ? `${page.name} | ` : ''}AI Dreams`,
    description: page?.excerpt,
    openGraph: {
      images: page?.ogImage?.url,
    },
  };
}

export default async function Page({ params }) {
  const { page } = await handleGetPage(params);

  return (
    <>
      <article className="page pb-20">
        <PostHeader coverImage={page.coverImage} title={page.title} />
        <PostBody content={page.content} />
      </article>
    </>
  );
}
