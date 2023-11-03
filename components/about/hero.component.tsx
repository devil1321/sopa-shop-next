import React from 'react'
import styles from '@/styles/components/about/hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src="/assets/about/video.png" alt="hero" />
      <img src="/assets/icons/play.png" alt="play" />
    </div>
  )
}

export default Hero
