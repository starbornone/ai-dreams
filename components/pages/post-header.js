import { format } from "date-fns";

import CoverImage from "components/cover-image";
import PostTitle from "components/pages/post-title";

export default function PostHeader({ coverImage, date, tags, title }) {
  return (
    <>
      {coverImage && (
        <div className="mb-8 -mx-5 md:mb-12 sm:mx-0">
          <CoverImage title={title} url={coverImage.url} />
        </div>
      )}
      <div className="flex justify-between max-w-3xl mx-auto mb-6">
        {tags && (
          <div className="flex gap-8 text-gray-300 font-light">
            {tags.map((tag) => (
              <div key={tag}>{tag}</div>
            ))}
          </div>
        )}
        {date && (
          <div className="text-gray-300 font-light">
            {format(new Date(date), "dd MMMM yyyy")}
          </div>
        )}
      </div>
      <PostTitle>{title}</PostTitle>
    </>
  );
}
