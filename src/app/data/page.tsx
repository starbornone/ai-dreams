export const dynamic = 'force-static';

import { Metadata } from 'next';
import Link from 'next/link';

import { Container, Title } from '@/components';
import { getAllData } from '@/lib';
import { PostCounts } from './_post-counts';
import { TagCloud } from './_tag-cloud';
import './page.css';

export const metadata: Metadata = {
  title: 'Blog Data',
  description: 'This blog in numbers.',
};

export default async function Page() {
  const { categories, dateCounts, tags } = await getAllData();

  const sortedDates = Object.keys(dateCounts).sort();
  const labels = sortedDates;
  const data = sortedDates.map((date) => dateCounts[date]);

  return (
    <>
      <Container>
        <article className="data-page__article">
          <Title>Blog Data</Title>
          <div className="data-page__intro">
            <p>
              Maybe I will add more interesting things here in the future. Maybe that will be when I finally get around
              to migrating this entire blog to my own CMS. Who knows. (I should, but I sure don&apos;t!)
            </p>
          </div>
          <div className="data-page__section">
            <h2 className="data-page__section-title">Posts Per Category</h2>
            <ul className="data-page__category-list">
              {categories.map((category: any) => (
                <li className="data-page__category-item" key={category.slug}>
                  <p>
                    <Link href={`/categories/${category.slug}`}>{category.name}</Link>
                  </p>
                  <p>{category.count}</p>
                </li>
              ))}
            </ul>
          </div>
          <PostCounts data={{ labels, data }} />
          <div className="data-page__section">
            <h2 className="data-page__section-title">Tags</h2>
            <TagCloud tags={tags} />
          </div>
        </article>
      </Container>
    </>
  );
}
