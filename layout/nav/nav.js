import Link from 'next/link'

export function Nav() {
    return (
        <div className="hidden lg:block lg:my-0 lg:max-w-lg">
            <div
                className="neon-links sign space-x-12 text-xl tracking-wider flex flex-wrap justify-end"
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
                <Link href="/categories/games">
                    <a>Games</a>
                </Link>
                <Link href="/categories/fiction">
                    <a>Fiction</a>
                </Link>
            </div>
        </div>
    )
}
