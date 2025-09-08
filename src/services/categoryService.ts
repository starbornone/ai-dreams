// Category service - business logic for category operations
import { getAllCategoriesWithSlug } from '@/lib';

export async function handleCategoryCounts() {
  const categories = await getAllCategoriesWithSlug();
  return { categories };
}
