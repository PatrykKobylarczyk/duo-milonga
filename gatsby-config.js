/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Duo Milonga - Harp and Accordion`,
    description: `The accordion and harp duo - concerts, musical setting, corporate events, events`,
    image: `src/assets/images/favicon.png`,
    siteUrl: `https://www.duomilonga.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
  ],
};
