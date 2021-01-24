import React from "react"
import Layout from "../components/layout"

import Metadata from "../components/metadata"

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" description="the homepage"/>
      <h1>Home page</h1>
      <h2>Hello there.</h2>
      <p>There isn't much here at the moment, but maybe it will grow with time :^)</p>
      <p>Besides few basic things, there should be a gallery of the photos I've taken over the years. If it's not there... well, it will be.</p>
    </Layout>
  )
}

export default Index