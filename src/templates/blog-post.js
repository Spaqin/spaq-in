import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby"

import Layout from "../components/layout"
import * as postStyles from "./blogPost.module.scss"

import Metadata from "../components/metadata"


export const query = graphql`query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      date(formatString: "DD MMMM, YYYY")
      featured {
        childImageSharp {
          gatsbyImageData(width: 900, layout: CONSTRAINED)
        }
      }
    }
    timeToRead
    html
  }
}
`

const BlogPost = props => {
  return (
    <Layout>
      <div className={postStyles.content}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <span className={postStyles.meta}>
            Posted on {props.data.markdownRemark.frontmatter.date}{" "}
            <span> / </span> {props.data.markdownRemark.timeToRead} min read
        </span>
        {
            props.data.markdownRemark.frontmatter.featured && (
                <GatsbyImage
                  image={props.data.markdownRemark.frontmatter.featured.childImageSharp.gatsbyImageData}
                  className={postStyles.featured}
                  alt={props.data.markdownRemark.frontmatter.title} />
            )
        }
        <div 
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
      </div>
    </Layout>
  );
}

export default BlogPost

export const Head = ({
  data: {
    markdownRemark: {
      frontmatter: {title}
    }
  }
}) => { return <Metadata title={title} /> }