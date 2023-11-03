import React from 'react'
import styles from '@/styles/components/community/feature.module.scss'

interface FeatureProps{
    img:string;
    title:string;
    text:string;
    button:string;
}

const Feature:React.FC<FeatureProps> = ({img,title,text,button}) => {
  return (
    <div className={styles.feature}>
      <img src={img} alt="feature-img" />
      <div className={styles.content}>
        <h2 className="h7">{title}</h2>
        <p className="p5">{text}</p>
        <button>{button}</button>
      </div>
    </div>
  )
}

export default Feature
