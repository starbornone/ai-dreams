export function Body({ content }) {
  return (
    <div
      className="post mx-auto max-w-2xl"
      dangerouslySetInnerHTML={{ __html: content?.html }}
    />
  );
}
