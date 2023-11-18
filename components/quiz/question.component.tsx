import React, { useEffect } from 'react'
import styles from '@/styles/components/quiz/question.module.scss'
import questions from '@/public/db/quiz.json'

interface QuestionProps{
  index:number;
  setIndex:(index:number) => any
  weight:number;
  setWeight:(weight:number) => any;
}

const Question:React.FC<QuestionProps> = ({index,setIndex,weight,setWeight}) => {

  const handleActive = (e?:any) =>{
    const answers = document.querySelectorAll('.answer') as NodeListOf<HTMLParagraphElement>
    answers.forEach((a:HTMLParagraphElement) => a.classList.remove(styles.active))
    if(e?.target){
      e.target.classList.add(styles.active)
    }
  }

  useEffect(()=>{
    handleActive()
  },[index])

  return (
    <div className={styles.question}>
      <h3 className="p4">{questions[index].question}</h3>
      {questions[index].answers.map((a:any,i:number)=>{
        if(i === 0){
          return <div className={styles.answer}>
                    <p className='answer p4' onClick={(e)=>{
                        setWeight(weight + a.weight)
                        setTimeout(() => {
                          setIndex(index + 1)
                        }, 1000);
                        handleActive(e)
                    }}>A</p>    
                    <p className='p5'>{a.answer}</p>
                 </div>
        }
        if(i === 1){
          return <div className={styles.answer}>
                    <p className='answer p4' onClick={(e)=>{
                        setWeight(weight + a.weight)
                        setTimeout(() => {
                          setIndex(index + 1)
                        }, 1000);
                        handleActive(e)
                    }}>B</p>    
                    <p className='p5'>{a.answer}</p>
                 </div>
        }
        if(i === 2){
          return <div className={styles.answer}>
                    <p className='answer p4' onClick={(e)=>{
                        setWeight(weight + a.weight)
                        setTimeout(() => {
                          setIndex(index + 1)
                        }, 1000);
                        handleActive(e)
                    }}>C</p>    
                    <p className='p5'>{a.answer}</p>
                 </div>
        }
      })}
      <div className={styles.percentage_wrapper}>
        <div className={styles.percentage} style={{width:index * 20 + "%"}}></div>
      </div>
    </div>
  )
}

export default Question
