import React from 'react'
import styles from '@/styles/components/details/model_001/cards/card.module.scss'

interface CardProps{
  img:string;
  title:string;
  text:string;
}

const Card:React.FC<CardProps> = ({img,title,text}) => {
  return (
    <div className={styles.card}>
       <img src={img} alt="card-image" />
       <h3 className="h8">{title}</h3>
       <p className="p5">{text}</p>
    </div>
  )
}

export default Card
