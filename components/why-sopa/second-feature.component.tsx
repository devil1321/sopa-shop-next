import React from 'react'
import styles from '@/styles/components/why-sopa/second-feature.module.scss'

const SecondFeature = () => {
  return (
    <div className={styles.second_feature}>
      <div className={styles.item}>
        <div className={styles.content}>
          <h3 className="h6">A whole new level of comfort</h3>
          <p className="p5">Our Sopa midsole, featuring proprietary foam technology, offers exceptional cushioning and responds seamlessly to your every movement. As your feet shift throughout the day, our adaptable midsole foam adjusts accordingly, providing unparalleled comfort. To further enhance the midsole`s durability and comfort, we`ve reinforced it with a non-slip rubber outsole, keeping the Sopa lightweight and reliable.</p>
        </div>
        <img src="/assets/why-sopa/feature-2.png" alt="feature-2" />
      </div>
      <div className={styles.item}>
        <img src="/assets/why-sopa/feature-2.png" alt="feature-2" />
        <div className={styles.content}>
          <h3 className="h6">Copper for a fresh feel</h3>
          <p className="p5">Our Sopa midsole, featuring proprietary foam technology, offers exceptional cushioning and responds seamlessly to your every movement. As your feet shift throughout the day, our adaptable midsole foam adjusts accordingly, providing unparalleled comfort. To further enhance the midsole`s durability and comfort, we`ve reinforced it with a non-slip rubber outsole, keeping the Sopa lightweight and reliable.</p>
        </div>
      </div>
    </div>
  )
}

export default SecondFeature
