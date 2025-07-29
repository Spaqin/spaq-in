import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Metadata = ({ title, description, imageUrl, imageAlt, pathname, ogType }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )
  const metaTitle = title || data.site.siteMetadata.title
  const metaDescription = description || data.site.siteMetadata.description
  const { siteUrl } = data.site.siteMetadata
  const defaultImageUrl = `${siteUrl}/static/header-image-cc29ffc6b934abaf63d07968b37979dc.jpg`
  const ogImageUrl = imageUrl || defaultImageUrl;
  const canonicalUrl = pathname ? `${siteUrl}${pathname}` : null;
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
          content: ogType || `website`,
        },
        {
          property: "og:image",
          content: ogImageUrl,
        },
        {
          property: "twitter:image:alt",
          content: imageAlt || "spaq.in",
        },
      ].concat(canonicalUrl ? [{ property: `og:url`, content: canonicalUrl }] : [])}
    />
  )
}

export default Metadata