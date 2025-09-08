import { handleCategoryCounts } from '@/utils';
import Link from 'next/link';
import './NavMobile.css';

export async function MobileNav() {
  const { categories } = await handleCategoryCounts();

  return (
    <nav className="nav-mobile" aria-label="Mobile Navigation">
      <div className="nav-mobile__sr-only" aria-hidden="true">
        Topics:
      </div>
      <div className="nav-mobile__links neon-links">
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
