import React from "react"
import Layout from "../../components/layout"

import Metadata from "../../components/metadata"

import { graphql, useStaticQuery } from "gatsby"
import Gallery from '@browniebroke/gatsby-image-gallery'
//import '@browniebroke/gatsby-image-gallery/dist/style.css'

const title = "Warsaw"

const Warsaw = () => {
  const query = useStaticQuery(graphql`query WarsawImages {
  allFile(
    filter: {extension: {eq: "jpg"}, relativeDirectory: {glob: "gallery/warsaw"}}
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
      
      <h1>{title}</h1>
      <p>This huge city where you can subsist, but not really live. With some good points. Sometimes.

        2022 correction - it's not really huge. My perspective has been adjusted.
      </p>
      <Gallery images={images}/>
    </Layout>
  )
}

export default Warsaw

export const Head = () => { return <Metadata title={title} description={"pictures from " + title}/> }