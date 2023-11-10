import React from 'react'
import styles from '@/styles/components/checkout/information/gift-card.module.scss'

const GiftCard = () => {
  return (
    <div className={styles.gift_card}>
      <form action="">
        <input type="text" placeholder='Gift card or discount code' />
        <button>Apply</button>
      </form>
    </div>
  )
}

export default GiftCard
