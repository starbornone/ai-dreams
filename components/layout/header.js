import Link from "next/link";

export function Header() {
  return (
    <>
      <h2 className="text-2xl md:text-4xl tracking-tight md:tracking-tighter leading-tight mt-8">
        <Link href="/">
          <a>AI Dreams</a>
        </Link>
      </h2>
      <div className="text-lg md:text-xl text-left mb-16 ml-12">
        of a better <span className="text-kobi-600">.world</span>
      </div>
    </>
  );
}
