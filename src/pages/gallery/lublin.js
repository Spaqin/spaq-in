import React from "react"
import Layout from "../../components/layout"

import Metadata from "../../components/metadata"

import { graphql, useStaticQuery } from "gatsby"
import Gallery from '@browniebroke/gatsby-image-gallery'
//import '@browniebroke/gatsby-image-gallery/dist/style.css'

const title = "Lublin"

const Lublin = () => {
  const query = useStaticQuery(graphql`query LublinImages {
  allFile(
    filter: {extension: {eq: "jpg"}, relativeDirectory: {glob: "gallery/lublin"}}
  ) {
    edges {
      node {
        childImageSharp {
          thumb: gatsbyImageData(width: 270, height: 270, layout: CONSTRAINED)
          full: fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
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
      <p>This little city in the Eastern Poland seems to have a lot of charm. Besides the Old Town, you could also enjoy the lake on the outskirts.</p>
      <Gallery images={images}/>
    </Layout>
  )
}

export default Lublin

export const Head = () => { return <Metadata title={title} description={"pictures from " + title}/>; };