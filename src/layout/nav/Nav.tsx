import Link from 'next/link';
import { navList } from './navList';

export function Nav() {
  return (
    <div className="hidden lg:my-0 lg:block lg:max-w-lg">
      <div
        className="flex flex-wrap justify-end space-x-12 tracking-wider neon-links sign"
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
