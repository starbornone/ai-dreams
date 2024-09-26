import { PostData } from '@/types';
import { format } from 'date-fns';
import Link from 'next/link';

interface PostLinkProps {
  post: PostData;
}

export function PostLink({ post }: PostLinkProps) {
  return (
    <div className="my-6 lg:my-14" key={post.slug}>
      <Link
        className="img-link group w-full gap-2 bg-gray-900 text-xl lg:grid lg:grid-cols-3 lg:gap-y-16"
        data-content={post.title}
        href={`/posts/${post.slug}`}
      >
        <img
          alt={post.title}
          className="h-48 w-full object-cover"
          src={
            post.coverImage
              ? post.coverImage.url
              : 'https://res.cloudinary.com/starborn/image/upload/v1727344591/ai-dreams/ai-dreams_mryb03.png'
          }
        />
        <div className="col-span-2 flex flex-wrap content-between p-4">
          <div>
            <div className="title-link group-hover:text-gray-800">{post.title}</div>
            <div className="my-2 text-sm text-gray-300 group-hover:text-gray-800">{post.excerpt}</div>
          </div>
          <div className="gap-6 text-sm font-light text-gray-500 group-hover:text-gray-700 lg:flex">
            {post.category && (
              <div className="flex items-center gap-2 lowercase">
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 text-gray-600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-156.1 0c-17 0-33.3-6.7-45.3-18.7L210.7 73.4c-6-6-14.1-9.4-22.6-9.4L64 64zM0 96C0 60.7 28.7 32 64 32l124.1 0c17 0 33.3 6.7 45.3 18.7l35.9 35.9c6 6 14.1 9.4 22.6 9.4L448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
                </svg>
                {post.category.name}
              </div>
            )}
            {post.tags && (
              <div className="flex items-center gap-2 lowercase">
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 text-gray-600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M204.1 32c12.7 0 24.9 5.1 33.9 14.1L410.7 218.7c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0L14.1 270.1c-9-9-14.1-21.2-14.1-33.9L0 80C0 53.5 21.5 32 48 32l156.1 0zM36.7 247.4L209.4 420.1c12.5 12.5 32.8 12.5 45.3 0L388.1 286.6c12.5-12.5 12.5-32.8 0-45.3L215.4 68.7c-3-3-7.1-4.7-11.3-4.7L48 64c-8.8 0-16 7.2-16 16l0 156.1c0 4.2 1.7 8.3 4.7 11.3zM308.4 36.9c6.1-6.4 16.2-6.6 22.6-.5l141.3 135c52.8 50.4 52.8 134.7 0 185.1l-124.6 119c-6.4 6.1-16.5 5.9-22.6-.5s-5.9-16.5 .5-22.6l124.6-119c39.6-37.8 39.6-101 0-138.8L308.9 59.6c-6.4-6.1-6.6-16.2-.5-22.6zM104 112a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                </svg>
                <span>
                  {post.tags.length > 0 ? post.tags.map((tag, index) => tag + (index === 0 ? ', ' : '')) : null}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-3 w-3 text-gray-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M112 0c8.8 0 16 7.2 16 16l0 48 192 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 32 0 32 0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192l0-32 0-32C0 92.7 28.7 64 64 64l32 0 0-48c0-8.8 7.2-16 16-16zM416 192L32 192l0 256c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-256zM384 96L64 96c-17.7 0-32 14.3-32 32l0 32 384 0 0-32c0-17.7-14.3-32-32-32z" />
              </svg>
              {format(new Date(post.date), 'dd MMMM yyyy')}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
