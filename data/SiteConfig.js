const config = {
  siteTitle: "yutopya", // Site title.
  siteTitleShort: "yutopya.io", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "yutopya", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://yutopya.io", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Providing technology products and services using open source and decentralized solutions.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  // disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "YYYY-MM-DD", // Date format for display.
  userName: "Chris Lumpkin", // Username to display in the author segment.
  userEmail: "chris@yutopya.io", // Email used for RSS feed's author segment
  userTwitter: "yutopyan", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Washington, DC, USA", // User location to display in the author segment.
  userAvatar: "/assets/chris.jpg", // User avatar to display in the author segment.
  userDescription: "Dad, grandpa, systems thinker, futurist, builder.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/misterzero/yutopya.io",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/yutopyan",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Telegram",
      url: "https://t.me/yutopyan",
      iconClassName: "fa fa-telegram"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yutopyan",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Email",
      url: "mailto:chris@yutopya.io",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Chris Lumpkin" // Copyright string for the footer of the website and RSS feed.
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
