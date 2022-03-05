import React from "react";
import { Link } from "gatsby";
import { DateTime } from "luxon";

import PostTags from "../PostTags/PostTags";

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      thumbnail: postEdge.node.frontmatter.thumbnail,
      title: postEdge.node.frontmatter.title,
      category: postEdge.node.frontmatter.category,
      tags: postEdge.node.frontmatter.tags,
      description: postEdge.node.frontmatter.description,
      date: DateTime.fromISO(postEdge.node.fields.date),
    });
  });

  return (
    <div>
      {postList.map((post) => (
        <div
          className="mt-6 pt-10 grid gap-16 md:grid-cols-2 lg:gap-x-5 lg:gap-y-16"
          key={post.title}
        >
          <div>
            <Link className="block" to={post.path}>
              <img
                alt={post.title}
                className="object-cover"
                src={post.thumbnail}
              />
            </Link>
          </div>
          <div className="flex flex-wrap content-between">
            <div>
              <p className="font-meta text-xs text-gray-400 tracking-wider uppercase">
                <time date={post.date}>
                  {post.date.toLocaleString(DateTime.DATE_FULL)}
                </time>
              </p>
              <Link
                className="block font-heading mt-2 text-gray-900 text-xl transition duration-150 ease-in-out hover:text-red-700"
                to={post.path}
              >
                {post.title}
              </Link>
              <div className="mt-3 prose text-sm text-gray-500">
                {post.description}
              </div>
            </div>
            <div className="flex justify-between w-full mt-2">
              <PostTags tags={post.tags} />
              {post.category && (
                <div className="content-end flex flex-wrap">
                  <div className="border mx-1 px-2 py-1 rounded-full text-gray-500 text-xs uppercase">
                    {post.category}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostListing;
