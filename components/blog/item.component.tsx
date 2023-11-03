import React from 'react'
import styles from '@/styles/components/blog/item.module.scss'

interface ItemProps{
    img:string;
    title:string;
    text:string;
}

const Item:React.FC<ItemProps> = ({img,title,text}) => {
  return (
    <div className={styles.item}>
      <img src={img} alt="blog-image" />
      <h3 className="p4">{title}</h3>
      <p className="p5">{text}</p>
    </div>
  )
}

export default Item
