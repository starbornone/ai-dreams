import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/pro-light-svg-icons';
import { faFacebookF, faLinkedinIn, faRedditAlien, faTwitter, faVk, faWeibo } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  VKShareButton,
  WeiboShareButton
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

function SocialLinks({ postNode, postPath }) {
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath);

  return (
    <div className="social-links">
      <RedditShareButton url={url} title={post.title}>
        <span className="fa-2x">
          <span className="fa-layers fa-fw text-gray-400">
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faRedditAlien} transform="shrink-7" />
          </span>
        </span>
      </RedditShareButton>
      <TwitterShareButton url={url} title={post.title}>
        <span className="fa-2x">
          <span className="fa-layers fa-fw text-gray-400">
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faTwitter} transform="shrink-7" />
          </span>
        </span>
      </TwitterShareButton>
      <WeiboShareButton url={url} title={post.title}>
        <span className="fa-2x">
          <span className="fa-layers fa-fw text-gray-400">
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faWeibo} transform="shrink-7" />
          </span>
        </span>
      </WeiboShareButton>
      <VKShareButton url={url} title={post.title}>
        <span className="fa-2x">
          <span className="fa-layers fa-fw text-gray-400">
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faVk} transform="shrink-7" />
          </span>
        </span>
      </VKShareButton>
      <FacebookShareButton url={url} quote={postNode.excerpt}>
        <span className="fa-2x">
          <span className="fa-layers fa-fw text-gray-400">
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faFacebookF} transform="shrink-7" />
          </span>
        </span>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={post.title}
        description={postNode.excerpt}
      >
        <span className="fa-2x">
          <span className="fa-layers fa-fw text-gray-400">
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faLinkedinIn} transform="shrink-7" />
          </span>
        </span>
      </LinkedinShareButton>
    </div>
  );
}

export default SocialLinks;
