import React from "react"
import Layout from "../../components/layout"

import Metadata from "../../components/metadata"

import { graphql, useStaticQuery } from "gatsby"
import Gallery from '@browniebroke/gatsby-image-gallery'

const title = "Best Of 2022"

const Warsaw = () => {
  const query = useStaticQuery(graphql`query BestOf2022Images {
  allFile(
    filter: {extension: {eq: "jpg"}, relativeDirectory: {glob: "gallery/bestof2022"}}
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
      <p>
        A small collection of images that I subjectively have chosen to highlight this year.

        They may be nice to look at, or seem important from the historical context.

        No rhyme or reason, no theme, wasted bandwidth will not be refunded.
      </p>
      <Gallery images={images}/>
    </Layout>
  )
}

export default Warsaw

export const Head = () => { return <Metadata title={title} description={"Best pics of 2022"}/> }