import React from 'react'
import styles from '@/styles/components/details/global/comments/comment.module.scss'
import handleRating from '@/lib/handle-rating';

interface CommentProps{
  author:string;
  productName:string;
  isRight:boolean;
  rating:number;
  heading:string;
  text:string;
  votesUp:number;
  votesDown:number;
}

const Comment:React.FC<CommentProps> = ({author,productName,isRight,rating,heading,text,votesUp,votesDown}) => {
  return (
    <div className={styles.comment}>
      <div className={styles.about}>
        <h3 className='p4'>{author}</h3>
        <h3 className="p5">Reviewing</h3>
        <p className='p5'>{productName}</p>
        <div className={styles.recomendation}>
          {isRight 
            ? <div>
                <img src="/assets/icons/thumbs-up.png" alt="like" />
                <span className='p5'>I recommend this product</span>
              </div> 
            : <div>
                <img src="/assets/icons/thumbs-down.png" alt="like" />
                <span className='p5'>I don`t recommend this product</span>
              </div>
          }
        </div>
      </div>
      <div className={styles.comment_info}>
        {handleRating({rating}).map((r:string) => <img key={`comment-${r}`} src="/assets/icons/star.png" alt="star" />)}
        <h3 className="p5">{heading}</h3>
        <p className="p5">{text}</p>
        <div className={styles.votes}>
          <p className='p5'>Was this helpful?</p>
          <div>
            <img src="/assets/icons/thumbs-up-grey.png" alt="like" />
            <span className='p5'>{votesUp}</span>
          </div>
          <div>
            <img src="/assets/icons/thumbs-down.png" alt="dislike" />
            <span className='p5'>{votesDown}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
