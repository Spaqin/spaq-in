import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby"
import { Disqus } from 'gatsby-plugin-disqus';

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
    excerpt
    html
  }
  sitePage {
    path
  }
}
`

const BlogPost = props => {
  const disqusConfig = {
      identifier: props.pageContext.slug,
      title: props.data.markdownRemark.frontmatter.title,
      url: 'https://spaq.in' + props.path, 
  }
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
      <div>
        <Disqus config={disqusConfig} />
      </div>
    </Layout>
  );
}

export default BlogPost

export const Head = ({
  data: {
    markdownRemark: {
      frontmatter,
      excerpt
    }
  }
}) => { return <Metadata 
                  title={frontmatter.title + " | spaq.in"} 
                  description={excerpt}
                  imageUrl={"https://spaq.in/" + frontmatter.featured?.childImageSharp?.fixed?.src}
                  imageAlt={frontmatter.title}
                /> 
      }