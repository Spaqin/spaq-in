import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import carphoto from "../images/services/carphoto.jpg"
import dev from "../images/services/dev.jpg"
import event1 from "../images/services/event1.jpg"
import event2 from "../images/services/event2.jpg"
import lf from "../images/services/lf.jpg"
import portrait1 from "../images/services/portrait1.jpg"
import portrait2 from "../images/services/portrait2.jpg"
import prewedding from "../images/services/prewedding.jpg"
import product from "../images/services/product.jpg"
import slide1 from "../images/services/slide1.jpg"
import slide2 from "../images/services/slide2.jpg"
import slide3 from "../images/services/slide3.jpg"

import * as servicesStyles from "./services.module.scss"

const Services = () => {
  return (
    <Layout>
      <h1>Services</h1>
      <p>I can provide plenty of different photography-related services. Programming too. Rates are individual, depending on the job.</p>
      <p>I'm based in Hong Kong, but open to relocate (even temporarily) for a gig.</p>
      <p>You can contact me by email: <a href="mailto:3garfield@gmail.com">3garfield@gmail.com</a>.</p>

      <h2>Film development</h2>
      <p>Black and white. In HC-110. It's done by hand, with love. 135, 120, 4x5.</p>
      <p>Mostly offering it as a convenient option if you're nearby, far from a lab.</p>
      <p>I can also teach you how to do it: see Hands-on workshops.</p>

      <a href={dev}><img src={dev} alt="Film development tank with chemicals" className={servicesStyles.mainimg}/></a>
  
      <h2>Film scanning and restoration</h2>
      <p>With extensive experience of scanning film of various quality over the years, I can provide scans of higher quality than most labs would get you.</p>
      <p>Certainly a specialist in this regard, as you can check the blog post about scanning. It's a process that's constantly improved, but always will yield great results.</p>
      <p>I can also digitize your old negatives or slides; remove scratches or dirt, and bring faded color back, on per-image basis.</p>

      <div className={servicesStyles.maindiv}>
      <div className={servicesStyles.firstimg}>
         <a href={slide1}><img src={slide1} width="100%" alt="a restored slide showcasing the Peak Tram in Hong Kong"/></a>
     </div>
     <div className={servicesStyles.subsequentimg}>
     <a href={slide2}><img src={slide2} width="100%" alt="a restored slide showing a plane landing in Kai Tak airport"/></a>
     </div>
     <div className={servicesStyles.subsequentimg}>
     <a href={slide3}><img src={slide3} width="100%" alt="a restored slide showing the view of Victoria Harbor, from TST, with a building showing HK97"/></a> 
     </div>
    </div>

      <h2>Hands-on workshops</h2>
      <p>Do you want to learn how to <b>develop your film</b>, how to use a <b>large format camera</b>, or make <b>cyanotypes</b>? Make your own pinhole?</p>
      <p>If you're interested in learning more about any of the things you've seen on my blog, feel free to shoot me an email.</p>
      <p>I maintain this page to share knowledge, and a workshop is just another way of doing that, with more effort put into individual teaching and answering questions.</p>

      <a href={lf}><img src={lf} alt="A large format camera" className={servicesStyles.mainimg}/></a>

      <h2>Event photography</h2>
      <p><b>Concerts</b>, <b>parties</b>, <b>protests</b> (not in HK); I can promise stealthy, candid photography that would capture the moment best.</p>
  
      <div className={servicesStyles.maindiv}>
     <div className={servicesStyles.firstimg}>
          <a href={event1}><img src={event1} width="100%" alt="an amazing photo taken during a concert"/></a>
     </div>
     <div className={servicesStyles.subsequentimg}>
     <a href={event1}><img src={event2} width="100%" alt="another amazing image taken during a concert"/></a>
     </div>
    </div>

      <h2>Product photography</h2>
      <p><b>Selling something</b>, want to make it look best?</p>
      <p>Working on an advertising campaign for your shop?</p>
      <p>You'll find my images to be sharp and great looking for your customers. Or intriguing enough, to get more views for your car.</p>
      <p>Small items that I can do with my lightbox (e.g. see the reviews) I can do for a little fee, and that will help you sell your items.</p>

      <a href={carphoto}>
      <img src={carphoto} className={servicesStyles.mainimg} alt="an image that immensely helped sell a shitty car, taken at sunset"/>
      </a>

      <a href={product}><img src={product} className={servicesStyles.mainimg} alt="an image showcasing few products one could buy in a music store"/></a>

      <h2>Outdoor portraits</h2>
      <p>I don't have a studio space, but I can take advantage of the incredible Hong Kong cityscapes.</p>
      <p>Whether it's some <b>pics for work</b>, a <b>profile pic</b> for a dating app (like LinkedIn), or a <b>pre-wedding shoot</b>, you'll be happy with the results.</p>
      <p><b>Tour walks</b> around HK for newcomers with few photo scenes here and there are also possible. I know the city better than some locals.</p>
      
      <div className={servicesStyles.maindiv}>
      <div className={servicesStyles.firstimg}>
          <a href={portrait1}><img src={portrait1} width="100%" alt="a beautiful portrait of a beautiful woman in neon style"/></a>
     </div>
     <div className={servicesStyles.subsequentimg}>
     <a href={portrait2}><img src={portrait2} width="100%" alt="another beautiful portrait"/></a>
     </div>
     <div className={servicesStyles.subsequentimg}>
     <a href={prewedding}><img src={prewedding} width="100%" alt="a couple happy with eachother and my images"/></a>
     </div>
    </div>

      <h2>Videomaking</h2>
      <p>A part of visual media that I am still learning about (so my rates are low :)).</p>
      <p>Whether it's tracking shots of Ju-jitsu, or static shots for a moving music video, you can trust me behind the camera.</p>
      <p>Audio with stereo microphones? No problem either.</p>
      <p>I can also take care of basic editing.</p>

      <div align="center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/PiK4b_LBV2o?si=NNFMEaDrJ_5Zcd2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <h2>Aerial footage</h2>
      <p>Whether it's massive landscapes, or tracking shots; I'm quite well-versed with DJI Mini 3 Pro, including manual control.</p>
      <p>Skills from a smaller drone easily translate onto bigger, more powerful drones.</p>
      <p>I also have some experience with FPV whoops; that would require more <i>polish</i> (heh), but I'm not a total stranger.</p>

      <div align="center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-UdSmWCWhgY?si=VOztfCnRgp43hhvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </Layout>
  )
}

export default Services

export const Head = () => { return <Metadata title="Services" description=""/>; };