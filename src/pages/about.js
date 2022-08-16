import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

import * as aboutStyle from "./about.module.scss"

const About = () => {
  const gpgFile = useStaticQuery(graphql` {
    file(extension: {eq: "txt"}, name:{eq: "pubkey"}) {
      publicURL
    }
  }`)
  return (
    <Layout>
      <Metadata title="About" description=""/>
      <h1>About Page</h1>
      <p>Hi. I'm the titular Spaqin.</p>
      <p>My real data probably isn't hard to find, but I prefer to keep it low. I grew up in the time where my parents told me to not say too much about myself online.</p>
      <p>The world has surely changed over the years.</p>
      <p>I'm a survivalist programmer. Which means, I program to survive. In C, Python, and as you can see, I can even muster up a website. If you got here through my CV, well, my other skills are listed there :-)</p>
      <p>For examples, you could just check out my github (in the socials link above).</p> 
      <p>For a living, though, as in, to make the life interesting. Old cameras. Old (by today's standards) cars. Your cookie-cutter hobbies like rutracker & chill or travels also apply.</p>

      <h1>Contact</h1>
      <p>You can contact me through email: <a href="mailto:3garfield@gmail.com">3garfield@gmail.com</a>.</p>
      <p>If you want to use GPG, you can find my public key <a href={gpgFile.file.publicURL}>here.</a></p>
      <p>Key's fingerprint is: <span className={aboutStyle.fingerprint}>F469 809B 1802 F792 C1A7 7E0F 8E69 2666 D7B3 511B</span></p>
    </Layout>
  )
}

export default About

export const Head = () => { return <Metadata title="About" description=""/>; };