import React from 'react'
import styles from '@/styles/pages/ambassadors.module.scss'
import { AmbassadorsComponents } from '@/components/amassadors'

const Ambassadors = () => {
  return (
    <div className={styles.ambassadors}>
      <AmbassadorsComponents.Details />
      <AmbassadorsComponents.Card />
      <AmbassadorsComponents.Images />
    </div>
  )
}

export default Ambassadors
