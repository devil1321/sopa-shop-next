import React from 'react'
import styles from '@/styles/components/details/global/comments/form.module.scss'

const Form = () => {
  return (
    <div className={styles.form}>
      <div className={styles.rating}>
        <h2 className="h1">4.7</h2>
        <div className={styles.stars}>
          <img src="/assets/icons/star.png" alt="star" />
          <img src="/assets/icons/star.png" alt="star" />
          <img src="/assets/icons/star.png" alt="star" />
          <img src="/assets/icons/star.png" alt="star" />
          <img src="/assets/icons/star.png" alt="star" />
        </div>
        <p className='p5'>Based on 3,205 reviews</p>
      </div>
      <div className={styles.form_wrapper}>
        <form action="" className={styles.form_form}>
          <div className={styles.field}>
            <p className={`${styles.input_header} p5`}>Fit</p>
            <input type="text" className={styles.input} />
            <div className={styles.input_footer}>
              <p className='p5'>Poor</p>
              <p className='p5'>Perfect</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
