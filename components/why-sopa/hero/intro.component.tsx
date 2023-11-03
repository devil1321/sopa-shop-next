import React from 'react'
import styles from '@/styles/components/why-sopa/hero/intro.module.scss'

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1 className="h4">You won`t come across an everyday shoe like this every day.</h1>
      <p className='p4'>Sopas are thoughtfully crafted to complement and enhance the unique lifestyle that you lead.</p>
      <img src="/assets/why-sopa/hero.png" alt="hero" />
    </div>
  )
}

export default Intro
