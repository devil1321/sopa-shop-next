import React from 'react'
import styles from '@/styles/components/home/introduce/item.module.scss'
import Link from 'next/link'

const Item:React.FC<any> = ({title,product,isRight}) => {
  return (
    <div className={styles.item}>
      <h3 className='h8'>{title}</h3>
      <div className={`${styles.column}`} style={isRight ? {order:2}:{}}>
        <div className={styles.img}>
                <Link href="/details/[id]" as={`/details/1`}>
                  <img src={product.details_images[1]} alt="image-1" />
                </Link>
        </div>
        <div className={styles.img}>
                <Link href="/details/[id]" as={`/details/1`}>
                  <img src={product.details_images[2]} alt="image-2" />
                </Link>
        </div>
      </div>
      <div className={styles.main_image}>
              <Link href="/details/[id]" as={`/details/1`}>
                <img src={product.details_images[0]} alt="image-main" />
              </Link>
      </div>
    </div>
  )
}

export default Item
