import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby"
import { Donate } from 'react-kofi-overlay'
import IssoComments from "../components/IssoComments"

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
    fields {
      slug
    }
  }
  sitePage {
    path
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
      <div>
        <hr/>
        <p>
        Have you enjoyed the post or found it useful? Consider throwing some currency using the button below or directly through <a href="https://ko-fi.com/spaqin">Ko-fi</a>.
       </p> <p>
        If you like a photo from here enough that you'd like to have a print of, feel free to contact me by <a href="mailto:3garfield@gmail.com">email</a>.
        </p><p>
        This page will never have ads, sponsors or any other annoyances; I believe in the Old Internet Spirit. It does mean though that it's all shot and written in my spare time which is limited at times.
        </p>

      <Donate
        username="spaqin"
        classNames={{
          donateBtn: 'myDonateButton',
          profileLink: 'myProfileLink'
        }}
        styles={{
          panel: { marginRight: '4em' }
        }}
      >
        📷 Help Me Out ❤️
      </Donate>
      </div>

      <div className={postStyles.comments}>
        <hr/>
        <IssoComments slug={props.data.markdownRemark.fields.slug} />
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
                  imageUrl={"https://spaq.in/" + frontmatter.featured.childImageSharp.gatsbyImageData.images.fallback.src}
                  imageAlt={frontmatter.title}
                /> 
      }
