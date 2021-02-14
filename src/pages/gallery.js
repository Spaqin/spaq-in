import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Metadata from "../components/metadata"

import galleryStyles from "./gallery.module.scss"

const GalleryLink = ({thumbArr, link}) => {
    return (
        <div className={galleryStyles.thumbDiv}>{thumbArr[link] && <Link to={"/"+link}><Img fixed={thumbArr[link].childImageSharp.fixed} /><h2>{link.split("/")[1]}</h2></Link>}</div>
    )
}

const Gallery = () => {
  const thumbnails = useStaticQuery(graphql`
  query ImagesForGallery {
    allFile(filter: {extension: {eq: "jpg"}, relativeDirectory: {glob: "gallery/*"}}) {
      edges {
        node {
          childImageSharp {
            fixed(width: 200, height: 200) {
                base64
                width
                height
                src
                srcSet
            }
          }
          relativeDirectory
        }
      }
    }
  }
  `)
  var thumb_arr = {};
  
  thumbnails.allFile.edges.forEach(edge => {
    if(edge.node.relativeDirectory in thumb_arr)
    {
        thumb_arr[edge.node.relativeDirectory].push(edge.node)
    }
    else {
        thumb_arr[edge.node.relativeDirectory] = [edge.node]
    }
  })
  Object.keys(thumb_arr).forEach( key => {
    thumb_arr[key] = thumb_arr[key][0] //can't with one query get one of each for the thumbnail, of course.
  })



  return (
    <Layout>
      <Metadata title="Gallery" description="the pretentious place"/>
      <h1>Gallery</h1>
      <p>Here you will find various pictures I have taken over the years. With different cameras, lenses, film, digital. Since I don't have a project per se yet, it's more of an assortment rather than something meaningful.</p>
      <div>
          {Object.keys(thumb_arr).map( (link) => <GalleryLink thumbArr={thumb_arr} link={link} key={link}/>)}
      </div>    

    </Layout>
  )
}

export default Gallery