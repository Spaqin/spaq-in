import React from "react"
import Layout from "../../components/layout"

import Metadata from "../../components/metadata"

import { graphql, useStaticQuery } from "gatsby"
import Gallery from '@browniebroke/gatsby-image-gallery'

const title = "Misc"

const Misc = () => {
  const query = useStaticQuery(graphql`query MiscImages {
  allFile(
    filter: {extension: {eq: "jpg"}, relativeDirectory: {glob: "gallery/misc"}}
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
      <h1>Miscallenous</h1>
      <p>Those images that don't fit one place in particular.</p>
      <Gallery images={images}/>
    </Layout>
  )
}

export default Misc

export const Head = () => { return <Metadata title={title} description={title}/>; };