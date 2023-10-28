import React from 'react'
import { GlobalComponents } from '@/components/global'
import { GiftCardComponents } from '@/components/gift-card'
import styles from '@/styles/pages/gift-card.module.scss'
import { DetailsComponents } from '@/components/details'

const GiftCard = () => {
  return (
    <GlobalComponents.LayoutWithFooter className={styles.gift_card} title='Gift Card' meta={[]}>
      <div className={styles.hero}>
        <img src="/assets/gift-card/sopa.png" alt="sopa" />
        <GiftCardComponents.Details />
      </div>
      <div className={styles.cards}>
        <DetailsComponents.Model_001.CardsComponents.Card img='/assets/icons/calendar.png' title='Send now or later' text='You decide when to send your Atoms digital gift card.' />
        <DetailsComponents.Model_001.CardsComponents.Card img='/assets/icons/edit-gift.png' title='Customizable' text='Choose a fun design and personalize it with a message!' />
        <DetailsComponents.Model_001.CardsComponents.Card img='/assets/icons/shopping-cart.png' title='The choice is theirs' text='Ensure a perfect fit by letting your friends and family choose the color and size.' />
      </div>
      <GiftCardComponents.Info />
      <GiftCardComponents.RatingReviews />
    </GlobalComponents.LayoutWithFooter>
  )
}

export default GiftCard
