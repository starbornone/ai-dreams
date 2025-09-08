import { handleCategoryCounts } from '@/utils';
import Link from 'next/link';
import './NavMobile.css';

export async function MobileNav() {
  const { categories } = await handleCategoryCounts();

  return (
    <nav aria-label="Mobile Navigation" className="mobile-nav">
      <div className="mobile-nav__sr-only" aria-hidden="true">
        Topics:
      </div>
      <div className="neon-links mobile-nav__links">
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
