import React from 'react'
import styles from '@/styles/components/faq/item.module.scss'
import Link from 'next/link';

interface ItemProps{
  title:string;
  paragraphs:string[];
  withLink?:boolean;
}

const Item:React.FC<ItemProps> = ({title,paragraphs,withLink}) => {
  return (
    <div className={styles.item}>
      <h3 className="p4">{title}</h3>
      {paragraphs.map((p:string)=><p key={p} className='p5'>{p}</p>)}
      {withLink && <Link href="#" className='u3'>See more</Link>}
    </div>
  )
}

export default Item
