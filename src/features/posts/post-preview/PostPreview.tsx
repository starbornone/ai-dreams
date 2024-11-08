import { CalendarIcon, FolderIcon, TagIcon } from '@/components';
import { PostData } from '@/types';
import clsx from 'clsx';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PostPreview.module.css';

interface PostPreviewProps {
  post: PostData;
}

export function PostPreview({ post }: PostPreviewProps) {
  return (
    <div className="my-6">
      <Link className={clsx(styles['post-preview__image-link'], 'img-link')} href={`/posts/${post.slug}`}>
        <Image
          alt={post.title}
          className={styles['post-preview__image']}
          height={600}
          src={
            post.coverImage
              ? post.coverImage.url
              : 'https://res.cloudinary.com/starborn/image/upload/v1727344591/ai-dreams/ai-dreams_mryb03.png'
          }
          width={1200}
        />
      </Link>
      <div className="mx-auto my-4 flex max-w-prose flex-col gap-4">
        <h2 className="text-3xl leading-snug">
          <Link className="title-link" data-content={post.title} href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <div className="flex flex-col justify-between gap-4 text-sm text-gray-500 lg:flex-row lg:items-center">
          <div className="flex flex-row items-center justify-between gap-2 lg:justify-start">
            {/* Author */}
            <Link aria-label="Read more about the author" className="flex items-center gap-2" href="/pages/about">
              <Image
                alt="Human"
                aria-hidden="true"
                className="h-8 w-auto rounded-full border-2 border-gray-900 bg-gray-800"
                height={61}
                src="https://res.cloudinary.com/starborn/image/upload/v1731091304/ai-dreams/profile/human.png"
                width={36}
              />
            </Link>
            {/* Date */}
            {post.date && (
              <time
                className="flex items-center gap-2 lg:justify-end"
                dateTime={post.date}
                aria-label="Publication date"
              >
                <CalendarIcon className="h-4 w-4 text-gray-600" aria-hidden="true" />
                {format(new Date(post.date), 'dd MMMM yyyy')}
              </time>
            )}
          </div>
          <div className="flex flex-row items-center justify-between gap-2 lg:justify-start">
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
        </div>
        <p className="my-2 leading-relaxed text-gray-300">
          {post.excerpt ||
            'Welcome to my blog. This website is a place where I share my thoughts and express my concerns about how external forces often shape our thoughts and actions in ways that favour them more than us. My goal here is to encourage deeper thinking, partly by critiquing the status quo.'}
        </p>
        <Link className="img-link mt-2 bg-gray-900 px-4 py-2 hover:text-gray-800" href={`/posts/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}
