import { CalendarIcon, FolderIcon, TagIcon } from '@/components';
import { PostData } from '@/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import './PostLink.css';

interface PostLinkProps {
  post: PostData;
}

export function PostLink({ post }: PostLinkProps) {
  return (
    <article aria-label={`Post preview for ${post.title}`}>
      <Link
        className="img-link post-link"
        data-content={post.title}
        href={`/posts/${post.slug}`}
        aria-label={`Read more about ${post.title}`}
      >
        {/* Post Image */}
        <Image
          alt={post.title}
          className="post-link__image"
          height={300}
          src={
            post.coverImage
              ? post.coverImage.url
              : 'https://res.cloudinary.com/starborn/image/upload/v1727344591/ai-dreams/ai-dreams_mryb03.png'
          }
          width={900}
          aria-hidden="true"
        />

        {/* Post Content */}
        <div className="post-link__content">
          {/* Title and Excerpt */}
          <div className="post-link__text">
            <h2 className="title-link post-link__title">{post.title}</h2>
            {post.excerpt && <p className="post-link__excerpt">{post.excerpt}</p>}
          </div>

          {/* Metadata: Category, Tags, Date */}
          <div className="post-link__metadata">
            {/* Category */}
            {post.category && (
              <div className="post-link__metadata-item" aria-label="Category">
                <FolderIcon className="post-link__metadata-icon" aria-hidden="true" />
                <span aria-label={`Category: ${post.category.name}`}>{post.category.name}</span>
              </div>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="post-link__metadata-item" aria-label="Tags">
                <TagIcon className="post-link__metadata-icon" aria-hidden="true" />
                <span aria-label="Tags">{post.tags.join(', ')}</span>
              </div>
            )}

            {/* Date */}
            {post.date && (
              <div className="post-link__metadata-item" aria-label="Publication date">
                <CalendarIcon className="post-link__metadata-icon" aria-hidden="true" />
                <time dateTime={post.date}>{format(new Date(post.date), 'dd MMMM yyyy')}</time>
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
