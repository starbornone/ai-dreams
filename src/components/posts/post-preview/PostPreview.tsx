import { CoverImage } from '@/components';
import { format } from 'date-fns';
import Link from 'next/link';

interface PostPreviewProps {
  coverImage: { url: string };
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
  title: string;
}

export function PostPreview({ coverImage, date, excerpt, slug, tags, title }: PostPreviewProps) {
  return (
    <div className="grid gap-8 mt-6 md:grid-cols-2 lg:gap-y-16">
      {coverImage && (
        <div>
          <CoverImage slug={`posts/${slug}`} title={title} url={coverImage.url} />
        </div>
      )}
      <div className="flex flex-wrap content-between">
        <div>
          <h2 className="mb-3 text-2xl leading-snug">
            <Link className="title-link" data-content={title} href={`/posts/${slug}`}>
              {title}
            </Link>
          </h2>
          <p className="mb-4 leading-relaxed text-gray-300">{excerpt}</p>
        </div>
        <div className="w-full pb-2">
          <div className="flex justify-between text-sm">
            {tags && (
              <div className="font-light text-gray-500 md:flex md:gap-8">
                {tags.map((tag) => (
                  <div key={tag}>{tag}</div>
                ))}
              </div>
            )}
            {date && <div className="font-light text-gray-500">{format(new Date(date), 'dd MMMM yyyy')}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
