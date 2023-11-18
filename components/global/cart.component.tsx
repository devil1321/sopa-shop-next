import React from 'react'
import styles from '@/styles/components/global/cart.module.scss'
import Link from 'next/link'

const Cart = () => {

  const handleClose = () =>{
    const cart = document.querySelector(`.${styles.cart}`) as HTMLDivElement
    cart.style.transform = 'translateX(100%)'
  }

  return (
    <div className={`${styles.cart} cart`}>
      <div className={styles.nav}>
        <h3 className="p4">Cart</h3>
        <img src="/assets/icons/close.png" alt="close" onClick={()=>handleClose()}/>
      </div>
      <h3 className={`p5 ${styles.shipping}`}>You are 63$ from shipping</h3>
      <div className={styles.percentage_wrapper}>
        <div className={styles.percentage}></div>
      </div>
      <div className={styles.item}>
        <img src="/assets/masks/details/detail-1.png" alt="img" />
        <div className={styles.details}>
          <div className={styles.header}>
            <h3 className="p5">Sopa Everyday Mask</h3>
            <h3 className="p5">$12.00</h3>
          </div>
          <p className="p5">Color:Black</p>
          <p className="p5">Size:Extra Small</p>
          <div className={styles.quantity}>
            <div className='p5'>-</div>
            <div className='p5'>1</div>
            <div className='p5'>+</div>
            <img src="/assets/icons/trash.png" alt="delete" />
          </div>
        </div>
      </div>
      <div className={styles.summary}>
        <div className={styles.summary_header}>
          <h3 className="p5">Subtotal</h3>
          <h3 className="p5">$12.00</h3>
        </div>
        <Link href="/order-status">
          <button>Continue to orders</button>
        </Link>
        <Link href="/checkout/information">
          <button>Continue to checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
