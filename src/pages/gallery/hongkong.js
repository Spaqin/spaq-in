import React from "react"
import Layout from "../../components/layout"

import Metadata from "../../components/metadata"

import { graphql, useStaticQuery } from "gatsby"
import Gallery from '@browniebroke/gatsby-image-gallery'

const title = "Misc"

const Misc = () => {
  const query = useStaticQuery(graphql`query MiscImages {
  allFile(
    filter: {extension: {eq: "jpg"}, relativeDirectory: {glob: "gallery/hk"}}
  ) {
    edges {
      node {
        childImageSharp {
          thumb: gatsbyImageData(width: 270, height: 270, layout: CONSTRAINED)
          full: gatsbyImageData(width: 1800, layout: CONSTRAINED)
        }
      }
    }
  }
}
`)
  const images = query.allFile.edges.map(( {node} ) => node.childImageSharp)
  return (
    <Layout>
      <h1>Hong Kong</h1>
      <p>The place where I ended up. The good, the bad; the mountains, the seas.</p>
      <Gallery images={images}/>
    </Layout>
  )
}

export default Misc

export const Head = () => { return <Metadata title={title} description={title}/>; };