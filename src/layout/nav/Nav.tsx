import { handleCategoryCounts } from '@/utils';
import Link from 'next/link';

export async function Nav() {
  const { categories } = await handleCategoryCounts();

  return (
    <nav aria-label="Primary Navigation" className="hidden lg:my-0 lg:block lg:max-w-2xl">
      <div
        className="neon-links flex flex-wrap justify-end space-x-12 text-xl tracking-wider text-gray-100"
        style={{ fontFamily: 'Neon' }}
      >
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
