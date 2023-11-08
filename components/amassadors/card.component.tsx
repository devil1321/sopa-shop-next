import React from 'react'
import styles from '@/styles/components/ambassadors/card.module.scss'

const Card = () => {
  return (
    <div className={styles.card}>
      <img src="/assets/ambassadors/ambassadors-1.png" alt="image" />
      <h3 className="h8">Partnership benefits</h3>
      <div className={styles.item}>
        <img src="/assets/icons/star-green.png" alt="star" />
        <p className="p5">Support for your most creative ideas</p>
      </div>
      <div className={styles.item}>
        <img src="/assets/icons/arrow-up-green.png" alt="arrow-up" />
        <p className="p5">Increased exposure</p>
      </div>
      <div className={styles.item}>
        <img src="/assets/icons/dollar-green.png" alt="dollar" />
        <p className="p5">Sales commission</p>
      </div>
      <div className={styles.item}>
        <img src="/assets/icons/dollar-green.png" alt="dollar" />
        <p className="p5">Discount codes for your fans</p>
      </div>
      <div className={styles.item}>
        <img src="/assets/icons/heart-green.png" alt="heart" />
        <p className="p5">An endearing reletionship</p>
      </div>
    </div>
  )
}

export default Card
