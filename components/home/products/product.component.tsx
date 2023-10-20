import React from 'react'
import styles from '@/styles/components/home/products/product.module.scss'

const Product:React.FC<any> = ({product,image}) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={image ? image : product.details_images[0]} alt="product-image" />
      </div>
      <h3 className="h8">{product.name}</h3>
      <p className="p5">{product.colors[0].name}</p>
    </div>
  )
}

export default Product
