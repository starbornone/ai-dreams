import { Metadata } from 'next';

import { getAllPagesWithSlug, getPage } from 'lib/graphcms';

import { Body, Header } from 'components';

interface Props {
  params: { slug: string };
}

interface PageProps {
  title: string;
  excerpt: string;
  ogImage?: { url: string };
}

export async function generateStaticParams() {
  const pages = await getAllPagesWithSlug();
  return pages.map(({ slug }) => ({
    id: slug,
  }));
}

export async function handleGetPage({ slug }) {
  const data = await getPage(slug);
  
  return data.page;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page: PageProps = await handleGetPage(params);

  return {
    title: `${page.title} | AI Dreams`,
    description: page.excerpt,
    openGraph: {
      images: page.ogImage?.url,
    },
  };
}

export default async function Page({ params }) {
  const page = await handleGetPage(params);

  return (
    <article className="page mb-32">
      <Header coverImage={page.coverImage} title={page.title} />
      <Body content={page.content} />
    </article>
  );
}
