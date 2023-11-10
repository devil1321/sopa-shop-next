import React from 'react'
import styles from '@/styles/components/checkout/information/logos.module.scss'

const Logos = () => {
  return (
    <div className={styles.logos}>
      <p className="p5">Express Checkout</p>
      <div className={styles.items}>
        <img src="/assets/icons/shop-pay.png" alt="shop-pay" />
        <img src="/assets/icons/paypal.png" alt="paypal" />
        <img src="/assets/icons/google-pay.png" alt="google-pay" />
      </div>
    </div>
  )
}

export default Logos
