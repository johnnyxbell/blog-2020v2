import React from "react"

import "../global/styles.scss"
import HeroStyles from "../styles/hero.module.scss"

import Headshot from "../images/headshot.png"

const Hero = () => {
  return (
    <section className={HeroStyles.heroSection}>
      <div className={HeroStyles.heroWrapper}>
        <div className={HeroStyles.headshotSection}>
          <img src={Headshot} alt="" />
        </div>
        <div className={HeroStyles.miniBio}>
          <h1>Hey there, I'm Chris!</h1>
          <p>
            Some would say I am a front-end developer. Possibly a CSS developer.
            Some would say web accessibility is my thing. I just like to say I
            am a builder of the web and that is what I love to do. I also enjoy
            speaking, writing, and teaching about the web.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
