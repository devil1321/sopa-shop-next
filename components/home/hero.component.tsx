import React from 'react'
import styles from '@/styles/components/home/hero.module.scss'

interface HeroProps{
    heading:string;
    button:string;
}

const Hero:React.FC<HeroProps> = ({heading,button}) => {
  return (
    <div className={styles.hero}>
      <img src="/assets/home/hero.png" alt="hero-image" />
      <div className={styles.details}>
        <h1 className='h1'>{heading}</h1>
        <button>{button}</button>
      </div>
    </div>
  )
}

export default Hero
