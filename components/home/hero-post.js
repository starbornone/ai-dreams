import Link from "next/link";

import CoverImage from "components/cover-image";

export default function HeroPost({ title, coverImage, excerpt, slug, tags }) {
  return (
    <section>
      <div className="mb-8">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <div className="mb-20 grid gap-8 md:grid-cols-2 lg:gap-x-5 lg:gap-y-16">
        <div>
          <h3 className="mb-4 text-2xl leading-tight lg:text-4xl">
            <Link href={`/posts/${slug}`}>{title}</Link>
          </h3>
          {tags && (
            <div className="flex gap-8 text-grey-300 font-light">
              {tags.map((tag) => (
                <div key={tag}>{tag}</div>
              ))}
            </div>
          )}
        </div>
        <div className="lg:mt-16">
          <p className="mb-4 text-lg leading-relaxed text-grey-400">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
