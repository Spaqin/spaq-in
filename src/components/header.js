import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(
      graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    flatNavItems {
                        name
                        link
                    }
                }
            }
        }
      `
  );
  return (
      <header className={headerStyles.header}>
          <div className={headerStyles.overlay}></div>
          <div className={headerStyles.heroContent}>
              <p className={headerStyles.brand}>
                  <Link to="/">{data.site.siteMetadata.title}</Link>
              </p>
              <p className={headerStyles.description}>
                {data.site.siteMetadata.description}
              </p>
          </div>
          <nav className={headerStyles.navContainer}>
              <ul className={headerStyles.navList}>
                  {
                      data.site.siteMetadata.flatNavItems.map(link => (
                          <li key={link.name}>
                              <Link to={link.link} activeClassName={headerStyles.activeMenuItem}>
                                  {link.name}
                              </Link>
                          </li>

                      ))
                  }
                  <li>
                      <a target="_blank" rel="noreferrer" href="https://instagram.com/spaqout" activeclassname={headerStyles.activeMenuItem} >Instagram</a>
                  </li>
              </ul>
          </nav>
      </header>
  )
}

export default Header