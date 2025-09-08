import { handleCategoryCounts } from '@/utils';
import Link from 'next/link';
import './Nav.css';

export async function Nav() {
  const { categories } = await handleCategoryCounts();

  return (
    <nav className="nav" aria-label="Primary Navigation">
      <div className="nav__links neon-links">
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
