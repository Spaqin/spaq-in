import React from "react"
import Layout from "../../components/layout"

import Metadata from "../../components/metadata"

import { graphql, useStaticQuery } from "gatsby"
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const Misc = () => {
  const title = "Misc"
  const query = useStaticQuery(graphql`
  query MiscImages {
    allFile(filter: {extension: {eq: "jpg"}, relativeDirectory: {glob: "gallery/misc"}}) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`)
  const images = query.allFile.edges.map(( {node} ) => node.childImageSharp)
  return (
    <Layout>
      <Metadata title={title} description={title}/>
      <h1>Miscallenous</h1>
      <p>Those images that don't fit one place in particular.</p>
      <Gallery images={images}/>
    </Layout>
  )
}

export default Misc