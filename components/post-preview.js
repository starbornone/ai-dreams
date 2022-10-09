import Link from "next/link";
import { format } from "date-fns";

import CoverImage from "components/cover-image";

export default function PostPreview({
  coverImage,
  date,
  excerpt,
  slug,
  tags,
  title,
}) {
  return (
    <div className="mt-6 grid gap-8 md:grid-cols-2 lg:gap-y-16">
      {coverImage && (
        <div>
          <CoverImage
            customClasses="cover"
            slug={slug}
            title={title}
            url={coverImage.url}
          />
        </div>
      )}
      <div className="flex flex-wrap content-between">
        <div>
          <h2 className="mb-3 text-2xl leading-snug ">
            <Link href={`/posts/${slug}`}>
              <a className="post-title-link" data-content={title}>
                {title}
              </a>
            </Link>
          </h2>
          <p className="mb-4 leading-relaxed text-text-300">{excerpt}</p>
        </div>
        <div className="w-full pb-2">
          <div className="flex justify-between text-sm">
            {tags && (
              <div className="md:flex md:gap-8 text-text-500 font-light">
                {tags.map((tag) => (
                  <div key={tag}>{tag}</div>
                ))}
              </div>
            )}
            {date && (
              <div className="text-text-500 font-light">
                {format(new Date(date), "dd MMMM yyyy")}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
