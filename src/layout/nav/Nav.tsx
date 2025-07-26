import { handleCategoryCounts } from '@/utils';
import Link from 'next/link';

export async function Nav() {
  const { categories } = await handleCategoryCounts();

  return (
    <nav aria-label="Primary Navigation" className="hidden lg:my-0 lg:block lg:max-w-lg">
      <div className="neon-links flex flex-wrap justify-end space-x-10 font-neon text-xl tracking-wider text-gray-100">
        {categories?.map((category: { slug: string; name: string }) => (
          <Link
            aria-label={`Navigate to ${category.name}`}
            href={`/categories/${category.slug}`}
            key={category.slug}
            title={category.name}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
