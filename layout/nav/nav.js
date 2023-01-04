import Link from 'next/link'

export function Nav() {
    return (
        <div
            className="neon-links sign hidden space-x-12 text-xl tracking-wider md:visible md:flex"
            style={{ fontFamily: 'Neon' }}
        >
            <Link href="https://aidreams.world">
                <a>Life</a>
            </Link>
        </div>
    )
}
