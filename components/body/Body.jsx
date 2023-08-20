export function Body({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content?.html }} />;
}
