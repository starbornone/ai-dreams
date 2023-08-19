import Image from 'next/image';
import Link from 'next/link';

interface Props {
  slug?: string;
  title: string;
  url: string;
}

export function CoverImage({ title, url, slug }: Props) {
  const image = (
    <Image
      alt={title}
      className="link-inner object-cover object-center"
      height={600}
      src={url}
      width={1200}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link className="img-link" href={`/posts/${slug}`}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
