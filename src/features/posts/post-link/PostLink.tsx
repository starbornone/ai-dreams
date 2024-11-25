import { CalendarIcon, FolderIcon, TagIcon } from '@/components';
import { PostData } from '@/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface PostLinkProps {
  post: PostData;
}

export function PostLink({ post }: PostLinkProps) {
  return (
    <article aria-label={`Post preview for ${post.title}`}>
      <Link
        className="img-link group w-full gap-2 bg-gray-900 text-xl lg:grid lg:grid-cols-3 lg:gap-y-16"
        data-content={post.title}
        href={`/posts/${post.slug}`}
        aria-label={`Read more about ${post.title}`}
      >
        {/* Post Image */}
        <Image
          alt={post.title}
          className="object-cover object-bottom"
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
        <div className="col-span-2 flex flex-wrap content-between gap-4 p-4 lg:gap-0">
          {/* Title and Excerpt */}
          <div>
            <h2 className="title-link group-hover:text-gray-800">{post.title}</h2>
            <p className="mt-2 text-sm text-gray-300 group-hover:text-gray-800">
              {post.excerpt ||
                'Welcome to my blog. This website is a place where I share my thoughts and express my concerns about how external forces often shape our thoughts and actions in ways that favour them more than us. My goal here is to encourage deeper thinking, partly by critiquing the status quo.'}
            </p>
          </div>

          {/* Metadata: Category, Tags, Date */}
          <div className="flex flex-col gap-1 text-sm font-light text-gray-500 group-hover:text-gray-600 lg:flex-row lg:gap-6">
            {/* Category */}
            {post.category && (
              <div className="flex items-center gap-2" aria-label="Category">
                <FolderIcon className="h-3 w-3 text-gray-600" aria-hidden="true" />
                <span aria-label={`Category: ${post.category.name}`}>{post.category.name}</span>
              </div>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2" aria-label="Tags">
                <TagIcon className="h-3 w-3 text-gray-600" aria-hidden="true" />
                <span aria-label="Tags">{post.tags.join(', ')}</span>
              </div>
            )}

            {/* Date */}
            <div className="flex items-center gap-2" aria-label="Publication date">
              <CalendarIcon className="h-3 w-3 text-gray-600" aria-hidden="true" />
              <time dateTime={post.date}>{format(new Date(post.date), 'dd MMMM yyyy')}</time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
