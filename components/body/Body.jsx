export function Body({ content }) {
  return (
    <div
      className="max-w-2xl mx-auto"
      dangerouslySetInnerHTML={{ __html: content?.html }}
    />
  );
}
