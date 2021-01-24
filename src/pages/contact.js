import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

import Metadata from "../components/metadata"

import contactStyle from "./contact.module.scss"

const Contact = () => {
  const gpgFile = useStaticQuery(graphql` {
    file(extension: {eq: "txt"}, name:{eq: "pubkey"}) {
      publicURL
    }
  }`)

  return (
    <Layout>
      <Metadata title="Contact" description="the contact page"/>
      <h1>Contact Page</h1>
      <p>You can contact me through email: <a href="mailto:3garfield@gmail.com">3garfield@gmail.com</a>.</p>
      <p>If you want to use GPG, you can find my public key <a href={gpgFile.file.publicURL}>here.</a></p>
      <p>Key's fingerprint is: <span className={contactStyle.fingerprint}>F469 809B 1802 F792 C1A7 7E0F 8E69 2666 D7B3 511B</span></p>
    </Layout>
  )
}

export default Contact