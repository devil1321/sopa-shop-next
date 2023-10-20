import React, { useEffect, useState } from 'react'
import Nav from './nav.component'
import Product from './product.component'
import styles from '@/styles/components/home/products/products.module.scss'

const Products:React.FC<{products:any[]}> = ({products}) => {

  const [isLoad,setIsLoad] = useState<boolean>(false)
  const [state,setState] = useState<any[]>([])

  const handleCategory = (category:string) => {
    const filtered = products.filter((p:any) => p.category === category)
    setState(filtered)
  }

  const handleLoadState = () => {
    if(!isLoad && state.length > 0){
      const filtered = products.filter((p:any) => p.category === 'model')
      setState(filtered)
      setIsLoad(true)
    }
  }

  useEffect(()=>{
    handleLoadState()
    if(state?.length === 0){
      setState(products)
    }
    console.log(state)
  },[products,state])

  return (
    <div className={styles.products}>
      <Nav categories={['model','accessories','socks']} handleCategory={handleCategory} />
      <div className={styles.place}>
        {state.map((p:any,index:number) => <Product key={p.id} product={p} index={index} />)}
      </div>
    </div>
  )
}

export default Products
