import React from 'react'
import styles from '@/styles/components/home/introduce/introduce.module.scss'
import Item from './item.component'

const Introduce:React.FC<any> = ({products}) => {
  return (
    <div className={styles.introduce}>
      <button>New</button>
      <h2 className="h3">Introducing Model 001</h2>
      <img src="/assets/home/introduce.png" alt="introduce" />
      <Item title="Model 000" product={products[0]}/>
      <Item title="Model 001" product={products[1]} isRight={true} />
    </div>
  )
}

export default Introduce
