import React from "react"
import Layout from "../../components/layout"

import Metadata from "../../components/metadata"

import { graphql, useStaticQuery } from "gatsby"
import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

const Pets = () => {
  const title = "Urbex"
  const query = useStaticQuery(graphql`
  query UrbexImages {
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
      <Metadata title={title} description="Pictures of urban exploration"/>
      <h1>{title}</h1>
      <p>Sometimes you just gotta go somewhere where another human hasn't gone in a while.</p>
	  <p>Where function of the place has been abandoned. And yet, human curiosity can't keep us away from the "Trespassing is forbidden" signs.</p>
      <Gallery images={images}/>
    </Layout>
  )
}

export default Urbex