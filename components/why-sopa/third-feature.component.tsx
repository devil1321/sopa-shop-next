import React from 'react'
import styles from '@/styles/components/why-sopa/third-feature.module.scss'

const ThirdFeature = () => {
  return (
    <div className={styles.third_feature}>
      <div className={styles.item}>
        <div className={styles.content}>
          <h3 className="h6">The shoelace reimagined</h3>
          <p className="p5">Our uniquely designed laces stay securely tied while also allowing for easy slip-on and slip-off of the shoes, making them perfect for hassle-free security checks at the airport. Thank us later!</p>
        </div>
        <img src="/assets/why-sopa/third-feature-1.png" alt="feature-3" />
      </div>
      <div className={styles.item}>
        <img src="/assets/why-sopa/third-feature-2.png" alt="feature-2" />
        <div className={styles.content}>
          <h3 className="h6">Weaving magic</h3>
          <p className="p5">Our proprietary blend of TPU-coated polyester yarn creates an upper for Sopa that is not only highly breathable and temperature-resistant but also remarkably versatile.</p>
        </div>
      </div>
    </div>
  )
}

export default ThirdFeature
