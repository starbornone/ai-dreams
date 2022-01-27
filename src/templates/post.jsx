import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { DateTime } from "luxon";

import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";

export default function PostTemplate({ data, pageContext }) {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;

  if (!postNode) {
    return <div></div>;
  }

  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-16">
        <img src={post.cover} />
      </div>
      <div className="max-w-prose mx-auto">
        <Helmet title={`${post.title} | ${config.siteTitle}`} />
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>
            <span className="mt-16 block text-3xl text-center leading-8 tracking-tight text-gray-900 sm:text-4xl font-heading">
              {post.title}
            </span>
          </h1>
          <div className="flex justify-between w-full text-gray-500 text-xs content-center">
            {post.timeToRead && (
              <div>
                <div className="py-1">{post.timeToRead}</div>
              </div>
            )}
            {post.category && (
              <div className="flex flex-wrap">
                <div className="border mx-1 px-2 py-1 rounded-full uppercase">
                  {post.category}
                </div>
              </div>
            )}
          </div>
          {/* eslint-disable-next-line react/no-danger */}
          <article
            className="mt-6 text-gray-600 mx-auto font-body font-light"
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          />
          <div className="flex items-center justify-between my-16">
            <PostTags tags={post.tags} />
            <SocialLinks postPath={slug} postNode={postNode} />
          </div>
          <UserInfo config={config} />
        </div>
      </div>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
        timeToRead
      }
      fields {
        slug
        date
      }
    }
  }
`;
