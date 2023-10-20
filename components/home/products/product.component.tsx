import React from 'react'
import styles from '@/styles/components/home/products/product.module.scss'

const Product:React.FC<any> = ({product,index}) => {
  return (
    <div>
      {product.name}
      <img src={product.details_images[0]} alt="" />
    </div>
  )
}

export default Product
