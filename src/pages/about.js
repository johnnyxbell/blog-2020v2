import React from "react"
import "../global/styles.scss"

import Header from "../components/header"
import Hero from "../components/hero"
import Hire from "../components/hire"
import Footer from "../components/footer"

const About = () => {
  return (
    <div>
      <Header />
      <Hero />
      <h1>Hey there, this is the about section!</h1>
      <Hire />
      <Footer />
    </div>
  )
}

export default About
