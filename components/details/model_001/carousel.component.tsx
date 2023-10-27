import React from 'react'
import styles from '@/styles/components/details/model_001/carousel.module.scss'

const Carousel = () => {
  return (
    <div className={styles.carousel_wrapper}>
      <div className={styles.carousel}>
        <div className={styles.view}>
          <div className={styles.item}>
            <div className={styles.overlay}></div>
            <img src="/assets/model_001/details/carousel-1.png" alt="image" />
          </div>
          <div className={styles.item}>
            <div className={styles.overlay}></div>
            <img src="/assets/model_001/details/carousel-2.png" alt="image" />
          </div>
          <div className={styles.item}>
            <div className={styles.overlay}></div>
            <img src="/assets/model_001/details/carousel-3.png" alt="image" />
          </div>
          <div className={styles.item}>
            <div className={styles.overlay}></div>
            <img src="/assets/model_001/details/carousel-4.png" alt="image" />
          </div>
        </div>
        <div className={styles.controls}>
          <img src="/assets/icons/prev.png" alt="prev" />
          <img src="/assets/icons/next.png" alt="next" />
        </div>
      </div>
      <p className="p5">The inside of Model 001 and the removal insoles are made using copper-infused lining. The antimicrobial properties of Atoms copper lining prevents the bacteria that cause odor, and keeps the shoes fresh.</p>
    </div>
  )
}

export default Carousel
