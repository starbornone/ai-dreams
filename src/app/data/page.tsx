import { Metadata } from 'next';
import Link from 'next/link';

import { Container, Title } from '@/components';
import { getAllData } from '@/lib';
import { PostCounts } from './_post-counts';
import { TagCloud } from './_tag-cloud';

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
        <article className="mx-auto max-w-prose">
          <Title>Blog Data</Title>
          <div className="mb-6">
            <p>
              Maybe I will add more interesting things here in the future. Maybe that will be when I finally get around
              to migrating this entire blog to my own CMS. Who knows. (I should, but I sure don&apos;t!)
            </p>
          </div>
          <div className="my-12">
            <h2 className="mb-2 text-xl font-bold">Posts Per Category</h2>
            <ul>
              {categories.map((category: any) => (
                <li className="flex justify-between" key={category.slug}>
                  <p>
                    <Link href={`/categories/${category.slug}`}>{category.name}</Link>
                  </p>
                  <p>{category.count}</p>
                </li>
              ))}
            </ul>
          </div>
          <PostCounts data={{ labels, data }} />
          <div className="my-12">
            <h2 className="mb-2 text-xl font-bold">Tags</h2>
            <TagCloud tags={tags} />
          </div>
        </article>
      </Container>
    </>
  );
}
