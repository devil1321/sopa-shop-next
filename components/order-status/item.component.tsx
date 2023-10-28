import React from 'react'
import styles from '@/styles/components/order-status/item.module.scss'

interface ItemProps{
    product:any;
}

const Item:React.FC<ItemProps> = ({product}) => {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={product.details_images[0]} alt="product-image" />
      </div>
      <div className={styles.details}>
        <h3 className="h8">{product.name}</h3>
        <p className='p5'>{product.colors[0].name}</p>
        <div className={styles.color} style={{backgroundColor:product.colors[0].color}}></div>
        <div className={styles.quantity}>
          <p className="p5">Items</p>
          <div className={styles.quantity_controller}>
            <div className='p4'>+</div>
            <div className='p4'>1</div>
            <div className='p4'>-</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
