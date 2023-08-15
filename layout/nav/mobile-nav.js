import Link from 'next/link'

export function MobileNav() {
    return (
        <div className="block lg:hidden m-16 text-center">
            <div className="site-title text-text-900 tracking-wider mb-6">Topics:</div>
            <div
                className="neon-links sign text-2xl tracking-wider grid grid-cols-1 space-y-6"
                style={{ fontFamily: 'Neon' }}
            >
                <Link href="/categories/philosophy">
                    <a>Philosophy</a>
                </Link>
                <Link href="/categories/politics">
                    <a>Politics</a>
                </Link>
                <Link href="/categories/economics">
                    <a>Economics</a>
                </Link>
                <Link href="/categories/culture">
                    <a>Culture</a>
                </Link>
                <Link href="/categories/games">
                    <a>Games</a>
                </Link>
            </div>
        </div>
    )
}
