import { Container } from '@/components';
import { getAllCategoriesWithSlug, getAllPostsWithCategory } from '@/lib';
import { PostData } from '@/types';
import Link from 'next/link';

export const experimental_ppr = true;

async function getPosts() {
  const posts = await getAllPostsWithCategory();
  const categories = await getAllCategoriesWithSlug();

  posts.forEach((post: PostData) => {
    categories.forEach((category: any) => {
      if (post?.category?.slug === category.slug) {
        category.count = category.count ? category.count + 1 : 1;
      }
    });
  });

  return { categories: categories.sort((a: { count: number }, b: { count: number }) => b.count - a.count) };
}

export default async function Page() {
  const { categories } = await getPosts();

  return (
    <>
      <Container>
        <h2 className="mb-2 font-['Neon'] text-xl">Published posts in each category</h2>
        <ul className="max-w-prose">
          {categories.map((category: any) => (
            <li className="grid grid-cols-2" key={category.slug}>
              <p>
                <Link href={`/categories/${category.slug}`}>{category.name}</Link>
              </p>
              <p>{category.count}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
