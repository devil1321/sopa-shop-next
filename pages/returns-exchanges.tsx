import React from 'react'
import styles from '@/styles/pages/returns-exchanges.module.scss'
import Link from 'next/link'

const ReturnsAndExchanges = () => {
  return (
    <div className={styles.returns_exchanges}>
      <Link href="/home" className='p5'>
        <img src="/assets/icons/arrow-left.png" alt="arrow-left" />
        Back to shop
      </Link>
      <img className={styles.logo} src="/assets/logos/sopa-logo-black.png" alt="logo" />
      <div className={styles.form_wrapper}>
        <h3 className="h8">Returns & Exchanges</h3>
        <p className="p5">We accept returns and exchanges on all non custom made shoes within 30 days of delivery.</p>
        <form action="">
          <fieldset>
            <legend className='p5'>Order Number</legend>
            <div className={styles.field}>
              <input type="text" />
            </div>
            <div className={styles.field}>
              <input type="text" placeholder='Shipping Zip Code'/>
            </div>
            <button>Start a return or exchange</button>
          </fieldset>
        </form>
        <p className='p5'>Returning or exchanging a gift?</p>
        <Link className='p5' href="/gift-card">Start Gift Return Here</Link>
      </div>
    </div>
  )
}

export default ReturnsAndExchanges
