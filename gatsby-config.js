/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
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
        name: "Gallery",
        link: "/gallery/",
        subItems: [],
      },
      {
        name: "Blog",
        link: "/blog/",
        subItems: [],
      },
      {
        name: "About",
        link: "/about/",
        subItems: [],
      },
      {
        name: "Services",
        link: "/services/",
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
          {
            name: "Last.fm",
            link: "https://www.last.fm/user/Spaqin/",
            icon: "lastfm.png"
          },
          {
            name: "Pixelfed",
            link: "https://pixelfed.social/i/web/profile/469890269962984040",
            icon: "pixelfed.png"
          }
        ],
      },
    ],
  },

  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    { 
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
                width: 800,
                ratio: 1.77, 
                height: 400, 
                related: false,
                noIframeBorder: true
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 900,
              linkImagesToOriginal: true,
            },
          },
          "gatsby-remark-gifs",
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-image-attributes"
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `spaqin`
      }
    }
  ],
}
