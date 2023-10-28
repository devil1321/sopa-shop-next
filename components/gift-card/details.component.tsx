import React, { useState } from 'react'
import styles from '@/styles/components/gift-card/details.module.scss'

const Details = () => {

  const [discount,setDiscount] = useState<number>(25)
  const [isMenu,setIsMenu] = useState<boolean>(false)

  return (
    <div className={styles.details}>
      <p className='h7'><span>Sopa Gift Card</span> <span>${discount}</span></p>
      <div className={styles.nav}>
        <div className={styles.nav_header}>
          <p className="p4">Value</p>
          <div>
            <span className='p5'>Style Guide</span>
            <img src="/assets/icons/alert.png" alt="alert" />
          </div>
        </div>
        <div className={styles.value}  onClick={()=>setIsMenu(!isMenu)}>
          <span className='p3'>${discount}</span>
          <img src="/assets/icons/chevron-down.png" alt="chevron-down" />
        </div>
        {isMenu && 
          <div className={styles.menu}>
            <p onClick={()=>{
              setIsMenu(false)
              setDiscount(25)
            }} className='p5'>25$
            </p>
            <p onClick={()=>{
              setIsMenu(false)
              setDiscount(50)
            }} className='p5'>50$
            </p>
            <p onClick={()=>{
              setIsMenu(false)
              setDiscount(75)
            }} className='p5'>75$
            </p>
            <p onClick={()=>{
              setIsMenu(false)
              setDiscount(100)
            }} className='p5'>100$
            </p>
          </div>}
      </div>
      <button>Add To Bag ${discount}</button>
      <div className={styles.footer}>
        <p className='p5'>Surprise your loved ones with the gift of comfort and style - give them the Sopa gift card, perfect for gifting the best everyday shoe, mask, and socks, </p>
        <p className='p5'>With easy checkout redemption instructions delivered straight to their inbox, and no added processing fees.</p>
      </div>
    </div>
  )
}

export default Details
