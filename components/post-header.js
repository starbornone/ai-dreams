import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage }) {
  return (
    <>
      <div className="mb-8 -mx-5 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <PostTitle>{title}</PostTitle>
    </>
  );
}
