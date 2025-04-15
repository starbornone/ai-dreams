import { handleCategoryCounts } from '@/utils';
import Link from 'next/link';

export async function MobileNav() {
  const { categories } = await handleCategoryCounts();

  return (
    <nav aria-label="Mobile Navigation" className="m-16 block text-center lg:hidden">
      <div className="sr-only" aria-hidden="true">
        Topics:
      </div>
      <div
        className="neon-links flex flex-wrap gap-6 text-2xl tracking-wider text-gray-100"
        style={{ fontFamily: 'Neon' }}
      >
        Topics:{' '}
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
