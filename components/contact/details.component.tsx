import React from 'react'
import styles from '@/styles/components/contact/details.module.scss'
import Link from 'next/link'

const Details = () => {

  return (
    <div className={styles.details}>
      <h3 className="p4">Get in touch</h3>
      <p>We’d love to hear from you. our team is always ready to chat.</p>
      <div className={styles.item}>
        <img src="/assets/icons/location.png" alt="location" />
        <p className='p5'>New York</p>
      </div>
      <div className={styles.item}>
        <img src="/assets/icons/phone.png" alt="phone" />
        <p className='p5'>+1 917 000-0000</p>
      </div>
      <div className={styles.item}>
        <img src="/assets/icons/mail.png" alt="message" />
        <p className='p5'>info@sopa.com</p>
      </div>
      <Link href="/home" className={styles.link}>
        <img src="/assets/icons/chat.png" alt="chat" />
        <span className='p5'>Back to shop</span>
      </Link>
    </div> 
  )
}

export default Details
