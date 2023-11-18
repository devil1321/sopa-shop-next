import React, { useEffect, useState } from 'react'
import styles from '../../styles/components/global/nav.module.scss'
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

  const handleMenu = () =>{
    const menu = document.querySelector(`.${styles.menu}`) as HTMLDivElement
    if(!menu?.classList.contains('menu-open')){
      menu?.classList.add("menu-open")
      menu.style.display = 'flex'
    }else{
      menu?.classList.remove("menu-open")
      menu.style.display = 'none'
    }
  }

  const handleFixMenuSmall = () =>{
    const menu = document.querySelector(`.${styles.menu}`) as HTMLDivElement
    if(typeof window !== undefined){
      if(window.innerWidth < 1024){
        menu.style.display = 'none'
      }
    }
  }

  const handleOpenCart = () =>{
    const cart = document.querySelector(`.cart`) as HTMLDivElement
    cart.style.transform = 'translateX(0px)'
  }


  useEffect(()=>{
    handleFixMenuSmall()
  },[])

  return (
    <div className={styles.nav}>
      <div className={`${styles.header} p3`}>Free US shipping on order $80+</div>
      <div className={styles.nav_inner_wrapper}>
        <div className={styles.navigation}>
        <div className={styles.hamburger} onClick={()=>handleMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.logo}>
            <Link href="/home">
              <img src="/assets/logos/sopa-logo-black.png" alt="logo" />
            </Link>
          </div>
          <div className={styles.menu}> 
            <Link onClick={()=>handleCategory('men')} className='p4' href="#">Men</Link>
            <Link onClick={()=>handleCategory('woman')} className='p4' href="#">Woman</Link>
            <Link onClick={()=>handleCategory('accessories')} className='p4' href="#">Accessories</Link>
            <Link className='p4' href="/about">About</Link>
            <Link className='p4' href="/quiz">Some Finder Quiz</Link>
          </div>
          <div className={styles.controls}>
            <Link href="/help">Support</Link>
            <img src="/assets/icons/user.png" alt="user" />
            <img onClick={()=>handleOpenCart()} src="/assets/icons/cart.png" alt="user" />
          </div>
        </div>
        {isMenu && 
          <div className={styles.main_menu_wrapper}>
            <div className={styles.main_menu}>
              {menuItems[index].map((i:ItemState) => <Item key={i.id} item={i} />)}
            </div>
            <p className='p4'>Not Sure?</p>
            <Link className='u3' href="/quiz">Take the Shoe Finder Quiz</Link>
            <button onClick={()=>setIsMenu(false)}>Close</button>
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
