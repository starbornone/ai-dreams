import { Body, Container, Footer, Header } from '@/components';
import { getAllPagesWithSlug, getPage } from '@/lib/hygraph';
import { Metadata } from 'next';

interface PageProps {
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
  return data.page;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page: PageProps = await handleGetPage(params);
  if (!page) return { title: 'AI Dreams' };
  return {
    title: `${page.title} | AI Dreams`,
    description: page.excerpt,
    openGraph: {
      images: page.ogImage?.url,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const page = await handleGetPage(params);

  return (
    <Container>
      <article className="mb-32 page">
        <Header coverImage={page.coverImage} title={page.title} />
        <div className="max-w-2xl mx-auto">
          <Body content={page.content} />
          <Footer imageAuthor={{ name: page.imageAuthor, url: page.imageAuthorUrl }} updatedAt={page.updatedAt} />
        </div>
      </article>
    </Container>
  );
}
