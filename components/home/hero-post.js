import Link from "next/link";
import { format } from "date-fns";

import CoverImage from "components/cover-image";

export default function HeroPost({
  date,
  title,
  coverImage,
  excerpt,
  slug,
  tags,
}) {
  return (
    <section>
      {coverImage && (
        <div className="mb-8">
          <CoverImage slug={slug} title={title} url={coverImage.url} />
        </div>
      )}
      <div className="mb-20 grid gap-8 md:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
        <div>
          <h2 className="mb-4 text-2xl leading-tight lg:text-4xl">
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h2>
          <div className="flex justify-between">
            {tags && (
              <div className="flex gap-8 text-text-300 font-light">
                {tags.map((tag) => (
                  <div key={tag}>{tag}</div>
                ))}
              </div>
            )}
            {date && (
              <div className="text-text-300 font-light">
                {format(new Date(date), "dd MMMM yyyy")}
              </div>
            )}
          </div>
        </div>
        <div className="lg:mt-16">
          <p className="mb-4 text-lg leading-relaxed text-text-500">
            {excerpt}
          </p>
        </div>
      </div>
    </section>
  );
}
