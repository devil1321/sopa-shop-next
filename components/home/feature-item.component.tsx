import React from 'react'
import styles from '@/styles/components/home/feature-item.module.scss'

interface FeatureItemProps{
    img:string;
    title:string;
    button:string;
    text:string;
}

const FeatureItem:React.FC<FeatureItemProps> = ({img,title,button,text}) => {
  return (
    <div className={styles.feature_item}>
      <img src={img} alt="image-feature" />
      <div className={styles.column}>
         <button>{button}</button>
         <h2 className="h5">{title}</h2>
      </div>
      <div className={styles.column}>
        <p className="p5">{text}</p>
        <button>Learn More</button>
      </div>
    </div>
  )
}


export default FeatureItem
