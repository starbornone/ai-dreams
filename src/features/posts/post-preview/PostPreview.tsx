import { PostData } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { MetaData } from '../meta-data';
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
        <MetaData post={post} />
        <p className="leading-relaxed text-gray-300">
          {post.excerpt ||
            'Welcome to my blog. This website is a place where I share my thoughts and express my concerns about how external forces often shape our thoughts and actions in ways that favour them more than us. My goal here is to encourage deeper thinking, partly by critiquing the status quo.'}
        </p>
        <Link className="img-link bg-gray-900 px-4 py-2 hover:text-gray-800" href={`/posts/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}
