import { CalendarIcon, FolderIcon, TagIcon } from '@/components';
import { PostData } from '@/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  post: PostData;
}

export function MetaData({ post }: Props) {
  return (
    <>
      <div className="mt-12 flex flex-row items-center gap-4 text-xs text-gray-500 lg:text-sm">
        {/* Author */}
        <Link aria-label="Read more about the author" className="z-20 flex items-center gap-2" href="/pages/about">
          <Image
            alt="Human"
            aria-hidden="true"
            className="avatar-image h-32 w-32 rounded-full border-4 border-gray-900 bg-gray-800"
            height={256}
            src="https://res.cloudinary.com/starborn/image/upload/v1732555832/ai-dreams/profile/starbornone-003_pzkzue.png"
            width={256}
          />
        </Link>
        <div className="z-10 -ml-32 flex w-full flex-col gap-2 rounded-l-full bg-gray-900 py-4 pl-32 pr-8 lg:pr-12">
          {/* Date */}
          {post.date && (
            <time className="flex items-center gap-2" dateTime={post.date} aria-label="Publication date">
              <CalendarIcon className="h-4 w-4 text-gray-600" aria-hidden="true" />
              {format(new Date(post.date), 'dd MMMM yyyy')}
            </time>
          )}
          {/* Category */}
          {post.category && (
            <div className="flex items-center gap-2" aria-label="Category">
              <FolderIcon className="h-4 w-4 text-gray-600" aria-hidden="true" />
              <Link
                aria-label={`Explore more posts in the ${post.category.name} category`}
                href={`/categories/${post.category.slug}`}
              >
                {post.category.name}
              </Link>
            </div>
          )}
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2" aria-label="Tags">
              <TagIcon className="h-4 w-4 text-gray-600" aria-hidden="true" />
              <span aria-label="Tags">
                {post.tags.map((tag) => tag).reduce((prev, curr) => [prev, ', ', curr] as any)}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
