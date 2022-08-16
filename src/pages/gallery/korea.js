import React from "react"
import Layout from "../../components/layout"

import Metadata from "../../components/metadata"

import { graphql, useStaticQuery } from "gatsby"
import Gallery from '@browniebroke/gatsby-image-gallery'
//import '@browniebroke/gatsby-image-gallery/dist/style.css'

const title = "Korea"

const Korea = () => {
  const query = useStaticQuery(graphql`query KoreaImages {
  allFile(
    filter: {extension: {eq: "jpg"}, relativeDirectory: {glob: "gallery/korea"}}
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
      <p>I have studied there back in 2015 and 2016. However, I wasn't good at taking pictures back then, so I had to go back and shoot some more. And I did, in October 2019.</p>
      <p>Most of them were shot with a Canon 700D with a Sigma 18-200mm lens, some may have been taken with a Mamiya RB67 too.</p>
      <Gallery images={images}/>
    </Layout>
  )
}

export default Korea

export const Head = () => { return <Metadata title={title} description={"pictures from " + title}/>; };