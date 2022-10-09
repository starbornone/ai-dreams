import Link from "next/link";

export function Nav() {
  return (
    <div
      className="hidden md:visible md:flex space-x-12 text-xl tracking-wider neon-links sign"
      style={{ fontFamily: "Neon" }}
    >
      <Link href="https://aidreams.world/pages/about">
        <a>About</a>
      </Link>
      <Link href="https://aidreams.world/pages/about">
        <a>Rants</a>
      </Link>
      <Link href="https://aidreams.world/pages/about">
        <a>Stories</a>
      </Link>
    </div>
  );
}
