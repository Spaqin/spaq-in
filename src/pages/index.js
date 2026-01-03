import React from "react"
import Layout from "../components/layout"

import Metadata from "../components/metadata"

const Index = () => {
  return (
    <Layout>
      <h1>Home page</h1>
      <h2>Hi!</h2>
      <p>I'm Spaqin, or rather, that's my main internet handle, and this is my personal site (duh).</p>
      <p>I post mainly about photography, old gear and travel, and I sincerely hope you will find something helpful or interesting here.</p>
      <p>
        I like to take pictures, fly FPV and to write in my spare time, but I'm not a professional (albeit I do offer my services); by day I work as a software enginerd.
        If you're a recruiter or a fellow tech nerd checking my site, see it more as a showcase of somehow managing to wrangle webdev.
      </p>
      <p>If you have any questions, please feel free to contact me. And of course, have a lovely day and have fun!</p>
    </Layout>
  )
}

export default Index

export const Head = () => { return <Metadata title="Home" description="the homepage"/>; };