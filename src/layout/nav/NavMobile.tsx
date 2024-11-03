import { handleCategoryCounts } from '@/utils';
import Link from 'next/link';

export async function MobileNav() {
  const { categories } = await handleCategoryCounts();

  return (
    <div className="m-16 block text-center lg:hidden">
      <div className="sr-only">Topics:</div>
      <div
        className="neon-links grid grid-cols-1 space-y-6 text-2xl tracking-wider text-gray-100"
        style={{ fontFamily: 'Neon' }}
      >
        {categories?.map((category: { slug: string; name: string }) => (
          <Link href={`/categories/${category.slug}`} key={category.slug}>
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
