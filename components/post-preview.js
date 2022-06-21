import Link from "next/link";

import CoverImage from "components/cover-image";

export default function PostPreview({
  coverImage,
  excerpt,
  slug,
  tags,
  title,
}) {
  return (
    <div className="mt-6 pt-10 grid gap-8 md:grid-cols-2 lg:gap-x-5 lg:gap-y-16">
      {coverImage && (
        <div>
          <CoverImage slug={slug} title={title} url={coverImage.url} />
        </div>
      )}
      <div className="flex flex-wrap content-between">
        <div>
          <h3 className="mb-3 text-2xl leading-snug">
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h3>
          <p className="mb-4 leading-relaxed text-gray-400">{excerpt}</p>
        </div>
        {tags && (
          <div className="flex gap-8 text-gray-300 font-light">
            {tags.map((tag) => (
              <div key={tag}>{tag}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
