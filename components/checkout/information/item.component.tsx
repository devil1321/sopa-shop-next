import React from 'react'
import styles from '@/styles/components/checkout/information/item.module.scss'

const Item:React.FC<any> = ({product}) => {
  return (
    <div className={styles.item}>
      <div className={styles.column}>
        <img src={product.details_images[0]} alt="img" />
        <div className={`${styles.quantity} p5`}>{product.quantity}</div>
        <div>
          <h3 className="p5">{product.name}</h3>
          <p className='p5'>{product.size}</p>
        </div>
      </div>
      <div className={styles.column}>
        <h3 className="p4">${product.price * product.quantity}</h3>
      </div>
    </div>
  )
}

export default Item
