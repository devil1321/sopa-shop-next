import React from 'react'
import styles from '@/styles/components/community/intro.module.scss'

interface IntroProps{
    title:string;
    text:string;
}

const Intro:React.FC<IntroProps> = ({title,text}) => {
  return (
    <div className={styles.intro}>
      <h1 className='h5'>{title}</h1>
      <p className='p5'>{text}</p>
    </div>
  )
}

export default Intro
