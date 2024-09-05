interface BodyProps {
  content: {
    html: string;
  };
}

export function Body({ content }: BodyProps) {
  return <div dangerouslySetInnerHTML={{ __html: content.html }} />;
}
