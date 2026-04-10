import { Metadata } from 'next';
import Link from 'next/link';

import { Container, Title } from '@/components';
import { getAllData, getAllPosts } from '@/lib';
import { getTopPostsByViews } from '@/lib/postViews/getTopPostsByViews';
import { PostCounts } from './components/_post-counts';
import { TagCloud } from './components/_tag-cloud';

import './page.css';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Blog Data',
  description: 'This blog in numbers.',
};

export default async function Page() {
  const isProduction = process.env.NODE_ENV === 'production';
  const viewedBefore = new Date();
  const viewedAfter = new Date(viewedBefore);
  viewedAfter.setDate(viewedAfter.getDate() - 30);

  const { categories, dateCounts, tags } = await getAllData();
  const [topPosts, allPosts] = await Promise.all([
    getTopPostsByViews({
      limit: 10,
      viewedAfter: viewedAfter.toISOString(),
      viewedBefore: viewedBefore.toISOString(),
    }),
    getAllPosts(),
  ]);
  const titleBySlug = new Map(allPosts.map((p) => [p.slug, p.title] as const));

  const sortedDates = Object.keys(dateCounts).sort();
  const labels = sortedDates;
  const data = sortedDates.map((date) => dateCounts[date]);

  return (
    <>
      <Container>
        <article className="data-page__content">
          <Title>Blog Data</Title>
          <div className="data-page__section">
            <h2 className="data-page__section-title">Top 10 Posts (Last 30 days)</h2>
            {topPosts.length > 0 ? (
              <ul className="data-page__category-list">
                {topPosts.map((post) => (
                  <li className="data-page__category-item" key={post.slug}>
                    <p>
                      <Link href={`/posts/${post.slug}`}>{titleBySlug.get(post.slug) ?? post.slug}</Link>
                    </p>
                    {!isProduction && <p>{post.views}</p>}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No tracked views yet.</p>
            )}
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
