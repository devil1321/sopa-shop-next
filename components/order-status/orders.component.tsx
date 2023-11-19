import React from 'react'
import styles from '@/styles/components/order-status/orders.module.scss'
import Link from 'next/link'

const Orders:React.FC<any> = (cart) => {
  return (
    <div className={styles.orders}>
      <h2 className="h5">Your Orders</h2>
      <Link href="/checkout/information" className='p5'>Start Shipping</Link>
    </div>
  )
}

export default Orders
