import React from 'react'
import styles from '@/styles/components/quiz/intro.module.scss'

interface IntroProps {
  setStart:(isStart:boolean) => any
}

const Intro:React.FC<IntroProps> = ({setStart}) => {
  return (
    <div className={styles.intro}>
      <h3 className="p4">Sopa Shoe Selector Quiz</h3>
      <p className='p5'>Discover your ideal everyday shoe by taking our interactive quiz and finding out which Sopas model perfectly matches your personal needs and lifestyle in just a matter of minutes.</p>
      <button onClick={()=>setStart(true)}>Start Quiz</button>
    </div>
  )
}

export default Intro
