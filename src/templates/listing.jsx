import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import { DateTime } from "luxon";

import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

function Listing({ pageContext, data }) {
  function renderPaging() {
    const { currentPageNum, pageCount } = pageContext;
    const prevPage = currentPageNum - 1 === 1 ? "/" : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <nav className="border-t border-gray-200 flex items-center justify-between my-16 px-4 w-full sm:px-0">
        <div className="-mt-px w-0 flex-1 flex">
          {!isFirstPage && (
            <Link
              className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              to={prevPage}
            >
              Previous
            </Link>
          )}
        </div>
        <div className="hidden md:-mt-px md:flex">
          {[...Array(pageCount)].map((_val, index) => {
            const pageNum = index + 1;
            return (
              <Link
                activeClassName="border-red-600 text-gray-900"
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                key={`listing-page-${pageNum}`}
                to={pageNum === 1 ? "/" : `/${pageNum}/`}
              >
                {pageNum}
              </Link>
            );
          })}
        </div>
        <div className="-mt-px w-0 flex-1 flex justify-end">
          {!isLastPage && (
            <Link
              className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              to={nextPage}
            >
              Next
            </Link>
          )}
        </div>
      </nav>
    );
  }

  const postEdges = [];
  data.allMarkdownRemark.edges.map((post) => {
    if (DateTime.fromISO(post.node.fields.date) <= DateTime.local()) {
      postEdges.push(post);
    }
  });

  return (
    <Layout>
      <div className="listing-container">
        <div className="posts-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <PostListing postEdges={postEdges} />
        </div>
        {pageContext.pageCount > 1 && renderPaging()}
      </div>
    </Layout>
  );
}

export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            description
            category
            thumbnail
            date
            tags
          }
        }
      }
    }
  }
`;
