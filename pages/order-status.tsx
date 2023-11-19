import React from 'react'
import products from '@/public/db/products.json'
import styles from '@/styles/pages/order-status.module.scss'
import { OrderStatusComponents } from '@/components/order-status'
import { GlobalComponents } from '@/components/global'

const OrderStatus:React.FC<any> = (props) => {

  const handleProductFake = (id:number) =>{
    const item = products.find((p:any) => p.id === id)
    return item
  }

  return (
    <GlobalComponents.LayoutWithFooter className={styles.order_status} title='Order Status' meta={[]}>
      <OrderStatusComponents.Orders />
      <div className={styles.items}>
        {props.cart?.map((i:any) => <OrderStatusComponents.Item product={i} />)}
      </div>
    </GlobalComponents.LayoutWithFooter>
  )
}

export default OrderStatus
