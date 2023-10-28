import React from 'react'
import styles from '@/styles/components/help/item.module.scss'

interface ItemProps{
    img:string;
    title:string;
}

const Item:React.FC<ItemProps> = ({img,title}) => {
  return (
    <div className={styles.item}>
      <img src={img} alt="item-img" />
      <div>
        <span className='p4'>{title}</span>
        <img src="/assets/icons/arrow-right.png" alt="arrow-right" />
      </div>
    </div>
  )
}

export default Item
