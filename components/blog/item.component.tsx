import React from 'react'
import styles from '@/styles/components/blog/item.module.scss'
import Link from 'next/link';

interface ItemProps{
    id:number;
    img:string;
    title:string;
    text:string;
}

const Item:React.FC<ItemProps> = ({id,img,title,text}) => {
  return (
    <div className={styles.item}>
      <Link href="/blog/[id]" as={`/blog/${id}`}>
        <img src={img} alt="blog-image" />
      </Link>
      <h3 className="p4">{title}</h3>
      <p className="p5">{text}</p>
    </div>
  )
}

export default Item
