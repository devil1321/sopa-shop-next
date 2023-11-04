import React from 'react'
import styles from '@/styles/components/blog/details/intro.module.scss'
import Link from 'next/link'

const Intro:React.FC<{img:string}> = ({img}) => {
  return (
    <div className={styles.intro}>
      <Link href="/home"><img src="/assets/icons/arrow-left.png" alt="arrow-left" />Back to shop</Link>
      <h1 className='h5'>K-Pop Singers Spotted Wearing Sopa Shoes</h1>
      <p className='p5'>1/27/2023 - Sopa Team</p>
      <img src={img} alt="image" />
    </div>
  )
}

export default Intro
