import { GlobalComponents } from '@/components/global'
import { QuizComponents } from '@/components/quiz'
import styles from '@/styles/pages/quiz.module.scss'
import React, { useState } from 'react'

const Quiz = () => {

  const [isStart,setIsStart] = useState<boolean>(false)
  const [weight,setWeight] = useState<number>(0)
  const [index,setIndex] = useState<number>(0)

  return (
    <GlobalComponents.Layout className={styles.quiz} title="Quiz" meta={[]}>
      {!isStart 
        ? <QuizComponents.Intro setStart={setIsStart} />
        : index < 6 
          ? <QuizComponents.Question index={index} setIndex={setIndex} weight={weight} setWeight={setWeight} />
          : <QuizComponents.Summary weight={weight} />
      }
    </GlobalComponents.Layout>
  )
}

export default Quiz
