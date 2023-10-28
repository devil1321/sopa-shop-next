import React from 'react'
import styles from '@/styles/components/order-status/item.module.scss'

interface ItemProps{
    product:any;
}

const Item:React.FC<ItemProps> = ({product}) => {
  return (
    <div className={styles.item}>
      
    </div>
  )
}

export default Item
