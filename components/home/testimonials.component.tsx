import React from 'react'
import styles from '@/styles/components/home/testimonials.module.scss'

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
        <h2 className='h5'>Sopa in Everyday</h2>
        <p>&copy;sopa</p>
        <div className={styles.images}>
            <img src="/assets/home/testimonials-1.png" alt="testimonials-image" />
            <img src="/assets/home/testimonials-2.png" alt="testimonials-image" />
            <img src="/assets/home/testimonials-3.png" alt="testimonials-image" />
            <img src="/assets/home/testimonials-4.png" alt="testimonials-image" />
        </div>
    </div>
  )
}


export default Testimonials
