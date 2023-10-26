import React from 'react'
import styles from '@/styles/components/details/global/details-footer.module.scss'

const DetailsFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.item}>
        <p className='p5'>Key features and benefits</p>
        <img src="/assets/icons/plus-circle.png" alt="plus" />
      </div>
      <div className={styles.item}>
        <p className='p5'>Comfort and fit</p>
        <img src="/assets/icons/plus-circle.png" alt="plus" />
      </div>
      <div className={styles.item}>
        <p className='p5'>Materials and card</p>
        <img src="/assets/icons/plus-circle.png" alt="plus" />
      </div>
      <div className={styles.item}>
        <p className='p5'>Free shipping & returns</p>
        <img src="/assets/icons/plus-circle.png" alt="plus" />
      </div>
    </div>
  )
}

export default DetailsFooter
