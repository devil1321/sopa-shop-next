import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/global/cart.module.scss'
import Link from 'next/link'
import { useSelector,useDispatch } from 'react-redux'
import * as ShopActions from '@/controller/action-creators/shop.action-creators'
import { bindActionCreators } from 'redux'
import { State } from '@/controller/reducers/root.reducer'

const Cart = () => {

  const { products,cart,summary } = useSelector((state:State) => state.shop)
  const shopActions = bindActionCreators(ShopActions,useDispatch())

  const [percentage,setPercentage] = useState<number>(0)

  const handleClose = () =>{
    const cart = document.querySelector(`.${styles.cart}`) as HTMLDivElement
    cart.style.transform = 'translateX(100%)'
  }

  useEffect(()=>{
    shopActions.handleSummary(cart)
    setPercentage((summary / 1200) * 100)
  },[cart,summary])

  return (
    <div className={`${styles.cart} cart`}>
      <div className={styles.nav}>
        <h3 className="p4">Cart</h3>
        <img src="/assets/icons/close.png" alt="close" onClick={()=>handleClose()}/>
      </div>
      <h3 className={`p5 ${styles.shipping}`}>You are {1200 - summary}$ from shipping</h3>
      <div className={styles.percentage_wrapper}>
        <div style={{width:percentage + "%"}} className={styles.percentage}></div>
      </div>
      {cart?.map((i:any) => {
        return(
          <div className={styles.item}>
            <img src={i.details_images[0]} alt="img" />
            <div className={styles.details}>
              <div className={styles.header}>
                <h3 className="p5">{i.name}</h3>
                <h3 className="p5">${i.price * i.quantity}</h3>
              </div>
              <p className={`p5 ${styles.color}`}>Color: <div style={{backgroundColor:i.color}}></div></p>
              <p className="p5">Size:{i.size}</p>
              <div className={styles.quantity}>
                <div onClick={()=>{
                  shopActions.handleCartQuantity(i.id,cart,products,-1)
                  shopActions.handleSummary(cart)
                }} className='p5'>-</div>
                <div className='p5'>{i.quantity}</div>
                <div onClick={()=>{
                  shopActions.handleCartQuantity(i.id,cart,products,1)
                  shopActions.handleSummary(cart)
                }} className='p5'>+</div>
                <img onClick={()=>shopActions.handleRemove(i.id,cart,products)} src="/assets/icons/trash.png" alt="delete" />
              </div>
            </div>
          </div>
        )
      })}
      <div className={styles.summary}>
        <div className={styles.summary_header}>
          <h3 className="p5">Subtotal</h3>
          <h3 className="p5">${summary}</h3>
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
