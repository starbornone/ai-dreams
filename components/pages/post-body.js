export default function PostBody({ content }) {
  return (
    <div
      className="max-w-2xl mx-auto post"
      dangerouslySetInnerHTML={{ __html: content?.html }}
    />
  )
}
