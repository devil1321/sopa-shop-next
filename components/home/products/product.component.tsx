import React from 'react'
import styles from '@/styles/components/home/products/product.module.scss'
import Link from 'next/link'

const Product:React.FC<any> = ({product,image}) => {
  return (
    <div className={styles.product}>
      <Link href="/details/[id]" as={`/details/${product.id}`}>
        <div className={styles.image}>
          <img src={image ? image : product.details_images[0]} alt="product-image" />
        </div>
      </Link>
      <h3 className="h8">{product.name}</h3>
      <p className="p5">{product.colors[0].name}</p>
    </div>
  )
}

export default Product
