import React from "react"
import Layout from "../components/layout"

import Metadata from "../components/metadata"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="the homepage"/>
      <h1>Home page</h1>
      <h2>Hello there.</h2>
      <p>Welcome to my world. My world is quite small as I don't try to focus on external issues, just... report what I see.</p>
      <p>If you're a photography nerd, you may enjoy my blog and gallery.</p>
      <p>Have fun!</p>
    </Layout>
  )
}

export default Index