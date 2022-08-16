import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as headerStyles from "./header.module.scss"

const NavSubItem = ({subItem, data}) => {
    return (
        <li>
            <table>
            <tbody>
            <tr>
                <td className={headerStyles.imgTd}>
                <a href={subItem.link} target="_blank" rel="noreferrer" activeclassname={headerStyles.activeMenuItem} >
                <GatsbyImage
                    image={data.allFile.edges.filter( edge => {
                        if(edge.node.childImageSharp)
                            return edge.node.childImageSharp.gatsbyImageData.images.fallback.src.includes(subItem.icon); 
                        else
                            return false}
                    )[0].node.childImageSharp.gatsbyImageData}
                    className={headerStyles.icon} 
                    alt={subItem.icon}/>
                </a>
                </td>
                <td className={headerStyles.linkTd}>
                    <a href={subItem.link} target="_blank" rel="noreferrer" activeclassname={headerStyles.activeMenuItem} >
                        {subItem.name}            
                    </a>
                </td>

            </tr>
            </tbody>
            </table>
        </li>
    );
}

const Header = () => {
  const data = useStaticQuery(
      graphql`{
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
          gatsbyImageData(width: 16, layout: CONSTRAINED)
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
                                            <NavSubItem subItem={subItem} data={data} key={subItem.name}/>)}
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