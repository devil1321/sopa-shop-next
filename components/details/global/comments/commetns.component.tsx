import React from 'react'
import styles from '@/styles/components/details/global/comments/comments.module.scss'
import Form from './form.component'
import Comment from './commet.component'
import Nav from './nav.component'


const Comments = () => {
  return (
    <div className={styles.comments}>
      <h2 className="h5">Rating And Reviews</h2>
      <p className='p4'>An overwhelming 94% of reviewers have endorsed this product, recommending it wholeheartedly to their friends and family.</p>
      <Form />
      <Nav />
      <Comment 
        author="Alicia" 
        productName="Model 000"
        isRight={true}
        rating={5}
        heading="Super Comfy And Holding Up Nicely"
        text="These shoes are my go-to for comfort and durability as a busy teacher and devoted mom of two young children. I wear them to work nearly every day and they still hold up incredibly well, earning a glowing 5-star review despite a stubborn coffee stain."
        votesUp={3}
        votesDown={2} 
      />
    </div>
  )
}

export default Comments