import React from 'react'
import styles from '@/styles/components/checkout/information/summary.module.scss'

const Summary = () => {
  return (
    <div className={styles.summary}>
      <div className={styles.id}>
        <p className="p5">Get 10-15% off for making a better tomorrow</p>
        <div className={styles.btn_group}>
          <button><img src="/assets/icons/check.png" alt="check" /></button>
          <button>Verify with ID.me</button>
        </div>
        <p className="p5"><img src="/assets/icons/lock.png" alt="lock" />Verification by ID. What is ID.me?</p>
      </div>
      <h3 className="p4">
        <span>Subtotal</span>
        <span>$12.00</span>
      </h3>
      <h3 className="p4">
        <span>Shipping</span>
        <span>Calculated next step</span>
      </h3>
      <h3 className="p4">
        <span>Total</span>
        <span>$12</span>
      </h3>
    </div>
  )
}

export default Summary
