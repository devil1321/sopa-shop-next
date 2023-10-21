import React from 'react'
import styles from '@/styles/components/home/hype.module.scss'

const Hype = () => {
  return (
    <div className={styles.hype}>
      <div className={styles.column}>
        <div className={styles.image}>
          <h3 className="h5">The Hype is real...</h3>
          <img src="/assets/home/hype-1.png" alt="hype-1" />
        </div>
        <div className={styles.inner_column}>
          <div className={styles.stars}>
            <p className="p5">borkat u.</p>
            <div>
              <img src="/assets/icons/star.png" alt="star" />
              <img src="/assets/icons/star.png" alt="star" />
              <img src="/assets/icons/star.png" alt="star" />
              <img src="/assets/icons/star.png" alt="star" />
              <img src="/assets/icons/star.png" alt="star" />
            </div>
          </div>
          <p className='p3'>These stylishly simple and incredibly comfortable shoes have become such a staple in my daily wardrobe that I'm already buying a second pair.</p>
        </div>
      </div>
      <div>
          <img src="/assets/home/hype-2.png" alt="hype-2" />
          <div className={styles.foot}>
            <div>
              <h3 className="p5">Model 000</h3>
              <p className="p3">Navy</p>
            </div>
            <button>Shop Now</button>
          </div>

      </div>
    </div>
  )
}

export default Hype
