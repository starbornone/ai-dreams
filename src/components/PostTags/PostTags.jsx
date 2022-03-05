import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

function PostTags({ tags }) {
  return (
    <div className="font-meta grid grid-cols-2 gap-x-6 text-xs tracking-wider uppercase">
      {tags &&
        tags.map((tag) => (
          <Link
            className="inline-block"
            key={tag}
            style={{ textDecoration: "none" }}
            to={`/tags/${_.kebabCase(tag)}`}
          >
            {tag}
          </Link>
        ))}
    </div>
  );
}

export default PostTags;
