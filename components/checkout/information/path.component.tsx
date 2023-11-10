import React from 'react'
import styles from '@/styles/components/checkout/information/path.module.scss'

const Path = () => {
  return (
    <div className={styles.path}>
      <h3 className="p3">Sopas</h3>
      <div className={styles.paths}>
        <p className="p5">Infomation</p>
        <img src="/assets/icons/chevron-right.png" alt="chevron-right" />
        <p className="p5">Shipping</p>
        <img src="/assets/icons/chevron-right.png" alt="chevron-right" />
        <p className="p5">Payment</p>
      </div>
    </div>
  )
}

export default Path
