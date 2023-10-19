import React from 'react'
import styles from '@/styles/components/home/logos.module.scss'

const Logos:React.FC<{title:string;}> = ({title}) => {
  return (
    <div className={styles.logos}>
      <h2 className='h6'>{title}</h2>
      <div className={styles.place}>
        <img src="/assets/logos/logo-1.png" alt="" />
        <img src="/assets/logos/logo-2.png" alt="" />
        <img src="/assets/logos/logo-3.png" alt="" />
      </div>
    </div>
  )
}

export default Logos
