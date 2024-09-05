import { Metadata } from 'next';

import { getAllPagesWithSlug, getPage } from 'lib/hygraph';

import { Body, Container, Footer, Header } from 'components';

interface Props {
  params: { slug: string };
}

interface PageProps {
  excerpt: string;
  imageAuthor?: string;
  imageAuthorUrl?: string;
  localizations: {
    excerpt: string;
    locale: 'en' | 'zh_CN';
    title: string;
  }[];
  ogImage?: { url: string };
  title: string;
  updatedAt?: string;
}

export async function generateStaticParams() {
  const pages = await getAllPagesWithSlug();
  return pages.map(({ slug }) => ({
    id: slug,
  }));
}

async function handleGetPage({ slug }, preview) {
  const data = await getPage(slug, preview);
  return data.page;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page: PageProps = await handleGetPage(
    params,
    process.env.NODE_ENV === 'development' ? true : false,
  );
  if (!page) return { title: 'AI Dreams' };
  return {
    title: `${page.title} | AI Dreams`,
    description: page.excerpt,
    openGraph: {
      images: page.ogImage?.url,
    },
  };
}

export default async function Page({ params }) {
  const page = await handleGetPage(
    params,
    process.env.NODE_ENV === 'development' ? true : false,
  );

  return (
    <Container>
      <article className="mb-32 page">
        <Header coverImage={page.coverImage} title={page.title} />
        <div className="max-w-2xl mx-auto">
          <Body content={page.content} />
          <Footer
            imageAuthor={{ name: page.imageAuthor, url: page.imageAuthorUrl }}
            updatedAt={page.updatedAt}
          />
        </div>
      </article>
    </Container>
  );
}
