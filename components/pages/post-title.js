export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-4xl tracking-tighter leading-tight md:leading-none mb-12 text-center">
      {children}
    </h1>
  )
}
