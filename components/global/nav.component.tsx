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

  const [index,setIndex] = useState<number>(0)
  const [isMenu,setIsMenu] = useState<boolean>(false)
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


  const handleCategory = (category:string) =>{
    switch(category){
      case 'men':
         setIndex(0)
         setIsMenu(true)
        break
      case 'woman':
         setIndex(1)
         setIsMenu(true)
        break
      case 'accessories':
         setIndex(2)
         setIsMenu(true)
        break
      default:
        setIndex(0)
        setIsMenu(true)
    }
  }

  return (
    <div className={styles.nav}>
      <div className={styles.header}>Free US shipping on order $80+</div>
      <div className={styles.nav_inner_wrapper}>
        <div className={styles.navigation}>
          <div className={styles.logo}>
            <img src="/assets/logos/sopa-logo-black.png" alt="logo" />
          </div>
          <div className={styles.menu}> 
            <Link onClick={()=>handleCategory('men')} className='u1' href="#">Men</Link>
            <Link onClick={()=>handleCategory('woman')} className='u1' href="#">Woman</Link>
            <Link onClick={()=>handleCategory('accessories')} className='u1' href="#">Accessories</Link>
            <Link className='u1' href="/about">About</Link>
            <Link className='u1' href="/quiz">Some Finder Quiz</Link>
          </div>
          <div className={styles.controls}>
            <Link href="/help">Support</Link>
            <img src="/assets/icons/user.png" alt="user" />
            <img src="/assets/icons/cart.png" alt="user" />
          </div>
        </div>
        {isMenu && 
          <div className={styles.main_menu_wrapper}>
            <div className={styles.main_menu}>
              {menuItems[index].map((i:ItemState) => <Item key={i.id} item={i} />)}
            </div>
            <p className='p4'>Not Sure?</p>
            <Link href="/quiz">Take the Shoe Finder Quiz</Link>
          </div>}
      </div>
    </div>

  )
}

const Item:React.FC<{item:ItemState}> = ({item}) => {
  return(
    <Link href="#" as="#" className={styles.item}>
      <div>
        <img src={item.img} alt="item-image" />
        {item?.name && <button>{item?.name}</button>}
        <p className='p4'><span>{item.footer}</span> {item?.price && <span>{item?.price}$</span>}</p>
      </div>
    </Link>
  )
}

export default Nav
