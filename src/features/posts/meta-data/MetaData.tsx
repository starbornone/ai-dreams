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
      <div className="mt-12 flex flex-row items-center justify-between gap-4 text-sm text-gray-500">
        {/* Author */}
        <Link aria-label="Read more about the author" className="flex items-center gap-2" href="/pages/about">
          <Image
            alt="Human"
            aria-hidden="true"
            className="h-12 w-auto rounded-full border-2 border-gray-900 bg-gray-800"
            height={61}
            src="https://res.cloudinary.com/starborn/image/upload/v1731091304/ai-dreams/profile/human.png"
            width={36}
          />
        </Link>
        {/* Date */}
        {post.date && (
          <time className="flex items-center gap-2 lg:justify-end" dateTime={post.date} aria-label="Publication date">
            <CalendarIcon className="h-4 w-4 text-gray-600" aria-hidden="true" />
            {format(new Date(post.date), 'dd MMMM yyyy')}
          </time>
        )}
      </div>

      <div className="my-4 flex flex-row items-center justify-between gap-4 text-sm text-gray-500">
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
            <span>{post.tags.map((tag) => tag).reduce((prev, curr) => [prev, ', ', curr] as any)}</span>
          </div>
        )}
      </div>
    </>
  );
}
