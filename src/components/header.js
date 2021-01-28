import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import headerStyles from "./header.module.scss"

const NavSubItem = ({subItem, data}) => {
    return (
        <li key={subItem.name}>
            <table>
            <tr>
                <td className={headerStyles.imgTd}>
                <a href={subItem.link} target="_blank" rel="noreferrer" activeclassname={headerStyles.activeMenuItem} >
                <Img 
                    className={headerStyles.icon}
                    fluid={data.allFile.edges.filter( edge => {
                        if(edge.node.childImageSharp)
                            return edge.node.childImageSharp.fluid.originalName === subItem.icon 
                        else
                            return false}
                    )[0].node.childImageSharp.fluid}
                    alt={subItem.name}
                />
                </a>
                </td>
                <td className={headerStyles.linkTd}>
                    <a href={subItem.link} target="_blank" rel="noreferrer" activeclassname={headerStyles.activeMenuItem} >
                        {subItem.name}            
                    </a>
                </td>

            </tr>
            </table>
        </li>
    )
}

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
                        subItems {
                            name
                            link
                            icon
                        }
                    }
                }
            }
            allFile(filter: {extension: {eq: "png"}}) {
                edges {
                    node {
                        childImageSharp {
                            fluid (maxWidth: 16) {
                                ...GatsbyImageSharpFluid
                                originalName
                            }
                        }
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
                              {link.link ? 
                                (<Link to={link.link} activeClassName={headerStyles.activeMenuItem}>
                                    {link.name}
                                </Link>)
                                  :
                                <button type="button" >
                                        {link.name}
                                </button>}
                                {(link.subItems.length > 0) && (
                                    <ul>
                                        {link.subItems.map((subItem) =>
                                            <NavSubItem subItem={subItem} data={data}/>)}
                                    </ul>
                                )}
                          </li>

                      ))
                  }
              </ul>
          </nav>
      </header>
  )
}

export default Header