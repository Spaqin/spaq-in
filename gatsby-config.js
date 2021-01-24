/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "spaq.in",
    description: "professional programmer, amateur photographer, or the other way around",
    author: "Spaqin",
    flatNavItems: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blog",
        link: "/blog/",
      },
      {
        name: "Contact",
        link: "/contact/",
      },
      {
        name: "About",
        link: "/about/",
      },
    ]
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    { 
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

  ],
}
