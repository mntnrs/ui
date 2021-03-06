const path = require("path");

module.exports = {
  __experimentalThemes: [{ resolve: "gatsby-theme-mntnrs", options: {} }],
  siteMetadata: {
    title: "MNTNR.Systems",
    description: "Tools supporting open source maintainers",
    author: "@chrisbiscardi"
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: { default: path.resolve("./src/components/layout.js") }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "mntnr-systems",
        short_name: "mntnrs",
        start_url: "/",
        background_color: "#f1b8e8",
        theme_color: "#f1b8e8",
        display: "minimal-ui",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
