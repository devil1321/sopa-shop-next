import React from 'react'
import styles from '@/styles/components/community/item.module.scss'

interface ItemProps{
    img?:string;  
    profileImg:string;
    socialImg:string;
    name:string;
    email:string;
    comment:string;
    likes:number;
    date:string;
}

const Item:React.FC<ItemProps> = ({img,profileImg,socialImg,name,email,comment,likes,date}) => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <img src={profileImg} alt="profile" />
          <div className={styles.profile_info}>
            <p className='p5'>{name}</p>
            <p className='p5'>{email}</p>
          </div>
        </div>
        <img src={socialImg} alt="social" />
      </div>
      <p className='p5'>{comment}</p>
      <div className={styles.footer}>
        <div className={styles.likes}>
          <img src="/assets/icons/heart.png" alt="heart" />
          <span className="p5">{likes}</span>
        </div>
        <p className={`p5 ${styles.date}`}>{date}</p>
      </div>
      {img && <img src={img} alt="main-image" />}
    </div>
  )
}

export default Item
