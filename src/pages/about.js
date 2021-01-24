import React from "react"
import Layout from "../components/layout"

import Metadata from "../components/metadata"

const About = () => {
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
    </Layout>
  )
}

export default About