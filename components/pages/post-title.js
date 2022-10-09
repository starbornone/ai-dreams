export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-4xl tracking-tighter mt-8 mb-12 md:text-center max-w-4xl mx-auto">
      <a className="post-title" data-content={children}>
        {children}
      </a>
    </h1>
  );
}
