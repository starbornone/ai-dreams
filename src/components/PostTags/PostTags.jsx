import React from "react";
import _ from "lodash";
import { Link } from "gatsby";

function PostTags({ tags }) {
  return (
    <div className="font-meta text-xs tracking-wider uppercase">
      {tags &&
        tags.map((tag) => (
          <Link
            className="mr-12"
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
