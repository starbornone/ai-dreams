import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  coverImage,
  excerpt,
  slug,
  tags,
  title,
}) {
  return (
    <div className="mt-6 pt-10 grid gap-16 md:grid-cols-2 lg:gap-x-5 lg:gap-y-16">
      <div>
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <div className="flex flex-wrap content-between">
        <div>
          <h3 className="mb-3 text-2xl leading-snug">
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h3>
          <p className="mb-4 leading-relaxed text-grey-400">{excerpt}</p>
        </div>
        {tags && (
          <div className="flex gap-8 text-grey-300 font-light">
            {tags.map((tag) => (
              <div key={tag}>{tag}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
