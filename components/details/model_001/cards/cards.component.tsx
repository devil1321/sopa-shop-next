import React from 'react'
import styles from '@/styles/components/details/model_001/cards/cards.module.scss'
import Card from './card.component'

const Cards = () => {
  return (
    <div className={styles.cards}>
      <Card img="/assets/model_001/details/card-1.png" title='Brand New Design' text='We rethought the ideal everyday shoe from the ground up. Again.'/>
      <Card img="/assets/model_001/details/card-2.png" title='Tie-once Stretch Laces' text='You’ll only need to tie your Atoms shoes once; Stretch Laces hold tight.'/>
      <Card img="/assets/model_001/details/card-3.png" title='No Bad Odors' text='Antimicrobial copper threads are woven into the inside of all Atoms shoes.'/>
    </div>
  )
}

export default Cards
