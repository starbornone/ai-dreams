import { CalendarIcon, FolderIcon, TagIcon } from '@/components';
import { PostData } from '@/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface PostPreviewProps {
  post: PostData;
}

export function PostPreview({ post }: PostPreviewProps) {
  return (
    <div className="my-6">
      <Link className="img-link" href={`/posts/${post.slug}`}>
        <Image
          alt={post.title}
          height={600}
          src={
            post.coverImage
              ? post.coverImage.url
              : 'https://res.cloudinary.com/starborn/image/upload/v1727344591/ai-dreams/ai-dreams_mryb03.png'
          }
          width={1200}
        />
      </Link>
      <div className="mx-auto max-w-prose">
        <h2 className="my-4 text-3xl leading-snug">
          <Link className="title-link" data-content={post.title} href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p className="mb-8 leading-relaxed text-gray-300">
          {post.excerpt ||
            'Welcome to my blog. This website is a place where I share my thoughts and express my concerns about how external forces often shape our thoughts and actions in ways that favour them more than us. My goal here is to encourage deeper thinking, partly by critiquing the status quo.'}
        </p>
        <div className="text-sm text-gray-500 lg:flex lg:justify-between">
          <div className="lg:flex lg:gap-6">
            {post.category && (
              <div className="flex items-center gap-2">
                <FolderIcon className="h-3 w-3 text-gray-600" />
                <Link href={`/categories/${post.category.slug}`}>{post.category.name}</Link>
              </div>
            )}
            {post.tags && (
              <div className="flex items-center gap-2">
                <TagIcon className="h-3 w-3 text-gray-600" />
                {post.tags.length > 0 ? post.tags.map((tag, index) => tag + (index === 0 ? ', ' : '')) : null}
              </div>
            )}
          </div>
          {post.date && (
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-3 w-3 text-gray-600" />
              {format(new Date(post.date), 'dd MMMM yyyy')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
