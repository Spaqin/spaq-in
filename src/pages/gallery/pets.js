import React from "react"
import Layout from "../../components/layout"

import Metadata from "../../components/metadata"

import { graphql, useStaticQuery } from "gatsby"
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const Pets = () => {
  const title = "Pets"
  const query = useStaticQuery(graphql`
  query PetsImages {
    allFile(filter: {extension: {eq: "jpg"}, relativeDirectory: {glob: "gallery/pets"}}) {
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
      <h1>{title}</h1>
      <p>Well, mostly just one little <i>kot.</i></p>
      <Gallery images={images}/>
    </Layout>
  )
}

export default Pets