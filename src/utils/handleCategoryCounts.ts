import { getAllCategoriesWithSlug, getAllPostsWithCategory } from '@/lib';
import { PostData } from '@/types';

export async function handleCategoryCounts() {
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
