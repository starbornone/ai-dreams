import Link from 'next/link';

type TagCloudProps = {
  maxFontSize?: number;
  minFontSize?: number;
  tags: { name: string; count: number }[];
};

export function TagCloud({ tags, maxFontSize = 36, minFontSize = 10 }: TagCloudProps) {
  const maxCount = Math.max(...tags.map((tag) => tag.count));

  return (
    <div className="align-end flex flex-wrap justify-center gap-3 font-neon tracking-wider">
      {tags.map((tag) => {
        const encodedTagName = encodeURIComponent(tag.name);
        const fontSize = minFontSize + ((maxFontSize - minFontSize) * tag.count) / maxCount;

        return (
          <p key={tag.name}>
            <Link
              href={`/tags/${encodedTagName}`}
              style={{
                fontSize: `${fontSize}px`,
              }}
            >
              {tag.name} {tag.count > 1 ? `(${tag.count})` : ''}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
