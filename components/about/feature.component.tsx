import React from 'react'
import styles from '@/styles/components/about/feature.module.scss'
import Link from 'next/link'

const Feature = () => {
  return (
    <div className={styles.feature}>
      <h3 className="h6">Why start another shoe company?</h3>
      <p className='p5'>We are committed to making our shoes more sustainable.</p>
      <p className='p5'>Our pursuit of crafting the perfect shoe gave birth to Atoms, and along with it, a vibrant community of individuals who share our passion. Our relentless commitment to improving our footwear and prioritizing our customers satisfaction has led us to incorporate only the finest materials and fabrics, disregarding their cost. At Atoms, our sole focus is to create a shoe that you`ll be proud to wear every day. Although we`re uncertain about the path that lies ahead, we invite you to accompany us on this exhilarating journey.</p>
      <Link href="#" className='u3'>Read our story featured in Humans of New York <img src="/assets/icons/arrow-right-small.png" alt="right" /></Link>
      <img src="/assets/about/sign.png" alt="sign" />
      <p className='p5'>SOPA CO-FOUNDERS</p>
    </div>
  )
}

export default Feature
