import { Body, Container, Footer, Header } from '@/components';
import { getAllPagesWithSlug, getPage } from '@/lib/hygraph';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

interface PageProps {
  content: {
    html: string;
  };
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
  return pages.map(({ slug }: { slug: string }) => ({
    id: slug,
  }));
}

async function handleGetPage({ slug }: { slug: string }) {
  const data = await getPage(slug);
  return data || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page: PageProps = await handleGetPage(params);
  if (!page) return { title: 'AI Dreams' };

  return {
    title: page?.title || '',
    description: page?.excerpt || '',
    openGraph: {
      images: page?.ogImage?.url || '',
    },
  };
}

export default async function Page({ params }: Props) {
  const page = await handleGetPage(params);

  return (
    <Container>
      {page ? (
        <article className="page mb-32">
          <Header coverImage={page.coverImage} title={page.title} />
          <div className="mx-auto max-w-2xl">
            <Body content={page.content} />
            <Footer
              imageAuthor={{ name: page?.imageAuthor || '', url: page?.imageAuthorUrl || '' }}
              updatedAt={page?.updatedAt || ''}
            />
          </div>
        </article>
      ) : (
        <p>Page not found</p>
      )}
    </Container>
  );
}
