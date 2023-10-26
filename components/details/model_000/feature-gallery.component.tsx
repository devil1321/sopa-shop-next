import React from 'react'
import styles from '@/styles/components/details/model_000/feature-gallery.module.scss'

const FeatureGallery = () => {
  return (
    <div className={styles.feature_gallery}>
      <div className={styles.top_section}>
        <div className={styles.column}>
          <p className="p2">Stretch laces, so you only have to tie your shoes once.</p>
          <img src="/assets/model_000/details/feature-1.png" alt="gallery-1" />
        </div>
        <div className={styles.column}>
          <img src="/assets/model_000/details/feature-2.png" alt="gallery-2" />
          <p className="p2">Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support.</p>
        </div>
      </div>
      <div className={styles.bottom_section}>
        <img src="/assets/model_000/details/feature-3.png" alt="gallery-3" />
        <p className="p2">Stay odor-free with antimicrobial copper lining that kills bacteria.</p>
      </div>
    </div>
  )
}

export default FeatureGallery
