import React from "react"
import * as footerStyles from "./footer.module.scss"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(
      graphql`
      query {
          site {
              siteMetadata {
                author
              }
          }
      }
      `
  )
  return (
      <footer className={footerStyles.siteFooter}>
        <div className={footerStyles.container}>
          <p>
              &copy; 2024, <Link to="/about/">{data.site.siteMetadata.author}</Link>
          </p>
        </div>
      </footer>
  )
}

export default Footer