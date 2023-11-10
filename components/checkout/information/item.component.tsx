import React from 'react'
import styles from '@/styles/components/checkout/information/item.module.scss'

const Item = () => {
  return (
    <div className={styles.item}>
      <div className={styles.column}>
        <img src="/assets/masks/details/detail-1.png" alt="mask" />
        <div className={`${styles.quantity} p5`}>1</div>
        <div>
          <h3 className="p5">Sopa Everyday Mask</h3>
          <p className='p5'>Black / Extra Small</p>
        </div>
      </div>
      <div className={styles.column}>
        <h3 className="p4">$12</h3>
      </div>
    </div>
  )
}

export default Item
