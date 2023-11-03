import React from 'react'
import styles from '@/styles/components/why-sopa/first-feature.module.scss'

const FirstFeature = () => {
  return (
    <div className={styles.first_feature}>
      <img src="/assets/why-sopa/feature-1.png" alt="feature-1" />
      <div className={styles.content}>
        <h3 className="h6">Perfect Fit</h3>
        <p className="p5">For too long, ill-fitting shoes have been an unfortunate reality for most people due to the lack of emphasis on proper sizing by shoe companies. However, Atoms is changing the game by prioritizing fit and offering quarter sizes, allowing you to finally achieve the perfect fit you deserve. Don`t settle for a shoe that`s too big or too small - your ideal size may just be a 9.25 instead of a 9 or 9.5.</p>
      </div>
    </div>
  )
}

export default FirstFeature
