import Link from 'next/link';

export function PostTitle({ children }) {
  return (
    <h1 className="mx-auto mt-8 mb-12 max-w-4xl text-4xl tracking-tighter md:text-center md:text-5xl">
      <span className="post-title" data-content={children}>
        {children}
      </span>
    </h1>
  );
}
