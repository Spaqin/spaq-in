import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

const Services = () => {
  const query = useStaticQuery(graphql`query UrbexImages {
    allFile(
      filter: {extension: {eq: "jpg"}, relativeDirectory: {glob: "services"}}
    ) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(width: 270, height: 270, layout: CONSTRAINED)
            full: gatsbyImageData(width: 1800, layout: CONSTRAINED)
          }
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <h1>Services</h1>
      <p>I can provide plenty different photography-related services. Programming too. Rates are individual, depending on the job.</p>
      <p>I'm based in Hong Kong, but open to relocate (even temporarily) for a gig.</p>
      <p>You can contact me by email: <a href="mailto:3garfield@gmail.com">3garfield@gmail.com</a>.</p>

      <h2>Film development</h2>
      <p>Black and white. In HC-110. It's done by hand, with love. 135, 120, 4x5.</p>
      <p>Mostly offering it as a convenient option if you're nearby, far from a lab.</p>
      <p>I can also teach you how to do it: see Hands-on workshops.</p>
  
      <h2>Film scanning and restoration</h2>
      <p>With extensive experience of scanning film of various quality over the years, I can provide scans of higher quality than most labs would get you.</p>
      <p>I can also digitize your old negatives or slides; remove scratches or dirt, and faded bring color back, on per-image basis.</p>

      <h2>Hands-on workshops</h2>
      <p>Do you want to learn how to develop your film, how to use a large format camera, or make cyanotypes? Make your own pinhole?</p>
      <p>If you're interested in learning more about any of the things you've seen on my blog, feel free to shoot me an email.</p>
      <p>I maintain this page to share knowledge, and a workshop is just another way of doing that.</p>

      <h2>Event photography</h2>
      <p>Concerts, parties, protests (not in HK); I can promise stealthy, candid photography that would capture the moment best.</p>

      <h2>Product photography</h2>
      <p>Selling something, want to make it look best?</p>
      <p>Working on an advertising campaign for your shop?</p>
      <p>You'll find my images to be sharp and great looking for your customers.</p>
      <p>Small items that I can do with my lightbox (e.g. see the reviews) I can do for a little fee, and that will help you sell your items.</p>

      <h2>Outdoor portraits</h2>
      <p>I don't have a studio space, but I can take advantage of the incredible Hong Kong cityscapes.</p>
      <p>Whether it's some pics for work, a dating app, or a pre-wedding shoot, you'll be happy with the results.</p>
      
      <h2>Videomaking</h2>
      <p>A part of visual media that I am still learning about.</p>
      <p>Whether it's tracking shots of Ju-jitsu, or static shots for a moving music video, you can trust me behind the camera.</p>
      <p>Audio setup would be included.</p>
      <p>I can also take care of basic editing.</p>

      <h2>Aerial footage</h2>
      <p>Whether it's massive landscapes, or tracking shots; I'm quite well-versed with DJI Mini 3 Pro, including manual control.</p>
      <p>Skills from a smaller drone easily translate onto bigger, more powerful drones.</p>
      <p>I also have some experience with FPV whoops; that would require more polish, but I'm not a total stranger.</p>
    </Layout>
  )
}

export default Services

export const Head = () => { return <Metadata title="Services" description=""/>; };