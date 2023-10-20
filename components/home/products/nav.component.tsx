import React, { useEffect } from 'react'
import styles from '@/styles/components/home/products/nav.module.scss'

const Nav:React.FC<{categories:string[],handleCategory:(category:string) => void}> = ({categories,handleCategory}) => {

  const handleActive = (e:any) =>{
    const categories = document.querySelectorAll('.home__products-nav-category') as NodeListOf<HTMLDivElement>
    categories.forEach((c:HTMLDivElement) => c.classList.remove('home__products-nav-active-category'))
    e.target.classList.add('home__products-nav-active-category')
  }

  return (
    <div className={styles.nav}>
      <h3 className='h8'>Explore Model 000</h3>
      <div className={`${styles.categories} home__products-nav-categories`}>
        {categories?.map((category:string,i:number) => 
          <div onClick={(e:any) =>{ 
                handleActive(e)
                handleCategory(category)
               }} 
               key={`home__products-nav-category-${category}`} 
               className={`${styles.category} ${i === 0 ? 'home__products-nav-active-category' : null} home__products-nav-category p3`}>
              {category}
          </div>)}
      </div>
    </div>
  )
}

export default Nav
