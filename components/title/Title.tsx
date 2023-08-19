export function Title({ children }) {
  return (
    <h1 className="mx-auto mt-8 mb-12 max-w-4xl text-4xl tracking-tighter md:text-center md:text-5xl post-title">
      {children}
    </h1>
  );
}
