import React from "react"
import footerStyles from "./footer.module.scss"
import { useStaticQuery, graphql } from "gatsby"

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
              &copy; 2021, {data.site.siteMetadata.author}
          </p>
        </div>
      </footer>
  )
}

export default Footer