import React from 'react'
import styles from '@/styles/components/details/model_001/second-feature.module.scss'

const SecondFeature = () => {
  return (
    <div className={styles.second_feature}>
      <img src="/assets/model_001/details/feature-2.png" alt="feature-image" />
      <div className={styles.details}>
        <h3 className="h8">Meet the founders</h3>
        <p className='p5'>Sopa mission to create a shoe that could be worn daily sparked an idea that proved to be much more intricate than anticipated, resulting in a complete reimagining of footwear&#39;s essence and potential. As a team, </p>
        <p className='p5'>we possess an unwavering devotion to artistry and exquisite design, and spare no expense in traveling the world to source the finest materials available. Spoiler alert: we&#39;ve found them. Additionally, we are grateful to belong to the flourishing Atoms community, both locally in New York City and globally. </p>
        <p className='p5'>Our patrons serve as our ultimate muse for innovative thinking, drawing inspiration from the elegance and wonder of everyday existence. Welcome to the world of Sopa!</p>
      </div>
    </div>
  )
}

export default SecondFeature
