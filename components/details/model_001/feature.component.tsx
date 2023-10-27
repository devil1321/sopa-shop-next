import React from 'react'
import styles from '@/styles/components/details/model_001/feature.module.scss'

const Feature = () => {
  return (
    <div className={styles.feature}>
      <img src="/assets/model_001/details/feature-1.png" alt="feature-image" />
      <h3 className="h8">Designed for everyday</h3>
      <p className='p5'>The Model 001 is designed to be the only shoe you reach for at whatever time you want to wear shoes. With super durability, unparalleled breathability, and a pared down look that can be dressed up or down effortlessly, once you wear them you’ll only ask “why” — as in, “why did I wear anything else?”</p>
    </div>
  )
}

export default Feature
