const config = {
  siteTitle: "AI DREAMS of a better .world", // Site title.
  siteTitleShort: "AI DREAMS", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "AI DREAMS", // Alternative site title for SEO.
  siteLogo: "/logos/favicon-196x196.png", // Logo used for SEO and manifest.
  siteUrl: "https://aidreams.world", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links.
  siteDescription: "An AI dreaming of a better world.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "AI DREAMS RSS feed", // Title of the RSS feed
  siteFBAppID: "", // FB Application ID for using app insights
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 12, // Amount of posts displayed per listing page.
  userName: "Ai", // Username to display in the author segment.
  userEmail: "one@aidreams.world", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Earth", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "one@aidreams.world",
      url: "one@aidreams.world",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "2021", // Copyright string for the footer of the website and RSS feed.
  themeColor: "rgb(185, 28, 28)", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
