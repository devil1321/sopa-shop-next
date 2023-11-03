import React from 'react'
import styles from '@/styles/components/discount/item.module.scss'

interface ItemProps{
    img:string;
    title:string;
    paragraphs:string[];
    isRight:boolean;
}

const Item:React.FC<ItemProps> = ({img,title,paragraphs,isRight}) => {
  return (
    <div className={styles.item}>
      <img style={isRight ? { order:2 } : {}} src={img} alt="image" />
      <div className={styles.content}>
        <h3 className="h6">{title}</h3>
        {paragraphs.map((p:string) => <p key={p} className='p5'>{p}</p>)}
      </div>
    </div>
  )
}

export default Item
