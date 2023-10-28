import React from 'react'
import styles from '@/styles/components/faq/footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3 className="h5">The gift of choice</h3>
      <p className='p5'>With the Atoms gift card, you can gift the best everyday shoe, mask, and socks to your loved ones.</p>
      <Link href="/gift-card" className='u3'>Shop a gift card</Link>
    </div>
  )
}

export default Footer
