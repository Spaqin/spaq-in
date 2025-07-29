import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Metadata = ({ title, description, imageUrl, imageAlt, pathname, ogType, tags, date }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )
  const { siteMetadata } = data.site
  const metaTitle = title || siteMetadata.title
  const metaDescription = description || siteMetadata.description
  const { siteUrl, author } = siteMetadata
  const defaultImageUrl = `${siteUrl}/static/header-image-cc29ffc6b934abaf63d07968b37979dc.jpg`
  const ogImageUrl = imageUrl || defaultImageUrl;
  const canonicalUrl = pathname ? `${siteUrl}${pathname}` : null;

  const meta = [
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
    // Twitter Card
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:creator",
      content: siteMetadata.author || "",
    },
    {
      name: "twitter:title",
      content: metaTitle,
    },
    {
      name: "twitter:description",
      content: metaDescription,
    },
    {
      property: "twitter:image",
      content: ogImageUrl,
    },
    {
      property: "twitter:image:alt",
      content: imageAlt || "spaq.in",
    },
  ];

  if (tags && tags.length > 0) {
    meta.push({
      name: `keywords`,
      content: tags.join(`, `),
    });
  }

  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "headline": metaTitle,
    "image": ogImageUrl,
    "description": metaDescription,
    "datePublished": date,
    "author": { "@type": "Person", "name": author },
    "publisher": { "@type": "Organization", "name": author, "logo": { "@type": "ImageObject", "url": defaultImageUrl } },
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={metaTitle}
      meta={meta.concat(canonicalUrl ? [{ property: `og:url`, content: canonicalUrl }] : [])}>
      {ogType === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      )}
    </Helmet>
  )
}

export default Metadata