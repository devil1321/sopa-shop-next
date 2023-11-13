import React from 'react'
import styles from '@/styles/components/quiz/summary.module.scss'
import Link from 'next/link';

interface SummaryProps {
  weight:number;
}

const Summary:React.FC<SummaryProps> = ({weight}) => {
  return (
    <div className={styles.summary}>
      <h3 className="p4">As far as shoe fit goes, I typically;</h3>
      <div className={styles.result}>
        <p className={`p5 ${weight > 6 ?  styles.active : ''}`}>Men</p>
        <p className={`p5 ${weight > 12 ?  styles.active : ''}`}>Woman</p>
      </div>
      <Link href="/home">
        <button>Show Recomendation</button>
      </Link>
    </div>
  )
}

export default Summary
