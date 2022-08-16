import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby"

import Metadata from "../components/metadata"
import Layout from "../components/layout"

import * as blogStyles from "./blog.module.scss"


const Blog = () => {
  const data = useStaticQuery(
    graphql`{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
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
        id
        fields {
          slug
        }
      }
    }
  }
}
`
  )
  return (
    <Layout>
      <h1>Blog</h1>
      <ul className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id} className={blogStyles.post}>
              <h2>
                <Link to={`/blog/${edge.node.fields.slug}/`}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <div className={blogStyles.meta}> 
                <span>
                  Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                  {edge.node.timeToRead} min read
                </span>
              </div>
              {
                edge.node.frontmatter.featured && (
                  <GatsbyImage
                    image={edge.node.frontmatter.featured.childImageSharp.gatsbyImageData}
                    className={blogStyles.featured}
                    alt={edge.node.frontmatter.title} />
                )
              }
              <p className={blogStyles.excerpt}>{edge.node.excerpt}</p>
              <div className={blogStyles.button}>
                <Link to={`/blog/${edge.node.fields.slug}/`}>Read More...</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export default Blog

export const Head = () => { return <Metadata title="Blog" description="this is the part no one cares about" />; };