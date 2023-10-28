import React from 'react'
import styles from '@/styles/components/order-status/orders.module.scss'
import Link from 'next/link'

const Orders = () => {
  return (
    <div className={styles.orders}>
      <h2 className="h5">Your Orders</h2>
      <p><span>0 orders placed in</span><span>Last 45 days <img src="/assets/icons/chevron-down.png" alt="chevron-down" /></span></p>
      <p>You haven’t placed any orders in this period.</p>
      <Link href="/" className='p5'>Start Shipping</Link>
    </div>
  )
}

export default Orders
