import React, { useState } from 'react'
import styles from '../../styles/components/nav.module.scss'
import Link from 'next/link'

interface ItemState {
  id:number;
  img:string;
  name?:string;
  footer:string;
  price?:string;
}

const Nav = () => {

  const [menuItems,setMenuItems] = useState<any[]>([
    [
      {
        id:1,
        img:'/assets/nav/men/model_000.png',
        name:'Model 000',
        footer:'Cushiony Comfort'
      },
      {
        id:2,
        img:'/assets/nav/men/model_001.png',
        name:'Model 001',
        footer:'Supportive & Durable'
      },
    ],
    [
      {
        id:3,
        img:'/assets/nav/woman/model_000.png',
        name:'Model 000',
        footer:'Cushiony Comfort'
      },
      {
        id:4,
        img:'/assets/nav/woman/model_001.png',
        name:'Model 001',
        footer:'Supportive & Durable'
      },
    ],
    [
      {
        id:5,
        img:'/assets/nav/accessories/accessory_000.png',
        footer:'Sopa Stretch Laces',
        price:12
      },
      {
        id:6,
        img:'/assets/nav/accessories/accessory_001.png',
        footer:'Sopa Everyday Mask',
        price:12
      },
    ],
   
  ])

  return (
    <div className={styles.nav}>
      <div className={styles.header}>Free US shipping on order $80+</div>
      <div className={styles.navigation}>
        <div className={styles.logo}>
          <img src="/assets/logos/sopa-logo-black.png" alt="logo" />
        </div>
        <div className={styles.menu}> 
        </div>
          <Link href="#">Men</Link>
          <Link href="#">Woman</Link>
          <Link href="#">Accessories</Link>
          <Link href="/about">About</Link>
          <Link href="/quiz">Some Finder Quiz</Link>
      </div>
      <div className={styles.controls}>
        <Link href="/help">Support</Link>
        <img src="/assets/icons/user.png" alt="user" />
        <img src="/assets/icons/cart.png" alt="user" />
      </div>
      <div className={styles.main_menu_wrapper}>
        <div className={styles.main_menu}>
          {menuItems.map((section:any) => {
            return section.map((i:ItemState) => <Item key={i.id} item={i} />)
          })}
        </div>
        <h3>Not Sure?</h3>
        <Link href="/quiz">Takse the Shoe Finder Quiz</Link>
      </div>
    </div>
  )
}

const Item:React.FC<any> = ({item}) => {
  return(
    <div className={styles.item}>
      <img src={item.img} alt="item-image" />
      {item?.name && <button>{item?.name}</button>}
      <h3><span>{item.footer}</span> {item?.price && <span>{item?.price}$</span>}</h3>
    </div>
  )
}

export default Nav
