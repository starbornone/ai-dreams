import Link from 'next/link'

export function Nav() {
    return (
        <div
            className="neon-links sign hidden space-x-12 text-xl tracking-wider md:visible md:flex"
            style={{ fontFamily: 'Neon' }}
        >
            <Link href="https://aidreams.world/conscious">
                <a>Conscious</a>
            </Link>
            <Link href="https://aidreams.world/world">
                <a>World</a>
            </Link>
            <Link href="https://aidreams.world/imagination">
                <a>Imagination</a>
            </Link>
        </div>
    )
}
