import React from 'react'
import styles from '@/styles/components/ambassadors/details.module.scss'
import Link from 'next/link'

const Details = () => {
  return (
    <div className={styles.details}>
      <img src="/assets/logos/sopa-logo-black.png" alt="logo" />
      <h3 className="h8">Become an Sopa Ambassador:D</h3>
      <p className="p5">We are looking for all types of creators and creatives who fit with our brand! Become an Atoms Ambassador and get perks and commission from each pair of Atoms sold using your code.</p>
      <button>Apply Now</button>
      <p className="p5">Already a member?</p>
      <Link href="/" className='u3'>Log In</Link>
    </div>
  )
}

export default Details
