import React from 'react'
import Product from './product.component'
import styles from '@/styles/components/home/products/model_000.module.scss'

const Model_000:React.FC<any> = ({product}) => {
  return (
    <div className={styles.model}>
     <h3 className="h8">Explore Model 000</h3>
     <div className={styles.place}>
      {product?.images.map((image:string) => <Product key={image} product={product} image={image}  />)}
     </div>
     <button>Shop Now</button>
    </div>
  )
}

export default Model_000