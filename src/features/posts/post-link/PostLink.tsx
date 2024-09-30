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
    <div className="my-6 lg:my-14">
      <Link
        className="img-link group w-full gap-2 bg-gray-900 text-xl lg:grid lg:grid-cols-3 lg:gap-y-16"
        data-content={post.title}
        href={`/posts/${post.slug}`}
      >
        <Image
          alt={post.title}
          className="object-cover"
          height={300}
          src={
            post.coverImage
              ? post.coverImage.url
              : 'https://res.cloudinary.com/starborn/image/upload/v1727344591/ai-dreams/ai-dreams_mryb03.png'
          }
          width={600}
        />
        <div className="col-span-2 flex flex-wrap content-between p-4">
          <div>
            <div className="title-link group-hover:text-gray-800">{post.title}</div>
            <div className="my-2 text-sm text-gray-300 group-hover:text-gray-800">{post.excerpt}</div>
          </div>
          <div className="gap-6 text-sm font-light text-gray-500 group-hover:text-gray-700 lg:flex">
            {post.category && (
              <div className="flex items-center gap-2">
                <FolderIcon className="h-3 w-3 text-gray-600" />
                {post.category.name}
              </div>
            )}
            {post.tags && (
              <div className="flex items-center gap-2">
                <TagIcon className="h-3 w-3 text-gray-600" />
                <span>
                  {post.tags.length > 0 ? post.tags.map((tag, index) => tag + (index === 0 ? ', ' : '')) : null}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-3 w-3 text-gray-600" />
              {format(new Date(post.date), 'dd MMMM yyyy')}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
