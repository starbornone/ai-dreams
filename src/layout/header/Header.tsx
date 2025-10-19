import Link from 'next/link';

import { Nav } from '@/layout';

import './Header.css';

export function Header() {
  return (
    <div className="header">
      <div className="header__title site-title">
        <h1 className="header__title-domain">
          <Link href="/">AI Dreams</Link>
        </h1>
        <div className="header__title-subtitle">
          of a better
          <span className="sign header__sign">
            .<span className="fast-flicker">w</span>or
            <span className="flicker">l</span>d
          </span>
        </div>
      </div>
      <Nav />
    </div>
  );
}
