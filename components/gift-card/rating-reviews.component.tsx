import React from 'react'
import styles from '@/styles/components/gift-card/rating-reviews.module.scss'

const RatingReviews = () => {
  return (
    <div className={styles.rating_reviews}>
      <h2 className="h5">Ratings and Reviews</h2>
      <p className='p4'>0</p>
      <p className='p4'>No reviews yet, write one now?</p>
      <p className='p4'><img src="/assets/icons/edit.png" alt="edit" /><span>Write a Review</span></p>
    </div>
  )
}

export default RatingReviews
