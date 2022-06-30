export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-4xl tracking-tighter mb-12 text-center max-w-4xl mx-auto">
      {children}
    </h1>
  );
}
