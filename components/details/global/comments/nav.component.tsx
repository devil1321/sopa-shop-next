import React, { useState } from 'react'
import styles from '@/styles/components/details/global/comments/nav.module.scss'

const Nav = () => {

  const [filter,setFilter] = useState<string>('Highest Rating')
  const [isMenu,setIsMenu] = useState<boolean>(false)

  return (
    <div className={styles.nav}>
      <div className={styles.header}>
        <img src="/assets/icons/filter.png" alt="filter" />
        <div className={styles.edit}>
            <img src="/assets/icons/edit.png" alt="edit" />
            <span className='p5'>Write a Review</span>
        </div>
      </div>
      <div className={styles.footer}>
        <p className='p5'>3,205 reviews</p>
        <div className={styles.inner_nav}>
            <h3 className='p4'>Sort</h3>
            <div className={styles.dropdown}>
                <p className="p4" onClick={()=>setIsMenu(!isMenu)}>{filter}</p>
                {isMenu && 
                    <div className={styles.dropdown_menu}>
                        <p className='p4' onClick={()=>{
                            setFilter('Low Rating')
                            setIsMenu(false)
                        }}>Low Rating</p>
                        <p className='p4' onClick={()=>{
                            setFilter('Medium Rating')
                            setIsMenu(false)
                        }}>Medium Rating</p>
                        <p className='p4' onClick={()=>{
                            setFilter('Highest Rating')
                            setIsMenu(false)
                        }}>Highest Rating</p>
                    </div>}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
