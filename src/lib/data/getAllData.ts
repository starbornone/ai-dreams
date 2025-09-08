import { apiClient, getAllCategoriesWithSlug } from '@/lib';
import { GetAllDataResponse, AllDataResponse, TagCount, CategoryData } from '@/types';

export async function getAllData(): Promise<AllDataResponse> {
  const data: GetAllDataResponse = await apiClient(
    `
    query GetAllData($stage: Stage!) {
      posts(
        stage: $stage,
        where: { date_not: null }
      ) {
        date
        tags
        category {
          name
          slug
        }
      }
    }
  `,
    {
      variables: {
        stage: process.env.NODE_ENV === 'development' ? 'DRAFT' : 'PUBLISHED',
      },
    }
  );

  const tagCounts = new Map<string, number>();
  data.posts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag: string) => {
        if (tag) {
          const currentCount = tagCounts.get(tag) || 0;
          tagCounts.set(tag, currentCount + 1);
        }
      });
    }
  });

  const tags = Array.from(tagCounts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const categories = await getAllCategoriesWithSlug();

  data.posts.forEach((post) => {
    if (post.category) {
      categories.forEach((category: CategoryData) => {
        if (post.category.slug === category.slug) {
          category.count = category.count ? category.count + 1 : 1;
        }
      });
    }
  });

  const sortedCategories = [...categories].sort((a, b) => (b.count || 0) - (a.count || 0));

  const dateCounts: Record<string, number> = {};

  const startDate = new Date(2021, 8);
  const currentDate = new Date();
  let iterDate = new Date(startDate);

  while (iterDate <= currentDate) {
    const yearMonth = `${iterDate.getFullYear()}-${String(iterDate.getMonth() + 1).padStart(2, '0')}`;
    dateCounts[yearMonth] = 0;
    iterDate.setMonth(iterDate.getMonth() + 1);
  }

  data.posts.forEach((post) => {
    if (post.date) {
      const dateObj = new Date(post.date);
      const yearMonth = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
      dateCounts[yearMonth] = (dateCounts[yearMonth] || 0) + 1;
    }
  });

  return {
    tags,
    categories: sortedCategories,
    dateCounts,
  };
}
