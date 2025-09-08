import { CalendarIcon, FolderIcon, TagIcon } from '@/components';
import { PostData } from '@/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import './MetaData.css';

interface Props {
  post: PostData;
}

export function MetaData({ post }: Props) {
  return (
    <>
      <div className="meta-data">
        {/* Author */}
        <Link aria-label="Read more about the author" className="meta-data__author" href="/pages/about">
          <Image
            alt="Human"
            aria-hidden="true"
            className="avatar-image meta-data__avatar"
            height={256}
            src="https://res.cloudinary.com/starborn/image/upload/v1732555832/ai-dreams/profile/starbornone-003_pzkzue.png"
            width={256}
          />
        </Link>
        <div className="meta-data__content">
          {/* Date */}
          {post.date && (
            <time className="meta-data__item" dateTime={post.date} aria-label="Publication date">
              <CalendarIcon className="meta-data__icon" aria-hidden="true" />
              {format(new Date(post.date), 'dd MMMM yyyy')}
            </time>
          )}
          {/* Category */}
          {post.category && (
            <div className="meta-data__item" aria-label="Category">
              <FolderIcon className="meta-data__icon" aria-hidden="true" />
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
            <div className="meta-data__item" aria-label="Tags">
              <TagIcon className="meta-data__icon" aria-hidden="true" />
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
