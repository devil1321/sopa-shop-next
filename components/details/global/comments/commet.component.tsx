import React from 'react'

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

const Comment:React.FC<CommentProps> = () => {
  return (
    <div>
      
    </div>
  )
}

export default Comment
