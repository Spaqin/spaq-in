import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const constructUrl = (baseUrl, path) =>
  (!baseUrl || !path) ? null : `${baseUrl}${path}`;

const Metadata = ({ title, description, imageUrl, imageAlt }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const metaTitle = title || data.site.siteMetadata.title
  const metaDescription = description || data.site.siteMetadata.description
  const defaultImageUrl = constructUrl(siteMetadata.siteUrl, "images/header-image.jpg")
  const ogImageUrl = imageUrl || defaultImageUrl;
  return (
    <Helmet
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:image",
          content: ogImageUrl,
        },
        {
          property: "twitter:image:alt",
          content: imageAlt || "spaq.in",
        },
      ].concat(meta)}
    />
  )
}

export default Metadata