import React from 'react'
import Nav from './nav.component'
import Product from './product.component'
import styles from '@/styles/components/home/products/products.module.scss'

const Products = () => {
  return (
    <div className={styles.products}>
      <Nav />
      <div className={styles.place}>
        {[].map((p:any) => <Product key={p.id} />)}
      </div>
    </div>
  )
}

export default Products
