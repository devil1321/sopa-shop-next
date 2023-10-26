import React from 'react'
import styles from '@/styles/components/details/global/second-gallery.module.scss'

const SecondGallery = () => {
  return (
    <div className={styles.second_gallery}>
      <div className={styles.part}>
        <div className={styles.main_image}>
            <img src="/assets/global/details/gallery-main-1.png" alt="image" />
        </div>
        <div className={styles.part_images}>
            <div>
                <img src="/assets/global/details/gallery-1.png" alt="sm-image" />
            </div>
            <div>
                <img src="/assets/global/details/gallery-2.png" alt="sm-image" />
            </div>
        </div>
      </div>
      <div className={styles.part}>
        <div className={styles.main_image}>
            <img src="/assets/global/details/gallery-main-2.png" alt="image" />
        </div>
        <div className={styles.part_images}>
            <div>
                <img src="/assets/global/details/gallery-3.png" alt="sm-image" />
            </div>
            <div>
                <img src="/assets/global/details/gallery-4.png" alt="sm-image" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default SecondGallery
