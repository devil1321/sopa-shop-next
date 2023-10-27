import React from 'react'
import styles from '@/styles/components/details/model_001/video.module.scss'

const Video = () => {
  return (
    <div className={styles.video}>
      <img src="/assets/model_001/details/video.png" alt="video" />
      <img className={styles.play} src="/assets/icons/play.png" alt="play" />
    </div>
  )
}

export default Video
