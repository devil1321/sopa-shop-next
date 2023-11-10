import React from 'react'
import styles from '@/styles/components/checkout/shipping/form.module.scss'
import Link from 'next/link'

const Form = () => {
  return (
    <div className={styles.form}>
      <form action="">
        <div className={styles.item}>
          <p className="p5">Contact</p>
          <input type="text" value="borkat2042@gmail.com" />
          <p className="u3">Change</p>
        </div>
        <div className={styles.item}>
          <p className="p5">Contact</p>
          <input type="text" value="Sunnah Lab, 13th Street. 47 W 13th St , New York" />
          <p className="u3">Change</p>
        </div>
        <h3 className='p4'>Shipping Method</h3>
        <div className={styles.radio}>
          <input type="radio" name="shipping" id="" />
          <div className={styles.label}>
            <h3 className="p5">International Express</h3>
            <p className="p5">6 to 9 business days</p>
            <p className="p5">Please be advised that payment of duties, taxes, and fees is required upon delivery.</p>
          </div>
          <h3 className="p5">$75.04</h3>
        </div>
        <div className={styles.radio}>
          <input type="radio" name="shipping" id="" />
          <div className={styles.label}>
            <h3 className="p5">International Express: Duties and Taxes Prepaid</h3>
            <p className="p5">4 to 7 business days</p>
            <p className="p5">Shipping: $81.54, Duties and fees: $68.74.</p>
          </div>
          <h3 className="p5">$150.28</h3>
        </div>
        <div className={styles.footer}>
          <Link href="#" className='u3'><img src="/assets/icons/chevron-left.png" alt="chevron-left" />Return to information</Link>
          <button type="submit">Continue to payment</button>
        </div>
      </form>
    </div>
  )
}

export default Form
