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
        subItems: [],
      },
      {
        name: "Blog",
        link: "/blog/",
        subItems: [],
      },
      {
        name: "Contact",
        link: "/contact/",
        subItems: [],
      },
      {
        name: "About",
        link: "/about/",
        subItems: [],
      },
      {
        name: "Social",
        link: "",
        subItems: [
          {
            name: "GitHub",
            link: "https://github.com/spaqin",
            icon: "github.png"
          },
          {
            name: "Instagram",
            link: "https://instagram.com/spaqout",
            icon: "insta.png"
          },
          {
            name: "Flickr",
            link: "https://flickr.com/people/142490931@N02/",
            icon: "flickr.png"
          },
        ],
      },
    ],
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
