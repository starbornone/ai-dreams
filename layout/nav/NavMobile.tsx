import Link from 'next/link';

import { navList } from './navList';

export function MobileNav() {
  return (
    <div className="block lg:hidden m-16 text-center">
      <div className="site-title text-gray-900 tracking-wider mb-6">
        Topics:
      </div>
      <div
        className="neon-links sign text-2xl tracking-wider grid grid-cols-1 space-y-6"
        style={{ fontFamily: 'Neon' }}
      >
        {navList?.map((link) => (
          <Link href={`/categories/${link.slug}`} key={link.slug}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
