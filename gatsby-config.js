/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
  ],
};
