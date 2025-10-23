import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import { CalendarIcon, FolderIcon, TagIcon } from '@/components';
import { PostData } from '@/types';

import './PostPreview.css';

interface PostPreviewProps {
  post: PostData;
}

export function PostPreview({ post }: PostPreviewProps) {
  return (
    <article aria-label={`Post preview for ${post.title}`} className="post-preview">
      {/* Image Link */}
      <Link
        className="post-preview__image-link img-link"
        href={`/posts/${post.slug}`}
        aria-label={`Read more about ${post.title}`}
      >
        <Image
          alt={post.title}
          className="post-preview__image"
          height={600}
          src={
            post.coverImage
              ? post.coverImage.url
              : 'https://res.cloudinary.com/starborn/image/upload/v1727344591/ai-dreams/ai-dreams_mryb03.png'
          }
          width={1200}
        />
      </Link>

      <div className="post-preview__content">
        {/* Title with Link */}
        <h2 className="post-preview__title">
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
        <div className="post-preview__metadata">
          <div className="post-preview__metadata-primary">
            {/* Category */}
            {post.category && (
              <div className="post-preview__metadata-item" aria-label="Category">
                <FolderIcon className="post-preview__metadata-icon" aria-hidden="true" />
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
              <div className="post-preview__metadata-item" aria-label="Tags">
                <TagIcon className="post-preview__metadata-icon" aria-hidden="true" />
                <span aria-label="Tags">{post.tags.join(', ')}</span>
              </div>
            )}
          </div>

          {/* Date */}
          {post.date && (
            <time
              className="post-preview__date"
              dateTime={post.date}
              aria-label={`Published on ${format(new Date(post.date), 'dd MMMM yyyy')}`}
            >
              <CalendarIcon className="post-preview__metadata-icon" aria-hidden="true" />
              {format(new Date(post.date), 'dd MMMM yyyy')}
            </time>
          )}
        </div>

        {/* Excerpt */}
        <p className="post-preview__excerpt">
          {post.excerpt ||
            'Welcome to my blog. This website is a place where I share my thoughts and express my concerns about how external forces often shape our thoughts and actions in ways that favour them more than us. My goal here is to encourage deeper thinking, partly by critiquing the status quo.'}
        </p>

        {/* Read More Link */}
        <Link
          className="img-link post-preview__read-more"
          href={`/posts/${post.slug}`}
          aria-label={`Read more of ${post.title}`}
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
