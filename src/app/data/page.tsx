import { Container, Title } from '@/components';
import { handleCategoryCounts, handlePostsCountByMonth } from '@/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { PostCounts } from './_post-counts';

export const metadata: Metadata = {
  title: 'Blog Data',
  description: 'This blog in numbers.',
};

export default async function Page() {
  const { categories } = await handleCategoryCounts();
  const dateCounts = await handlePostsCountByMonth();
  const sortedDates = Object.keys(dateCounts).sort();
  const labels = sortedDates;
  const data = sortedDates.map((date) => dateCounts[date]);

  console.log('labels', labels);
  console.log('data', data);

  return (
    <>
      <Container>
        <div className="mx-auto max-w-prose">
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
        </div>
      </Container>
    </>
  );
}
