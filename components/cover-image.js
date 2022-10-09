import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ title, url, slug }) {
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
        <Link href={`/posts/${slug}`}>
          <a className="img-link">{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
