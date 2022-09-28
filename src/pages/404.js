import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <h1>404: Page Not Found</h1>
      <p>
        Whoopsies. Seems like someone screwed something up. I'm not gonna point any fingers, cuz I'd lose them. 
        <Link to="/"> Click here</Link> to get back to the main page.
      </p>
    </Layout>
  )
}

export default NotFound