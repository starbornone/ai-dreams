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
    <article aria-label={`Post preview for ${post.title}`}>
      {/* Image Link */}
      <Link
        className={clsx(styles['post-preview__image-link'], 'img-link')}
        href={`/posts/${post.slug}`}
        aria-label={`Read more about ${post.title}`}
      >
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

      <div className={styles['post-preview__content']}>
        {/* Title with Link */}
        <h2 className={styles['post-preview__title']}>
          <Link
            className="title-link"
            data-content={post.title}
            href={`/posts/${post.slug}`}
            aria-label={`Read more about ${post.title}`}
          >
            {post.title}
          </Link>
        </h2>

        {/* Metadata Section */}
        <div className={styles['post-preview__metadata']}>
          <div className={styles['post-preview__metadata-left']}>
            {/* Category */}
            {post.category && (
              <div className={styles['post-preview__metadata-item']} aria-label="Category">
                <FolderIcon className={styles['post-preview__metadata-icon']} aria-hidden="true" />
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
              <div className={styles['post-preview__metadata-item']} aria-label="Tags">
                <TagIcon className={styles['post-preview__metadata-icon']} aria-hidden="true" />
                <span aria-label="Tags">{post.tags.join(', ')}</span>
              </div>
            )}
          </div>

          {/* Date */}
          {post.date && (
            <time
              className={styles['post-preview__date']}
              dateTime={post.date}
              aria-label={`Published on ${format(new Date(post.date), 'dd MMMM yyyy')}`}
            >
              <CalendarIcon className={styles['post-preview__metadata-icon']} aria-hidden="true" />
              {format(new Date(post.date), 'dd MMMM yyyy')}
            </time>
          )}
        </div>

        {/* Excerpt */}
        <p className={styles['post-preview__excerpt']}>
          {post.excerpt ||
            'Welcome to my blog. This website is a place where I share my thoughts and express my concerns about how external forces often shape our thoughts and actions in ways that favour them more than us. My goal here is to encourage deeper thinking, partly by critiquing the status quo.'}
        </p>

        {/* Read More Link */}
        <Link
          className={`img-link ${styles['post-preview__read-more']}`}
          href={`/posts/${post.slug}`}
          aria-label={`Read more of ${post.title}`}
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
